# Coinflip Pro and the Asymmetries of Wild Success

Let's do a thought experiment.

Flipping a coin is a time-honored tradition dating back to when some brilliant human realized that the combination of small disks and fingers produces a whole new category of fun and decision theory. In this thought experiment, coin flipping has been, as my Github CoPilot suggests, "taken to the next level", and turned into a massive international sport, called Coinflip Pro. In the game, a coin is flipped, the players call out heads or tails, and whichever called the side that faces up wins.

The entire point of the game is that one person wins and one person loses. There are no ties. We're going to ignore bizarre scenarios like the coin landing on its edge, or unimportant technicalities like whether any coin made in our flawed mortal coil has a *perfect* 50/50 probability of landing on either side. Much like Jesus's parables, it doesn't matter if a man was actually robbed while en-route to Jericho from Jerusalem and was rescued by a Samaritan after being passed over by a Levite and a priest (who presumably had a bar to walk into).

In this alternate universe, top Coinflip Pro players from around the world get together once a year to compete in the Coinflip Pro International Championship, or CPIC. Every year, CPIC consists of 15 rounds of competition for 32768 participants. In each round, the winners of the previous round are paired up against each other, and the winner of the pair advances to the next round. The winner of the final round is crowned the CPIC Champion.

To illustrate this, I've created the following small app for testing your skills in the CPIC. Try to beat your high score!

<CoinflipProGame />

Absolutely thrilling.

At the end of the tournament, there's one winner: John Smith, which is the name I got when I asked ChatGPT "Give me the most boring first and last name imaginable." John Smith (who further prompting from ChatGPT informed me was a 45-year old Caucasian accountant living in a Midwestern suburb prior to winning the CPIC), becomes an unexpected rags-to-riches success story. Inundated with interviews, an inspiring documentary about their journey, and a wealth of sponsorships, John becomes a household name. I have included Dall-E's interpretation of the logo for John Smith below. It should be noted that Dall-E does not know how to spell.

<JohnSmithLogo />

