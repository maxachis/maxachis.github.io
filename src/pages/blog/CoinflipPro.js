import React, {useEffect, useRef, useState} from "react";
import Config from "../../config";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
    LogarithmicScale
} from 'chart.js';
import {Bar, Line} from 'react-chartjs-2';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Markdown from 'markdown-to-jsx';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
    LogarithmicScale
);

// TODO: Add links from footnotes to their position on the page, and back from the footnotes.
// TODO: Change bins so that, if there are few enough, each bin corresponds to only one value
// TODO: Change so that graphs maintain their proportions even in mobile view

// Create enum for coin sides
const CoinSide = {
    HEADS: "Heads",
    TAILS: "Tails"
}

function Slider({ name, min, max, step, defaultValue, onChange }) {
    const [value, setValue] = useState(defaultValue);

    const handleChange = (event) => {
        const newValue = parseInt(event.target.value);
        setValue(newValue);
        onChange(newValue);
    };

    const containerStyle = {
        maxHeight: '30px',
        overflowY: 'auto',
    };


    return (
        <Col>
            <div className="slider-container" >
                <label htmlFor={name} className="slider-label" style={containerStyle}>
                    {name + " "}:
                </label>
                <hr/>
                <input
                    type="range"
                    id={name}
                    name={name}
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={handleChange}
                    className="slider"
                />
                <span className="slider-value">{value}</span>
            </div>
        </Col>

    );
}

// Function that takes an integer called "maxVal" and an integer called "numBins" and generates a list of equidistant ranges for the bins
const getBinRanges = (maxVal, numBins) => {
    // Create array of bins
    let binsArray = new Array(numBins + 1).fill(0);

    // Get bin size
    const binSize = Math.ceil(maxVal / numBins);

    // Create a list of the range of each bin
    const binRanges = binsArray.map((value, index) => {
        return (index * binSize) + " - " + (index * binSize + binSize - 1);
    });

    return binRanges;
}

// Function that takes a list of bin ranges and a list of values and returns a list of the number of values in each bin
const getBinValues = (binRanges, values) => {
    // Create array of bins
    let binsArray = new Array(binRanges.length).fill(0);

    // For each value, add to appropriate bin
    values.forEach(value => {
        // Get bin index
        const binIndex = binRanges.findIndex(range => {
            const rangeArray = range.split(" - ");
            return value >= parseInt(rangeArray[0]) && value <= parseInt(rangeArray[1]);
        });
        // Add to bin
        binsArray[binIndex]++;
    });

    return binsArray;
}


// Create button that, when clicked, activates the flipCoin function and returns the result
const CoinButton = ({ onClick }) => {
    return (
        <button onClick={onClick}>Flip Coin</button>
    );
}

// Button that restarts game
const RestartButton = ({ onClick }) => {
    return (
        <button onClick={onClick}>Restart</button>
    );
}

const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const ProgressBar = ({ value, max }) => {
    return (
        <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: (value / max) * 100 + "%" }} aria-valuenow={value} aria-valuemin="0" aria-valuemax={max}>{value}</div>
        </div>
    );
}

// Class that represents a player
class Player {
    constructor(name, hasTouch = false) {
        this.name = name;
        this.hasTouch = hasTouch;
        this.totalCoins = Number(1);
        this.availableCoins = Number(1);
    }

    getName() {
        return this.name;
    }

    // Getters for total coins, available coins, and whether the player has The Touch
    getTotalCoins() {
        return this.totalCoins;
    }
    getAvailableCoins() {
        return this.availableCoins;
    }
    getHasTouch() {
        return this.hasTouch;
    }

    // Methods that increase or decrease total and available coins (total coins cannot be decreased below 1)
    addTotalCoins(amount) {
        this.totalCoins += Number(amount);
    }
    addAvailableCoins(amount) {
        this.availableCoins += amount;
    }
    removeTotalCoins(amount) {
        this.totalCoins = Math.max(1, this.totalCoins - amount);
    }
    removeAvailableCoins(amount) {
        this.availableCoins = Math.max(0, this.availableCoins - amount);
    }

