export const id = 233;
export const ids = [233];
export const modules = {
  38540: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => ey,
      f: () => Ky,
      i: () => Py,
      l: () => qb,
      p: () => oy,
      s: () => cb,
      u: () => By
    });
    var Uy = Wy(37350),
      hy = Wy(38547);

    function fy(yb, bb, Wy, Uy) {
      switch (bb) {
        case 5120: {
          let bb = yb.getInt8(Wy);
          return Uy && (bb = Math.max(bb / 127, -1)), bb
        }
        case 5121: {
          let bb = yb.getUint8(Wy);
          return Uy && (bb /= 255), bb
        }
        case 5122: {
          let bb = yb.getInt16(Wy, !0);
          return Uy && (bb = Math.max(bb / 32767, -1)), bb
        }
        case 5123: {
          let bb = yb.getUint16(Wy, !0);
          return Uy && (bb /= 65535), bb
        }
        case 5131:
          return (0, hy.d)(yb.getUint16(Wy, !0));
        case 5124:
          return yb.getInt32(Wy, !0);
        case 5125:
          return yb.getUint32(Wy, !0);
        case 5126:
          return yb.getFloat32(Wy, !0);
        default:
          throw new Error(`Invalid component type ${bb}`)
      }
    }

    function Zy(yb, bb, Wy, Uy, fy) {
      switch (bb) {
        case 5120:
          Uy && (fy = Math.round(127 * fy)), yb.setInt8(Wy, fy);
          break;
        case 5121:
          Uy && (fy = Math.round(255 * fy)), yb.setUint8(Wy, fy);
          break;
        case 5122:
          Uy && (fy = Math.round(32767 * fy)), yb.setInt16(Wy, fy, !0);
          break;
        case 5123:
          Uy && (fy = Math.round(65535 * fy)), yb.setUint16(Wy, fy, !0);
          break;
        case 5131:
          yb.setUint16(Wy, (0, hy.k)(fy), !0);
          break;
        case 5124:
          yb.setInt32(Wy, fy, !0);
          break;
        case 5125:
          yb.setUint32(Wy, fy, !0);
          break;
        case 5126:
          yb.setFloat32(Wy, fy, !0);
          break;
        default:
          throw new Error(`Invalid component type ${bb}`)
      }
    }

    function cb(yb) {
      switch (yb) {
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
          throw new Error(`Invalid type '${yb}'`)
      }
    }

    function Py(yb, bb, Wy, Uy, hy, Py, oy, By) {
      const Ky = new Array(Uy),
        ey = new Array(Uy);
      if (yb instanceof Array) {
        let hy = bb / 4;
        const fy = Wy / 4;
        for (let bb = 0; bb < Py; bb += Uy) {
          for (let bb = 0; bb < Uy; bb++) Ky[bb] = ey[bb] = yb[hy + bb];
          By(ey, bb);
          for (let bb = 0; bb < Uy; bb++) Ky[bb] !== ey[bb] && (yb[hy + bb] = ey[bb]);
          hy += fy
        }
      } else {
        const qb = ArrayBuffer.isView(yb) ? new DataView(yb.buffer, yb.byteOffset, yb.byteLength) : new DataView(yb),
          sy = cb(hy);
        for (let yb = 0; yb < Py; yb += Uy) {
          for (let yb = 0, Wy = bb; yb < Uy; yb++, Wy += sy) Ky[yb] = ey[yb] = fy(qb, hy, Wy, oy);
          By(ey, yb);
          for (let yb = 0, Wy = bb; yb < Uy; yb++, Wy += sy) Ky[yb] !== ey[yb] && Zy(qb, hy, Wy, oy, ey[yb]);
          bb += Wy
        }
      }
    }

    function oy(yb, bb, Wy, hy, fy, Zy, oy, By) {
      const Ky = bb * cb(Wy),
        ey = oy * bb;
      if (5126 !== Wy || fy !== Ky) {
        const Uy = new Float32Array(ey);
        return Py(yb, hy, fy, bb, Wy, ey, Zy, ((yb, Wy) => {
          for (let hy = 0; hy < bb; hy++) Uy[Wy + hy] = yb[hy]
        })), Uy
      }
      if (!(yb instanceof Array || yb instanceof Float32Array) || 0 !== hy || yb.length !== ey) {
        if (yb instanceof Array) {
          const bb = hy / 4;
          return yb.slice(bb, bb + ey)
        }
        if (ArrayBuffer.isView(yb)) {
          const bb = yb.byteOffset + hy;
          return 0 !== (3 & bb) && (Uy.b.Warn("Float array must be aligned to 4-bytes border"), By = !0), By ? new Float32Array(yb.buffer.slice(bb, bb + ey * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(yb.buffer, bb, ey)
        }
        return new Float32Array(yb, hy, ey)
      }
      return By ? yb.slice() : yb
    }

    function By(yb, bb, Wy, hy, fy, Zy, oy) {
      const By = cb(Wy),
        Ky = function(yb) {
          switch (yb) {
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
              throw new Error(`Invalid component type '${yb}'`)
          }
        }(Wy),
        ey = Zy * bb;
      if (Array.isArray(yb)) {
        if (0 !== (3 & hy) || 0 !== (3 & fy)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const Uy = hy / 4,
          cb = fy / 4;
        if (Uy + (Zy - 1) * cb + bb > yb.length) throw new Error("Last accessed index is out of bounds.");
        if (cb < bb) throw new Error("Data stride cannot be smaller than the component size.");
        if (cb !== bb) {
          const Uy = new Ky(ey);
          return Py(yb, hy, fy, bb, Wy, ey, !1, ((yb, Wy) => {
            for (let hy = 0; hy < bb; hy++) Uy[Wy + hy] = yb[hy]
          })), Uy
        }
        return new Ky(yb.slice(Uy, Uy + ey))
      }
      let qb, sy = hy;
      ArrayBuffer.isView(yb) ? (qb = yb.buffer, sy += yb.byteOffset) : qb = yb;
      if (sy + (Zy - 1) * fy + bb * By > qb.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const Sy = bb * By;
      if (fy < Sy) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (fy !== Sy) {
        const yb = new Ky(ey),
          Wy = new Uint8Array(qb, sy),
          Uy = new Uint8Array(yb.buffer),
          hy = bb * By;
        for (let bb = 0, cb = 0, Py = 0; bb < Zy; bb++, cb += fy, Py += hy) Uy.set(Wy.subarray(cb, cb + hy), Py);
        return yb
      }
      return 1 !== By && 0 !== (sy & By - 1) && (Uy.b.Warn("Array must be aligned to border of element size. Data will be copied."), oy = !0), oy ? new Ky(qb.slice(sy, sy + ey * By)) : new Ky(qb, sy, ey)
    }

    function Ky(yb, bb, Wy, hy, fy, Zy, oy, By) {
      const Ky = bb * cb(Wy),
        ey = oy * bb;
      if (By.length !== ey) throw new Error("Output length is not valid");
      if (5126 === Wy && fy === Ky)
        if (yb instanceof Array) {
          const bb = hy / 4;
          By.set(yb, bb)
        } else if (ArrayBuffer.isView(yb)) {
        const bb = yb.byteOffset + hy;
        if (0 !== (3 & bb)) return Uy.b.Warn("Float array must be aligned to 4-bytes border"), void By.set(new Float32Array(yb.buffer.slice(bb, bb + ey * Float32Array.BYTES_PER_ELEMENT)));
        const Wy = new Float32Array(yb.buffer, bb, ey);
        By.set(Wy)
      } else {
        const bb = new Float32Array(yb, hy, ey);
        By.set(bb)
      } else Py(yb, hy, fy, bb, Wy, ey, Zy, ((yb, Wy) => {
        for (let Uy = 0; Uy < bb; Uy++) By[Wy + Uy] = yb[Uy]
      }))
    }

    function ey(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(yb)) {
        for (let hy = 0; hy < bb; hy++)
          if (yb[Wy + hy] - Uy > 65535) return !0;
        return !1
      }
      return 4 === yb.BYTES_PER_ELEMENT
    }

    function qb(yb) {
      const bb = yb.buffer;
      if (bb instanceof ArrayBuffer) return yb;
      const Wy = new ArrayBuffer(yb.byteLength);
      return new Uint8Array(Wy).set(new Uint8Array(bb, yb.byteOffset, yb.byteLength)), Wy
    }
  },
  38350: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Gy,
      c: () => Jy,
      g: () => gb,
      d: () => Xy,
      h: () => ny
    });
    class Uy {
      constructor() {
        this.children = []
      }
      isValid(yb) {
        return !0
      }
      process(yb, bb, Wy) {
        let Uy = "";
        if (this.line) {
          let Wy = this.line;
          const hy = bb.processor;
          if (hy) {
            hy.lineProcessor && (Wy = hy.lineProcessor(Wy, bb.isFragment, bb.processingContext));
            const Uy = bb.processor?.attributeKeywordName ?? "attribute",
              fy = bb.isFragment && bb.processor?.varyingFragmentKeywordName ? bb.processor?.varyingFragmentKeywordName : !bb.isFragment && bb.processor?.varyingVertexKeywordName ? bb.processor?.varyingVertexKeywordName : "varying";
            if (!bb.isFragment && hy.attributeProcessor && this.line.startsWith(Uy)) Wy = hy.attributeProcessor(this.line, yb, bb.processingContext);
            else if (hy.varyingProcessor && (hy.varyingCheck?.(this.line, bb.isFragment) || !hy.varyingCheck && this.line.startsWith(fy))) Wy = hy.varyingProcessor(this.line, bb.isFragment, yb, bb.processingContext);
            else if (hy.uniformProcessor && hy.uniformRegexp && hy.uniformRegexp.test(this.line)) bb.lookForClosingBracketForUniformBuffer || (Wy = hy.uniformProcessor(this.line, bb.isFragment, yb, bb.processingContext));
            else if (hy.uniformBufferProcessor && hy.uniformBufferRegexp && hy.uniformBufferRegexp.test(this.line)) bb.lookForClosingBracketForUniformBuffer || (Wy = hy.uniformBufferProcessor(this.line, bb.isFragment, bb.processingContext), bb.lookForClosingBracketForUniformBuffer = !0);
            else if (hy.textureProcessor && hy.textureRegexp && hy.textureRegexp.test(this.line)) Wy = hy.textureProcessor(this.line, bb.isFragment, yb, bb.processingContext);
            else if ((hy.uniformProcessor || hy.uniformBufferProcessor) && this.line.startsWith("uniform") && !bb.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? hy.uniformProcessor && (Wy = hy.uniformProcessor(this.line, bb.isFragment, yb, bb.processingContext)) : hy.uniformBufferProcessor && (Wy = hy.uniformBufferProcessor(this.line, bb.isFragment, bb.processingContext), bb.lookForClosingBracketForUniformBuffer = !0)
            }
            bb.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (bb.lookForClosingBracketForUniformBuffer = !1, hy.endOfUniformBufferProcessor && (Wy = hy.endOfUniformBufferProcessor(this.line, bb.isFragment, bb.processingContext)))
          }
          Uy += Wy + "\n"
        }
        for (const hy of this.children) Uy += hy.process(yb, bb, Wy);
        return this.additionalDefineKey && (yb[this.additionalDefineKey] = this.additionalDefineValue || "true", Wy[this.additionalDefineKey] = yb[this.additionalDefineKey]), Uy
      }
    }
    class hy {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(yb) {
        this._lines.length = 0;
        for (const bb of yb) {
          if (!bb || "\r" === bb) continue;
          if ("#" === bb[0]) {
            this._lines.push(bb);
            continue
          }
          const yb = bb.trim();
          if (!yb) continue;
          if (yb.startsWith("//")) {
            this._lines.push(bb);
            continue
          }
          const Wy = yb.indexOf(";");
          if (-1 === Wy) this._lines.push(yb);
          else if (Wy === yb.length - 1) yb.length > 1 && this._lines.push(yb);
          else {
            const yb = bb.split(";");
            for (let bb = 0; bb < yb.length; bb++) {
              let Wy = yb[bb];
              Wy && (Wy = Wy.trim(), Wy && this._lines.push(Wy + (bb !== yb.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class fy extends Uy {
      process(yb, bb, Wy) {
        for (let Uy = 0; Uy < this.children.length; Uy++) {
          const hy = this.children[Uy];
          if (hy.isValid(yb)) return hy.process(yb, bb, Wy)
        }
        return ""
      }
    }
    class Zy extends Uy {
      isValid(yb) {
        return this.testExpression.isTrue(yb)
      }
    }
    class cb {
      isTrue(yb) {
        return !0
      }
      static postfixToInfix(yb) {
        const bb = [];
        for (const Wy of yb)
          if (void 0 === cb._OperatorPriority[Wy]) bb.push(Wy);
          else {
            const yb = bb[bb.length - 1],
              Uy = bb[bb.length - 2];
            bb.length -= 2, bb.push(`(${Uy}${Wy}${yb})`)
          } return bb[bb.length - 1]
      }
      static infixToPostfix(yb) {
        const bb = cb._InfixToPostfixCache.get(yb);
        if (bb) return bb.accessTime = Date.now(), bb.result;
        if (!yb.includes("&&") && !yb.includes("||") && !yb.includes(")") && !yb.includes("(")) return [yb];
        const Wy = [];
        let Uy = -1;
        const hy = () => {
            By = By.trim(), "" !== By && (Wy.push(By), By = "")
          },
          fy = yb => {
            Uy < cb._Stack.length - 1 && (cb._Stack[++Uy] = yb)
          },
          Zy = () => cb._Stack[Uy],
          Py = () => -1 === Uy ? "!!INVALID EXPRESSION!!" : cb._Stack[Uy--];
        let oy = 0,
          By = "";
        for (; oy < yb.length;) {
          const bb = yb.charAt(oy),
            Ky = oy < yb.length - 1 ? yb.substring(oy, 2 + oy) : "";
          if ("(" === bb) By = "", fy(bb);
          else if (")" === bb) {
            for (hy(); - 1 !== Uy && "(" !== Zy();) Wy.push(Py());
            Py()
          } else if (cb._OperatorPriority[Ky] > 1) {
            for (hy(); - 1 !== Uy && cb._OperatorPriority[Zy()] >= cb._OperatorPriority[Ky];) Wy.push(Py());
            fy(Ky), oy++
          } else By += bb;
          oy++
        }
        for (hy(); - 1 !== Uy;) "(" === Zy() ? Py() : Wy.push(Py());
        return cb._InfixToPostfixCache.size >= cb.InfixToPostfixCacheLimitSize && cb.ClearCache(), cb._InfixToPostfixCache.set(yb, {
          result: Wy,
          accessTime: Date.now()
        }), Wy
      }
      static ClearCache() {
        const yb = Array.from(cb._InfixToPostfixCache.entries()).sort(((yb, bb) => yb[1].accessTime - bb[1].accessTime));
        for (let bb = 0; bb < cb.InfixToPostfixCacheCleanupSize; bb++) cb._InfixToPostfixCache.delete(yb[bb][0])
      }
    }
    cb.InfixToPostfixCacheLimitSize = 5e4, cb.InfixToPostfixCacheCleanupSize = 25e3, cb._InfixToPostfixCache = new Map, cb._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, cb._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class Py extends cb {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = yb, this.not = bb
      }
      isTrue(yb) {
        let bb = void 0 !== yb[this.define];
        return this.not && (bb = !bb), bb
      }
    }
    class oy extends cb {
      isTrue(yb) {
        return this.leftOperand.isTrue(yb) || this.rightOperand.isTrue(yb)
      }
    }
    class By extends cb {
      isTrue(yb) {
        return this.leftOperand.isTrue(yb) && this.rightOperand.isTrue(yb)
      }
    }
    class Ky extends cb {
      constructor(yb, bb, Wy) {
        super(), this.define = yb, this.operand = bb, this.testValue = Wy
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(yb) {
        let bb = !1;
        const Wy = parseInt(void 0 != yb[this.define] ? yb[this.define] : this.define),
          Uy = parseInt(void 0 != yb[this.testValue] ? yb[this.testValue] : this.testValue);
        if (isNaN(Wy) || isNaN(Uy)) return !1;
        switch (this.operand) {
          case ">":
            bb = Wy > Uy;
            break;
          case "<":
            bb = Wy < Uy;
            break;
          case "<=":
            bb = Wy <= Uy;
            break;
          case ">=":
            bb = Wy >= Uy;
            break;
          case "==":
            bb = Wy === Uy;
            break;
          case "!=":
            bb = Wy !== Uy
        }
        return bb
      }
    }
    var ey = Wy(38347),
      qb = Wy(38338);
    const sy = /defined\s*?\((.+?)\)/g,
      Sy = /defined\s*?\[(.+?)\]/g,
      Ey = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      ly = /__decl__/,
      mb = /light\{X\}.(\w*)/g,
      Cy = /\{X\}/g,
      Ty = [],
      Vy = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function Jy(yb) {
      yb.processor && yb.processor.initializeShaders && yb.processor.initializeShaders(yb.processingContext)
    }

    function gb(yb, bb, Wy, Uy) {
      bb.processor?.preProcessShaderCode && (yb = bb.processor.preProcessShaderCode(yb, bb.isFragment)), Xy(yb, bb, (yb => {
        bb.processCodeAfterIncludes && (yb = bb.processCodeAfterIncludes(bb.isFragment ? "fragment" : "vertex", yb, bb.defines));
        const hy = function(yb, bb, Wy) {
          let Uy = function(yb, bb) {
            if (bb.processor?.noPrecision) return yb;
            const Wy = bb.shouldUseHighPrecisionShader; - 1 === yb.indexOf("precision highp float") ? yb = Wy ? "precision highp float;\n" + yb : "precision mediump float;\n" + yb : Wy || (yb = yb.replace("precision highp float", "precision mediump float"));
            return yb
          }(yb, bb);
          if (!bb.processor) return Uy;
          if (0 === bb.processor.shaderLanguage && -1 !== Uy.indexOf("#version 3") && (Uy = Uy.replace("#version 300 es", ""), !bb.processor.parseGLES3)) return Uy;
          const hy = bb.defines,
            fy = Yy(bb, Wy);
          bb.processor.preProcessor && (Uy = bb.processor.preProcessor(Uy, hy, fy, bb.isFragment, bb.processingContext));
          const Zy = {};
          Uy = My(Uy, fy, bb, Zy), bb.processor.postProcessor && (Uy = bb.processor.postProcessor(Uy, hy, bb.isFragment, bb.processingContext, Wy ? {
            drawBuffersExtensionDisabled: !Wy.getCaps().drawBuffersExtension
          } : {}, fy, Zy));
          Wy?._features.needShaderCodeInlining && (Uy = Wy.inlineShaderCode(Uy));
          return Uy
        }(yb, bb, Uy);
        Wy(hy, yb)
      }))
    }

    function Gy(yb, bb, Wy) {
      return Wy.processor && Wy.processor.finalizeShaders ? Wy.processor.finalizeShaders(yb, bb, Wy.processingContext) : {
        vertexCode: yb,
        fragmentCode: bb
      }
    }

    function Oy(yb) {
      const bb = /defined\((.+)\)/.exec(yb);
      if (bb && bb.length) return new Py(bb[1].trim(), "!" === yb[0]);
      const Wy = ["==", "!=", ">=", "<=", "<", ">"];
      let Uy = "",
        hy = 0;
      for (Uy of Wy)
        if (hy = yb.indexOf(Uy), hy > -1) break;
      if (-1 === hy) return new Py(yb);
      const fy = yb.substring(0, hy).trim(),
        Zy = yb.substring(hy + Uy.length).trim();
      return new Ky(fy, Uy, Zy)
    }

    function Ry(yb, bb) {
      const Wy = new Zy,
        Uy = yb.substring(0, bb);
      let hy = yb.substring(bb);
      return hy = hy.substring(0, (hy.indexOf("//") + 1 || hy.length + 1) - 1).trim(), Wy.testExpression = "#ifdef" === Uy ? new Py(hy) : "#ifndef" === Uy ? new Py(hy, !0) : function(yb) {
        yb = yb.replace(sy, "defined[$1]");
        const bb = cb.infixToPostfix(yb),
          Wy = [];
        for (const hy of bb)
          if ("||" !== hy && "&&" !== hy) Wy.push(hy);
          else if (Wy.length >= 2) {
          let yb = Wy[Wy.length - 1],
            bb = Wy[Wy.length - 2];
          Wy.length -= 2;
          const Uy = "&&" == hy ? new By : new oy;
          "string" === typeof yb && (yb = yb.replace(Sy, "defined($1)")), "string" === typeof bb && (bb = bb.replace(Sy, "defined($1)")), Uy.leftOperand = "string" === typeof bb ? Oy(bb) : bb, Uy.rightOperand = "string" === typeof yb ? Oy(yb) : yb, Wy.push(Uy)
        }
        let Uy = Wy[Wy.length - 1];
        return "string" === typeof Uy && (Uy = Uy.replace(Sy, "defined($1)")), "string" === typeof Uy ? Oy(Uy) : Uy
      }(hy), Wy
    }

    function vb(yb, bb, Wy, hy) {
      let fy;
      for (; ib(yb, Wy, hy);) {
        fy = yb.currentLine;
        const Zy = fy.substring(0, 5).toLowerCase();
        if ("#else" === Zy) {
          const Wy = new Uy;
          return bb.children.push(Wy), void ib(yb, Wy, hy)
        }
        if ("#elif" === Zy) {
          const yb = Ry(fy, 5);
          bb.children.push(yb), Wy = yb
        }
      }
    }

    function ib(yb, bb, Wy) {
      for (; yb.canRead;) {
        yb.lineIndex++;
        const hy = yb.currentLine;
        if (hy.indexOf("#") >= 0) {
          const Uy = Vy.exec(hy);
          if (Uy && Uy.length) {
            switch (Uy[0]) {
              case "#ifdef": {
                const Uy = new fy;
                bb.children.push(Uy);
                const Zy = Ry(hy, 6);
                Uy.children.push(Zy), vb(yb, Uy, Zy, Wy);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const Uy = new fy;
                bb.children.push(Uy);
                const Zy = Ry(hy, 7);
                Uy.children.push(Zy), vb(yb, Uy, Zy, Wy);
                break
              }
              case "#if": {
                const Uy = new fy,
                  Zy = Ry(hy, 3);
                bb.children.push(Uy), Uy.children.push(Zy), vb(yb, Uy, Zy, Wy);
                break
              }
            }
            continue
          }
        }
        const Zy = new Uy;
        if (Zy.line = hy, bb.children.push(Zy), "#" === hy[0] && "d" === hy[1]) {
          const yb = hy.replace(";", "").split(" ");
          Zy.additionalDefineKey = yb[1], 3 === yb.length && (Zy.additionalDefineValue = yb[2])
        }
      }
      return !1
    }

    function My(yb, bb, Wy, fy) {
      const Zy = new Uy,
        cb = new hy;
      return cb.lineIndex = -1, cb.lines = yb.split("\n"), ib(cb, Zy, fy), Zy.process(bb, Wy, fy)
    }

    function Yy(yb, bb) {
      const Wy = yb.defines,
        Uy = {};
      for (const hy of Wy) {
        const yb = hy.replace("#define", "").replace(";", "").trim().split(" ");
        Uy[yb[0]] = yb.length > 1 ? yb[1] : ""
      }
      return 0 === yb.processor?.shaderLanguage && (Uy.GL_ES = "true"), Uy.__VERSION__ = yb.version, Uy[yb.platformName] = "true", (0, qb.h)(Uy, bb?.isNDCHalfZRange, bb?.Aoy, bb?.useExactSrgbConversions), Uy
    }

    function Xy(yb, bb, Wy) {
      let Uy;
      for (Ty.length = 0; null !== (Uy = Ey.exec(yb));) Ty.push(Uy);
      let hy = [yb],
        fy = !1;
      for (const cb of Ty) {
        let yb = cb[1];
        if (-1 !== yb.indexOf("__decl__") && (yb = yb.replace(ly, ""), bb.supportsUniformBuffers && (yb = yb.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), yb += "Declaration"), !bb.includesShadersStore[yb]) {
          const Uy = bb.shadersRepository + "ShadersInclude/" + yb + ".fx";
          return void ny.loadFile(Uy, (Uy => {
            bb.includesShadersStore[yb] = Uy, Xy(hy.join(""), bb, Wy)
          }))
        } {
          let Wy = bb.includesShadersStore[yb];
          if (cb[2]) {
            const yb = cb[3].split(",");
            for (let bb = 0; bb < yb.length; bb += 2) {
              const Uy = new RegExp(yb[bb], "g"),
                hy = yb[bb + 1];
              Wy = Wy.replace(Uy, hy)
            }
          }
          if (cb[4]) {
            const yb = cb[5];
            if (-1 !== yb.indexOf("..")) {
              const Uy = yb.split(".."),
                hy = parseInt(Uy[0]);
              let fy = parseInt(Uy[1]),
                Zy = Wy.slice(0);
              Wy = "", isNaN(fy) && (fy = bb.indexParameters[Uy[1]]);
              for (let yb = hy; yb < fy; yb++) bb.supportsUniformBuffers || (Zy = Zy.replace(mb, ((yb, bb) => bb + "{X}"))), Wy += Zy.replace(Cy, yb.toString()) + "\n"
            } else bb.supportsUniformBuffers || (Wy = Wy.replace(mb, ((yb, bb) => bb + "{X}"))), Wy = Wy.replace(Cy, yb)
          }
          const Uy = [];
          for (const yb of hy) {
            const bb = yb.split(cb[0]);
            for (let yb = 0; yb < bb.length - 1; yb++) Uy.push(bb[yb]), Uy.push(Wy);
            Uy.push(bb[bb.length - 1])
          }
          hy = Uy, fy = fy || Wy.indexOf("#include<") >= 0 || Wy.indexOf("#include <") >= 0
        }
      }
      Ty.length = 0;
      const Zy = hy.join("");
      fy ? Xy(Zy.toString(), bb, Wy) : Wy(Zy)
    }
    const ny = {
      loadFile: (yb, bb, Wy, Uy, hy, fy) => {
        throw (0, ey.g)("FileTools")
      }
    }
  },
  38338: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy,
      d: () => fy,
      h: () => cb,
      j: () => Zy,
      l: () => Py
    });
    var Uy = Wy(38347);
    const hy = {};

    function fy(yb, bb) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (bb ? bb + "\n" : "") + yb
    }

    function Zy(yb, bb, Wy, fy, Zy, cb, Py) {
      const oy = Py || hy.loadFile;
      if (!oy) throw (0, Uy.g)("FileTools");
      return oy(yb, bb, Wy, fy, Zy, cb)
    }

    function cb(yb, bb, Wy, Uy) {
      if (yb) return bb ? yb.IS_NDC_HALF_ZRANGE = "" : delete yb.IS_NDC_HALF_ZRANGE, Wy ? yb.USE_REVERSE_DEPTHBUFFER = "" : delete yb.USE_REVERSE_DEPTHBUFFER, void(Uy ? yb.USE_EXACT_SRGB_CONVERSIONS = "" : delete yb.USE_EXACT_SRGB_CONVERSIONS);
      {
        let yb = "";
        return bb && (yb += "#define IS_NDC_HALF_ZRANGE"), Wy && (yb && (yb += "\n"), yb += "#define USE_REVERSE_DEPTHBUFFER"), Uy && (yb && (yb += "\n"), yb += "#define USE_EXACT_SRGB_CONVERSIONS"), yb
      }
    }

    function Py(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Uy = arguments.length > 3 ? arguments[3] : void 0;
      switch (yb) {
        case 3: {
          const yb = new Int8Array(bb);
          return Uy && yb.set(new Int8Array(Uy)), yb
        }
        case 0: {
          const yb = new Uint8Array(bb);
          return Uy && yb.set(new Uint8Array(Uy)), yb
        }
        case 4: {
          const yb = "number" !== typeof bb ? new Int16Array(bb) : new Int16Array(Wy ? bb / 2 : bb);
          return Uy && yb.set(new Int16Array(Uy)), yb
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const yb = "number" !== typeof bb ? new Uint16Array(bb) : new Uint16Array(Wy ? bb / 2 : bb);
          return Uy && yb.set(new Uint16Array(Uy)), yb
        }
        case 6: {
          const yb = "number" !== typeof bb ? new Int32Array(bb) : new Int32Array(Wy ? bb / 4 : bb);
          return Uy && yb.set(new Int32Array(Uy)), yb
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const yb = "number" !== typeof bb ? new Uint32Array(bb) : new Uint32Array(Wy ? bb / 4 : bb);
          return Uy && yb.set(new Uint32Array(Uy)), yb
        }
        case 1: {
          const yb = "number" !== typeof bb ? new Float32Array(bb) : new Float32Array(Wy ? bb / 4 : bb);
          return Uy && yb.set(new Float32Array(Uy)), yb
        }
      }
      const hy = new Uint8Array(bb);
      return Uy && hy.set(new Uint8Array(Uy)), hy
    }
  },
  38347: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => oy,
      e: () => By,
      f: () => Py,
      g: () => hy
    });
    const Uy = {};

    function hy(yb) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !Uy[yb]) return Uy[yb] = !0, `${yb} needs to be imported before as it contains a side-effect required by your code.`
    }
    const fy = {};
    let Zy = !1,
      cb = 0;

    function Py(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Uy = function() {
        if ((Wy || Zy) && 0 === cb) {
          const Wy = `${yb}.${bb}`;
          fy[Wy] || (fy[Wy] = !0, console.warn(`[Babylon.js] ${Wy}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return Uy.__isSideEffectStub = !0, Uy
    }

    function oy(yb) {
      return !!yb && !yb.__isSideEffectStub
    }

    function By(yb, bb) {
      return {
        get() {},
        set(yb) {
          Object.defineProperty(this, bb, {
            value: yb,
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
  38325: (yb, bb, Wy) => {
    function Uy() {
      return "undefined" !== typeof window
    }

    function hy() {
      return "undefined" !== typeof navigator
    }

    function fy() {
      return "undefined" !== typeof document
    }

    function Zy(yb) {
      let bb = "",
        Wy = yb.firstChild;
      for (; Wy;) 3 === Wy.nodeType && (bb += Wy.textContent), Wy = Wy.nextSibling;
      return bb
    }
    Wy.d(bb, {
      d: () => Zy,
      f: () => fy,
      h: () => hy,
      i: () => Uy
    })
  },
  38525: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Uy,
      g: () => hy,
      j: () => fy
    });
    class Uy extends Error {}
    Uy._setPrototypeOf = Object.setPrototypeOf || ((yb, bb) => (yb.__proto__ = bb, yb));
    const hy = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class fy extends Uy {
      constructor(yb, bb, Wy) {
        super(yb), this.errorCode = bb, this.innerError = Wy, this.name = "RuntimeError", Uy._setPrototypeOf(this, fy.prototype)
      }
    }
  },
  38511: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Yy,
      i: () => Cy,
      m: () => Ry,
      q: () => ib,
      t: () => Gy,
      x: () => Jy,
      A: () => gb,
      D: () => Hy,
      H: () => Oy,
      K: () => Ty
    });
    var Uy = Wy(38516),
      hy = Wy(38325),
      fy = Wy(35893);
    class Zy {}
    Zy.FilesToLoad = {};
    var cb = Wy(38525),
      Py = Wy(38532),
      oy = Wy(35886),
      By = Wy(38338),
      Ky = Wy(38350),
      ey = Wy(37350),
      qb = Wy(38354),
      sy = Wy(38540);
    const Sy = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class Ey extends cb.j {
      constructor(yb, bb) {
        super(yb, cb.g.LoadFileError), this.name = "LoadFileError", cb.e._setPrototypeOf(this, Ey.prototype), bb instanceof Uy.c ? this.request = bb : this.file = bb
      }
    }
    class ly extends cb.j {
      constructor(yb, bb) {
        super(yb, cb.g.RequestFileError), this.request = bb, this.name = "RequestFileError", cb.e._setPrototypeOf(this, ly.prototype)
      }
    }
    class mb extends cb.j {
      constructor(yb, bb) {
        super(yb, cb.g.ReadFileError), this.file = bb, this.name = "ReadFileError", cb.e._setPrototypeOf(this, mb.prototype)
      }
    }
    const Cy = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (Wy, Uy, hy) => 0 !== Uy.status || hy >= yb || -1 !== Wy.indexOf("file:") ? -1 : Math.pow(2, hy) * bb
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: yb => yb,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: yb => yb,
        CleanUrl: yb => yb = yb.replace(/#/gm, "%23")
      },
      Ty = (yb, bb) => {
        if ((!yb || 0 !== yb.indexOf("data:")) && Cy.CorsBehavior)
          if ("string" === typeof Cy.CorsBehavior || Cy.CorsBehavior instanceof String) bb.crossOrigin = Cy.CorsBehavior;
          else {
            const Wy = Cy.CorsBehavior(yb);
            Wy && (bb.crossOrigin = Wy)
          }
      },
      Vy = {
        getRequiredSize: null
      },
      Jy = function(yb, bb, Wy, hy) {
        let fy, cb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          By = arguments.length > 5 ? arguments[5] : void 0,
          Ky = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : oy.c.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !Ky?._features.forceBitmapOverHTMLImageElement) return Wy("LoadImage is only supported in web or BabylonNative environments."), null;
        if (Ky?._features.forceBitmapOverHTMLImageElement && "string" !== typeof yb && "undefined" !== typeof Blob) {
          let Uy;
          if (yb instanceof Blob) Uy = yb;
          else {
            const bb = yb instanceof ArrayBuffer ? yb : (0, sy.l)(yb);
            Uy = new Blob([bb], {
              type: cb
            })
          }
          return Ky.createImageBitmap(Uy, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...By
          }).then(bb).catch((bb => {
            Wy && Wy("Error while trying to load image: " + yb, bb)
          })), null
        }
        let ey = !1;
        if (yb instanceof ArrayBuffer || ArrayBuffer.isView(yb))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let bb;
            bb = yb instanceof ArrayBuffer ? yb : (0, sy.l)(yb), fy = URL.createObjectURL(new Blob([bb], {
              type: cb
            })), ey = !0
          } else fy = `data:${cb};base64,` + (0, Py.k)(yb);
        else yb instanceof Blob ? (fy = URL.createObjectURL(yb), ey = !0) : (fy = Cy.CleanUrl(yb), fy = Cy.PreprocessUrl(fy));
        const qb = bb => {
          if (Wy) {
            const Uy = fy || yb.toString();
            Wy(`Error while trying to load image: ${0===Uy.indexOf("http")||Uy.length<=128?Uy:Uy.slice(0,128)+"..."}`, bb)
          }
        };
        if (Ky?._features.forceBitmapOverHTMLImageElement) return Gy(fy, (Uy => {
          Ky.createImageBitmap(new Blob([Uy], {
            type: cb
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...By
          }).then((yb => {
            bb(yb), ey && URL.revokeObjectURL(fy)
          })).catch((bb => {
            Wy && Wy("Error while trying to load image: " + yb, bb)
          }))
        }), void 0, hy || void 0, !0, ((yb, bb) => {
          qb(bb)
        })), null;
        const Sy = new Image;
        if (Vy.getRequiredSize) {
          const bb = Vy.getRequiredSize(yb);
          bb.width && (Sy.width = bb.width), bb.height && (Sy.height = bb.height)
        }
        Ty(fy, Sy);
        const Ey = [],
          ly = () => {
            for (const yb of Ey) yb.target.removeEventListener(yb.name, yb.handler);
            Ey.length = 0
          };
        Ey.push({
          target: Sy,
          name: "load",
          handler: () => {
            ly(), bb(Sy), ey && Sy.src && URL.revokeObjectURL(Sy.src)
          }
        }), Ey.push({
          target: Sy,
          name: "error",
          handler: yb => {
            ly(), qb(yb), ey && Sy.src && URL.revokeObjectURL(Sy.src)
          }
        }), Ey.push({
          target: document,
          name: "securitypolicyviolation",
          handler: yb => {
            if (yb.blockedURI !== Sy.src || "KU" === yb.disposition) return;
            ly();
            const bb = new Error(`CSP violation of policy ${yb.effectiveDirective} ${yb.blockedURI}. Current policy is ${yb.originalPolicy}`);
            oy.c.UseFallbackTexture = !1, qb(bb), ey && Sy.src && URL.revokeObjectURL(Sy.src), Sy.src = ""
          }
        }), (() => {
          for (const yb of Ey) yb.target.addEventListener(yb.name, yb.handler)
        })();
        const mb = "blob:" === fy.substring(0, 5),
          Jy = "data:" === fy.substring(0, 5),
          gb = () => {
            mb || Jy || !Uy.c.IsCustomRequestAvailable ? Sy.src = fy : Gy(fy, ((yb, bb, Wy) => {
              const Uy = new Blob([yb], {
                  type: !cb && Wy ? Wy : cb
                }),
                hy = URL.createObjectURL(Uy);
              ey = !0, Sy.src = hy
            }), void 0, hy || void 0, !0, ((yb, bb) => {
              qb(bb)
            }))
          },
          Oy = () => {
            hy && hy.loadImage(fy, Sy)
          };
        if (!mb && !Jy && hy && hy.enableTexturesOffline) hy.open(Oy, gb);
        else {
          if (-1 !== fy.indexOf("file:")) {
            const yb = decodeURIComponent(fy.substring(5).toLowerCase());
            if (Zy.FilesToLoad[yb] && "undefined" !== typeof URL) {
              try {
                let bb;
                try {
                  bb = URL.createObjectURL(Zy.FilesToLoad[yb])
                } catch (Ry) {
                  bb = URL.createObjectURL(Zy.FilesToLoad[yb])
                }
                Sy.src = bb, ey = !0
              } catch (vb) {
                Sy.src = ""
              }
              return Sy
            }
          }
          gb()
        }
        return Sy
      },
      gb = (yb, bb, Wy, Uy, hy) => {
        const Zy = new FileReader,
          cb = {
            onCompleteObservable: new fy.c,
            abort: () => Zy.abort()
          };
        return Zy.onloadend = () => cb.onCompleteObservable.notifyObservers(cb), hy && (Zy.onerror = () => {
          hy(new mb(`Unable to read ${yb.name}`, yb))
        }), Zy.onload = yb => {
          bb(yb.target.result)
        }, Wy && (Zy.onprogress = Wy), Uy ? Zy.readAsArrayBuffer(yb) : Zy.readAsText(yb), cb
      },
      Gy = (yb, bb, Wy, Uy, hy, Py, oy) => {
        if (yb.name) return gb(yb, bb, Wy, hy, Py ? yb => {
          Py(void 0, yb)
        } : void 0);
        const By = yb;
        if (-1 !== By.indexOf("file:")) {
          let yb = decodeURIComponent(By.substring(5).toLowerCase());
          0 === yb.indexOf("./") && (yb = yb.substring(2));
          const Uy = Zy.FilesToLoad[yb];
          if (Uy) return gb(Uy, bb, Wy, hy, Py ? yb => Py(void 0, new Ey(yb.message, yb.file)) : void 0)
        }
        const {
          match: Ky,
          type: sy
        } = My(By);
        if (Ky) {
          const yb = {
            onCompleteObservable: new fy.c,
            abort: () => () => {}
          };
          try {
            const yb = hy ? Yy(By) : Xy(By);
            bb(yb, void 0, sy)
          } catch (cb) {
            Py ? Py(void 0, cb) : ey.b.Error(cb.message || "Failed to parse the Data URL")
          }
          return qb.b.SetImmediate((() => {
            yb.onCompleteObservable.notifyObservers(yb)
          })), yb
        }
        return Oy(By, ((yb, Wy) => {
          bb(yb, Wy?.responseURL, Wy?.getResponseHeader("content-type"))
        }), Wy, Uy, hy, Py ? yb => {
          Py(yb.request, new Ey(yb.message, yb.request))
        } : void 0, oy)
      },
      Oy = (yb, bb, Wy, Zy, cb, Py, By) => {
        null !== Zy && (Zy ?? (Zy = oy.c.LastCreatedScene?.offlineProvider)), yb = Cy.CleanUrl(yb), yb = Cy.PreprocessUrl(yb);
        const Ky = Cy.BaseUrl + yb;
        let qb = !1;
        const sy = {
            onCompleteObservable: new fy.c,
            abort: () => qb = !0
          },
          Sy = () => {
            let yb, fy = new Uy.c,
              Zy = null;
            const oy = () => {
              fy && (Wy && fy.removeEventListener("progress", Wy), yb && fy.removeEventListener("readystatechange", yb), fy.removeEventListener("loadend", Sy))
            };
            let Sy = () => {
              oy(), sy.onCompleteObservable.notifyObservers(sy), sy.onCompleteObservable.clear(), Wy = void 0, yb = null, Sy = null, Py = void 0, By = void 0, bb = void 0
            };
            sy.abort = () => {
              qb = !0, Sy && Sy(), fy && fy.readyState !== (XMLHttpRequest.DONE || 4) && fy.abort(), null !== Zy && (clearTimeout(Zy), Zy = null), fy = null
            };
            const Ey = yb => {
                const bb = yb.message || "Unknown error";
                Py && fy ? Py(new ly(bb, fy)) : ey.b.Error(bb)
              },
              mb = ey => {
                if (fy) {
                  if (fy.open("GET", Ky), By) try {
                    By(fy)
                  } catch (sy) {
                    return void Ey(sy)
                  }
                  cb && (fy.responseType = "arraybuffer"), Wy && fy.addEventListener("progress", Wy), Sy && fy.addEventListener("loadend", Sy), yb = () => {
                    if (!qb && fy && fy.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (yb && fy.removeEventListener("readystatechange", yb), fy.status >= 200 && fy.status < 300 || 0 === fy.status && (!(0, hy.i)() || vb())) {
                        const yb = cb ? fy.response : fy.responseText;
                        if (null !== yb) {
                          try {
                            bb && bb(yb, fy)
                          } catch (sy) {
                            Ey(sy)
                          }
                          return
                        }
                      }
                      const Wy = Cy.DefaultRetryStrategy;
                      if (Wy) {
                        const yb = Wy(Ky, fy, ey);
                        if (-1 !== yb) return oy(), fy = new Uy.c, void(Zy = setTimeout((() => mb(ey + 1)), yb))
                      }
                      const By = new ly("Error status: " + fy.status + " " + fy.statusText + " - Unable to load " + Ky, fy);
                      Py && Py(By)
                    }
                  }, fy.addEventListener("readystatechange", yb), fy.send()
                }
              };
            mb(0)
          };
        if (Zy && Zy.enableSceneOffline && !yb.startsWith("blob:")) {
          const Uy = yb => {
              yb && yb.status > 400 ? Py && Py(yb) : Sy()
            },
            hy = () => {
              Zy && Zy.loadFile(Cy.BaseUrl + yb, (yb => {
                !qb && bb && bb(yb), sy.onCompleteObservable.notifyObservers(sy)
              }), Wy ? yb => {
                !qb && Wy && Wy(yb)
              } : void 0, Uy, cb)
            };
          Zy.open(hy, Uy)
        } else Sy();
        return sy
      },
      Ry = yb => {
        const {
          match: bb,
          type: Wy
        } = My(yb);
        if (bb) return Wy || void 0;
        const Uy = yb.lastIndexOf(".");
        switch (yb.substring(Uy + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "jBy":
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
      vb = () => "undefined" !== typeof location && "file:" === location.protocol,
      ib = yb => Sy.test(yb),
      My = yb => {
        const bb = Sy.exec(yb);
        if (null === bb || 0 === bb.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: bb[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function Yy(yb) {
      return (0, Py.e)(yb.split(",")[1])
    }
    const Xy = yb => (0, Py.h)(yb.split(",")[1]);
    let ny;
    const uy = (yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy) => {
      ny = {
        DecodeBase64UrlToBinary: yb,
        DecodeBase64UrlToString: bb,
        DefaultRetryStrategy: Wy.DefaultRetryStrategy,
        BaseUrl: Wy.BaseUrl,
        CorsBehavior: Wy.CorsBehavior,
        PreprocessUrl: Wy.PreprocessUrl,
        IsBase64DataUrl: Uy,
        IsFileURL: hy,
        LoadFile: fy,
        LoadImage: Zy,
        ReadFile: cb,
        RequestFile: Py,
        SetCorsBehavior: oy
      }, Object.defineProperty(ny, "DefaultRetryStrategy", {
        get: function() {
          return Wy.DefaultRetryStrategy
        },
        set: function(yb) {
          Wy.DefaultRetryStrategy = yb
        }
      }), Object.defineProperty(ny, "BaseUrl", {
        get: function() {
          return Wy.BaseUrl
        },
        set: function(yb) {
          Wy.BaseUrl = yb
        }
      }), Object.defineProperty(ny, "PreprocessUrl", {
        get: function() {
          return Wy.PreprocessUrl
        },
        set: function(yb) {
          Wy.PreprocessUrl = yb
        }
      }), Object.defineProperty(ny, "CorsBehavior", {
        get: function() {
          return Wy.CorsBehavior
        },
        set: function(yb) {
          Wy.CorsBehavior = yb
        }
      })
    };
    let rb = !1;

    function Hy() {
      rb || (rb = !0, uy(Yy, Xy, Cy, ib, vb, Gy, Jy, gb, Oy, Ty), By.c.loadFile = Gy, By.c.loadImage = Jy, Ky.h.loadFile = Gy)
    }
  },
  38547: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => cb,
      g: () => fy,
      k: () => Zy
    });
    let Uy = null;

    function hy() {
      if (Uy) return Uy;
      const yb = new ArrayBuffer(4),
        bb = new Float32Array(yb),
        Wy = new Uint32Array(yb),
        hy = new Uint32Array(512),
        fy = new Uint32Array(512);
      for (let Uy = 0; Uy < 256; ++Uy) {
        const yb = Uy - 127;
        yb < -24 ? (hy[Uy] = 0, hy[256 | Uy] = 32768, fy[Uy] = 24, fy[256 | Uy] = 24) : yb < -14 ? (hy[Uy] = 1024 >> -yb - 14, hy[256 | Uy] = 1024 >> -yb - 14 | 32768, fy[Uy] = -yb - 1, fy[256 | Uy] = -yb - 1) : yb <= 15 ? (hy[Uy] = yb + 15 << 10, hy[256 | Uy] = yb + 15 << 10 | 32768, fy[Uy] = 13, fy[256 | Uy] = 13) : yb < 128 ? (hy[Uy] = 31744, hy[256 | Uy] = 64512, fy[Uy] = 24, fy[256 | Uy] = 24) : (hy[Uy] = 31744, hy[256 | Uy] = 64512, fy[Uy] = 13, fy[256 | Uy] = 13)
      }
      const Zy = new Uint32Array(2048),
        cb = new Uint32Array(64),
        Py = new Uint32Array(64);
      for (let Uy = 1; Uy < 1024; ++Uy) {
        let yb = Uy << 13,
          bb = 0;
        for (; 0 === (8388608 & yb);) yb <<= 1, bb -= 8388608;
        yb &= -8388609, bb += 947912704, Zy[Uy] = yb | bb
      }
      for (let Uy = 1024; Uy < 2048; ++Uy) Zy[Uy] = 939524096 + (Uy - 1024 << 13);
      for (let Uy = 1; Uy < 31; ++Uy) cb[Uy] = Uy << 23;
      cb[31] = 1199570944, cb[32] = 2147483648;
      for (let Uy = 33; Uy < 63; ++Uy) cb[Uy] = 2147483648 + (Uy - 32 << 23);
      cb[63] = 3347054592;
      for (let Uy = 1; Uy < 64; ++Uy) 32 !== Uy && (Py[Uy] = 1024);
      return Uy = {
        floatView: bb,
        uint32View: Wy,
        baseTable: hy,
        shiftTable: fy,
        mantissaTable: Zy,
        exponentTable: cb,
        offsetTable: Py
      }, Uy
    }
    const fy = 65504;

    function Zy(yb) {
      const bb = hy();
      bb.floatView[0] = yb;
      const Wy = bb.uint32View[0],
        Uy = Wy >> 23 & 511;
      return bb.baseTable[Uy] + ((8388607 & Wy) >> bb.shiftTable[Uy])
    }

    function cb(yb) {
      const bb = hy();
      return bb.uint32View[0] = bb.mantissaTable[bb.offsetTable[yb >> 10] + (1023 & yb)] + bb.exponentTable[yb >> 10], bb.floatView[0]
    }
  },
  38532: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => fy,
      h: () => hy,
      k: () => Uy
    });
    const Uy = yb => {
        const bb = ArrayBuffer.isView(yb) ? new Uint8Array(yb.buffer, yb.byteOffset, yb.byteLength) : new Uint8Array(yb);
        return "function" === typeof bb.toBase64 ? bb.toBase64() : function(yb) {
          const bb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let Wy, Uy, hy, fy, Zy, cb, Py, oy = "",
            By = 0;
          for (; By < yb.length;) Wy = yb[By++], Uy = By < yb.length ? yb[By++] : Number.NaN, hy = By < yb.length ? yb[By++] : Number.NaN, fy = Wy >> 2, Zy = (3 & Wy) << 4 | Uy >> 4, cb = (15 & Uy) << 2 | hy >> 6, Py = 63 & hy, isNaN(Uy) ? cb = Py = 64 : isNaN(hy) && (Py = 64), oy += bb.charAt(fy) + bb.charAt(Zy) + bb.charAt(cb) + bb.charAt(Py);
          return oy
        }(bb)
      },
      hy = yb => atob(yb),
      fy = yb => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(yb).buffer : function(yb) {
        const bb = hy(yb),
          Wy = bb.length,
          Uy = new Uint8Array(new ArrayBuffer(Wy));
        for (let hy = 0; hy < Wy; hy++) Uy[hy] = bb.charCodeAt(hy);
        return Uy.buffer
      }(yb)
  },
  38354: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => hy,
      c: () => Zy
    });
    let Uy = [];
    class hy {
      static SetImmediate(yb) {
        0 === Uy.length && setTimeout((() => {
          const yb = Uy;
          Uy = [];
          for (const bb of yb) bb()
        }), 1), Uy.push(yb)
      }
    }

    function fy(yb, bb, Wy) {
      try {
        if (yb()) return bb(), !0
      } catch (Uy) {
        return Wy?.(Uy), !0
      }
      return !1
    }
    const Zy = function(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        Zy = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && fy(yb, bb, Wy)) return null;
      const cb = setInterval((() => {
        fy(yb, bb, Wy) ? clearInterval(cb) : (hy -= Uy, hy < 0 && (clearInterval(cb), Wy?.(new Error("Operation timed out after maximum retries. " + (Zy || "")), !0)))
      }), Uy);
      return () => clearInterval(cb)
    }
  },
  38516: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy
    });
    class Uy {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(Uy.CustomRequestHeaders).length > 0 || Uy.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(yb) {
        return yb = (yb = yb.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(yb) {
        return Uy.SkipRequestModificationForBabylonCDN && (yb.includes("preview.babylonjs.com") || yb.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(yb) {
        const bb = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (Uy._ShouldSkipRequestModifications(yb)) return {
          url: yb,
          headers: bb
        };
        for (const hy in Uy.CustomRequestHeaders) {
          const yb = Uy.CustomRequestHeaders[hy];
          yb && (bb[hy] = yb)
        }
        const Wy = {
          setRequestHeader: (yb, Wy) => {
            bb[yb] = Wy
          }
        };
        for (const hy of Uy.CustomRequestModifiers) {
          if (Uy._ShouldSkipRequestModifications(yb)) break;
          const bb = hy(Wy, yb);
          "string" === typeof bb && (yb = bb)
        }
        return {
          url: yb,
          headers: bb
        }
      }
      static async FetchAsync(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Wy = bb.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: hy,
            headers: fy
          } = Uy._CollectCustomizations(Uy._CleanUrl(yb), bb.headers ?? {});
          return await fetch(hy, {
            method: Wy,
            headers: fy,
            body: bb.body ?? void 0
          })
        }
        return await new Promise(((hy, fy) => {
          const Zy = new Uy;
          Zy.responseType = "arraybuffer", Zy.addEventListener("readystatechange", (() => {
            if (4 === Zy.readyState)
              if (Zy.status >= 200 && Zy.status < 300) {
                const yb = "undefined" !== typeof Headers ? new Headers : void 0,
                  bb = Zy.getResponseHeader("Content-Type");
                bb && yb && yb.set("Content-Type", bb), "undefined" !== typeof Response ? hy(new Response(Zy.response, {
                  status: Zy.status,
                  statusText: Zy.statusText,
                  headers: yb
                })) : hy({
                  ok: !0,
                  status: Zy.status,
                  statusText: Zy.statusText,
                  headers: {
                    get: yb => Zy.getResponseHeader(yb)
                  },
                  arrayBuffer: async () => await Promise.resolve(Zy.response)
                })
              } else fy(new Error(`HTTP ${Zy.status} loading '${Zy.requestURL}': ${Zy.statusText}`))
          })), Zy.open(Wy, yb, bb.headers), Zy.send(bb.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(yb) {
        this._xhr.onprogress = yb
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
      set responseType(yb) {
        this._xhr.responseType = yb
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(yb) {
        this._xhr.timeout = yb
      }
      addEventListener(yb, bb, Wy) {
        this._xhr.addEventListener(yb, bb, Wy)
      }
      removeEventListener(yb, bb, Wy) {
        this._xhr.removeEventListener(yb, bb, Wy)
      }
      abort() {
        this._xhr.abort()
      }
      send(yb) {
        this._xhr.send(yb)
      }
      open(yb, bb, Wy) {
        const {
          url: hy,
          headers: fy
        } = Uy._CollectCustomizations(bb, Wy);
        this._requestURL = Uy._CleanUrl(hy), this._xhr.open(yb, this._requestURL, !0);
        for (const Uy in fy) this._xhr.setRequestHeader(Uy, fy[Uy])
      }
      setRequestHeader(yb, bb) {
        this._xhr.setRequestHeader(yb, bb)
      }
      getResponseHeader(yb) {
        return this._xhr.getResponseHeader(yb)
      }
    }
    Uy.CustomRequestHeaders = {}, Uy.CustomRequestModifiers = new Array, Uy.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);