export const id = 191;
export const ids = [191];
export const modules = {
  40196: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Pk,
      i: () => rk,
      k: () => bk
    });
    var Dk = ik(40201),
      fk = ik(4735),
      Sk = ik(40210);

    function bk(kk) {
      return kk.payloadKind === fk.zc.Msgpack ? (0, Dk.b)(kk.payload) : void 0
    }

    function rk(kk, ek) {
      if (ek.payloadKind === fk.zc.Bytes || ek.payloadKind === fk.zc.MsgpackBin) return (0, Sk.d)(kk, ek.payload)
    }

    function Pk(kk) {
      return null !== kk && "object" === typeof kk
    }
  },
  40218: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Kk,
      g: () => xk,
      k: () => nk,
      m: () => Mk,
      n: () => wk
    });
    var Dk = ik(4735),
      fk = ik(40221);
    const Sk = new Map,
      bk = new Set,
      rk = new Set;
    let Pk = 0,
      mk = 0;

    function Mk(kk, ek) {
      let ik = Sk.get(kk);
      return ik || (ik = new Set, Sk.set(kk, ik)), ik.add(ek), () => {
        ik.delete(ek)
      }
    }

    function Kk() {
      return 0 !== Pk
    }

    function xk(kk) {
      return bk.add(kk), () => {
        bk.delete(kk)
      }
    }

    function nk(kk) {
      return rk.add(kk), () => {
        rk.delete(kk)
      }
    }
    const Uk = "A raw message listener threw";

    function Hk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bk;
      for (const Dk of ek) try {
        Dk()
      } catch (ik) {
        kk ? (0, fk.m)(ik, Uk) : console.error(Uk, ik)
      }
    }
    const wk = {
      fire: function(kk) {
        if ("connection" === kk.type) {
          const ek = kk.phase === Dk.K.Activated && kk.conn !== Pk && kk.conn > mk,
            ik = (kk.phase === Dk.K.Left || kk.phase === Dk.K.Closed) && kk.conn === Pk;
          return void(ek || ik ? (Pk = ek ? kk.conn : 0, Hk(!0)) : kk.phase === Dk.K.Resumed && 0 !== Pk && kk.conn > mk && (Pk = kk.conn, Hk(!0, rk)))
        }
        const ek = Sk.get(kk.hM);
        if (ek && kk.conn === Pk && 0 !== Pk)
          for (const Dk of ek) try {
            Dk(kk)
          } catch (ik) {
            (0, fk.m)(ik, Uk)
          }
      },
      close: function(kk) {
        mk = Math.max(mk, kk, Pk), 0 !== Pk && (Pk = 0, Hk(!1))
      }
    }
  },
  40186: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => mk,
      d: () => Pk,
      e: () => rk
    });
    var Dk = ik(1248),
      fk = ik(40157);
    const Sk = new TextDecoder,
      bk = new TextEncoder;

    function rk(kk, ek) {
      const ik = kk.queries.entityName(ek);
      if (ik === fk.xc) return;
      const bk = kk.memoryData(kk.scratch(), 4 + ik, 4, "entity_name's answer");
      if (!bk) return;
      const rk = bk.getUint32(0, !0),
        Pk = Sk.decode(new Uint8Array(bk.buffer, bk.byteOffset + 4, ik));
      return (0, Dk.d)(Pk, !1, rk === fk.Gd ? null : rk)
    }

    function Pk(kk, ek, ik) {
      const Dk = bk.encode(ik);
      if (Dk.length > fk.rb) return !1;
      const Sk = kk.memoryView(Uint8Array, kk.scratch(), Dk.length, "has_effect's name");
      return !!Sk && (Sk.set(Dk), 1 === kk.queries.hasEffect(ek, Dk.length))
    }

    function mk(kk, ek, ik, Dk) {
      const bk = kk.queries.blockData(ek, ik, Dk);
      if (bk === fk.xc) return;
      const rk = kk.memoryView(Uint8Array, kk.scratch(), bk, "block_data's answer");
      return rk ? JSON.parse(Sk.decode(rk)) : void 0
    }
  },
  40201: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => fk,
      c: () => Mk
    });
    const Dk = new TextDecoder;

    function fk(kk) {
      const ek = new Sk(kk),
        ik = ek.value();
      if (ek.at !== kk.length) throw new Error(`msgpack: ${kk.length-ek.at} bytes after the value`);
      return ik
    }
    class Sk {
      constructor(kk) {
        this.bytes = kk, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(kk.buffer, kk.byteOffset, kk.byteLength)
      }
      value() {
        const kk = this.u8();
        if (kk <= 127) return kk;
        if (kk >= 224) return kk - 256;
        if (kk >= 128 && kk <= 143) return this.map(15 & kk);
        if (kk >= 144 && kk <= 159) return this.array(15 & kk);
        if (kk >= 160 && kk <= 191) return this.str(31 & kk);
        switch (kk) {
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
            throw new Error(`msgpack: unknown byte 0x${kk.toString(16)} at ${this.at-1}`)
        }
      }
      take(kk) {
        const ek = this.at;
        if (ek + kk > this.bytes.length) throw new Error(`msgpack: ${kk} bytes past the end at ${ek}`);
        return this.at = ek + kk, ek
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
      int64(kk) {
        const ek = this.take(8);
        return kk ? this.view.getBigInt64(ek, !1) : this.view.getBigUint64(ek, !1)
      }
      str(kk) {
        const ek = this.take(kk),
          ik = this.bytes;
        if (kk < 16) {
          let fk = "";
          for (let Sk = ek; Sk < ek + kk; Sk++) {
            const bk = ik[Sk];
            if (bk >= 128) return Dk.decode(ik.subarray(ek, ek + kk));
            fk += String.fromCharCode(bk)
          }
          return fk
        }
        return Dk.decode(ik.subarray(ek, ek + kk))
      }
      bin(kk) {
        const ek = this.take(kk);
        return this.bytes.subarray(ek, ek + kk)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(kk) {
        this.enter();
        const ek = [];
        for (let ik = 0; ik < kk; ik++) ek.push(this.value());
        return this.depth--, ek
      }
      map(kk) {
        this.enter();
        const ek = {};
        for (let ik = 0; ik < kk; ik++) {
          const kk = this.value(),
            ik = this.value();
          ek["__proto__" === kk ? "__proto_" : String(kk)] = ik
        }
        return this.depth--, ek
      }
      ext(kk) {
        const ek = this.view.getInt8(this.take(1)),
          ik = this.take(kk);
        if (0 !== ek) {
          if (-1 === ek) {
            if (1 === kk) return new Date(NaN);
            if (4 === kk) return new Date(1e3 * this.view.getUint32(ik, !1));
            if (8 === kk) {
              const kk = this.view.getUint32(ik, !1),
                ek = kk >>> 2,
                Dk = 4294967296 * (3 & kk) + this.view.getUint32(ik + 4, !1);
              return new Date(1e3 * Dk + ek / 1e6)
            }
            if (12 === kk) {
              const kk = this.view.getUint32(ik, !1),
                ek = 4294967296 * this.view.getInt32(ik + 4, !1) + this.view.getUint32(ik + 8, !1);
              return new Date(1e3 * ek + kk / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${ek} of ${kk} bytes`)
        }
      }
    }
    const bk = new TextEncoder,
      rk = -(2n ** 63n),
      Pk = 2n ** 63n - 1n,
      mk = 2n ** 64n - 1n;

    function Mk(kk) {
      const ek = new Kk;
      return ek.value(kk, 0), ek.bytes()
    }
    class Kk {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(kk, ek) {
        if (ek > 512) throw new Error("msgpack: nested too deep");
        switch (typeof kk) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(kk ? 195 : 194);
          case "number":
            return void this.number(kk);
          case "bigint":
            return void this.bigint(kk);
          case "string":
            return void this.string(kk);
          case "object":
            if (null === kk) this.u8(192);
            else if (kk instanceof Uint8Array) this.head(kk.length, 196, -1, 197, 198), this.room(kk.length), this.buf.set(kk, this.at), this.at += kk.length;
            else if (Array.isArray(kk)) {
              this.head(kk.length, 220, 144, 220, 221);
              for (const ik of kk) this.value(ik, ek + 1)
            } else {
              var ik, Dk;
              if (Object.getPrototypeOf(kk) !== Object.prototype && null !== Object.getPrototypeOf(kk)) throw new Error(`msgpack: can't encode a ${null!==(ik=null===(Dk=kk.constructor)||void 0===Dk?void 0:Dk.name)&&void 0!==ik?ik:"object"}`);
              {
                const ik = Object.keys(kk);
                this.head(ik.length, 222, 128, 222, 223);
                for (const Dk of ik) this.string(Dk), this.value(kk[Dk], ek + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof kk)
        }
      }
      number(kk) {
        Number.isInteger(kk) && kk >= -2147483648 && kk <= 4294967295 ? kk >= 0 ? kk < 128 ? this.u8(kk) : kk < 256 ? (this.u8(204), this.u8(kk)) : kk < 65536 ? (this.u8(205), this.u16(kk)) : (this.u8(206), this.u32(kk)) : kk >= -32 ? this.u8(kk + 256) : kk >= -128 ? (this.u8(208), this.u8(kk + 256)) : kk >= -32768 ? (this.u8(209), this.u16(kk + 65536)) : (this.u8(210), this.u32(kk >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, kk, !1), this.at += 8)
      }
      bigint(kk) {
        const ek = kk >= rk && kk <= Pk;
        if (!ek && (kk < 0n || kk > mk)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(ek ? 211 : 207), this.room(8), ek ? this.view.setBigInt64(this.at, kk, !1) : this.view.setBigUint64(this.at, kk, !1), this.at += 8
      }
      string(kk) {
        const ek = bk.encode(kk);
        this.head(ek.length, 217, 160, 218, 219), this.room(ek.length), this.buf.set(ek, this.at), this.at += ek.length
      }
      head(kk, ek, ik, Dk, fk) {
        ik >= 0 && kk < (160 === ik ? 32 : 16) ? this.u8(ik | kk) : ek !== Dk && kk < 256 ? (this.u8(ek), this.u8(kk)) : kk < 65536 ? (this.u8(Dk), this.u16(kk)) : (this.u8(fk), this.u32(kk))
      }
      room(kk) {
        if (this.at + kk <= this.buf.length) return;
        let ek = 2 * this.buf.length;
        for (; ek < this.at + kk;) ek *= 2;
        const ik = new Uint8Array(ek);
        ik.set(this.buf.subarray(0, this.at)), this.buf = ik, this.view = new DataView(ik.buffer)
      }
      u8(kk) {
        this.room(1), this.buf[this.at++] = kk
      }
      u16(kk) {
        this.room(2), this.view.setUint16(this.at, kk, !1), this.at += 2
      }
      u32(kk) {
        this.room(4), this.view.setUint32(this.at, kk, !1), this.at += 4
      }
    }
  },
  40210: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk
    });
    var Dk = ik(40191);
    const fk = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class Sk {
      constructor(kk) {
        this.buf = kk, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let kk = this.u8(),
          ek = 127 & kk,
          ik = 128;
        for (; 128 & kk;) {
          if (ik > 2 ** 63) throw new RangeError("avro: varint too long");
          kk = this.u8(), ek += (127 & kk) * ik, ik *= 128
        }
        return ek % 2 === 1 ? -(ek + 1) / 2 : ek / 2
      }
      float() {
        const kk = this.take(4);
        return this.floats().getFloat32(kk, !0)
      }
      double() {
        const kk = this.take(8);
        return this.floats().getFloat64(kk, !0)
      }
      str() {
        const kk = this.size(),
          ek = this.take(kk),
          ik = ek + kk;
        if (kk <= 32) {
          let kk = "";
          for (let Dk = ek; Dk < ik; Dk++) {
            const Sk = this.buf[Dk];
            if (Sk >= 128) return fk.decode(this.buf.subarray(ek, ik));
            kk += String.fromCharCode(Sk)
          }
          return kk
        }
        return fk.decode(this.buf.subarray(ek, ik))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(kk) {
        const ek = this.take(kk);
        return this.buf.slice(ek, ek + kk)
      }
      index(kk) {
        const ek = this.long();
        if (!(ek >= 0 && ek < kk)) throw new RangeError(`avro: index ${ek} of ${kk}`);
        return ek
      }
      WU(kk) {
        const ek = [];
        for (let ik = this.long(); 0 !== ik; ik = this.long()) {
          ik = this.block(ik);
          for (let Dk = 0; Dk < ik; Dk++) ek.push(kk(this))
        }
        return ek
      }
      map(kk) {
        const ek = {};
        for (let ik = this.long(); 0 !== ik; ik = this.long()) {
          ik = this.block(ik);
          for (let Dk = 0; Dk < ik; Dk++) {
            ek[this.str()] = kk(this)
          }
        }
        return ek
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(kk) {
        let ek = kk;
        if (ek < 0 && (ek = -ek, this.long()), ek > this.buf.length - this.at) throw new RangeError(`avro: block of ${ek} items in ${this.buf.length-this.at} bytes`);
        return ek
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const kk = this.long();
        if (kk < 0) throw new RangeError(`avro: length ${kk}`);
        return kk
      }
      u8() {
        const kk = this.buf[this.at];
        if (void 0 === kk) throw new RangeError("avro: truncated");
        return this.at++, kk
      }
      take(kk) {
        const ek = this.at;
        if (kk > this.buf.length - ek) throw new RangeError("avro: truncated");
        return this.at = ek + kk, ek
      }
    }

    function bk(kk, ek) {
      const ik = new Sk(ek),
        fk = (0, Dk.lb)(kk, ik);
      return ik.end(), fk
    }
  },
  40191: (kk, ek, ik) => {
    ik.d(ek, {
      $: () => dk,
      D: () => mk,
      G: () => bk,
      H: () => Vk,
      K: () => fk,
      N: () => rk,
      P: () => nk,
      Q: () => sk,
      R: () => jk,
      T: () => Ck,
      W: () => Mk,
      X: () => Kk,
      bb: () => Uk,
      c: () => Lk,
      eb: () => yk,
      f: () => wk,
      gb: () => Hk,
      i: () => lk,
      ib: () => Pk,
      l: () => pk,
      lb: () => Fk,
      o: () => Ak,
      s: () => Dk,
      u: () => Sk,
      w: () => Yk,
      z: () => xk
    });
    const Dk = 2,
      fk = 12,
      Sk = 27,
      bk = 40,
      rk = 52,
      Pk = 59,
      mk = 63,
      Mk = 83,
      Kk = 84,
      xk = 89,
      nk = 91,
      Uk = 93,
      Hk = 94,
      wk = 95,
      lk = 97,
      pk = 101,
      yk = 102,
      Yk = 73,
      Lk = 16,
      Ck = 86,
      Ak = 60,
      jk = 17,
      sk = 56,
      dk = 100,
      Vk = 81;

    function Fk(kk, ek) {
      switch (kk) {
        case Dk:
          return function(kk) {
            return {
              Me: Gk(kk),
              Ke: kk.float(),
              xe: kk.long()
            }
          }(ek);
        case fk:
          return function(kk) {
            return {
              Ne: Qk(kk),
              Je: Qk(kk)
            }
          }(ek);
        case Sk:
          return function(kk) {
            return {
              ib: kk.bool(),
              Db: Qk(kk)
            }
          }(ek);
        case bk:
          return ek.str();
        case rk:
          return function(kk) {
            return {
              id: kk.long(),
              kk: re(kk)
            }
          }(ek);
        case Pk:
          return function(kk) {
            return {
              Di: Qk(kk),
              Si: me(kk)
            }
          }(ek);
        case mk:
          return ek.str();
        case Mk:
        case Kk:
          return ek.long();
        case xk:
          return function(kk) {
            return {
              Ee: kk.long(),
              he: kk.bool(),
              ae: kk.float()
            }
          }(ek);
        case nk:
          return ek.long();
        case Uk:
          return function(kk) {
            return {
              tS: kk.bool(),
              XS: xe(kk)
            }
          }(ek);
        case Hk:
          return function(kk) {
            return {
              id: kk.str(),
              position: Ke(kk),
              GS: ne(kk),
              style: tk(kk),
              RS: kk.bool()
            }
          }(ek);
        case wk:
          return function(kk) {
            return {
              id: Qk(kk)
            }
          }(ek);
        case lk:
          return function(kk) {
            return {
              vf: kk.long(),
              Ef: kk.str(),
              hf: Se(kk),
              af: Se(kk),
              Wf: Qk(kk),
              tf: Qk(kk),
              Xf: Qk(kk),
              Bf: Qk(kk),
              Tf: Qk(kk),
              Zf: Se(kk),
              gf: Se(kk),
              Gf: Qk(kk),
              Nf: Qk(kk),
              Rf: Qk(kk)
            }
          }(ek);
        case pk:
          return ek.str();
        case yk:
          return ek.long();
        case Yk:
          return function(kk) {
            return {
              mS: kk.long(),
              MS: kk.str(),
              KS: kk.float()
            }
          }(ek);
        case Lk:
          return function(kk) {
            return {
              ne: kk.bool(),
              Ue: Qk(kk),
              He: kk.str(),
              le: He(kk),
              pe: He(kk),
              ye: kk.bool(),
              Ye: kk.long(),
              Le: we(kk)
            }
          }(ek);
        case Ck:
          return function(kk) {
            return {
              zk: Qk(kk)
            }
          }(ek);
        case Ak:
          return function(kk) {
            return {
              ee: kk.str(),
              ie: kk.str(),
              De: le(kk),
              fe: kk.str(),
              Se: Jk(kk),
              Pe: kk.float()
            }
          }(ek);
        case jk:
          return function(kk) {
            return {
              ee: kk.str(),
              ie: kk.str(),
              De: le(kk)
            }
          }(ek);
        case sk:
          return function(kk) {
            return kk.WU(pe)
          }(ek);
        case dk:
          return function(kk) {
            return {
              ri: Ye(kk),
              xi: ck(kk)
            }
          }(ek);
        case Vk:
          return function(kk) {
            return {
              uD: kk.bool(),
              qD: Qk(kk),
              zD: Ce(kk),
              vD: ae(kk)
            }
          }(ek);
        default:
          throw new Error(`no reader for to-client message ${kk}`)
      }
    }

    function uk(kk) {
      return {
        entityName: kk.str()
      }
    }

    function qk(kk) {
      const ek = kk.index(4);
      return 0 === ek ? kk.str() : 1 === ek ? kk.long() : 2 === ek ? kk.bool() : uk(kk)
    }

    function Ik(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return kk.map(qk)
      }(kk)
    }

    function zk(kk) {
      return {
        translationKey: kk.str(),
        params: Ik(kk)
      }
    }

    function Qk(kk) {
      return 0 === kk.index(2) ? null : kk.str()
    }

    function vk(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          color: Qk(kk),
          colour: Qk(kk),
          fontSize: Qk(kk)
        }
      }(kk)
    }

    function Ek(kk) {
      return {
        icon: kk.str(),
        style: vk(kk)
      }
    }

    function hk(kk) {
      const ek = kk.index(3);
      return 0 === ek ? {
        string: kk.str()
      } : 1 === ek ? {
        styledEntityName: uk(kk)
      } : {
        styledTranslatedText: zk(kk)
      }
    }

    function ak(kk) {
      const ek = kk.index(3);
      return 0 === ek ? null : 1 === ek ? kk.str() : kk.long()
    }

    function Wk(kk) {
      return 0 === kk.index(2) ? null : kk.float()
    }

    function tk(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          color: Qk(kk),
          colour: Qk(kk),
          fontWeight: ak(kk),
          fontStyle: Qk(kk),
          fontSize: Qk(kk),
          opacity: Wk(kk)
        }
      }(kk)
    }

    function Xk(kk) {
      return {
        str: hk(kk),
        style: tk(kk),
        clickableUrl: Qk(kk)
      }
    }

    function Bk(kk) {
      return kk.str()
    }

    function ck(kk) {
      return kk.WU(Bk)
    }

    function Tk(kk) {
      return 0 === kk.index(2) ? null : ck(kk)
    }

    function Zk(kk) {
      return {
        type: kk.str(),
        progress: kk.float(),
        width: Qk(kk),
        height: Qk(kk),
        colours: Tk(kk),
        backgroundColour: Qk(kk)
      }
    }

    function Ok(kk) {
      return {
        type: kk.str(),
        action: kk.str(),
        style: tk(kk)
      }
    }

    function gk(kk) {
      const ek = kk.index(7);
      return 0 === ek ? {
        string: kk.str()
      } : 1 === ek ? {
        entityName: uk(kk)
      } : 2 === ek ? {
        translatedText: zk(kk)
      } : 3 === ek ? {
        styledIcon: Ek(kk)
      } : 4 === ek ? {
        mk: Xk(kk)
      } : 5 === ek ? {
        styledProgressBar: Zk(kk)
      } : {
        styledKeyBinding: Ok(kk)
      }
    }

    function Gk(kk) {
      return kk.WU(gk)
    }
    const Nk = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function Rk(kk) {
      return Nk[kk.index(5)]
    }

    function Jk(kk) {
      return 0 === kk.index(2) ? null : kk.double()
    }

    function ke(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          Sk: Jk(kk),
          bk: kk.double(),
          rk: kk.double(),
          Pk: kk.bool(),
          description: Gk(kk),
          Kk: kk.str(),
          scale: Jk(kk),
          rotation: Jk(kk)
        }
      }(kk)
    }

    function ee(kk) {
      return 0 === kk.index(2) ? null : kk.bool()
    }

    function ie(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          nk: kk.double(),
          icon: kk.str(),
          label: Gk(kk),
          Uk: kk.bool(),
          scale: Jk(kk),
          rotation: Jk(kk),
          Hk: ee(kk)
        }
      }(kk)
    }

    function De(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          Sk: Jk(kk),
          lk: kk.double(),
          yk: kk.double(),
          Yk: kk.double(),
          gravity: kk.double(),
          Lk: kk.double(),
          Ck: kk.double(),
          Ak: kk.double(),
          Pk: kk.bool(),
          description: Gk(kk),
          icon: Qk(kk)
        }
      }(kk)
    }

    function fe(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          speed: kk.double(),
          sk: kk.double(),
          label: Gk(kk),
          icon: Qk(kk),
          scale: Jk(kk),
          rotation: Jk(kk)
        }
      }(kk)
    }

    function Se(kk) {
      return 0 === kk.index(2) ? null : kk.long()
    }

    function be(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          Fk: kk.long(),
          uk: kk.double(),
          qk: kk.double(),
          Ik: Se(kk),
          label: Gk(kk),
          icon: Qk(kk)
        }
      }(kk)
    }

    function re(kk) {
      return {
        type: Rk(kk),
        progressBar: ke(kk),
        timedClick: ie(kk),
        gravityBar: De(kk),
        precisionBar: fe(kk),
        rhythmClick: be(kk)
      }
    }
    const Pe = ["playerGone", "rateLimited"];

    function me(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return Pe[kk.index(2)]
      }(kk)
    }

    function Me(kk) {
      return kk.float()
    }

    function Ke(kk) {
      return kk.WU(Me)
    }

    function xe(kk) {
      return 0 === kk.index(2) ? null : Ke(kk)
    }

    function ne(kk) {
      return 0 === kk.index(2) ? null : Gk(kk)
    }

    function Ue(kk) {
      return kk.long()
    }

    function He(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return kk.WU(Ue)
      }(kk)
    }

    function we(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          Ae: kk.str(),
          je: kk.long()
        }
      }(kk)
    }

    function le(kk) {
      const ek = kk.index(3);
      return 0 === ek ? null : 1 === ek ? kk.str() : zk(kk)
    }

    function pe(kk) {
      return {
        yD: kk.str(),
        YD: kk.str(),
        LD: kk.str()
      }
    }

    function ye(kk) {
      return {
        Pi: kk.str(),
        mi: Qk(kk),
        Mi: Qk(kk),
        Ki: ck(kk)
      }
    }

    function Ye(kk) {
      return kk.WU(ye)
    }

    function Le(kk) {
      return {
        QD: kk.str(),
        x: kk.long(),
        y: kk.long(),
        z: kk.long()
      }
    }

    function Ce(kk) {
      return kk.WU(Le)
    }

    function Ae(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          Df: kk.float(),
          ff: kk.long(),
          Sf: kk.long()
        }
      }(kk)
    }

    function je(kk) {
      return {
        blockName: kk.str(),
        OD: kk.bool(),
        gD: kk.bool(),
        GD: kk.bool(),
        ND: kk.float(),
        RD: kk.float(),
        JD: kk.long(),
        kf: Ae(kk)
      }
    }

    function se(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return kk.WU(je)
      }(kk)
    }

    function de(kk) {
      return {
        TD: kk.str(),
        oD: se(kk)
      }
    }

    function Ve(kk) {
      return {
        blockName: kk.str(),
        frequency: kk.float()
      }
    }

    function Fe(kk) {
      return kk.WU(Ve)
    }

    function ue(kk) {
      return {
        Pf: kk.str(),
        mf: kk.str(),
        frequency: kk.float(),
        Mf: Fe(kk)
      }
    }

    function qe(kk) {
      return kk.WU(ue)
    }

    function Ie(kk) {
      return {
        blockName: kk.str(),
        radius: kk.long(),
        Hf: kk.long(),
        aD: kk.long(),
        WD: kk.long(),
        wf: kk.float()
      }
    }

    function ze(kk) {
      return kk.WU(Ie)
    }

    function Qe(kk) {
      return {
        aD: kk.long(),
        WD: kk.long(),
        tD: kk.long(),
        XD: kk.bool(),
        BD: de(kk),
        bf: qe(kk),
        xf: ze(kk)
      }
    }

    function ve(kk) {
      return kk.WU(Qe)
    }

    function Ee(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          name: kk.str(),
          Yf: Qk(kk)
        }
      }(kk)
    }

    function he(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          terrain: Ee(kk),
          Lf: ze(kk)
        }
      }(kk)
    }

    function ae(kk) {
      return 0 === kk.index(2) ? null : function(kk) {
        return {
          layers: ve(kk),
          lf: he(kk)
        }
      }(kk)
    }
  },
  40172: (kk, ek, ik) => {
    ik.d(ek, {
      $: () => pk,
      C: () => Ak,
      D: () => uk,
      G: () => Yk,
      I: () => Lk,
      M: () => wk,
      N: () => dk,
      R: () => Ik,
      T: () => Uk,
      X: () => Qk,
      cb: () => lk,
      db: () => yk,
      e: () => fk,
      g: () => zk,
      gb: () => Ck,
      h: () => qk,
      j: () => nk,
      l: () => Hk,
      m: () => Fk,
      q: () => jk,
      u: () => Vk,
      y: () => sk
    });
    var Dk = ik(2932);
    const fk = {
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

    function Sk(kk, ek) {
      return !ArrayBuffer.isView(kk) || kk instanceof DataView ? Array.isArray(kk) ? kk.map((kk => ek(kk))) : kk : Array.from(kk, (kk => ek(kk)))
    }

    function bk(kk) {
      if ("string" !== typeof kk) return kk;
      for (let ek = 0; ek < kk.length; ek++) {
        const ik = kk.charCodeAt(ek);
        if (ik >= 55296 && ik <= 57343) return Pk.decode(rk.encode(kk))
      }
      return kk
    }
    const rk = new TextEncoder,
      Pk = new TextDecoder;

    function mk(kk) {
      return kk
    }
    let Mk;

    function Kk(kk) {
      return null === kk || "object" !== typeof kk ? kk : [bk(kk.kr), bk(kk.er)]
    }

    function xk(kk) {
      return null === kk || "object" !== typeof kk ? kk : [Sk(kk.le, mk), Sk(kk.Gb, mk)]
    }

    function nk(kk) {
      return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.hM), bk(ek.aM)];
      var ek
    }

    function Uk(kk) {
      return null === (ek = kk) || "object" !== typeof ek ? ek : [ek.id, ek.PP];
      var ek
    }

    function Hk(kk) {
      return null === (ek = kk) || "object" !== typeof ek ? ek : [ek.vf, bk(ek.Ef), ek.hf, bk(ek.tf), ek.Zf, ek.gf, ek.iP, bk(ek.DP), bk(ek.fP)];
      var ek
    }

    function wk(kk) {
      return null === (ek = kk) || "object" !== typeof ek ? ek : [Sk(ek.HP, mk), ek.wP];
      var ek
    }

    function lk(kk) {
      return null === (ek = kk) || "object" !== typeof ek ? ek : [Sk(ek.Bb, (kk => bk(kk))), bk(ek.cb), ek.Tb];
      var ek
    }

    function pk(kk) {
      return null === (ek = kk) || "object" !== typeof ek ? ek : [Sk(ek.kK, mk), bk(ek.eK), ek.iK];
      var ek
    }

    function yk(kk) {
      return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.YD), bk(ek.LD)];
      var ek
    }

    function Yk(kk) {
      return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.gP)];
      var ek
    }

    function Lk(kk) {
      return bk(kk)
    }

    function Ck(kk) {
      return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.lr), bk(ek.yr), bk(ek.kr), bk(ek.er)];
      var ek
    }

    function Ak(kk) {
      return Kk(kk)
    }

    function jk(kk) {
      return Kk(kk)
    }

    function sk(kk) {
      return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.FP)];
      var ek
    }

    function dk(kk) {
      return kk
    }

    function Vk(kk) {
      return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.ob), bk(ek.Zb)];
      var ek
    }

    function Fk(kk) {
      return bk(kk)
    }

    function uk(kk) {
      return xk(kk)
    }

    function qk(kk) {
      return xk(kk)
    }

    function Ik(kk) {
      return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.SP)];
      var ek
    }

    function zk(kk) {
      return (Mk ??= (0, Dk.i)().map((kk => kk.name)), Mk).map((ek => {
        return "string" === typeof(ik = kk[ek]) ? bk(ik) : Sk(ik, mk);
        var ik
      }))
    }

    function Qk(kk) {
      return null === (ek = kk) || "object" !== typeof ek ? ek : [ek.Nb, ek.Rb, ek.Jb];
      var ek
    }
  },
  9105: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk,
      e: () => Sk
    });
    var Dk = ik(9063);
    const fk = "Air",
      Sk = Object.freeze(new Dk.d(fk, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38805: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk,
      e: () => rk
    });
    var Dk = ik(314),
      fk = ik(4409);
    const Sk = new Set(fk.p),
      bk = new Map;

    function rk(kk, ek) {
      let ik = bk.get(ek);
      void 0 === ik && (ik = new Map, bk.set(ek, ik));
      let fk = ik.get(kk);
      return void 0 === fk && (fk = `${kk}${(0,Dk.w)(ek)}`, ik.set(kk, fk)), fk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);