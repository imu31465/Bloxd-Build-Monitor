export const id = 243;
export const ids = [243];
export const modules = {
  39180: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => sY,
      g: () => uY,
      h: () => gY,
      i: () => iY,
      l: () => aY,
      n: () => OY,
      q: () => vY
    });
    var FY = DY(38040),
      AY = DY(39184);

    function IY(YY, rY, DY, FY) {
      switch (rY) {
        case 5120: {
          let rY = YY.getInt8(DY);
          return FY && (rY = Math.max(rY / 127, -1)), rY
        }
        case 5121: {
          let rY = YY.getUint8(DY);
          return FY && (rY /= 255), rY
        }
        case 5122: {
          let rY = YY.getInt16(DY, !0);
          return FY && (rY = Math.max(rY / 32767, -1)), rY
        }
        case 5123: {
          let rY = YY.getUint16(DY, !0);
          return FY && (rY /= 65535), rY
        }
        case 5131:
          return (0, AY.c)(YY.getUint16(DY, !0));
        case 5124:
          return YY.getInt32(DY, !0);
        case 5125:
          return YY.getUint32(DY, !0);
        case 5126:
          return YY.getFloat32(DY, !0);
        default:
          throw new Error(`Invalid component type ${rY}`)
      }
    }

    function RY(YY, rY, DY, FY, IY) {
      switch (rY) {
        case 5120:
          FY && (IY = Math.round(127 * IY)), YY.setInt8(DY, IY);
          break;
        case 5121:
          FY && (IY = Math.round(255 * IY)), YY.setUint8(DY, IY);
          break;
        case 5122:
          FY && (IY = Math.round(32767 * IY)), YY.setInt16(DY, IY, !0);
          break;
        case 5123:
          FY && (IY = Math.round(65535 * IY)), YY.setUint16(DY, IY, !0);
          break;
        case 5131:
          YY.setUint16(DY, (0, AY.k)(IY), !0);
          break;
        case 5124:
          YY.setInt32(DY, IY, !0);
          break;
        case 5125:
          YY.setUint32(DY, IY, !0);
          break;
        case 5126:
          YY.setFloat32(DY, IY, !0);
          break;
        default:
          throw new Error(`Invalid component type ${rY}`)
      }
    }

    function OY(YY) {
      switch (YY) {
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
          throw new Error(`Invalid type '${YY}'`)
      }
    }

    function gY(YY, rY, DY, FY, AY, gY, aY, vY) {
      const uY = new Array(FY),
        sY = new Array(FY);
      if (YY instanceof Array) {
        let AY = rY / 4;
        const IY = DY / 4;
        for (let rY = 0; rY < gY; rY += FY) {
          for (let rY = 0; rY < FY; rY++) uY[rY] = sY[rY] = YY[AY + rY];
          vY(sY, rY);
          for (let rY = 0; rY < FY; rY++) uY[rY] !== sY[rY] && (YY[AY + rY] = sY[rY]);
          AY += IY
        }
      } else {
        const iY = ArrayBuffer.isView(YY) ? new DataView(YY.buffer, YY.byteOffset, YY.byteLength) : new DataView(YY),
          yY = OY(AY);
        for (let YY = 0; YY < gY; YY += FY) {
          for (let YY = 0, DY = rY; YY < FY; YY++, DY += yY) uY[YY] = sY[YY] = IY(iY, AY, DY, aY);
          vY(sY, YY);
          for (let YY = 0, DY = rY; YY < FY; YY++, DY += yY) uY[YY] !== sY[YY] && RY(iY, AY, DY, aY, sY[YY]);
          rY += DY
        }
      }
    }

    function aY(YY, rY, DY, AY, IY, RY, aY, vY) {
      const uY = rY * OY(DY),
        sY = aY * rY;
      if (5126 !== DY || IY !== uY) {
        const FY = new Float32Array(sY);
        return gY(YY, AY, IY, rY, DY, sY, RY, ((YY, DY) => {
          for (let AY = 0; AY < rY; AY++) FY[DY + AY] = YY[AY]
        })), FY
      }
      if (!(YY instanceof Array || YY instanceof Float32Array) || 0 !== AY || YY.length !== sY) {
        if (YY instanceof Array) {
          const rY = AY / 4;
          return YY.slice(rY, rY + sY)
        }
        if (ArrayBuffer.isView(YY)) {
          const rY = YY.byteOffset + AY;
          return 0 !== (3 & rY) && (FY.d.Warn("Float array must be aligned to 4-bytes border"), vY = !0), vY ? new Float32Array(YY.buffer.slice(rY, rY + sY * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(YY.buffer, rY, sY)
        }
        return new Float32Array(YY, AY, sY)
      }
      return vY ? YY.slice() : YY
    }

    function vY(YY, rY, DY, AY, IY, RY, aY) {
      const vY = OY(DY),
        uY = function(YY) {
          switch (YY) {
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
              throw new Error(`Invalid component type '${YY}'`)
          }
        }(DY),
        sY = RY * rY;
      if (Array.isArray(YY)) {
        if (0 !== (3 & AY) || 0 !== (3 & IY)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const FY = AY / 4,
          OY = IY / 4;
        if (FY + (RY - 1) * OY + rY > YY.length) throw new Error("Last accessed index is out of bounds.");
        if (OY < rY) throw new Error("Data stride cannot be smaller than the component size.");
        if (OY !== rY) {
          const FY = new uY(sY);
          return gY(YY, AY, IY, rY, DY, sY, !1, ((YY, DY) => {
            for (let AY = 0; AY < rY; AY++) FY[DY + AY] = YY[AY]
          })), FY
        }
        return new uY(YY.slice(FY, FY + sY))
      }
      let iY, yY = AY;
      ArrayBuffer.isView(YY) ? (iY = YY.buffer, yY += YY.byteOffset) : iY = YY;
      if (yY + (RY - 1) * IY + rY * vY > iY.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const QY = rY * vY;
      if (IY < QY) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (IY !== QY) {
        const YY = new uY(sY),
          DY = new Uint8Array(iY, yY),
          FY = new Uint8Array(YY.buffer),
          AY = rY * vY;
        for (let rY = 0, OY = 0, gY = 0; rY < RY; rY++, OY += IY, gY += AY) FY.set(DY.subarray(OY, OY + AY), gY);
        return YY
      }
      return 1 !== vY && 0 !== (yY & vY - 1) && (FY.d.Warn("Array must be aligned to border of element size. Data will be copied."), aY = !0), aY ? new uY(iY.slice(yY, yY + sY * vY)) : new uY(iY, yY, sY)
    }

    function uY(YY, rY, DY, AY, IY, RY, aY, vY) {
      const uY = rY * OY(DY),
        sY = aY * rY;
      if (vY.length !== sY) throw new Error("Output length is not valid");
      if (5126 === DY && IY === uY)
        if (YY instanceof Array) {
          const rY = AY / 4;
          vY.set(YY, rY)
        } else if (ArrayBuffer.isView(YY)) {
        const rY = YY.byteOffset + AY;
        if (0 !== (3 & rY)) return FY.d.Warn("Float array must be aligned to 4-bytes border"), void vY.set(new Float32Array(YY.buffer.slice(rY, rY + sY * Float32Array.BYTES_PER_ELEMENT)));
        const DY = new Float32Array(YY.buffer, rY, sY);
        vY.set(DY)
      } else {
        const rY = new Float32Array(YY, AY, sY);
        vY.set(rY)
      } else gY(YY, AY, IY, rY, DY, sY, RY, ((YY, DY) => {
        for (let FY = 0; FY < rY; FY++) vY[DY + FY] = YY[FY]
      }))
    }

    function sY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(YY)) {
        for (let AY = 0; AY < rY; AY++)
          if (YY[DY + AY] - FY > 65535) return !0;
        return !1
      }
      return 4 === YY.BYTES_PER_ELEMENT
    }

    function iY(YY) {
      const rY = YY.buffer;
      if (rY instanceof ArrayBuffer) return YY;
      const DY = new ArrayBuffer(YY.byteLength);
      return new Uint8Array(DY).set(new Uint8Array(rY, YY.byteOffset, YY.byteLength)), DY
    }
  },
  39032: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => eY,
      g: () => lY,
      m: () => TY,
      j: () => ZY,
      n: () => CY
    });
    class FY {
      constructor() {
        this.children = []
      }
      isValid(YY) {
        return !0
      }
      process(YY, rY, DY) {
        let FY = "";
        if (this.line) {
          let DY = this.line;
          const AY = rY.processor;
          if (AY) {
            AY.lineProcessor && (DY = AY.lineProcessor(DY, rY.isFragment, rY.processingContext));
            const FY = rY.processor?.attributeKeywordName ?? "attribute",
              IY = rY.isFragment && rY.processor?.varyingFragmentKeywordName ? rY.processor?.varyingFragmentKeywordName : !rY.isFragment && rY.processor?.varyingVertexKeywordName ? rY.processor?.varyingVertexKeywordName : "varying";
            if (!rY.isFragment && AY.attributeProcessor && this.line.startsWith(FY)) DY = AY.attributeProcessor(this.line, YY, rY.processingContext);
            else if (AY.varyingProcessor && (AY.varyingCheck?.(this.line, rY.isFragment) || !AY.varyingCheck && this.line.startsWith(IY))) DY = AY.varyingProcessor(this.line, rY.isFragment, YY, rY.processingContext);
            else if (AY.uniformProcessor && AY.uniformRegexp && AY.uniformRegexp.test(this.line)) rY.lookForClosingBracketForUniformBuffer || (DY = AY.uniformProcessor(this.line, rY.isFragment, YY, rY.processingContext));
            else if (AY.uniformBufferProcessor && AY.uniformBufferRegexp && AY.uniformBufferRegexp.test(this.line)) rY.lookForClosingBracketForUniformBuffer || (DY = AY.uniformBufferProcessor(this.line, rY.isFragment, rY.processingContext), rY.lookForClosingBracketForUniformBuffer = !0);
            else if (AY.textureProcessor && AY.textureRegexp && AY.textureRegexp.test(this.line)) DY = AY.textureProcessor(this.line, rY.isFragment, YY, rY.processingContext);
            else if ((AY.uniformProcessor || AY.uniformBufferProcessor) && this.line.startsWith("uniform") && !rY.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? AY.uniformProcessor && (DY = AY.uniformProcessor(this.line, rY.isFragment, YY, rY.processingContext)) : AY.uniformBufferProcessor && (DY = AY.uniformBufferProcessor(this.line, rY.isFragment, rY.processingContext), rY.lookForClosingBracketForUniformBuffer = !0)
            }
            rY.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (rY.lookForClosingBracketForUniformBuffer = !1, AY.endOfUniformBufferProcessor && (DY = AY.endOfUniformBufferProcessor(this.line, rY.isFragment, rY.processingContext)))
          }
          FY += DY + "\n"
        }
        for (const AY of this.children) FY += AY.process(YY, rY, DY);
        return this.additionalDefineKey && (YY[this.additionalDefineKey] = this.additionalDefineValue || "true", DY[this.additionalDefineKey] = YY[this.additionalDefineKey]), FY
      }
    }
    class AY {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(YY) {
        this._lines.length = 0;
        for (const rY of YY) {
          if (!rY || "\r" === rY) continue;
          if ("#" === rY[0]) {
            this._lines.push(rY);
            continue
          }
          const YY = rY.trim();
          if (!YY) continue;
          if (YY.startsWith("//")) {
            this._lines.push(rY);
            continue
          }
          const DY = YY.indexOf(";");
          if (-1 === DY) this._lines.push(YY);
          else if (DY === YY.length - 1) YY.length > 1 && this._lines.push(YY);
          else {
            const YY = rY.split(";");
            for (let rY = 0; rY < YY.length; rY++) {
              let DY = YY[rY];
              DY && (DY = DY.trim(), DY && this._lines.push(DY + (rY !== YY.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class IY extends FY {
      process(YY, rY, DY) {
        for (let FY = 0; FY < this.children.length; FY++) {
          const AY = this.children[FY];
          if (AY.isValid(YY)) return AY.process(YY, rY, DY)
        }
        return ""
      }
    }
    class RY extends FY {
      isValid(YY) {
        return this.testExpression.isTrue(YY)
      }
    }
    class OY {
      isTrue(YY) {
        return !0
      }
      static postfixToInfix(YY) {
        const rY = [];
        for (const DY of YY)
          if (void 0 === OY._OperatorPriority[DY]) rY.push(DY);
          else {
            const YY = rY[rY.length - 1],
              FY = rY[rY.length - 2];
            rY.length -= 2, rY.push(`(${FY}${DY}${YY})`)
          } return rY[rY.length - 1]
      }
      static infixToPostfix(YY) {
        const rY = OY._InfixToPostfixCache.get(YY);
        if (rY) return rY.accessTime = Date.now(), rY.result;
        if (!YY.includes("&&") && !YY.includes("||") && !YY.includes(")") && !YY.includes("(")) return [YY];
        const DY = [];
        let FY = -1;
        const AY = () => {
            vY = vY.trim(), "" !== vY && (DY.push(vY), vY = "")
          },
          IY = YY => {
            FY < OY._Stack.length - 1 && (OY._Stack[++FY] = YY)
          },
          RY = () => OY._Stack[FY],
          gY = () => -1 === FY ? "!!INVALID EXPRESSION!!" : OY._Stack[FY--];
        let aY = 0,
          vY = "";
        for (; aY < YY.length;) {
          const rY = YY.charAt(aY),
            uY = aY < YY.length - 1 ? YY.substring(aY, 2 + aY) : "";
          if ("(" === rY) vY = "", IY(rY);
          else if (")" === rY) {
            for (AY(); - 1 !== FY && "(" !== RY();) DY.push(gY());
            gY()
          } else if (OY._OperatorPriority[uY] > 1) {
            for (AY(); - 1 !== FY && OY._OperatorPriority[RY()] >= OY._OperatorPriority[uY];) DY.push(gY());
            IY(uY), aY++
          } else vY += rY;
          aY++
        }
        for (AY(); - 1 !== FY;) "(" === RY() ? gY() : DY.push(gY());
        return OY._InfixToPostfixCache.size >= OY.InfixToPostfixCacheLimitSize && OY.ClearCache(), OY._InfixToPostfixCache.set(YY, {
          result: DY,
          accessTime: Date.now()
        }), DY
      }
      static ClearCache() {
        const YY = Array.from(OY._InfixToPostfixCache.entries()).sort(((YY, rY) => YY[1].accessTime - rY[1].accessTime));
        for (let rY = 0; rY < OY.InfixToPostfixCacheCleanupSize; rY++) OY._InfixToPostfixCache.delete(YY[rY][0])
      }
    }
    OY.InfixToPostfixCacheLimitSize = 5e4, OY.InfixToPostfixCacheCleanupSize = 25e3, OY._InfixToPostfixCache = new Map, OY._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, OY._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class gY extends OY {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = YY, this.not = rY
      }
      isTrue(YY) {
        let rY = void 0 !== YY[this.define];
        return this.not && (rY = !rY), rY
      }
    }
    class aY extends OY {
      isTrue(YY) {
        return this.leftOperand.isTrue(YY) || this.rightOperand.isTrue(YY)
      }
    }
    class vY extends OY {
      isTrue(YY) {
        return this.leftOperand.isTrue(YY) && this.rightOperand.isTrue(YY)
      }
    }
    class uY extends OY {
      constructor(YY, rY, DY) {
        super(), this.define = YY, this.operand = rY, this.testValue = DY
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(YY) {
        let rY = !1;
        const DY = parseInt(void 0 != YY[this.define] ? YY[this.define] : this.define),
          FY = parseInt(void 0 != YY[this.testValue] ? YY[this.testValue] : this.testValue);
        if (isNaN(DY) || isNaN(FY)) return !1;
        switch (this.operand) {
          case ">":
            rY = DY > FY;
            break;
          case "<":
            rY = DY < FY;
            break;
          case "<=":
            rY = DY <= FY;
            break;
          case ">=":
            rY = DY >= FY;
            break;
          case "==":
            rY = DY === FY;
            break;
          case "!=":
            rY = DY !== FY
        }
        return rY
      }
    }
    var sY = DY(39029),
      iY = DY(39021);
    const yY = /defined\s*?\((.+?)\)/g,
      QY = /defined\s*?\[(.+?)\]/g,
      oY = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      WY = /__decl__/,
      EY = /light\{X\}.(\w*)/g,
      mY = /\{X\}/g,
      VY = [],
      SY = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function lY(YY) {
      YY.processor && YY.processor.initializeShaders && YY.processor.initializeShaders(YY.processingContext)
    }

    function TY(YY, rY, DY, FY) {
      rY.processor?.preProcessShaderCode && (YY = rY.processor.preProcessShaderCode(YY, rY.isFragment)), ZY(YY, rY, (YY => {
        rY.processCodeAfterIncludes && (YY = rY.processCodeAfterIncludes(rY.isFragment ? "fragment" : "vertex", YY, rY.defines));
        const AY = function(YY, rY, DY) {
          let FY = function(YY, rY) {
            if (rY.processor?.noPrecision) return YY;
            const DY = rY.shouldUseHighPrecisionShader; - 1 === YY.indexOf("precision highp float") ? YY = DY ? "precision highp float;\n" + YY : "precision mediump float;\n" + YY : DY || (YY = YY.replace("precision highp float", "precision mediump float"));
            return YY
          }(YY, rY);
          if (!rY.processor) return FY;
          if (0 === rY.processor.shaderLanguage && -1 !== FY.indexOf("#version 3") && (FY = FY.replace("#version 300 es", ""), !rY.processor.parseGLES3)) return FY;
          const AY = rY.defines,
            IY = zY(rY, DY);
          rY.processor.preProcessor && (FY = rY.processor.preProcessor(FY, AY, IY, rY.isFragment, rY.processingContext));
          const RY = {};
          FY = HY(FY, IY, rY, RY), rY.processor.postProcessor && (FY = rY.processor.postProcessor(FY, AY, rY.isFragment, rY.processingContext, DY ? {
            drawBuffersExtensionDisabled: !DY.getCaps().drawBuffersExtension
          } : {}, IY, RY));
          DY?._features.needShaderCodeInlining && (FY = DY.inlineShaderCode(FY));
          return FY
        }(YY, rY, FY);
        DY(AY, YY)
      }))
    }

    function eY(YY, rY, DY) {
      return DY.processor && DY.processor.finalizeShaders ? DY.processor.finalizeShaders(YY, rY, DY.processingContext) : {
        vertexCode: YY,
        fragmentCode: rY
      }
    }

    function NY(YY) {
      const rY = /defined\((.+)\)/.exec(YY);
      if (rY && rY.length) return new gY(rY[1].trim(), "!" === YY[0]);
      const DY = ["==", "!=", ">=", "<=", "<", ">"];
      let FY = "",
        AY = 0;
      for (FY of DY)
        if (AY = YY.indexOf(FY), AY > -1) break;
      if (-1 === AY) return new gY(YY);
      const IY = YY.substring(0, AY).trim(),
        RY = YY.substring(AY + FY.length).trim();
      return new uY(IY, FY, RY)
    }

    function BY(YY, rY) {
      const DY = new RY,
        FY = YY.substring(0, rY);
      let AY = YY.substring(rY);
      return AY = AY.substring(0, (AY.indexOf("//") + 1 || AY.length + 1) - 1).trim(), DY.testExpression = "#ifdef" === FY ? new gY(AY) : "#ifndef" === FY ? new gY(AY, !0) : function(YY) {
        YY = YY.replace(yY, "defined[$1]");
        const rY = OY.infixToPostfix(YY),
          DY = [];
        for (const AY of rY)
          if ("||" !== AY && "&&" !== AY) DY.push(AY);
          else if (DY.length >= 2) {
          let YY = DY[DY.length - 1],
            rY = DY[DY.length - 2];
          DY.length -= 2;
          const FY = "&&" == AY ? new vY : new aY;
          "string" === typeof YY && (YY = YY.replace(QY, "defined($1)")), "string" === typeof rY && (rY = rY.replace(QY, "defined($1)")), FY.leftOperand = "string" === typeof rY ? NY(rY) : rY, FY.rightOperand = "string" === typeof YY ? NY(YY) : YY, DY.push(FY)
        }
        let FY = DY[DY.length - 1];
        return "string" === typeof FY && (FY = FY.replace(QY, "defined($1)")), "string" === typeof FY ? NY(FY) : FY
      }(AY), DY
    }

    function cY(YY, rY, DY, AY) {
      let IY;
      for (; KY(YY, DY, AY);) {
        IY = YY.currentLine;
        const RY = IY.substring(0, 5).toLowerCase();
        if ("#else" === RY) {
          const DY = new FY;
          return rY.children.push(DY), void KY(YY, DY, AY)
        }
        if ("#elif" === RY) {
          const YY = BY(IY, 5);
          rY.children.push(YY), DY = YY
        }
      }
    }

    function KY(YY, rY, DY) {
      for (; YY.canRead;) {
        YY.lineIndex++;
        const AY = YY.currentLine;
        if (AY.indexOf("#") >= 0) {
          const FY = SY.exec(AY);
          if (FY && FY.length) {
            switch (FY[0]) {
              case "#ifdef": {
                const FY = new IY;
                rY.children.push(FY);
                const RY = BY(AY, 6);
                FY.children.push(RY), cY(YY, FY, RY, DY);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const FY = new IY;
                rY.children.push(FY);
                const RY = BY(AY, 7);
                FY.children.push(RY), cY(YY, FY, RY, DY);
                break
              }
              case "#if": {
                const FY = new IY,
                  RY = BY(AY, 3);
                rY.children.push(FY), FY.children.push(RY), cY(YY, FY, RY, DY);
                break
              }
            }
            continue
          }
        }
        const RY = new FY;
        if (RY.line = AY, rY.children.push(RY), "#" === AY[0] && "d" === AY[1]) {
          const YY = AY.replace(";", "").split(" ");
          RY.additionalDefineKey = YY[1], 3 === YY.length && (RY.additionalDefineValue = YY[2])
        }
      }
      return !1
    }

    function HY(YY, rY, DY, IY) {
      const RY = new FY,
        OY = new AY;
      return OY.lineIndex = -1, OY.lines = YY.split("\n"), KY(OY, RY, IY), RY.process(rY, DY, IY)
    }

    function zY(YY, rY) {
      const DY = YY.defines,
        FY = {};
      for (const AY of DY) {
        const YY = AY.replace("#define", "").replace(";", "").trim().split(" ");
        FY[YY[0]] = YY.length > 1 ? YY[1] : ""
      }
      return 0 === YY.processor?.shaderLanguage && (FY.GL_ES = "true"), FY.__VERSION__ = YY.version, FY[YY.platformName] = "true", (0, iY.i)(FY, rY?.isNDCHalfZRange, rY?.QDY, rY?.useExactSrgbConversions), FY
    }

    function ZY(YY, rY, DY) {
      let FY;
      for (VY.length = 0; null !== (FY = oY.exec(YY));) VY.push(FY);
      let AY = [YY],
        IY = !1;
      for (const OY of VY) {
        let YY = OY[1];
        if (-1 !== YY.indexOf("__decl__") && (YY = YY.replace(WY, ""), rY.supportsUniformBuffers && (YY = YY.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), YY += "Declaration"), !rY.includesShadersStore[YY]) {
          const FY = rY.shadersRepository + "ShadersInclude/" + YY + ".fx";
          return void CY.loadFile(FY, (FY => {
            rY.includesShadersStore[YY] = FY, ZY(AY.join(""), rY, DY)
          }))
        } {
          let DY = rY.includesShadersStore[YY];
          if (OY[2]) {
            const YY = OY[3].split(",");
            for (let rY = 0; rY < YY.length; rY += 2) {
              const FY = new RegExp(YY[rY], "g"),
                AY = YY[rY + 1];
              DY = DY.replace(FY, AY)
            }
          }
          if (OY[4]) {
            const YY = OY[5];
            if (-1 !== YY.indexOf("..")) {
              const FY = YY.split(".."),
                AY = parseInt(FY[0]);
              let IY = parseInt(FY[1]),
                RY = DY.slice(0);
              DY = "", isNaN(IY) && (IY = rY.indexParameters[FY[1]]);
              for (let YY = AY; YY < IY; YY++) rY.supportsUniformBuffers || (RY = RY.replace(EY, ((YY, rY) => rY + "{X}"))), DY += RY.replace(mY, YY.toString()) + "\n"
            } else rY.supportsUniformBuffers || (DY = DY.replace(EY, ((YY, rY) => rY + "{X}"))), DY = DY.replace(mY, YY)
          }
          const FY = [];
          for (const YY of AY) {
            const rY = YY.split(OY[0]);
            for (let YY = 0; YY < rY.length - 1; YY++) FY.push(rY[YY]), FY.push(DY);
            FY.push(rY[rY.length - 1])
          }
          AY = FY, IY = IY || DY.indexOf("#include<") >= 0 || DY.indexOf("#include <") >= 0
        }
      }
      VY.length = 0;
      const RY = AY.join("");
      IY ? ZY(RY.toString(), rY, DY) : DY(RY)
    }
    const CY = {
      loadFile: (YY, rY, DY, FY, AY, IY) => {
        throw (0, sY.i)("FileTools")
      }
    }
  },
  39021: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => AY,
      e: () => IY,
      i: () => OY,
      m: () => RY,
      q: () => gY
    });
    var FY = DY(39029);
    const AY = {};

    function IY(YY, rY) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (rY ? rY + "\n" : "") + YY
    }

    function RY(YY, rY, DY, IY, RY, OY, gY) {
      const aY = gY || AY.loadFile;
      if (!aY) throw (0, FY.i)("FileTools");
      return aY(YY, rY, DY, IY, RY, OY)
    }

    function OY(YY, rY, DY, FY) {
      if (YY) return rY ? YY.IS_NDC_HALF_ZRANGE = "" : delete YY.IS_NDC_HALF_ZRANGE, DY ? YY.USE_REVERSE_DEPTHBUFFER = "" : delete YY.USE_REVERSE_DEPTHBUFFER, void(FY ? YY.USE_EXACT_SRGB_CONVERSIONS = "" : delete YY.USE_EXACT_SRGB_CONVERSIONS);
      {
        let YY = "";
        return rY && (YY += "#define IS_NDC_HALF_ZRANGE"), DY && (YY && (YY += "\n"), YY += "#define USE_REVERSE_DEPTHBUFFER"), FY && (YY && (YY += "\n"), YY += "#define USE_EXACT_SRGB_CONVERSIONS"), YY
      }
    }

    function gY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        FY = arguments.length > 3 ? arguments[3] : void 0;
      switch (YY) {
        case 3: {
          const YY = new Int8Array(rY);
          return FY && YY.set(new Int8Array(FY)), YY
        }
        case 0: {
          const YY = new Uint8Array(rY);
          return FY && YY.set(new Uint8Array(FY)), YY
        }
        case 4: {
          const YY = "number" !== typeof rY ? new Int16Array(rY) : new Int16Array(DY ? rY / 2 : rY);
          return FY && YY.set(new Int16Array(FY)), YY
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const YY = "number" !== typeof rY ? new Uint16Array(rY) : new Uint16Array(DY ? rY / 2 : rY);
          return FY && YY.set(new Uint16Array(FY)), YY
        }
        case 6: {
          const YY = "number" !== typeof rY ? new Int32Array(rY) : new Int32Array(DY ? rY / 4 : rY);
          return FY && YY.set(new Int32Array(FY)), YY
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const YY = "number" !== typeof rY ? new Uint32Array(rY) : new Uint32Array(DY ? rY / 4 : rY);
          return FY && YY.set(new Uint32Array(FY)), YY
        }
        case 1: {
          const YY = "number" !== typeof rY ? new Float32Array(rY) : new Float32Array(DY ? rY / 4 : rY);
          return FY && YY.set(new Float32Array(FY)), YY
        }
      }
      const AY = new Uint8Array(rY);
      return FY && AY.set(new Uint8Array(FY)), AY
    }
  },
  39029: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => aY,
      c: () => vY,
      g: () => gY,
      i: () => AY
    });
    const FY = {};

    function AY(YY) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !FY[YY]) return FY[YY] = !0, `${YY} needs to be imported before as it contains a side-effect required by your code.`
    }
    const IY = {};
    let RY = !1,
      OY = 0;

    function gY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const FY = function() {
        if ((DY || RY) && 0 === OY) {
          const DY = `${YY}.${rY}`;
          IY[DY] || (IY[DY] = !0, console.warn(`[Babylon.js] ${DY}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return FY.__isSideEffectStub = !0, FY
    }

    function aY(YY) {
      return !!YY && !YY.__isSideEffectStub
    }

    function vY(YY, rY) {
      return {
        get() {},
        set(YY) {
          Object.defineProperty(this, rY, {
            value: YY,
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
  39013: (YY, rY, DY) => {
    function FY() {
      return "undefined" !== typeof window
    }

    function AY() {
      return "undefined" !== typeof navigator
    }

    function IY() {
      return "undefined" !== typeof document
    }

    function RY(YY) {
      let rY = "",
        DY = YY.firstChild;
      for (; DY;) 3 === DY.nodeType && (rY += DY.textContent), DY = DY.nextSibling;
      return rY
    }
    DY.d(rY, {
      d: () => RY,
      e: () => IY,
      i: () => AY,
      l: () => FY
    })
  },
  39171: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY,
      c: () => AY,
      g: () => IY
    });
    class FY extends Error {}
    FY._setPrototypeOf = Object.setPrototypeOf || ((YY, rY) => (YY.__proto__ = rY, YY));
    const AY = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class IY extends FY {
      constructor(YY, rY, DY) {
        super(YY), this.errorCode = rY, this.innerError = DY, this.name = "RuntimeError", FY._setPrototypeOf(this, IY.prototype)
      }
    }
  },
  39160: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => zY,
      d: () => mY,
      e: () => BY,
      g: () => KY,
      i: () => eY,
      m: () => lY,
      p: () => TY,
      t: () => hY,
      w: () => NY,
      y: () => VY
    });
    var FY = DY(39169),
      AY = DY(39013),
      IY = DY(36552);
    class RY {}
    RY.FilesToLoad = {};
    var OY = DY(39171),
      gY = DY(39174),
      aY = DY(36546),
      vY = DY(39021),
      uY = DY(39032),
      sY = DY(38040),
      iY = DY(39037),
      yY = DY(39180);
    const QY = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class oY extends OY.g {
      constructor(YY, rY) {
        super(YY, OY.c.LoadFileError), this.name = "LoadFileError", OY.b._setPrototypeOf(this, oY.prototype), rY instanceof FY.d ? this.request = rY : this.file = rY
      }
    }
    class WY extends OY.g {
      constructor(YY, rY) {
        super(YY, OY.c.RequestFileError), this.request = rY, this.name = "RequestFileError", OY.b._setPrototypeOf(this, WY.prototype)
      }
    }
    class EY extends OY.g {
      constructor(YY, rY) {
        super(YY, OY.c.ReadFileError), this.file = rY, this.name = "ReadFileError", OY.b._setPrototypeOf(this, EY.prototype)
      }
    }
    const mY = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (DY, FY, AY) => 0 !== FY.status || AY >= YY || -1 !== DY.indexOf("file:") ? -1 : Math.pow(2, AY) * rY
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: YY => YY,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: YY => YY,
        CleanUrl: YY => YY = YY.replace(/#/gm, "%23")
      },
      VY = (YY, rY) => {
        if ((!YY || 0 !== YY.indexOf("data:")) && mY.CorsBehavior)
          if ("string" === typeof mY.CorsBehavior || mY.CorsBehavior instanceof String) rY.crossOrigin = mY.CorsBehavior;
          else {
            const DY = mY.CorsBehavior(YY);
            DY && (rY.crossOrigin = DY)
          }
      },
      SY = {
        getRequiredSize: null
      },
      lY = function(YY, rY, DY, AY) {
        let IY, OY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          vY = arguments.length > 5 ? arguments[5] : void 0,
          uY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : aY.d.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !uY?._features.forceBitmapOverHTMLImageElement) return DY("LoadImage is only supported in web or BabylonNative environments."), null;
        if (uY?._features.forceBitmapOverHTMLImageElement && "string" !== typeof YY && "undefined" !== typeof Blob) {
          let FY;
          if (YY instanceof Blob) FY = YY;
          else {
            const rY = YY instanceof ArrayBuffer ? YY : (0, yY.i)(YY);
            FY = new Blob([rY], {
              type: OY
            })
          }
          return uY.createImageBitmap(FY, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...vY
          }).then(rY).catch((rY => {
            DY && DY("Error while trying to load image: " + YY, rY)
          })), null
        }
        let sY = !1;
        if (YY instanceof ArrayBuffer || ArrayBuffer.isView(YY))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let rY;
            rY = YY instanceof ArrayBuffer ? YY : (0, yY.i)(YY), IY = URL.createObjectURL(new Blob([rY], {
              type: OY
            })), sY = !0
          } else IY = `data:${OY};base64,` + (0, gY.h)(YY);
        else YY instanceof Blob ? (IY = URL.createObjectURL(YY), sY = !0) : (IY = mY.CleanUrl(YY), IY = mY.PreprocessUrl(IY));
        const iY = rY => {
          if (DY) {
            const FY = IY || YY.toString();
            DY(`Error while trying to load image: ${0===FY.indexOf("http")||FY.length<=128?FY:FY.slice(0,128)+"..."}`, rY)
          }
        };
        if (uY?._features.forceBitmapOverHTMLImageElement) return eY(IY, (FY => {
          uY.createImageBitmap(new Blob([FY], {
            type: OY
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...vY
          }).then((YY => {
            rY(YY), sY && URL.revokeObjectURL(IY)
          })).catch((rY => {
            DY && DY("Error while trying to load image: " + YY, rY)
          }))
        }), void 0, AY || void 0, !0, ((YY, rY) => {
          iY(rY)
        })), null;
        const QY = new Image;
        if (SY.getRequiredSize) {
          const rY = SY.getRequiredSize(YY);
          rY.width && (QY.width = rY.width), rY.height && (QY.height = rY.height)
        }
        VY(IY, QY);
        const oY = [],
          WY = () => {
            for (const YY of oY) YY.target.removeEventListener(YY.name, YY.handler);
            oY.length = 0
          };
        oY.push({
          target: QY,
          name: "load",
          handler: () => {
            WY(), rY(QY), sY && QY.src && URL.revokeObjectURL(QY.src)
          }
        }), oY.push({
          target: QY,
          name: "error",
          handler: YY => {
            WY(), iY(YY), sY && QY.src && URL.revokeObjectURL(QY.src)
          }
        }), oY.push({
          target: document,
          name: "securitypolicyviolation",
          handler: YY => {
            if (YY.blockedURI !== QY.src || "gy" === YY.disposition) return;
            WY();
            const rY = new Error(`CSP violation of policy ${YY.effectiveDirective} ${YY.blockedURI}. Current policy is ${YY.originalPolicy}`);
            aY.d.UseFallbackTexture = !1, iY(rY), sY && QY.src && URL.revokeObjectURL(QY.src), QY.src = ""
          }
        }), (() => {
          for (const YY of oY) YY.target.addEventListener(YY.name, YY.handler)
        })();
        const EY = "blob:" === IY.substring(0, 5),
          lY = "data:" === IY.substring(0, 5),
          TY = () => {
            EY || lY || !FY.d.IsCustomRequestAvailable ? QY.src = IY : eY(IY, ((YY, rY, DY) => {
              const FY = new Blob([YY], {
                  type: !OY && DY ? DY : OY
                }),
                AY = URL.createObjectURL(FY);
              sY = !0, QY.src = AY
            }), void 0, AY || void 0, !0, ((YY, rY) => {
              iY(rY)
            }))
          },
          NY = () => {
            AY && AY.loadImage(IY, QY)
          };
        if (!EY && !lY && AY && AY.enableTexturesOffline) AY.open(NY, TY);
        else {
          if (-1 !== IY.indexOf("file:")) {
            const YY = decodeURIComponent(IY.substring(5).toLowerCase());
            if (RY.FilesToLoad[YY] && "undefined" !== typeof URL) {
              try {
                let rY;
                try {
                  rY = URL.createObjectURL(RY.FilesToLoad[YY])
                } catch (BY) {
                  rY = URL.createObjectURL(RY.FilesToLoad[YY])
                }
                QY.src = rY, sY = !0
              } catch (cY) {
                QY.src = ""
              }
              return QY
            }
          }
          TY()
        }
        return QY
      },
      TY = (YY, rY, DY, FY, AY) => {
        const RY = new FileReader,
          OY = {
            onCompleteObservable: new IY.e,
            abort: () => RY.abort()
          };
        return RY.onloadend = () => OY.onCompleteObservable.notifyObservers(OY), AY && (RY.onerror = () => {
          AY(new EY(`Unable to read ${YY.name}`, YY))
        }), RY.onload = YY => {
          rY(YY.target.result)
        }, DY && (RY.onprogress = DY), FY ? RY.readAsArrayBuffer(YY) : RY.readAsText(YY), OY
      },
      eY = (YY, rY, DY, FY, AY, gY, aY) => {
        if (YY.name) return TY(YY, rY, DY, AY, gY ? YY => {
          gY(void 0, YY)
        } : void 0);
        const vY = YY;
        if (-1 !== vY.indexOf("file:")) {
          let YY = decodeURIComponent(vY.substring(5).toLowerCase());
          0 === YY.indexOf("./") && (YY = YY.substring(2));
          const FY = RY.FilesToLoad[YY];
          if (FY) return TY(FY, rY, DY, AY, gY ? YY => gY(void 0, new oY(YY.message, YY.file)) : void 0)
        }
        const {
          match: uY,
          type: yY
        } = HY(vY);
        if (uY) {
          const YY = {
            onCompleteObservable: new IY.e,
            abort: () => () => {}
          };
          try {
            const YY = AY ? zY(vY) : ZY(vY);
            rY(YY, void 0, yY)
          } catch (OY) {
            gY ? gY(void 0, OY) : sY.d.Error(OY.message || "Failed to parse the Data URL")
          }
          return iY.d.SetImmediate((() => {
            YY.onCompleteObservable.notifyObservers(YY)
          })), YY
        }
        return NY(vY, ((YY, DY) => {
          rY(YY, DY?.responseURL, DY?.getResponseHeader("content-type"))
        }), DY, FY, AY, gY ? YY => {
          gY(YY.request, new oY(YY.message, YY.request))
        } : void 0, aY)
      },
      NY = (YY, rY, DY, RY, OY, gY, vY) => {
        null !== RY && (RY ?? (RY = aY.d.LastCreatedScene?.offlineProvider)), YY = mY.CleanUrl(YY), YY = mY.PreprocessUrl(YY);
        const uY = mY.BaseUrl + YY;
        let iY = !1;
        const yY = {
            onCompleteObservable: new IY.e,
            abort: () => iY = !0
          },
          QY = () => {
            let YY, IY = new FY.d,
              RY = null;
            const aY = () => {
              IY && (DY && IY.removeEventListener("progress", DY), YY && IY.removeEventListener("readystatechange", YY), IY.removeEventListener("loadend", QY))
            };
            let QY = () => {
              aY(), yY.onCompleteObservable.notifyObservers(yY), yY.onCompleteObservable.clear(), DY = void 0, YY = null, QY = null, gY = void 0, vY = void 0, rY = void 0
            };
            yY.abort = () => {
              iY = !0, QY && QY(), IY && IY.readyState !== (XMLHttpRequest.DONE || 4) && IY.abort(), null !== RY && (clearTimeout(RY), RY = null), IY = null
            };
            const oY = YY => {
                const rY = YY.message || "Unknown error";
                gY && IY ? gY(new WY(rY, IY)) : sY.d.Error(rY)
              },
              EY = sY => {
                if (IY) {
                  if (IY.open("GET", uY), vY) try {
                    vY(IY)
                  } catch (yY) {
                    return void oY(yY)
                  }
                  OY && (IY.responseType = "arraybuffer"), DY && IY.addEventListener("progress", DY), QY && IY.addEventListener("loadend", QY), YY = () => {
                    if (!iY && IY && IY.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (YY && IY.removeEventListener("readystatechange", YY), IY.status >= 200 && IY.status < 300 || 0 === IY.status && (!(0, AY.l)() || cY())) {
                        const YY = OY ? IY.response : IY.responseText;
                        if (null !== YY) {
                          try {
                            rY && rY(YY, IY)
                          } catch (yY) {
                            oY(yY)
                          }
                          return
                        }
                      }
                      const DY = mY.DefaultRetryStrategy;
                      if (DY) {
                        const YY = DY(uY, IY, sY);
                        if (-1 !== YY) return aY(), IY = new FY.d, void(RY = setTimeout((() => EY(sY + 1)), YY))
                      }
                      const vY = new WY("Error status: " + IY.status + " " + IY.statusText + " - Unable to load " + uY, IY);
                      gY && gY(vY)
                    }
                  }, IY.addEventListener("readystatechange", YY), IY.send()
                }
              };
            EY(0)
          };
        if (RY && RY.enableSceneOffline && !YY.startsWith("blob:")) {
          const FY = YY => {
              YY && YY.status > 400 ? gY && gY(YY) : QY()
            },
            AY = () => {
              RY && RY.loadFile(mY.BaseUrl + YY, (YY => {
                !iY && rY && rY(YY), yY.onCompleteObservable.notifyObservers(yY)
              }), DY ? YY => {
                !iY && DY && DY(YY)
              } : void 0, FY, OY)
            };
          RY.open(AY, FY)
        } else QY();
        return yY
      },
      BY = YY => {
        const {
          match: rY,
          type: DY
        } = HY(YY);
        if (rY) return DY || void 0;
        const FY = YY.lastIndexOf(".");
        switch (YY.substring(FY + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "Ul":
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
      cY = () => "undefined" !== typeof location && "file:" === location.protocol,
      KY = YY => QY.test(YY),
      HY = YY => {
        const rY = QY.exec(YY);
        if (null === rY || 0 === rY.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: rY[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function zY(YY) {
      return (0, gY.d)(YY.split(",")[1])
    }
    const ZY = YY => (0, gY.e)(YY.split(",")[1]);
    let CY;
    const fY = (YY, rY, DY, FY, AY, IY, RY, OY, gY, aY) => {
      CY = {
        DecodeBase64UrlToBinary: YY,
        DecodeBase64UrlToString: rY,
        DefaultRetryStrategy: DY.DefaultRetryStrategy,
        BaseUrl: DY.BaseUrl,
        CorsBehavior: DY.CorsBehavior,
        PreprocessUrl: DY.PreprocessUrl,
        IsBase64DataUrl: FY,
        IsFileURL: AY,
        LoadFile: IY,
        LoadImage: RY,
        ReadFile: OY,
        RequestFile: gY,
        SetCorsBehavior: aY
      }, Object.defineProperty(CY, "DefaultRetryStrategy", {
        get: function() {
          return DY.DefaultRetryStrategy
        },
        set: function(YY) {
          DY.DefaultRetryStrategy = YY
        }
      }), Object.defineProperty(CY, "BaseUrl", {
        get: function() {
          return DY.BaseUrl
        },
        set: function(YY) {
          DY.BaseUrl = YY
        }
      }), Object.defineProperty(CY, "PreprocessUrl", {
        get: function() {
          return DY.PreprocessUrl
        },
        set: function(YY) {
          DY.PreprocessUrl = YY
        }
      }), Object.defineProperty(CY, "CorsBehavior", {
        get: function() {
          return DY.CorsBehavior
        },
        set: function(YY) {
          DY.CorsBehavior = YY
        }
      })
    };
    let jY = !1;

    function hY() {
      jY || (jY = !0, fY(zY, ZY, mY, KY, cY, eY, lY, TY, NY, VY), vY.b.loadFile = eY, vY.b.loadImage = lY, uY.n.loadFile = eY)
    }
  },
  39184: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => OY,
      g: () => IY,
      k: () => RY
    });
    let FY = null;

    function AY() {
      if (FY) return FY;
      const YY = new ArrayBuffer(4),
        rY = new Float32Array(YY),
        DY = new Uint32Array(YY),
        AY = new Uint32Array(512),
        IY = new Uint32Array(512);
      for (let FY = 0; FY < 256; ++FY) {
        const YY = FY - 127;
        YY < -24 ? (AY[FY] = 0, AY[256 | FY] = 32768, IY[FY] = 24, IY[256 | FY] = 24) : YY < -14 ? (AY[FY] = 1024 >> -YY - 14, AY[256 | FY] = 1024 >> -YY - 14 | 32768, IY[FY] = -YY - 1, IY[256 | FY] = -YY - 1) : YY <= 15 ? (AY[FY] = YY + 15 << 10, AY[256 | FY] = YY + 15 << 10 | 32768, IY[FY] = 13, IY[256 | FY] = 13) : YY < 128 ? (AY[FY] = 31744, AY[256 | FY] = 64512, IY[FY] = 24, IY[256 | FY] = 24) : (AY[FY] = 31744, AY[256 | FY] = 64512, IY[FY] = 13, IY[256 | FY] = 13)
      }
      const RY = new Uint32Array(2048),
        OY = new Uint32Array(64),
        gY = new Uint32Array(64);
      for (let FY = 1; FY < 1024; ++FY) {
        let YY = FY << 13,
          rY = 0;
        for (; 0 === (8388608 & YY);) YY <<= 1, rY -= 8388608;
        YY &= -8388609, rY += 947912704, RY[FY] = YY | rY
      }
      for (let FY = 1024; FY < 2048; ++FY) RY[FY] = 939524096 + (FY - 1024 << 13);
      for (let FY = 1; FY < 31; ++FY) OY[FY] = FY << 23;
      OY[31] = 1199570944, OY[32] = 2147483648;
      for (let FY = 33; FY < 63; ++FY) OY[FY] = 2147483648 + (FY - 32 << 23);
      OY[63] = 3347054592;
      for (let FY = 1; FY < 64; ++FY) 32 !== FY && (gY[FY] = 1024);
      return FY = {
        floatView: rY,
        uint32View: DY,
        baseTable: AY,
        shiftTable: IY,
        mantissaTable: RY,
        exponentTable: OY,
        offsetTable: gY
      }, FY
    }
    const IY = 65504;

    function RY(YY) {
      const rY = AY();
      rY.floatView[0] = YY;
      const DY = rY.uint32View[0],
        FY = DY >> 23 & 511;
      return rY.baseTable[FY] + ((8388607 & DY) >> rY.shiftTable[FY])
    }

    function OY(YY) {
      const rY = AY();
      return rY.uint32View[0] = rY.mantissaTable[rY.offsetTable[YY >> 10] + (1023 & YY)] + rY.exponentTable[YY >> 10], rY.floatView[0]
    }
  },
  39174: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY,
      e: () => AY,
      h: () => FY
    });
    const FY = YY => {
        const rY = ArrayBuffer.isView(YY) ? new Uint8Array(YY.buffer, YY.byteOffset, YY.byteLength) : new Uint8Array(YY);
        return "function" === typeof rY.toBase64 ? rY.toBase64() : function(YY) {
          const rY = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let DY, FY, AY, IY, RY, OY, gY, aY = "",
            vY = 0;
          for (; vY < YY.length;) DY = YY[vY++], FY = vY < YY.length ? YY[vY++] : Number.NaN, AY = vY < YY.length ? YY[vY++] : Number.NaN, IY = DY >> 2, RY = (3 & DY) << 4 | FY >> 4, OY = (15 & FY) << 2 | AY >> 6, gY = 63 & AY, isNaN(FY) ? OY = gY = 64 : isNaN(AY) && (gY = 64), aY += rY.charAt(IY) + rY.charAt(RY) + rY.charAt(OY) + rY.charAt(gY);
          return aY
        }(rY)
      },
      AY = YY => atob(YY),
      IY = YY => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(YY).buffer : function(YY) {
        const rY = AY(YY),
          DY = rY.length,
          FY = new Uint8Array(new ArrayBuffer(DY));
        for (let AY = 0; AY < DY; AY++) FY[AY] = rY.charCodeAt(AY);
        return FY.buffer
      }(YY)
  },
  39037: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY,
      e: () => RY
    });
    let FY = [];
    class AY {
      static SetImmediate(YY) {
        0 === FY.length && setTimeout((() => {
          const YY = FY;
          FY = [];
          for (const rY of YY) rY()
        }), 1), FY.push(YY)
      }
    }

    function IY(YY, rY, DY) {
      try {
        if (YY()) return rY(), !0
      } catch (FY) {
        return DY?.(FY), !0
      }
      return !1
    }
    const RY = function(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        RY = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && IY(YY, rY, DY)) return null;
      const OY = setInterval((() => {
        IY(YY, rY, DY) ? clearInterval(OY) : (AY -= FY, AY < 0 && (clearInterval(OY), DY?.(new Error("Operation timed out after maximum retries. " + (RY || "")), !0)))
      }), FY);
      return () => clearInterval(OY)
    }
  },
  39169: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY
    });
    class FY {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(FY.CustomRequestHeaders).length > 0 || FY.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(YY) {
        return YY = (YY = YY.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(YY) {
        return FY.SkipRequestModificationForBabylonCDN && (YY.includes("preview.babylonjs.com") || YY.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(YY) {
        const rY = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (FY._ShouldSkipRequestModifications(YY)) return {
          url: YY,
          headers: rY
        };
        for (const AY in FY.CustomRequestHeaders) {
          const YY = FY.CustomRequestHeaders[AY];
          YY && (rY[AY] = YY)
        }
        const DY = {
          setRequestHeader: (YY, DY) => {
            rY[YY] = DY
          }
        };
        for (const AY of FY.CustomRequestModifiers) {
          if (FY._ShouldSkipRequestModifications(YY)) break;
          const rY = AY(DY, YY);
          "string" === typeof rY && (YY = rY)
        }
        return {
          url: YY,
          headers: rY
        }
      }
      static async FetchAsync(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const DY = rY.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: AY,
            headers: IY
          } = FY._CollectCustomizations(FY._CleanUrl(YY), rY.headers ?? {});
          return await fetch(AY, {
            method: DY,
            headers: IY,
            body: rY.body ?? void 0
          })
        }
        return await new Promise(((AY, IY) => {
          const RY = new FY;
          RY.responseType = "arraybuffer", RY.addEventListener("readystatechange", (() => {
            if (4 === RY.readyState)
              if (RY.status >= 200 && RY.status < 300) {
                const YY = "undefined" !== typeof Headers ? new Headers : void 0,
                  rY = RY.getResponseHeader("Content-Type");
                rY && YY && YY.set("Content-Type", rY), "undefined" !== typeof Response ? AY(new Response(RY.response, {
                  status: RY.status,
                  statusText: RY.statusText,
                  headers: YY
                })) : AY({
                  ok: !0,
                  status: RY.status,
                  statusText: RY.statusText,
                  headers: {
                    get: YY => RY.getResponseHeader(YY)
                  },
                  arrayBuffer: async () => await Promise.resolve(RY.response)
                })
              } else IY(new Error(`HTTP ${RY.status} loading '${RY.requestURL}': ${RY.statusText}`))
          })), RY.open(DY, YY, rY.headers), RY.send(rY.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(YY) {
        this._xhr.onprogress = YY
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
      set responseType(YY) {
        this._xhr.responseType = YY
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(YY) {
        this._xhr.timeout = YY
      }
      addEventListener(YY, rY, DY) {
        this._xhr.addEventListener(YY, rY, DY)
      }
      removeEventListener(YY, rY, DY) {
        this._xhr.removeEventListener(YY, rY, DY)
      }
      abort() {
        this._xhr.abort()
      }
      send(YY) {
        this._xhr.send(YY)
      }
      open(YY, rY, DY) {
        const {
          url: AY,
          headers: IY
        } = FY._CollectCustomizations(rY, DY);
        this._requestURL = FY._CleanUrl(AY), this._xhr.open(YY, this._requestURL, !0);
        for (const FY in IY) this._xhr.setRequestHeader(FY, IY[FY])
      }
      setRequestHeader(YY, rY) {
        this._xhr.setRequestHeader(YY, rY)
      }
      getResponseHeader(YY) {
        return this._xhr.getResponseHeader(YY)
      }
    }
    FY.CustomRequestHeaders = {}, FY.CustomRequestModifiers = new Array, FY.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);