    // Method that resets available coins to total coins
    resetAvailableCoins() {
        this.availableCoins = this.totalCoins;
    }
}

const graphStyle = {
    minHeight: '200px',
    maxHeight: '300px',
    border: '1px solid black',
    padding: '10px',
};


// Component containing a bar graph of the given data
const BarGraph = ({data, labels, labelName}) => {

    // Create data object
    const dataObj = {
        labels: labels,
        datasets: [
            {
                label: labelName,
                data: data,
                backgroundColor: "rgb(75, 192, 192)",
                borderColor: "rgba(75, 192, 192, 0.2)"
            }
        ],
    };

    const options = {
        scales: {
            y:
                {
                    type: 'logarithmic',
                    display: true,
                },
        },
    };

    // Return graph
    return (
        <div  className="touchGraph">
            <h3>{labelName}</h3>
            <Bar
                data={dataObj}
                style={graphStyle}
                options={options}
            />
        </div>
    );
}

// Component containing a stacked bar graph of the given data
const StackedBarGraph = ({data, labels, labelName}) => {

    // Create data object
    const dataObj = {
        labels: labels,
        datasets: [
            {
                label: "Players with The Touch",
                data: data[0],
                backgroundColor: "rgb(75, 192, 192)",
                borderColor: "rgba(75, 192, 192, 0.2)"
            },
            {
                label: "Players without The Touch",
                data: data[1],
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgba(255, 99, 132, 0.2)"
            }
        ],
    };

    const options = {
        scales: {
            y:
                {
                    type: 'logarithmic',
                    display: true,
                },
        },
    };

    // Return graph
    return (
        <div width={"500px"} className="touchGraph">
            <h3>{labelName}</h3>
            <Bar
                data={dataObj}
                style={graphStyle}
                options={options}
            />
        </div>
    );
}

// Component containing a line graph of the average proportion of players with the touch in each bracket
const LineGraph = ({data, labelName}) => {
    // Create data object
    const dataObj = {
        labels: data.map((x, i) => i),
        datasets: [
            {
                label: labelName,
                data: data,
                fill: false,
                backgroundColor: "rgb(75, 192, 192)",
                borderColor: "rgba(75, 192, 192, 0.2)"
            }
        ],
    };

    const options = {
        scales: {
            y:
                {
                    min: 0,
                    max: 1,
                    stepSize: 0.1,
                    display: true,
                },
        },
    };

    // Return graph
    return (
        <div width={"500px"} className="touchGraph">
            <h3>{labelName}</h3>
            <Line data={dataObj}
                  style={graphStyle}
                  options={options}
            />
        </div>
    );
}

/*
    A function that runs a championship of Coinflip Pro, dependent on whether extra coins are enabled or not, and whether The Touch is enabled or not.
    Takes in the number of rounds, a boolean for whether extra coins are enabled, and a boolean for whether The Touch is enabled.
    If The Touch is enabled, also takes a number for how strong the touch is
    If The Touch is enabled, also takes a number for what percentage of players has the touch
    If extra coins are enabled, also takes a number for how many extra coins a player earns when they win a game
    If extra coins are enabled, also take a list of player objects
 */
