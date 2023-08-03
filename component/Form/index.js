import { StyledEmojiInput, StyledFormField } from "./Form.styled";

export default function AddGroceryItemForm({ onAddItem }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddItem(data);
    event.target.reset();
    event.target.elements.name.focus();
  }
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <StyledFormField className="form__field">
          <div className="form__fields">
            <h2>
              {/* <label className="form__label" htmlFor="emoji">
                Emoji:
              </label> */}
              <StyledEmojiInput
                className="form__label form__input--emoji"
                list="emojis"
                id="emoji"
                type="text"
                name="emoji"
                placeholder="➕"
              />
            </h2>
            <datalist id="emojis">
              {groceryEmojis.map((groceryEmoji) => (
                <option key={groceryEmoji} value={groceryEmoji} />
              ))}
            </datalist>
          </div>

          <div className="form__field">
            <label className="form__label" htmlFor="name">
              Item Name:
            </label>
            <input
              className="form__label form__input--name"
              id="name"
              type="text"
              name="name"
              required
            />
          </div>

          <div className="form__field">
            <label className="form__label" htmlFor="purchaseDate">
              Purchased Date:
            </label>
            <input
              className="form__label form__input--purchasedDate"
              id="purchasedDate"
              type="date"
              name="purchasedDate"
              required
            />
          </div>
          <div className="form__field">
            <label className="form__label" htmlFor="expirationDate">
              Expiration Date:
            </label>
            <input
              className="form__label form__input--expirationDate"
              id="expirationDate"
              type="date"
              name="expirationDate"
              required
            />
          </div>

          <button type="submit" className="form__button">
            Add Item
          </button>
        </StyledFormField>
      </form>
    </>
  );
}

const groceryEmojis = [
  "🍏",
  "🍎",
  "🍐",
  "🍊",
  "🍋",
  "🍌",
  "🍉",
  "🍇",
  "🍓",
  "🫐",
  "🍈",
  "🍒",
  "🍑",
  "🥭",
  "🍍",
  "🥥",
  "🥝",
  "🍅",
  "🍆",
  "🥑",
  "🥦",
  "🫛",
  "🥬",
  "🥒",
  "🌶",
  "🫑",
  "🌽",
  "🥕",
  "🫒",
  "🧄",
  "🧅",
  "🫚",
  "🥔",
  "🍠",
  "🫘",
  "🥐",
  "🥯",
  "🍞",
  "🥖",
  "🥨",
  "🧀",
  "🥚",
  "🍳",
  "🧈",
  "🥞",
  "🧇",
  "🥓",
  "🥩",
  "🍗",
  "🍖",
  "🌭",
  "🍔",
  "🍟",
  "🍕",
  "🫓",
  "🥪",
  "🥙",
  "🧆",
  "🌮",
  "🌯",
  "🫔",
  "🥗",
  "🥘",
  "🫕",
  "🥫",
  "🍝",
  "🍜",
  "🍲",
  "🍛",
  "🍣",
  "🍱",
  "🥟",
  "🦪",
  "🍤",
  "🍙",
  "🍚",
  "🍘",
  "🍥",
  "🥠",
  "🥮",
  "🍢",
  "🍡",
  "🍧",
  "🍨",
  "🍦",
  "🥧",
  "🧁",
  "🍰",
  "🎂",
  "🍮",
  "🍭",
  "🍬",
  "🍫",
  "🍿",
  "🍩",
  "🍪",
  "🌰",
  "🥜",
  "🍯",
  "🥛",
  "🍼",
  "☕️",
  "🍵",
  "🧃",
  "🥤",
  "🧋",
  "🫙",
  "🍶",
  "🍺",
  "🍻",
  "🥂",
  "🍷",
  "🥡",
];
