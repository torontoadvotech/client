<!-- This PR template was borrowed from the fine folks at The Collab Lab/Zapier https://the-collab-lab.codes/ -->

_For an example of how to fill this template out, [see this Pull Request](https://github.com/the-collab-lab/tcl-3-smart-shopping-list/pull/44)._

## Description

Add mentorship information page

## Related Issue

https://torontoadvotech.atlassian.net/browse/WS-10

## Acceptance Criteria

Update mentorship page to match the design mockups found in figma

Create a MentorshipCards component that holds the two cards that link to “Join as a Mentee” and “Join as a Mentor”. This component should be used on both the homepage and mentorship page.

Mentorship page should be responsive

Note: the heading "Join a supportive network with our Worksmart Mentorship Program" and the slack section at the bottom are not present in the mobile mockup, but I decided to display them on mobile for consistency (let me know if I should not display them).

## Type of Changes

|     | Type                       |
| --- | -------------------------- |
|     | :bug: Bug fix              |
| ✓   | :sparkles: New feature     |
| ✓   | :hammer: Refactoring       |
|     | :100: Add tests            |
|     | :link: Update dependencies |
|     | :scroll: Docs              |

## Updates

### Before

### After

## Testing Steps / QA Criteria

Go to route path /mentorship to view mentorship page

Confirm the page resembles mockups in figma and is responsive (from 320px and above)

Confirm the component MentorshipCards is being used on both the homepage and mentorship page