const runChampionshipFull = (numRounds, extraCoinsEnabled, touchEnabled, touchStrength = 0, percentWithTouch = 0, extraCoins = 0, players = []) => {

    // Calculate number of contestants
    const numContestants = 2**numRounds;
    // Create list of proportion of players with the touch in each bracket
    const touchProportions = [];
    // Create list of how many extra coins a player earns in each bracket
    const extraCoinsList = [];
    // Create list of contestants
    let contestants = [];

    // If players are provided, add them to the contestants.
    if (players.length > 0) {
        // Add players to the contestants
        players.forEach(player => {
            contestants.push(player);
        });
    }
    // While there are not enough players, add new players. If The Touch is enabled, give the player The Touch with a certain probability
    while (contestants.length < numContestants) {
        if (touchEnabled) {
            contestants.push(new Player("Player " + (contestants.length + 1), randomInt(0, 100) < percentWithTouch));
        } else {
            contestants.push(new Player("Player " + (contestants.length + 1)));
        }
    }

    // Create a list of all players in this championship, and add all contestants to it
    const allPlayers = [];
    contestants.forEach(player => {
        allPlayers.push(player);
    });

    // If extra coins are enabled, create a new list, add the total coins of each player to that list, and add that list to the extra coins list
    if (extraCoinsEnabled) {
        extraCoinsList.push(contestants.map(player => player.getTotalCoins()));
    }
    // If touch is enabled add the proportion of players with the touch to the touch proportions list
    if (touchEnabled) {
        touchProportions.push(contestants.filter(player => player.getHasTouch()).length / contestants.length);
    }

    // Run rounds until the number of rounds is reached
    for (let i = 0; i < numRounds; i++) {
        // Reset available coins for each player
        contestants.forEach(player => {
            player.resetAvailableCoins();
        });

        // Create a new list of winners
        const winners = [];

        // Randomly pop two players from the contestants list and run a round
        while (contestants.length > 0) {
            // Pop two players from the contestants list
            const player1 = contestants.pop();
            const player2 = contestants.pop();

            // Run a round
            const [winner, loser] = runRound(player1, player2, extraCoinsEnabled, touchEnabled, touchStrength, extraCoins);

            // Add winner to winners list
            winners.push(winner);
        }

        // Add winners to the contestants list
        winners.forEach(winner => {
            contestants.push(winner);
        });

        // If extra coins are enabled, create a new list, add the total coins of each player to that list, and add that list to the extra coins list
        if (extraCoinsEnabled) {
            extraCoinsList.push(contestants.map(player => player.getTotalCoins()));
        }
        // If touch is enabled add the proportion of players with the touch to the touch proportions list
        if (touchEnabled) {
            touchProportions.push(contestants.filter(player => player.getHasTouch()).length / contestants.length);
        }

        // Set the next round's contestants to the winners of this round
        contestants = winners;
    }
    // Return the winner of the championship, the touch proportions, and all participating players
    return [contestants[0], touchProportions, allPlayers];
}

/*
    A function that runs a single round of Coinflip Pro, dependent on whether extra coins are enabled or not, and whether The Touch is enabled or not.
    Takes in two players, a boolean for whether extra coins are enabled, and a boolean for whether The Touch is enabled.
    If The Touch is enabled, also takes a number for how strong the touch is
    If extra coins are enabled, also takes a number for how many extra coins a player earns when they win a game
    Runs the round, and returns the winner and loser of the round
 */
const runRound = (player1, player2, extraCoinsEnabled, touchEnabled, touchStrength = 0, extraCoins = 0) => {

    /*
        Set variable for the probability of the first player winning.
        The default probability is 50%.
        If the first player has The Touch, the probability is increased by the touch strength.
        If the second player has The Touch, the probability is decreased by the touch strength.
     */
    // Convert touch strength to a number
    touchStrength = Number(touchStrength);

    let probability = 50;
    if (player1.getHasTouch()) {
        probability += touchStrength;
    }
    if (player2.getHasTouch()) {
        probability -= touchStrength;
    }
    
    // If extra coins are not enabled, simply run the round and return the winner and loser
    if (!extraCoinsEnabled) {
        // Run round
        if (randomInt(0, 100) < probability) {
            // Player 1 wins
            return [player1, player2];
        } else {
            // Player 2 wins
            return [player2, player1];
        }
    }

    // While both players have available coins, run the round, decreasing the available coins of the loser by 1
    while (player1.getAvailableCoins() > 0 && player2.getAvailableCoins() > 0) {
        // Run round
        if (randomInt(0, 100) < probability) {
            // Player 1 wins
            player2.removeAvailableCoins(1);
        } else {
            // Player 2 wins
            player1.removeAvailableCoins(1);
        }
    }

    // Increase the total coins of the winner by the extra coins
    if (player1.getAvailableCoins() > 0) {
        player1.addTotalCoins(extraCoins);
        player2.removeTotalCoins(extraCoins);
        return [player1, player2];
    } else {
        player2.addTotalCoins(extraCoins);
        player1.removeTotalCoins(extraCoins);
        return [player2, player1];
    }

}

