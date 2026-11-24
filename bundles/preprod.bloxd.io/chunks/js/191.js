export const id = 191;
export const ids = [191];
export const modules = {
  40818: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Lp,
      f: () => xp,
      i: () => Sp
    });
    var Op = cp(40824),
      op = cp(4903),
      Ip = cp(40831);

    function Sp(pp) {
      return pp.payloadKind === op.kc.Msgpack ? (0, Op.c)(pp.payload) : void 0
    }

    function xp(pp, ip) {
      if (ip.payloadKind === op.kc.Bytes || ip.payloadKind === op.kc.MsgpackBin) return (0, Ip.b)(pp, ip.payload)
    }

    function Lp(pp) {
      return null !== pp && "object" === typeof pp
    }
  },
  40837: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ap,
      d: () => Pp,
      e: () => Wp,
      h: () => Dp,
      i: () => wp
    });
    var Op = cp(4903),
      op = cp(40842);
    const Ip = new Map,
      Sp = new Set,
      xp = new Set;
    let Lp = 0,
      Yp = 0;

    function Dp(pp, ip) {
      let cp = Ip.get(pp);
      return cp || (cp = new Set, Ip.set(pp, cp)), cp.add(ip), () => {
        cp.delete(ip)
      }
    }

    function Ap() {
      return 0 !== Lp
    }

    function Pp(pp) {
      return Sp.add(pp), () => {
        Sp.delete(pp)
      }
    }

    function Wp(pp) {
      return xp.add(pp), () => {
        xp.delete(pp)
      }
    }
    const yp = "A raw message listener threw";

    function Up(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sp;
      for (const Op of ip) try {
        Op()
      } catch (cp) {
        pp ? (0, op.i)(cp, yp) : console.error(yp, cp)
      }
    }
    const wp = {
      fire: function(pp) {
        if ("connection" === pp.type) {
          const ip = pp.phase === Op.H.Activated && pp.conn !== Lp && pp.conn > Yp,
            cp = (pp.phase === Op.H.Left || pp.phase === Op.H.Closed) && pp.conn === Lp;
          return void(ip || cp ? (Lp = ip ? pp.conn : 0, Up(!0)) : pp.phase === Op.H.Resumed && 0 !== Lp && pp.conn > Yp && (Lp = pp.conn, Up(!0, xp)))
        }
        const ip = Ip.get(pp.VD);
        if (ip && pp.conn === Lp && 0 !== Lp)
          for (const Op of ip) try {
            Op(pp)
          } catch (cp) {
            (0, op.i)(cp, yp)
          }
      },
      close: function(pp) {
        Yp = Math.max(Yp, pp, Lp), 0 !== Lp && (Lp = 0, Up(!1))
      }
    }
  },
  40806: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Yp,
      h: () => Lp,
      k: () => xp
    });
    var Op = cp(1284),
      op = cp(40769);
    const Ip = new TextDecoder,
      Sp = new TextEncoder;

    function xp(pp, ip) {
      const cp = pp.queries.entityName(ip);
      if (cp === op.Dc) return;
      const Sp = pp.memoryData(pp.scratch(), 4 + cp, 4, "entity_name's answer");
      if (!Sp) return;
      const xp = Sp.getUint32(0, !0),
        Lp = Ip.decode(new Uint8Array(Sp.buffer, Sp.byteOffset + 4, cp));
      return (0, Op.d)(Lp, !1, xp === op.Hd ? null : xp)
    }

    function Lp(pp, ip, cp) {
      const Op = Sp.encode(cp);
      if (Op.length > op.qb) return !1;
      const Ip = pp.memoryView(Uint8Array, pp.scratch(), Op.length, "has_effect's name");
      return !!Ip && (Ip.set(Op), 1 === pp.queries.hasEffect(ip, Op.length))
    }

    function Yp(pp, ip, cp, Op) {
      const Sp = pp.queries.blockData(ip, cp, Op);
      if (Sp === op.Dc) return;
      const xp = pp.memoryView(Uint8Array, pp.scratch(), Sp, "block_data's answer");
      return xp ? JSON.parse(Ip.decode(xp)) : void 0
    }
  },
  40824: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op,
      f: () => Dp
    });
    const Op = new TextDecoder;

    function op(pp) {
      const ip = new Ip(pp),
        cp = ip.value();
      if (ip.at !== pp.length) throw new Error(`msgpack: ${pp.length-ip.at} bytes after the value`);
      return cp
    }
    class Ip {
      constructor(pp) {
        this.bytes = pp, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(pp.buffer, pp.byteOffset, pp.byteLength)
      }
      value() {
        const pp = this.u8();
        if (pp <= 127) return pp;
        if (pp >= 224) return pp - 256;
        if (pp >= 128 && pp <= 143) return this.map(15 & pp);
        if (pp >= 144 && pp <= 159) return this.array(15 & pp);
        if (pp >= 160 && pp <= 191) return this.str(31 & pp);
        switch (pp) {
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
            throw new Error(`msgpack: unknown byte 0x${pp.toString(16)} at ${this.at-1}`)
        }
      }
      take(pp) {
        const ip = this.at;
        if (ip + pp > this.bytes.length) throw new Error(`msgpack: ${pp} bytes past the end at ${ip}`);
        return this.at = ip + pp, ip
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
      int64(pp) {
        const ip = this.take(8);
        return pp ? this.view.getBigInt64(ip, !1) : this.view.getBigUint64(ip, !1)
      }
      str(pp) {
        const ip = this.take(pp),
          cp = this.bytes;
        if (pp < 16) {
          let op = "";
          for (let Ip = ip; Ip < ip + pp; Ip++) {
            const Sp = cp[Ip];
            if (Sp >= 128) return Op.decode(cp.subarray(ip, ip + pp));
            op += String.fromCharCode(Sp)
          }
          return op
        }
        return Op.decode(cp.subarray(ip, ip + pp))
      }
      bin(pp) {
        const ip = this.take(pp);
        return this.bytes.subarray(ip, ip + pp)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(pp) {
        this.enter();
        const ip = [];
        for (let cp = 0; cp < pp; cp++) ip.push(this.value());
        return this.depth--, ip
      }
      map(pp) {
        this.enter();
        const ip = {};
        for (let cp = 0; cp < pp; cp++) {
          const pp = this.value(),
            cp = this.value();
          ip["__proto__" === pp ? "__proto_" : String(pp)] = cp
        }
        return this.depth--, ip
      }
      ext(pp) {
        const ip = this.view.getInt8(this.take(1)),
          cp = this.take(pp);
        if (0 !== ip) {
          if (-1 === ip) {
            if (1 === pp) return new Date(NaN);
            if (4 === pp) return new Date(1e3 * this.view.getUint32(cp, !1));
            if (8 === pp) {
              const pp = this.view.getUint32(cp, !1),
                ip = pp >>> 2,
                Op = 4294967296 * (3 & pp) + this.view.getUint32(cp + 4, !1);
              return new Date(1e3 * Op + ip / 1e6)
            }
            if (12 === pp) {
              const pp = this.view.getUint32(cp, !1),
                ip = 4294967296 * this.view.getInt32(cp + 4, !1) + this.view.getUint32(cp + 8, !1);
              return new Date(1e3 * ip + pp / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${ip} of ${pp} bytes`)
        }
      }
    }
    const Sp = new TextEncoder,
      xp = -(2n ** 63n),
      Lp = 2n ** 63n - 1n,
      Yp = 2n ** 64n - 1n;

    function Dp(pp) {
      const ip = new Ap;
      return ip.value(pp, 0), ip.bytes()
    }
    class Ap {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(pp, ip) {
        if (ip > 512) throw new Error("msgpack: nested too deep");
        switch (typeof pp) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(pp ? 195 : 194);
          case "number":
            return void this.number(pp);
          case "bigint":
            return void this.bigint(pp);
          case "string":
            return void this.string(pp);
          case "object":
            if (null === pp) this.u8(192);
            else if (pp instanceof Uint8Array) this.head(pp.length, 196, -1, 197, 198), this.room(pp.length), this.buf.set(pp, this.at), this.at += pp.length;
            else if (Array.isArray(pp)) {
              this.head(pp.length, 220, 144, 220, 221);
              for (const cp of pp) this.value(cp, ip + 1)
            } else {
              var cp, Op;
              if (Object.getPrototypeOf(pp) !== Object.prototype && null !== Object.getPrototypeOf(pp)) throw new Error(`msgpack: can't encode a ${null!==(cp=null===(Op=pp.constructor)||void 0===Op?void 0:Op.name)&&void 0!==cp?cp:"object"}`);
              {
                const cp = Object.keys(pp);
                this.head(cp.length, 222, 128, 222, 223);
                for (const Op of cp) this.string(Op), this.value(pp[Op], ip + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof pp)
        }
      }
      number(pp) {
        Number.isInteger(pp) && pp >= -2147483648 && pp <= 4294967295 ? pp >= 0 ? pp < 128 ? this.u8(pp) : pp < 256 ? (this.u8(204), this.u8(pp)) : pp < 65536 ? (this.u8(205), this.u16(pp)) : (this.u8(206), this.u32(pp)) : pp >= -32 ? this.u8(pp + 256) : pp >= -128 ? (this.u8(208), this.u8(pp + 256)) : pp >= -32768 ? (this.u8(209), this.u16(pp + 65536)) : (this.u8(210), this.u32(pp >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, pp, !1), this.at += 8)
      }
      bigint(pp) {
        const ip = pp >= xp && pp <= Lp;
        if (!ip && (pp < 0n || pp > Yp)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(ip ? 211 : 207), this.room(8), ip ? this.view.setBigInt64(this.at, pp, !1) : this.view.setBigUint64(this.at, pp, !1), this.at += 8
      }
      string(pp) {
        const ip = Sp.encode(pp);
        this.head(ip.length, 217, 160, 218, 219), this.room(ip.length), this.buf.set(ip, this.at), this.at += ip.length
      }
      head(pp, ip, cp, Op, op) {
        cp >= 0 && pp < (160 === cp ? 32 : 16) ? this.u8(cp | pp) : ip !== Op && pp < 256 ? (this.u8(ip), this.u8(pp)) : pp < 65536 ? (this.u8(Op), this.u16(pp)) : (this.u8(op), this.u32(pp))
      }
      room(pp) {
        if (this.at + pp <= this.buf.length) return;
        let ip = 2 * this.buf.length;
        for (; ip < this.at + pp;) ip *= 2;
        const cp = new Uint8Array(ip);
        cp.set(this.buf.subarray(0, this.at)), this.buf = cp, this.view = new DataView(cp.buffer)
      }
      u8(pp) {
        this.room(1), this.buf[this.at++] = pp
      }
      u16(pp) {
        this.room(2), this.view.setUint16(this.at, pp, !1), this.at += 2
      }
      u32(pp) {
        this.room(4), this.view.setUint32(this.at, pp, !1), this.at += 4
      }
    }
  },
  40831: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp
    });
    var Op = cp(40813);
    const op = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class Ip {
      constructor(pp) {
        this.buf = pp, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let pp = this.u8(),
          ip = 127 & pp,
          cp = 128;
        for (; 128 & pp;) {
          if (cp > 2 ** 63) throw new RangeError("avro: varint too long");
          pp = this.u8(), ip += (127 & pp) * cp, cp *= 128
        }
        return ip % 2 === 1 ? -(ip + 1) / 2 : ip / 2
      }
      float() {
        const pp = this.take(4);
        return this.floats().getFloat32(pp, !0)
      }
      double() {
        const pp = this.take(8);
        return this.floats().getFloat64(pp, !0)
      }
      str() {
        const pp = this.size(),
          ip = this.take(pp),
          cp = ip + pp;
        if (pp <= 32) {
          let pp = "";
          for (let Op = ip; Op < cp; Op++) {
            const Ip = this.buf[Op];
            if (Ip >= 128) return op.decode(this.buf.subarray(ip, cp));
            pp += String.fromCharCode(Ip)
          }
          return pp
        }
        return op.decode(this.buf.subarray(ip, cp))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(pp) {
        const ip = this.take(pp);
        return this.buf.slice(ip, ip + pp)
      }
      index(pp) {
        const ip = this.long();
        if (!(ip >= 0 && ip < pp)) throw new RangeError(`avro: index ${ip} of ${pp}`);
        return ip
      }
      qy(pp) {
        const ip = [];
        for (let cp = this.long(); 0 !== cp; cp = this.long()) {
          cp = this.block(cp);
          for (let Op = 0; Op < cp; Op++) ip.push(pp(this))
        }
        return ip
      }
      map(pp) {
        const ip = {};
        for (let cp = this.long(); 0 !== cp; cp = this.long()) {
          cp = this.block(cp);
          for (let Op = 0; Op < cp; Op++) {
            ip[this.str()] = pp(this)
          }
        }
        return ip
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(pp) {
        let ip = pp;
        if (ip < 0 && (ip = -ip, this.long()), ip > this.buf.length - this.at) throw new RangeError(`avro: block of ${ip} items in ${this.buf.length-this.at} bytes`);
        return ip
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const pp = this.long();
        if (pp < 0) throw new RangeError(`avro: length ${pp}`);
        return pp
      }
      u8() {
        const pp = this.buf[this.at];
        if (void 0 === pp) throw new RangeError("avro: truncated");
        return this.at++, pp
      }
      take(pp) {
        const ip = this.at;
        if (pp > this.buf.length - ip) throw new RangeError("avro: truncated");
        return this.at = ip + pp, ip
      }
    }

    function Sp(pp, ip) {
      const cp = new Ip(ip),
        op = (0, Op.lb)(pp, cp);
      return cp.end(), op
    }
  },
  40813: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => Pp,
      E: () => Yp,
      F: () => Sp,
      G: () => Mp,
      H: () => op,
      J: () => xp,
      K: () => Wp,
      O: () => Rp,
      P: () => mp,
      Q: () => jp,
      S: () => Dp,
      V: () => Ap,
      X: () => qp,
      _: () => yp,
      cb: () => Hp,
      d: () => ep,
      fb: () => Up,
      h: () => wp,
      jb: () => Lp,
      l: () => vp,
      lb: () => Cp,
      n: () => tp,
      p: () => kp,
      t: () => Op,
      v: () => Ip,
      w: () => dp
    });
    const Op = 2,
      op = 12,
      Ip = 27,
      Sp = 40,
      xp = 52,
      Lp = 59,
      Yp = 63,
      Dp = 83,
      Ap = 84,
      Pp = 89,
      Wp = 91,
      yp = 93,
      Up = 94,
      wp = 95,
      vp = 97,
      tp = 101,
      Hp = 102,
      dp = 73,
      ep = 16,
      jp = 86,
      kp = 60,
      mp = 17,
      Rp = 56,
      qp = 100,
      Mp = 81;

    function Cp(pp, ip) {
      switch (pp) {
        case Op:
          return function(pp) {
            return {
              pS: zp(pp),
              iS: pp.float(),
              cS: pp.long()
            }
          }(ip);
        case op:
          return function(pp) {
            return {
              xI: Jp(pp),
              LI: Jp(pp)
            }
          }(ip);
        case Ip:
          return function(pp) {
            return {
              Yp: pp.bool(),
              Dp: Jp(pp)
            }
          }(ip);
        case Sp:
          return ip.str();
        case xp:
          return function(pp) {
            return {
              id: pp.long(),
              sp: Li(pp)
            }
          }(ip);
        case Lp:
          return function(pp) {
            return {
              vS: Jp(pp),
              tS: Di(pp)
            }
          }(ip);
        case Yp:
          return ip.str();
        case Dp:
        case Ap:
          return ip.long();
        case Pp:
          return function(pp) {
            return {
              cI: pp.long(),
              OI: pp.bool(),
              oI: pp.float()
            }
          }(ip);
        case Wp:
          return ip.long();
        case yp:
          return function(pp) {
            return {
              cc: pp.bool(),
              Ep: Wi(pp)
            }
          }(ip);
        case Up:
          return function(pp) {
            return {
              id: pp.str(),
              position: Pi(pp),
              gi: yi(pp),
              style: hp(pp),
              ri: pp.bool()
            }
          }(ip);
        case wp:
          return function(pp) {
            return {
              id: Jp(pp)
            }
          }(ip);
        case vp:
          return function(pp) {
            return {
              eI: pp.long(),
              uI: pp.str(),
              jI: Si(pp),
              kI: Si(pp),
              mI: Jp(pp),
              RI: Jp(pp),
              qI: Jp(pp),
              MI: Jp(pp),
              CI: Jp(pp),
              EI: Si(pp),
              XI: Si(pp),
              lI: Jp(pp),
              QI: Jp(pp),
              JI: Jp(pp)
            }
          }(ip);
        case tp:
          return ip.str();
        case Hp:
          return ip.long();
        case dp:
          return function(pp) {
            return {
              Cc: pp.long(),
              Ec: pp.str(),
              Xc: pp.float()
            }
          }(ip);
        case ep:
          return function(pp) {
            return {
              YI: pp.bool(),
              DI: Jp(pp),
              AI: pp.str(),
              WI: wi(pp),
              yI: wi(pp),
              UI: pp.bool(),
              wI: pp.long(),
              vI: vi(pp)
            }
          }(ip);
        case jp:
          return function(pp) {
            return {
              iI: Jp(pp)
            }
          }(ip);
        case kp:
          return function(pp) {
            return {
              Np: pp.str(),
              Tp: pp.str(),
              bp: ti(pp),
              Oc: pp.str(),
              oc: Vp(pp),
              Ic: pp.float()
            }
          }(ip);
        case mp:
          return function(pp) {
            return {
              Np: pp.str(),
              Tp: pp.str(),
              bp: ti(pp)
            }
          }(ip);
        case Rp:
          return function(pp) {
            return pp.qy(Hi)
          }(ip);
        case qp:
          return function(pp) {
            return {
              hp: ei(pp),
              rp: Fp(pp)
            }
          }(ip);
        case Mp:
          return function(pp) {
            return {
              xO: pp.bool(),
              LO: Jp(pp),
              YO: ji(pp),
              PO: fi(pp)
            }
          }(ip);
        default:
          throw new Error(`no reader for to-client message ${pp}`)
      }
    }

    function Ep(pp) {
      return {
        entityName: pp.str()
      }
    }

    function Xp(pp) {
      const ip = pp.index(4);
      return 0 === ip ? pp.str() : 1 === ip ? pp.long() : 2 === ip ? pp.bool() : Ep(pp)
    }

    function lp(pp) {
      return 0 === pp.index(2) ? null : function(pp) {
        return pp.map(Xp)
      }(pp)
    }

    function Qp(pp) {
      return {
        translationKey: pp.str(),
        params: lp(pp)
      }
    }

    function Jp(pp) {
      return 0 === pp.index(2) ? null : pp.str()
    }

    function Bp(pp) {
      return 0 === pp.index(2) ? null : function(pp) {
        return {
          color: Jp(pp),
          colour: Jp(pp),
          fontSize: Jp(pp)
        }
      }(pp)
    }

    function Np(pp) {
      return {
        icon: pp.str(),
        style: Bp(pp)
      }
    }

    function Tp(pp) {
      const ip = pp.index(3);
      return 0 === ip ? {
        string: pp.str()
      } : 1 === ip ? {
        styledEntityName: Ep(pp)
      } : {
        styledTranslatedText: Qp(pp)
      }
    }

    function fp(pp) {
      const ip = pp.index(3);
      return 0 === ip ? null : 1 === ip ? pp.str() : pp.long()
    }

    function bp(pp) {
      return 0 === pp.index(2) ? null : pp.float()
    }

    function hp(pp) {
      return 0 === pp.index(2) ? null : function(pp) {
        return {
          color: Jp(pp),
          colour: Jp(pp),
          fontWeight: fp(pp),
          fontStyle: Jp(pp),
          fontSize: Jp(pp),
          opacity: bp(pp)
        }
      }(pp)
    }

    function ap(pp) {
      return {
        str: Tp(pp),
        style: hp(pp),
        clickableUrl: Jp(pp)
      }
    }

    function np(pp) {
      return pp.str()
    }

    function Fp(pp) {
      return pp.qy(np)
    }

    function gp(pp) {
      return 0 === pp.index(2) ? null : Fp(pp)
    }

    function Gp(pp) {
      return {
        type: pp.str(),
        progress: pp.float(),
        width: Jp(pp),
        height: Jp(pp),
        colours: gp(pp),
        backgroundColour: Jp(pp)
      }
    }

    function rp(pp) {
      return {
        type: pp.str(),
        action: pp.str(),
        style: hp(pp)
      }
    }

    function Zp(pp) {
      const ip = pp.index(7);
      return 0 === ip ? {
        string: pp.str()
      } : 1 === ip ? {
        entityName: Ep(pp)
      } : 2 === ip ? {
        translatedText: Qp(pp)
      } : 3 === ip ? {
        styledIcon: Np(pp)
      } : 4 === ip ? {
        xi: ap(pp)
      } : 5 === ip ? {
        styledProgressBar: Gp(pp)
      } : {
        styledKeyBinding: rp(pp)
      }
    }

    function zp(pp) {
      return pp.qy(Zp)
    }
    const sp = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function Kp(pp) {
      return sp[pp.index(5)]
    }

    function Vp(pp) {
      return 0 === pp.index(2) ? null : pp.double()
    }

    function ii(pp) {
      return 0 === pp.index(2) ? null : function(pp) {
        return {
          Oi: Vp(pp),
          oi: pp.double(),
          Ii: pp.double(),
          Si: pp.bool(),
          description: zp(pp),
          Yi: pp.str(),
          scale: Vp(pp),
          rotation: Vp(pp)
        }
      }(pp)
    }

    function ci(pp) {
      return 0 === pp.index(2) ? null : pp.bool()
    }

    function Oi(pp) {
      return 0 === pp.index(2) ? null : function(pp) {
        return {
          Ai: pp.double(),
          icon: pp.str(),
          label: zp(pp),
          Pi: pp.bool(),
          scale: Vp(pp),
          rotation: Vp(pp),
          Wi: ci(pp)
        }
      }(pp)
    }

    function oi(pp) {
      return 0 === pp.index(2) ? null : function(pp) {
        return {
          Oi: Vp(pp),
          Ui: pp.double(),
          Hi: pp.double(),
          ui: pp.double(),
          gravity: pp.double(),
          ji: pp.double(),
          ki: pp.double(),
          mi: pp.double(),
          Si: pp.bool(),
          description: zp(pp),
          icon: Jp(pp)
        }
      }(pp)
    }

    function Ii(pp) {
      return 0 === pp.index(2) ? null : function(pp) {
        return {
          speed: pp.double(),
          qi: pp.double(),
          label: zp(pp),
          icon: Jp(pp),
          scale: Vp(pp),
          rotation: Vp(pp)
        }
      }(pp)
    }

    function Si(pp) {
      return 0 === pp.index(2) ? null : pp.long()
    }

    function xi(pp) {
      return 0 === pp.index(2) ? null : function(pp) {
        return {
          Ci: pp.long(),
          Ei: pp.double(),
          Xi: pp.double(),
          li: Si(pp),
          label: zp(pp),
          icon: Jp(pp)
        }
      }(pp)
    }

    function Li(pp) {
      return {
        type: Kp(pp),
        progressBar: ii(pp),
        timedClick: Oi(pp),
        gravityBar: oi(pp),
        precisionBar: Ii(pp),
        rhythmClick: xi(pp)
      }
    }
    const Yi = ["playerGone", "rateLimited"];

    function Di(pp) {
      return 0 === pp.index(2) ? null : function(pp) {
        return Yi[pp.index(2)]
      }(pp)
    }

    function Ai(pp) {
      return pp.float()
    }

    function Pi(pp) {
      return pp.qy(Ai)
    }

    function Wi(pp) {
      return 0 === pp.index(2) ? null : Pi(pp)
    }

    function yi(pp) {
      return 0 === pp.index(2) ? null : zp(pp)
    }

    function Ui(pp) {
      return pp.long()
    }

    function wi(pp) {
      return 0 === pp.index(2) ? null : function(pp) {
        return pp.qy(Ui)
      }(pp)
    }

    function vi(pp) {
      return 0 === pp.index(2) ? null : function(pp) {
        return {
          HI: pp.str(),
          dI: pp.long()
        }
      }(pp)
    }

    function ti(pp) {
      const ip = pp.index(3);
      return 0 === ip ? null : 1 === ip ? pp.str() : Qp(pp)
    }

    function Hi(pp) {
      return {
        sI: pp.str(),
        KI: pp.str(),
        VI: pp.str()
      }
    }

    function di(pp) {
      return {
        ap: pp.str(),
        np: Jp(pp),
        Fp: Jp(pp),
        Gp: Fp(pp)
      }
    }

    function ei(pp) {
      return pp.qy(di)
    }

    function ui(pp) {
      return {
        DO: pp.str(),
        x: pp.long(),
        y: pp.long(),
        z: pp.long()
      }
    }

    function ji(pp) {
      return pp.qy(ui)
    }

    function ki(pp) {
      return 0 === pp.index(2) ? null : function(pp) {
        return {
          lO: pp.float(),
          QO: pp.long(),
          JO: pp.long()
        }
      }(pp)
    }

    function mi(pp) {
      return {
        blockName: pp.str(),
        kO: pp.bool(),
        mO: pp.bool(),
        RO: pp.bool(),
        qO: pp.float(),
        MO: pp.float(),
        CO: pp.long(),
        EO: ki(pp)
      }
    }

    function Ri(pp) {
      return 0 === pp.index(2) ? null : function(pp) {
        return pp.qy(mi)
      }(pp)
    }

    function qi(pp) {
      return {
        eO: pp.str(),
        uO: Ri(pp)
      }
    }

    function Mi(pp) {
      return {
        blockName: pp.str(),
        frequency: pp.float()
      }
    }

    function Ci(pp) {
      return pp.qy(Mi)
    }

    function Ei(pp) {
      return {
        TO: pp.str(),
        fO: pp.str(),
        frequency: pp.float(),
        bO: Ci(pp)
      }
    }

    function Xi(pp) {
      return pp.qy(Ei)
    }

    function li(pp) {
      return {
        blockName: pp.str(),
        radius: pp.long(),
        FO: pp.long(),
        UO: pp.long(),
        wO: pp.long(),
        gO: pp.float()
      }
    }

    function Qi(pp) {
      return pp.qy(li)
    }

    function Ji(pp) {
      return {
        UO: pp.long(),
        wO: pp.long(),
        vO: pp.long(),
        tO: pp.bool(),
        HO: qi(pp),
        BO: Xi(pp),
        aO: Qi(pp)
      }
    }

    function Bi(pp) {
      return pp.qy(Ji)
    }

    function Ni(pp) {
      return 0 === pp.index(2) ? null : function(pp) {
        return {
          name: pp.str(),
          zO: Jp(pp)
        }
      }(pp)
    }

    function Ti(pp) {
      return 0 === pp.index(2) ? null : function(pp) {
        return {
          terrain: Ni(pp),
          sO: Qi(pp)
        }
      }(pp)
    }

    function fi(pp) {
      return 0 === pp.index(2) ? null : function(pp) {
        return {
          layers: Bi(pp),
          GO: Ti(pp)
        }
      }(pp)
    }
  },
  40792: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => Ep,
      B: () => dp,
      E: () => ep,
      H: () => wp,
      K: () => qp,
      N: () => lp,
      P: () => yp,
      Q: () => Jp,
      S: () => tp,
      W: () => vp,
      _: () => Hp,
      c: () => op,
      cb: () => jp,
      d: () => Qp,
      h: () => Xp,
      k: () => Wp,
      n: () => Up,
      o: () => Cp,
      q: () => mp,
      r: () => Mp,
      u: () => Rp,
      w: () => kp
    });
    var Op = cp(3085);
    const op = {
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

    function Ip(pp, ip) {
      return !ArrayBuffer.isView(pp) || pp instanceof DataView ? Array.isArray(pp) ? pp.map((pp => ip(pp))) : pp : Array.from(pp, (pp => ip(pp)))
    }

    function Sp(pp) {
      if ("string" !== typeof pp) return pp;
      for (let ip = 0; ip < pp.length; ip++) {
        const cp = pp.charCodeAt(ip);
        if (cp >= 55296 && cp <= 57343) return Lp.decode(xp.encode(pp))
      }
      return pp
    }
    const xp = new TextEncoder,
      Lp = new TextDecoder;

    function Yp(pp) {
      return pp
    }
    let Dp;

    function Ap(pp) {
      return null === pp || "object" !== typeof pp ? pp : [Sp(pp.Cx), Sp(pp.Ex)]
    }

    function Pp(pp) {
      return null === pp || "object" !== typeof pp ? pp : [Ip(pp.WI, Yp), Ip(pp.Zx, Yp)]
    }

    function Wp(pp) {
      return null === (ip = pp) || "object" !== typeof ip ? ip : [Sp(ip.VD), Sp(ip.pA)];
      var ip
    }

    function yp(pp) {
      return null === (ip = pp) || "object" !== typeof ip ? ip : [ip.id, ip.bD];
      var ip
    }

    function Up(pp) {
      return null === (ip = pp) || "object" !== typeof ip ? ip : [ip.eI, Sp(ip.uI), ip.jI, Sp(ip.RI), ip.EI, ip.XI, ip.zD, Sp(ip.sD), Sp(ip.KD)];
      var ip
    }

    function wp(pp) {
      return null === (ip = pp) || "object" !== typeof ip ? ip : [Ip(ip.vx, Yp), ip.tx];
      var ip
    }

    function vp(pp) {
      return null === (ip = pp) || "object" !== typeof ip ? ip : [Ip(ip.yx, (pp => Sp(pp))), Sp(ip.Ux), ip.wx];
      var ip
    }

    function tp(pp) {
      return null === (ip = pp) || "object" !== typeof ip ? ip : [Ip(ip.nL, Yp), Sp(ip.FL), ip.gL];
      var ip
    }

    function Hp(pp) {
      return null === (ip = pp) || "object" !== typeof ip ? ip : [Sp(ip.KI), Sp(ip.VI)];
      var ip
    }

    function dp(pp) {
      return null === (ip = pp) || "object" !== typeof ip ? ip : [Sp(ip.IL)];
      var ip
    }

    function ep(pp) {
      return Sp(pp)
    }

    function jp(pp) {
      return null === (ip = pp) || "object" !== typeof ip ? ip : [Sp(ip.ND), Sp(ip.TD), Sp(ip.Cx), Sp(ip.Ex)];
      var ip
    }

    function kp(pp) {
      return Ap(pp)
    }

    function mp(pp) {
      return Ap(pp)
    }

    function Rp(pp) {
      return null === (ip = pp) || "object" !== typeof ip ? ip : [Sp(ip.JL)];
      var ip
    }

    function qp(pp) {
      return pp
    }

    function Mp(pp) {
      return null === (ip = pp) || "object" !== typeof ip ? ip : [Sp(ip.qx), Sp(ip.Mx)];
      var ip
    }

    function Cp(pp) {
      return Sp(pp)
    }

    function Ep(pp) {
      return Pp(pp)
    }

    function Xp(pp) {
      return Pp(pp)
    }

    function lp(pp) {
      return null === (ip = pp) || "object" !== typeof ip ? ip : [Sp(ip.rL)];
      var ip
    }

    function Qp(pp) {
      return (Dp ??= (0, Op.c)().map((pp => pp.name)), Dp).map((ip => {
        return "string" === typeof(cp = pp[ip]) ? Sp(cp) : Ip(cp, Yp);
        var cp
      }))
    }

    function Jp(pp) {
      return null === (ip = pp) || "object" !== typeof ip ? ip : [ip.XL, ip.lL, ip.QL];
      var ip
    }
  },
  9436: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => op,
      h: () => Ip
    });
    var Op = cp(9385);
    const op = "Air",
      Ip = Object.freeze(new Op.e(op, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39425: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip,
      d: () => xp
    });
    var Op = cp(337),
      op = cp(4543);
    const Ip = new Set(op.s),
      Sp = new Map;

    function xp(pp, ip) {
      let cp = Sp.get(ip);
      void 0 === cp && (cp = new Map, Sp.set(ip, cp));
      let op = cp.get(pp);
      return void 0 === op && (op = `${pp}${(0,Op.C)(ip)}`, cp.set(pp, op)), op
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);