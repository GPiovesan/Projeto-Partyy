const express = require('express')
const server = express()

server
.use(express.static("public"))
.get("/", pageLanding)
.get("/find-partyy",pageFindPartyy)
.get("/make-partyy", pageMakePartyy)
.listen(process.env.PORT)