const CoinflipProTotal = ({extraCoinsEnabled, touchEnabled}) => {
    // State for number of rounds
    const [rounds, setRounds] = React.useState(5);
    // State for number of contestants
    const [contestants, setContestants] = React.useState(2**5);
    // State for percent of contestants with The Touch
    let [touchPercent, setTouchPercent] = React.useState(20);
    // State for strength of The Touch
    const [touchStrength, setTouchStrength] = React.useState(5);
    // State for status of game
    const [status, setStatus] = React.useState("Not Started");
    // State for how many extra coins a player gets if they win
    const [extraCoins, setExtraCoins] = React.useState(1);
    // State for bins
    const [bins, setBins] = React.useState([[], []]);
    // State for bin ranges
    const [binRanges, setBinRanges] = React.useState([]);
    // State for number of tournaments
    const [tournaments, setTournaments] = React.useState(1);
    // A variable that stores the proportion of players with the touch in each bracket
    const [touchProportions, setTouchProportions] = React.useState([]);

    let extraCoinsVal = extraCoins;
    let roundsVal = rounds;
    let touchPercentVal = touchPercent;
    let touchStrengthVal = touchStrength;
    let tournamentsVal = tournaments;

    // Function that updates number of rounds, uses that to calculate number of contestants, and updates number of contestants
    const updateRounds = (newRounds) => {
        setRounds(newRounds);
        setContestants(Math.pow(2, newRounds));
    }

    // Button to run championship
    const RunChampionshipButton = () => {
        return (
            <button onClick={runChampionship}>Run Championship</button>
        );
    }

    const runChampionship = () => {
        if (touchEnabled) {
            setTouchPercent(touchPercentVal);
            setTouchStrength(touchStrengthVal);
        }
        if (extraCoinsEnabled) {
            setExtraCoins(extraCoinsVal);
            setTournaments(tournamentsVal);
        }
        updateRounds(roundsVal);

        setStatus("Running");

        // Set touchStrength parameter to 0 if touch is disabled
        let touchStrengthParam = touchEnabled ? touchStrengthVal : 0;
        // Set touchPercent parameter to 0 if touch is disabled
        let touchPercentParam = touchEnabled ? touchPercentVal : 0;
        // Set extraCoins parameter to 0 if extraCoins is disabled
        let extraCoinsParam = extraCoinsEnabled ? extraCoinsVal: 0;
        // Set tournaments parameter to 1 if extraCoins is disabled
        let tournamentsParam = extraCoinsEnabled ? tournamentsVal : 1;

        let winner = null;
        let touchProportions = null;
        let players = [];

        for (let i = 0; i < tournamentsParam; i++) {
            [winner, touchProportions, players] = runChampionshipFull(
                roundsVal, extraCoinsEnabled, touchEnabled, touchStrengthParam,
                touchPercentParam, extraCoinsParam, players);
        }

        // TODO: Fill in remainder, probably referencing lines 645-669
        // Print attributes of winner. If extraCoins enabled, print total coins. If touch enabled, print whether they have the touch. If both enabled, print both.
        if (extraCoinsEnabled && touchEnabled) {
            setStatus("Winner has " + winner.getTotalCoins() + " coins and " + (winner.getHasTouch() ? "has" : "does not have") + " The Touch.");
        } else if (extraCoinsEnabled) {
            setStatus("Winner has " + winner.getTotalCoins() + " coins.");
        } else if (touchEnabled) {
            setStatus("Winner " + (winner.getHasTouch() ? "has" : "does not have") + " The Touch.");
        }

        // Create a list containing the total coins of each player
        const extraCoinsList = players.map(player => player.getTotalCoins());
        // Create two lists, one containing the total coins of each player with the touch, and one containing the total coins of each player without the touch
        const extraCoinsListWithTouch = extraCoinsList.filter((value, index) => players[index].getHasTouch());
        const extraCoinsListWithoutTouch = extraCoinsList.filter((value, index) => !players[index].getHasTouch());

        // Get the maximum number of total coins any player has
        const maxCoins = Math.max(...players.map(player => player.getTotalCoins()));

        // Get the bin ranges, given the maximum number of total coins and the number of bins
        const binRanges = getBinRanges(maxCoins, 10);
        // Get the bin values for the extraCoinsListWithTouch
        const binsWithTouch = getBinValues(binRanges, extraCoinsListWithTouch);
        // Get the bin values for the extraCoinsListWithoutTouch
        const binsWithoutTouch = getBinValues(binRanges, extraCoinsListWithoutTouch);
        // Create a list containing binsWithTouch and binsWithoutTouch
        const bins = [binsWithTouch, binsWithoutTouch];

        // Set binRanges state
        setBinRanges(binRanges);
        // Set bins state to bins if extraCoins and touch are enabled
        if (extraCoinsEnabled && touchEnabled) {
            setBins(bins);
        }
        else if (extraCoinsEnabled) {
            setBins(binsWithoutTouch);
        } else if (touchEnabled) {
            setBins([]);
        }

        // Set touch proportions
        setTouchProportions(touchProportions);
    }

    const ChooseForm = () => {

        let updateTournamentsVal = (val) => {
            tournamentsVal = val;
        }
        const updateRoundsVal = (val) => {
            roundsVal = val;
        }
        const updateTouchPercentVal = (val) => {
            touchPercentVal = val;
        }
        const updateTouchStrengthVal = (val) => {
            touchStrengthVal = val;
        }
        const updateExtraCoinsVal = (val) => {
            extraCoinsVal = val;
        }
        return (
            <div className="form-group">
                <Container>
                    <Row>
                        {touchEnabled && <Slider name={"Touch Strength"} min={0} max={50} step={1} value={touchStrength} onChange={updateTouchStrengthVal} defaultValue={touchStrength}/>}
                        {touchEnabled && <Slider name={"% Touch contestants"} min={0} max={100} step={1} value={touchPercent} onChange={updateTouchPercentVal} defaultValue={touchPercent}/>}
                        {extraCoinsEnabled && <Slider name={"Extra coins per win"} min={0} max={10} step={0.1} value={extraCoins} onChange={updateExtraCoinsVal} defaultValue={extraCoins}/>}
                        <Slider name={"Number of rounds"} min={1} max={15} step={1} value={rounds} onChange={updateRoundsVal} defaultValue={rounds}/>
                        {extraCoinsEnabled && <Slider name={"Number of tournaments"} min={1} max={10} step={1} value={tournaments} defaultValue={tournaments} onChange={updateTournamentsVal} />}
                    </Row>
                </Container>
            </div>
        );
    }

    const ChooseGraph = () => {
        // If extra coins and touch are enabled, return a stacked bar graph
        if (extraCoinsEnabled && touchEnabled) {
            return (
                <StackedBarGraph
                    data={bins} labels={binRanges} labelName={"Proportion of Players With And Without The Touch And Number of Extra Coins"} />
            );
        } // If only extra coins are enabled, return a bar graph
        else if (extraCoinsEnabled) {
            return (
                <BarGraph
                    data={bins} labels={binRanges} labelName={"Distribution of extra coins among players"} />
            );
        } // If only touch is enabled, return a line graph
        else if (touchEnabled) {
            return (
                <LineGraph
                    data={touchProportions} labelName="Proportion of players with The Touch" />
            );
        }
    }

    return (
        <BorderedDiv>
            <ChooseForm/>
            <p>Number of Contestants: {contestants}</p>
            <p>{status}</p>
            <RunChampionshipButton/>
            <ChooseGraph/>
        </BorderedDiv>
    )
}

