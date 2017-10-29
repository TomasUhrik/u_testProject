import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Container,
  Name,
  H,
  P,
  Ul,
  Li,
  Highlight,
  StoryBox,
  DetailBox,
  Hint,
} from './style.js'

class OfferDetail extends Component {
  render() {
    if (this.props.offerDetail !== null) {
      return (
        <div>
          <Container>
            <StoryBox>
              <Name> {this.props.offerDetail.name} </Name>
              <H> {this.props.offerDetail.nickName} </H>
              <P> {this.props.offerDetail.story}} </P>
              <a href={this.props.offerDetail.url}> Přejít k investici </a>
            </StoryBox>

            <DetailBox>
              <Ul>
                <Li>
                  <Highlight> Rating: </Highlight>{' '}
                  {this.props.offerDetail.rating}
                </Li>
                <Li>
                  <Highlight> Částka: </Highlight>{' '}
                  {this.props.offerDetail.amount} Kč
                </Li>
                <Li>
                  <Highlight> Splatnost: </Highlight>{' '}
                  {this.props.offerDetail.termInMonths} měsíců
                </Li>
                <Li>
                  <Highlight> Úrok: </Highlight>{' '}
                  {this.props.offerDetail.interestRate * 100}%
                </Li>
                <Li>
                  <Highlight> Ručení: </Highlight>{' '}
                  {String(this.props.offerDetail.covered)}
                </Li>
                <Li>
                  <Highlight> Zdroj příjmů: </Highlight>
                  {this.props.offerDetail.mainIncomeType}
                </Li>
              </Ul>
            </DetailBox>
          </Container>
        </div>
      )
    } else {
      return (
        <div>
          <Hint> Zvolte ze seznamu </Hint>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    offerDetail: state.offerDetail,
  }
}

export default connect(mapStateToProps)(OfferDetail)
