import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper, InputStyle } from "./styles";
import { useRef, useState } from "react";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  logger?: boolean;
  placeholderLogger?: string;
  loggerName?: string;
  t: TFunction;
}

const MiddleBlock = ({ title, content, logger, placeholderLogger = "", loggerName, button, t }: MiddleBlockProps) => {
  const typing = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState<string>("");

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const printValue = (): void => {
    if (!typing.current?.value) return;
    setResult(typing.current.value);
  };

  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {logger && (
                <InputStyle ref={typing} placeholder={t(placeholderLogger)} name={loggerName} id={loggerName} />
              )}
              {button && (
                <Button name="submit" onClick={() => (logger ? printValue() : scrollTo("mission"))}>
                  {t(button)}
                </Button>
              )}
              <Content style={{ textAlign: "start" }}>{result}</Content>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
