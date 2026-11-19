export const id = 54;
export const ids = [54];
export const modules = {
  39718: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD,
      g: () => SD
    });
    const ID = new TextDecoder;

    function pD(DD) {
      const CD = new iD(DD),
        cD = CD.value();
      if (CD.at !== DD.length) throw new Error(`msgpack: ${DD.length-CD.at} bytes after the value`);
      return cD
    }
    class iD {
      constructor(DD) {
        this.bytes = DD, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(DD.buffer, DD.byteOffset, DD.byteLength)
      }
      value() {
        const DD = this.u8();
        if (DD <= 127) return DD;
        if (DD >= 224) return DD - 256;
        if (DD >= 128 && DD <= 143) return this.map(15 & DD);
        if (DD >= 144 && DD <= 159) return this.array(15 & DD);
        if (DD >= 160 && DD <= 191) return this.str(31 & DD);
        switch (DD) {
          case 192:
            return null;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            return this.bin(this.u8());
          case 197:
            return this.bin(this.u16());
          case 198:
            return this.bin(this.u32());
          case 199:
            return this.ext(this.u8());
          case 200:
            return this.ext(this.u16());
          case 201:
            return this.ext(this.u32());
          case 202:
            return this.view.getFloat32(this.take(4), !1);
          case 203:
            return this.view.getFloat64(this.take(8), !1);
          case 204:
            return this.u8();
          case 205:
            return this.u16();
          case 206:
            return this.u32();
          case 207:
            return this.int64(!1);
          case 208:
            return this.view.getInt8(this.take(1));
          case 209:
            return this.view.getInt16(this.take(2), !1);
          case 210:
            return this.view.getInt32(this.take(4), !1);
          case 211:
            return this.int64(!0);
          case 212:
            return this.ext(1);
          case 213:
            return this.ext(2);
          case 214:
            return this.ext(4);
          case 215:
            return this.ext(8);
          case 216:
            return this.ext(16);
          case 217:
            return this.str(this.u8());
          case 218:
            return this.str(this.u16());
          case 219:
            return this.str(this.u32());
          case 220:
            return this.array(this.u16());
          case 221:
            return this.array(this.u32());
          case 222:
            return this.map(this.u16());
          case 223:
            return this.map(this.u32());
          default:
            throw new Error(`msgpack: unknown byte 0x${DD.toString(16)} at ${this.at-1}`)
        }
      }
      take(DD) {
        const CD = this.at;
        if (CD + DD > this.bytes.length) throw new Error(`msgpack: ${DD} bytes past the end at ${CD}`);
        return this.at = CD + DD, CD
      }
      u8() {
        return this.view.getUint8(this.take(1))
      }
      u16() {
        return this.view.getUint16(this.take(2), !1)
      }
      u32() {
        return this.view.getUint32(this.take(4), !1)
      }
      int64(DD) {
        const CD = this.take(8);
        return DD ? this.view.getBigInt64(CD, !1) : this.view.getBigUint64(CD, !1)
      }
      str(DD) {
        const CD = this.take(DD),
          cD = this.bytes;
        if (DD < 16) {
          let pD = "";
          for (let iD = CD; iD < CD + DD; iD++) {
            const fD = cD[iD];
            if (fD >= 128) return ID.decode(cD.subarray(CD, CD + DD));
            pD += String.fromCharCode(fD)
          }
          return pD
        }
        return ID.decode(cD.subarray(CD, CD + DD))
      }
      bin(DD) {
        const CD = this.take(DD);
        return this.bytes.subarray(CD, CD + DD)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(DD) {
        this.enter();
        const CD = [];
        for (let cD = 0; cD < DD; cD++) CD.push(this.value());
        return this.depth--, CD
      }
      map(DD) {
        this.enter();
        const CD = {};
        for (let cD = 0; cD < DD; cD++) {
          const DD = this.value(),
            cD = this.value();
          CD["__proto__" === DD ? "__proto_" : String(DD)] = cD
        }
        return this.depth--, CD
      }
      ext(DD) {
        const CD = this.view.getInt8(this.take(1)),
          cD = this.take(DD);
        if (0 !== CD) {
          if (-1 === CD) {
            if (1 === DD) return new Date(NaN);
            if (4 === DD) return new Date(1e3 * this.view.getUint32(cD, !1));
            if (8 === DD) {
              const DD = this.view.getUint32(cD, !1),
                CD = DD >>> 2,
                ID = 4294967296 * (3 & DD) + this.view.getUint32(cD + 4, !1);
              return new Date(1e3 * ID + CD / 1e6)
            }
            if (12 === DD) {
              const DD = this.view.getUint32(cD, !1),
                CD = 4294967296 * this.view.getInt32(cD + 4, !1) + this.view.getUint32(cD + 8, !1);
              return new Date(1e3 * CD + DD / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${CD} of ${DD} bytes`)
        }
      }
    }
    const fD = new TextEncoder,
      bD = -(2n ** 63n),
      QD = 2n ** 63n - 1n,
      wD = 2n ** 64n - 1n;

    function SD(DD) {
      const CD = new BD;
      return CD.value(DD, 0), CD.bytes()
    }
    class BD {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(DD, CD) {
        if (CD > 512) throw new Error("msgpack: nested too deep");
        switch (typeof DD) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(DD ? 195 : 194);
          case "number":
            return void this.number(DD);
          case "bigint":
            return void this.bigint(DD);
          case "string":
            return void this.string(DD);
          case "object":
            if (null === DD) this.u8(192);
            else if (DD instanceof Uint8Array) this.head(DD.length, 196, -1, 197, 198), this.room(DD.length), this.buf.set(DD, this.at), this.at += DD.length;
            else if (Array.isArray(DD)) {
              this.head(DD.length, 220, 144, 220, 221);
              for (const cD of DD) this.value(cD, CD + 1)
            } else {
              var cD, ID;
              if (Object.getPrototypeOf(DD) !== Object.prototype && null !== Object.getPrototypeOf(DD)) throw new Error(`msgpack: can't encode a ${null!==(cD=null===(ID=DD.constructor)||void 0===ID?void 0:ID.name)&&void 0!==cD?cD:"object"}`);
              {
                const cD = Object.keys(DD);
                this.head(cD.length, 222, 128, 222, 223);
                for (const ID of cD) this.string(ID), this.value(DD[ID], CD + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof DD)
        }
      }
      number(DD) {
        Number.isInteger(DD) && DD >= -2147483648 && DD <= 4294967295 ? DD >= 0 ? DD < 128 ? this.u8(DD) : DD < 256 ? (this.u8(204), this.u8(DD)) : DD < 65536 ? (this.u8(205), this.u16(DD)) : (this.u8(206), this.u32(DD)) : DD >= -32 ? this.u8(DD + 256) : DD >= -128 ? (this.u8(208), this.u8(DD + 256)) : DD >= -32768 ? (this.u8(209), this.u16(DD + 65536)) : (this.u8(210), this.u32(DD >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, DD, !1), this.at += 8)
      }
      bigint(DD) {
        const CD = DD >= bD && DD <= QD;
        if (!CD && (DD < 0n || DD > wD)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(CD ? 211 : 207), this.room(8), CD ? this.view.setBigInt64(this.at, DD, !1) : this.view.setBigUint64(this.at, DD, !1), this.at += 8
      }
      string(DD) {
        const CD = fD.encode(DD);
        this.head(CD.length, 217, 160, 218, 219), this.room(CD.length), this.buf.set(CD, this.at), this.at += CD.length
      }
      head(DD, CD, cD, ID, pD) {
        cD >= 0 && DD < (160 === cD ? 32 : 16) ? this.u8(cD | DD) : CD !== ID && DD < 256 ? (this.u8(CD), this.u8(DD)) : DD < 65536 ? (this.u8(ID), this.u16(DD)) : (this.u8(pD), this.u32(DD))
      }
      room(DD) {
        if (this.at + DD <= this.buf.length) return;
        let CD = 2 * this.buf.length;
        for (; CD < this.at + DD;) CD *= 2;
        const cD = new Uint8Array(CD);
        cD.set(this.buf.subarray(0, this.at)), this.buf = cD, this.view = new DataView(cD.buffer)
      }
      u8(DD) {
        this.room(1), this.buf[this.at++] = DD
      }
      u16(DD) {
        this.room(2), this.view.setUint16(this.at, DD, !1), this.at += 2
      }
      u32(DD) {
        this.room(4), this.view.setUint32(this.at, DD, !1), this.at += 4
      }
    }
  },
  42461: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      joinRoom: () => yD,
      leaveHeldSeat: () => ND,
      resumeRoom: () => tD
    });
    var ID = cD(162),
      pD = cD(1796),
      iD = cD(38423),
      fD = cD(1763),
      bD = cD(39718),
      QD = cD(4581),
      wD = cD(39951),
      SD = cD(40029);
    const BD = Uint8Array.of(13, ...(0, bD.g)(ID.h));
    async function yD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await MD(DD, CD, cD)
      } catch (pD) {
        var ID;
        const iD = await (null === (ID = CD.optionsAfterRefusal) || void 0 === ID ? void 0 : ID.call(CD, pD));
        if (!iD) throw pD;
        return MD(DD, {
          ...CD,
          joinOptions: iD
        }, {
          ...cD,
          early: void 0
        })
      }
    }
    async function MD(DD, CD, cD) {
      var ID;
      const {
        signal: iD
      } = cD, fD = () => (0, SD.i)(CD.endpoint, CD.roomName, CD.joinOptions, cD), {
        early: bD
      } = cD, QD = bD ? null !== (ID = await bD.take(iD)) && void 0 !== ID ? ID : await bD.reserveInstead(fD, iD) : await fD();
      return (0, pD.r)(iD), vD(DD, CD.endpoint, QD, cD, !1)
    }
    async function tD(DD, CD, cD, ID) {
      let iD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const fD = await (0, SD.g)(CD, cD, ID, iD);
      return (0, pD.r)(iD.signal), vD(DD, CD, fD, iD, !0)
    }

    function ZD(DD, CD, cD) {
      const ID = (0, SD.k)(DD, CD);
      return cD.createSocket ? cD.createSocket(ID) : new WebSocket(ID)
    }

    function oD(DD, CD, cD) {
      var ID;
      let pD = !1;
      return (null !== (ID = DD.setTimer) && void 0 !== ID ? ID : (DD, CD) => {
        setTimeout(DD, CD)
      })((() => {
        pD || CD()
      }), cD), () => {
        pD = !0
      }
    }
    async function vD(DD, CD, cD, ID, bD) {
      const {
        signal: SD
      } = ID, yD = ZD(CD, cD, ID);
      let MD = null,
        tD = null;
      const vD = [];
      let ND = !1,
        gD = !1;
      const XD = DD => {
        var CD;
        gD = !0, null === (CD = tD) || void 0 === CD || CD.reject(new wD.d("the room socket closed before the resume", "closed", DD.code))
      };
      bD && yD.addEventListener("close", XD);
      const mD = (DD, CD) => {
          var cD;
          if (DD === (bD ? QD.E.Resumed : QD.E.Activated)) ND = !0, null === (cD = tD) || void 0 === cD || cD.resolve();
          else if (!bD || DD !== QD.E.ResumeRefused && DD !== QD.E.Activated)
            if (DD === QD.E.Error) {
              var ID;
              null === (ID = tD) || void 0 === ID || ID.reject(new wD.d(`the room refused the join (code ${CD})`, "roomError", CD))
            } else {
              var pD;
              null === (pD = tD) || void 0 === pD || pD.reject(new wD.d("the room socket closed before the join", "closed", CD))
            }
          else {
            var iD;
            null === (iD = tD) || void 0 === iD || iD.reject(new wD.o("the core refused the resume: it held no game"))
          }
        },
        nD = DD.onConnection(((DD, CD, cD) => {
          null === MD ? vD.push([DD, CD, cD]) : DD === MD && mD(CD, cD)
        })),
        OD = DD.attachSocket(yD);
      if (null === OD) throw nD(), new wD.d("the core could not take the room socket", "attach");
      var PD;
      (MD = OD, bD) && (null === (PD = ID.onAttached) || void 0 === PD || PD.call(ID));
      const HD = bD ? null : new fD.d(iD.d, (() => {
        var CD, cD;
        null === (CD = DD.flushNet) || void 0 === CD || CD.call(DD), null === (cD = tD) || void 0 === cD || cD.reject(new iD.g)
      }));
      let UD = !1;
      const xD = () => {
        if (UD) return;
        if (UD = !0, nD(), bD && (yD.removeEventListener("close", XD), !ND && !(null !== SD && void 0 !== SD && SD.aborted && (0, pD.g)(SD) instanceof wD.s))) return void(gD || DD.closeSocket(OD));
        ND && DD.leaveRoom(OD) || DD.sendRaw(OD, wD.l) ? oD(ID, (() => {
          DD.closeSocket(OD)
        }), wD.h) : DD.closeSocket(OD)
      };
      try {
        await new Promise(((CD, cD) => {
          const ID = () => {
            var CD;
            bD && (null === (CD = DD.flushNet) || void 0 === CD || CD.call(DD));
            cD((0, pD.g)(SD))
          };
          null === SD || void 0 === SD || SD.addEventListener("abort", ID, {
            once: !0
          }), tD = {
            resolve: () => {
              null === SD || void 0 === SD || SD.removeEventListener("abort", ID), CD()
            },
            reject: DD => {
              null === SD || void 0 === SD || SD.removeEventListener("abort", ID), cD(DD)
            }
          };
          for (const [DD, pD, iD] of vD.splice(0)) DD === MD && mD(pD, iD)
        }))
      } catch (qD) {
        throw xD(), qD
      } finally {
        null === HD || void 0 === HD || HD.stop()
      }
      bD && yD.removeEventListener("close", XD);
      return {
        conn: OD,
        seat: cD,
        leave: xD,
        detach: () => {
          UD = !0, nD()
        },
        endJoinAd: () => {
          UD || DD.sendRaw(OD, BD)
        }
      }
    }
    async function ND(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const pD = ZD(DD, await (0, SD.g)(DD, CD, cD, ID), ID);
        pD.binaryType = "arraybuffer", await new Promise((DD => {
          const CD = oD(ID, (() => {
            pD.close(), DD()
          }), wD.h);
          pD.addEventListener("open", (() => {
            pD.send(wD.l)
          })), pD.addEventListener("close", (() => {
            CD(), DD()
          }))
        }))
      } catch (pD) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", pD)
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);