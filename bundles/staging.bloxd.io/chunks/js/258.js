export const id = 258;
export const ids = [258];
export const modules = {
  40273: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Pp,
      e: () => Ap,
      f: () => Lp,
      i: () => Wp,
      m: () => Yp,
      p: () => xp,
      s: () => Dp
    });
    var Op = cp(38905),
      op = cp(40276);

    function Ip(pp, ip, cp, Op) {
      switch (ip) {
        case 5120: {
          let ip = pp.getInt8(cp);
          return Op && (ip = Math.max(ip / 127, -1)), ip
        }
        case 5121: {
          let ip = pp.getUint8(cp);
          return Op && (ip /= 255), ip
        }
        case 5122: {
          let ip = pp.getInt16(cp, !0);
          return Op && (ip = Math.max(ip / 32767, -1)), ip
        }
        case 5123: {
          let ip = pp.getUint16(cp, !0);
          return Op && (ip /= 65535), ip
        }
        case 5131:
          return (0, op.c)(pp.getUint16(cp, !0));
        case 5124:
          return pp.getInt32(cp, !0);
        case 5125:
          return pp.getUint32(cp, !0);
        case 5126:
          return pp.getFloat32(cp, !0);
        default:
          throw new Error(`Invalid component type ${ip}`)
      }
    }

    function Sp(pp, ip, cp, Op, Ip) {
      switch (ip) {
        case 5120:
          Op && (Ip = Math.round(127 * Ip)), pp.setInt8(cp, Ip);
          break;
        case 5121:
          Op && (Ip = Math.round(255 * Ip)), pp.setUint8(cp, Ip);
          break;
        case 5122:
          Op && (Ip = Math.round(32767 * Ip)), pp.setInt16(cp, Ip, !0);
          break;
        case 5123:
          Op && (Ip = Math.round(65535 * Ip)), pp.setUint16(cp, Ip, !0);
          break;
        case 5131:
          pp.setUint16(cp, (0, op.h)(Ip), !0);
          break;
        case 5124:
          pp.setInt32(cp, Ip, !0);
          break;
        case 5125:
          pp.setUint32(cp, Ip, !0);
          break;
        case 5126:
          pp.setFloat32(cp, Ip, !0);
          break;
        default:
          throw new Error(`Invalid component type ${ip}`)
      }
    }

    function xp(pp) {
      switch (pp) {
        case 5120:
        case 5121:
          return 1;
        case 5122:
        case 5123:
        case 5131:
          return 2;
        case 5124:
        case 5125:
        case 5126:
          return 4;
        default:
          throw new Error(`Invalid type '${pp}'`)
      }
    }

    function Lp(pp, ip, cp, Op, op, Lp, Yp, Dp) {
      const Ap = new Array(Op),
        Pp = new Array(Op);
      if (pp instanceof Array) {
        let op = ip / 4;
        const Ip = cp / 4;
        for (let ip = 0; ip < Lp; ip += Op) {
          for (let ip = 0; ip < Op; ip++) Ap[ip] = Pp[ip] = pp[op + ip];
          Dp(Pp, ip);
          for (let ip = 0; ip < Op; ip++) Ap[ip] !== Pp[ip] && (pp[op + ip] = Pp[ip]);
          op += Ip
        }
      } else {
        const Wp = ArrayBuffer.isView(pp) ? new DataView(pp.buffer, pp.byteOffset, pp.byteLength) : new DataView(pp),
          yp = xp(op);
        for (let pp = 0; pp < Lp; pp += Op) {
          for (let pp = 0, cp = ip; pp < Op; pp++, cp += yp) Ap[pp] = Pp[pp] = Ip(Wp, op, cp, Yp);
          Dp(Pp, pp);
          for (let pp = 0, cp = ip; pp < Op; pp++, cp += yp) Ap[pp] !== Pp[pp] && Sp(Wp, op, cp, Yp, Pp[pp]);
          ip += cp
        }
      }
    }

    function Yp(pp, ip, cp, op, Ip, Sp, Yp, Dp) {
      const Ap = ip * xp(cp),
        Pp = Yp * ip;
      if (5126 !== cp || Ip !== Ap) {
        const Op = new Float32Array(Pp);
        return Lp(pp, op, Ip, ip, cp, Pp, Sp, ((pp, cp) => {
          for (let op = 0; op < ip; op++) Op[cp + op] = pp[op]
        })), Op
      }
      if (!(pp instanceof Array || pp instanceof Float32Array) || 0 !== op || pp.length !== Pp) {
        if (pp instanceof Array) {
          const ip = op / 4;
          return pp.slice(ip, ip + Pp)
        }
        if (ArrayBuffer.isView(pp)) {
          const ip = pp.byteOffset + op;
          return 0 !== (3 & ip) && (Op.e.Warn("Float array must be aligned to 4-bytes border"), Dp = !0), Dp ? new Float32Array(pp.buffer.slice(ip, ip + Pp * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(pp.buffer, ip, Pp)
        }
        return new Float32Array(pp, op, Pp)
      }
      return Dp ? pp.slice() : pp
    }

    function Dp(pp, ip, cp, op, Ip, Sp, Yp) {
      const Dp = xp(cp),
        Ap = function(pp) {
          switch (pp) {
            case 5120:
              return Int8Array;
            case 5121:
              return Uint8Array;
            case 5122:
              return Int16Array;
            case 5123:
            case 5131:
              return Uint16Array;
            case 5124:
              return Int32Array;
            case 5125:
              return Uint32Array;
            case 5126:
              return Float32Array;
            default:
              throw new Error(`Invalid component type '${pp}'`)
          }
        }(cp),
        Pp = Sp * ip;
      if (Array.isArray(pp)) {
        if (0 !== (3 & op) || 0 !== (3 & Ip)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const Op = op / 4,
          xp = Ip / 4;
        if (Op + (Sp - 1) * xp + ip > pp.length) throw new Error("Last accessed index is out of bounds.");
        if (xp < ip) throw new Error("Data stride cannot be smaller than the component size.");
        if (xp !== ip) {
          const Op = new Ap(Pp);
          return Lp(pp, op, Ip, ip, cp, Pp, !1, ((pp, cp) => {
            for (let op = 0; op < ip; op++) Op[cp + op] = pp[op]
          })), Op
        }
        return new Ap(pp.slice(Op, Op + Pp))
      }
      let Wp, yp = op;
      ArrayBuffer.isView(pp) ? (Wp = pp.buffer, yp += pp.byteOffset) : Wp = pp;
      if (yp + (Sp - 1) * Ip + ip * Dp > Wp.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const Up = ip * Dp;
      if (Ip < Up) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (Ip !== Up) {
        const pp = new Ap(Pp),
          cp = new Uint8Array(Wp, yp),
          Op = new Uint8Array(pp.buffer),
          op = ip * Dp;
        for (let ip = 0, xp = 0, Lp = 0; ip < Sp; ip++, xp += Ip, Lp += op) Op.set(cp.subarray(xp, xp + op), Lp);
        return pp
      }
      return 1 !== Dp && 0 !== (yp & Dp - 1) && (Op.e.Warn("Array must be aligned to border of element size. Data will be copied."), Yp = !0), Yp ? new Ap(Wp.slice(yp, yp + Pp * Dp)) : new Ap(Wp, yp, Pp)
    }

    function Ap(pp, ip, cp, op, Ip, Sp, Yp, Dp) {
      const Ap = ip * xp(cp),
        Pp = Yp * ip;
      if (Dp.length !== Pp) throw new Error("Output length is not valid");
      if (5126 === cp && Ip === Ap)
        if (pp instanceof Array) {
          const ip = op / 4;
          Dp.set(pp, ip)
        } else if (ArrayBuffer.isView(pp)) {
        const ip = pp.byteOffset + op;
        if (0 !== (3 & ip)) return Op.e.Warn("Float array must be aligned to 4-bytes border"), void Dp.set(new Float32Array(pp.buffer.slice(ip, ip + Pp * Float32Array.BYTES_PER_ELEMENT)));
        const cp = new Float32Array(pp.buffer, ip, Pp);
        Dp.set(cp)
      } else {
        const ip = new Float32Array(pp, op, Pp);
        Dp.set(ip)
      } else Lp(pp, op, Ip, ip, cp, Pp, Sp, ((pp, cp) => {
        for (let Op = 0; Op < ip; Op++) Dp[cp + Op] = pp[Op]
      }))
    }

    function Pp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(pp)) {
        for (let op = 0; op < ip; op++)
          if (pp[cp + op] - Op > 65535) return !0;
        return !1
      }
      return 4 === pp.BYTES_PER_ELEMENT
    }

    function Wp(pp) {
      const ip = pp.buffer;
      if (ip instanceof ArrayBuffer) return pp;
      const cp = new ArrayBuffer(pp.byteLength);
      return new Uint8Array(cp).set(new Uint8Array(ip, pp.byteOffset, pp.byteLength)), cp
    }
  },
  40103: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => mp,
      c: () => jp,
      j: () => kp,
      g: () => lp,
      k: () => Qp
    });
    class Op {
      constructor() {
        this.children = []
      }
      isValid(pp) {
        return !0
      }
      process(pp, ip, cp) {
        let Op = "";
        if (this.line) {
          let cp = this.line;
          const op = ip.processor;
          if (op) {
            op.lineProcessor && (cp = op.lineProcessor(cp, ip.isFragment, ip.processingContext));
            const Op = ip.processor?.attributeKeywordName ?? "attribute",
              Ip = ip.isFragment && ip.processor?.varyingFragmentKeywordName ? ip.processor?.varyingFragmentKeywordName : !ip.isFragment && ip.processor?.varyingVertexKeywordName ? ip.processor?.varyingVertexKeywordName : "varying";
            if (!ip.isFragment && op.attributeProcessor && this.line.startsWith(Op)) cp = op.attributeProcessor(this.line, pp, ip.processingContext);
            else if (op.varyingProcessor && (op.varyingCheck?.(this.line, ip.isFragment) || !op.varyingCheck && this.line.startsWith(Ip))) cp = op.varyingProcessor(this.line, ip.isFragment, pp, ip.processingContext);
            else if (op.uniformProcessor && op.uniformRegexp && op.uniformRegexp.test(this.line)) ip.lookForClosingBracketForUniformBuffer || (cp = op.uniformProcessor(this.line, ip.isFragment, pp, ip.processingContext));
            else if (op.uniformBufferProcessor && op.uniformBufferRegexp && op.uniformBufferRegexp.test(this.line)) ip.lookForClosingBracketForUniformBuffer || (cp = op.uniformBufferProcessor(this.line, ip.isFragment, ip.processingContext), ip.lookForClosingBracketForUniformBuffer = !0);
            else if (op.textureProcessor && op.textureRegexp && op.textureRegexp.test(this.line)) cp = op.textureProcessor(this.line, ip.isFragment, pp, ip.processingContext);
            else if ((op.uniformProcessor || op.uniformBufferProcessor) && this.line.startsWith("uniform") && !ip.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? op.uniformProcessor && (cp = op.uniformProcessor(this.line, ip.isFragment, pp, ip.processingContext)) : op.uniformBufferProcessor && (cp = op.uniformBufferProcessor(this.line, ip.isFragment, ip.processingContext), ip.lookForClosingBracketForUniformBuffer = !0)
            }
            ip.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (ip.lookForClosingBracketForUniformBuffer = !1, op.endOfUniformBufferProcessor && (cp = op.endOfUniformBufferProcessor(this.line, ip.isFragment, ip.processingContext)))
          }
          Op += cp + "\n"
        }
        for (const op of this.children) Op += op.process(pp, ip, cp);
        return this.additionalDefineKey && (pp[this.additionalDefineKey] = this.additionalDefineValue || "true", cp[this.additionalDefineKey] = pp[this.additionalDefineKey]), Op
      }
    }
    class op {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(pp) {
        this._lines.length = 0;
        for (const ip of pp) {
          if (!ip || "\r" === ip) continue;
          if ("#" === ip[0]) {
            this._lines.push(ip);
            continue
          }
          const pp = ip.trim();
          if (!pp) continue;
          if (pp.startsWith("//")) {
            this._lines.push(ip);
            continue
          }
          const cp = pp.indexOf(";");
          if (-1 === cp) this._lines.push(pp);
          else if (cp === pp.length - 1) pp.length > 1 && this._lines.push(pp);
          else {
            const pp = ip.split(";");
            for (let ip = 0; ip < pp.length; ip++) {
              let cp = pp[ip];
              cp && (cp = cp.trim(), cp && this._lines.push(cp + (ip !== pp.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class Ip extends Op {
      process(pp, ip, cp) {
        for (let Op = 0; Op < this.children.length; Op++) {
          const op = this.children[Op];
          if (op.isValid(pp)) return op.process(pp, ip, cp)
        }
        return ""
      }
    }
    class Sp extends Op {
      isValid(pp) {
        return this.testExpression.isTrue(pp)
      }
    }
    class xp {
      isTrue(pp) {
        return !0
      }
      static postfixToInfix(pp) {
        const ip = [];
        for (const cp of pp)
          if (void 0 === xp._OperatorPriority[cp]) ip.push(cp);
          else {
            const pp = ip[ip.length - 1],
              Op = ip[ip.length - 2];
            ip.length -= 2, ip.push(`(${Op}${cp}${pp})`)
          } return ip[ip.length - 1]
      }
      static infixToPostfix(pp) {
        const ip = xp._InfixToPostfixCache.get(pp);
        if (ip) return ip.accessTime = Date.now(), ip.result;
        if (!pp.includes("&&") && !pp.includes("||") && !pp.includes(")") && !pp.includes("(")) return [pp];
        const cp = [];
        let Op = -1;
        const op = () => {
            Dp = Dp.trim(), "" !== Dp && (cp.push(Dp), Dp = "")
          },
          Ip = pp => {
            Op < xp._Stack.length - 1 && (xp._Stack[++Op] = pp)
          },
          Sp = () => xp._Stack[Op],
          Lp = () => -1 === Op ? "!!INVALID EXPRESSION!!" : xp._Stack[Op--];
        let Yp = 0,
          Dp = "";
        for (; Yp < pp.length;) {
          const ip = pp.charAt(Yp),
            Ap = Yp < pp.length - 1 ? pp.substring(Yp, 2 + Yp) : "";
          if ("(" === ip) Dp = "", Ip(ip);
          else if (")" === ip) {
            for (op(); - 1 !== Op && "(" !== Sp();) cp.push(Lp());
            Lp()
          } else if (xp._OperatorPriority[Ap] > 1) {
            for (op(); - 1 !== Op && xp._OperatorPriority[Sp()] >= xp._OperatorPriority[Ap];) cp.push(Lp());
            Ip(Ap), Yp++
          } else Dp += ip;
          Yp++
        }
        for (op(); - 1 !== Op;) "(" === Sp() ? Lp() : cp.push(Lp());
        return xp._InfixToPostfixCache.size >= xp.InfixToPostfixCacheLimitSize && xp.ClearCache(), xp._InfixToPostfixCache.set(pp, {
          result: cp,
          accessTime: Date.now()
        }), cp
      }
      static ClearCache() {
        const pp = Array.from(xp._InfixToPostfixCache.entries()).sort(((pp, ip) => pp[1].accessTime - ip[1].accessTime));
        for (let ip = 0; ip < xp.InfixToPostfixCacheCleanupSize; ip++) xp._InfixToPostfixCache.delete(pp[ip][0])
      }
    }
    xp.InfixToPostfixCacheLimitSize = 5e4, xp.InfixToPostfixCacheCleanupSize = 25e3, xp._InfixToPostfixCache = new Map, xp._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, xp._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class Lp extends xp {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = pp, this.not = ip
      }
      isTrue(pp) {
        let ip = void 0 !== pp[this.define];
        return this.not && (ip = !ip), ip
      }
    }
    class Yp extends xp {
      isTrue(pp) {
        return this.leftOperand.isTrue(pp) || this.rightOperand.isTrue(pp)
      }
    }
    class Dp extends xp {
      isTrue(pp) {
        return this.leftOperand.isTrue(pp) && this.rightOperand.isTrue(pp)
      }
    }
    class Ap extends xp {
      constructor(pp, ip, cp) {
        super(), this.define = pp, this.operand = ip, this.testValue = cp
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(pp) {
        let ip = !1;
        const cp = parseInt(void 0 != pp[this.define] ? pp[this.define] : this.define),
          Op = parseInt(void 0 != pp[this.testValue] ? pp[this.testValue] : this.testValue);
        if (isNaN(cp) || isNaN(Op)) return !1;
        switch (this.operand) {
          case ">":
            ip = cp > Op;
            break;
          case "<":
            ip = cp < Op;
            break;
          case "<=":
            ip = cp <= Op;
            break;
          case ">=":
            ip = cp >= Op;
            break;
          case "==":
            ip = cp === Op;
            break;
          case "!=":
            ip = cp !== Op
        }
        return ip
      }
    }
    var Pp = cp(40096),
      Wp = cp(40088);
    const yp = /defined\s*?\((.+?)\)/g,
      Up = /defined\s*?\[(.+?)\]/g,
      wp = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      vp = /__decl__/,
      tp = /light\{X\}.(\w*)/g,
      Hp = /\{X\}/g,
      dp = [],
      ep = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function jp(pp) {
      pp.processor && pp.processor.initializeShaders && pp.processor.initializeShaders(pp.processingContext)
    }

    function kp(pp, ip, cp, Op) {
      ip.processor?.preProcessShaderCode && (pp = ip.processor.preProcessShaderCode(pp, ip.isFragment)), lp(pp, ip, (pp => {
        ip.processCodeAfterIncludes && (pp = ip.processCodeAfterIncludes(ip.isFragment ? "fragment" : "vertex", pp, ip.defines));
        const op = function(pp, ip, cp) {
          let Op = function(pp, ip) {
            if (ip.processor?.noPrecision) return pp;
            const cp = ip.shouldUseHighPrecisionShader; - 1 === pp.indexOf("precision highp float") ? pp = cp ? "precision highp float;\n" + pp : "precision mediump float;\n" + pp : cp || (pp = pp.replace("precision highp float", "precision mediump float"));
            return pp
          }(pp, ip);
          if (!ip.processor) return Op;
          if (0 === ip.processor.shaderLanguage && -1 !== Op.indexOf("#version 3") && (Op = Op.replace("#version 300 es", ""), !ip.processor.parseGLES3)) return Op;
          const op = ip.defines,
            Ip = Xp(ip, cp);
          ip.processor.preProcessor && (Op = ip.processor.preProcessor(Op, op, Ip, ip.isFragment, ip.processingContext));
          const Sp = {};
          Op = Ep(Op, Ip, ip, Sp), ip.processor.postProcessor && (Op = ip.processor.postProcessor(Op, op, ip.isFragment, ip.processingContext, cp ? {
            drawBuffersExtensionDisabled: !cp.getCaps().drawBuffersExtension
          } : {}, Ip, Sp));
          cp?._features.needShaderCodeInlining && (Op = cp.inlineShaderCode(Op));
          return Op
        }(pp, ip, Op);
        cp(op, pp)
      }))
    }

    function mp(pp, ip, cp) {
      return cp.processor && cp.processor.finalizeShaders ? cp.processor.finalizeShaders(pp, ip, cp.processingContext) : {
        vertexCode: pp,
        fragmentCode: ip
      }
    }

    function Rp(pp) {
      const ip = /defined\((.+)\)/.exec(pp);
      if (ip && ip.length) return new Lp(ip[1].trim(), "!" === pp[0]);
      const cp = ["==", "!=", ">=", "<=", "<", ">"];
      let Op = "",
        op = 0;
      for (Op of cp)
        if (op = pp.indexOf(Op), op > -1) break;
      if (-1 === op) return new Lp(pp);
      const Ip = pp.substring(0, op).trim(),
        Sp = pp.substring(op + Op.length).trim();
      return new Ap(Ip, Op, Sp)
    }

    function qp(pp, ip) {
      const cp = new Sp,
        Op = pp.substring(0, ip);
      let op = pp.substring(ip);
      return op = op.substring(0, (op.indexOf("//") + 1 || op.length + 1) - 1).trim(), cp.testExpression = "#ifdef" === Op ? new Lp(op) : "#ifndef" === Op ? new Lp(op, !0) : function(pp) {
        pp = pp.replace(yp, "defined[$1]");
        const ip = xp.infixToPostfix(pp),
          cp = [];
        for (const op of ip)
          if ("||" !== op && "&&" !== op) cp.push(op);
          else if (cp.length >= 2) {
          let pp = cp[cp.length - 1],
            ip = cp[cp.length - 2];
          cp.length -= 2;
          const Op = "&&" == op ? new Dp : new Yp;
          "string" === typeof pp && (pp = pp.replace(Up, "defined($1)")), "string" === typeof ip && (ip = ip.replace(Up, "defined($1)")), Op.leftOperand = "string" === typeof ip ? Rp(ip) : ip, Op.rightOperand = "string" === typeof pp ? Rp(pp) : pp, cp.push(Op)
        }
        let Op = cp[cp.length - 1];
        return "string" === typeof Op && (Op = Op.replace(Up, "defined($1)")), "string" === typeof Op ? Rp(Op) : Op
      }(op), cp
    }

    function Mp(pp, ip, cp, op) {
      let Ip;
      for (; Cp(pp, cp, op);) {
        Ip = pp.currentLine;
        const Sp = Ip.substring(0, 5).toLowerCase();
        if ("#else" === Sp) {
          const cp = new Op;
          return ip.children.push(cp), void Cp(pp, cp, op)
        }
        if ("#elif" === Sp) {
          const pp = qp(Ip, 5);
          ip.children.push(pp), cp = pp
        }
      }
    }

    function Cp(pp, ip, cp) {
      for (; pp.canRead;) {
        pp.lineIndex++;
        const op = pp.currentLine;
        if (op.indexOf("#") >= 0) {
          const Op = ep.exec(op);
          if (Op && Op.length) {
            switch (Op[0]) {
              case "#ifdef": {
                const Op = new Ip;
                ip.children.push(Op);
                const Sp = qp(op, 6);
                Op.children.push(Sp), Mp(pp, Op, Sp, cp);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const Op = new Ip;
                ip.children.push(Op);
                const Sp = qp(op, 7);
                Op.children.push(Sp), Mp(pp, Op, Sp, cp);
                break
              }
              case "#if": {
                const Op = new Ip,
                  Sp = qp(op, 3);
                ip.children.push(Op), Op.children.push(Sp), Mp(pp, Op, Sp, cp);
                break
              }
            }
            continue
          }
        }
        const Sp = new Op;
        if (Sp.line = op, ip.children.push(Sp), "#" === op[0] && "d" === op[1]) {
          const pp = op.replace(";", "").split(" ");
          Sp.additionalDefineKey = pp[1], 3 === pp.length && (Sp.additionalDefineValue = pp[2])
        }
      }
      return !1
    }

    function Ep(pp, ip, cp, Ip) {
      const Sp = new Op,
        xp = new op;
      return xp.lineIndex = -1, xp.lines = pp.split("\n"), Cp(xp, Sp, Ip), Sp.process(ip, cp, Ip)
    }

    function Xp(pp, ip) {
      const cp = pp.defines,
        Op = {};
      for (const op of cp) {
        const pp = op.replace("#define", "").replace(";", "").trim().split(" ");
        Op[pp[0]] = pp.length > 1 ? pp[1] : ""
      }
      return 0 === pp.processor?.shaderLanguage && (Op.GL_ES = "true"), Op.__VERSION__ = pp.version, Op[pp.platformName] = "true", (0, Wp.j)(Op, ip?.isNDCHalfZRange, ip?.lOp, ip?.useExactSrgbConversions), Op
    }

    function lp(pp, ip, cp) {
      let Op;
      for (dp.length = 0; null !== (Op = wp.exec(pp));) dp.push(Op);
      let op = [pp],
        Ip = !1;
      for (const xp of dp) {
        let pp = xp[1];
        if (-1 !== pp.indexOf("__decl__") && (pp = pp.replace(vp, ""), ip.supportsUniformBuffers && (pp = pp.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), pp += "Declaration"), !ip.includesShadersStore[pp]) {
          const Op = ip.shadersRepository + "ShadersInclude/" + pp + ".fx";
          return void Qp.loadFile(Op, (Op => {
            ip.includesShadersStore[pp] = Op, lp(op.join(""), ip, cp)
          }))
        } {
          let cp = ip.includesShadersStore[pp];
          if (xp[2]) {
            const pp = xp[3].split(",");
            for (let ip = 0; ip < pp.length; ip += 2) {
              const Op = new RegExp(pp[ip], "g"),
                op = pp[ip + 1];
              cp = cp.replace(Op, op)
            }
          }
          if (xp[4]) {
            const pp = xp[5];
            if (-1 !== pp.indexOf("..")) {
              const Op = pp.split(".."),
                op = parseInt(Op[0]);
              let Ip = parseInt(Op[1]),
                Sp = cp.slice(0);
              cp = "", isNaN(Ip) && (Ip = ip.indexParameters[Op[1]]);
              for (let pp = op; pp < Ip; pp++) ip.supportsUniformBuffers || (Sp = Sp.replace(tp, ((pp, ip) => ip + "{X}"))), cp += Sp.replace(Hp, pp.toString()) + "\n"
            } else ip.supportsUniformBuffers || (cp = cp.replace(tp, ((pp, ip) => ip + "{X}"))), cp = cp.replace(Hp, pp)
          }
          const Op = [];
          for (const pp of op) {
            const ip = pp.split(xp[0]);
            for (let pp = 0; pp < ip.length - 1; pp++) Op.push(ip[pp]), Op.push(cp);
            Op.push(ip[ip.length - 1])
          }
          op = Op, Ip = Ip || cp.indexOf("#include<") >= 0 || cp.indexOf("#include <") >= 0
        }
      }
      dp.length = 0;
      const Sp = op.join("");
      Ip ? lp(Sp.toString(), ip, cp) : cp(Sp)
    }
    const Qp = {
      loadFile: (pp, ip, cp, Op, op, Ip) => {
        throw (0, Pp.o)("FileTools")
      }
    }
  },
  40088: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op,
      g: () => Ip,
      j: () => xp,
      n: () => Sp,
      r: () => Lp
    });
    var Op = cp(40096);
    const op = {};

    function Ip(pp, ip) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (ip ? ip + "\n" : "") + pp
    }

    function Sp(pp, ip, cp, Ip, Sp, xp, Lp) {
      const Yp = Lp || op.loadFile;
      if (!Yp) throw (0, Op.o)("FileTools");
      return Yp(pp, ip, cp, Ip, Sp, xp)
    }

    function xp(pp, ip, cp, Op) {
      if (pp) return ip ? pp.IS_NDC_HALF_ZRANGE = "" : delete pp.IS_NDC_HALF_ZRANGE, cp ? pp.USE_REVERSE_DEPTHBUFFER = "" : delete pp.USE_REVERSE_DEPTHBUFFER, void(Op ? pp.USE_EXACT_SRGB_CONVERSIONS = "" : delete pp.USE_EXACT_SRGB_CONVERSIONS);
      {
        let pp = "";
        return ip && (pp += "#define IS_NDC_HALF_ZRANGE"), cp && (pp && (pp += "\n"), pp += "#define USE_REVERSE_DEPTHBUFFER"), Op && (pp && (pp += "\n"), pp += "#define USE_EXACT_SRGB_CONVERSIONS"), pp
      }
    }

    function Lp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Op = arguments.length > 3 ? arguments[3] : void 0;
      switch (pp) {
        case 3: {
          const pp = new Int8Array(ip);
          return Op && pp.set(new Int8Array(Op)), pp
        }
        case 0: {
          const pp = new Uint8Array(ip);
          return Op && pp.set(new Uint8Array(Op)), pp
        }
        case 4: {
          const pp = "number" !== typeof ip ? new Int16Array(ip) : new Int16Array(cp ? ip / 2 : ip);
          return Op && pp.set(new Int16Array(Op)), pp
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const pp = "number" !== typeof ip ? new Uint16Array(ip) : new Uint16Array(cp ? ip / 2 : ip);
          return Op && pp.set(new Uint16Array(Op)), pp
        }
        case 6: {
          const pp = "number" !== typeof ip ? new Int32Array(ip) : new Int32Array(cp ? ip / 4 : ip);
          return Op && pp.set(new Int32Array(Op)), pp
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const pp = "number" !== typeof ip ? new Uint32Array(ip) : new Uint32Array(cp ? ip / 4 : ip);
          return Op && pp.set(new Uint32Array(Op)), pp
        }
        case 1: {
          const pp = "number" !== typeof ip ? new Float32Array(ip) : new Float32Array(cp ? ip / 4 : ip);
          return Op && pp.set(new Float32Array(Op)), pp
        }
      }
      const op = new Uint8Array(ip);
      return Op && op.set(new Uint8Array(Op)), op
    }
  },
  40096: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Yp,
      h: () => Dp,
      k: () => Lp,
      o: () => op
    });
    const Op = {};

    function op(pp) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !Op[pp]) return Op[pp] = !0, `${pp} needs to be imported before as it contains a side-effect required by your code.`
    }
    const Ip = {};
    let Sp = !1,
      xp = 0;

    function Lp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Op = function() {
        if ((cp || Sp) && 0 === xp) {
          const cp = `${pp}.${ip}`;
          Ip[cp] || (Ip[cp] = !0, console.warn(`[Babylon.js] ${cp}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return Op.__isSideEffectStub = !0, Op
    }

    function Yp(pp) {
      return !!pp && !pp.__isSideEffectStub
    }

    function Dp(pp, ip) {
      return {
        get() {},
        set(pp) {
          Object.defineProperty(this, ip, {
            value: pp,
            writable: !0,
            configurable: !0,
            enumerable: !0
          })
        },
        configurable: !0,
        enumerable: !0
      }
    }
  },
  40071: (pp, ip, cp) => {
    function Op() {
      return "undefined" !== typeof window
    }

    function op() {
      return "undefined" !== typeof navigator
    }

    function Ip() {
      return "undefined" !== typeof document
    }

    function Sp(pp) {
      let ip = "",
        cp = pp.firstChild;
      for (; cp;) 3 === cp.nodeType && (ip += cp.textContent), cp = cp.nextSibling;
      return ip
    }
    cp.d(ip, {
      d: () => Sp,
      f: () => Ip,
      h: () => op,
      j: () => Op
    })
  },
  40266: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Op,
      h: () => op,
      i: () => Ip
    });
    class Op extends Error {}
    Op._setPrototypeOf = Object.setPrototypeOf || ((pp, ip) => (pp.__proto__ = ip, pp));
    const op = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class Ip extends Op {
      constructor(pp, ip, cp) {
        super(pp), this.errorCode = ip, this.innerError = cp, this.name = "RuntimeError", Op._setPrototypeOf(this, Ip.prototype)
      }
    }
  },
  40257: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Xp,
      c: () => Hp,
      g: () => qp,
      k: () => Cp,
      l: () => mp,
      p: () => jp,
      r: () => kp,
      u: () => Np,
      v: () => Rp,
      y: () => dp
    });
    var Op = cp(40261),
      op = cp(40071),
      Ip = cp(37349);
    class Sp {}
    Sp.FilesToLoad = {};
    var xp = cp(40266),
      Lp = cp(40269),
      Yp = cp(37345),
      Dp = cp(40088),
      Ap = cp(40103),
      Pp = cp(38905),
      Wp = cp(40107),
      yp = cp(40273);
    const Up = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class wp extends xp.i {
      constructor(pp, ip) {
        super(pp, xp.h.LoadFileError), this.name = "LoadFileError", xp.d._setPrototypeOf(this, wp.prototype), ip instanceof Op.e ? this.request = ip : this.file = ip
      }
    }
    class vp extends xp.i {
      constructor(pp, ip) {
        super(pp, xp.h.RequestFileError), this.request = ip, this.name = "RequestFileError", xp.d._setPrototypeOf(this, vp.prototype)
      }
    }
    class tp extends xp.i {
      constructor(pp, ip) {
        super(pp, xp.h.ReadFileError), this.file = ip, this.name = "ReadFileError", xp.d._setPrototypeOf(this, tp.prototype)
      }
    }
    const Hp = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (cp, Op, op) => 0 !== Op.status || op >= pp || -1 !== cp.indexOf("file:") ? -1 : Math.pow(2, op) * ip
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: pp => pp,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: pp => pp,
        CleanUrl: pp => pp = pp.replace(/#/gm, "%23")
      },
      dp = (pp, ip) => {
        if ((!pp || 0 !== pp.indexOf("data:")) && Hp.CorsBehavior)
          if ("string" === typeof Hp.CorsBehavior || Hp.CorsBehavior instanceof String) ip.crossOrigin = Hp.CorsBehavior;
          else {
            const cp = Hp.CorsBehavior(pp);
            cp && (ip.crossOrigin = cp)
          }
      },
      ep = {
        getRequiredSize: null
      },
      jp = function(pp, ip, cp, op) {
        let Ip, xp = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          Dp = arguments.length > 5 ? arguments[5] : void 0,
          Ap = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Yp.e.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !Ap?._features.forceBitmapOverHTMLImageElement) return cp("LoadImage is only supported in web or BabylonNative environments."), null;
        if (Ap?._features.forceBitmapOverHTMLImageElement && "string" !== typeof pp && "undefined" !== typeof Blob) {
          let Op;
          if (pp instanceof Blob) Op = pp;
          else {
            const ip = pp instanceof ArrayBuffer ? pp : (0, yp.i)(pp);
            Op = new Blob([ip], {
              type: xp
            })
          }
          return Ap.createImageBitmap(Op, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...Dp
          }).then(ip).catch((ip => {
            cp && cp("Error while trying to load image: " + pp, ip)
          })), null
        }
        let Pp = !1;
        if (pp instanceof ArrayBuffer || ArrayBuffer.isView(pp))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let ip;
            ip = pp instanceof ArrayBuffer ? pp : (0, yp.i)(pp), Ip = URL.createObjectURL(new Blob([ip], {
              type: xp
            })), Pp = !0
          } else Ip = `data:${xp};base64,` + (0, Lp.i)(pp);
        else pp instanceof Blob ? (Ip = URL.createObjectURL(pp), Pp = !0) : (Ip = Hp.CleanUrl(pp), Ip = Hp.PreprocessUrl(Ip));
        const Wp = ip => {
          if (cp) {
            const Op = Ip || pp.toString();
            cp(`Error while trying to load image: ${0===Op.indexOf("http")||Op.length<=128?Op:Op.slice(0,128)+"..."}`, ip)
          }
        };
        if (Ap?._features.forceBitmapOverHTMLImageElement) return mp(Ip, (Op => {
          Ap.createImageBitmap(new Blob([Op], {
            type: xp
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...Dp
          }).then((pp => {
            ip(pp), Pp && URL.revokeObjectURL(Ip)
          })).catch((ip => {
            cp && cp("Error while trying to load image: " + pp, ip)
          }))
        }), void 0, op || void 0, !0, ((pp, ip) => {
          Wp(ip)
        })), null;
        const Up = new Image;
        if (ep.getRequiredSize) {
          const ip = ep.getRequiredSize(pp);
          ip.width && (Up.width = ip.width), ip.height && (Up.height = ip.height)
        }
        dp(Ip, Up);
        const wp = [],
          vp = () => {
            for (const pp of wp) pp.target.removeEventListener(pp.name, pp.handler);
            wp.length = 0
          };
        wp.push({
          target: Up,
          name: "load",
          handler: () => {
            vp(), ip(Up), Pp && Up.src && URL.revokeObjectURL(Up.src)
          }
        }), wp.push({
          target: Up,
          name: "error",
          handler: pp => {
            vp(), Wp(pp), Pp && Up.src && URL.revokeObjectURL(Up.src)
          }
        }), wp.push({
          target: document,
          name: "securitypolicyviolation",
          handler: pp => {
            if (pp.blockedURI !== Up.src || "Yy" === pp.disposition) return;
            vp();
            const ip = new Error(`CSP violation of policy ${pp.effectiveDirective} ${pp.blockedURI}. Current policy is ${pp.originalPolicy}`);
            Yp.e.UseFallbackTexture = !1, Wp(ip), Pp && Up.src && URL.revokeObjectURL(Up.src), Up.src = ""
          }
        }), (() => {
          for (const pp of wp) pp.target.addEventListener(pp.name, pp.handler)
        })();
        const tp = "blob:" === Ip.substring(0, 5),
          jp = "data:" === Ip.substring(0, 5),
          kp = () => {
            tp || jp || !Op.e.IsCustomRequestAvailable ? Up.src = Ip : mp(Ip, ((pp, ip, cp) => {
              const Op = new Blob([pp], {
                  type: !xp && cp ? cp : xp
                }),
                op = URL.createObjectURL(Op);
              Pp = !0, Up.src = op
            }), void 0, op || void 0, !0, ((pp, ip) => {
              Wp(ip)
            }))
          },
          Rp = () => {
            op && op.loadImage(Ip, Up)
          };
        if (!tp && !jp && op && op.enableTexturesOffline) op.open(Rp, kp);
        else {
          if (-1 !== Ip.indexOf("file:")) {
            const pp = decodeURIComponent(Ip.substring(5).toLowerCase());
            if (Sp.FilesToLoad[pp] && "undefined" !== typeof URL) {
              try {
                let ip;
                try {
                  ip = URL.createObjectURL(Sp.FilesToLoad[pp])
                } catch (qp) {
                  ip = URL.createObjectURL(Sp.FilesToLoad[pp])
                }
                Up.src = ip, Pp = !0
              } catch (Mp) {
                Up.src = ""
              }
              return Up
            }
          }
          kp()
        }
        return Up
      },
      kp = (pp, ip, cp, Op, op) => {
        const Sp = new FileReader,
          xp = {
            onCompleteObservable: new Ip.d,
            abort: () => Sp.abort()
          };
        return Sp.onloadend = () => xp.onCompleteObservable.notifyObservers(xp), op && (Sp.onerror = () => {
          op(new tp(`Unable to read ${pp.name}`, pp))
        }), Sp.onload = pp => {
          ip(pp.target.result)
        }, cp && (Sp.onprogress = cp), Op ? Sp.readAsArrayBuffer(pp) : Sp.readAsText(pp), xp
      },
      mp = (pp, ip, cp, Op, op, Lp, Yp) => {
        if (pp.name) return kp(pp, ip, cp, op, Lp ? pp => {
          Lp(void 0, pp)
        } : void 0);
        const Dp = pp;
        if (-1 !== Dp.indexOf("file:")) {
          let pp = decodeURIComponent(Dp.substring(5).toLowerCase());
          0 === pp.indexOf("./") && (pp = pp.substring(2));
          const Op = Sp.FilesToLoad[pp];
          if (Op) return kp(Op, ip, cp, op, Lp ? pp => Lp(void 0, new wp(pp.message, pp.file)) : void 0)
        }
        const {
          match: Ap,
          type: yp
        } = Ep(Dp);
        if (Ap) {
          const pp = {
            onCompleteObservable: new Ip.d,
            abort: () => () => {}
          };
          try {
            const pp = op ? Xp(Dp) : lp(Dp);
            ip(pp, void 0, yp)
          } catch (xp) {
            Lp ? Lp(void 0, xp) : Pp.e.Error(xp.message || "Failed to parse the Data URL")
          }
          return Wp.b.SetImmediate((() => {
            pp.onCompleteObservable.notifyObservers(pp)
          })), pp
        }
        return Rp(Dp, ((pp, cp) => {
          ip(pp, cp?.responseURL, cp?.getResponseHeader("content-type"))
        }), cp, Op, op, Lp ? pp => {
          Lp(pp.request, new wp(pp.message, pp.request))
        } : void 0, Yp)
      },
      Rp = (pp, ip, cp, Sp, xp, Lp, Dp) => {
        null !== Sp && (Sp ?? (Sp = Yp.e.LastCreatedScene?.offlineProvider)), pp = Hp.CleanUrl(pp), pp = Hp.PreprocessUrl(pp);
        const Ap = Hp.BaseUrl + pp;
        let Wp = !1;
        const yp = {
            onCompleteObservable: new Ip.d,
            abort: () => Wp = !0
          },
          Up = () => {
            let pp, Ip = new Op.e,
              Sp = null;
            const Yp = () => {
              Ip && (cp && Ip.removeEventListener("progress", cp), pp && Ip.removeEventListener("readystatechange", pp), Ip.removeEventListener("loadend", Up))
            };
            let Up = () => {
              Yp(), yp.onCompleteObservable.notifyObservers(yp), yp.onCompleteObservable.clear(), cp = void 0, pp = null, Up = null, Lp = void 0, Dp = void 0, ip = void 0
            };
            yp.abort = () => {
              Wp = !0, Up && Up(), Ip && Ip.readyState !== (XMLHttpRequest.DONE || 4) && Ip.abort(), null !== Sp && (clearTimeout(Sp), Sp = null), Ip = null
            };
            const wp = pp => {
                const ip = pp.message || "Unknown error";
                Lp && Ip ? Lp(new vp(ip, Ip)) : Pp.e.Error(ip)
              },
              tp = Pp => {
                if (Ip) {
                  if (Ip.open("GET", Ap), Dp) try {
                    Dp(Ip)
                  } catch (yp) {
                    return void wp(yp)
                  }
                  xp && (Ip.responseType = "arraybuffer"), cp && Ip.addEventListener("progress", cp), Up && Ip.addEventListener("loadend", Up), pp = () => {
                    if (!Wp && Ip && Ip.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (pp && Ip.removeEventListener("readystatechange", pp), Ip.status >= 200 && Ip.status < 300 || 0 === Ip.status && (!(0, op.j)() || Mp())) {
                        const pp = xp ? Ip.response : Ip.responseText;
                        if (null !== pp) {
                          try {
                            ip && ip(pp, Ip)
                          } catch (yp) {
                            wp(yp)
                          }
                          return
                        }
                      }
                      const cp = Hp.DefaultRetryStrategy;
                      if (cp) {
                        const pp = cp(Ap, Ip, Pp);
                        if (-1 !== pp) return Yp(), Ip = new Op.e, void(Sp = setTimeout((() => tp(Pp + 1)), pp))
                      }
                      const Dp = new vp("Error status: " + Ip.status + " " + Ip.statusText + " - Unable to load " + Ap, Ip);
                      Lp && Lp(Dp)
                    }
                  }, Ip.addEventListener("readystatechange", pp), Ip.send()
                }
              };
            tp(0)
          };
        if (Sp && Sp.enableSceneOffline && !pp.startsWith("blob:")) {
          const Op = pp => {
              pp && pp.status > 400 ? Lp && Lp(pp) : Up()
            },
            op = () => {
              Sp && Sp.loadFile(Hp.BaseUrl + pp, (pp => {
                !Wp && ip && ip(pp), yp.onCompleteObservable.notifyObservers(yp)
              }), cp ? pp => {
                !Wp && cp && cp(pp)
              } : void 0, Op, xp)
            };
          Sp.open(op, Op)
        } else Up();
        return yp
      },
      qp = pp => {
        const {
          match: ip,
          type: cp
        } = Ep(pp);
        if (ip) return cp || void 0;
        const Op = pp.lastIndexOf(".");
        switch (pp.substring(Op + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "sE":
            return "model/gltf+json";
          case "jpg":
          case "jpeg":
            return "image/jpeg";
          case "png":
            return "image/png";
          case "webp":
            return "image/webp";
          case "ktx":
            return "image/ktx";
          case "ktx2":
            return "image/ktx2";
          case "avif":
            return "image/avif";
          default:
            return
        }
      },
      Mp = () => "undefined" !== typeof location && "file:" === location.protocol,
      Cp = pp => Up.test(pp),
      Ep = pp => {
        const ip = Up.exec(pp);
        if (null === ip || 0 === ip.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: ip[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function Xp(pp) {
      return (0, Lp.c)(pp.split(",")[1])
    }
    const lp = pp => (0, Lp.e)(pp.split(",")[1]);
    let Qp;
    const Jp = (pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp) => {
      Qp = {
        DecodeBase64UrlToBinary: pp,
        DecodeBase64UrlToString: ip,
        DefaultRetryStrategy: cp.DefaultRetryStrategy,
        BaseUrl: cp.BaseUrl,
        CorsBehavior: cp.CorsBehavior,
        PreprocessUrl: cp.PreprocessUrl,
        IsBase64DataUrl: Op,
        IsFileURL: op,
        LoadFile: Ip,
        LoadImage: Sp,
        ReadFile: xp,
        RequestFile: Lp,
        SetCorsBehavior: Yp
      }, Object.defineProperty(Qp, "DefaultRetryStrategy", {
        get: function() {
          return cp.DefaultRetryStrategy
        },
        set: function(pp) {
          cp.DefaultRetryStrategy = pp
        }
      }), Object.defineProperty(Qp, "BaseUrl", {
        get: function() {
          return cp.BaseUrl
        },
        set: function(pp) {
          cp.BaseUrl = pp
        }
      }), Object.defineProperty(Qp, "PreprocessUrl", {
        get: function() {
          return cp.PreprocessUrl
        },
        set: function(pp) {
          cp.PreprocessUrl = pp
        }
      }), Object.defineProperty(Qp, "CorsBehavior", {
        get: function() {
          return cp.CorsBehavior
        },
        set: function(pp) {
          cp.CorsBehavior = pp
        }
      })
    };
    let Bp = !1;

    function Np() {
      Bp || (Bp = !0, Jp(Xp, lp, Hp, Cp, Mp, mp, jp, kp, Rp, dp), Dp.c.loadFile = mp, Dp.c.loadImage = jp, Ap.k.loadFile = mp)
    }
  },
  40276: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => xp,
      f: () => Ip,
      h: () => Sp
    });
    let Op = null;

    function op() {
      if (Op) return Op;
      const pp = new ArrayBuffer(4),
        ip = new Float32Array(pp),
        cp = new Uint32Array(pp),
        op = new Uint32Array(512),
        Ip = new Uint32Array(512);
      for (let Op = 0; Op < 256; ++Op) {
        const pp = Op - 127;
        pp < -24 ? (op[Op] = 0, op[256 | Op] = 32768, Ip[Op] = 24, Ip[256 | Op] = 24) : pp < -14 ? (op[Op] = 1024 >> -pp - 14, op[256 | Op] = 1024 >> -pp - 14 | 32768, Ip[Op] = -pp - 1, Ip[256 | Op] = -pp - 1) : pp <= 15 ? (op[Op] = pp + 15 << 10, op[256 | Op] = pp + 15 << 10 | 32768, Ip[Op] = 13, Ip[256 | Op] = 13) : pp < 128 ? (op[Op] = 31744, op[256 | Op] = 64512, Ip[Op] = 24, Ip[256 | Op] = 24) : (op[Op] = 31744, op[256 | Op] = 64512, Ip[Op] = 13, Ip[256 | Op] = 13)
      }
      const Sp = new Uint32Array(2048),
        xp = new Uint32Array(64),
        Lp = new Uint32Array(64);
      for (let Op = 1; Op < 1024; ++Op) {
        let pp = Op << 13,
          ip = 0;
        for (; 0 === (8388608 & pp);) pp <<= 1, ip -= 8388608;
        pp &= -8388609, ip += 947912704, Sp[Op] = pp | ip
      }
      for (let Op = 1024; Op < 2048; ++Op) Sp[Op] = 939524096 + (Op - 1024 << 13);
      for (let Op = 1; Op < 31; ++Op) xp[Op] = Op << 23;
      xp[31] = 1199570944, xp[32] = 2147483648;
      for (let Op = 33; Op < 63; ++Op) xp[Op] = 2147483648 + (Op - 32 << 23);
      xp[63] = 3347054592;
      for (let Op = 1; Op < 64; ++Op) 32 !== Op && (Lp[Op] = 1024);
      return Op = {
        floatView: ip,
        uint32View: cp,
        baseTable: op,
        shiftTable: Ip,
        mantissaTable: Sp,
        exponentTable: xp,
        offsetTable: Lp
      }, Op
    }
    const Ip = 65504;

    function Sp(pp) {
      const ip = op();
      ip.floatView[0] = pp;
      const cp = ip.uint32View[0],
        Op = cp >> 23 & 511;
      return ip.baseTable[Op] + ((8388607 & cp) >> ip.shiftTable[Op])
    }

    function xp(pp) {
      const ip = op();
      return ip.uint32View[0] = ip.mantissaTable[ip.offsetTable[pp >> 10] + (1023 & pp)] + ip.exponentTable[pp >> 10], ip.floatView[0]
    }
  },
  40269: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ip,
      e: () => op,
      i: () => Op
    });
    const Op = pp => {
        const ip = ArrayBuffer.isView(pp) ? new Uint8Array(pp.buffer, pp.byteOffset, pp.byteLength) : new Uint8Array(pp);
        return "function" === typeof ip.toBase64 ? ip.toBase64() : function(pp) {
          const ip = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let cp, Op, op, Ip, Sp, xp, Lp, Yp = "",
            Dp = 0;
          for (; Dp < pp.length;) cp = pp[Dp++], Op = Dp < pp.length ? pp[Dp++] : Number.NaN, op = Dp < pp.length ? pp[Dp++] : Number.NaN, Ip = cp >> 2, Sp = (3 & cp) << 4 | Op >> 4, xp = (15 & Op) << 2 | op >> 6, Lp = 63 & op, isNaN(Op) ? xp = Lp = 64 : isNaN(op) && (Lp = 64), Yp += ip.charAt(Ip) + ip.charAt(Sp) + ip.charAt(xp) + ip.charAt(Lp);
          return Yp
        }(ip)
      },
      op = pp => atob(pp),
      Ip = pp => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(pp).buffer : function(pp) {
        const ip = op(pp),
          cp = ip.length,
          Op = new Uint8Array(new ArrayBuffer(cp));
        for (let op = 0; op < cp; op++) Op[op] = ip.charCodeAt(op);
        return Op.buffer
      }(pp)
  },
  40107: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => op,
      c: () => Sp
    });
    let Op = [];
    class op {
      static SetImmediate(pp) {
        0 === Op.length && setTimeout((() => {
          const pp = Op;
          Op = [];
          for (const ip of pp) ip()
        }), 1), Op.push(pp)
      }
    }

    function Ip(pp, ip, cp) {
      try {
        if (pp()) return ip(), !0
      } catch (Op) {
        return cp?.(Op), !0
      }
      return !1
    }
    const Sp = function(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        Sp = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && Ip(pp, ip, cp)) return null;
      const xp = setInterval((() => {
        Ip(pp, ip, cp) ? clearInterval(xp) : (op -= Op, op < 0 && (clearInterval(xp), cp?.(new Error("Operation timed out after maximum retries. " + (Sp || "")), !0)))
      }), Op);
      return () => clearInterval(xp)
    }
  },
  40261: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op
    });
    class Op {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(Op.CustomRequestHeaders).length > 0 || Op.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(pp) {
        return pp = (pp = pp.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(pp) {
        return Op.SkipRequestModificationForBabylonCDN && (pp.includes("preview.babylonjs.com") || pp.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(pp) {
        const ip = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (Op._ShouldSkipRequestModifications(pp)) return {
          url: pp,
          headers: ip
        };
        for (const op in Op.CustomRequestHeaders) {
          const pp = Op.CustomRequestHeaders[op];
          pp && (ip[op] = pp)
        }
        const cp = {
          setRequestHeader: (pp, cp) => {
            ip[pp] = cp
          }
        };
        for (const op of Op.CustomRequestModifiers) {
          if (Op._ShouldSkipRequestModifications(pp)) break;
          const ip = op(cp, pp);
          "string" === typeof ip && (pp = ip)
        }
        return {
          url: pp,
          headers: ip
        }
      }
      static async FetchAsync(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const cp = ip.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: op,
            headers: Ip
          } = Op._CollectCustomizations(Op._CleanUrl(pp), ip.headers ?? {});
          return await fetch(op, {
            method: cp,
            headers: Ip,
            body: ip.body ?? void 0
          })
        }
        return await new Promise(((op, Ip) => {
          const Sp = new Op;
          Sp.responseType = "arraybuffer", Sp.addEventListener("readystatechange", (() => {
            if (4 === Sp.readyState)
              if (Sp.status >= 200 && Sp.status < 300) {
                const pp = "undefined" !== typeof Headers ? new Headers : void 0,
                  ip = Sp.getResponseHeader("Content-Type");
                ip && pp && pp.set("Content-Type", ip), "undefined" !== typeof Response ? op(new Response(Sp.response, {
                  status: Sp.status,
                  statusText: Sp.statusText,
                  headers: pp
                })) : op({
                  ok: !0,
                  status: Sp.status,
                  statusText: Sp.statusText,
                  headers: {
                    get: pp => Sp.getResponseHeader(pp)
                  },
                  arrayBuffer: async () => await Promise.resolve(Sp.response)
                })
              } else Ip(new Error(`HTTP ${Sp.status} loading '${Sp.requestURL}': ${Sp.statusText}`))
          })), Sp.open(cp, pp, ip.headers), Sp.send(ip.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(pp) {
        this._xhr.onprogress = pp
      }
      get readyState() {
        return this._xhr.readyState
      }
      get status() {
        return this._xhr.status
      }
      get statusText() {
        return this._xhr.statusText
      }
      get response() {
        return this._xhr.response
      }
      get responseURL() {
        return this._xhr.responseURL
      }
      get responseText() {
        return this._xhr.responseText
      }
      get responseType() {
        return this._xhr.responseType
      }
      set responseType(pp) {
        this._xhr.responseType = pp
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(pp) {
        this._xhr.timeout = pp
      }
      addEventListener(pp, ip, cp) {
        this._xhr.addEventListener(pp, ip, cp)
      }
      removeEventListener(pp, ip, cp) {
        this._xhr.removeEventListener(pp, ip, cp)
      }
      abort() {
        this._xhr.abort()
      }
      send(pp) {
        this._xhr.send(pp)
      }
      open(pp, ip, cp) {
        const {
          url: op,
          headers: Ip
        } = Op._CollectCustomizations(ip, cp);
        this._requestURL = Op._CleanUrl(op), this._xhr.open(pp, this._requestURL, !0);
        for (const Op in Ip) this._xhr.setRequestHeader(Op, Ip[Op])
      }
      setRequestHeader(pp, ip) {
        this._xhr.setRequestHeader(pp, ip)
      }
      getResponseHeader(pp) {
        return this._xhr.getResponseHeader(pp)
      }
    }
    Op.CustomRequestHeaders = {}, Op.CustomRequestModifiers = new Array, Op.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);