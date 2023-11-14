import { render, screen, fireEvent, wait } from "@testing-library/react";
import App from "./App";

test("renders title, spaceStagram", () => {
  render(<App />);
  const titleElement = screen.getByRole("heading", { name: "spaceStagram" });
  expect(titleElement).toBeInTheDocument();
});

test("start date and end date have no text in it at first", () => {
  render(<App />);
  const startDateLabel = screen.getByTestId("start-date");
  expect(startDateLabel).toHaveTextContent("start date");

  const endDateLabel = screen.getByTestId("end-date");
  expect(endDateLabel).toHaveTextContent("end date");
});

test("start and end dates input value validation", async () => {
  render(<App />);
  // const startDate = document.getElementsByTagName("input")[0];
  const startDate = screen.getAllByRole("textbox")[0];
  // console.log(startDate);
  fireEvent.mouseDown(startDate);
  fireEvent.change(startDate, { target: { value: "2023-11-01" } });
  expect(startDate.value).toBe("2023-11-01");

  // const endDate = document.getElementsByTagName("input")[1];
  const endDate = screen.getAllByRole("textbox")[1];
  // console.log(endDate)
  fireEvent.mouseDown(endDate);
  fireEvent.change(endDate, { target: { value: "2023-10-01" } });
  expect(endDate.value).toBe("2023-10-01");
});
