export const id = 127;
export const ids = [127];
export const modules = {
  42277: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => lb,
      d: () => gb,
      g: () => Vb
    });
    var eb = Mb(42284),
      Hb = Mb(5678),
      pb = Mb(42293);

    function Vb(bb) {
      return bb.payloadKind === Hb.hc.Msgpack ? (0, eb.d)(bb.payload) : void 0
    }

    function gb(bb, wb) {
      if (wb.payloadKind === Hb.hc.Bytes || wb.payloadKind === Hb.hc.MsgpackBin) return (0, pb.c)(bb, wb.payload)
    }

    function lb(bb) {
      return null !== bb && "object" === typeof bb
    }
  },
  42295: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Ob,
      f: () => Ub,
      i: () => tb,
      m: () => Ib,
      p: () => Fb
    });
    var eb = Mb(5678),
      Hb = Mb(42303);
    const pb = new Map,
      Vb = new Set,
      gb = new Set;
    let lb = 0,
      Lb = 0;

    function Ib(bb, wb) {
      let Mb = pb.get(bb);
      return Mb || (Mb = new Set, pb.set(bb, Mb)), Mb.add(wb), () => {
        Mb.delete(wb)
      }
    }

    function Ob() {
      return 0 !== lb
    }

    function Ub(bb) {
      return Vb.add(bb), () => {
        Vb.delete(bb)
      }
    }

    function tb(bb) {
      return gb.add(bb), () => {
        gb.delete(bb)
      }
    }
    const Cb = "A raw message listener threw";

    function Eb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vb;
      for (const eb of wb) try {
        eb()
      } catch (Mb) {
        bb ? (0, Hb.m)(Mb, Cb) : console.error(Cb, Mb)
      }
    }
    const Fb = {
      fire: function(bb) {
        if ("connection" === bb.type) {
          const wb = bb.phase === eb.B.Activated && bb.conn !== lb && bb.conn > Lb,
            Mb = (bb.phase === eb.B.Left || bb.phase === eb.B.Closed) && bb.conn === lb;
          return void(wb || Mb ? (lb = wb ? bb.conn : 0, Eb(!0)) : bb.phase === eb.B.Resumed && 0 !== lb && bb.conn > Lb && (lb = bb.conn, Eb(!0, gb)))
        }
        const wb = pb.get(bb.tV);
        if (wb && bb.conn === lb && 0 !== lb)
          for (const eb of wb) try {
            eb(bb)
          } catch (Mb) {
            (0, Hb.m)(Mb, Cb)
          }
      },
      close: function(bb) {
        Lb = Math.max(Lb, bb, lb), 0 !== lb && (lb = 0, Eb(!1))
      }
    }
  },
  42272: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Lb,
      h: () => lb,
      l: () => gb
    });
    var eb = Mb(1333),
      Hb = Mb(42253);
    const pb = new TextDecoder,
      Vb = new TextEncoder;

    function gb(bb, wb) {
      const Mb = bb.queries.entityName(wb);
      if (Mb === Hb.Ac) return;
      const Vb = bb.memoryData(bb.scratch(), 4 + Mb, 4, "entity_name's answer");
      if (!Vb) return;
      const gb = Vb.getUint32(0, !0),
        lb = pb.decode(new Uint8Array(Vb.buffer, Vb.byteOffset + 4, Mb));
      return (0, eb.b)(lb, !1, gb === Hb.Od ? null : gb)
    }

    function lb(bb, wb, Mb) {
      const eb = Vb.encode(Mb);
      if (eb.length > Hb.xb) return !1;
      const pb = bb.memoryView(Uint8Array, bb.scratch(), eb.length, "has_effect's name");
      return !!pb && (pb.set(eb), 1 === bb.queries.hasEffect(wb, eb.length))
    }

    function Lb(bb, wb, Mb, eb) {
      const Vb = bb.queries.blockData(wb, Mb, eb);
      if (Vb === Hb.Ac) return;
      const gb = bb.memoryView(Uint8Array, bb.scratch(), Vb, "block_data's answer");
      return gb ? JSON.parse(pb.decode(gb)) : void 0
    }
  },
  42284: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb,
      h: () => Ib
    });
    const eb = new TextDecoder;

    function Hb(bb) {
      const wb = new pb(bb),
        Mb = wb.value();
      if (wb.at !== bb.length) throw new Error(`msgpack: ${bb.length-wb.at} bytes after the value`);
      return Mb
    }
    class pb {
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
        const wb = this.at;
        if (wb + bb > this.bytes.length) throw new Error(`msgpack: ${bb} bytes past the end at ${wb}`);
        return this.at = wb + bb, wb
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
        const wb = this.take(8);
        return bb ? this.view.getBigInt64(wb, !1) : this.view.getBigUint64(wb, !1)
      }
      str(bb) {
        const wb = this.take(bb),
          Mb = this.bytes;
        if (bb < 16) {
          let Hb = "";
          for (let pb = wb; pb < wb + bb; pb++) {
            const Vb = Mb[pb];
            if (Vb >= 128) return eb.decode(Mb.subarray(wb, wb + bb));
            Hb += String.fromCharCode(Vb)
          }
          return Hb
        }
        return eb.decode(Mb.subarray(wb, wb + bb))
      }
      bin(bb) {
        const wb = this.take(bb);
        return this.bytes.subarray(wb, wb + bb)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(bb) {
        this.enter();
        const wb = [];
        for (let Mb = 0; Mb < bb; Mb++) wb.push(this.value());
        return this.depth--, wb
      }
      map(bb) {
        this.enter();
        const wb = {};
        for (let Mb = 0; Mb < bb; Mb++) {
          const bb = this.value(),
            Mb = this.value();
          wb["__proto__" === bb ? "__proto_" : String(bb)] = Mb
        }
        return this.depth--, wb
      }
      ext(bb) {
        const wb = this.view.getInt8(this.take(1)),
          Mb = this.take(bb);
        if (0 !== wb) {
          if (-1 === wb) {
            if (1 === bb) return new Date(NaN);
            if (4 === bb) return new Date(1e3 * this.view.getUint32(Mb, !1));
            if (8 === bb) {
              const bb = this.view.getUint32(Mb, !1),
                wb = bb >>> 2,
                eb = 4294967296 * (3 & bb) + this.view.getUint32(Mb + 4, !1);
              return new Date(1e3 * eb + wb / 1e6)
            }
            if (12 === bb) {
              const bb = this.view.getUint32(Mb, !1),
                wb = 4294967296 * this.view.getInt32(Mb + 4, !1) + this.view.getUint32(Mb + 8, !1);
              return new Date(1e3 * wb + bb / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${wb} of ${bb} bytes`)
        }
      }
    }
    const Vb = new TextEncoder,
      gb = -(2n ** 63n),
      lb = 2n ** 63n - 1n,
      Lb = 2n ** 64n - 1n;

    function Ib(bb) {
      const wb = new Ob;
      return wb.value(bb, 0), wb.bytes()
    }
    class Ob {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(bb, wb) {
        if (wb > 512) throw new Error("msgpack: nested too deep");
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
              for (const Mb of bb) this.value(Mb, wb + 1)
            } else {
              var Mb, eb;
              if (Object.getPrototypeOf(bb) !== Object.prototype && null !== Object.getPrototypeOf(bb)) throw new Error(`msgpack: can't encode a ${null!==(Mb=null===(eb=bb.constructor)||void 0===eb?void 0:eb.name)&&void 0!==Mb?Mb:"object"}`);
              {
                const Mb = Object.keys(bb);
                this.head(Mb.length, 222, 128, 222, 223);
                for (const eb of Mb) this.string(eb), this.value(bb[eb], wb + 1)
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
        const wb = bb >= gb && bb <= lb;
        if (!wb && (bb < 0n || bb > Lb)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(wb ? 211 : 207), this.room(8), wb ? this.view.setBigInt64(this.at, bb, !1) : this.view.setBigUint64(this.at, bb, !1), this.at += 8
      }
      string(bb) {
        const wb = Vb.encode(bb);
        this.head(wb.length, 217, 160, 218, 219), this.room(wb.length), this.buf.set(wb, this.at), this.at += wb.length
      }
      head(bb, wb, Mb, eb, Hb) {
        Mb >= 0 && bb < (160 === Mb ? 32 : 16) ? this.u8(Mb | bb) : wb !== eb && bb < 256 ? (this.u8(wb), this.u8(bb)) : bb < 65536 ? (this.u8(eb), this.u16(bb)) : (this.u8(Hb), this.u32(bb))
      }
      room(bb) {
        if (this.at + bb <= this.buf.length) return;
        let wb = 2 * this.buf.length;
        for (; wb < this.at + bb;) wb *= 2;
        const Mb = new Uint8Array(wb);
        Mb.set(this.buf.subarray(0, this.at)), this.buf = Mb, this.view = new DataView(Mb.buffer)
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
  42293: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Vb
    });
    var eb = Mb(42274);
    const Hb = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class pb {
      constructor(bb) {
        this.buf = bb, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let bb = this.u8(),
          wb = 127 & bb,
          Mb = 128;
        for (; 128 & bb;) {
          if (Mb > 2 ** 63) throw new RangeError("avro: varint too long");
          bb = this.u8(), wb += (127 & bb) * Mb, Mb *= 128
        }
        return wb % 2 === 1 ? -(wb + 1) / 2 : wb / 2
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
          wb = this.take(bb),
          Mb = wb + bb;
        if (bb <= 32) {
          let bb = "";
          for (let eb = wb; eb < Mb; eb++) {
            const pb = this.buf[eb];
            if (pb >= 128) return Hb.decode(this.buf.subarray(wb, Mb));
            bb += String.fromCharCode(pb)
          }
          return bb
        }
        return Hb.decode(this.buf.subarray(wb, Mb))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(bb) {
        const wb = this.take(bb);
        return this.buf.slice(wb, wb + bb)
      }
      index(bb) {
        const wb = this.long();
        if (!(wb >= 0 && wb < bb)) throw new RangeError(`avro: index ${wb} of ${bb}`);
        return wb
      }
      TI(bb) {
        const wb = [];
        for (let Mb = this.long(); 0 !== Mb; Mb = this.long()) {
          Mb = this.block(Mb);
          for (let eb = 0; eb < Mb; eb++) wb.push(bb(this))
        }
        return wb
      }
      map(bb) {
        const wb = {};
        for (let Mb = this.long(); 0 !== Mb; Mb = this.long()) {
          Mb = this.block(Mb);
          for (let eb = 0; eb < Mb; eb++) {
            wb[this.str()] = bb(this)
          }
        }
        return wb
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(bb) {
        let wb = bb;
        if (wb < 0 && (wb = -wb, this.long()), wb > this.buf.length - this.at) throw new RangeError(`avro: block of ${wb} items in ${this.buf.length-this.at} bytes`);
        return wb
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
        const wb = this.at;
        if (bb > this.buf.length - wb) throw new RangeError("avro: truncated");
        return this.at = wb + bb, wb
      }
    }

    function Vb(bb, wb) {
      const Mb = new pb(wb),
        Hb = (0, eb.eb)(bb, Mb);
      return Mb.end(), Hb
    }
  },
  42274: (bb, wb, Mb) => {
    Mb.d(wb, {
      $: () => Eb,
      B: () => Vb,
      E: () => Rb,
      F: () => Hb,
      I: () => gb,
      J: () => tb,
      L: () => Kb,
      M: () => jb,
      Q: () => Xb,
      R: () => Ib,
      S: () => Ob,
      W: () => rb,
      X: () => Cb,
      Y: () => mb,
      ab: () => lb,
      b: () => zb,
      e: () => Fb,
      eb: () => Db,
      h: () => Bb,
      j: () => sb,
      l: () => xb,
      p: () => eb,
      r: () => pb,
      t: () => hb,
      v: () => Ub,
      y: () => Lb
    });
    const eb = 2,
      Hb = 12,
      pb = 27,
      Vb = 40,
      gb = 52,
      lb = 59,
      Lb = 63,
      Ib = 83,
      Ob = 84,
      Ub = 89,
      tb = 91,
      Cb = 93,
      Eb = 94,
      Fb = 95,
      Bb = 97,
      sb = 101,
      mb = 102,
      hb = 73,
      zb = 16,
      Xb = 86,
      xb = 60,
      jb = 17,
      Kb = 56,
      rb = 100,
      Rb = 81;

    function Db(bb, wb) {
      switch (bb) {
        case eb:
          return function(bb) {
            return {
              dp: nb(bb),
              Pp: bb.float(),
              np: bb.long()
            }
          }(wb);
        case Hb:
          return function(bb) {
            return {
              Lp: Ab(bb),
              Ip: Ab(bb)
            }
          }(wb);
        case pb:
          return function(bb) {
            return {
              Yw: bb.bool(),
              Zw: Ab(bb)
            }
          }(wb);
        case Vb:
          return wb.str();
        case gb:
          return function(bb) {
            return {
              id: bb.long(),
              Fp: Vw(bb)
            }
          }(wb);
        case lb:
          return function(bb) {
            return {
              rw: Ab(bb),
              Rw: lw(bb)
            }
          }(wb);
        case Lb:
          return wb.str();
        case Ib:
        case Ob:
          return wb.long();
        case Ub:
          return function(bb) {
            return {
              tp: bb.long(),
              Cp: bb.bool(),
              Ep: bb.float()
            }
          }(wb);
        case tb:
          return wb.long();
        case Cb:
          return function(bb) {
            return {
              fw: bb.bool(),
              Aw: Ow(bb)
            }
          }(wb);
        case Eb:
          return function(bb) {
            return {
              id: bb.str(),
              position: Iw(bb),
              dw: Uw(bb),
              style: Qb(bb),
              ow: bb.bool()
            }
          }(wb);
        case Fb:
          return function(bb) {
            return {
              id: Ab(bb)
            }
          }(wb);
        case Bb:
          return function(bb) {
            return {
              DM: bb.long(),
              cM: bb.str(),
              YM: Hw(bb),
              ZM: Hw(bb),
              fM: Ab(bb),
              AM: Ab(bb),
              WM: Ab(bb),
              JM: Ab(bb),
              SM: Ab(bb),
              NM: Hw(bb),
              vM: Hw(bb),
              QM: Ab(bb),
              GM: Ab(bb),
              qM: Ab(bb)
            }
          }(wb);
        case sb:
          return wb.str();
        case mb:
          return wb.long();
        case hb:
          return function(bb) {
            return {
              XH: bb.long(),
              xH: bb.str(),
              jH: bb.float()
            }
          }(wb);
        case zb:
          return function(bb) {
            return {
              QH: bb.bool(),
              GH: Ab(bb),
              qH: bb.str(),
              aH: Cw(bb),
              iH: Cw(bb),
              uH: bb.bool(),
              dH: bb.long(),
              PH: Ew(bb)
            }
          }(wb);
        case Xb:
          return function(bb) {
            return {
              ew: Ab(bb)
            }
          }(wb);
        case xb:
          return function(bb) {
            return {
              bV: bb.str(),
              wV: bb.str(),
              MV: Fw(bb),
              eV: bb.str(),
              HV: Tb(bb),
              pV: bb.float()
            }
          }(wb);
        case jb:
          return function(bb) {
            return {
              bV: bb.str(),
              wV: bb.str(),
              MV: Fw(bb)
            }
          }(wb);
        case Kb:
          return function(bb) {
            return bb.TI(Bw)
          }(wb);
        case rb:
          return function(bb) {
            return {
              KH: mw(bb),
              YH: ab(bb)
            }
          }(wb);
        case Rb:
          return function(bb) {
            return {
              pe: bb.bool(),
              Ve: Ab(bb),
              ge: zw(bb),
              Ie: Nw(bb)
            }
          }(wb);
        default:
          throw new Error(`no reader for to-client message ${bb}`)
      }
    }

    function cb(bb) {
      return {
        entityName: bb.str()
      }
    }

    function Yb(bb) {
      const wb = bb.index(4);
      return 0 === wb ? bb.str() : 1 === wb ? bb.long() : 2 === wb ? bb.bool() : cb(bb)
    }

    function Zb(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return bb.map(Yb)
      }(bb)
    }

    function fb(bb) {
      return {
        translationKey: bb.str(),
        params: Zb(bb)
      }
    }

    function Ab(bb) {
      return 0 === bb.index(2) ? null : bb.str()
    }

    function Wb(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          color: Ab(bb),
          colour: Ab(bb),
          fontSize: Ab(bb)
        }
      }(bb)
    }

    function Jb(bb) {
      return {
        icon: bb.str(),
        style: Wb(bb)
      }
    }

    function Sb(bb) {
      const wb = bb.index(3);
      return 0 === wb ? {
        string: bb.str()
      } : 1 === wb ? {
        styledEntityName: cb(bb)
      } : {
        styledTranslatedText: fb(bb)
      }
    }

    function Nb(bb) {
      const wb = bb.index(3);
      return 0 === wb ? null : 1 === wb ? bb.str() : bb.long()
    }

    function vb(bb) {
      return 0 === bb.index(2) ? null : bb.float()
    }

    function Qb(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          color: Ab(bb),
          colour: Ab(bb),
          fontWeight: Nb(bb),
          fontStyle: Ab(bb),
          fontSize: Ab(bb),
          opacity: vb(bb)
        }
      }(bb)
    }

    function Gb(bb) {
      return {
        str: Sb(bb),
        style: Qb(bb),
        clickableUrl: Ab(bb)
      }
    }

    function qb(bb) {
      return bb.str()
    }

    function ab(bb) {
      return bb.TI(qb)
    }

    function ib(bb) {
      return 0 === bb.index(2) ? null : ab(bb)
    }

    function ub(bb) {
      return {
        type: bb.str(),
        progress: bb.float(),
        width: Ab(bb),
        height: Ab(bb),
        colours: ib(bb),
        backgroundColour: Ab(bb)
      }
    }

    function db(bb) {
      return {
        type: bb.str(),
        action: bb.str(),
        style: Qb(bb)
      }
    }

    function Pb(bb) {
      const wb = bb.index(7);
      return 0 === wb ? {
        string: bb.str()
      } : 1 === wb ? {
        entityName: cb(bb)
      } : 2 === wb ? {
        translatedText: fb(bb)
      } : 3 === wb ? {
        styledIcon: Jb(bb)
      } : 4 === wb ? {
        Pw: Gb(bb)
      } : 5 === wb ? {
        styledProgressBar: ub(bb)
      } : {
        styledKeyBinding: db(bb)
      }
    }

    function nb(bb) {
      return bb.TI(Pb)
    }
    const yb = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function ob(bb) {
      return yb[bb.index(5)]
    }

    function Tb(bb) {
      return 0 === bb.index(2) ? null : bb.double()
    }

    function kb(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          hp: Tb(bb),
          zp: bb.double(),
          Xp: bb.double(),
          xp: bb.bool(),
          description: nb(bb),
          jp: bb.str(),
          scale: Tb(bb),
          rotation: Tb(bb)
        }
      }(bb)
    }

    function bw(bb) {
      return 0 === bb.index(2) ? null : bb.bool()
    }

    function ww(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          rp: bb.double(),
          icon: bb.str(),
          label: nb(bb),
          Rp: bb.bool(),
          scale: Tb(bb),
          rotation: Tb(bb),
          Dp: bw(bb)
        }
      }(bb)
    }

    function Mw(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          hp: Tb(bb),
          Yp: bb.double(),
          Zp: bb.double(),
          fp: bb.double(),
          gravity: bb.double(),
          Ap: bb.double(),
          Wp: bb.double(),
          Jp: bb.double(),
          xp: bb.bool(),
          description: nb(bb),
          icon: Ab(bb)
        }
      }(bb)
    }

    function ew(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          speed: bb.double(),
          Np: bb.double(),
          label: nb(bb),
          icon: Ab(bb),
          scale: Tb(bb),
          rotation: Tb(bb)
        }
      }(bb)
    }

    function Hw(bb) {
      return 0 === bb.index(2) ? null : bb.long()
    }

    function pw(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          Qp: bb.long(),
          Gp: bb.double(),
          qp: bb.double(),
          ap: Hw(bb),
          label: nb(bb),
          icon: Ab(bb)
        }
      }(bb)
    }

    function Vw(bb) {
      return {
        type: ob(bb),
        progressBar: kb(bb),
        timedClick: ww(bb),
        gravityBar: Mw(bb),
        precisionBar: ew(bb),
        rhythmClick: pw(bb)
      }
    }
    const gw = ["playerGone", "rateLimited"];

    function lw(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return gw[bb.index(2)]
      }(bb)
    }

    function Lw(bb) {
      return bb.float()
    }

    function Iw(bb) {
      return bb.TI(Lw)
    }

    function Ow(bb) {
      return 0 === bb.index(2) ? null : Iw(bb)
    }

    function Uw(bb) {
      return 0 === bb.index(2) ? null : nb(bb)
    }

    function tw(bb) {
      return bb.long()
    }

    function Cw(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return bb.TI(tw)
      }(bb)
    }

    function Ew(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          eM: bb.str(),
          LM: bb.long()
        }
      }(bb)
    }

    function Fw(bb) {
      const wb = bb.index(3);
      return 0 === wb ? null : 1 === wb ? bb.str() : fb(bb)
    }

    function Bw(bb) {
      return {
        VH: bb.str(),
        gH: bb.str(),
        lH: bb.str()
      }
    }

    function sw(bb) {
      return {
        rH: bb.str(),
        RH: Ab(bb),
        DH: Ab(bb),
        cH: ab(bb)
      }
    }

    function mw(bb) {
      return bb.TI(sw)
    }

    function hw(bb) {
      return {
        Le: bb.str(),
        x: bb.long(),
        y: bb.long(),
        z: bb.long()
      }
    }

    function zw(bb) {
      return bb.TI(hw)
    }

    function Xw(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          fe: bb.float(),
          Ae: bb.long(),
          Je: bb.long()
        }
      }(bb)
    }

    function xw(bb) {
      return {
        blockName: bb.str(),
        xe: bb.bool(),
        je: bb.bool(),
        Ke: bb.bool(),
        Re: bb.float(),
        De: bb.float(),
        ce: bb.long(),
        Ye: Xw(bb)
      }
    }

    function jw(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return bb.TI(xw)
      }(bb)
    }

    function Kw(bb) {
      return {
        he: bb.str(),
        ze: jw(bb)
      }
    }

    function rw(bb) {
      return {
        blockName: bb.str(),
        frequency: bb.float()
      }
    }

    function Rw(bb) {
      return bb.TI(rw)
    }

    function Dw(bb) {
      return {
        Qe: bb.str(),
        Ge: bb.str(),
        frequency: bb.float(),
        qe: Rw(bb)
      }
    }

    function Yw(bb) {
      return bb.TI(Dw)
    }

    function Zw(bb) {
      return {
        blockName: bb.str(),
        radius: bb.long(),
        de: bb.long(),
        te: bb.long(),
        Ce: bb.long(),
        Pe: bb.float()
      }
    }

    function fw(bb) {
      return bb.TI(Zw)
    }

    function Aw(bb) {
      return {
        te: bb.long(),
        Ce: bb.long(),
        Ee: bb.long(),
        Fe: bb.bool(),
        Be: Kw(bb),
        Se: Yw(bb),
        ie: fw(bb)
      }
    }

    function Ww(bb) {
      return bb.TI(Aw)
    }

    function Jw(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          name: bb.str(),
          Te: Ab(bb)
        }
      }(bb)
    }

    function Sw(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          terrain: Jw(bb),
          ke: fw(bb)
        }
      }(bb)
    }

    function Nw(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          layers: Ww(bb),
          ne: Sw(bb)
        }
      }(bb)
    }
  },
  42266: (bb, wb, Mb) => {
    Mb.d(wb, {
      A: () => xb,
      E: () => cb,
      H: () => hb,
      J: () => zb,
      K: () => Fb,
      L: () => rb,
      N: () => Zb,
      Q: () => Cb,
      U: () => Ab,
      X: () => sb,
      Z: () => Bb,
      bb: () => mb,
      c: () => Hb,
      db: () => Xb,
      f: () => fb,
      g: () => Yb,
      i: () => tb,
      l: () => Eb,
      o: () => Db,
      r: () => jb,
      u: () => Rb,
      x: () => Kb
    });
    var eb = Mb(3037);
    const Hb = {
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

    function pb(bb, wb) {
      return !ArrayBuffer.isView(bb) || bb instanceof DataView ? Array.isArray(bb) ? bb.map((bb => wb(bb))) : bb : Array.from(bb, (bb => wb(bb)))
    }

    function Vb(bb) {
      if ("string" !== typeof bb) return bb;
      for (let wb = 0; wb < bb.length; wb++) {
        const Mb = bb.charCodeAt(wb);
        if (Mb >= 55296 && Mb <= 57343) return lb.decode(gb.encode(bb))
      }
      return bb
    }
    const gb = new TextEncoder,
      lb = new TextDecoder;

    function Lb(bb) {
      return bb
    }
    let Ib;

    function Ob(bb) {
      return null === bb || "object" !== typeof bb ? bb : [Vb(bb.policy), Vb(bb.Ig)]
    }

    function Ub(bb) {
      return null === bb || "object" !== typeof bb ? bb : [pb(bb.aH, Lb), pb(bb.kg, Lb)]
    }

    function tb(bb) {
      return null === (wb = bb) || "object" !== typeof wb ? wb : [Vb(wb.tV), Vb(wb.CV)];
      var wb
    }

    function Cb(bb) {
      return null === (wb = bb) || "object" !== typeof wb ? wb : [wb.id, wb.eI];
      var wb
    }

    function Eb(bb) {
      return null === (wb = bb) || "object" !== typeof wb ? wb : [wb.DM, Vb(wb.cM), wb.YM, Vb(wb.AM), wb.NM, wb.vM, wb.LV, Vb(wb.IV), Vb(wb.OV)];
      var wb
    }

    function Fb(bb) {
      return null === (wb = bb) || "object" !== typeof wb ? wb : [pb(wb.lg, Lb), wb.Lg];
      var wb
    }

    function Bb(bb) {
      return null === (wb = bb) || "object" !== typeof wb ? wb : [pb(wb.OI, (bb => Vb(bb))), Vb(wb.UI), wb.tI];
      var wb
    }

    function sb(bb) {
      return null === (wb = bb) || "object" !== typeof wb ? wb : [pb(wb.Ml, Lb), Vb(wb.el), Vb(wb.Hl), wb.pl];
      var wb
    }

    function mb(bb) {
      return null === (wb = bb) || "object" !== typeof wb ? wb : [Vb(wb.gH), Vb(wb.lH)];
      var wb
    }

    function hb(bb) {
      return null === (wb = bb) || "object" !== typeof wb ? wb : [Vb(wb.Og)];
      var wb
    }

    function zb(bb) {
      return Vb(bb)
    }

    function Xb(bb) {
      return null === (wb = bb) || "object" !== typeof wb ? wb : [Vb(wb.RI), Vb(wb.DI), Vb(wb.policy), Vb(wb.Ig), pb(wb.cI, (bb => Vb(bb)))];
      var wb
    }

    function xb(bb) {
      return Ob(bb)
    }

    function jb(bb) {
      return Ob(bb)
    }

    function Kb(bb) {
      return null === (wb = bb) || "object" !== typeof wb ? wb : [Vb(wb.bI)];
      var wb
    }

    function rb(bb) {
      return bb
    }

    function Rb(bb) {
      return null === (wb = bb) || "object" !== typeof wb ? wb : [Vb(wb.LI), Vb(wb.II)];
      var wb
    }

    function Db(bb) {
      return Vb(bb)
    }

    function cb(bb) {
      return Ub(bb)
    }

    function Yb(bb) {
      return Ub(bb)
    }

    function Zb(bb) {
      return null === (wb = bb) || "object" !== typeof wb ? wb : [Vb(wb.dL)];
      var wb
    }

    function fb(bb) {
      return (Ib ??= (0, eb.g)().map((bb => bb.name)), Ib).map((wb => {
        return "string" === typeof(Mb = bb[wb]) ? Vb(Mb) : pb(Mb, Lb);
        var Mb
      }))
    }

    function Ab(bb) {
      return null === (wb = bb) || "object" !== typeof wb ? wb : [wb.mV, wb.hV, wb.zV];
      var wb
    }
  },
  5967: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb,
      g: () => pb
    });
    var eb = Mb(5914);
    const Hb = "Air",
      pb = Object.freeze(new eb.g(Hb, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  40602: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb,
      f: () => gb
    });
    var eb = Mb(382),
      Hb = Mb(5306);
    const pb = new Set(Hb.o),
      Vb = new Map;

    function gb(bb, wb) {
      let Mb = Vb.get(wb);
      void 0 === Mb && (Mb = new Map, Vb.set(wb, Mb));
      let Hb = Mb.get(bb);
      return void 0 === Hb && (Hb = `${bb}${(0,eb.E)(wb)}`, Mb.set(bb, Hb)), Hb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);