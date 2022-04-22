---
date_created: +002020-09-15T11:20:24.000
date_modified: +002021-10-05T11:39:06.000
---

# Test Desiderata - Kent Beck - Medium

#self/todo/pin

Clipped from: https://medium.com/@kentbeck_7670/test-desiderata-94150638a4b3

    • Isolated — tests should return the same results regardless of the order in which they are run.
    • Composable — if tests are isolated, then I can run 1 or 10 or 100 or 1,000,000 and get the same results.
    • Fast — tests should run quickly.
    • Inspiring — passing the tests should inspire confidence
    • Writable — tests should be cheap to write relative to the cost of the code being tested.
    • Readable — tests should be comprehensible for reader, invoking the motivation for writing this particular test.
    • Behavioral — tests should be sensitive to changes in the behavior of the code under test. If the behavior changes, the test result should change.
    • Structure-insensitive — tests should not change their result if the structure of the code changes.
    • Automated — tests should run without human intervention.
    • Specific — if a test fails, the cause of the failure should be obvious.
    • Deterministic — if nothing changes, the test result shouldn’t change.

Predictive — if the tests all pass, then the code under test should be suitable for production.
