//@flow
import React from "react";
import Typography from "./bulma/Typography";
import Box from "./bulma/Box";
import Button from "./bulma/Button";
import Content from "./bulma/Content";
import Form from "./bulma/Form";
import Icons from "./bulma/Icons";
import Images from "./bulma/Images";
import Notification from "./bulma/Notifications";
import Progress from "./bulma/Progress";
import Table from "./bulma/Table";
import Tag from "./bulma/Tag";
import Breadcrumb from "./bulma/Breadcrumb";
import Hero from "./bulma/Hero";
import Card from "./bulma/Card";
import Dropdown from "./bulma/Dropdown";
import Level from "./bulma/Level";
import Media from "./bulma/Media";
import Menu from "./bulma/Menu";
import Message from "./bulma/Message";
import Modal from "./bulma/Modal";
import Navbar from "./bulma/Navbar";
import Pagination from "./bulma/Pagination";
import Panel from "./bulma/Panel";
import Tabs from "./bulma/Tabs";

export default class BulmaDemo extends React.Component<> {
  render() {
    return (
      <>
        <Typography />
        <Box />
        <Button />
        <Content />
        <Form />
        <Icons />
        <Images />
        <Notification />
        <Progress />
        <Table />
        <Tag />
        <Breadcrumb />
        <Hero />
        <Card />
        <Dropdown />
        <Level />
        <Media />
        <Menu />
        <Message />
        <Modal />
        <Navbar />
        <Pagination />
        <Panel />
        <Tabs />
      </>
    );
  }
}