Leveraging his success, John embarks on a motivational speaking tour, takes up a merchandising deal, and publishes the bestselling and ghostwritten book "Mastering Coinflip Pro: Strategies for Dominating the Game" (quote from ChatGPT's summary: "With step-by-step instructions and clear diagrams, Mastering Coinflip Pro will help you develop a winning mindset and take your gameplay to the next level"). As CPIC 2024 rolls into view, audiences around the world are awaiting John's return to the Coinflip Stadium, with betting markets placing him as a heavy favorite to win.

John loses. In the first round.

What happened? Did the success get to John's head? Was he sabotaged? Was the now 46-year-old Binky starting to get too old to handle the high-intensity world of Coinflip Pro? The answer is obviously no. John won CPIC 2023 because, per the rules of the game, *someone* had to. John lost in the first round of CPIC 2024 because Coinflip Pro is a game of chance.

This is obviously an absurd scenario. In real life, people don't attribute skill and positive personality traits to the winners of random events<sup>1</sup>. More common are scenarios where people attribute skill and positive personality traits to the winners of events which are *mostly* random.

This is obviously an absurd scenario. In real life, people don't attribute skill and positive personality traits to the winners of random events<sup>1</sup>. More common are scenarios where people attribute skill and positive personality traits to the winners of events which are *mostly* random.

Let's modify Coinflip Pro a bit. In this version, the rules are mostly the same, except now a random assortment of players have what I'll call "The Touch", which is a 5% extra chance of winning any Coinflip, meaning that through some bizarre quirk in reality that I don't have the patience to invent an explanation for, the player has a 55% chance to win and the other player has a 45% chance (if two players with The Touch play against each other, their Touches cancel out and they both have a 50% chance of winning).

Let's make another app. In this case, instead of playing the game yourself, you decide how many players have "The Touch", and how strong it is, and then run the tournament.

 <CoinflipProTotal extraCoinsEnabled={false} touchEnabled={true} />

To better illustrate this concept, I decided to make, oh, about 65 million coin flips. More specifically, I ran 1000 15-round CPIC tournaments (again, 32768 players each). I calculated the average number of players with The Touch in each round across all tournaments. These are the results.

<AverageProportionTouchGraph/>

What we see is that, as the rounds progress, the number of players with The Touch gets higher and higher, because they're more likely to win the game. But even when some players are literally supernaturally better at the game, you're not likely to see the actual best players win the tournament. With more rounds, sure, the best will rise to the top, and even as is they're disproportionately likely to win given their initial numbers. But if you think you can guess at whether the winning player has the touch by whether they actually won, you may be surprised. Unless your timespan is long enough, the most likely winning player isn't the minority of the best, but the majority of the unexceptional.

More to the point, what happens when someone gets an early advantage, the sort that makes it easier for them to get more of an advantage the next time?

Let's revise our scenario a bit. Suppose whenever you win a game, you get an extra coin that you can use when you lose a toss. So if you play a game and you lose one toss, you can use your extra coin for a second chance. Every time you win a game (not just one toss *in* the game), you get another extra coin. Every time you lose a game, you lose an extra coin. When you use an extra, you can't use it again in that game, but you can use it in another game, even another Championship. Why is this permitted? I don't know, I ask God the same question every day.

Now, the results of the first championship with these rules won't be very interesting. The winning player will have 15 coins, because they won 15 games. But what we're going to do is run another tournament, only with 50% of the players in the previous tournament removed (we'll assume they all died. Horribly). Then we'll fill in the newly emptied space with new players, all starting with only one coin.

So let's run another simulation. Just as a heads up, this is going to get stupid very quickly.

<CoinflipProTotal extraCoinsEnabled={true} touchEnabled={false} />

As it turns out, the best strategy for winning Coinflip Pro is to have already won. That might be a hard sell on the inspirational tour.

Finally, for Gits and Shiggles, I combine both "The Touch" and "Extra Coin" Coinflip Pro into "Extra Touch" Coinflip Pro, in the app below.

<CoinflipProTotal extraCoinsEnabled={true} touchEnabled={true} />

Pay attention to the logarithmic scale, there. There's not a pretty way to compare two different groups that might have vastly different population sizes.

Why am I doing this? Not because I like to put myself through pain (or at least not only because of that), but because it's useful to see how extra chances and raw luck can give you success even when you're dealing with someone who is, in objective terms, better than you at something. In the real world, things are muddier: We don't know how much of "The Touch" someone has, we don't know how many extra coins someone has or how much they're worth. Most of the time, we don't even know all the rules of the game. But we often think we know them. We attribute innate characteristics to people based on their external success, when we don't actually know how much that's the truth. This is even more so in the case of celebrities, politicians, and businesspeople, where we have limited insight into their lives and what insight we do have is often curated by them in their favor. A high-flying CEO may say they work 100 hours a week and that's how they got to be successful, but we don't know if they're telling the truth, whether that's even why they became so successful, or how much of that "work" was actual work vs. sitting in the office scrolling on Twitter to see what people are saying about them.<sup>2</sup>

Presumably, there is a way to actually determine the degree that someone's innate qualities, irrespective of their environmental advantages, contributes to their success. We just don't know it. Nor is it clear what exactly counts as innate versus environment. A person's ambition and sense of optimism might count as innate, but then the fact that they grew up in a middle class household with no major childhood traumas might not, even if the latter contributed to the former.

We can talk about a number of different reasons for why we think like this. We can talk about the fundamental attribution error, where we attribute someone's behavior or position to their innate characteristics. We can talk about survivorship bias, where we focus on the people who very publicly succeeded and not the people who very privately did not. We can talk about the impact of race or government regulation or the state of the economy. We can talk about the converse of this whole thought experiment where we dismiss a person's raw skill and hard work by making reference to their circumstances.

Or I can go to my local qualifying tournament for the CPIC. I haven't made it the last five years, but I really think I'm due for a win.

<Footnote><sup>1</sup>With the exceptions of lotteries, casinos, some financial investments, and cryptocurrency speculation.</Footnote>
<Footnote><sup>2</sup>And if you think I'm talking about a particular high-flying CEO here, let me assure you that it is exactly the one you're thinking of and couldn't possibly be anyone else</Footnote>