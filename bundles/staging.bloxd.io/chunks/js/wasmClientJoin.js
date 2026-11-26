export const id = 69;
export const ids = [69];
export const modules = {
  41946: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH,
      g: () => EH
    });
    const AH = new TextDecoder;

    function rH(HH) {
      const BH = new SH(HH),
        LH = BH.value();
      if (BH.at !== HH.length) throw new Error(`msgpack: ${HH.length-BH.at} bytes after the value`);
      return LH
    }
    class SH {
      constructor(HH) {
        this.bytes = HH, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(HH.buffer, HH.byteOffset, HH.byteLength)
      }
      value() {
        const HH = this.u8();
        if (HH <= 127) return HH;
        if (HH >= 224) return HH - 256;
        if (HH >= 128 && HH <= 143) return this.map(15 & HH);
        if (HH >= 144 && HH <= 159) return this.array(15 & HH);
        if (HH >= 160 && HH <= 191) return this.str(31 & HH);
        switch (HH) {
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
            throw new Error(`msgpack: unknown byte 0x${HH.toString(16)} at ${this.at-1}`)
        }
      }
      take(HH) {
        const BH = this.at;
        if (BH + HH > this.bytes.length) throw new Error(`msgpack: ${HH} bytes past the end at ${BH}`);
        return this.at = BH + HH, BH
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
      int64(HH) {
        const BH = this.take(8);
        return HH ? this.view.getBigInt64(BH, !1) : this.view.getBigUint64(BH, !1)
      }
      str(HH) {
        const BH = this.take(HH),
          LH = this.bytes;
        if (HH < 16) {
          let rH = "";
          for (let SH = BH; SH < BH + HH; SH++) {
            const hH = LH[SH];
            if (hH >= 128) return AH.decode(LH.subarray(BH, BH + HH));
            rH += String.fromCharCode(hH)
          }
          return rH
        }
        return AH.decode(LH.subarray(BH, BH + HH))
      }
      bin(HH) {
        const BH = this.take(HH);
        return this.bytes.subarray(BH, BH + HH)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(HH) {
        this.enter();
        const BH = [];
        for (let LH = 0; LH < HH; LH++) BH.push(this.value());
        return this.depth--, BH
      }
      map(HH) {
        this.enter();
        const BH = {};
        for (let LH = 0; LH < HH; LH++) {
          const HH = this.value(),
            LH = this.value();
          BH["__proto__" === HH ? "__proto_" : String(HH)] = LH
        }
        return this.depth--, BH
      }
      ext(HH) {
        const BH = this.view.getInt8(this.take(1)),
          LH = this.take(HH);
        if (0 !== BH) {
          if (-1 === BH) {
            if (1 === HH) return new Date(NaN);
            if (4 === HH) return new Date(1e3 * this.view.getUint32(LH, !1));
            if (8 === HH) {
              const HH = this.view.getUint32(LH, !1),
                BH = HH >>> 2,
                AH = 4294967296 * (3 & HH) + this.view.getUint32(LH + 4, !1);
              return new Date(1e3 * AH + BH / 1e6)
            }
            if (12 === HH) {
              const HH = this.view.getUint32(LH, !1),
                BH = 4294967296 * this.view.getInt32(LH + 4, !1) + this.view.getUint32(LH + 8, !1);
              return new Date(1e3 * BH + HH / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${BH} of ${HH} bytes`)
        }
      }
    }
    const hH = new TextEncoder,
      tH = -(2n ** 63n),
      zH = 2n ** 63n - 1n,
      CH = 2n ** 64n - 1n;

    function EH(HH) {
      const BH = new XH;
      return BH.value(HH, 0), BH.bytes()
    }
    class XH {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(HH, BH) {
        if (BH > 512) throw new Error("msgpack: nested too deep");
        switch (typeof HH) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(HH ? 195 : 194);
          case "number":
            return void this.number(HH);
          case "bigint":
            return void this.bigint(HH);
          case "string":
            return void this.string(HH);
          case "object":
            if (null === HH) this.u8(192);
            else if (HH instanceof Uint8Array) this.head(HH.length, 196, -1, 197, 198), this.room(HH.length), this.buf.set(HH, this.at), this.at += HH.length;
            else if (Array.isArray(HH)) {
              this.head(HH.length, 220, 144, 220, 221);
              for (const LH of HH) this.value(LH, BH + 1)
            } else {
              var LH, AH;
              if (Object.getPrototypeOf(HH) !== Object.prototype && null !== Object.getPrototypeOf(HH)) throw new Error(`msgpack: can't encode a ${null!==(LH=null===(AH=HH.constructor)||void 0===AH?void 0:AH.name)&&void 0!==LH?LH:"object"}`);
              {
                const LH = Object.keys(HH);
                this.head(LH.length, 222, 128, 222, 223);
                for (const AH of LH) this.string(AH), this.value(HH[AH], BH + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof HH)
        }
      }
      number(HH) {
        Number.isInteger(HH) && HH >= -2147483648 && HH <= 4294967295 ? HH >= 0 ? HH < 128 ? this.u8(HH) : HH < 256 ? (this.u8(204), this.u8(HH)) : HH < 65536 ? (this.u8(205), this.u16(HH)) : (this.u8(206), this.u32(HH)) : HH >= -32 ? this.u8(HH + 256) : HH >= -128 ? (this.u8(208), this.u8(HH + 256)) : HH >= -32768 ? (this.u8(209), this.u16(HH + 65536)) : (this.u8(210), this.u32(HH >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, HH, !1), this.at += 8)
      }
      bigint(HH) {
        const BH = HH >= tH && HH <= zH;
        if (!BH && (HH < 0n || HH > CH)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(BH ? 211 : 207), this.room(8), BH ? this.view.setBigInt64(this.at, HH, !1) : this.view.setBigUint64(this.at, HH, !1), this.at += 8
      }
      string(HH) {
        const BH = hH.encode(HH);
        this.head(BH.length, 217, 160, 218, 219), this.room(BH.length), this.buf.set(BH, this.at), this.at += BH.length
      }
      head(HH, BH, LH, AH, rH) {
        LH >= 0 && HH < (160 === LH ? 32 : 16) ? this.u8(LH | HH) : BH !== AH && HH < 256 ? (this.u8(BH), this.u8(HH)) : HH < 65536 ? (this.u8(AH), this.u16(HH)) : (this.u8(rH), this.u32(HH))
      }
      room(HH) {
        if (this.at + HH <= this.buf.length) return;
        let BH = 2 * this.buf.length;
        for (; BH < this.at + HH;) BH *= 2;
        const LH = new Uint8Array(BH);
        LH.set(this.buf.subarray(0, this.at)), this.buf = LH, this.view = new DataView(LH.buffer)
      }
      u8(HH) {
        this.room(1), this.buf[this.at++] = HH
      }
      u16(HH) {
        this.room(2), this.view.setUint16(this.at, HH, !1), this.at += 2
      }
      u32(HH) {
        this.room(4), this.view.setUint32(this.at, HH, !1), this.at += 4
      }
    }
  },
  54546: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      joinRoom: () => XH,
      leaveHeldSeat: () => MH,
      resumeRoom: () => YH
    });
    var AH = LH(152),
      rH = LH(1148),
      SH = LH(37366),
      hH = LH(41946),
      tH = LH(5265),
      zH = LH(42006),
      CH = LH(42228);
    const EH = Uint8Array.of(13, ...(0, hH.g)(AH.f));
    async function XH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await GH(HH, BH, LH)
      } catch (rH) {
        var AH;
        const SH = await (null === (AH = BH.optionsAfterRefusal) || void 0 === AH ? void 0 : AH.call(BH, rH));
        if (!SH) throw rH;
        return GH(HH, {
          ...BH,
          joinOptions: SH
        }, {
          ...LH,
          early: void 0
        })
      }
    }
    async function GH(HH, BH, LH) {
      var AH;
      const {
        signal: SH
      } = LH, hH = () => (0, CH.h)(BH.endpoint, BH.roomName, BH.joinOptions, LH), {
        early: tH
      } = LH, zH = tH ? null !== (AH = await tH.take(SH)) && void 0 !== AH ? AH : await tH.reserveInstead(hH, SH) : await hH();
      return (0, rH.t)(SH), WH(HH, BH.endpoint, zH, LH, !1)
    }
    async function YH(HH, BH, LH, AH) {
      let SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const hH = await (0, CH.f)(BH, LH, AH, SH);
      return (0, rH.t)(SH.signal), WH(HH, BH, hH, SH, !0)
    }

    function uH(HH, BH, LH) {
      const AH = (0, CH.l)(HH, BH);
      return LH.createSocket ? LH.createSocket(AH) : new WebSocket(AH)
    }

    function QH(HH, BH, LH) {
      var AH;
      let rH = !1;
      return (null !== (AH = HH.setTimer) && void 0 !== AH ? AH : (HH, BH) => {
        setTimeout(HH, BH)
      })((() => {
        rH || BH()
      }), LH), () => {
        rH = !0
      }
    }
    async function WH(HH, BH, LH, AH, hH) {
      const {
        signal: CH
      } = AH, XH = uH(BH, LH, AH);
      let GH = !1,
        YH = null,
        WH = null;
      const MH = [];
      let xH = !1,
        vH = !1;
      const PH = HH => {
        var BH;
        vH = !0, null === (BH = WH) || void 0 === BH || BH.reject(new zH.d("the room socket closed before the resume", "closed", HH.code))
      };
      hH && XH.addEventListener("close", PH);
      const TH = (HH, BH) => {
          var LH;
          if (HH === (hH ? tH.C.Resumed : tH.C.Activated)) xH = !0, null === (LH = WH) || void 0 === LH || LH.resolve();
          else if (!hH || HH !== tH.C.ResumeRefused && HH !== tH.C.Activated)
            if (HH === tH.C.Error) {
              var AH;
              null === (AH = WH) || void 0 === AH || AH.reject(new zH.d(`the room refused the join (code ${BH})`, "roomError", BH))
            } else {
              var rH;
              null === (rH = WH) || void 0 === rH || rH.reject(new zH.d("the room socket closed before the join", "closed", BH, null, GH))
            }
          else {
            var SH;
            null === (SH = WH) || void 0 === SH || SH.reject(new zH.o("the core refused the resume: it held no game"))
          }
        },
        UH = HH.onConnection(((HH, BH, LH) => {
          null === YH ? MH.push([HH, BH, LH]) : HH === YH && TH(BH, LH)
        })),
        VH = HH.attachSocket(XH);
      if (null === VH) throw UH(), new zH.d("the core could not take the room socket", "attach");
      var OH;
      (YH = VH, hH) && (null === (OH = AH.onAttached) || void 0 === OH || OH.call(AH));
      const bH = hH ? null : new SH.b((() => {
        var BH, LH;
        null === (BH = HH.flushNet) || void 0 === BH || BH.call(HH), null === (LH = WH) || void 0 === LH || LH.reject(new SH.c(GH ? "socket" : "socket_unopened"))
      }));
      XH.addEventListener("open", (() => {
        GH = !0, null === bH || void 0 === bH || bH.socketOpened()
      }), {
        once: !0
      });
      let kH = !1;
      const mH = () => {
        if (kH) return;
        if (kH = !0, UH(), hH && (XH.removeEventListener("close", PH), !xH && !(null !== CH && void 0 !== CH && CH.aborted && (0, rH.g)(CH) instanceof zH.q))) return void(vH || HH.closeSocket(VH));
        xH && HH.leaveRoom(VH) || HH.sendRaw(VH, zH.m) ? QH(AH, (() => {
          HH.closeSocket(VH)
        }), zH.f) : HH.closeSocket(VH)
      };
      try {
        await new Promise(((BH, LH) => {
          const AH = () => {
            var BH;
            hH && (null === (BH = HH.flushNet) || void 0 === BH || BH.call(HH));
            LH((0, rH.g)(CH))
          };
          null === CH || void 0 === CH || CH.addEventListener("abort", AH, {
            once: !0
          }), WH = {
            resolve: () => {
              null === CH || void 0 === CH || CH.removeEventListener("abort", AH), BH()
            },
            reject: HH => {
              null === CH || void 0 === CH || CH.removeEventListener("abort", AH), LH(HH)
            }
          };
          for (const [HH, rH, SH] of MH.splice(0)) HH === YH && TH(rH, SH)
        })), null === bH || void 0 === bH || bH.answered()
      } catch (oH) {
        throw mH(), oH
      } finally {
        null === bH || void 0 === bH || bH.stop()
      }
      hH && XH.removeEventListener("close", PH);
      return {
        conn: VH,
        seat: LH,
        leave: mH,
        detach: () => {
          kH = !0, UH()
        },
        endJoinAd: () => !kH && HH.sendRaw(VH, EH)
      }
    }
    async function MH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const rH = uH(HH, await (0, CH.f)(HH, BH, LH, AH), AH);
        rH.binaryType = "arraybuffer", await new Promise((HH => {
          const BH = QH(AH, (() => {
            rH.close(), HH()
          }), zH.f);
          rH.addEventListener("open", (() => {
            rH.send(zH.m)
          })), rH.addEventListener("close", (() => {
            BH(), HH()
          }))
        }))
      } catch (rH) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", rH)
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);