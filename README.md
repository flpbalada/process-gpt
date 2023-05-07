# Process GPT
Let's help people automate boring processes with AI.

## Human
A human is an abstract of a worker capable to predict a completion according to the given examples of knowledge and related outcome.

## Agent
An agent is a worker with skills such as text comprehension, content parsing, and more. The skills are implemented using AI. 

## Agent – Cancel Order With ID
As a customer support agent at an ecommerce store, I frequently handle order cancellation requests manually. Automating this process allows me to focus on customers who require special attention, which can enhance their overall experience (CX) and create more sales opportunities.

The agent is dedicated to receiving a text and determining whether it is a request for order cancellation.
- The text must clearly convey the intention to cancel an order. 
- The text must include an order ID. 
- The agent must respond to the request outcome in natural language. 
- If the text doesn't meet the conditions, then the agent will respond that the order wasn't resolved. 
- If the text meets the conditions, then the agent will call a callback function that returns a boolean. 
- The callback function is used to interact with third-party systems such as CRM or product CMS, so that we can cancel the order if it exists.
- If the callback function returns false, then the agent will respond that the order wasn't resolved. 
– If the callback function returns true, then the agent will respond that the order was resolved. 

### Improvements / Ideas
- To make the agent's response more personalized to the situation, consider extending the callback function to include the reasons for order cancellation.