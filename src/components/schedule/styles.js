import styled from '@emotion/styled'

export const Container = styled.nav`
  background: #fff;
  /* border-radius: 10px;
  border: none;
  box-shadow: 0px 5px 35px 0px rgba(223, 223, 232, 0.4);
  flex-wrap: wrap;
  list-style: none;
  margin-bottom: 0;
  padding-left: 0; */
`

export const TabsContainer = styled.div`
  border: none;
  width: 70%;
  margin: 35px auto 50px;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  list-style: none;
`

export const TabAnchor = styled.a`
  color: #007bff;
  .active {
    color: #ffffff;
    background-color: #ff007a;
    border-color: #ff007a;
  }
  border: 1px solid #d6d6d6;
  border-radius: 0;
  padding: 15px;
  margin: 10px;
  flex: 1 1 auto;
  text-align: center;
`

export const EventDay = styled.div`
  position: relative;
    display: inline-flex;
  .active {
    color: #ffffff;
  }
`

export const EventDetailNumber = styled.div`
  position: relative;
  margin-right: 20px;
  font-size: 60px;
  line-height: 56px;
  font-weight: 700;
  color: #8a2be2;
`

export const EventDetailDate = styled.div`
  position: relative;
  text-align: left;

  font-size: 20px;
  font-weight: 600;
  color: #8a2be2;
  line-height: 20px;
`

export const Button = styled.button`
  border-radius: 0;
  border: 0;
  color: #3c4859;
  flex-basis: 0;
  flex-grow: 1;
  padding: 16px 0;
  text-align: center;
  padding-right: 20px;

  &.center {
    background-color: #37e075;
  }
`
