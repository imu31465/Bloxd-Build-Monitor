export const id = 57;
export const ids = [57];
export const modules = {
  40544: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => sD,
      d: () => RD
    });
    const pD = new TextDecoder;

    function sD(DD) {
      const zD = new KD(DD),
        wD = zD.value();
      if (zD.at !== DD.length) throw new Error(`msgpack: ${DD.length-zD.at} bytes after the value`);
      return wD
    }
    class KD {
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
        const zD = this.at;
        if (zD + DD > this.bytes.length) throw new Error(`msgpack: ${DD} bytes past the end at ${zD}`);
        return this.at = zD + DD, zD
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
        const zD = this.take(8);
        return DD ? this.view.getBigInt64(zD, !1) : this.view.getBigUint64(zD, !1)
      }
      str(DD) {
        const zD = this.take(DD),
          wD = this.bytes;
        if (DD < 16) {
          let sD = "";
          for (let KD = zD; KD < zD + DD; KD++) {
            const rD = wD[KD];
            if (rD >= 128) return pD.decode(wD.subarray(zD, zD + DD));
            sD += String.fromCharCode(rD)
          }
          return sD
        }
        return pD.decode(wD.subarray(zD, zD + DD))
      }
      bin(DD) {
        const zD = this.take(DD);
        return this.bytes.subarray(zD, zD + DD)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(DD) {
        this.enter();
        const zD = [];
        for (let wD = 0; wD < DD; wD++) zD.push(this.value());
        return this.depth--, zD
      }
      map(DD) {
        this.enter();
        const zD = {};
        for (let wD = 0; wD < DD; wD++) {
          const DD = this.value(),
            wD = this.value();
          zD["__proto__" === DD ? "__proto_" : String(DD)] = wD
        }
        return this.depth--, zD
      }
      ext(DD) {
        const zD = this.view.getInt8(this.take(1)),
          wD = this.take(DD);
        if (0 !== zD) {
          if (-1 === zD) {
            if (1 === DD) return new Date(NaN);
            if (4 === DD) return new Date(1e3 * this.view.getUint32(wD, !1));
            if (8 === DD) {
              const DD = this.view.getUint32(wD, !1),
                zD = DD >>> 2,
                pD = 4294967296 * (3 & DD) + this.view.getUint32(wD + 4, !1);
              return new Date(1e3 * pD + zD / 1e6)
            }
            if (12 === DD) {
              const DD = this.view.getUint32(wD, !1),
                zD = 4294967296 * this.view.getInt32(wD + 4, !1) + this.view.getUint32(wD + 8, !1);
              return new Date(1e3 * zD + DD / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${zD} of ${DD} bytes`)
        }
      }
    }
    const rD = new TextEncoder,
      LD = -(2n ** 63n),
      cD = 2n ** 63n - 1n,
      gD = 2n ** 64n - 1n;

    function RD(DD) {
      const zD = new AD;
      return zD.value(DD, 0), zD.bytes()
    }
    class AD {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(DD, zD) {
        if (zD > 512) throw new Error("msgpack: nested too deep");
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
              for (const wD of DD) this.value(wD, zD + 1)
            } else {
              var wD, pD;
              if (Object.getPrototypeOf(DD) !== Object.prototype && null !== Object.getPrototypeOf(DD)) throw new Error(`msgpack: can't encode a ${null!==(wD=null===(pD=DD.constructor)||void 0===pD?void 0:pD.name)&&void 0!==wD?wD:"object"}`);
              {
                const wD = Object.keys(DD);
                this.head(wD.length, 222, 128, 222, 223);
                for (const pD of wD) this.string(pD), this.value(DD[pD], zD + 1)
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
        const zD = DD >= LD && DD <= cD;
        if (!zD && (DD < 0n || DD > gD)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(zD ? 211 : 207), this.room(8), zD ? this.view.setBigInt64(this.at, DD, !1) : this.view.setBigUint64(this.at, DD, !1), this.at += 8
      }
      string(DD) {
        const zD = rD.encode(DD);
        this.head(zD.length, 217, 160, 218, 219), this.room(zD.length), this.buf.set(zD, this.at), this.at += zD.length
      }
      head(DD, zD, wD, pD, sD) {
        wD >= 0 && DD < (160 === wD ? 32 : 16) ? this.u8(wD | DD) : zD !== pD && DD < 256 ? (this.u8(zD), this.u8(DD)) : DD < 65536 ? (this.u8(pD), this.u16(DD)) : (this.u8(sD), this.u32(DD))
      }
      room(DD) {
        if (this.at + DD <= this.buf.length) return;
        let zD = 2 * this.buf.length;
        for (; zD < this.at + DD;) zD *= 2;
        const wD = new Uint8Array(zD);
        wD.set(this.buf.subarray(0, this.at)), this.buf = wD, this.view = new DataView(wD.buffer)
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
  50768: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      joinRoom: () => AD,
      leaveHeldSeat: () => hD,
      resumeRoom: () => fD
    });
    var pD = wD(157),
      sD = wD(1217),
      KD = wD(36486),
      rD = wD(40544),
      LD = wD(4817),
      cD = wD(40603),
      gD = wD(40825);
    const RD = Uint8Array.of(13, ...(0, rD.d)(pD.f));
    async function AD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await UD(DD, zD, wD)
      } catch (sD) {
        var pD;
        const KD = await (null === (pD = zD.optionsAfterRefusal) || void 0 === pD ? void 0 : pD.call(zD, sD));
        if (!KD) throw sD;
        return UD(DD, {
          ...zD,
          joinOptions: KD
        }, {
          ...wD,
          early: void 0
        })
      }
    }
    async function UD(DD, zD, wD) {
      var pD;
      const {
        signal: KD
      } = wD, rD = () => (0, gD.j)(zD.endpoint, zD.roomName, zD.joinOptions, wD), {
        early: LD
      } = wD, cD = LD ? null !== (pD = await LD.take(KD)) && void 0 !== pD ? pD : await LD.reserveInstead(rD, KD) : await rD();
      return (0, sD.h)(KD), GD(DD, zD.endpoint, cD, wD, !1)
    }
    async function fD(DD, zD, wD, pD) {
      let KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const rD = await (0, gD.f)(zD, wD, pD, KD);
      return (0, sD.h)(KD.signal), GD(DD, zD, rD, KD, !0)
    }

    function ID(DD, zD, wD) {
      const pD = (0, gD.l)(DD, zD);
      return wD.createSocket ? wD.createSocket(pD) : new WebSocket(pD)
    }

    function BD(DD, zD, wD) {
      var pD;
      let sD = !1;
      return (null !== (pD = DD.setTimer) && void 0 !== pD ? pD : (DD, zD) => {
        setTimeout(DD, zD)
      })((() => {
        sD || zD()
      }), wD), () => {
        sD = !0
      }
    }
    async function GD(DD, zD, wD, pD, rD) {
      const {
        signal: gD
      } = pD, AD = ID(zD, wD, pD);
      let UD = !1,
        fD = null,
        GD = null;
      const hD = [];
      let nD = !1,
        MD = !1;
      const OD = DD => {
        var zD;
        MD = !0, null === (zD = GD) || void 0 === zD || zD.reject(new cD.c("the room socket closed before the resume", "closed", DD.code))
      };
      rD && AD.addEventListener("close", OD);
      const JD = (DD, zD) => {
          var wD;
          if (DD === (rD ? LD.D.Resumed : LD.D.Activated)) nD = !0, null === (wD = GD) || void 0 === wD || wD.resolve();
          else if (!rD || DD !== LD.D.ResumeRefused && DD !== LD.D.Activated)
            if (DD === LD.D.Error) {
              var pD;
              null === (pD = GD) || void 0 === pD || pD.reject(new cD.c(`the room refused the join (code ${zD})`, "roomError", zD))
            } else {
              var sD;
              null === (sD = GD) || void 0 === sD || sD.reject(new cD.c("the room socket closed before the join", "closed", zD, null, UD))
            }
          else {
            var KD;
            null === (KD = GD) || void 0 === KD || KD.reject(new cD.m("the core refused the resume: it held no game"))
          }
        },
        ED = DD.onConnection(((DD, zD, wD) => {
          null === fD ? hD.push([DD, zD, wD]) : DD === fD && JD(zD, wD)
        })),
        QD = DD.attachSocket(AD);
      if (null === QD) throw ED(), new cD.c("the core could not take the room socket", "attach");
      var XD;
      (fD = QD, rD) && (null === (XD = pD.onAttached) || void 0 === XD || XD.call(pD));
      const VD = rD ? null : new KD.b((() => {
        var zD, wD;
        null === (zD = DD.flushNet) || void 0 === zD || zD.call(DD), null === (wD = GD) || void 0 === wD || wD.reject(new KD.c(UD ? "socket" : "socket_unopened"))
      }));
      AD.addEventListener("open", (() => {
        UD = !0, null === VD || void 0 === VD || VD.socketOpened()
      }), {
        once: !0
      });
      let PD = !1;
      const CD = () => {
        if (PD) return;
        if (PD = !0, ED(), rD && (AD.removeEventListener("close", OD), !nD && !(null !== gD && void 0 !== gD && gD.aborted && (0, sD.d)(gD) instanceof cD.q))) return void(MD || DD.closeSocket(QD));
        nD && DD.leaveRoom(QD) || DD.sendRaw(QD, cD.i) ? BD(pD, (() => {
          DD.closeSocket(QD)
        }), cD.e) : DD.closeSocket(QD)
      };
      try {
        await new Promise(((zD, wD) => {
          const pD = () => {
            var zD;
            rD && (null === (zD = DD.flushNet) || void 0 === zD || zD.call(DD));
            wD((0, sD.d)(gD))
          };
          null === gD || void 0 === gD || gD.addEventListener("abort", pD, {
            once: !0
          }), GD = {
            resolve: () => {
              null === gD || void 0 === gD || gD.removeEventListener("abort", pD), zD()
            },
            reject: DD => {
              null === gD || void 0 === gD || gD.removeEventListener("abort", pD), wD(DD)
            }
          };
          for (const [DD, sD, KD] of hD.splice(0)) DD === fD && JD(sD, KD)
        })), null === VD || void 0 === VD || VD.answered()
      } catch (xD) {
        throw CD(), xD
      } finally {
        null === VD || void 0 === VD || VD.stop()
      }
      rD && AD.removeEventListener("close", OD);
      return {
        conn: QD,
        seat: wD,
        leave: CD,
        detach: () => {
          PD = !0, ED()
        },
        endJoinAd: () => !PD && DD.sendRaw(QD, RD)
      }
    }
    async function hD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const sD = ID(DD, await (0, gD.f)(DD, zD, wD, pD), pD);
        sD.binaryType = "arraybuffer", await new Promise((DD => {
          const zD = BD(pD, (() => {
            sD.close(), DD()
          }), cD.e);
          sD.addEventListener("open", (() => {
            sD.send(cD.i)
          })), sD.addEventListener("close", (() => {
            zD(), DD()
          }))
        }))
      } catch (sD) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", sD)
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);