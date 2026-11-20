export const id = 200;
export const ids = [200];
export const modules = {
  40066: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Yb,
      g: () => Lb,
      i: () => Ub
    });
    var Bb = hb(40071),
      Ob = hb(4555),
      Gb = hb(40079);

    function Ub(bb) {
      return bb.payloadKind === Ob.Zb.Msgpack ? (0, Bb.e)(bb.payload) : void 0
    }

    function Lb(bb, ub) {
      if (ub.payloadKind === Ob.Zb.Bytes || ub.payloadKind === Ob.Zb.MsgpackBin) return (0, Gb.c)(bb, ub.payload)
    }

    function Yb(bb) {
      return null !== bb && "object" === typeof bb
    }
  },
  40087: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Hb,
      i: () => wb,
      j: () => Zb,
      n: () => ab,
      q: () => ob
    });
    var Bb = hb(4555),
      Ob = hb(40095);
    const Gb = new Map,
      Ub = new Set,
      Lb = new Set;
    let Yb = 0,
      Sb = 0;

    function ab(bb, ub) {
      let hb = Gb.get(bb);
      return hb || (hb = new Set, Gb.set(bb, hb)), hb.add(ub), () => {
        hb.delete(ub)
      }
    }

    function Hb() {
      return 0 !== Yb
    }

    function wb(bb) {
      return Ub.add(bb), () => {
        Ub.delete(bb)
      }
    }

    function Zb(bb) {
      return Lb.add(bb), () => {
        Lb.delete(bb)
      }
    }
    const Xb = "A raw message listener threw";

    function pb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ub;
      for (const Bb of ub) try {
        Bb()
      } catch (hb) {
        bb ? (0, Ob.q)(hb, Xb) : console.error(Xb, hb)
      }
    }
    const ob = {
      fire: function(bb) {
        if ("connection" === bb.type) {
          const ub = bb.phase === Bb.E.Activated && bb.conn !== Yb && bb.conn > Sb,
            hb = (bb.phase === Bb.E.Left || bb.phase === Bb.E.Closed) && bb.conn === Yb;
          return void(ub || hb ? (Yb = ub ? bb.conn : 0, pb(!0)) : bb.phase === Bb.E.Resumed && 0 !== Yb && bb.conn > Sb && (Yb = bb.conn, pb(!0, Lb)))
        }
        const ub = Gb.get(bb.XS);
        if (ub && bb.conn === Yb && 0 !== Yb)
          for (const Bb of ub) try {
            Bb(bb)
          } catch (hb) {
            (0, Ob.q)(hb, Xb)
          }
      },
      close: function(bb) {
        Sb = Math.max(Sb, bb, Yb), 0 !== Yb && (Yb = 0, pb(!1))
      }
    }
  },
  40061: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Sb,
      e: () => Yb,
      i: () => Lb
    });
    var Bb = hb(1166),
      Ob = hb(40035);
    const Gb = new TextDecoder,
      Ub = new TextEncoder;

    function Lb(bb, ub) {
      const hb = bb.queries.entityName(ub);
      if (hb === Ob.Hc) return;
      const Ub = bb.memoryData(bb.scratch(), 4 + hb, 4, "entity_name's answer");
      if (!Ub) return;
      const Lb = Ub.getUint32(0, !0),
        Yb = Gb.decode(new Uint8Array(Ub.buffer, Ub.byteOffset + 4, hb));
      return (0, Bb.e)(Yb, !1, Lb === Ob.Od ? null : Lb)
    }

    function Yb(bb, ub, hb) {
      const Bb = Ub.encode(hb);
      if (Bb.length > Ob.zb) return !1;
      const Gb = bb.memoryView(Uint8Array, bb.scratch(), Bb.length, "has_effect's name");
      return !!Gb && (Gb.set(Bb), 1 === bb.queries.hasEffect(ub, Bb.length))
    }

    function Sb(bb, ub, hb, Bb) {
      const Ub = bb.queries.blockData(ub, hb, Bb);
      if (Ub === Ob.Hc) return;
      const Lb = bb.memoryView(Uint8Array, bb.scratch(), Ub, "block_data's answer");
      return Lb ? JSON.parse(Gb.decode(Lb)) : void 0
    }
  },
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
  40079: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ub
    });
    var Bb = hb(40063);
    const Ob = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class Gb {
      constructor(bb) {
        this.buf = bb, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let bb = this.u8(),
          ub = 127 & bb,
          hb = 128;
        for (; 128 & bb;) {
          if (hb > 2 ** 63) throw new RangeError("avro: varint too long");
          bb = this.u8(), ub += (127 & bb) * hb, hb *= 128
        }
        return ub % 2 === 1 ? -(ub + 1) / 2 : ub / 2
      }
      float() {
        const bb = this.take(4);
        return this.floats().getFloat32(bb, !0)
      }
      double() {
        const bb = this.take(8);
        return this.floats().getFloat64(bb, !0)
      }
      str() {
        const bb = this.size(),
          ub = this.take(bb),
          hb = ub + bb;
        if (bb <= 32) {
          let bb = "";
          for (let Bb = ub; Bb < hb; Bb++) {
            const Gb = this.buf[Bb];
            if (Gb >= 128) return Ob.decode(this.buf.subarray(ub, hb));
            bb += String.fromCharCode(Gb)
          }
          return bb
        }
        return Ob.decode(this.buf.subarray(ub, hb))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(bb) {
        const ub = this.take(bb);
        return this.buf.slice(ub, ub + bb)
      }
      index(bb) {
        const ub = this.long();
        if (!(ub >= 0 && ub < bb)) throw new RangeError(`avro: index ${ub} of ${bb}`);
        return ub
      }
      fZ(bb) {
        const ub = [];
        for (let hb = this.long(); 0 !== hb; hb = this.long()) {
          hb = this.block(hb);
          for (let Bb = 0; Bb < hb; Bb++) ub.push(bb(this))
        }
        return ub
      }
      map(bb) {
        const ub = {};
        for (let hb = this.long(); 0 !== hb; hb = this.long()) {
          hb = this.block(hb);
          for (let Bb = 0; Bb < hb; Bb++) {
            ub[this.str()] = bb(this)
          }
        }
        return ub
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(bb) {
        let ub = bb;
        if (ub < 0 && (ub = -ub, this.long()), ub > this.buf.length - this.at) throw new RangeError(`avro: block of ${ub} items in ${this.buf.length-this.at} bytes`);
        return ub
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const bb = this.long();
        if (bb < 0) throw new RangeError(`avro: length ${bb}`);
        return bb
      }
      u8() {
        const bb = this.buf[this.at];
        if (void 0 === bb) throw new RangeError("avro: truncated");
        return this.at++, bb
      }
      take(bb) {
        const ub = this.at;
        if (bb > this.buf.length - ub) throw new RangeError("avro: truncated");
        return this.at = ub + bb, ub
      }
    }

    function Ub(bb, ub) {
      const hb = new Gb(ub),
        Ob = (0, Bb.fb)(bb, hb);
      return hb.end(), Ob
    }
  },
  40063: (bb, ub, hb) => {
    hb.d(ub, {
      B: () => xb,
      F: () => Ob,
      I: () => Lb,
      J: () => Zb,
      L: () => nb,
      O: () => jb,
      R: () => db,
      T: () => ab,
      U: () => Hb,
      W: () => Db,
      Y: () => Xb,
      Z: () => Kb,
      b: () => Cb,
      bb: () => pb,
      cb: () => Yb,
      e: () => ob,
      f: () => Ab,
      fb: () => zb,
      h: () => lb,
      j: () => rb,
      m: () => Bb,
      o: () => Gb,
      s: () => Wb,
      v: () => wb,
      x: () => Sb,
      z: () => Ub
    });
    const Bb = 2,
      Ob = 12,
      Gb = 27,
      Ub = 40,
      Lb = 52,
      Yb = 59,
      Sb = 63,
      ab = 83,
      Hb = 84,
      wb = 89,
      Zb = 91,
      Xb = 93,
      pb = 94,
      ob = 95,
      Ab = 97,
      lb = 101,
      Kb = 102,
      Wb = 73,
      Cb = 16,
      db = 86,
      rb = 60,
      jb = 17,
      nb = 56,
      Db = 100,
      xb = 81;

    function zb(bb, ub) {
      switch (bb) {
        case Bb:
          return function(bb) {
            return {
              gh: kb(bb),
              eh: bb.float(),
              Nh: bb.long()
            }
          }(ub);
        case Ob:
          return function(bb) {
            return {
              Ob: Jb(bb),
              Gb: Jb(bb)
            }
          }(ub);
        case Gb:
          return function(bb) {
            return {
              fh: bb.bool(),
              kh: Jb(bb)
            }
          }(ub);
        case Ub:
          return ub.str();
        case Lb:
          return function(bb) {
            return {
              id: bb.long(),
              eB: Uu(bb)
            }
          }(ub);
        case Yb:
        case Sb:
          return ub.str();
        case ab:
        case Hb:
          return ub.long();
        case wb:
          return function(bb) {
            return {
              wu: bb.long(),
              Zu: bb.bool(),
              Xu: bb.float()
            }
          }(ub);
        case Zb:
          return ub.long();
        case Xb:
          return function(bb) {
            return {
              Db: bb.bool(),
              xb: Su(bb)
            }
          }(ub);
        case pb:
          return function(bb) {
            return {
              id: bb.str(),
              position: Yu(bb),
              XB: au(bb),
              style: Ib(bb),
              oB: bb.bool()
            }
          }(ub);
        case ob:
          return function(bb) {
            return {
              id: Jb(bb)
            }
          }(ub);
        case Ab:
          return function(bb) {
            return {
              vu: bb.long(),
              tu: bb.str(),
              Ju: Ou(bb),
              eu: Ou(bb),
              Nu: Jb(bb),
              Mu: Jb(bb),
              mu: Jb(bb),
              Iu: Jb(bb),
              Pu: Jb(bb),
              qu: Ou(bb),
              Eu: Ou(bb),
              yu: Jb(bb),
              Vu: Jb(bb),
              Fu: Jb(bb)
            }
          }(ub);
        case lb:
          return ub.str();
        case Kb:
          return ub.long();
        case Wb:
          return function(bb) {
            return {
              nB: bb.long(),
              DB: bb.str(),
              xB: bb.float()
            }
          }(ub);
        case Cb:
          return function(bb) {
            return {
              Eb: bb.bool(),
              yb: Jb(bb),
              Vb: bb.str(),
              Fb: wu(bb),
              fb: wu(bb),
              kb: bb.bool(),
              Tb: bb.long(),
              cb: Zu(bb)
            }
          }(ub);
        case db:
          return function(bb) {
            return {
              sh: Jb(bb)
            }
          }(ub);
        case rb:
          return function(bb) {
            return {
              fu: bb.str(),
              ku: bb.str(),
              Tu: Xu(bb),
              cu: bb.str(),
              Qu: Qb(bb),
              Ru: bb.float()
            }
          }(ub);
        case jb:
          return function(bb) {
            return {
              fu: bb.str(),
              ku: bb.str(),
              Tu: Xu(bb)
            }
          }(ub);
        case nb:
          return function(bb) {
            return bb.fZ(pu)
          }(ub);
        case Db:
          return function(bb) {
            return {
              Zh: Au(bb),
              Kh: Eb(bb)
            }
          }(ub);
        case xb:
          return function(bb) {
            return {
              RO: bb.bool(),
              bG: Jb(bb),
              uG: Ku(bb),
              BG: eu(bb)
            }
          }(ub);
        default:
          throw new Error(`no reader for to-client message ${bb}`)
      }
    }

    function gb(bb) {
      return {
        entityName: bb.str()
      }
    }

    function ib(bb) {
      const ub = bb.index(4);
      return 0 === ub ? bb.str() : 1 === ub ? bb.long() : 2 === ub ? bb.bool() : gb(bb)
    }

    function vb(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return bb.map(ib)
      }(bb)
    }

    function tb(bb) {
      return {
        translationKey: bb.str(),
        params: vb(bb)
      }
    }

    function Jb(bb) {
      return 0 === bb.index(2) ? null : bb.str()
    }

    function eb(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          color: Jb(bb),
          colour: Jb(bb),
          fontSize: Jb(bb)
        }
      }(bb)
    }

    function Nb(bb) {
      return {
        icon: bb.str(),
        style: eb(bb)
      }
    }

    function sb(bb) {
      const ub = bb.index(3);
      return 0 === ub ? {
        string: bb.str()
      } : 1 === ub ? {
        styledEntityName: gb(bb)
      } : {
        styledTranslatedText: tb(bb)
      }
    }

    function Mb(bb) {
      const ub = bb.index(3);
      return 0 === ub ? null : 1 === ub ? bb.str() : bb.long()
    }

    function mb(bb) {
      return 0 === bb.index(2) ? null : bb.float()
    }

    function Ib(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          color: Jb(bb),
          colour: Jb(bb),
          fontWeight: Mb(bb),
          fontStyle: Jb(bb),
          fontSize: Jb(bb),
          opacity: mb(bb)
        }
      }(bb)
    }

    function Pb(bb) {
      return {
        str: sb(bb),
        style: Ib(bb),
        clickableUrl: Jb(bb)
      }
    }

    function qb(bb) {
      return bb.str()
    }

    function Eb(bb) {
      return bb.fZ(qb)
    }

    function yb(bb) {
      return 0 === bb.index(2) ? null : Eb(bb)
    }

    function Vb(bb) {
      return {
        type: bb.str(),
        progress: bb.float(),
        width: Jb(bb),
        height: Jb(bb),
        colours: yb(bb),
        backgroundColour: Jb(bb)
      }
    }

    function Fb(bb) {
      return {
        type: bb.str(),
        action: bb.str(),
        style: Ib(bb)
      }
    }

    function fb(bb) {
      const ub = bb.index(7);
      return 0 === ub ? {
        string: bb.str()
      } : 1 === ub ? {
        entityName: gb(bb)
      } : 2 === ub ? {
        translatedText: tb(bb)
      } : 3 === ub ? {
        styledIcon: Nb(bb)
      } : 4 === ub ? {
        ih: Pb(bb)
      } : 5 === ub ? {
        styledProgressBar: Vb(bb)
      } : {
        styledKeyBinding: Fb(bb)
      }
    }

    function kb(bb) {
      return bb.fZ(fb)
    }
    const Tb = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function cb(bb) {
      return Tb[bb.index(5)]
    }

    function Qb(bb) {
      return 0 === bb.index(2) ? null : bb.double()
    }

    function Rb(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          IB: Qb(bb),
          PB: bb.double(),
          qB: bb.double(),
          EB: bb.bool(),
          description: kb(bb),
          yB: bb.str(),
          scale: Qb(bb),
          rotation: Qb(bb)
        }
      }(bb)
    }

    function bu(bb) {
      return 0 === bb.index(2) ? null : bb.bool()
    }

    function uu(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          FB: bb.double(),
          icon: bb.str(),
          label: kb(bb),
          fB: bb.bool(),
          scale: Qb(bb),
          rotation: Qb(bb),
          kB: bu(bb)
        }
      }(bb)
    }

    function hu(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          IB: Qb(bb),
          cB: bb.double(),
          QB: bb.double(),
          RB: bb.double(),
          gravity: bb.double(),
          bO: bb.double(),
          uO: bb.double(),
          hO: bb.double(),
          EB: bb.bool(),
          description: kb(bb),
          icon: Jb(bb)
        }
      }(bb)
    }

    function Bu(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          speed: bb.double(),
          OO: bb.double(),
          label: kb(bb),
          icon: Jb(bb),
          scale: Qb(bb),
          rotation: Qb(bb)
        }
      }(bb)
    }

    function Ou(bb) {
      return 0 === bb.index(2) ? null : bb.long()
    }

    function Gu(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          UO: bb.long(),
          LO: bb.double(),
          YO: bb.double(),
          SO: Ou(bb),
          label: kb(bb),
          icon: Jb(bb)
        }
      }(bb)
    }

    function Uu(bb) {
      return {
        type: cb(bb),
        progressBar: Rb(bb),
        timedClick: uu(bb),
        gravityBar: hu(bb),
        precisionBar: Bu(bb),
        rhythmClick: Gu(bb)
      }
    }

    function Lu(bb) {
      return bb.float()
    }

    function Yu(bb) {
      return bb.fZ(Lu)
    }

    function Su(bb) {
      return 0 === bb.index(2) ? null : Yu(bb)
    }

    function au(bb) {
      return 0 === bb.index(2) ? null : kb(bb)
    }

    function Hu(bb) {
      return bb.long()
    }

    function wu(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return bb.fZ(Hu)
      }(bb)
    }

    function Zu(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          Rb: bb.str(),
          uu: bb.long()
        }
      }(bb)
    }

    function Xu(bb) {
      const ub = bb.index(3);
      return 0 === ub ? null : 1 === ub ? bb.str() : tb(bb)
    }

    function pu(bb) {
      return {
        vB: bb.str(),
        tB: bb.str(),
        JB: bb.str()
      }
    }

    function ou(bb) {
      return {
        Xh: bb.str(),
        ph: Jb(bb),
        oh: Jb(bb),
        Ah: Eb(bb)
      }
    }

    function Au(bb) {
      return bb.fZ(ou)
    }

    function lu(bb) {
      return {
        hG: bb.str(),
        x: bb.long(),
        y: bb.long(),
        z: bb.long()
      }
    }

    function Ku(bb) {
      return bb.fZ(lu)
    }

    function Wu(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          rG: bb.float(),
          jG: bb.long(),
          nG: bb.long()
        }
      }(bb)
    }

    function Cu(bb) {
      return {
        blockName: bb.str(),
        pG: bb.bool(),
        oG: bb.bool(),
        AG: bb.bool(),
        lG: bb.float(),
        KG: bb.float(),
        WG: bb.long(),
        CG: Wu(bb)
      }
    }

    function du(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return bb.fZ(Cu)
      }(bb)
    }

    function ru(bb) {
      return {
        wG: bb.str(),
        ZG: du(bb)
      }
    }

    function ju(bb) {
      return {
        blockName: bb.str(),
        frequency: bb.float()
      }
    }

    function nu(bb) {
      return bb.fZ(ju)
    }

    function Du(bb) {
      return {
        zG: bb.str(),
        gG: bb.str(),
        frequency: bb.float(),
        iG: nu(bb)
      }
    }

    function xu(bb) {
      return bb.fZ(Du)
    }

    function zu(bb) {
      return {
        blockName: bb.str(),
        radius: bb.long(),
        eG: bb.long(),
        UG: bb.long(),
        LG: bb.long(),
        NG: bb.float()
      }
    }

    function gu(bb) {
      return bb.fZ(zu)
    }

    function iu(bb) {
      return {
        UG: bb.long(),
        LG: bb.long(),
        YG: bb.long(),
        SG: bb.bool(),
        aG: ru(bb),
        DG: xu(bb),
        tG: gu(bb)
      }
    }

    function vu(bb) {
      return bb.fZ(iu)
    }

    function tu(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          name: bb.str(),
          IG: Jb(bb)
        }
      }(bb)
    }

    function Ju(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          terrain: tu(bb),
          PG: gu(bb)
        }
      }(bb)
    }

    function eu(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          layers: vu(bb),
          sG: Ju(bb)
        }
      }(bb)
    }
  },
  40052: (bb, ub, hb) => {
    hb.d(ub, {
      $: () => Ab,
      D: () => rb,
      F: () => gb,
      H: () => Wb,
      I: () => Cb,
      K: () => ob,
      L: () => Db,
      P: () => vb,
      S: () => Xb,
      W: () => Jb,
      Z: () => lb,
      db: () => Kb,
      e: () => Ob,
      f: () => tb,
      fb: () => db,
      i: () => ib,
      m: () => Zb,
      n: () => pb,
      r: () => zb,
      u: () => jb,
      v: () => xb,
      z: () => nb
    });
    var Bb = hb(2775);
    const Ob = {
      Chat: 49,
      UiRequestResponded: 91,
      CodeCollab: 89,
      SetCustomLobbyBlock: 60,
      UpdateBook: 56,
      UpdateBoard: 33,
      UpdateMyCosmetic: 45,
      PlayEmote: 90,
      ReqDiscordReportKey: 9,
      UserReport: 11,
      LobbyReport: 12,
      CustomGameReport: 13,
      IgnoreUser: 34,
      ShopMenuChanged: 26,
      GeneralCookieSet: 72,
      CompleteTask: 69,
      OpenIronChest: 80,
      ChangeIronChestPasskey: 81,
      StopSleeping: 78,
      AnalyticsUpdate: 3,
      UiRequestResp: 15,
      QteResponse: 16,
      ItemBought: 25,
      LeaderboardRequest: 40,
      UpdateNameTag: 53,
      LobbyManage: 96
    };

    function Gb(bb, ub) {
      return !ArrayBuffer.isView(bb) || bb instanceof DataView ? Array.isArray(bb) ? bb.map((bb => ub(bb))) : bb : Array.from(bb, (bb => ub(bb)))
    }

    function Ub(bb) {
      if ("string" !== typeof bb) return bb;
      for (let ub = 0; ub < bb.length; ub++) {
        const hb = bb.charCodeAt(ub);
        if (hb >= 55296 && hb <= 57343) return Yb.decode(Lb.encode(bb))
      }
      return bb
    }
    const Lb = new TextEncoder,
      Yb = new TextDecoder;

    function Sb(bb) {
      return bb
    }
    let ab;

    function Hb(bb) {
      return null === bb || "object" !== typeof bb ? bb : [Ub(bb.uS), Ub(bb.hS)]
    }

    function wb(bb) {
      return null === bb || "object" !== typeof bb ? bb : [Gb(bb.Fb, Sb), Gb(bb.Ya, Sb)]
    }

    function Zb(bb) {
      return null === (ub = bb) || "object" !== typeof ub ? ub : [Ub(ub.XS), Ub(ub.pS)];
      var ub
    }

    function Xb(bb) {
      return null === (ub = bb) || "object" !== typeof ub ? ub : [ub.id, ub.ha];
      var ub
    }

    function pb(bb) {
      return null === (ub = bb) || "object" !== typeof ub ? ub : [ub.vu, Ub(ub.tu), ub.Ju, Ub(ub.Mu), ub.qu, ub.Eu, ub.WU, Ub(ub.CU), Ub(ub.dU)];
      var ub
    }

    function ob(bb) {
      return null === (ub = bb) || "object" !== typeof ub ? ub : [Gb(ub.RY, Sb), ub.bS];
      var ub
    }

    function Ab(bb) {
      return null === (ub = bb) || "object" !== typeof ub ? ub : [Gb(ub.KS, (bb => Ub(bb))), Ub(ub.WS), ub.CS];
      var ub
    }

    function lb(bb) {
      return null === (ub = bb) || "object" !== typeof ub ? ub : [Gb(ub.Ba, Sb), Ub(ub.Oa), ub.Ga];
      var ub
    }

    function Kb(bb) {
      return null === (ub = bb) || "object" !== typeof ub ? ub : [Ub(ub.tB), Ub(ub.JB)];
      var ub
    }

    function Wb(bb) {
      return null === (ub = bb) || "object" !== typeof ub ? ub : [Ub(ub.FS)];
      var ub
    }

    function Cb(bb) {
      return Ub(bb)
    }

    function db(bb) {
      return null === (ub = bb) || "object" !== typeof ub ? ub : [Ub(ub.gS), Ub(ub.iS), Ub(ub.uS), Ub(ub.hS)];
      var ub
    }

    function rb(bb) {
      return Hb(bb)
    }

    function jb(bb) {
      return Hb(bb)
    }

    function nb(bb) {
      return null === (ub = bb) || "object" !== typeof ub ? ub : [Ub(ub.lU)];
      var ub
    }

    function Db(bb) {
      return bb
    }

    function xb(bb) {
      return null === (ub = bb) || "object" !== typeof ub ? ub : [Ub(ub.yY), Ub(ub.VY)];
      var ub
    }

    function zb(bb) {
      return Ub(bb)
    }

    function gb(bb) {
      return wb(bb)
    }

    function ib(bb) {
      return wb(bb)
    }

    function vb(bb) {
      return null === (ub = bb) || "object" !== typeof ub ? ub : [Ub(ub.KU)];
      var ub
    }

    function tb(bb) {
      return (ab ??= (0, Bb.f)().map((bb => bb.name)), ab).map((ub => {
        return "string" === typeof(hb = bb[ub]) ? Ub(hb) : Gb(hb, Sb);
        var hb
      }))
    }

    function Jb(bb) {
      return null === (ub = bb) || "object" !== typeof ub ? ub : [ub.Xa, ub.oa, ub.Aa];
      var ub
    }
  },
  9280: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ob,
      g: () => Gb
    });
    var Bb = hb(9235);
    const Ob = "Air",
      Gb = Object.freeze(new Bb.d(Ob, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38853: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Gb,
      e: () => Lb
    });
    var Bb = hb(314),
      Ob = hb(4228);
    const Gb = new Set(Ob.n),
      Ub = new Map;

    function Lb(bb, ub) {
      let hb = Ub.get(ub);
      void 0 === hb && (hb = new Map, Ub.set(ub, hb));
      let Ob = hb.get(bb);
      return void 0 === Ob && (Ob = `${bb}${(0,Bb.z)(ub)}`, hb.set(bb, Ob)), Ob
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);