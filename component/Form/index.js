import { groceryEmojis } from "@/resources/emojis";
import {
  StyleDiv,
  StyledButton,
  StyledEmojiInput,
  StyledFormField,
  StyledHeading,
  StyledInput,
  StyledInputField,
  StyledInputSection,
  StyledLabel,
  StyledFormContainer,
  Backdrop,
} from "./Form.styled";
import Modal from "../SuccessModal";

export default function AddGroceryItemForm({
  onAddItem,
  onOpenSubmitMessageModal,
  closeSubmitMessageModal,
  openModal,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onOpenSubmitMessageModal();

    onAddItem(data);
    event.target.reset();
    event.target.elements.name.focus();
  }
  return (
    <>
      <StyledFormContainer>
        <form onSubmit={handleSubmit}>
          <StyledFormField>
            <StyledHeading>Add Emoji</StyledHeading>
            <StyledHeading>
              <label htmlFor="emoji"></label>
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
                <StyledLabel htmlFor="purchaseDate">Purchase Date:</StyledLabel>
                <StyledInput
                  id="purchaseDate"
                  type="date"
                  name="purchaseDate"
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
            </StyledInputSection>
            <StyleDiv>
              <StyledButton type="submit">Add Item</StyledButton>
            </StyleDiv>
          </StyledFormField>
        </form>
      </StyledFormContainer>
      {openModal && <Modal closeSubmitMessageModal={closeSubmitMessageModal} />}
      {openModal && <Backdrop />}
    </>
  );
}
