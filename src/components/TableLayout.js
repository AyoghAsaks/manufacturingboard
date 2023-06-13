//import math from 'mathjs';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
var toFixed = require('tofixed'); //npm i tofixed

const TableLayout = (lines) => {

  let content, lineData
 
  //Convert all data from API to have 2 decimal places
  var priceTwoDecimals = lines.current_price;
  var marketCapTwoDecimals = lines.market_cap;
  var totalVolumeTwoDecimals = lines.total_volume;
  var priceChangeTwoDecimals = lines.price_change_24h;
  var priceChangePercentage24hTwoDecimals = lines.price_change_percentage_24h;

  let price = Number(priceTwoDecimals).toFixed(2);
  let marketCap = Number(marketCapTwoDecimals).toFixed(2);
  let totalVolume = Number(totalVolumeTwoDecimals).toFixed(2);
  let priceChange = Number(priceChangeTwoDecimals).toFixed(2);
  let priceChangePercentage_24h = Number(priceChangePercentage24hTwoDecimals).toFixed(2);
 
  if (lines.price_change_percentage_24h > 0 ) {
    content = (
                <Col className='text-white font-weight-bolder'>
                    <div className='five text-center ps-5 pt-2 bg-success' style={{backgroundColor: '#0000FF', height: '14.3vh'}}>
                        <p className='display-4 m-0 pb-1' style={{fontWeight: 'bold', marginLeft: '10px'}}>Upward</p>
                    </div>
                </Col>
    )
  } else {
    content = (
                <Col className='text-white font-weight-bolder'>
                    <div className='five text-center ps-5 pt-2 bg-danger' style={{backgroundColor: '#0000FF', height: '14.3vh'}}>
                    </div>
                </Col>
    )
    
  } 
   
  return (
    <>
        <Container fluid>
            <Row>
                <Col className='mt-1 text-white text-center p-0 font-weight-bolder'>
                    <div className='one display-3 d-flex align-items-center justify-content-center' style={{backgroundColor: '#0000FF', height: '14.3vh', fontWeight: 'bold'}}>{lines.name}</div>
                </Col>
            </Row>
            {/*-----------------------Show ATI values for a line if the value is not 0----------------------*/}
            <Row>
                <Col className='text-white font-weight-bolder'>
                    <div className='five text-left ps-5 pt-2' style={{backgroundColor: '#0000FF', height: '14.3vh'}}>
                        <p className='display-4 m-0 pb-1 ' style={{fontWeight: 'bold', marginLeft: '10px'}}>Cryptocurrency: <span style={{color: '#FFFF00'}}>{lines.symbol}</span></p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='text-white font-weight-bolder'>
                    <div className='five text-left ps-5 pt-2' style={{backgroundColor: '#0000FF', height: '14.3vh'}}>
                        <p className='display-4 m-0 pb-1' style={{fontWeight: 'bold', marginLeft: '10px'}}>Price: <span style={{color: '#FFFF00'}}>{price}</span></p>
                    </div>
                </Col>
            </Row>
            {/*----------------------- End of Show ATI values for a line if the value is not 0----------------------*/}
            <Row>
                <Col className='text-white font-weight-bolder'>
                    <div className='five text-left ps-5 pt-2' style={{backgroundColor: '#0000FF', height: '14.3vh'}}>
                        <p className='display-4 m-0 pb-1' style={{fontWeight: 'bold', marginLeft: '10px'}}>Price Percentage 24h: <span style={{color: '#FFFF00'}}>{lines.price_change_percentage_24h}%</span></p>
                    </div>
                </Col>
            </Row>
            
            <Row>
                <Col className='text-white font-weight-bolder'>
                    <div className='five text-left ps-5 pt-2' style={{backgroundColor: '#0000FF', height: '14.3vh'}}>
                        <p className='display-4 m-0 pb-1' style={{fontWeight: 'bold', marginLeft: '10px'}}>Total Volume: <span style={{color: '#FFFF00'}}>{totalVolume}</span></p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='text-white font-weight-bolder'>
                    <div className='five text-left ps-5 pt-2' style={{backgroundColor: '#0000FF', height: '14.3vh'}}>
                        <p className='display-4 m-0 pb-1' style={{fontWeight: 'bold', marginLeft: '10px'}}>Price Change 24h: <span style={{color: '#FFFF00'}}>{priceChange}</span></p>
                    </div>
                </Col>
            </Row>

            {/*------------------------------------------------------------------------------*/}
           
            <Row>
                {content}
            </Row>
        </Container>
    </>
  )
}

export default TableLayout;