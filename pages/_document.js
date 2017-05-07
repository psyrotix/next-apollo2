// ./pages/_document.js
import Document, {  Main,Head, NextScript } from 'next/document'
import React from 'react'
import App from '../components/App'
import flush from 'styled-jsx/server'

export default class extends Document {

  render () {
    return (
      <html>
        <Head>
          <style jsx global>{`
         @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
         @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
         @import url('https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css');
         @import url('../static/materialize.min.js')
        * {
          font-family: Roboto;

        }
        body {
          color: #404040;
        }
        h3{
          font-weight: 200;
        }
      `}</style>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title> Fun Project </title>
      </Head>
        <body>
            <Main />
          <NextScript />



        </body>
      </html>
    )
  }
}