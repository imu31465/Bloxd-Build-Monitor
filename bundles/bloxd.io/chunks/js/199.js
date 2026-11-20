export const id = 199;
export const ids = [199];
export const modules = {
  40047: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ib,
      g: () => Ub,
      j: () => Tb
    });
    var kb = sb(40054),
      Wb = sb(4512),
      ab = sb(40060);

    function Tb(bb) {
      return bb.payloadKind === Wb.lc.Msgpack ? (0, kb.d)(bb.payload) : void 0
    }

    function Ub(bb, cb) {
      if (cb.payloadKind === Wb.lc.Bytes || cb.payloadKind === Wb.lc.MsgpackBin) return (0, ab.e)(bb, cb.payload)
    }

    function Ib(bb) {
      return null !== bb && "object" === typeof bb
    }
  },
  40066: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Mb,
      g: () => Xb,
      j: () => nb,
      k: () => fb,
      l: () => Qb
    });
    var kb = sb(4512),
      Wb = sb(40070);
    const ab = new Map,
      Tb = new Set,
      Ub = new Set;
    let Ib = 0,
      Hb = 0;

    function fb(bb, cb) {
      let sb = ab.get(bb);
      return sb || (sb = new Set, ab.set(bb, sb)), sb.add(cb), () => {
        sb.delete(cb)
      }
    }

    function Mb() {
      return 0 !== Ib
    }

    function Xb(bb) {
      return Tb.add(bb), () => {
        Tb.delete(bb)
      }
    }

    function nb(bb) {
      return Ub.add(bb), () => {
        Ub.delete(bb)
      }
    }
    const mb = "A raw message listener threw";

    function lb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Tb;
      for (const kb of cb) try {
        kb()
      } catch (sb) {
        bb ? (0, Wb.t)(sb, mb) : console.error(mb, sb)
      }
    }
    const Qb = {
      fire: function(bb) {
        if ("connection" === bb.type) {
          const cb = bb.phase === kb.x.Activated && bb.conn !== Ib && bb.conn > Hb,
            sb = (bb.phase === kb.x.Left || bb.phase === kb.x.Closed) && bb.conn === Ib;
          return void(cb || sb ? (Ib = cb ? bb.conn : 0, lb(!0)) : bb.phase === kb.x.Resumed && 0 !== Ib && bb.conn > Hb && (Ib = bb.conn, lb(!0, Ub)))
        }
        const cb = ab.get(bb.jT);
        if (cb && bb.conn === Ib && 0 !== Ib)
          for (const kb of cb) try {
            kb(bb)
          } catch (sb) {
            (0, Wb.t)(sb, mb)
          }
      },
      close: function(bb) {
        Hb = Math.max(Hb, bb, Ib), 0 !== Ib && (Ib = 0, lb(!1))
      }
    }
  },
  40035: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Hb,
      g: () => Ib,
      j: () => Ub
    });
    var kb = sb(1271),
      Wb = sb(40002);
    const ab = new TextDecoder,
      Tb = new TextEncoder;

    function Ub(bb, cb) {
      const sb = bb.queries.entityName(cb);
      if (sb === Wb.Jc) return;
      const Tb = bb.memoryData(bb.scratch(), 4 + sb, 4, "entity_name's answer");
      if (!Tb) return;
      const Ub = Tb.getUint32(0, !0),
        Ib = ab.decode(new Uint8Array(Tb.buffer, Tb.byteOffset + 4, sb));
      return (0, kb.d)(Ib, !1, Ub === Wb.Zd ? null : Ub)
    }

    function Ib(bb, cb, sb) {
      const kb = Tb.encode(sb);
      if (kb.length > Wb.rb) return !1;
      const ab = bb.memoryView(Uint8Array, bb.scratch(), kb.length, "has_effect's name");
      return !!ab && (ab.set(kb), 1 === bb.queries.hasEffect(cb, kb.length))
    }

    function Hb(bb, cb, sb, kb) {
      const Tb = bb.queries.blockData(cb, sb, kb);
      if (Tb === Wb.Jc) return;
      const Ub = bb.memoryView(Uint8Array, bb.scratch(), Tb, "block_data's answer");
      return Ub ? JSON.parse(ab.decode(Ub)) : void 0
    }
  },
  40054: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Wb,
      f: () => fb
    });
    const kb = new TextDecoder;

    function Wb(bb) {
      const cb = new ab(bb),
        sb = cb.value();
      if (cb.at !== bb.length) throw new Error(`msgpack: ${bb.length-cb.at} bytes after the value`);
      return sb
    }
    class ab {
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
        const cb = this.at;
        if (cb + bb > this.bytes.length) throw new Error(`msgpack: ${bb} bytes past the end at ${cb}`);
        return this.at = cb + bb, cb
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
        const cb = this.take(8);
        return bb ? this.view.getBigInt64(cb, !1) : this.view.getBigUint64(cb, !1)
      }
      str(bb) {
        const cb = this.take(bb),
          sb = this.bytes;
        if (bb < 16) {
          let Wb = "";
          for (let ab = cb; ab < cb + bb; ab++) {
            const Tb = sb[ab];
            if (Tb >= 128) return kb.decode(sb.subarray(cb, cb + bb));
            Wb += String.fromCharCode(Tb)
          }
          return Wb
        }
        return kb.decode(sb.subarray(cb, cb + bb))
      }
      bin(bb) {
        const cb = this.take(bb);
        return this.bytes.subarray(cb, cb + bb)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(bb) {
        this.enter();
        const cb = [];
        for (let sb = 0; sb < bb; sb++) cb.push(this.value());
        return this.depth--, cb
      }
      map(bb) {
        this.enter();
        const cb = {};
        for (let sb = 0; sb < bb; sb++) {
          const bb = this.value(),
            sb = this.value();
          cb["__proto__" === bb ? "__proto_" : String(bb)] = sb
        }
        return this.depth--, cb
      }
      ext(bb) {
        const cb = this.view.getInt8(this.take(1)),
          sb = this.take(bb);
        if (0 !== cb) {
          if (-1 === cb) {
            if (1 === bb) return new Date(NaN);
            if (4 === bb) return new Date(1e3 * this.view.getUint32(sb, !1));
            if (8 === bb) {
              const bb = this.view.getUint32(sb, !1),
                cb = bb >>> 2,
                kb = 4294967296 * (3 & bb) + this.view.getUint32(sb + 4, !1);
              return new Date(1e3 * kb + cb / 1e6)
            }
            if (12 === bb) {
              const bb = this.view.getUint32(sb, !1),
                cb = 4294967296 * this.view.getInt32(sb + 4, !1) + this.view.getUint32(sb + 8, !1);
              return new Date(1e3 * cb + bb / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${cb} of ${bb} bytes`)
        }
      }
    }
    const Tb = new TextEncoder,
      Ub = -(2n ** 63n),
      Ib = 2n ** 63n - 1n,
      Hb = 2n ** 64n - 1n;

    function fb(bb) {
      const cb = new Mb;
      return cb.value(bb, 0), cb.bytes()
    }
    class Mb {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(bb, cb) {
        if (cb > 512) throw new Error("msgpack: nested too deep");
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
              for (const sb of bb) this.value(sb, cb + 1)
            } else {
              var sb, kb;
              if (Object.getPrototypeOf(bb) !== Object.prototype && null !== Object.getPrototypeOf(bb)) throw new Error(`msgpack: can't encode a ${null!==(sb=null===(kb=bb.constructor)||void 0===kb?void 0:kb.name)&&void 0!==sb?sb:"object"}`);
              {
                const sb = Object.keys(bb);
                this.head(sb.length, 222, 128, 222, 223);
                for (const kb of sb) this.string(kb), this.value(bb[kb], cb + 1)
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
        const cb = bb >= Ub && bb <= Ib;
        if (!cb && (bb < 0n || bb > Hb)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(cb ? 211 : 207), this.room(8), cb ? this.view.setBigInt64(this.at, bb, !1) : this.view.setBigUint64(this.at, bb, !1), this.at += 8
      }
      string(bb) {
        const cb = Tb.encode(bb);
        this.head(cb.length, 217, 160, 218, 219), this.room(cb.length), this.buf.set(cb, this.at), this.at += cb.length
      }
      head(bb, cb, sb, kb, Wb) {
        sb >= 0 && bb < (160 === sb ? 32 : 16) ? this.u8(sb | bb) : cb !== kb && bb < 256 ? (this.u8(cb), this.u8(bb)) : bb < 65536 ? (this.u8(kb), this.u16(bb)) : (this.u8(Wb), this.u32(bb))
      }
      room(bb) {
        if (this.at + bb <= this.buf.length) return;
        let cb = 2 * this.buf.length;
        for (; cb < this.at + bb;) cb *= 2;
        const sb = new Uint8Array(cb);
        sb.set(this.buf.subarray(0, this.at)), this.buf = sb, this.view = new DataView(sb.buffer)
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
  40060: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb
    });
    var kb = sb(40043);
    const Wb = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class ab {
      constructor(bb) {
        this.buf = bb, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let bb = this.u8(),
          cb = 127 & bb,
          sb = 128;
        for (; 128 & bb;) {
          if (sb > 2 ** 63) throw new RangeError("avro: varint too long");
          bb = this.u8(), cb += (127 & bb) * sb, sb *= 128
        }
        return cb % 2 === 1 ? -(cb + 1) / 2 : cb / 2
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
          cb = this.take(bb),
          sb = cb + bb;
        if (bb <= 32) {
          let bb = "";
          for (let kb = cb; kb < sb; kb++) {
            const ab = this.buf[kb];
            if (ab >= 128) return Wb.decode(this.buf.subarray(cb, sb));
            bb += String.fromCharCode(ab)
          }
          return bb
        }
        return Wb.decode(this.buf.subarray(cb, sb))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(bb) {
        const cb = this.take(bb);
        return this.buf.slice(cb, cb + bb)
      }
      index(bb) {
        const cb = this.long();
        if (!(cb >= 0 && cb < bb)) throw new RangeError(`avro: index ${cb} of ${bb}`);
        return cb
      }
      im(bb) {
        const cb = [];
        for (let sb = this.long(); 0 !== sb; sb = this.long()) {
          sb = this.block(sb);
          for (let kb = 0; kb < sb; kb++) cb.push(bb(this))
        }
        return cb
      }
      map(bb) {
        const cb = {};
        for (let sb = this.long(); 0 !== sb; sb = this.long()) {
          sb = this.block(sb);
          for (let kb = 0; kb < sb; kb++) {
            cb[this.str()] = bb(this)
          }
        }
        return cb
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(bb) {
        let cb = bb;
        if (cb < 0 && (cb = -cb, this.long()), cb > this.buf.length - this.at) throw new RangeError(`avro: block of ${cb} items in ${this.buf.length-this.at} bytes`);
        return cb
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
        const cb = this.at;
        if (bb > this.buf.length - cb) throw new RangeError("avro: truncated");
        return this.at = cb + bb, cb
      }
    }

    function Tb(bb, cb) {
      const sb = new ab(cb),
        Wb = (0, kb.nb)(bb, sb);
      return sb.end(), Wb
    }
  },
  40043: (bb, cb, sb) => {
    sb.d(cb, {
      $: () => Mb,
      A: () => Vb,
      C: () => Xb,
      F: () => Hb,
      J: () => Tb,
      M: () => Bb,
      P: () => Wb,
      R: () => Ub,
      S: () => nb,
      U: () => Jb,
      W: () => hb,
      X: () => ub,
      Y: () => fb,
      cb: () => gb,
      db: () => mb,
      e: () => Lb,
      f: () => Qb,
      fb: () => Nb,
      hb: () => lb,
      j: () => eb,
      jb: () => Ib,
      n: () => Cb,
      nb: () => tb,
      q: () => Yb,
      t: () => kb,
      w: () => ab
    });
    const kb = 2,
      Wb = 12,
      ab = 27,
      Tb = 40,
      Ub = 52,
      Ib = 59,
      Hb = 63,
      fb = 83,
      Mb = 84,
      Xb = 89,
      nb = 91,
      mb = 93,
      lb = 94,
      Qb = 95,
      eb = 97,
      Cb = 101,
      Nb = 102,
      Vb = 73,
      Lb = 16,
      ub = 86,
      Yb = 60,
      hb = 17,
      Jb = 56,
      gb = 100,
      Bb = 81;

    function tb(bb, cb) {
      switch (bb) {
        case kb:
          return function(bb) {
            return {
              cT: vb(bb),
              sT: bb.float(),
              kT: bb.long()
            }
          }(cb);
        case Wb:
          return function(bb) {
            return {
              bb: ib(bb),
              cb: ib(bb)
            }
          }(cb);
        case ab:
          return function(bb) {
            return {
              Vc: bb.bool(),
              Lc: ib(bb)
            }
          }(cb);
        case Tb:
          return cb.str();
        case Ub:
          return function(bb) {
            return {
              id: bb.long(),
              Db: Tc(bb)
            }
          }(cb);
        case Ib:
        case Hb:
          return cb.str();
        case fb:
        case Mb:
          return cb.long();
        case Xb:
          return function(bb) {
            return {
              Dk: bb.long(),
              Ek: bb.bool(),
              ik: bb.float()
            }
          }(cb);
        case nb:
          return cb.long();
        case mb:
          return function(bb) {
            return {
              Cs: bb.bool(),
              Ns: Hc(bb)
            }
          }(cb);
        case lb:
          return function(bb) {
            return {
              id: bb.str(),
              position: Ic(bb),
              La: fc(bb),
              style: qb(bb),
              Ya: bb.bool()
            }
          }(cb);
        case Qb:
          return function(bb) {
            return {
              id: ib(bb)
            }
          }(cb);
        case eb:
          return function(bb) {
            return {
              Jc: bb.long(),
              gc: bb.str(),
              Bc: Wc(bb),
              tc: Wc(bb),
              yc: ib(bb),
              Pc: ib(bb),
              Dc: ib(bb),
              Ec: ib(bb),
              Oc: ib(bb),
              Gc: Wc(bb),
              Kc: Wc(bb),
              Zc: ib(bb),
              zc: ib(bb),
              qc: ib(bb)
            }
          }(cb);
        case Cb:
          return cb.str();
        case Nb:
          return cb.long();
        case Vb:
          return function(bb) {
            return {
              Nk: bb.long(),
              Vk: bb.str(),
              Lk: bb.float()
            }
          }(cb);
        case Lb:
          return function(bb) {
            return {
              HT: bb.bool(),
              fT: ib(bb),
              MT: bb.str(),
              XT: Xc(bb),
              nT: Xc(bb),
              mT: bb.bool(),
              lT: bb.long(),
              QT: nc(bb)
            }
          }(cb);
        case ub:
          return function(bb) {
            return {
              FW: ib(bb)
            }
          }(cb);
        case Yb:
          return function(bb) {
            return {
              nc: bb.str(),
              mc: bb.str(),
              lc: mc(bb),
              Qc: bb.str(),
              Cc: jb(bb),
              Nc: bb.float()
            }
          }(cb);
        case hb:
          return function(bb) {
            return {
              nc: bb.str(),
              mc: bb.str(),
              lc: mc(bb)
            }
          }(cb);
        case Jb:
          return function(bb) {
            return bb.im(lc)
          }(cb);
        case gb:
          return function(bb) {
            return {
              Ok: ec(bb),
              qk: wb(bb)
            }
          }(cb);
        case Bb:
          return function(bb) {
            return {
              Ak: bb.bool(),
              wk: ib(bb),
              rk: Nc(bb),
              Rk: Oc(bb)
            }
          }(cb);
        default:
          throw new Error(`no reader for to-client message ${bb}`)
      }
    }

    function yb(bb) {
      return {
        entityName: bb.str()
      }
    }

    function Pb(bb) {
      const cb = bb.index(4);
      return 0 === cb ? bb.str() : 1 === cb ? bb.long() : 2 === cb ? bb.bool() : yb(bb)
    }

    function Db(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return bb.map(Pb)
      }(bb)
    }

    function Eb(bb) {
      return {
        translationKey: bb.str(),
        params: Db(bb)
      }
    }

    function ib(bb) {
      return 0 === bb.index(2) ? null : bb.str()
    }

    function Ob(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          color: ib(bb),
          colour: ib(bb),
          fontSize: ib(bb)
        }
      }(bb)
    }

    function Gb(bb) {
      return {
        icon: bb.str(),
        style: Ob(bb)
      }
    }

    function Kb(bb) {
      const cb = bb.index(3);
      return 0 === cb ? {
        string: bb.str()
      } : 1 === cb ? {
        styledEntityName: yb(bb)
      } : {
        styledTranslatedText: Eb(bb)
      }
    }

    function Zb(bb) {
      const cb = bb.index(3);
      return 0 === cb ? null : 1 === cb ? bb.str() : bb.long()
    }

    function zb(bb) {
      return 0 === bb.index(2) ? null : bb.float()
    }

    function qb(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          color: ib(bb),
          colour: ib(bb),
          fontWeight: Zb(bb),
          fontStyle: ib(bb),
          fontSize: ib(bb),
          opacity: zb(bb)
        }
      }(bb)
    }

    function db(bb) {
      return {
        str: Kb(bb),
        style: qb(bb),
        clickableUrl: ib(bb)
      }
    }

    function Ab(bb) {
      return bb.str()
    }

    function wb(bb) {
      return bb.im(Ab)
    }

    function rb(bb) {
      return 0 === bb.index(2) ? null : wb(bb)
    }

    function ob(bb) {
      return {
        type: bb.str(),
        progress: bb.float(),
        width: ib(bb),
        height: ib(bb),
        colours: rb(bb),
        backgroundColour: ib(bb)
      }
    }

    function Sb(bb) {
      return {
        type: bb.str(),
        action: bb.str(),
        style: qb(bb)
      }
    }

    function Rb(bb) {
      const cb = bb.index(7);
      return 0 === cb ? {
        string: bb.str()
      } : 1 === cb ? {
        entityName: yb(bb)
      } : 2 === cb ? {
        translatedText: Eb(bb)
      } : 3 === cb ? {
        styledIcon: Gb(bb)
      } : 4 === cb ? {
        qb: db(bb)
      } : 5 === cb ? {
        styledProgressBar: ob(bb)
      } : {
        styledKeyBinding: Sb(bb)
      }
    }

    function vb(bb) {
      return bb.im(Rb)
    }
    const Fb = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function xb(bb) {
      return Fb[bb.index(5)]
    }

    function jb(bb) {
      return 0 === bb.index(2) ? null : bb.double()
    }

    function pb(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          Gb: jb(bb),
          Kb: bb.double(),
          Zb: bb.double(),
          zb: bb.bool(),
          description: vb(bb),
          ob: bb.str(),
          scale: jb(bb),
          rotation: jb(bb)
        }
      }(bb)
    }

    function bc(bb) {
      return 0 === bb.index(2) ? null : bb.bool()
    }

    function cc(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          Rb: bb.double(),
          icon: bb.str(),
          label: vb(bb),
          Fb: bb.bool(),
          scale: jb(bb),
          rotation: jb(bb),
          xb: bc(bb)
        }
      }(bb)
    }

    function sc(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          Gb: jb(bb),
          pb: bb.double(),
          bc: bb.double(),
          sc: bb.double(),
          gravity: bb.double(),
          kc: bb.double(),
          Wc: bb.double(),
          ac: bb.double(),
          zb: bb.bool(),
          description: vb(bb),
          icon: ib(bb)
        }
      }(bb)
    }

    function kc(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          speed: bb.double(),
          Uc: bb.double(),
          label: vb(bb),
          icon: ib(bb),
          scale: jb(bb),
          rotation: jb(bb)
        }
      }(bb)
    }

    function Wc(bb) {
      return 0 === bb.index(2) ? null : bb.long()
    }

    function ac(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          Hc: bb.long(),
          fc: bb.double(),
          Mc: bb.double(),
          Xc: Wc(bb),
          label: vb(bb),
          icon: ib(bb)
        }
      }(bb)
    }

    function Tc(bb) {
      return {
        type: xb(bb),
        progressBar: pb(bb),
        timedClick: cc(bb),
        gravityBar: sc(bb),
        precisionBar: kc(bb),
        rhythmClick: ac(bb)
      }
    }

    function Uc(bb) {
      return bb.float()
    }

    function Ic(bb) {
      return bb.im(Uc)
    }

    function Hc(bb) {
      return 0 === bb.index(2) ? null : Ic(bb)
    }

    function fc(bb) {
      return 0 === bb.index(2) ? null : vb(bb)
    }

    function Mc(bb) {
      return bb.long()
    }

    function Xc(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return bb.im(Mc)
      }(bb)
    }

    function nc(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          xs: bb.str(),
          Tk: bb.long()
        }
      }(bb)
    }

    function mc(bb) {
      const cb = bb.index(3);
      return 0 === cb ? null : 1 === cb ? bb.str() : Eb(bb)
    }

    function lc(bb) {
      return {
        nk: bb.str(),
        mk: bb.str(),
        lk: bb.str()
      }
    }

    function Qc(bb) {
      return {
        Gk: bb.str(),
        Kk: ib(bb),
        Zk: ib(bb),
        zk: wb(bb)
      }
    }

    function ec(bb) {
      return bb.im(Qc)
    }

    function Cc(bb) {
      return {
        Sk: bb.str(),
        x: bb.long(),
        y: bb.long(),
        z: bb.long()
      }
    }

    function Nc(bb) {
      return bb.im(Cc)
    }

    function Vc(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          lW: bb.float(),
          QW: bb.long(),
          eW: bb.long()
        }
      }(bb)
    }

    function Lc(bb) {
      return {
        blockName: bb.str(),
        UW: bb.bool(),
        IW: bb.bool(),
        HW: bb.bool(),
        fW: bb.float(),
        MW: bb.float(),
        XW: bb.long(),
        nW: Vc(bb)
      }
    }

    function uc(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return bb.im(Lc)
      }(bb)
    }

    function Yc(bb) {
      return {
        WW: bb.str(),
        aW: uc(bb)
      }
    }

    function hc(bb) {
      return {
        blockName: bb.str(),
        frequency: bb.float()
      }
    }

    function Jc(bb) {
      return bb.im(hc)
    }

    function gc(bb) {
      return {
        LW: bb.str(),
        uW: bb.str(),
        frequency: bb.float(),
        YW: Jc(bb)
      }
    }

    function Bc(bb) {
      return bb.im(gc)
    }

    function tc(bb) {
      return {
        blockName: bb.str(),
        radius: bb.long(),
        BW: bb.long(),
        xk: bb.long(),
        jk: bb.long(),
        tW: bb.float()
      }
    }

    function yc(bb) {
      return bb.im(tc)
    }

    function Pc(bb) {
      return {
        xk: bb.long(),
        jk: bb.long(),
        bW: bb.long(),
        cW: bb.bool(),
        sW: Yc(bb),
        NW: Bc(bb),
        JW: yc(bb)
      }
    }

    function Dc(bb) {
      return bb.im(Pc)
    }

    function Ec(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          name: bb.str(),
          EW: ib(bb)
        }
      }(bb)
    }

    function ic(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          terrain: Ec(bb),
          iW: yc(bb)
        }
      }(bb)
    }

    function Oc(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          layers: Dc(bb),
          yW: ic(bb)
        }
      }(bb)
    }
  },
  40020: (bb, cb, sb) => {
    sb.d(cb, {
      B: () => yb,
      E: () => Vb,
      H: () => Lb,
      J: () => Qb,
      N: () => gb,
      R: () => Db,
      S: () => mb,
      T: () => ib,
      X: () => Cb,
      Z: () => eb,
      ab: () => Nb,
      c: () => Wb,
      db: () => ub,
      e: () => Eb,
      i: () => Pb,
      m: () => nb,
      p: () => lb,
      q: () => tb,
      s: () => hb,
      u: () => Bb,
      y: () => Jb,
      z: () => Yb
    });
    var kb = sb(2740);
    const Wb = {
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
      UpdateNameTag: 53
    };

    function ab(bb, cb) {
      return !ArrayBuffer.isView(bb) || bb instanceof DataView ? Array.isArray(bb) ? bb.map((bb => cb(bb))) : bb : Array.from(bb, (bb => cb(bb)))
    }

    function Tb(bb) {
      if ("string" !== typeof bb) return bb;
      for (let cb = 0; cb < bb.length; cb++) {
        const sb = bb.charCodeAt(cb);
        if (sb >= 55296 && sb <= 57343) return Ib.decode(Ub.encode(bb))
      }
      return bb
    }
    const Ub = new TextEncoder,
      Ib = new TextDecoder;

    function Hb(bb) {
      return bb
    }
    let fb;

    function Mb(bb) {
      return null === bb || "object" !== typeof bb ? bb : [Tb(bb.YT), Tb(bb.hT)]
    }

    function Xb(bb) {
      return null === bb || "object" !== typeof bb ? bb : [ab(bb.XT, Hb), ab(bb.OH, Hb)]
    }

    function nb(bb) {
      return null === (cb = bb) || "object" !== typeof cb ? cb : [Tb(cb.jT), Tb(cb.pT)];
      var cb
    }

    function mb(bb) {
      return null === (cb = bb) || "object" !== typeof cb ? cb : [cb.id, cb.ET];
      var cb
    }

    function lb(bb) {
      return null === (cb = bb) || "object" !== typeof cb ? cb : [cb.Jc, Tb(cb.gc), cb.Bc, Tb(cb.Pc), cb.Gc, cb.Kc, cb.vT, Tb(cb.FT), Tb(cb.xT)];
      var cb
    }

    function Qb(bb) {
      return null === (cb = bb) || "object" !== typeof cb ? cb : [ab(cb.hf, Hb), cb.Jf];
      var cb
    }

    function eb(bb) {
      return null === (cb = bb) || "object" !== typeof cb ? cb : [ab(cb.GU, (bb => Tb(bb))), Tb(cb.KU), cb.ZU];
      var cb
    }

    function Cb(bb) {
      return null === (cb = bb) || "object" !== typeof cb ? cb : [ab(cb.iT, Hb), Tb(cb.OT), cb.GT];
      var cb
    }

    function Nb(bb) {
      return null === (cb = bb) || "object" !== typeof cb ? cb : [Tb(cb.mk), Tb(cb.lk)];
      var cb
    }

    function Vb(bb) {
      return null === (cb = bb) || "object" !== typeof cb ? cb : [Tb(cb.yU)];
      var cb
    }

    function Lb(bb) {
      return Tb(bb)
    }

    function ub(bb) {
      return null === (cb = bb) || "object" !== typeof cb ? cb : [Tb(cb.kM), Tb(cb.WM), Tb(cb.YT), Tb(cb.hT)];
      var cb
    }

    function Yb(bb) {
      return Mb(bb)
    }

    function hb(bb) {
      return Mb(bb)
    }

    function Jb(bb) {
      return null === (cb = bb) || "object" !== typeof cb ? cb : [Tb(cb.bU)];
      var cb
    }

    function gb(bb) {
      return bb
    }

    function Bb(bb) {
      return null === (cb = bb) || "object" !== typeof cb ? cb : [Tb(cb.BT), Tb(cb.tT)];
      var cb
    }

    function tb(bb) {
      return Tb(bb)
    }

    function yb(bb) {
      return Xb(bb)
    }

    function Pb(bb) {
      return Xb(bb)
    }

    function Db(bb) {
      return null === (cb = bb) || "object" !== typeof cb ? cb : [Tb(cb.iU)];
      var cb
    }

    function Eb(bb) {
      return (fb ??= (0, kb.e)().map((bb => bb.name)), fb).map((cb => {
        return "string" === typeof(sb = bb[cb]) ? Tb(sb) : ab(sb, Hb);
        var sb
      }))
    }

    function ib(bb) {
      return null === (cb = bb) || "object" !== typeof cb ? cb : [cb.AU, cb.wU, cb.rU];
      var cb
    }
  },
  9103: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb,
      f: () => ab
    });
    var kb = sb(9064);
    const Wb = "Air",
      ab = Object.freeze(new kb.f(Wb, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38801: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab,
      f: () => Ub
    });
    var kb = sb(344),
      Wb = sb(4203);
    const ab = new Set(Wb.k),
      Tb = new Map;

    function Ub(bb, cb) {
      let sb = Tb.get(cb);
      void 0 === sb && (sb = new Map, Tb.set(cb, sb));
      let Wb = sb.get(bb);
      return void 0 === Wb && (Wb = `${bb}${(0,kb.C)(cb)}`, sb.set(bb, Wb)), Wb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);