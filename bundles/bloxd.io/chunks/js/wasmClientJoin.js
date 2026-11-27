export const id = 70;
export const ids = [70];
export const modules = {
  42485: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr,
      e: () => pr
    });
    const Zr = new TextDecoder;

    function Wr(rr) {
      const Sr = new ar(rr),
        Qr = Sr.value();
      if (Sr.at !== rr.length) throw new Error(`msgpack: ${rr.length-Sr.at} bytes after the value`);
      return Qr
    }
    class ar {
      constructor(rr) {
        this.bytes = rr, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(rr.buffer, rr.byteOffset, rr.byteLength)
      }
      value() {
        const rr = this.u8();
        if (rr <= 127) return rr;
        if (rr >= 224) return rr - 256;
        if (rr >= 128 && rr <= 143) return this.map(15 & rr);
        if (rr >= 144 && rr <= 159) return this.array(15 & rr);
        if (rr >= 160 && rr <= 191) return this.str(31 & rr);
        switch (rr) {
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
            throw new Error(`msgpack: unknown byte 0x${rr.toString(16)} at ${this.at-1}`)
        }
      }
      take(rr) {
        const Sr = this.at;
        if (Sr + rr > this.bytes.length) throw new Error(`msgpack: ${rr} bytes past the end at ${Sr}`);
        return this.at = Sr + rr, Sr
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
      int64(rr) {
        const Sr = this.take(8);
        return rr ? this.view.getBigInt64(Sr, !1) : this.view.getBigUint64(Sr, !1)
      }
      str(rr) {
        const Sr = this.take(rr),
          Qr = this.bytes;
        if (rr < 16) {
          let Wr = "";
          for (let ar = Sr; ar < Sr + rr; ar++) {
            const jr = Qr[ar];
            if (jr >= 128) return Zr.decode(Qr.subarray(Sr, Sr + rr));
            Wr += String.fromCharCode(jr)
          }
          return Wr
        }
        return Zr.decode(Qr.subarray(Sr, Sr + rr))
      }
      bin(rr) {
        const Sr = this.take(rr);
        return this.bytes.subarray(Sr, Sr + rr)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(rr) {
        this.enter();
        const Sr = [];
        for (let Qr = 0; Qr < rr; Qr++) Sr.push(this.value());
        return this.depth--, Sr
      }
      map(rr) {
        this.enter();
        const Sr = {};
        for (let Qr = 0; Qr < rr; Qr++) {
          const rr = this.value(),
            Qr = this.value();
          Sr["__proto__" === rr ? "__proto_" : String(rr)] = Qr
        }
        return this.depth--, Sr
      }
      ext(rr) {
        const Sr = this.view.getInt8(this.take(1)),
          Qr = this.take(rr);
        if (0 !== Sr) {
          if (-1 === Sr) {
            if (1 === rr) return new Date(NaN);
            if (4 === rr) return new Date(1e3 * this.view.getUint32(Qr, !1));
            if (8 === rr) {
              const rr = this.view.getUint32(Qr, !1),
                Sr = rr >>> 2,
                Zr = 4294967296 * (3 & rr) + this.view.getUint32(Qr + 4, !1);
              return new Date(1e3 * Zr + Sr / 1e6)
            }
            if (12 === rr) {
              const rr = this.view.getUint32(Qr, !1),
                Sr = 4294967296 * this.view.getInt32(Qr + 4, !1) + this.view.getUint32(Qr + 8, !1);
              return new Date(1e3 * Sr + rr / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${Sr} of ${rr} bytes`)
        }
      }
    }
    const jr = new TextEncoder,
      Ir = -(2n ** 63n),
      fr = 2n ** 63n - 1n,
      Er = 2n ** 64n - 1n;

    function pr(rr) {
      const Sr = new xr;
      return Sr.value(rr, 0), Sr.bytes()
    }
    class xr {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(rr, Sr) {
        if (Sr > 512) throw new Error("msgpack: nested too deep");
        switch (typeof rr) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(rr ? 195 : 194);
          case "number":
            return void this.number(rr);
          case "bigint":
            return void this.bigint(rr);
          case "string":
            return void this.string(rr);
          case "object":
            if (null === rr) this.u8(192);
            else if (rr instanceof Uint8Array) this.head(rr.length, 196, -1, 197, 198), this.room(rr.length), this.buf.set(rr, this.at), this.at += rr.length;
            else if (Array.isArray(rr)) {
              this.head(rr.length, 220, 144, 220, 221);
              for (const Qr of rr) this.value(Qr, Sr + 1)
            } else {
              var Qr, Zr;
              if (Object.getPrototypeOf(rr) !== Object.prototype && null !== Object.getPrototypeOf(rr)) throw new Error(`msgpack: can't encode a ${null!==(Qr=null===(Zr=rr.constructor)||void 0===Zr?void 0:Zr.name)&&void 0!==Qr?Qr:"object"}`);
              {
                const Qr = Object.keys(rr);
                this.head(Qr.length, 222, 128, 222, 223);
                for (const Zr of Qr) this.string(Zr), this.value(rr[Zr], Sr + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof rr)
        }
      }
      number(rr) {
        Number.isInteger(rr) && rr >= -2147483648 && rr <= 4294967295 ? rr >= 0 ? rr < 128 ? this.u8(rr) : rr < 256 ? (this.u8(204), this.u8(rr)) : rr < 65536 ? (this.u8(205), this.u16(rr)) : (this.u8(206), this.u32(rr)) : rr >= -32 ? this.u8(rr + 256) : rr >= -128 ? (this.u8(208), this.u8(rr + 256)) : rr >= -32768 ? (this.u8(209), this.u16(rr + 65536)) : (this.u8(210), this.u32(rr >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, rr, !1), this.at += 8)
      }
      bigint(rr) {
        const Sr = rr >= Ir && rr <= fr;
        if (!Sr && (rr < 0n || rr > Er)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(Sr ? 211 : 207), this.room(8), Sr ? this.view.setBigInt64(this.at, rr, !1) : this.view.setBigUint64(this.at, rr, !1), this.at += 8
      }
      string(rr) {
        const Sr = jr.encode(rr);
        this.head(Sr.length, 217, 160, 218, 219), this.room(Sr.length), this.buf.set(Sr, this.at), this.at += Sr.length
      }
      head(rr, Sr, Qr, Zr, Wr) {
        Qr >= 0 && rr < (160 === Qr ? 32 : 16) ? this.u8(Qr | rr) : Sr !== Zr && rr < 256 ? (this.u8(Sr), this.u8(rr)) : rr < 65536 ? (this.u8(Zr), this.u16(rr)) : (this.u8(Wr), this.u32(rr))
      }
      room(rr) {
        if (this.at + rr <= this.buf.length) return;
        let Sr = 2 * this.buf.length;
        for (; Sr < this.at + rr;) Sr *= 2;
        const Qr = new Uint8Array(Sr);
        Qr.set(this.buf.subarray(0, this.at)), this.buf = Qr, this.view = new DataView(Qr.buffer)
      }
      u8(rr) {
        this.room(1), this.buf[this.at++] = rr
      }
      u16(rr) {
        this.room(2), this.view.setUint16(this.at, rr, !1), this.at += 2
      }
      u32(rr) {
        this.room(4), this.view.setUint32(this.at, rr, !1), this.at += 4
      }
    }
  },
  55144: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      joinRoom: () => xr,
      leaveHeldSeat: () => zr,
      resumeRoom: () => Nr
    });
    var Zr = Qr(161),
      Wr = Qr(1267),
      ar = Qr(38018),
      jr = Qr(42485),
      Ir = Qr(5610),
      fr = Qr(42654),
      Er = Qr(42774);
    const pr = Uint8Array.of(13, ...(0, jr.e)(Zr.f));
    async function xr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await mr(rr, Sr, Qr)
      } catch (Wr) {
        var Zr;
        const ar = await (null === (Zr = Sr.optionsAfterRefusal) || void 0 === Zr ? void 0 : Zr.call(Sr, Wr));
        if (!ar) throw Wr;
        return mr(rr, {
          ...Sr,
          joinOptions: ar
        }, {
          ...Qr,
          early: void 0
        })
      }
    }
    async function mr(rr, Sr, Qr) {
      var Zr;
      const {
        signal: ar
      } = Qr, jr = () => (0, Er.i)(Sr.endpoint, Sr.roomName, Sr.joinOptions, Qr), {
        early: Ir
      } = Qr, fr = Ir ? null !== (Zr = await Ir.take(ar)) && void 0 !== Zr ? Zr : await Ir.reserveInstead(jr, ar) : await jr();
      return (0, Wr.l)(ar), hr(rr, Sr.endpoint, fr, Qr, !1)
    }
    async function Nr(rr, Sr, Qr, Zr) {
      let ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const jr = await (0, Er.e)(Sr, Qr, Zr, ar);
      return (0, Wr.l)(ar.signal), hr(rr, Sr, jr, ar, !0)
    }

    function Ur(rr, Sr, Qr) {
      const Zr = (0, Er.m)(rr, Sr);
      return Qr.createSocket ? Qr.createSocket(Zr) : new WebSocket(Zr)
    }

    function tr(rr, Sr, Qr) {
      var Zr;
      let Wr = !1;
      return (null !== (Zr = rr.setTimer) && void 0 !== Zr ? Zr : (rr, Sr) => {
        setTimeout(rr, Sr)
      })((() => {
        Wr || Sr()
      }), Qr), () => {
        Wr = !0
      }
    }
    async function hr(rr, Sr, Qr, Zr, jr) {
      const {
        signal: Er
      } = Zr, xr = Ur(Sr, Qr, Zr);
      let mr = !1,
        Nr = null,
        hr = null;
      const zr = [];
      let Yr = !1,
        nr = !1;
      const er = rr => {
        var Sr;
        nr = !0, null === (Sr = hr) || void 0 === Sr || Sr.reject(new fr.e("the room socket closed before the resume", "closed", rr.code))
      };
      jr && xr.addEventListener("close", er);
      const Kr = (rr, Sr) => {
          var Qr;
          if (rr === (jr ? Ir.G.Resumed : Ir.G.Activated)) Yr = !0, null === (Qr = hr) || void 0 === Qr || Qr.resolve();
          else if (!jr || rr !== Ir.G.ResumeRefused && rr !== Ir.G.Activated)
            if (rr === Ir.G.Error) {
              var Zr;
              null === (Zr = hr) || void 0 === Zr || Zr.reject(new fr.e(`the room refused the join (code ${Sr})`, "roomError", Sr))
            } else {
              var Wr;
              null === (Wr = hr) || void 0 === Wr || Wr.reject(new fr.e("the room socket closed before the join", "closed", Sr, null, mr))
            }
          else {
            var ar;
            null === (ar = hr) || void 0 === ar || ar.reject(new fr.s("the core refused the resume: it held no game"))
          }
        },
        yr = rr.onConnection(((rr, Sr, Qr) => {
          null === Nr ? zr.push([rr, Sr, Qr]) : rr === Nr && Kr(Sr, Qr)
        })),
        Br = rr.attachSocket(xr);
      if (null === Br) throw yr(), new fr.e("the core could not take the room socket", "attach");
      var Tr;
      (Nr = Br, jr) && (null === (Tr = Zr.onAttached) || void 0 === Tr || Tr.call(Zr));
      const vr = jr ? null : new ar.b((() => {
        var Sr, Qr;
        null === (Sr = rr.flushNet) || void 0 === Sr || Sr.call(rr), null === (Qr = hr) || void 0 === Qr || Qr.reject(new ar.c(mr ? "socket" : "socket_unopened"))
      }));
      xr.addEventListener("open", (() => {
        mr = !0, null === vr || void 0 === vr || vr.socketOpened()
      }), {
        once: !0
      });
      let Or = !1;
      const Lr = () => {
        if (Or) return;
        if (Or = !0, yr(), jr && (xr.removeEventListener("close", er), !Yr && !(null !== Er && void 0 !== Er && Er.aborted && (0, Wr.f)(Er) instanceof fr.v))) return void(nr || rr.closeSocket(Br));
        Yr && rr.leaveRoom(Br) || rr.sendRaw(Br, fr.o) ? tr(Zr, (() => {
          rr.closeSocket(Br)
        }), fr.g) : rr.closeSocket(Br)
      };
      try {
        await new Promise(((Sr, Qr) => {
          const Zr = () => {
            var Sr;
            jr && (null === (Sr = rr.flushNet) || void 0 === Sr || Sr.call(rr));
            Qr((0, Wr.f)(Er))
          };
          null === Er || void 0 === Er || Er.addEventListener("abort", Zr, {
            once: !0
          }), hr = {
            resolve: () => {
              null === Er || void 0 === Er || Er.removeEventListener("abort", Zr), Sr()
            },
            reject: rr => {
              null === Er || void 0 === Er || Er.removeEventListener("abort", Zr), Qr(rr)
            }
          };
          for (const [rr, Wr, ar] of zr.splice(0)) rr === Nr && Kr(Wr, ar)
        })), null === vr || void 0 === vr || vr.answered()
      } catch (lr) {
        throw Lr(), lr
      } finally {
        null === vr || void 0 === vr || vr.stop()
      }
      jr && xr.removeEventListener("close", er);
      return {
        conn: Br,
        seat: Qr,
        leave: Lr,
        detach: () => {
          Or = !0, yr()
        },
        endJoinAd: () => !Or && rr.sendRaw(Br, pr)
      }
    }
    async function zr(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const Wr = Ur(rr, await (0, Er.e)(rr, Sr, Qr, Zr), Zr);
        Wr.binaryType = "arraybuffer", await new Promise((rr => {
          const Sr = tr(Zr, (() => {
            Wr.close(), rr()
          }), fr.g);
          Wr.addEventListener("open", (() => {
            Wr.send(fr.o)
          })), Wr.addEventListener("close", (() => {
            Sr(), rr()
          }))
        }))
      } catch (Wr) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", Wr)
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);