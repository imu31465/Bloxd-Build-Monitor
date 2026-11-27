export const id = 70;
export const ids = [70];
export const modules = {
  42154: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR,
      i: () => VR
    });
    const yR = new TextDecoder;

    function tR(RR) {
      const JR = new uR(RR),
        GR = JR.value();
      if (JR.at !== RR.length) throw new Error(`msgpack: ${RR.length-JR.at} bytes after the value`);
      return GR
    }
    class uR {
      constructor(RR) {
        this.bytes = RR, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(RR.buffer, RR.byteOffset, RR.byteLength)
      }
      value() {
        const RR = this.u8();
        if (RR <= 127) return RR;
        if (RR >= 224) return RR - 256;
        if (RR >= 128 && RR <= 143) return this.map(15 & RR);
        if (RR >= 144 && RR <= 159) return this.array(15 & RR);
        if (RR >= 160 && RR <= 191) return this.str(31 & RR);
        switch (RR) {
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
            throw new Error(`msgpack: unknown byte 0x${RR.toString(16)} at ${this.at-1}`)
        }
      }
      take(RR) {
        const JR = this.at;
        if (JR + RR > this.bytes.length) throw new Error(`msgpack: ${RR} bytes past the end at ${JR}`);
        return this.at = JR + RR, JR
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
      int64(RR) {
        const JR = this.take(8);
        return RR ? this.view.getBigInt64(JR, !1) : this.view.getBigUint64(JR, !1)
      }
      str(RR) {
        const JR = this.take(RR),
          GR = this.bytes;
        if (RR < 16) {
          let tR = "";
          for (let uR = JR; uR < JR + RR; uR++) {
            const ZR = GR[uR];
            if (ZR >= 128) return yR.decode(GR.subarray(JR, JR + RR));
            tR += String.fromCharCode(ZR)
          }
          return tR
        }
        return yR.decode(GR.subarray(JR, JR + RR))
      }
      bin(RR) {
        const JR = this.take(RR);
        return this.bytes.subarray(JR, JR + RR)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(RR) {
        this.enter();
        const JR = [];
        for (let GR = 0; GR < RR; GR++) JR.push(this.value());
        return this.depth--, JR
      }
      map(RR) {
        this.enter();
        const JR = {};
        for (let GR = 0; GR < RR; GR++) {
          const RR = this.value(),
            GR = this.value();
          JR["__proto__" === RR ? "__proto_" : String(RR)] = GR
        }
        return this.depth--, JR
      }
      ext(RR) {
        const JR = this.view.getInt8(this.take(1)),
          GR = this.take(RR);
        if (0 !== JR) {
          if (-1 === JR) {
            if (1 === RR) return new Date(NaN);
            if (4 === RR) return new Date(1e3 * this.view.getUint32(GR, !1));
            if (8 === RR) {
              const RR = this.view.getUint32(GR, !1),
                JR = RR >>> 2,
                yR = 4294967296 * (3 & RR) + this.view.getUint32(GR + 4, !1);
              return new Date(1e3 * yR + JR / 1e6)
            }
            if (12 === RR) {
              const RR = this.view.getUint32(GR, !1),
                JR = 4294967296 * this.view.getInt32(GR + 4, !1) + this.view.getUint32(GR + 8, !1);
              return new Date(1e3 * JR + RR / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${JR} of ${RR} bytes`)
        }
      }
    }
    const ZR = new TextEncoder,
      qR = -(2n ** 63n),
      iR = 2n ** 63n - 1n,
      fR = 2n ** 64n - 1n;

    function VR(RR) {
      const JR = new KR;
      return JR.value(RR, 0), JR.bytes()
    }
    class KR {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(RR, JR) {
        if (JR > 512) throw new Error("msgpack: nested too deep");
        switch (typeof RR) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(RR ? 195 : 194);
          case "number":
            return void this.number(RR);
          case "bigint":
            return void this.bigint(RR);
          case "string":
            return void this.string(RR);
          case "object":
            if (null === RR) this.u8(192);
            else if (RR instanceof Uint8Array) this.head(RR.length, 196, -1, 197, 198), this.room(RR.length), this.buf.set(RR, this.at), this.at += RR.length;
            else if (Array.isArray(RR)) {
              this.head(RR.length, 220, 144, 220, 221);
              for (const GR of RR) this.value(GR, JR + 1)
            } else {
              var GR, yR;
              if (Object.getPrototypeOf(RR) !== Object.prototype && null !== Object.getPrototypeOf(RR)) throw new Error(`msgpack: can't encode a ${null!==(GR=null===(yR=RR.constructor)||void 0===yR?void 0:yR.name)&&void 0!==GR?GR:"object"}`);
              {
                const GR = Object.keys(RR);
                this.head(GR.length, 222, 128, 222, 223);
                for (const yR of GR) this.string(yR), this.value(RR[yR], JR + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof RR)
        }
      }
      number(RR) {
        Number.isInteger(RR) && RR >= -2147483648 && RR <= 4294967295 ? RR >= 0 ? RR < 128 ? this.u8(RR) : RR < 256 ? (this.u8(204), this.u8(RR)) : RR < 65536 ? (this.u8(205), this.u16(RR)) : (this.u8(206), this.u32(RR)) : RR >= -32 ? this.u8(RR + 256) : RR >= -128 ? (this.u8(208), this.u8(RR + 256)) : RR >= -32768 ? (this.u8(209), this.u16(RR + 65536)) : (this.u8(210), this.u32(RR >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, RR, !1), this.at += 8)
      }
      bigint(RR) {
        const JR = RR >= qR && RR <= iR;
        if (!JR && (RR < 0n || RR > fR)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(JR ? 211 : 207), this.room(8), JR ? this.view.setBigInt64(this.at, RR, !1) : this.view.setBigUint64(this.at, RR, !1), this.at += 8
      }
      string(RR) {
        const JR = ZR.encode(RR);
        this.head(JR.length, 217, 160, 218, 219), this.room(JR.length), this.buf.set(JR, this.at), this.at += JR.length
      }
      head(RR, JR, GR, yR, tR) {
        GR >= 0 && RR < (160 === GR ? 32 : 16) ? this.u8(GR | RR) : JR !== yR && RR < 256 ? (this.u8(JR), this.u8(RR)) : RR < 65536 ? (this.u8(yR), this.u16(RR)) : (this.u8(tR), this.u32(RR))
      }
      room(RR) {
        if (this.at + RR <= this.buf.length) return;
        let JR = 2 * this.buf.length;
        for (; JR < this.at + RR;) JR *= 2;
        const GR = new Uint8Array(JR);
        GR.set(this.buf.subarray(0, this.at)), this.buf = GR, this.view = new DataView(GR.buffer)
      }
      u8(RR) {
        this.room(1), this.buf[this.at++] = RR
      }
      u16(RR) {
        this.room(2), this.view.setUint16(this.at, RR, !1), this.at += 2
      }
      u32(RR) {
        this.room(4), this.view.setUint32(this.at, RR, !1), this.at += 4
      }
    }
  },
  54639: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      joinRoom: () => KR,
      leaveHeldSeat: () => nR,
      resumeRoom: () => rR
    });
    var yR = GR(163),
      tR = GR(1295),
      uR = GR(37640),
      ZR = GR(42154),
      qR = GR(5676),
      iR = GR(42329),
      fR = GR(42451);
    const VR = Uint8Array.of(13, ...(0, ZR.i)(yR.g));
    async function KR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await wR(RR, JR, GR)
      } catch (tR) {
        var yR;
        const uR = await (null === (yR = JR.optionsAfterRefusal) || void 0 === yR ? void 0 : yR.call(JR, tR));
        if (!uR) throw tR;
        return wR(RR, {
          ...JR,
          joinOptions: uR
        }, {
          ...GR,
          early: void 0
        })
      }
    }
    async function wR(RR, JR, GR) {
      var yR;
      const {
        signal: uR
      } = GR, ZR = () => (0, fR.j)(JR.endpoint, JR.roomName, JR.joinOptions, GR), {
        early: qR
      } = GR, iR = qR ? null !== (yR = await qR.take(uR)) && void 0 !== yR ? yR : await qR.reserveInstead(ZR, uR) : await ZR();
      return (0, tR.r)(uR), LR(RR, JR.endpoint, iR, GR, !1)
    }
    async function rR(RR, JR, GR, yR) {
      let uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const ZR = await (0, fR.h)(JR, GR, yR, uR);
      return (0, tR.r)(uR.signal), LR(RR, JR, ZR, uR, !0)
    }

    function eR(RR, JR, GR) {
      const yR = (0, fR.k)(RR, JR);
      return GR.createSocket ? GR.createSocket(yR) : new WebSocket(yR)
    }

    function aR(RR, JR, GR) {
      var yR;
      let tR = !1;
      return (null !== (yR = RR.setTimer) && void 0 !== yR ? yR : (RR, JR) => {
        setTimeout(RR, JR)
      })((() => {
        tR || JR()
      }), GR), () => {
        tR = !0
      }
    }
    async function LR(RR, JR, GR, yR, ZR) {
      const {
        signal: fR
      } = yR, KR = eR(JR, GR, yR);
      let wR = !1,
        rR = null,
        LR = null;
      const nR = [];
      let UR = !1,
        WR = !1;
      const AR = RR => {
        var JR;
        WR = !0, null === (JR = LR) || void 0 === JR || JR.reject(new iR.b("the room socket closed before the resume", "closed", RR.code))
      };
      ZR && KR.addEventListener("close", AR);
      const CR = (RR, JR) => {
          var GR;
          if (RR === (ZR ? qR.H.Resumed : qR.H.Activated)) UR = !0, null === (GR = LR) || void 0 === GR || GR.resolve();
          else if (!ZR || RR !== qR.H.ResumeRefused && RR !== qR.H.Activated)
            if (RR === qR.H.Error) {
              var yR;
              null === (yR = LR) || void 0 === yR || yR.reject(new iR.b(`the room refused the join (code ${JR})`, "roomError", JR))
            } else {
              var tR;
              null === (tR = LR) || void 0 === tR || tR.reject(new iR.b("the room socket closed before the join", "closed", JR, null, wR))
            }
          else {
            var uR;
            null === (uR = LR) || void 0 === uR || uR.reject(new iR.p("the core refused the resume: it held no game"))
          }
        },
        XR = RR.onConnection(((RR, JR, GR) => {
          null === rR ? nR.push([RR, JR, GR]) : RR === rR && CR(JR, GR)
        })),
        MR = RR.attachSocket(KR);
      if (null === MR) throw XR(), new iR.b("the core could not take the room socket", "attach");
      var BR;
      (rR = MR, ZR) && (null === (BR = yR.onAttached) || void 0 === BR || BR.call(yR));
      const lR = ZR ? null : new uR.d((() => {
        var JR, GR;
        null === (JR = RR.flushNet) || void 0 === JR || JR.call(RR), null === (GR = LR) || void 0 === GR || GR.reject(new uR.g(wR ? "socket" : "socket_unopened"))
      }));
      KR.addEventListener("open", (() => {
        wR = !0, null === lR || void 0 === lR || lR.socketOpened()
      }), {
        once: !0
      });
      let pR = !1;
      const gR = () => {
        if (pR) return;
        if (pR = !0, XR(), ZR && (KR.removeEventListener("close", AR), !UR && !(null !== fR && void 0 !== fR && fR.aborted && (0, tR.g)(fR) instanceof iR.s))) return void(WR || RR.closeSocket(MR));
        UR && RR.leaveRoom(MR) || RR.sendRaw(MR, iR.j) ? aR(yR, (() => {
          RR.closeSocket(MR)
        }), iR.e) : RR.closeSocket(MR)
      };
      try {
        await new Promise(((JR, GR) => {
          const yR = () => {
            var JR;
            ZR && (null === (JR = RR.flushNet) || void 0 === JR || JR.call(RR));
            GR((0, tR.g)(fR))
          };
          null === fR || void 0 === fR || fR.addEventListener("abort", yR, {
            once: !0
          }), LR = {
            resolve: () => {
              null === fR || void 0 === fR || fR.removeEventListener("abort", yR), JR()
            },
            reject: RR => {
              null === fR || void 0 === fR || fR.removeEventListener("abort", yR), GR(RR)
            }
          };
          for (const [RR, tR, uR] of nR.splice(0)) RR === rR && CR(tR, uR)
        })), null === lR || void 0 === lR || lR.answered()
      } catch (bR) {
        throw gR(), bR
      } finally {
        null === lR || void 0 === lR || lR.stop()
      }
      ZR && KR.removeEventListener("close", AR);
      return {
        conn: MR,
        seat: GR,
        leave: gR,
        detach: () => {
          pR = !0, XR()
        },
        endJoinAd: () => !pR && RR.sendRaw(MR, VR)
      }
    }
    async function nR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const tR = eR(RR, await (0, fR.h)(RR, JR, GR, yR), yR);
        tR.binaryType = "arraybuffer", await new Promise((RR => {
          const JR = aR(yR, (() => {
            tR.close(), RR()
          }), iR.e);
          tR.addEventListener("open", (() => {
            tR.send(iR.j)
          })), tR.addEventListener("close", (() => {
            JR(), RR()
          }))
        }))
      } catch (tR) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", tR)
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);