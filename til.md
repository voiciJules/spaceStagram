# 2023/11/8 - title and input for calendar

At first, I decided to implement this react application by using three components such as title, dates, show. Title is to show the title only. So, it's simple html component. Dates is to enter the start date and the end date. I want to use date picker library since it's easy to implement it with a nice view. And the last Show section is to show the images from the start date to the end date with css and some functionality such as making a heart(like button), link function etc. I tried to use useContext, createContext, but until now, I failed to make it. So, i decided to make it without deviding as several components. After making it all, i will think about it again.  
Today, I just made Title and Dates. From Dates, I can now select the dates(start and end) from the input tags. I had to make tests for it. I will do it tomorrow.

# 2023/11/12 - tests for title and input of calendar / render 5 random images by using axios, useEffect

I made a test for title and two tests for input of calendar.
Title test checks if there is a text "spaceStagram" in the H3 tag
Two calendar tests check :
if start date and end date have no text in the label tag at first,
if the date appears in the input after you click some specific date in the calendar,

Here, I used document.getElementByTagName since the way that I use getByTestId didn't work.
I should change it since there is a recommendation to use testing library selector.

```
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
  const startDate = document.getElementsByTagName("input")[0];
  fireEvent.mouseDown(startDate);
  fireEvent.change(startDate, { target: { value: "2023-11-01" } });
  expect(startDate.value).toBe("2023-11-01");

  const endDate = document.getElementsByTagName("input")[1];
  fireEvent.mouseDown(endDate);
  fireEvent.change(endDate, { target: { value: "2023-10-01" } });
  expect(endDate.value).toBe("2023-10-01");
});
```

And i changed the date format of date picker by using dateFormat="yyyy-MM-dd".

========= Error occured ==========
"""
Warning: React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.

react-dom.development.js:28439 Uncaught Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
"""

```
.then((response) => {setImages(response.data)})
```

In the above code, {} was a problem. I removed {}, and then the error message was disappeared.

I succeed to render 5 random images by using '&count=5' options in the API, axios, useEffect and map.
In addition, I implements basic css file for this app.

# 2023-11-13 : making like image and copy link image

I displayed Copy link image and Like image at the end of left and right by using 'display: flex; justify-content : space-between'. And then, when I clicked the copy link image, it makes a pop-up with a message 'copied the image url : image url'. I want to change it later with better way.
For Like image, I have to use local storage. This Local Storage is to save some information by using the form 'key' : 'value' in the browser. Even if the sessoin is changed, the saved data is still there.
The way to use local storage.
setItem() : adding key, value / window.localStorage.setItem(key, value)
getItem() : reading a specific value with key / window.localStorage.getItem(key)
removeItem() : deleting the Item / window.localStorage.removeItem(key);
clear() : deleting all information in the browser / window.localStorage.clear();
length : total amount of items / window.localStorage.length;
key() : using index, returning the key / window.localStorage.key(index);

We can only store string. In order to store object or array, we need to use the way below.
"""
const obj = { name : 'anna', age : 20}
const arr = [1, 2, 3];

const objString = JSON.stringify(obj);
const arrString = JSON.stringify(arr);

window.localStorage.setItem('person', objString);
window.localStorage.setItem('nums', arrString);

const personString = window.localStorage.getItem('person');
const numsString = window.localStorage.getItem('nums');

// JSON 문자열을 객체, 배열로 변환
const personObj = JSON.parse(personString);
const numsArr = JSON.parse(numsString);
"""

# 2023-11-14 : LIKE function implementation by LocalStorage

// TODO
tests bug fix
make tests for rendering parts

Logics to implement.
I need to search about key attribute in the list.
when i enter start and end date in the calendar and click submit button, show loading images when we are waiting for receiving the images, and when it's done to receive them, show the images.
