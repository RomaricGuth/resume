import React, {useCallback, useContext, useEffect} from 'react';
import {CvOptionsContext} from "../utils/CvOptionsContext";
import {Button, Col, Form, Row} from "react-bootstrap";

function CvOptions() {
  const {options, setOptions} = useContext(CvOptionsContext);

  // init form fields from url
  useEffect(() => {
    const url = new URL(window.location.href); // get current url
    const position = url.searchParams.get('position') ?? "Software Engineer";
    const email = url.searchParams.get('email') ?? "ro.guth@free.fr";
    const phone = url.searchParams.get('phone');

    setOptions({
      position,
      email,
      phone
    });
  }, []);

  const copyUrlWithOptions = useCallback(() => {
    const url = new URL(window.location.href);
    // use same base for generated url
    const outUrl = new URL(`${url.origin}${url.pathname}`);

    for (const [key, val] of Object.entries(options)) {
      if (key && val) {
        outUrl.searchParams.append(key, val);
      }
    }

    console.log("URL to this resume : " + outUrl.toString());
    navigator.clipboard.writeText(outUrl.toString());
    alert(`The Url to this resume with current parameters was copied to clipboard : ${outUrl.toString()}`);
  }, [options]);

  const setOption = useCallback((key, value) => {
    setOptions({
      ...options,
      [key]: value,
    });
  }, [options, setOptions]);

  const onPositionChange = useCallback((e) => {
    setOption('position', e.target.value);
  }, [setOption]);

  const onEmailChange = useCallback((e) => {
    setOption('email', e.target.value);
  }, [setOption]);

  const onPhoneChange = useCallback((e) => {
    setOption('phone', e.target.value);
  }, [setOption]);

  return (
    <Form fluid>
      <Row>
        <Col xs={12}>
          <Form.Group>
            <Form.Label>Position</Form.Label>
            <Form.Control
              placeholder="Position for the job offer"
              value={options.position ?? ""}
              onChange={onPositionChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} className="mt-3">
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={options.email}
              onChange={onEmailChange}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6} className="mt-3">
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter phone number"
              value={options.phone}
              onChange={onPhoneChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs="auto" className="mt-2">
          <Button onClick={copyUrlWithOptions}>Copy URL</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default CvOptions;
