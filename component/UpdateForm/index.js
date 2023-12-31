import { groceryEmojis } from "@/resources/emojis";
import {
  StyledSaveButton,
  StyledDeleteButton,
  StyledEmojiInput,
  StyledFormField,
  StyledHeading,
  StyledInput,
  StyledInputField,
  StyledInputSection,
  StyledLabel,
  StyledSelect,
  StyledSelectField,
  StyledButtonSection,
  StyledFormContainer,
  StyledCloseButton,
} from "./UpdateForm.styled";
import { useRouter } from "next/router";
import Xcross from "../../assets/x-cross.svg";

export default function UpdateForm({
  defaultValues,
  onChange,
  onDelete,
  closeModal,
}) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    data.id = defaultValues.id;

    onChange(data);
    event.target.elements.name.focus();
    closeModal();
  }

  const handleDelete = () => {
    onDelete(defaultValues.id);
    router.push("/");
  };

  return (
    <StyledFormContainer>
      <form onSubmit={handleSubmit}>
        <StyledFormField>
          <StyledCloseButton type="button" onClick={() => closeModal()}>
            <Xcross
              height={25}
              fill="#C32E68"
              style={{
                position: "absolute",
                top: "0px",
                left: "4px",
              }}
            />
          </StyledCloseButton>
          <StyledHeading>Update Item Detail</StyledHeading>
          <StyledHeading>
            <label htmlFor="emoji"></label>
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
              <StyledLabel htmlFor="purchaseDate">Purchase Date:</StyledLabel>
              <StyledInput
                id="purchaseDate"
                type="date"
                name="purchaseDate"
                defaultValue={defaultValues.purchaseDate}
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
                required
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
          <StyledButtonSection>
            <StyledSaveButton type="submit">Save</StyledSaveButton>
            <StyledDeleteButton type="button" onClick={handleDelete}>
              Delete
            </StyledDeleteButton>
          </StyledButtonSection>
        </StyledFormField>
      </form>
    </StyledFormContainer>
  );
}

{
}
