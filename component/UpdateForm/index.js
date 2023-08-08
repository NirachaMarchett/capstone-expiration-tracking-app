import { groceryEmojis } from "@/resources/emojis";
import {
  StyledEmojiInput,
  StyledFormField,
  StyledHeading,
  StyledInput,
  StyledInputField,
  StyledInputSection,
  StyledLabel,
} from "./UpdateForm.styled";

export default function UpdateForm() {
  return (
    <>
      <form>
        <StyledFormField>
          <StyledHeading>Update Item Detail</StyledHeading>
          <StyledHeading>
            <StyledEmojiInput
              list="emojis"
              id="emoji"
              type="text"
              name="emoji"
              placeholder="➕"
              defaultValue="➕"
            />
          </StyledHeading>
          <datalist id="emojis">
            {groceryEmojis.map((groceryEmoji) => (
              <option key={groceryEmoji} value={groceryEmoji} />
            ))}
          </datalist>
          <StyledInputSection>
            <StyledInputField>
              <StyledLabel htmlFor="name">Item Name:</StyledLabel>
              <StyledInput id="name" type="text" name="name" required />
            </StyledInputField>

            <StyledInputField>
              <StyledLabel htmlFor="purchaseDate">Purchased Date:</StyledLabel>
              <StyledInput
                id="purchasedDate"
                type="date"
                name="purchasedDate"
                required
              />
            </StyledInputField>

            <StyledInputField>
              <StyledLabel htmlFor="expirationDate">
                Expiration Date:
              </StyledLabel>
              <StyledInput
                id="expirationDate"
                type="date"
                name="expirationDate"
                required
              />
            </StyledInputField>

            <StyledInputField>
              <StyledLabel htmlFor="amount">Amount:</StyledLabel>
              <StyledInput id="amount" type="text" name="amount" />
            </StyledInputField>

            <StyledInputField>
              <StyledLabel htmlFor="category">Category:</StyledLabel>
              <StyledInput id="category" type="select" name="category">
                {/* <select>
                  <option>Fruit</option>
                  <option>Vegetable</option>
                </select> */}
              </StyledInput>
            </StyledInputField>
          </StyledInputSection>
        </StyledFormField>
      </form>
    </>
  );
}
