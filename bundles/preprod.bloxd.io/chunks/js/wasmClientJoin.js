export const id = 70;
export const ids = [70];
export const modules = {
  42137: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => EW,
      e: () => tW
    });
    const mW = new TextDecoder;

    function EW(WW) {
      const iW = new NW(WW),
        OW = iW.value();
      if (iW.at !== WW.length) throw new Error(`msgpack: ${WW.length-iW.at} bytes after the value`);
      return OW
    }
    class NW {
      constructor(WW) {
        this.bytes = WW, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(WW.buffer, WW.byteOffset, WW.byteLength)
      }
      value() {
        const WW = this.u8();
        if (WW <= 127) return WW;
        if (WW >= 224) return WW - 256;
        if (WW >= 128 && WW <= 143) return this.map(15 & WW);
        if (WW >= 144 && WW <= 159) return this.array(15 & WW);
        if (WW >= 160 && WW <= 191) return this.str(31 & WW);
        switch (WW) {
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
            throw new Error(`msgpack: unknown byte 0x${WW.toString(16)} at ${this.at-1}`)
        }
      }
      take(WW) {
        const iW = this.at;
        if (iW + WW > this.bytes.length) throw new Error(`msgpack: ${WW} bytes past the end at ${iW}`);
        return this.at = iW + WW, iW
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
      int64(WW) {
        const iW = this.take(8);
        return WW ? this.view.getBigInt64(iW, !1) : this.view.getBigUint64(iW, !1)
      }
      str(WW) {
        const iW = this.take(WW),
          OW = this.bytes;
        if (WW < 16) {
          let EW = "";
          for (let NW = iW; NW < iW + WW; NW++) {
            const PW = OW[NW];
            if (PW >= 128) return mW.decode(OW.subarray(iW, iW + WW));
            EW += String.fromCharCode(PW)
          }
          return EW
        }
        return mW.decode(OW.subarray(iW, iW + WW))
      }
      bin(WW) {
        const iW = this.take(WW);
        return this.bytes.subarray(iW, iW + WW)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(WW) {
        this.enter();
        const iW = [];
        for (let OW = 0; OW < WW; OW++) iW.push(this.value());
        return this.depth--, iW
      }
      map(WW) {
        this.enter();
        const iW = {};
        for (let OW = 0; OW < WW; OW++) {
          const WW = this.value(),
            OW = this.value();
          iW["__proto__" === WW ? "__proto_" : String(WW)] = OW
        }
        return this.depth--, iW
      }
      ext(WW) {
        const iW = this.view.getInt8(this.take(1)),
          OW = this.take(WW);
        if (0 !== iW) {
          if (-1 === iW) {
            if (1 === WW) return new Date(NaN);
            if (4 === WW) return new Date(1e3 * this.view.getUint32(OW, !1));
            if (8 === WW) {
              const WW = this.view.getUint32(OW, !1),
                iW = WW >>> 2,
                mW = 4294967296 * (3 & WW) + this.view.getUint32(OW + 4, !1);
              return new Date(1e3 * mW + iW / 1e6)
            }
            if (12 === WW) {
              const WW = this.view.getUint32(OW, !1),
                iW = 4294967296 * this.view.getInt32(OW + 4, !1) + this.view.getUint32(OW + 8, !1);
              return new Date(1e3 * iW + WW / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${iW} of ${WW} bytes`)
        }
      }
    }
    const PW = new TextEncoder,
      LW = -(2n ** 63n),
      cW = 2n ** 63n - 1n,
      wW = 2n ** 64n - 1n;

    function tW(WW) {
      const iW = new ZW;
      return iW.value(WW, 0), iW.bytes()
    }
    class ZW {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(WW, iW) {
        if (iW > 512) throw new Error("msgpack: nested too deep");
        switch (typeof WW) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(WW ? 195 : 194);
          case "number":
            return void this.number(WW);
          case "bigint":
            return void this.bigint(WW);
          case "string":
            return void this.string(WW);
          case "object":
            if (null === WW) this.u8(192);
            else if (WW instanceof Uint8Array) this.head(WW.length, 196, -1, 197, 198), this.room(WW.length), this.buf.set(WW, this.at), this.at += WW.length;
            else if (Array.isArray(WW)) {
              this.head(WW.length, 220, 144, 220, 221);
              for (const OW of WW) this.value(OW, iW + 1)
            } else {
              var OW, mW;
              if (Object.getPrototypeOf(WW) !== Object.prototype && null !== Object.getPrototypeOf(WW)) throw new Error(`msgpack: can't encode a ${null!==(OW=null===(mW=WW.constructor)||void 0===mW?void 0:mW.name)&&void 0!==OW?OW:"object"}`);
              {
                const OW = Object.keys(WW);
                this.head(OW.length, 222, 128, 222, 223);
                for (const mW of OW) this.string(mW), this.value(WW[mW], iW + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof WW)
        }
      }
      number(WW) {
        Number.isInteger(WW) && WW >= -2147483648 && WW <= 4294967295 ? WW >= 0 ? WW < 128 ? this.u8(WW) : WW < 256 ? (this.u8(204), this.u8(WW)) : WW < 65536 ? (this.u8(205), this.u16(WW)) : (this.u8(206), this.u32(WW)) : WW >= -32 ? this.u8(WW + 256) : WW >= -128 ? (this.u8(208), this.u8(WW + 256)) : WW >= -32768 ? (this.u8(209), this.u16(WW + 65536)) : (this.u8(210), this.u32(WW >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, WW, !1), this.at += 8)
      }
      bigint(WW) {
        const iW = WW >= LW && WW <= cW;
        if (!iW && (WW < 0n || WW > wW)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(iW ? 211 : 207), this.room(8), iW ? this.view.setBigInt64(this.at, WW, !1) : this.view.setBigUint64(this.at, WW, !1), this.at += 8
      }
      string(WW) {
        const iW = PW.encode(WW);
        this.head(iW.length, 217, 160, 218, 219), this.room(iW.length), this.buf.set(iW, this.at), this.at += iW.length
      }
      head(WW, iW, OW, mW, EW) {
        OW >= 0 && WW < (160 === OW ? 32 : 16) ? this.u8(OW | WW) : iW !== mW && WW < 256 ? (this.u8(iW), this.u8(WW)) : WW < 65536 ? (this.u8(mW), this.u16(WW)) : (this.u8(EW), this.u32(WW))
      }
      room(WW) {
        if (this.at + WW <= this.buf.length) return;
        let iW = 2 * this.buf.length;
        for (; iW < this.at + WW;) iW *= 2;
        const OW = new Uint8Array(iW);
        OW.set(this.buf.subarray(0, this.at)), this.buf = OW, this.view = new DataView(OW.buffer)
      }
      u8(WW) {
        this.room(1), this.buf[this.at++] = WW
      }
      u16(WW) {
        this.room(2), this.view.setUint16(this.at, WW, !1), this.at += 2
      }
      u32(WW) {
        this.room(4), this.view.setUint32(this.at, WW, !1), this.at += 4
      }
    }
  },
  54800: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      joinRoom: () => ZW,
      leaveHeldSeat: () => UW,
      resumeRoom: () => lW
    });
    var mW = OW(154),
      EW = OW(1194),
      NW = OW(37727),
      PW = OW(42137),
      LW = OW(5546),
      cW = OW(42307),
      wW = OW(42422);
    const tW = Uint8Array.of(13, ...(0, PW.e)(mW.f));
    async function ZW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await xW(WW, iW, OW)
      } catch (EW) {
        var mW;
        const NW = await (null === (mW = iW.optionsAfterRefusal) || void 0 === mW ? void 0 : mW.call(iW, EW));
        if (!NW) throw EW;
        return xW(WW, {
          ...iW,
          joinOptions: NW
        }, {
          ...OW,
          early: void 0
        })
      }
    }
    async function xW(WW, iW, OW) {
      var mW;
      const {
        signal: NW
      } = OW, PW = () => (0, wW.f)(iW.endpoint, iW.roomName, iW.joinOptions, OW), {
        early: LW
      } = OW, cW = LW ? null !== (mW = await LW.take(NW)) && void 0 !== mW ? mW : await LW.reserveInstead(PW, NW) : await PW();
      return (0, EW.s)(NW), jW(WW, iW.endpoint, cW, OW, !1)
    }
    async function lW(WW, iW, OW, mW) {
      let NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const PW = await (0, wW.d)(iW, OW, mW, NW);
      return (0, EW.s)(NW.signal), jW(WW, iW, PW, NW, !0)
    }

    function AW(WW, iW, OW) {
      const mW = (0, wW.h)(WW, iW);
      return OW.createSocket ? OW.createSocket(mW) : new WebSocket(mW)
    }

    function bW(WW, iW, OW) {
      var mW;
      let EW = !1;
      return (null !== (mW = WW.setTimer) && void 0 !== mW ? mW : (WW, iW) => {
        setTimeout(WW, iW)
      })((() => {
        EW || iW()
      }), OW), () => {
        EW = !0
      }
    }
    async function jW(WW, iW, OW, mW, PW) {
      const {
        signal: wW
      } = mW, ZW = AW(iW, OW, mW);
      let xW = !1,
        lW = null,
        jW = null;
      const UW = [];
      let kW = !1,
        sW = !1;
      const MW = WW => {
        var iW;
        sW = !0, null === (iW = jW) || void 0 === iW || iW.reject(new cW.c("the room socket closed before the resume", "closed", WW.code))
      };
      PW && ZW.addEventListener("close", MW);
      const KW = (WW, iW) => {
          var OW;
          if (WW === (PW ? LW.A.Resumed : LW.A.Activated)) kW = !0, null === (OW = jW) || void 0 === OW || OW.resolve();
          else if (!PW || WW !== LW.A.ResumeRefused && WW !== LW.A.Activated)
            if (WW === LW.A.Error) {
              var mW;
              null === (mW = jW) || void 0 === mW || mW.reject(new cW.c(`the room refused the join (code ${iW})`, "roomError", iW))
            } else {
              var EW;
              null === (EW = jW) || void 0 === EW || EW.reject(new cW.c("the room socket closed before the join", "closed", iW, null, xW))
            }
          else {
            var NW;
            null === (NW = jW) || void 0 === NW || NW.reject(new cW.p("the core refused the resume: it held no game"))
          }
        },
        SW = WW.onConnection(((WW, iW, OW) => {
          null === lW ? UW.push([WW, iW, OW]) : WW === lW && KW(iW, OW)
        })),
        YW = WW.attachSocket(ZW);
      if (null === YW) throw SW(), new cW.c("the core could not take the room socket", "attach");
      var yW;
      (lW = YW, PW) && (null === (yW = mW.onAttached) || void 0 === yW || yW.call(mW));
      const TW = PW ? null : new NW.b((() => {
        var iW, OW;
        null === (iW = WW.flushNet) || void 0 === iW || iW.call(WW), null === (OW = jW) || void 0 === OW || OW.reject(new NW.c(xW ? "socket" : "socket_unopened"))
      }));
      ZW.addEventListener("open", (() => {
        xW = !0, null === TW || void 0 === TW || TW.socketOpened()
      }), {
        once: !0
      });
      let JW = !1;
      const hW = () => {
        if (JW) return;
        if (JW = !0, SW(), PW && (ZW.removeEventListener("close", MW), !kW && !(null !== wW && void 0 !== wW && wW.aborted && (0, EW.f)(wW) instanceof cW.t))) return void(sW || WW.closeSocket(YW));
        kW && WW.leaveRoom(YW) || WW.sendRaw(YW, cW.j) ? bW(mW, (() => {
          WW.closeSocket(YW)
        }), cW.e) : WW.closeSocket(YW)
      };
      try {
        await new Promise(((iW, OW) => {
          const mW = () => {
            var iW;
            PW && (null === (iW = WW.flushNet) || void 0 === iW || iW.call(WW));
            OW((0, EW.f)(wW))
          };
          null === wW || void 0 === wW || wW.addEventListener("abort", mW, {
            once: !0
          }), jW = {
            resolve: () => {
              null === wW || void 0 === wW || wW.removeEventListener("abort", mW), iW()
            },
            reject: WW => {
              null === wW || void 0 === wW || wW.removeEventListener("abort", mW), OW(WW)
            }
          };
          for (const [WW, EW, NW] of UW.splice(0)) WW === lW && KW(EW, NW)
        })), null === TW || void 0 === TW || TW.answered()
      } catch (HW) {
        throw hW(), HW
      } finally {
        null === TW || void 0 === TW || TW.stop()
      }
      PW && ZW.removeEventListener("close", MW);
      return {
        conn: YW,
        seat: OW,
        leave: hW,
        detach: () => {
          JW = !0, SW()
        },
        endJoinAd: () => !JW && WW.sendRaw(YW, tW)
      }
    }
    async function UW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const EW = AW(WW, await (0, wW.d)(WW, iW, OW, mW), mW);
        EW.binaryType = "arraybuffer", await new Promise((WW => {
          const iW = bW(mW, (() => {
            EW.close(), WW()
          }), cW.e);
          EW.addEventListener("open", (() => {
            EW.send(cW.j)
          })), EW.addEventListener("close", (() => {
            iW(), WW()
          }))
        }))
      } catch (EW) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", EW)
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);