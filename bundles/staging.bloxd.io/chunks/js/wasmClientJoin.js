export const id = 54;
export const ids = [54];
export const modules = {
  39731: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => AY,
      f: () => vY
    });
    const FY = new TextDecoder;

    function AY(YY) {
      const rY = new IY(YY),
        DY = rY.value();
      if (rY.at !== YY.length) throw new Error(`msgpack: ${YY.length-rY.at} bytes after the value`);
      return DY
    }
    class IY {
      constructor(YY) {
        this.bytes = YY, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(YY.buffer, YY.byteOffset, YY.byteLength)
      }
      value() {
        const YY = this.u8();
        if (YY <= 127) return YY;
        if (YY >= 224) return YY - 256;
        if (YY >= 128 && YY <= 143) return this.map(15 & YY);
        if (YY >= 144 && YY <= 159) return this.array(15 & YY);
        if (YY >= 160 && YY <= 191) return this.str(31 & YY);
        switch (YY) {
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
            throw new Error(`msgpack: unknown byte 0x${YY.toString(16)} at ${this.at-1}`)
        }
      }
      take(YY) {
        const rY = this.at;
        if (rY + YY > this.bytes.length) throw new Error(`msgpack: ${YY} bytes past the end at ${rY}`);
        return this.at = rY + YY, rY
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
      int64(YY) {
        const rY = this.take(8);
        return YY ? this.view.getBigInt64(rY, !1) : this.view.getBigUint64(rY, !1)
      }
      str(YY) {
        const rY = this.take(YY),
          DY = this.bytes;
        if (YY < 16) {
          let AY = "";
          for (let IY = rY; IY < rY + YY; IY++) {
            const RY = DY[IY];
            if (RY >= 128) return FY.decode(DY.subarray(rY, rY + YY));
            AY += String.fromCharCode(RY)
          }
          return AY
        }
        return FY.decode(DY.subarray(rY, rY + YY))
      }
      bin(YY) {
        const rY = this.take(YY);
        return this.bytes.subarray(rY, rY + YY)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(YY) {
        this.enter();
        const rY = [];
        for (let DY = 0; DY < YY; DY++) rY.push(this.value());
        return this.depth--, rY
      }
      map(YY) {
        this.enter();
        const rY = {};
        for (let DY = 0; DY < YY; DY++) {
          const YY = this.value(),
            DY = this.value();
          rY["__proto__" === YY ? "__proto_" : String(YY)] = DY
        }
        return this.depth--, rY
      }
      ext(YY) {
        const rY = this.view.getInt8(this.take(1)),
          DY = this.take(YY);
        if (0 !== rY) {
          if (-1 === rY) {
            if (1 === YY) return new Date(NaN);
            if (4 === YY) return new Date(1e3 * this.view.getUint32(DY, !1));
            if (8 === YY) {
              const YY = this.view.getUint32(DY, !1),
                rY = YY >>> 2,
                FY = 4294967296 * (3 & YY) + this.view.getUint32(DY + 4, !1);
              return new Date(1e3 * FY + rY / 1e6)
            }
            if (12 === YY) {
              const YY = this.view.getUint32(DY, !1),
                rY = 4294967296 * this.view.getInt32(DY + 4, !1) + this.view.getUint32(DY + 8, !1);
              return new Date(1e3 * rY + YY / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${rY} of ${YY} bytes`)
        }
      }
    }
    const RY = new TextEncoder,
      OY = -(2n ** 63n),
      gY = 2n ** 63n - 1n,
      aY = 2n ** 64n - 1n;

    function vY(YY) {
      const rY = new uY;
      return rY.value(YY, 0), rY.bytes()
    }
    class uY {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(YY, rY) {
        if (rY > 512) throw new Error("msgpack: nested too deep");
        switch (typeof YY) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(YY ? 195 : 194);
          case "number":
            return void this.number(YY);
          case "bigint":
            return void this.bigint(YY);
          case "string":
            return void this.string(YY);
          case "object":
            if (null === YY) this.u8(192);
            else if (YY instanceof Uint8Array) this.head(YY.length, 196, -1, 197, 198), this.room(YY.length), this.buf.set(YY, this.at), this.at += YY.length;
            else if (Array.isArray(YY)) {
              this.head(YY.length, 220, 144, 220, 221);
              for (const DY of YY) this.value(DY, rY + 1)
            } else {
              var DY, FY;
              if (Object.getPrototypeOf(YY) !== Object.prototype && null !== Object.getPrototypeOf(YY)) throw new Error(`msgpack: can't encode a ${null!==(DY=null===(FY=YY.constructor)||void 0===FY?void 0:FY.name)&&void 0!==DY?DY:"object"}`);
              {
                const DY = Object.keys(YY);
                this.head(DY.length, 222, 128, 222, 223);
                for (const FY of DY) this.string(FY), this.value(YY[FY], rY + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof YY)
        }
      }
      number(YY) {
        Number.isInteger(YY) && YY >= -2147483648 && YY <= 4294967295 ? YY >= 0 ? YY < 128 ? this.u8(YY) : YY < 256 ? (this.u8(204), this.u8(YY)) : YY < 65536 ? (this.u8(205), this.u16(YY)) : (this.u8(206), this.u32(YY)) : YY >= -32 ? this.u8(YY + 256) : YY >= -128 ? (this.u8(208), this.u8(YY + 256)) : YY >= -32768 ? (this.u8(209), this.u16(YY + 65536)) : (this.u8(210), this.u32(YY >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, YY, !1), this.at += 8)
      }
      bigint(YY) {
        const rY = YY >= OY && YY <= gY;
        if (!rY && (YY < 0n || YY > aY)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(rY ? 211 : 207), this.room(8), rY ? this.view.setBigInt64(this.at, YY, !1) : this.view.setBigUint64(this.at, YY, !1), this.at += 8
      }
      string(YY) {
        const rY = RY.encode(YY);
        this.head(rY.length, 217, 160, 218, 219), this.room(rY.length), this.buf.set(rY, this.at), this.at += rY.length
      }
      head(YY, rY, DY, FY, AY) {
        DY >= 0 && YY < (160 === DY ? 32 : 16) ? this.u8(DY | YY) : rY !== FY && YY < 256 ? (this.u8(rY), this.u8(YY)) : YY < 65536 ? (this.u8(FY), this.u16(YY)) : (this.u8(AY), this.u32(YY))
      }
      room(YY) {
        if (this.at + YY <= this.buf.length) return;
        let rY = 2 * this.buf.length;
        for (; rY < this.at + YY;) rY *= 2;
        const DY = new Uint8Array(rY);
        DY.set(this.buf.subarray(0, this.at)), this.buf = DY, this.view = new DataView(DY.buffer)
      }
      u8(YY) {
        this.room(1), this.buf[this.at++] = YY
      }
      u16(YY) {
        this.room(2), this.view.setUint16(this.at, YY, !1), this.at += 2
      }
      u32(YY) {
        this.room(4), this.view.setUint32(this.at, YY, !1), this.at += 4
      }
    }
  },
  42348: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      joinRoom: () => sY,
      leaveHeldSeat: () => EY,
      resumeRoom: () => yY
    });
    var FY = DY(183),
      AY = DY(3258),
      IY = DY(38427),
      RY = DY(1744),
      OY = DY(39731),
      gY = DY(4376),
      aY = DY(39969),
      vY = DY(40039);
    const uY = Uint8Array.of(13, ...(0, OY.f)(FY.f));
    async function sY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await iY(YY, rY, DY)
      } catch (AY) {
        var FY;
        const IY = await (null === (FY = rY.optionsAfterRefusal) || void 0 === FY ? void 0 : FY.call(rY, AY));
        if (!IY) throw AY;
        return iY(YY, {
          ...rY,
          joinOptions: IY
        }, {
          ...DY,
          early: void 0
        })
      }
    }
    async function iY(YY, rY, DY) {
      var FY;
      const {
        signal: IY
      } = DY, RY = () => (0, vY.g)(rY.endpoint, rY.roomName, rY.joinOptions, DY), {
        early: OY
      } = DY, gY = OY ? null !== (FY = await OY.take(IY)) && void 0 !== FY ? FY : await OY.reserveInstead(RY, IY) : await RY();
      return (0, AY.q)(IY), WY(YY, rY.endpoint, gY, DY, !1)
    }
    async function yY(YY, rY, DY, FY) {
      let IY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const RY = await (0, vY.e)(rY, DY, FY, IY);
      return (0, AY.q)(IY.signal), WY(YY, rY, RY, IY, !0)
    }

    function QY(YY, rY, DY) {
      const FY = (0, vY.j)(YY, rY);
      return DY.createSocket ? DY.createSocket(FY) : new WebSocket(FY)
    }

    function oY(YY, rY, DY) {
      var FY;
      let AY = !1;
      return (null !== (FY = YY.setTimer) && void 0 !== FY ? FY : (YY, rY) => {
        setTimeout(YY, rY)
      })((() => {
        AY || rY()
      }), DY), () => {
        AY = !0
      }
    }
    async function WY(YY, rY, DY, FY, OY) {
      const {
        signal: vY
      } = FY, sY = QY(rY, DY, FY);
      let iY = null,
        yY = null;
      const WY = [];
      let EY = !1,
        mY = !1;
      const VY = YY => {
        var rY;
        mY = !0, null === (rY = yY) || void 0 === rY || rY.reject(new aY.c("the room socket closed before the resume", "closed", YY.code))
      };
      OY && sY.addEventListener("close", VY);
      const SY = (YY, rY) => {
          var DY;
          if (YY === (OY ? gY.C.Resumed : gY.C.Activated)) EY = !0, null === (DY = yY) || void 0 === DY || DY.resolve();
          else if (!OY || YY !== gY.C.ResumeRefused && YY !== gY.C.Activated)
            if (YY === gY.C.Error) {
              var FY;
              null === (FY = yY) || void 0 === FY || FY.reject(new aY.c(`the room refused the join (code ${rY})`, "roomError", rY))
            } else {
              var AY;
              null === (AY = yY) || void 0 === AY || AY.reject(new aY.c("the room socket closed before the join", "closed", rY))
            }
          else {
            var IY;
            null === (IY = yY) || void 0 === IY || IY.reject(new aY.o("the core refused the resume: it held no game"))
          }
        },
        lY = YY.onConnection(((YY, rY, DY) => {
          null === iY ? WY.push([YY, rY, DY]) : YY === iY && SY(rY, DY)
        })),
        TY = YY.attachSocket(sY);
      if (null === TY) throw lY(), new aY.c("the core could not take the room socket", "attach");
      var eY;
      (iY = TY, OY) && (null === (eY = FY.onAttached) || void 0 === eY || eY.call(FY));
      const NY = OY ? null : new RY.e(IY.b, (() => {
        var rY, DY;
        null === (rY = YY.flushNet) || void 0 === rY || rY.call(YY), null === (DY = yY) || void 0 === DY || DY.reject(new IY.e)
      }));
      let BY = !1;
      const cY = () => {
        if (BY) return;
        if (BY = !0, lY(), OY && (sY.removeEventListener("close", VY), !EY && !(null !== vY && void 0 !== vY && vY.aborted && (0, AY.h)(vY) instanceof aY.s))) return void(mY || YY.closeSocket(TY));
        EY && YY.leaveRoom(TY) || YY.sendRaw(TY, aY.j) ? oY(FY, (() => {
          YY.closeSocket(TY)
        }), aY.d) : YY.closeSocket(TY)
      };
      try {
        await new Promise(((rY, DY) => {
          const FY = () => {
            var rY;
            OY && (null === (rY = YY.flushNet) || void 0 === rY || rY.call(YY));
            DY((0, AY.h)(vY))
          };
          null === vY || void 0 === vY || vY.addEventListener("abort", FY, {
            once: !0
          }), yY = {
            resolve: () => {
              null === vY || void 0 === vY || vY.removeEventListener("abort", FY), rY()
            },
            reject: YY => {
              null === vY || void 0 === vY || vY.removeEventListener("abort", FY), DY(YY)
            }
          };
          for (const [YY, AY, IY] of WY.splice(0)) YY === iY && SY(AY, IY)
        }))
      } catch (KY) {
        throw cY(), KY
      } finally {
        null === NY || void 0 === NY || NY.stop()
      }
      OY && sY.removeEventListener("close", VY);
      return {
        conn: TY,
        seat: DY,
        leave: cY,
        detach: () => {
          BY = !0, lY()
        },
        endJoinAd: () => {
          BY || YY.sendRaw(TY, uY)
        }
      }
    }
    async function EY(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const AY = QY(YY, await (0, vY.e)(YY, rY, DY, FY), FY);
        AY.binaryType = "arraybuffer", await new Promise((YY => {
          const rY = oY(FY, (() => {
            AY.close(), YY()
          }), aY.d);
          AY.addEventListener("open", (() => {
            AY.send(aY.j)
          })), AY.addEventListener("close", (() => {
            rY(), YY()
          }))
        }))
      } catch (AY) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", AY)
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);