// Hook for game "CoinflipPro"
const CoinflipProGame = () => {
    // Maximum number of rounds
    const maxRounds = 15;
    // Maximum number of contestants
    const maxContestants = 2**maxRounds;
    // State for outcome of last flip
    const [lastFlip, setLastFlip] = React.useState(null);
    // State for current round
    const [round, setRound] = React.useState(1);
    // State for contestant number
    const [contestant, setContestant] = React.useState(randomInt(1, maxContestants));
    // State for game status
    const [status, setStatus] = React.useState("Game has not started yet.");

    // Function for handling logic of flipping coin
    const flipCoin = () => {
        // Get result of coinflip (50% chance of heads, 50% chance of tails)
        const result = randomInt(0, 1) === 0 ? CoinSide.HEADS : CoinSide.TAILS;
        setLastFlip(result)
        // If result is heads, increment round
        if (result === CoinSide.HEADS) {
            // If last round, announce contestant is winner
            if (round === maxRounds) {
                // Update status
                setStatus("Contestant " + contestant + " won round " + round + "! Contestant " + contestant + " is the winner!");
                return
            }
            // Otherwise, update status
            setRound(round + 1);
            // Update status
            setStatus("Contestant " + contestant + " won round " + round + "! Advancing to next round...");
        }
        // Otherwise, reset round
        else {
            setRound(1);
            // Update status
            setStatus("Contestant " + contestant + " lost round " + round + "! Resetting to round 1...");
        }
    }

    // Function for resetting game states
    const resetGame = () => {
        setLastFlip(null);
        setRound(1);
        setContestant(randomInt(1, maxContestants));
        setStatus("Game has not started yet.");
    }

    // Button for flipping coin
    const flipButton = <CoinButton onClick={() => setLastFlip(flipCoin())} />;
    // Button for restarting game
    const restartButton = <RestartButton onClick={resetGame} />;
    // Div showing current status of game
    const statusDiv = <div id="status">{status}</div>;

    // Return game
    return (
        <div>
            <p>Welcome to the Coinflip Pro International Championship (CPIC)! As contestant {contestant} of {maxContestants}, you are facing off against the elites of the Coinflip Pro world. Will you win it all? Or face devastating defeat?</p>
            <p>Contestant: {contestant}</p>
            <ProgressBar value={round} max={maxRounds} />
            <p>Round: {round} / {maxRounds}</p>
            <p>Status: {statusDiv}</p>
            <p>{flipButton}</p>
            <p>{restartButton}</p>
        </div>
    )
}

