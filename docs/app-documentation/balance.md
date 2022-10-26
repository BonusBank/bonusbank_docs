---
sidebar_position: 1
id: app-balance
title: Balance
description: How tokens and balance work.
keywords:
  - tokens
  - balance
  - incentives
last_update:
  date: 10/14/2022
---

# Screen I: Balance

<p align="center"> What is the BonusBank Balance? What can I find in it? How does it work? Keep reading and you will find the answer to these questions.</p>

### What is the Balance and what data do we find there?

The **Balance** is one of the app's four home screens, where **we can see all the tokens we own as a member and manage as a leader**.

Based on this definition **Leader Tokens** are visible in the balance, but **they are not included in our account as ours**, because we need to distribute them to other members (we only act as an intermediary). In the event that our tokens are not leader tokens (i.e. member tokens), we get information related to **how the token is configured to behave**. Currently, the possible behavior of tokens (and the information we see in the associated balance) is as follows:

- **One-way**. These are **one-way tokens**. In this case, they make only one journey: from the sender to the recipient, to be then placed on the recipient's account according to the defined criteria. For this we can currently **see two information items in the balance**.

- **Estimated value**. When it comes to a **Hard Token** (you can see what a Hard Token is in the Tokens info item) we see, together with the number we have in our account, the (conditional) **estimated value in the currency that our company chose** (and will be exchanged by the company for that value after the condition has been met (such as the end of a date, achieving a goal, etc.)

- **Ranking**. For **Tokens** that **measure skills** (so-called Expertise tokens in the BonusBank environment), we can know (depending on how many Tokens we have) in what **percentile** (Top5 , Top20, Top50, etc.) we are with respect to the total of colleagues in our Space or at our team level.

- **Circular**. These are tokens that **must always be in motion** and generate a constant flow. For that reason, it is not **valuable to have** a large amount of this type of Tokens in the account, because what counts is **the flow that goes through your account** (a large amount that has come in and also left). Therefore, we get information in the balance about **how many of the tokens we received we can still transfer** (as there may be restrictions that prevent everything one has sent from being sent; you can see the different cases in this info item in the section " Restrictions of shipments")

### What does the balance look like

To illustrate what was explained about the Balance and the behavior of the Tokens, we now show an example of how you can see your own Balance in the application and so we can describe in more detail its variables:

<p align="center"><img src={require('./img/balancescreen.png').default} alt="drawing" width="250"/></p>

If you look at the top of the screen, you'll see a slider which allows you to select between two options:

- **Paid**. In this section you will find the tokens you have **recieved** and are already **confirmed and payed**.

- **Rewarded**. Here there are the tokens that have been sended to you, but **haven't yet been approved** by your plan manager.

As you can see, there are different types of tokens that are grouped by Token Pack; so if we have multiple token packs, the token types from those different packs will not be mixed up.

In addition, at the top of each token pack, the tokens we have as leaders (if applicable) appear framed with a blue border and with the word ‘leader’ in parentheses for easy identification\*.

For each available token , there are two variables visible in the global balance:

- First, if it is a **circular token, it will** be the number **of** tokens **"Available"** to give away. On the other hand, if it is a **unidirectional token**, it sayst **"Received**" because these tokens cannot be forwarded.

- Second, there are different values ​​depending on whether it is a circular or unidirectional token (according to the criteria outlined above).

The **"+info"** button gives us **more** detail about the token itself (via a complete description), by whom and to whom it can be transfered, the limit (if any), etc.

<p align="center"><img src={require('./img/bbpopup.png').default} alt="drawing" width="250"/></p>

Brilliant! We know everything about our balance, let's go to the Targets?

<sup><sup>* If you've wondered what logic is followed at the sample content level in the case of multiple active token packs, it's very simple: the token pack with the most leader tokens is above and in case of a tie we always see the pack with lower balance of tokens at the top.</sup></sup>
