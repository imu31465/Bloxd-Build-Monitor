export const id = 55;
export const ids = [55];
export const modules = {
  39940: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Sv,
      f: () => lv
    });
    const hv = new TextDecoder;

    function Sv(vv) {
      const zv = new ev(vv),
        Pv = zv.value();
      if (zv.at !== vv.length) throw new Error(`msgpack: ${vv.length-zv.at} bytes after the value`);
      return Pv
    }
    class ev {
      constructor(vv) {
        this.bytes = vv, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(vv.buffer, vv.byteOffset, vv.byteLength)
      }
      value() {
        const vv = this.u8();
        if (vv <= 127) return vv;
        if (vv >= 224) return vv - 256;
        if (vv >= 128 && vv <= 143) return this.map(15 & vv);
        if (vv >= 144 && vv <= 159) return this.array(15 & vv);
        if (vv >= 160 && vv <= 191) return this.str(31 & vv);
        switch (vv) {
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
            throw new Error(`msgpack: unknown byte 0x${vv.toString(16)} at ${this.at-1}`)
        }
      }
      take(vv) {
        const zv = this.at;
        if (zv + vv > this.bytes.length) throw new Error(`msgpack: ${vv} bytes past the end at ${zv}`);
        return this.at = zv + vv, zv
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
      int64(vv) {
        const zv = this.take(8);
        return vv ? this.view.getBigInt64(zv, !1) : this.view.getBigUint64(zv, !1)
      }
      str(vv) {
        const zv = this.take(vv),
          Pv = this.bytes;
        if (vv < 16) {
          let Sv = "";
          for (let ev = zv; ev < zv + vv; ev++) {
            const gv = Pv[ev];
            if (gv >= 128) return hv.decode(Pv.subarray(zv, zv + vv));
            Sv += String.fromCharCode(gv)
          }
          return Sv
        }
        return hv.decode(Pv.subarray(zv, zv + vv))
      }
      bin(vv) {
        const zv = this.take(vv);
        return this.bytes.subarray(zv, zv + vv)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(vv) {
        this.enter();
        const zv = [];
        for (let Pv = 0; Pv < vv; Pv++) zv.push(this.value());
        return this.depth--, zv
      }
      map(vv) {
        this.enter();
        const zv = {};
        for (let Pv = 0; Pv < vv; Pv++) {
          const vv = this.value(),
            Pv = this.value();
          zv["__proto__" === vv ? "__proto_" : String(vv)] = Pv
        }
        return this.depth--, zv
      }
      ext(vv) {
        const zv = this.view.getInt8(this.take(1)),
          Pv = this.take(vv);
        if (0 !== zv) {
          if (-1 === zv) {
            if (1 === vv) return new Date(NaN);
            if (4 === vv) return new Date(1e3 * this.view.getUint32(Pv, !1));
            if (8 === vv) {
              const vv = this.view.getUint32(Pv, !1),
                zv = vv >>> 2,
                hv = 4294967296 * (3 & vv) + this.view.getUint32(Pv + 4, !1);
              return new Date(1e3 * hv + zv / 1e6)
            }
            if (12 === vv) {
              const vv = this.view.getUint32(Pv, !1),
                zv = 4294967296 * this.view.getInt32(Pv + 4, !1) + this.view.getUint32(Pv + 8, !1);
              return new Date(1e3 * zv + vv / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${zv} of ${vv} bytes`)
        }
      }
    }
    const gv = new TextEncoder,
      pv = -(2n ** 63n),
      dv = 2n ** 63n - 1n,
      Nv = 2n ** 64n - 1n;

    function lv(vv) {
      const zv = new Tv;
      return zv.value(vv, 0), zv.bytes()
    }
    class Tv {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(vv, zv) {
        if (zv > 512) throw new Error("msgpack: nested too deep");
        switch (typeof vv) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(vv ? 195 : 194);
          case "number":
            return void this.number(vv);
          case "bigint":
            return void this.bigint(vv);
          case "string":
            return void this.string(vv);
          case "object":
            if (null === vv) this.u8(192);
            else if (vv instanceof Uint8Array) this.head(vv.length, 196, -1, 197, 198), this.room(vv.length), this.buf.set(vv, this.at), this.at += vv.length;
            else if (Array.isArray(vv)) {
              this.head(vv.length, 220, 144, 220, 221);
              for (const Pv of vv) this.value(Pv, zv + 1)
            } else {
              var Pv, hv;
              if (Object.getPrototypeOf(vv) !== Object.prototype && null !== Object.getPrototypeOf(vv)) throw new Error(`msgpack: can't encode a ${null!==(Pv=null===(hv=vv.constructor)||void 0===hv?void 0:hv.name)&&void 0!==Pv?Pv:"object"}`);
              {
                const Pv = Object.keys(vv);
                this.head(Pv.length, 222, 128, 222, 223);
                for (const hv of Pv) this.string(hv), this.value(vv[hv], zv + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof vv)
        }
      }
      number(vv) {
        Number.isInteger(vv) && vv >= -2147483648 && vv <= 4294967295 ? vv >= 0 ? vv < 128 ? this.u8(vv) : vv < 256 ? (this.u8(204), this.u8(vv)) : vv < 65536 ? (this.u8(205), this.u16(vv)) : (this.u8(206), this.u32(vv)) : vv >= -32 ? this.u8(vv + 256) : vv >= -128 ? (this.u8(208), this.u8(vv + 256)) : vv >= -32768 ? (this.u8(209), this.u16(vv + 65536)) : (this.u8(210), this.u32(vv >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, vv, !1), this.at += 8)
      }
      bigint(vv) {
        const zv = vv >= pv && vv <= dv;
        if (!zv && (vv < 0n || vv > Nv)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(zv ? 211 : 207), this.room(8), zv ? this.view.setBigInt64(this.at, vv, !1) : this.view.setBigUint64(this.at, vv, !1), this.at += 8
      }
      string(vv) {
        const zv = gv.encode(vv);
        this.head(zv.length, 217, 160, 218, 219), this.room(zv.length), this.buf.set(zv, this.at), this.at += zv.length
      }
      head(vv, zv, Pv, hv, Sv) {
        Pv >= 0 && vv < (160 === Pv ? 32 : 16) ? this.u8(Pv | vv) : zv !== hv && vv < 256 ? (this.u8(zv), this.u8(vv)) : vv < 65536 ? (this.u8(hv), this.u16(vv)) : (this.u8(Sv), this.u32(vv))
      }
      room(vv) {
        if (this.at + vv <= this.buf.length) return;
        let zv = 2 * this.buf.length;
        for (; zv < this.at + vv;) zv *= 2;
        const Pv = new Uint8Array(zv);
        Pv.set(this.buf.subarray(0, this.at)), this.buf = Pv, this.view = new DataView(Pv.buffer)
      }
      u8(vv) {
        this.room(1), this.buf[this.at++] = vv
      }
      u16(vv) {
        this.room(2), this.view.setUint16(this.at, vv, !1), this.at += 2
      }
      u32(vv) {
        this.room(4), this.view.setUint32(this.at, vv, !1), this.at += 4
      }
    }
  },
  42690: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      joinRoom: () => Wv,
      leaveHeldSeat: () => cv,
      resumeRoom: () => av
    });
    var hv = Pv(144),
      Sv = Pv(1779),
      ev = Pv(38604),
      gv = Pv(1748),
      pv = Pv(39940),
      dv = Pv(4535),
      Nv = Pv(40161),
      lv = Pv(40226);
    const Tv = Uint8Array.of(13, ...(0, pv.f)(hv.g));
    async function Wv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await wv(vv, zv, Pv)
      } catch (Sv) {
        var hv;
        const ev = await (null === (hv = zv.optionsAfterRefusal) || void 0 === hv ? void 0 : hv.call(zv, Sv));
        if (!ev) throw Sv;
        return wv(vv, {
          ...zv,
          joinOptions: ev
        }, {
          ...Pv,
          early: void 0
        })
      }
    }
    async function wv(vv, zv, Pv) {
      var hv;
      const {
        signal: ev
      } = Pv, gv = () => (0, lv.h)(zv.endpoint, zv.roomName, zv.joinOptions, Pv), {
        early: pv
      } = Pv, dv = pv ? null !== (hv = await pv.take(ev)) && void 0 !== hv ? hv : await pv.reserveInstead(gv, ev) : await gv();
      return (0, Sv.p)(ev), iv(vv, zv.endpoint, dv, Pv, !1)
    }
    async function av(vv, zv, Pv, hv) {
      let ev = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const gv = await (0, lv.d)(zv, Pv, hv, ev);
      return (0, Sv.p)(ev.signal), iv(vv, zv, gv, ev, !0)
    }

    function sv(vv, zv, Pv) {
      const hv = (0, lv.i)(vv, zv);
      return Pv.createSocket ? Pv.createSocket(hv) : new WebSocket(hv)
    }

    function Cv(vv, zv, Pv) {
      var hv;
      let Sv = !1;
      return (null !== (hv = vv.setTimer) && void 0 !== hv ? hv : (vv, zv) => {
        setTimeout(vv, zv)
      })((() => {
        Sv || zv()
      }), Pv), () => {
        Sv = !0
      }
    }
    async function iv(vv, zv, Pv, hv, pv) {
      const {
        signal: lv
      } = hv, Wv = sv(zv, Pv, hv);
      let wv = null,
        av = null;
      const iv = [];
      let cv = !1,
        Gv = !1;
      const mv = vv => {
        var zv;
        Gv = !0, null === (zv = av) || void 0 === zv || zv.reject(new Nv.e("the room socket closed before the resume", "closed", vv.code))
      };
      pv && Wv.addEventListener("close", mv);
      const jv = (vv, zv) => {
          var Pv;
          if (vv === (pv ? dv.F.Resumed : dv.F.Activated)) cv = !0, null === (Pv = av) || void 0 === Pv || Pv.resolve();
          else if (!pv || vv !== dv.F.ResumeRefused && vv !== dv.F.Activated)
            if (vv === dv.F.Error) {
              var hv;
              null === (hv = av) || void 0 === hv || hv.reject(new Nv.e(`the room refused the join (code ${zv})`, "roomError", zv))
            } else {
              var Sv;
              null === (Sv = av) || void 0 === Sv || Sv.reject(new Nv.e("the room socket closed before the join", "closed", zv))
            }
          else {
            var ev;
            null === (ev = av) || void 0 === ev || ev.reject(new Nv.n("the core refused the resume: it held no game"))
          }
        },
        fv = vv.onConnection(((vv, zv, Pv) => {
          null === wv ? iv.push([vv, zv, Pv]) : vv === wv && jv(zv, Pv)
        })),
        Fv = vv.attachSocket(Wv);
      if (null === Fv) throw fv(), new Nv.e("the core could not take the room socket", "attach");
      var Yv;
      (wv = Fv, pv) && (null === (Yv = hv.onAttached) || void 0 === Yv || Yv.call(hv));
      const nv = pv ? null : new gv.e(ev.d, (() => {
        var zv, Pv;
        null === (zv = vv.flushNet) || void 0 === zv || zv.call(vv), null === (Pv = av) || void 0 === Pv || Pv.reject(new ev.g)
      }));
      let Ov = !1;
      const Dv = () => {
        if (Ov) return;
        if (Ov = !0, fv(), pv && (Wv.removeEventListener("close", mv), !cv && !(null !== lv && void 0 !== lv && lv.aborted && (0, Sv.g)(lv) instanceof Nv.p))) return void(Gv || vv.closeSocket(Fv));
        cv && vv.leaveRoom(Fv) || vv.sendRaw(Fv, Nv.h) ? Cv(hv, (() => {
          vv.closeSocket(Fv)
        }), Nv.f) : vv.closeSocket(Fv)
      };
      try {
        await new Promise(((zv, Pv) => {
          const hv = () => {
            var zv;
            pv && (null === (zv = vv.flushNet) || void 0 === zv || zv.call(vv));
            Pv((0, Sv.g)(lv))
          };
          null === lv || void 0 === lv || lv.addEventListener("abort", hv, {
            once: !0
          }), av = {
            resolve: () => {
              null === lv || void 0 === lv || lv.removeEventListener("abort", hv), zv()
            },
            reject: vv => {
              null === lv || void 0 === lv || lv.removeEventListener("abort", hv), Pv(vv)
            }
          };
          for (const [vv, Sv, ev] of iv.splice(0)) vv === wv && jv(Sv, ev)
        }))
      } catch (Kv) {
        throw Dv(), Kv
      } finally {
        null === nv || void 0 === nv || nv.stop()
      }
      pv && Wv.removeEventListener("close", mv);
      return {
        conn: Fv,
        seat: Pv,
        leave: Dv,
        detach: () => {
          Ov = !0, fv()
        },
        endJoinAd: () => !Ov && vv.sendRaw(Fv, Tv)
      }
    }
    async function cv(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const Sv = sv(vv, await (0, lv.d)(vv, zv, Pv, hv), hv);
        Sv.binaryType = "arraybuffer", await new Promise((vv => {
          const zv = Cv(hv, (() => {
            Sv.close(), vv()
          }), Nv.f);
          Sv.addEventListener("open", (() => {
            Sv.send(Nv.h)
          })), Sv.addEventListener("close", (() => {
            zv(), vv()
          }))
        }))
      } catch (Sv) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", Sv)
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);