// Module that formats text in the style of a footnote
const Footnote = ({ children }) => {
    return (
        <div style={{ fontSize: "0.8em" }}>
            {children}
        </div>
    );
}


// Module that returns bordered div
const BorderedDiv = ({ children }) => {
    return (
        <div style={{ border: "1px solid black" }}>
            {children}
        </div>
    );
}
// Function to open file in local directory, given file name
function openFile(fileName) {
    // Create new XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // Open file
    xhr.open("GET", fileName, false);
    // Send request
    xhr.send();
    // Return response
    return xhr.responseText;
}

const imageStyle = {
    maxWidth: "500px",
    width: '100%',
    height: '50%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const JohnSmithLogo = () => {
    return (
        <div>
            <img style={imageStyle} src={Config.BLOG.images.JohnSmithLogo} alt="John Smith Logo" />
        </div>
    );
}

const AverageProportionTouchGraph = () => {
    return (
        <div>
            <img style={imageStyle} src={Config.BLOG.images.average_proportion_touch} alt="Average Proportion Touch Graph" />
        </div>
    );
}

// Create ReactJS module for Coinflip Pro page
const CoinflipPro = () => {

    const overrides = {
        CoinflipProGame: {component: CoinflipProGame},
        JohnSmithLogo: {component: JohnSmithLogo},
        CoinflipProTotal: {component: CoinflipProTotal},
        AverageProportionTouchGraph: {component: AverageProportionTouchGraph},
        Footnote: {component: Footnote},
    }

    return (
        <div className={"page-container  text-block-resume"}>
            <Markdown options={{ overrides }}>
                {openFile(Config.BLOG.blog_text)}
            </Markdown>
        </div>
    );
}

// Export Coinflip Pro module
export default CoinflipPro;
