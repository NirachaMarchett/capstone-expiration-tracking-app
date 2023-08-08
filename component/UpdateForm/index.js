import { groceryEmojis } from "@/resources/emojis";
import {
  StyledEmojiInput,
  StyledFormField,
  StyledHeading,
  StyledInput,
  StyledInputField,
  StyledInputSection,
  StyledLabel,
  StyledSelect,
  StyledSelectField,
} from "./UpdateForm.styled";

export default function UpdateForm({ defaultValues }) {
  return (
    <form>
      <StyledFormField>
        <StyledHeading>Update Item Detail</StyledHeading>
        <StyledHeading>
          <StyledEmojiInput
            list="emojis"
            id="emoji"
            type="text"
            name="emoji"
            defaultValue={defaultValues.emoji}
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
            <StyledInput
              id="name"
              type="text"
              name="name"
              defaultValue={defaultValues.name}
              required
            />
          </StyledInputField>

          <StyledInputField>
            <StyledLabel htmlFor="purchaseDate">Purchased Date:</StyledLabel>
            <StyledInput
              id="purchasedDate"
              type="date"
              name="purchasedDate"
              defaultValue={defaultValues.purchasedDate}
              required
            />
          </StyledInputField>

          <StyledInputField>
            <StyledLabel htmlFor="expirationDate">Expiration Date:</StyledLabel>
            <StyledInput
              id="expirationDate"
              type="date"
              name="expirationDate"
              defaultValue={defaultValues.expirationDate}
              required
            />
          </StyledInputField>

          <StyledInputField>
            <StyledLabel htmlFor="amount">Amount:</StyledLabel>
            <StyledInput
              id="amount"
              type="number"
              name="amount"
              defaultValue={defaultValues.amount}
            />
          </StyledInputField>

          <StyledInputField>
            <StyledLabel htmlFor="category">Category:</StyledLabel>
            <StyledSelectField>
              <StyledSelect name="category" id="category">
                <option value="">{defaultValues.category}</option>
                <option value="fruit">Fruit</option>
                <option value="vegetable">Vegetable</option>
                <option value="food">Food</option>
                <option value="meat">Meat</option>
                <option value="protein">Protein Food</option>
                <option value="dairy">Dairy</option>
                <option value="pastry">Pastry</option>
                <option value="beverages">Beverages</option>
                <option value="others">Others</option>
              </StyledSelect>
            </StyledSelectField>
          </StyledInputField>
        </StyledInputSection>
        <button type="submit">Save</button>
      </StyledFormField>
    </form>
  );
}

{
}
