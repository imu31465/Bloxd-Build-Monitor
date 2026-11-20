export const id = 55;
export const ids = [55];
export const modules = {
  40071: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ob,
      h: () => ab
    });
    const Bb = new TextDecoder;

    function Ob(bb) {
      const ub = new Gb(bb),
        hb = ub.value();
      if (ub.at !== bb.length) throw new Error(`msgpack: ${bb.length-ub.at} bytes after the value`);
      return hb
    }
    class Gb {
      constructor(bb) {
        this.bytes = bb, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(bb.buffer, bb.byteOffset, bb.byteLength)
      }
      value() {
        const bb = this.u8();
        if (bb <= 127) return bb;
        if (bb >= 224) return bb - 256;
        if (bb >= 128 && bb <= 143) return this.map(15 & bb);
        if (bb >= 144 && bb <= 159) return this.array(15 & bb);
        if (bb >= 160 && bb <= 191) return this.str(31 & bb);
        switch (bb) {
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
            throw new Error(`msgpack: unknown byte 0x${bb.toString(16)} at ${this.at-1}`)
        }
      }
      take(bb) {
        const ub = this.at;
        if (ub + bb > this.bytes.length) throw new Error(`msgpack: ${bb} bytes past the end at ${ub}`);
        return this.at = ub + bb, ub
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
      int64(bb) {
        const ub = this.take(8);
        return bb ? this.view.getBigInt64(ub, !1) : this.view.getBigUint64(ub, !1)
      }
      str(bb) {
        const ub = this.take(bb),
          hb = this.bytes;
        if (bb < 16) {
          let Ob = "";
          for (let Gb = ub; Gb < ub + bb; Gb++) {
            const Ub = hb[Gb];
            if (Ub >= 128) return Bb.decode(hb.subarray(ub, ub + bb));
            Ob += String.fromCharCode(Ub)
          }
          return Ob
        }
        return Bb.decode(hb.subarray(ub, ub + bb))
      }
      bin(bb) {
        const ub = this.take(bb);
        return this.bytes.subarray(ub, ub + bb)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(bb) {
        this.enter();
        const ub = [];
        for (let hb = 0; hb < bb; hb++) ub.push(this.value());
        return this.depth--, ub
      }
      map(bb) {
        this.enter();
        const ub = {};
        for (let hb = 0; hb < bb; hb++) {
          const bb = this.value(),
            hb = this.value();
          ub["__proto__" === bb ? "__proto_" : String(bb)] = hb
        }
        return this.depth--, ub
      }
      ext(bb) {
        const ub = this.view.getInt8(this.take(1)),
          hb = this.take(bb);
        if (0 !== ub) {
          if (-1 === ub) {
            if (1 === bb) return new Date(NaN);
            if (4 === bb) return new Date(1e3 * this.view.getUint32(hb, !1));
            if (8 === bb) {
              const bb = this.view.getUint32(hb, !1),
                ub = bb >>> 2,
                Bb = 4294967296 * (3 & bb) + this.view.getUint32(hb + 4, !1);
              return new Date(1e3 * Bb + ub / 1e6)
            }
            if (12 === bb) {
              const bb = this.view.getUint32(hb, !1),
                ub = 4294967296 * this.view.getInt32(hb + 4, !1) + this.view.getUint32(hb + 8, !1);
              return new Date(1e3 * ub + bb / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${ub} of ${bb} bytes`)
        }
      }
    }
    const Ub = new TextEncoder,
      Lb = -(2n ** 63n),
      Yb = 2n ** 63n - 1n,
      Sb = 2n ** 64n - 1n;

    function ab(bb) {
      const ub = new Hb;
      return ub.value(bb, 0), ub.bytes()
    }
    class Hb {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(bb, ub) {
        if (ub > 512) throw new Error("msgpack: nested too deep");
        switch (typeof bb) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(bb ? 195 : 194);
          case "number":
            return void this.number(bb);
          case "bigint":
            return void this.bigint(bb);
          case "string":
            return void this.string(bb);
          case "object":
            if (null === bb) this.u8(192);
            else if (bb instanceof Uint8Array) this.head(bb.length, 196, -1, 197, 198), this.room(bb.length), this.buf.set(bb, this.at), this.at += bb.length;
            else if (Array.isArray(bb)) {
              this.head(bb.length, 220, 144, 220, 221);
              for (const hb of bb) this.value(hb, ub + 1)
            } else {
              var hb, Bb;
              if (Object.getPrototypeOf(bb) !== Object.prototype && null !== Object.getPrototypeOf(bb)) throw new Error(`msgpack: can't encode a ${null!==(hb=null===(Bb=bb.constructor)||void 0===Bb?void 0:Bb.name)&&void 0!==hb?hb:"object"}`);
              {
                const hb = Object.keys(bb);
                this.head(hb.length, 222, 128, 222, 223);
                for (const Bb of hb) this.string(Bb), this.value(bb[Bb], ub + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof bb)
        }
      }
      number(bb) {
        Number.isInteger(bb) && bb >= -2147483648 && bb <= 4294967295 ? bb >= 0 ? bb < 128 ? this.u8(bb) : bb < 256 ? (this.u8(204), this.u8(bb)) : bb < 65536 ? (this.u8(205), this.u16(bb)) : (this.u8(206), this.u32(bb)) : bb >= -32 ? this.u8(bb + 256) : bb >= -128 ? (this.u8(208), this.u8(bb + 256)) : bb >= -32768 ? (this.u8(209), this.u16(bb + 65536)) : (this.u8(210), this.u32(bb >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, bb, !1), this.at += 8)
      }
      bigint(bb) {
        const ub = bb >= Lb && bb <= Yb;
        if (!ub && (bb < 0n || bb > Sb)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(ub ? 211 : 207), this.room(8), ub ? this.view.setBigInt64(this.at, bb, !1) : this.view.setBigUint64(this.at, bb, !1), this.at += 8
      }
      string(bb) {
        const ub = Ub.encode(bb);
        this.head(ub.length, 217, 160, 218, 219), this.room(ub.length), this.buf.set(ub, this.at), this.at += ub.length
      }
      head(bb, ub, hb, Bb, Ob) {
        hb >= 0 && bb < (160 === hb ? 32 : 16) ? this.u8(hb | bb) : ub !== Bb && bb < 256 ? (this.u8(ub), this.u8(bb)) : bb < 65536 ? (this.u8(Bb), this.u16(bb)) : (this.u8(Ob), this.u32(bb))
      }
      room(bb) {
        if (this.at + bb <= this.buf.length) return;
        let ub = 2 * this.buf.length;
        for (; ub < this.at + bb;) ub *= 2;
        const hb = new Uint8Array(ub);
        hb.set(this.buf.subarray(0, this.at)), this.buf = hb, this.view = new DataView(hb.buffer)
      }
      u8(bb) {
        this.room(1), this.buf[this.at++] = bb
      }
      u16(bb) {
        this.room(2), this.view.setUint16(this.at, bb, !1), this.at += 2
      }
      u32(bb) {
        this.room(4), this.view.setUint32(this.at, bb, !1), this.at += 4
      }
    }
  },
  42694: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      joinRoom: () => wb,
      leaveHeldSeat: () => lb,
      resumeRoom: () => Xb
    });
    var Bb = hb(148),
      Ob = hb(1713),
      Gb = hb(38699),
      Ub = hb(1672),
      Lb = hb(40071),
      Yb = hb(4555),
      Sb = hb(40301),
      ab = hb(40366);
    const Hb = Uint8Array.of(13, ...(0, Lb.h)(Bb.f));
    async function wb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await Zb(bb, ub, hb)
      } catch (Ob) {
        var Bb;
        const Gb = await (null === (Bb = ub.optionsAfterRefusal) || void 0 === Bb ? void 0 : Bb.call(ub, Ob));
        if (!Gb) throw Ob;
        return Zb(bb, {
          ...ub,
          joinOptions: Gb
        }, {
          ...hb,
          early: void 0
        })
      }
    }
    async function Zb(bb, ub, hb) {
      var Bb;
      const {
        signal: Gb
      } = hb, Ub = () => (0, ab.i)(ub.endpoint, ub.roomName, ub.joinOptions, hb), {
        early: Lb
      } = hb, Yb = Lb ? null !== (Bb = await Lb.take(Gb)) && void 0 !== Bb ? Bb : await Lb.reserveInstead(Ub, Gb) : await Ub();
      return (0, Ob.r)(Gb), Ab(bb, ub.endpoint, Yb, hb, !1)
    }
    async function Xb(bb, ub, hb, Bb) {
      let Gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const Ub = await (0, ab.e)(ub, hb, Bb, Gb);
      return (0, Ob.r)(Gb.signal), Ab(bb, ub, Ub, Gb, !0)
    }

    function pb(bb, ub, hb) {
      const Bb = (0, ab.k)(bb, ub);
      return hb.createSocket ? hb.createSocket(Bb) : new WebSocket(Bb)
    }

    function ob(bb, ub, hb) {
      var Bb;
      let Ob = !1;
      return (null !== (Bb = bb.setTimer) && void 0 !== Bb ? Bb : (bb, ub) => {
        setTimeout(bb, ub)
      })((() => {
        Ob || ub()
      }), hb), () => {
        Ob = !0
      }
    }
    async function Ab(bb, ub, hb, Bb, Lb) {
      const {
        signal: ab
      } = Bb, wb = pb(ub, hb, Bb);
      let Zb = null,
        Xb = null;
      const Ab = [];
      let lb = !1,
        Kb = !1;
      const Wb = bb => {
        var ub;
        Kb = !0, null === (ub = Xb) || void 0 === ub || ub.reject(new Sb.e("the room socket closed before the resume", "closed", bb.code))
      };
      Lb && wb.addEventListener("close", Wb);
      const Cb = (bb, ub) => {
          var hb;
          if (bb === (Lb ? Yb.E.Resumed : Yb.E.Activated)) lb = !0, null === (hb = Xb) || void 0 === hb || hb.resolve();
          else if (!Lb || bb !== Yb.E.ResumeRefused && bb !== Yb.E.Activated)
            if (bb === Yb.E.Error) {
              var Bb;
              null === (Bb = Xb) || void 0 === Bb || Bb.reject(new Sb.e(`the room refused the join (code ${ub})`, "roomError", ub))
            } else {
              var Ob;
              null === (Ob = Xb) || void 0 === Ob || Ob.reject(new Sb.e("the room socket closed before the join", "closed", ub))
            }
          else {
            var Gb;
            null === (Gb = Xb) || void 0 === Gb || Gb.reject(new Sb.p("the core refused the resume: it held no game"))
          }
        },
        db = bb.onConnection(((bb, ub, hb) => {
          null === Zb ? Ab.push([bb, ub, hb]) : bb === Zb && Cb(ub, hb)
        })),
        rb = bb.attachSocket(wb);
      if (null === rb) throw db(), new Sb.e("the core could not take the room socket", "attach");
      var jb;
      (Zb = rb, Lb) && (null === (jb = Bb.onAttached) || void 0 === jb || jb.call(Bb));
      const nb = Lb ? null : new Ub.e(Gb.b, (() => {
        var ub, hb;
        null === (ub = bb.flushNet) || void 0 === ub || ub.call(bb), null === (hb = Xb) || void 0 === hb || hb.reject(new Gb.c)
      }));
      let Db = !1;
      const xb = () => {
        if (Db) return;
        if (Db = !0, db(), Lb && (wb.removeEventListener("close", Wb), !lb && !(null !== ab && void 0 !== ab && ab.aborted && (0, Ob.f)(ab) instanceof Sb.s))) return void(Kb || bb.closeSocket(rb));
        lb && bb.leaveRoom(rb) || bb.sendRaw(rb, Sb.l) ? ob(Bb, (() => {
          bb.closeSocket(rb)
        }), Sb.h) : bb.closeSocket(rb)
      };
      try {
        await new Promise(((ub, hb) => {
          const Bb = () => {
            var ub;
            Lb && (null === (ub = bb.flushNet) || void 0 === ub || ub.call(bb));
            hb((0, Ob.f)(ab))
          };
          null === ab || void 0 === ab || ab.addEventListener("abort", Bb, {
            once: !0
          }), Xb = {
            resolve: () => {
              null === ab || void 0 === ab || ab.removeEventListener("abort", Bb), ub()
            },
            reject: bb => {
              null === ab || void 0 === ab || ab.removeEventListener("abort", Bb), hb(bb)
            }
          };
          for (const [bb, Ob, Gb] of Ab.splice(0)) bb === Zb && Cb(Ob, Gb)
        }))
      } catch (zb) {
        throw xb(), zb
      } finally {
        null === nb || void 0 === nb || nb.stop()
      }
      Lb && wb.removeEventListener("close", Wb);
      return {
        conn: rb,
        seat: hb,
        leave: xb,
        detach: () => {
          Db = !0, db()
        },
        endJoinAd: () => !Db && bb.sendRaw(rb, Hb)
      }
    }
    async function lb(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const Ob = pb(bb, await (0, ab.e)(bb, ub, hb, Bb), Bb);
        Ob.binaryType = "arraybuffer", await new Promise((bb => {
          const ub = ob(Bb, (() => {
            Ob.close(), bb()
          }), Sb.h);
          Ob.addEventListener("open", (() => {
            Ob.send(Sb.l)
          })), Ob.addEventListener("close", (() => {
            ub(), bb()
          }))
        }))
      } catch (Ob) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", Ob)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);