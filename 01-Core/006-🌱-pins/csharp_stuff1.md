---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-10-05T11:09:48.000
---

# csharp_stuff1

#self/todo/pin

static double GetAreaOptimized(this Shape shape)

{
    switch (shape)
    {
        // 'when' followed by boolean expression
        case Rectangle rectangle when rectangle.Height is 0 || rectangle.Width is 0:
        

static double GetAreaExpression(this Shape shape)

{
    return shape switch
    {
        Rectangle rectangle => rectangle.Height * rectangle.Width,
        Circle circle => Math.PI * circle.Radius * circle.Radius,
        null => throw new ArgumentNullException(nameof(shape)),
        var unknownShape => throw new NotImplementedException(),
    };
}

shape switch

{
    Rectangle _ => "It's a rectangle!",
    Circle _ => "It's a circle!",
    _ => "I don't know what it is!"
};

var nextState = (GetShipmentState(), action, GetDaysSinceDelivery()) switch

{
    (State.Ordered, Action.CancelOrder, _) => State.Canceled,
    (State.Canceled, Action.CancelOrderCancellation, _) => State.Ordered,
    (State.Delivered, Action.Return, int elapsedDays) when elapsedDays <= 30 => State.Returned,
    (null, Action.Order, _) => State.Ordered,
    (var state, _, _) => state
};

static double GetAreaExpression(this Shape shape) => shape switch

{
    Rectangle { Width: 0 } => 0,
    Rectangle { Height: 0 } => 0,
    Circle { Radius: 0 } circle => circle.Radius,
    Rectangle rectangle => rectangle.Height * rectangle.Width,
    Circle circle => Math.PI * circle.Radius * circle.Radius,
    _ => throw new ArgumentException()
};

https://drakelambert.dev/2019/12/C%23-8-Switch-Expressions-with-Pattern-Matching.html
