import "./App.css";
import "./componets/Mybutton/Mybutton";
import Button from "./componets/Mybutton/Mybutton";
import Container from "./componets/Container/Container";
import IconButton from "./componets/IconButton/IconButton";
import Text from "./componets/Text/Text";
import { FaHome, FaStar } from "react-icons/fa";
import Space from "./componets/Space/Space";
import MyInput from "./componets/Input/Input";
import { useState } from "react";
import Modal from "./componets/Modal/Modal";
import Table from "./componets/Table/Table";
import Header from "./componets/Header/Header";
import Tag from "./componets/Tag/Tag";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    console.log("Modal closed");
  };
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };
  const columns = ["Name", "Age", "Country"];
  const list = [
    { Name: "John", Age: 25, Country: "USA" },
    { Name: "Jane", Age: 30, Country: "Canada" },
  ];
  return (
    <div>
      <Container width={1000}>
        <Button type="primary" size="sm" style={{ marginRight: "8px" }}>
          Primary Small
        </Button>
        <Button type="secondary" size="md" style={{ marginRight: "8px" }}>
          Secondary Medium
        </Button>
        <Button type="default" size="md">
          Default Medium
        </Button>
      </Container>
      <Container width={1000}>
        <IconButton
          type="primary"
          size="sm"
          style={{ marginRight: "8px" }}
          icon={<FaHome />}
        />
        <IconButton
          type="secondary"
          size="md"
          style={{ marginRight: "8px" }}
          icon={<FaStar />}
        />
        <IconButton type="default" size="md" icon={<FaHome />} />
      </Container>

      <Container width={1000}>
        <Text size={16} bold={true} color="red" style={{ marginRight: "8px" }}>
          Bold Red Text
        </Text>
        <Text size={14} bold={false} color="blue">
          Normal Blue Text
        </Text>
      </Container>
      <Space width={20} height={100} />
      <Container width={1000}>
        <MyInput
          placeholder="Enter text..."
          value={inputValue}
          onChange={handleInputChange}
          style={{ margin: "10px", padding: "5px" }}
        />
      </Container>
      <Container width={1000}>
        <Button type="default" size="md" fun={handleCloseModal}>
          close
        </Button>
        <Button type="default" size="md" fun={handleOpenModal}>
          open
        </Button>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <h1>wwww</h1>
        </Modal>
      </Container>
      <Container width={1000}>
        <Table columns={columns} list={list} />
      </Container>
      <Container width={1000}>
        <Header
          action={
            <Text size={14} bold={false} color="blue">
              Normal Blue Text
            </Text>
          }
          brand={
            <IconButton
              type="secondary"
              size="md"
              style={{ marginRight: "8px" }}
              icon={<FaStar />}
            />
          }
        />
      </Container>
      <Container width={1000}>
      <Tag color="blue">Blue Tag</Tag>
      <Tag color="green">Green Tag</Tag>
      <Tag>Default Tag</Tag>
      </Container>
    </div>
  );
}

export default App;
