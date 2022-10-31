---
sidebar_position: 6
id: schedules
title: Plans
description: What is a Plan?
keywords:
  - plan
  - periods
  - rewards
last_update:
  date: 10/21/2022
---

# Plans

<p align="center">This is the key to control all the tokens that are sent: the Plans!</p>

### What is a plan?

In BonusBank, to send plans and control the times when **tokens** can be sent and how many, we use **Plans**.
Plans are token-related **periods** where people can send specific tokens.
A Plan has an **owner** (the manager), can be associated with a team, and **will always have** a starting date and an ending date.
There are two types of Plans:

1. The **Recognition** plan. This type of plan is based on the feedback tokens. These tokens are meant to give feedback about the performance of a team or an employee, and you can select various tokens for the plan from different feedback categories.
2. The **Incentive** plan. This type of plan is based on the incentives token types. These **tokens** are different, because they can be **exchanged** by cash or prices. In this type of plan you will select a token, and it's **amount**, both in unities and cash. Additionally, the Incentive plans need to be **validated** by their manager once they have ended in order to check if the **condition** is accomplished. If the plan is valid, the tokens will be sent. Managers can also **deny** these plans if they think it is necessary. Once the plan is confirmed and the tokens are sent, the manager will **confirm** the plan, as all tokens are sent.

<p align="center"><img src={require('./img/plan-type.png').default} alt="drawing" width="800"/> </p>

Now that we've got the plan types covered, let's head to another key characteristic of the plans: Periods.

### What are the Periods?

Periods allow Plans to exist in a certain time, and stop working once they have expired. Managers can not only set the start and end of the period, but can also determine its frequency!

A period is a time when a **fixed amount of tokens** can be sent by the **leader or everybody**. There will be a limited number of tokens for each one to send per period, and managers will be the ones who set this value. Also, they will determine it's **frequency, monthly or weekly** and the total amount of tokens will be assigned. The Plan will be separated by these periods.

Now that we have explained **WHAT** are the Plans, let's see **HOW** can we bring them to reality.

### How Plans are made

To create a new Plan, we have to go to the (+) button on top of the app, and we'll enter a form screen. Let's see step by step what information we need to provide:

1. **Configure**

   - **Type**: In the Plans screen, the first thing we must define is what type of plan do we want to create. If we want a plan to give feedback to the employees, Recognition plan will be the one. If we want to give exchangeable tokens, an Incentive plan will suit better.

   - **Frequency**: Once we've got the plan type, we'll go in detail about the timing of the plan. We have to select the frequency of each round of the plan: **Monthly** or **Weekly**.

   - **Who can send tokens**: Once the timing is defined, we have to decide WHO will be able to send tokens. Do we want all the **members** to send tokens? Or only the **leaders**?

   - **Ending Date**: Here we set when the plan will be disabled and will stop running the periods.

<p align="center"><img src={require('./img/plan-edit1.png').default} alt="drawing" width="300"/> </p>

2. **Select Tokens**

   - **Recognition Plans**: In the recognition plans, we will see in this screen each feedback category available for our plan. Inside each category, we can add the tokens that we want for our feedback plan.
   - **Incentives**: If we selected a Incentives plan, we will see here the Incentives categories and their tokens. If we add a token, a pop-up will be displayed. In this pop-up, we select the amount of the token.

   <p align="center"><img src={require('./img/plan-edit2-recognition.png').default} alt="drawing" width="300"/>  &nbsp; &nbsp; &nbsp; <img src={require('./img/plan-edit2-incentives.png').default} alt="drawing" width="300"/> </p>

3. **Details**
   In this screen, we just set the title and the description of our plan. However, if we have an Incentive plan, we will have to set a **Condition**.
   A condition is a statement about what is needed to do in order to **earn the value** of the token.
   Also, in the Incentives plans, we will also have an option to automatically **confirm** the plan once is ended. Confirming the plan means that the tokens earned will be sent to its owners.

<p align="center"><img src={require('./img/plan-edit3-recognition.png').default} alt="drawing" width="300"/>  &nbsp; &nbsp; &nbsp; <img src={require('./img/plan-edit3-incentives.png').default} alt="drawing" width="300"/> </p>

<p align="center">
  <video controls width="300">
    <source src={require('/plans-recognition.mp4').default} />
  </video>
  <span> </span>
  <video controls width="300">
    <source src={require('/plans-incentives.mp4').default} />
  </video>
</p>

Our Plan is done! Now you can use it to make transfers and **start sending tokens**!
