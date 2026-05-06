export const bookingEmail = "shahzad890.it@gmail.com";

const meetingTitle = "Office Add-in Discovery Call";
const meetingLocation = "Microsoft Teams / Online";

const getNextBusinessSlot = () => {
  const slot = new Date();
  slot.setDate(slot.getDate() + 1);
  slot.setHours(15, 0, 0, 0);

  const day = slot.getDay();
  if (day === 6) {
    slot.setDate(slot.getDate() + 2);
  }
  if (day === 0) {
    slot.setDate(slot.getDate() + 1);
  }

  return slot;
};

const toCalendarDate = (date: Date) => date.toISOString().replace(/\.\d{3}Z$/, "Z");

export const buildOutlookBookingUrl = () => {
  const start = getNextBusinessSlot();
  const end = new Date(start.getTime() + 30 * 60 * 1000);

  const body = [
    "Hi Shahzad,",
    "",
    "I would like to schedule a discovery call for an Office add-in project.",
    "",
    "Project type:",
    "Company:",
    "Key workflow:",
    "Timeline:",
    "",
    "Thanks.",
  ].join("\n");

  const params = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: meetingTitle,
    startdt: toCalendarDate(start),
    enddt: toCalendarDate(end),
    location: meetingLocation,
    body,
    attendees: bookingEmail,
    to: bookingEmail,
  });

  return `https://outlook.office.com/calendar/0/deeplink/compose?${params.toString()}`;
};

export const outlookBookingUrl = buildOutlookBookingUrl();
