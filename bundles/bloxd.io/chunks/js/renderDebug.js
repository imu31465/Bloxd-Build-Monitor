export const id = 47;
export const ids = [47];
export const modules = {
  4267: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => vY
    });
    var FY = DY(19),
      AY = DY(25),
      IY = DY(1287),
      RY = DY(2565);
    const OY = 3e4,
      gY = 1e3;

    function aY() {
      return "visible" === document.visibilityState && "inGame" === FY.b.get("gameState") && (0, IY.l)()
    }

    function vY(YY, rY) {
      (0, RY.s)() || function(YY, rY, DY) {
        let FY = 0;
        const AY = setInterval((() => {
          rY() && (FY += gY, FY >= YY && (clearInterval(AY), DY()))
        }), gY)
      }(OY, aY, (() => {
        rY().then((() => {
          YY(`saved for the player after ${OY/1e3} s of play`), (0, RY.C)(), AY.g.vo("chat", {
            content: [{
              str: "Saved a debug file to your downloads: please send it to us with a screenshot of the game.",
              style: {
                color: "#ffd84a"
              }
            }]
          })
        }))
      }))
    }
  },
  4260: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      installRenderDebug: () => uD,
      renderDebugPlayable: () => iD,
      startRenderDebug: () => sD,
      waitForDraw: () => yD
    });
    var FY = DY(4227),
      AY = DY(4267),
      IY = DY(2565);
    const RY = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function OY(YY) {
      return 7 & YY
    }

    function gY(YY) {
      return YY >>> 11 & 1
    }

    function aY(YY) {
      return [1 + (YY >>> 18 & 63), 1 + (YY >>> 24 & 63)]
    }

    function vY(YY, rY) {
      const [DY, , FY] = YY, AY = OY(FY), IY = function(YY, rY, DY) {
        return rY + (1 === (22 >>> YY & 1) ? 4 - DY : DY) & 3
      }(AY, gY(FY), rY), RY = AY >>> 1, [vY, uY] = aY(DY), sY = 1 === IY || 2 === IY ? vY : 0, iY = IY >= 2 ? uY : 0, yY = [63 & DY, DY >>> 6 & 63, DY >>> 12 & 63];
      return yY[2 === RY ? 0 : 2] += sY, yY[1 === RY ? 0 : 1] += iY, yY
    }

    function uY(YY) {
      const rY = Math.max(...aY(YY[0]));
      return 1 === rY ? "1" : rY <= 4 ? "2-4" : rY <= 16 ? "5-16" : "17-64"
    }
    const sY = 16;

    function iY(YY) {
      let rY = 2166136261;
      for (let DY = 0; DY < YY.length; DY++) rY = Math.imul(rY ^ YY[DY], 16777619);
      return rY >>> 0
    }

    function yY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const FY = Math.max(0, rY - DY),
        AY = Math.min(YY.length, rY + DY),
        IY = [];
      for (let RY = FY; RY < AY; RY++) {
        const DY = YY[RY].toString(16).padStart(2, "0");
        IY.push(RY === rY ? `[${DY}]` : DY)
      }
      return IY.join(" ")
    }
    const QY = {
        NO_ERROR: 0,
        POINTS: 0,
        ARRAY_BUFFER: 34962,
        ELEMENT_ARRAY_BUFFER: 34963,
        ARRAY_BUFFER_BINDING: 34964,
        ELEMENT_ARRAY_BUFFER_BINDING: 34965,
        COPY_READ_BUFFER: 36662,
        COPY_WRITE_BUFFER: 36663,
        COPY_READ_BUFFER_BINDING: 36662,
        COPY_WRITE_BUFFER_BINDING: 36663,
        UNIFORM_BUFFER: 35345,
        UNIFORM_BUFFER_BINDING: 35368,
        PIXEL_UNPACK_BUFFER: 35052,
        PIXEL_UNPACK_BUFFER_BINDING: 35055,
        TRANSFORM_FEEDBACK_BUFFER: 35982,
        TRANSFORM_FEEDBACK_BUFFER_BINDING: 35983,
        TRANSFORM_FEEDBACK: 36386,
        TRANSFORM_FEEDBACK_BINDING: 36389,
        INTERLEAVED_ATTRIBS: 35980,
        RASTERIZER_DISCARD: 35977,
        STREAM_READ: 35041,
        CURRENT_PROGRAM: 35725,
        LINK_STATUS: 35714,
        VERTEX_SHADER: 35633,
        FRAGMENT_SHADER: 35632,
        DEPTH_FUNC: 2932,
        DEPTH_CLEAR_VALUE: 2931,
        SAMPLES: 32937,
        DRAW_FRAMEBUFFER: 36009,
        DEPTH_ATTACHMENT: 36096,
        FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 36048,
        FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 33302,
        FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 33297,
        DRAW_FRAMEBUFFER_BINDING: 36006,
        ACTIVE_UNIFORMS: 35718,
        ACTIVE_UNIFORM_BLOCKS: 35382,
        UNIFORM_BLOCK_BINDING: 35391,
        UNIFORM_BLOCK_INDEX: 35386,
        INVALID_INDEX: 4294967295,
        MAX_VERTEX_ATTRIBS: 34921,
        VERTEX_ATTRIB_ARRAY_ENABLED: 34338,
        VERTEX_ATTRIB_ARRAY_SIZE: 34339,
        VERTEX_ATTRIB_ARRAY_STRIDE: 34340,
        VERTEX_ATTRIB_ARRAY_TYPE: 34341,
        VERTEX_ATTRIB_ARRAY_POINTER: 34373,
        VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 34975,
        VERTEX_ATTRIB_ARRAY_INTEGER: 35069,
        VERTEX_ATTRIB_ARRAY_DIVISOR: 35070,
        CURRENT_VERTEX_ATTRIB: 34342,
        TEXTURE_2D: 3553,
        TEXTURE0: 33984,
        ACTIVE_TEXTURE: 34016,
        TEXTURE_BINDING_2D: 32873,
        READ_FRAMEBUFFER: 36008,
        READ_FRAMEBUFFER_BINDING: 36010,
        COLOR_ATTACHMENT0: 36064,
        RGBA_INTEGER: 36249,
        UNSIGNED_INT: 5125,
        RGBA32UI: 36208,
        RGBA16UI: 36214,
        UNSIGNED_INT_SAMPLER_2D: 36306,
        UNPACK_ROW_LENGTH: 3314,
        UNPACK_SKIP_ROWS: 3315,
        UNPACK_SKIP_PIXELS: 3316,
        FLOAT: 5126,
        FLOAT_VEC2: 35664,
        FLOAT_VEC3: 35665,
        FLOAT_VEC4: 35666,
        INT_VEC2: 35667,
        INT_VEC3: 35668,
        INT_VEC4: 35669,
        UNSIGNED_INT_VEC2: 36294,
        UNSIGNED_INT_VEC3: 36295,
        UNSIGNED_INT_VEC4: 36296,
        FLOAT_MAT3: 35675,
        FLOAT_MAT4: 35676
      },
      oY = "_vs2fs_location0",
      WY = 0,
      EY = 4,
      mY = 6,
      VY = [0, 1, 2, 0, 2, 3],
      SY = 2048,
      lY = 4,
      TY = 256,
      eY = 64,
      NY = 268435456,
      BY = 65536,
      cY = /^#version [^\n]*\/\/ program (\S+)$/m;

    function KY(YY) {
      return null === YY.name ? `#${YY.id}` : `#${YY.id} ${YY.name}`
    }
    const HY = [],
      zY = new WeakMap,
      ZY = new WeakMap,
      CY = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let fY = 1;
    const jY = new WeakMap;

    function hY(YY) {
      if (null === YY) return 0;
      let rY = jY.get(YY);
      return void 0 === rY && (rY = fY++, jY.set(YY, rY)), rY
    }
    class dY {
      constructor(YY, rY) {
        this.print = YY, this.now = rY, this.shown = 0, this.ja = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.Mi = [], this.dropped = 0
      }
      line(YY) {
        const rY = this.now();
        if (rY - this.second >= 1e3 && (this.second = rY, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.ja++, void this.store(YY);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${YY} (the last line here: the rest go to bloxdDebug.save())` : YY)
      }
      keep(YY) {
        this.sections++, this.store(YY)
      }
      store(YY) {
        this.Mi.push(`${new Date(Date.now()).toISOString()} ${YY}`), this.Mi.length > 2e4 && (this.Mi.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.ja} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.Mi].join("\n")
      }
    }
    let JY = null;

    function MY() {
      if (null === JY) {
        const YY = new dY((YY => {
          (0, IY.n)("render", YY)
        }), (() => performance.now()));
        (0, IY.k)("render", (() => YY.dump())), JY = YY
      }
      return JY
    }

    function wY(YY) {
      MY().line(YY)
    }

    function bY(YY) {
      MY().keep(YY)
    }

    function XY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return YY.length <= rY ? YY : `${YY.slice(0,rY)}... (${YY.length-rY} more characters)`
    }

    function qY(YY, rY, DY, FY, AY, IY) {
      const RY = CY.pendingCheck;
      if (null === RY) return;
      const OY = "undefined" !== typeof WebGL2RenderingContext && YY instanceof WebGL2RenderingContext,
        gY = {
          gl: YY,
          program: DY,
          call: FY,
          ws: AY,
          instances: IY,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (RY.draws.push(gY), OY) try {
        const FY = function(YY) {
          const rY = [],
            DY = new Map,
            FY = Math.min(16, YY.getParameter(QY.MAX_VERTEX_ATTRIBS));
          for (let AY = 0; AY < FY; AY++) {
            if (!YY.getVertexAttrib(AY, QY.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const FY = YY.getVertexAttrib(AY, QY.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              IY = YY.getVertexAttribOffset(AY, QY.VERTEX_ATTRIB_ARRAY_POINTER),
              RY = YY.getVertexAttrib(AY, QY.VERTEX_ATTRIB_ARRAY_STRIDE),
              OY = YY.getVertexAttrib(AY, QY.VERTEX_ATTRIB_ARRAY_SIZE),
              gY = YY.getVertexAttrib(AY, QY.VERTEX_ATTRIB_ARRAY_TYPE),
              aY = "VERTEX_ATTRIB_ARRAY_INTEGER" in YY && YY.getVertexAttrib(AY, QY.VERTEX_ATTRIB_ARRAY_INTEGER),
              vY = "VERTEX_ATTRIB_ARRAY_DIVISOR" in YY ? YY.getVertexAttrib(AY, QY.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            DY.set(AY, {
              buffer: FY,
              offset: IY,
              stride: RY
            }), rY.push(`@${AY} buf#${hY(FY)} +${IY} stride ${RY} ${OY}x0x${gY.toString(16)}${aY?" int":""} div ${vY}`)
          }
          return {
            lines: rY,
            byLocation: DY
          }
        }(YY);
        if (gY.attributes = FY.lines, "inst" === DY.terrain) {
          const {
            group: AY,
            chunk: OY
          } = function(YY, rY, DY) {
            const FY = rY.get(mY),
              AY = YY.getVertexAttrib(mY, QY.CURRENT_VERTEX_ATTRIB),
              IY = FY ? `+${FY.offset}` : AY ? Array.from(AY).slice(0, 3).join(",") : "?";
            let RY = DY.groups.get(IY);
            return void 0 === RY && (RY = DY.groups.size, DY.groups.set(IY, RY)), {
              group: RY,
              chunk: IY
            }
          }(YY, FY.byLocation, RY);
          gY.group = AY, gY.chunk = OY;
          for (const YY of [WY, EY]) {
            var aY;
            const rY = null === (aY = FY.byLocation.get(YY)) || void 0 === aY ? void 0 : aY.buffer;
            rY && gY.pages.push({
              kind: "buf",
              buffer: rY
            })
          }! function(YY, rY, DY, FY, AY, IY, RY) {
            const OY = FY.get(WY),
              gY = RY.parts.get(IY);
            if (void 0 === gY && RY.parts.size >= lY) return;
            const aY = Math.min(AY, eY, TY - (null !== gY && void 0 !== gY ? gY : 0));
            if (null === OY || void 0 === OY || !OY.buffer || aY <= 0) return;
            const vY = pY(YY, rY, DY);
            if (!vY) return;
            const uY = OY.stride || 12,
              sY = PY(YY, OY.buffer, OY.offset, (aY - 1) * uY + 12),
              iY = new DataView(sY.buffer),
              yY = function(YY, rY) {
                const DY = function(YY) {
                    const rY = tY.get(YY);
                    if (void 0 !== rY && (null === rY || YY.isProgram(rY))) return rY;
                    CY.inProbe = !0;
                    let DY = null;
                    try {
                      DY = kY(YY, UY, LY, "fed", "the record feed")
                    } finally {
                      CY.inProbe = !1
                    }
                    return tY.set(YY, DY), DY
                  }(YY),
                  FY = DY ? nY(YY, DY, rY, (() => {
                    YY.drawArraysInstanced(QY.POINTS, 0, 1, rY)
                  }), "decode probe input (the record feed)") : null;
                return FY ? new Uint32Array(FY.buffer) : null
              }(YY, aY);
            yY || RY.fed.failed++;
            const oY = nY(YY, vY, 4 * aY, (() => {
              YY.drawArraysInstanced(QY.POINTS, 0, 4, aY)
            }));
            if (!oY) return;
            RY.parts.set(IY, (null !== gY && void 0 !== gY ? gY : 0) + aY);
            for (let QY = 0; QY < aY; QY++) {
              const YY = QY * uY,
                rY = [iY.getUint32(YY, !0), iY.getUint32(YY + 4, !0), iY.getUint32(YY + 8, !0)],
                DY = yY ? [yY[3 * QY], yY[3 * QY + 1], yY[3 * QY + 2]] : rY;
              yY && (RY.fed.records++, DY.some(((YY, DY) => YY !== rY[DY])) && (RY.fed.differing++, RY.fed.first.length < 8 && RY.fed.first.push(`part ${IY} instance ${QY}: fed ${DY.map(Ar).join(" ")} buffer ${rY.map(Ar).join(" ")}`)));
              for (let FY = 0; FY < 4; FY++) {
                const YY = 3 * (4 * QY + FY);
                RY.vertices.push({
                  record: DY,
                  slot: FY,
                  group: IY,
                  gpu: [oY[YY], oY[YY + 1], oY[YY + 2]]
                })
              }
            }
          }(YY, rY, DY, FY.byLocation, IY, AY, RY)
        } else {
          const FY = Yr(YY, rY, 16),
            IY = Yr(YY, rY, 8);
          for (const YY of [FY, IY]) YY && gY.pages.push({
            kind: "tex",
            texture: YY
          });
          FY && function(YY, rY, DY, FY, AY, IY) {
            if (IY.parts.size >= lY) return;
            const RY = pY(YY, rY, DY);
            if (!RY) return;
            let OY = 6 * TY;
            const gY = [];
            for (const [iY, yY] of AY) {
              const YY = Math.min(yY, OY, Math.max(6, 6 * Math.floor(TY / AY.length)));
              YY > 0 && (gY.push([iY, YY]), OY -= YY)
            }
            const aY = gY.reduce(((YY, rY) => {
                let [, DY] = rY;
                return YY + DY
              }), 0),
              vY = nY(YY, RY, aY, (() => {
                for (const [rY, DY] of gY) YY.drawArrays(QY.POINTS, rY, DY)
              }));
            if (!vY) return;
            let uY = 0;
            for (const [iY, yY] of gY) {
              const rY = Math.floor(iY / 6),
                DY = Math.floor((iY + yY - 1) / 6) - rY + 1,
                AY = rr(YY, FY, SY, rY, DY);
              for (let YY = iY; YY < iY + yY; YY++, uY++) {
                var sY;
                const DY = 4 * (Math.floor(YY / 6) - rY),
                  FY = [AY[DY], AY[DY + 1], AY[DY + 2]];
                IY.parts.set(AY[DY + 3], (null !== (sY = IY.parts.get(AY[DY + 3])) && void 0 !== sY ? sY : 0) + (YY % 6 === 0 ? 1 : 0)), IY.vertices.push({
                  record: FY,
                  slot: VY[YY % 6],
                  group: AY[DY + 3],
                  gpu: [vY[3 * uY], vY[3 * uY + 1], vY[3 * uY + 2]]
                })
              }
            }
          }(YY, rY, DY, FY, AY, RY)
        }
      } catch (vY) {
        wY(`decode probe failed on program ${KY(DY)}: ${String(vY)}`)
      }
    }

    function pY(YY, rY, DY) {
      if (void 0 !== DY.probe) return DY.probe && GY(YY, rY, DY.probe), DY.probe;
      DY.probe = null, CY.inProbe = !0;
      try {
        DY.probe = function(YY, rY) {
          return kY(YY, rY.vertex, rY.fragment, oY, `program ${KY(rY)}'s twin`)
        }(YY, DY)
      } finally {
        CY.inProbe = !1
      }
      return DY.probe && GY(YY, rY, DY.probe), DY.probe
    }

    function kY(YY, rY, DY, FY, AY) {
      const IY = [YY.createShader(QY.VERTEX_SHADER), YY.createShader(QY.FRAGMENT_SHADER)],
        RY = YY.createProgram();
      if (!RY || !IY[0] || !IY[1]) return null;
      YY.shaderSource(IY[0], rY), YY.shaderSource(IY[1], DY);
      for (const gY of IY) YY.compileShader(gY), YY.attachShader(RY, gY);
      YY.transformFeedbackVaryings(RY, [FY], QY.INTERLEAVED_ATTRIBS), YY.linkProgram(RY);
      for (const gY of IY) YY.deleteShader(gY);
      var OY;
      return YY.getProgramParameter(RY, QY.LINK_STATUS) ? RY : (wY(`decode probe: ${AY} failed to link: ${XY(null!==(OY=YY.getProgramInfoLog(RY))&&void 0!==OY?OY:"",300)}`), YY.deleteProgram(RY), null)
    }

    function GY(YY, rY, DY) {
      const FY = YY.getProgramParameter(rY, QY.ACTIVE_UNIFORM_BLOCKS);
      for (let OY = 0; OY < FY; OY++) {
        const FY = YY.getActiveUniformBlockName(rY, OY),
          AY = null === FY ? QY.INVALID_INDEX : YY.getUniformBlockIndex(DY, FY);
        AY !== QY.INVALID_INDEX && YY.uniformBlockBinding(DY, AY, YY.getActiveUniformBlockParameter(rY, OY, QY.UNIFORM_BLOCK_BINDING))
      }
      const AY = YY.getParameter(QY.CURRENT_PROGRAM);
      YY.useProgram(DY);
      const IY = YY.getProgramParameter(rY, QY.ACTIVE_UNIFORMS),
        RY = YY.getActiveUniforms(rY, [...Array(IY).keys()], QY.UNIFORM_BLOCK_INDEX);
      for (let OY = 0; OY < IY; OY++) {
        const FY = YY.getActiveUniform(rY, OY);
        if (!FY || -1 !== RY[OY]) continue;
        const AY = FY.name.replace(/\[0\]$/, "");
        for (let IY = 0; IY < FY.size; IY++) {
          const RY = FY.size > 1 ? `${AY}[${IY}]` : FY.name,
            OY = YY.getUniformLocation(rY, RY),
            gY = YY.getUniformLocation(DY, RY);
          OY && gY && xY(YY, gY, FY.type, YY.getUniform(rY, OY))
        }
      }
      YY.useProgram(AY)
    }

    function xY(YY, rY, DY, FY) {
      const AY = ArrayBuffer.isView(FY) ? Array.from(FY) : [Number(FY)];
      switch (DY) {
        case QY.FLOAT:
          return void YY.uniform1f(rY, AY[0]);
        case QY.FLOAT_VEC2:
          return void YY.uniform2fv(rY, AY);
        case QY.FLOAT_VEC3:
          return void YY.uniform3fv(rY, AY);
        case QY.FLOAT_VEC4:
          return void YY.uniform4fv(rY, AY);
        case QY.FLOAT_MAT3:
          return void YY.uniformMatrix3fv(rY, !1, AY);
        case QY.FLOAT_MAT4:
          return void YY.uniformMatrix4fv(rY, !1, AY);
        case QY.UNSIGNED_INT:
          return void YY.uniform1ui(rY, AY[0]);
        case QY.UNSIGNED_INT_VEC2:
          return void YY.uniform2uiv(rY, AY);
        case QY.UNSIGNED_INT_VEC3:
          return void YY.uniform3uiv(rY, AY);
        case QY.UNSIGNED_INT_VEC4:
          return void YY.uniform4uiv(rY, AY);
        case QY.INT_VEC2:
          return void YY.uniform2iv(rY, AY);
        case QY.INT_VEC3:
          return void YY.uniform3iv(rY, AY);
        case QY.INT_VEC4:
          return void YY.uniform4iv(rY, AY);
        default:
          YY.uniform1i(rY, AY[0])
      }
    }

    function nY(YY, rY, DY, FY) {
      let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const IY = YY.getParameter(QY.CURRENT_PROGRAM),
        RY = YY.getParameter(QY.TRANSFORM_FEEDBACK_BINDING),
        OY = YY.getParameter(QY.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        gY = YY.getParameter(QY.COPY_READ_BUFFER_BINDING),
        aY = YY.isEnabled(QY.RASTERIZER_DISCARD),
        vY = YY.createTransformFeedback(),
        uY = YY.createBuffer();
      CY.inProbe = !0;
      try {
        const IY = YY.getError();
        IY !== QY.NO_ERROR && wY(`GL error 0x${IY.toString(16)} pending before the decode probe (the renderer's)`), YY.useProgram(rY), YY.bindTransformFeedback(QY.TRANSFORM_FEEDBACK, vY), YY.bindBuffer(QY.TRANSFORM_FEEDBACK_BUFFER, uY), YY.bufferData(QY.TRANSFORM_FEEDBACK_BUFFER, 12 * DY, QY.STREAM_READ), YY.bindBufferBase(QY.TRANSFORM_FEEDBACK_BUFFER, 0, uY), YY.enable(QY.RASTERIZER_DISCARD), YY.beginTransformFeedback(QY.POINTS), FY(), YY.endTransformFeedback(), YY.bindBufferBase(QY.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const RY = YY.getError();
        if (RY !== QY.NO_ERROR) return wY(`${AY}: GL error 0x${RY.toString(16)} on the feedback draw`), null;
        const OY = new Float32Array(3 * DY);
        return YY.bindBuffer(QY.COPY_READ_BUFFER, uY), YY.getBufferSubData(QY.COPY_READ_BUFFER, 0, OY), OY
      } finally {
        aY || YY.disable(QY.RASTERIZER_DISCARD), YY.bindTransformFeedback(QY.TRANSFORM_FEEDBACK, RY), YY.bindBuffer(QY.TRANSFORM_FEEDBACK_BUFFER, OY), YY.bindBuffer(QY.COPY_READ_BUFFER, gY), YY.deleteTransformFeedback(vY), YY.deleteBuffer(uY), YY.useProgram(IY), CY.inProbe = !1
      }
    }

    function PY(YY, rY, DY, FY) {
      const AY = YY.getParameter(QY.COPY_READ_BUFFER_BINDING),
        IY = new Uint8Array(FY);
      return YY.bindBuffer(QY.COPY_READ_BUFFER, rY), YY.getBufferSubData(QY.COPY_READ_BUFFER, DY, IY), YY.bindBuffer(QY.COPY_READ_BUFFER, AY), IY
    }
    const UY = `#version 300 es\nlayout(location = ${WY}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      LY = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      tY = new WeakMap;

    function Yr(YY, rY, DY) {
      const FY = YY.getProgramParameter(rY, QY.ACTIVE_UNIFORMS),
        AY = YY.getParameter(QY.ACTIVE_TEXTURE);
      try {
        for (let AY = 0; AY < FY; AY++) {
          const FY = YY.getActiveUniform(rY, AY);
          if ((null === FY || void 0 === FY ? void 0 : FY.type) !== QY.UNSIGNED_INT_SAMPLER_2D) continue;
          const IY = YY.getUniformLocation(rY, FY.name),
            RY = IY ? YY.getUniform(rY, IY) : -1;
          if (RY < 0) continue;
          YY.activeTexture(QY.TEXTURE0 + RY);
          const OY = YY.getParameter(QY.TEXTURE_BINDING_2D);
          if (OY && ZY.get(OY) === DY) return OY
        }
        return null
      } finally {
        YY.activeTexture(AY)
      }
    }

    function rr(YY, rY, DY, FY, AY) {
      const IY = new Uint32Array(4 * AY),
        RY = YY.getParameter(QY.READ_FRAMEBUFFER_BINDING),
        OY = YY.createFramebuffer();
      YY.bindFramebuffer(QY.READ_FRAMEBUFFER, OY), YY.framebufferTexture2D(QY.READ_FRAMEBUFFER, QY.COLOR_ATTACHMENT0, QY.TEXTURE_2D, rY, 0);
      try {
        let rY = 0;
        for (; rY < AY;) {
          const RY = FY + rY,
            OY = RY % DY,
            gY = Math.min(AY - rY, DY - OY);
          YY.readPixels(OY, Math.floor(RY / DY), gY, 1, QY.RGBA_INTEGER, QY.UNSIGNED_INT, IY.subarray(4 * rY, 4 * (rY + gY))), rY += gY
        }
      } finally {
        YY.bindFramebuffer(QY.READ_FRAMEBUFFER, RY), YY.deleteFramebuffer(OY)
      }
      return IY
    }

    function Dr(YY, rY, DY) {
      let FY = 0,
        AY = 0;
      for (let gY = 0; gY < rY.bytes.length; gY += BY) {
        FY++;
        const YY = Math.min(gY + BY, rY.bytes.length);
        iY(rY.bytes.subarray(gY, YY)) !== iY(DY.subarray(gY, YY)) && AY++
      }
      const IY = `${YY} ${rY.bytes.length} B cpu ${iY(rY.bytes).toString(16)} gpu ${iY(DY).toString(16)}, ${AY}/${FY} blocks differ${rY.missed?`, ${rY.missed} GPU-side writes uncopied`:""}`;
      if (0 === AY) return IY;
      const {
        count: RY,
        offsets: OY
      } = function(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const FY = Math.min(YY.length, rY.length);
        let AY = Math.abs(YY.length - rY.length);
        const IY = [];
        for (let RY = 0; RY < FY; RY++) YY[RY] !== rY[RY] && (AY++, IY.length < DY && IY.push(RY));
        return {
          count: AY,
          offsets: IY
        }
      }(rY.bytes, DY);
      return bY([`${IY}: ${RY} bytes differ`, ...OY.map((YY => `  +${YY}: cpu ${yY(rY.bytes,YY)} | gpu ${yY(DY,YY)}`))].join("\n")), `${IY}: ${RY} bytes differ, first at ${OY.join(", ")} (context in the saved file)`
    }

    function Fr(YY) {
      if (0 === YY.vertices.length) return void wY(`decode probe (${YY.reason}): no terrain draw probed (${YY.draws.length} seen)`);
      const rY = function(YY) {
          const rY = new Map;
          for (const FY of YY) {
            const YY = rY.get(FY.group);
            YY ? YY.push(FY) : rY.set(FY.group, [FY])
          }
          const DY = {
            vertices: YY.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [FY, AY] of rY) {
            const YY = new Map,
              rY = AY.map((rY => {
                const DY = vY(rY.record, rY.slot),
                  FY = [rY.gpu[0] - DY[0], rY.gpu[1] - DY[1], rY.gpu[2] - DY[2]],
                  AY = FY.map((YY => Math.round(64 * YY))).join(","),
                  IY = YY.get(AY);
                return IY ? IY.count++ : YY.set(AY, {
                  count: 1,
                  offset: FY
                }), DY
              }));
            let IY = [0, 0, 0],
              RY = 0;
            for (const DY of YY.values()) DY.count > RY && (RY = DY.count, IY = DY.offset);
            DY.translations.set(FY, IY), AY.forEach(((YY, FY) => {
              var AY;
              const RY = [rY[FY][0] + IY[0], rY[FY][1] + IY[1], rY[FY][2] + IY[2]];
              if (RY.every(((rY, DY) => {
                  return FY = YY.gpu[DY], AY = rY, Math.abs(FY - AY) <= Math.max(.001, 1e-6 * Math.abs(AY));
                  var FY, AY
                }))) return;
              DY.mismatches++, DY.byDirection[OY(YY.record[2])]++, DY.byDiagonal[gY(YY.record[2])]++;
              const aY = uY(YY.record);
              DY.byBand[aY] = (null !== (AY = DY.byBand[aY]) && void 0 !== AY ? AY : 0) + 1, DY.first.length < sY && DY.first.push({
                ...YY,
                expected: RY
              })
            }))
          }
          return DY
        }(YY.vertices),
        DY = rY.byDirection.map(((YY, rY) => YY ? `${RY[rY]} ${YY}` : "")).filter(Boolean).join(" "),
        FY = Object.entries(rY.byBand).map((YY => {
          let [rY, DY] = YY;
          return `${rY}: ${DY}`
        })).join(" ");
      if (wY(`decode probe (${YY.reason}): ${rY.mismatches}/${rY.vertices} vertices differ from the CPU decode over ${YY.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (rY.mismatches ? ` by direction [${DY}] diagonal [0: ${rY.byDiagonal[0]} 1: ${rY.byDiagonal[1]}] extent [${FY}]` : "")), YY.fed.records > 0 || YY.fed.failed > 0) {
        wY(`decode probe input: ${YY.fed.differing}/${YY.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (YY.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (YY.fed.failed ? `; the feed failed on ${YY.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const rY of YY.fed.first) wY(`  ${rY}`)
      }
      for (const AY of rY.first) {
        const [YY, rY, DY] = AY.record;
        wY(`  mismatch part ${AY.group} r0 ${YY.toString(16)} r1 ${rY.toString(16)} r2 ${DY.toString(16)} slot ${AY.slot} (${RY[OY(DY)]}): expected ${AY.expected.map(Ir).join(",")} gpu ${AY.gpu.map(Ir).join(",")}`)
      }
      bY(`decode probe translations: ${[...rY.translations].map((YY=>{let[rY,DY]=YY;return`${rY}: ${DY.map(Ir).join(",")}`})).join("; ")}`)
    }

    function Ar(YY) {
      return YY.toString(16)
    }

    function Ir(YY) {
      return Number.isInteger(YY) ? String(YY) : YY.toFixed(3)
    }

    function Rr(YY) {
      return null !== CY.pendingCheck ? Promise.resolve() : new Promise((rY => {
        let DY = !1;
        const FY = {
          reason: YY,
          terrainDraws: 0,
          draws: [],
          vertices: [],
          parts: new Map,
          groups: new Map,
          fed: {
            records: 0,
            differing: 0,
            first: [],
            failed: 0
          }
        };
        CY.pendingCheck = FY;
        const AY = () => {
            CY.pendingCheck = null;
            try {
              ! function(YY) {
                wY(`draw ranges (${YY.reason}): ${YY.terrainDraws} terrain draws in the frame, the first ${YY.draws.length} here`);
                for (const rY of YY.draws) {
                  const YY = rY.ws.slice(0, 8).map((YY => {
                      let [rY, DY] = YY;
                      return `${rY}+${DY}`
                    })).join(" "),
                    DY = rY.ws.length > 8 ? ` (+${rY.ws.length-8} ranges)` : "";
                  wY(`  ${KY(rY.program)} ${rY.program.terrain} ${rY.call} ${YY}${DY} x${rY.instances}${rY.group>=0?` part ${rY.group} chunk ${rY.chunk}`:""} | ${rY.attributes.join(" | ")}`)
                }
              }(FY), Fr(FY);
              FY.draws.some((YY => "undefined" !== typeof WebGL2RenderingContext && YY.gl instanceof WebGL2RenderingContext)) || 0 === FY.draws.length ? function(YY) {
                const rY = [],
                  DY = new Map;
                for (const FY of YY)
                  if ("undefined" !== typeof WebGL2RenderingContext && FY.gl instanceof WebGL2RenderingContext)
                    for (const YY of FY.pages) DY.set("buf" === YY.kind ? YY.buffer : YY.texture, {
                      page: YY,
                      gl: FY.gl
                    });
                for (const [FY, {
                    page: AY,
                    gl: IY
                  }] of DY) {
                  const YY = zY.get(FY);
                  if (!YY) {
                    rY.push(`${AY.kind}#${hY(FY)}: no CPU copy (${CY.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === AY.kind) {
                    rY.push(Dr(`buf#${YY.id}`, YY, PY(IY, AY.buffer, 0, YY.bytes.length)));
                    continue
                  }
                  const DY = rr(IY, AY.texture, YY.width, 0, YY.width * YY.height),
                    RY = 16 === YY.texelBytes ? new Uint8Array(DY.buffer) : new Uint8Array(new Uint16Array(DY).buffer);
                  rY.push(Dr(`tex#${YY.id} (${16===YY.texelBytes?"records":"light"})`, YY, RY))
                }
                for (const FY of rY) wY(`page readback ${FY}`)
              }(FY.draws) : wY("page readback: none on WebGL1 (no buffer readback)")
            } catch (YY) {
              wY(`check failed: ${String(YY)}`)
            }
            rY()
          },
          IY = () => {
            if (FY.draws.length > 0 && !DY) return DY = !0, void setTimeout(AY, 0);
            DY || requestAnimationFrame(IY)
          };
        requestAnimationFrame(IY), setTimeout((() => {
          DY || (DY = !0, AY())
        }), 5e3)
      }))
    }
    var Or = DY(4269);
    const gr = 20,
      ar = 24,
      vr = Reflect.apply;

    function ur(YY, rY, DY) {
      if (!YY) return;
      const FY = YY[rY];
      if ("function" === typeof FY) {
        const AY = DY(FY);
        YY[rY] = AY, (0, Or.x)(AY, FY)
      }
    }
    let sr = !1;
    const ir = new WeakMap,
      yr = new WeakMap,
      Qr = new WeakMap,
      or = {
        gl: 0,
        lost: 0
      };
    let Wr = {
        inst: {
          draws: 0,
          faces: 0
        },
        tex: {
          draws: 0,
          faces: 0
        },
        other: {
          draws: 0,
          faces: 0
        }
      },
      Er = {
        buffer: 0,
        texture: 0
      },
      mr = 0;

    function Vr(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (YY instanceof ArrayBuffer) return new Uint8Array(YY, rY, DY || void 0);
      if (!ArrayBuffer.isView(YY)) return null;
      const FY = "BYTES_PER_ELEMENT" in YY ? YY.BYTES_PER_ELEMENT : 1,
        AY = YY.byteOffset + rY * FY,
        IY = DY ? DY * FY : YY.byteLength - rY * FY;
      return new Uint8Array(YY.buffer, AY, Math.max(0, IY))
    }

    function Sr(YY, rY) {
      const DY = function(YY) {
        switch (YY) {
          case QY.ARRAY_BUFFER:
            return QY.ARRAY_BUFFER_BINDING;
          case QY.ELEMENT_ARRAY_BUFFER:
            return QY.ELEMENT_ARRAY_BUFFER_BINDING;
          case QY.COPY_READ_BUFFER:
            return QY.COPY_READ_BUFFER_BINDING;
          case QY.COPY_WRITE_BUFFER:
            return QY.COPY_WRITE_BUFFER_BINDING;
          case QY.UNIFORM_BUFFER:
            return QY.UNIFORM_BUFFER_BINDING;
          case QY.PIXEL_UNPACK_BUFFER:
            return QY.PIXEL_UNPACK_BUFFER_BINDING;
          case QY.TRANSFORM_FEEDBACK_BUFFER:
            return QY.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(rY);
      return DY ? YY.getParameter(DY) : null
    }

    function lr(YY) {
      const rY = zY.get(YY);
      rY && (CY.shadowBytes -= rY.bytes.length, zY.delete(YY))
    }

    function Tr(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      lr(YY), CY.shadowBytes + rY > NY ? CY.uncopied++ : (CY.shadowBytes += rY, zY.set(YY, {
        id: hY(YY),
        bytes: new Uint8Array(rY),
        width: DY,
        height: FY,
        texelBytes: AY,
        missed: 0
      }))
    }

    function er(YY, rY) {
      for (const DY of ["deleteBuffer", "deleteTexture"]) ur(YY, DY, (YY => function() {
        for (var rY = arguments.length, DY = new Array(rY), FY = 0; FY < rY; FY++) DY[FY] = arguments[FY];
        return DY[0] && lr(DY[0]), vr(YY, this, DY)
      }));
      ur(YY, "shaderSource", (YY => function() {
        for (var rY = arguments.length, DY = new Array(rY), FY = 0; FY < rY; FY++) DY[FY] = arguments[FY];
        return DY[0] && "string" === typeof DY[1] && ir.set(DY[0], DY[1]), vr(YY, this, DY)
      })), ur(YY, "attachShader", (YY => function() {
        for (var rY, DY = arguments.length, FY = new Array(DY), AY = 0; AY < DY; AY++) FY[AY] = arguments[AY];
        const IY = FY[0],
          RY = null !== (rY = yr.get(IY)) && void 0 !== rY ? rY : [];
        return RY.push(FY[1]), yr.set(IY, RY), vr(YY, this, FY)
      })), ur(YY, "linkProgram", (YY => function() {
        for (var rY = arguments.length, DY = new Array(rY), FY = 0; FY < rY; FY++) DY[FY] = arguments[FY];
        const AY = vr(YY, this, DY);
        return CY.inProbe || function(YY, rY) {
          var DY, FY, AY;
          "undefined" !== typeof HTMLCanvasElement && YY.canvas instanceof HTMLCanvasElement && function(YY) {
            if (zr.has(YY)) return;
            zr.add(YY);
            for (const rY of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) YY.addEventListener(rY, (YY => {
              or.lost < gr && (or.lost++, wY(`${rY}${"statusMessage"in YY?`: ${String(YY.statusMessage)}`:""}`))
            }))
          }(YY.canvas);
          CY.context ??= YY;
          const IY = null !== (DY = yr.get(rY)) && void 0 !== DY ? DY : [];
          let RY = "",
            OY = "";
          for (const vY of IY) {
            var gY;
            const YY = null !== (gY = ir.get(vY)) && void 0 !== gY ? gY : "";
            /\bgl_Position\b/.test(YY) ? RY = YY : OY = YY
          }
          const aY = {
            id: hY(rY),
            name: null !== (FY = null === (AY = cY.exec(RY)) || void 0 === AY ? void 0 : AY[1]) && void 0 !== FY ? FY : null,
            gl: YY,
            vertex: RY,
            fragment: OY,
            terrain: Br(RY),
            checked: !1,
            firstDraw: !1
          };
          if (Qr.set(rY, aY), HY.push([rY, aY]), null !== aY.terrain) {
            const rY = IY.map((rY => {
              var DY;
              return null !== (DY = YY.getShaderInfoLog(rY)) && void 0 !== DY ? DY : ""
            })).filter((YY => "" !== YY.trim()));
            rY.length > 0 && bY(`program ${KY(aY)} (${aY.terrain}) shader logs:\n${XY(rY.join("\n"))}`)
          }
        }(this, DY[0]), AY
      })), ur(YY, "bufferData", (YY => function() {
        for (var rY = arguments.length, DY = new Array(rY), FY = 0; FY < rY; FY++) DY[FY] = arguments[FY];
        const AY = vr(YY, this, DY);
        if (!CY.inProbe) {
          const YY = Sr(this, DY[0]);
          if (YY) {
            var IY, RY, OY;
            const rY = "number" === typeof DY[1] ? null : Vr(DY[1], null !== (IY = DY[3]) && void 0 !== IY ? IY : 0, null !== (RY = DY[4]) && void 0 !== RY ? RY : 0);
            var gY;
            if (Tr(YY, "number" === typeof DY[1] ? DY[1] : null !== (OY = null === rY || void 0 === rY ? void 0 : rY.length) && void 0 !== OY ? OY : 0), rY) null === (gY = zY.get(YY)) || void 0 === gY || gY.bytes.set(rY)
          }
        }
        return AY
      })), ur(YY, "bufferSubData", (YY => function() {
        for (var rY = arguments.length, DY = new Array(rY), FY = 0; FY < rY; FY++) DY[FY] = arguments[FY];
        const AY = vr(YY, this, DY);
        if (!CY.inProbe) {
          var IY, RY;
          const YY = Sr(this, DY[0]),
            rY = YY ? zY.get(YY) : void 0,
            FY = Vr(DY[2], null !== (IY = DY[3]) && void 0 !== IY ? IY : 0, null !== (RY = DY[4]) && void 0 !== RY ? RY : 0);
          if (rY && FY) {
            const YY = DY[1];
            rY.bytes.set(FY.subarray(0, Math.max(0, rY.bytes.length - YY)), YY), Nr("buffer", rY, YY, FY.length)
          }
        }
        return AY
      })), rY && (ur(YY, "copyBufferSubData", (YY => function() {
        for (var rY = arguments.length, DY = new Array(rY), FY = 0; FY < rY; FY++) DY[FY] = arguments[FY];
        const AY = vr(YY, this, DY);
        if (!CY.inProbe) {
          const [YY, rY, FY, AY, IY] = DY, RY = Sr(this, YY), OY = Sr(this, rY), gY = RY ? zY.get(RY) : void 0, aY = OY ? zY.get(OY) : void 0;
          aY && (gY ? aY.bytes.set(gY.bytes.slice(FY, FY + IY), AY) : aY.missed++)
        }
        return AY
      })), ur(YY, "texStorage2D", (YY => function() {
        for (var rY = arguments.length, DY = new Array(rY), FY = 0; FY < rY; FY++) DY[FY] = arguments[FY];
        const AY = vr(YY, this, DY),
          [, , IY, RY, OY] = DY;
        if (!CY.inProbe && (IY === QY.RGBA32UI || IY === QY.RGBA16UI)) {
          const YY = this.getParameter(QY.TEXTURE_BINDING_2D),
            rY = IY === QY.RGBA32UI ? 16 : 8;
          YY && (ZY.set(YY, rY), Tr(YY, RY * OY * rY, RY, OY, rY))
        }
        return AY
      })), ur(YY, "texSubImage2D", (YY => function() {
        for (var rY = arguments.length, DY = new Array(rY), FY = 0; FY < rY; FY++) DY[FY] = arguments[FY];
        const AY = vr(YY, this, DY);
        return !CY.inProbe && DY.length >= 9 && DY[0] === QY.TEXTURE_2D && 0 === DY[1] && function(YY, rY) {
          var DY;
          const FY = YY.getParameter(QY.TEXTURE_BINDING_2D),
            AY = FY ? zY.get(FY) : void 0;
          if (!AY) return;
          const [, , IY, RY, OY, gY] = rY;
          let aY = Vr(rY[8], null !== (DY = rY[9]) && void 0 !== DY ? DY : 0);
          if (null === aY && "number" === typeof rY[8]) {
            const DY = Sr(YY, QY.PIXEL_UNPACK_BUFFER),
              FY = DY ? zY.get(DY) : void 0;
            aY = FY ? FY.bytes.subarray(rY[8]) : null
          }
          if (null === aY) return void AY.missed++;
          const vY = YY.getParameter(QY.UNPACK_ROW_LENGTH) || OY,
            uY = YY.getParameter(QY.UNPACK_SKIP_ROWS),
            sY = YY.getParameter(QY.UNPACK_SKIP_PIXELS),
            iY = AY.texelBytes;
          for (let yY = 0; yY < gY; yY++) {
            const YY = ((uY + yY) * vY + sY) * iY,
              rY = ((RY + yY) * AY.width + IY) * iY;
            AY.bytes.set(aY.subarray(YY, YY + OY * iY), rY)
          }
          Nr("texture", AY, (RY * AY.width + IY) * iY, OY * gY * iY)
        }(this, DY), AY
      })), ur(YY, "copyTexSubImage2D", (YY => function() {
        for (var rY = arguments.length, DY = new Array(rY), FY = 0; FY < rY; FY++) DY[FY] = arguments[FY];
        const AY = DY[0] === QY.TEXTURE_2D ? this.getParameter(QY.TEXTURE_BINDING_2D) : null,
          IY = AY ? zY.get(AY) : void 0;
        return IY && IY.missed++, vr(YY, this, DY)
      })));
      for (const DY of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) ur(YY, DY, (YY => function() {
        for (var rY = arguments.length, FY = new Array(rY), AY = 0; AY < rY; AY++) FY[AY] = arguments[AY];
        const IY = vr(YY, this, FY);
        return CY.inProbe || Kr(this, DY, FY), IY
      }));
      ur(YY, "getExtension", (YY => function() {
        for (var rY = arguments.length, DY = new Array(rY), FY = 0; FY < rY; FY++) DY[FY] = arguments[FY];
        const AY = vr(YY, this, DY);
        return AY && "object" === typeof AY && function(YY, rY, DY) {
          const FY = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(rY in FY) || DY.bloxdRenderDebug) return;
          DY.bloxdRenderDebug = !0;
          for (const AY of FY[rY]) {
            const rY = DY[AY];
            "function" === typeof rY && (DY[AY] = function() {
              for (var FY = arguments.length, IY = new Array(FY), RY = 0; RY < FY; RY++) IY[RY] = arguments[RY];
              const OY = vr(rY, DY, IY);
              return CY.inProbe || Kr(YY, AY, IY), OY
            })
          }
        }(this, DY[0], AY), AY
      }))
    }

    function Nr(YY, rY, DY, FY) {
      Er[YY] += FY, mr < 32 && rY.bytes.length >= 1 << 20 && (mr++, bY(`upload ${YY} #${rY.id} +${DY} ${FY} B`))
    }

    function Br(YY) {
      if (!YY.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(YY) || /in uvec3 _p2vs_location0\b/.test(YY) ? "inst" : "tex"
    }

    function cr(YY, rY, DY) {
      var FY;
      if (DY.checked) return;
      DY.checked = !0;
      const AY = YY.getProgramParameter(rY, QY.LINK_STATUS),
        IY = (null !== (FY = YY.getProgramInfoLog(rY)) && void 0 !== FY ? FY : "").trim();
      var RY;
      null === DY.terrain && AY || (wY(`program ${KY(DY)} ${null!==(RY=DY.terrain)&&void 0!==RY?RY:"other"} link ${AY?"ok":"FAILED"}${IY?`: ${XY(IY,300)}`:""}`), IY && bY(`program ${KY(DY)} link log:\n${XY(IY)}`))
    }

    function Kr(YY, rY, DY) {
      var FY;
      const AY = YY.getParameter(QY.CURRENT_PROGRAM),
        IY = AY ? Qr.get(AY) : void 0;
      if (!AY || !IY) return;
      const RY = null !== (FY = IY.terrain) && void 0 !== FY ? FY : "other",
        {
          ws: OY,
          instances: gY
        } = function(YY, rY) {
          switch (YY) {
            case "drawArrays":
              return {
                ws: [
                  [rY[1], rY[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                ws: [
                  [rY[1], rY[2]]
                ], instances: rY[3]
              };
            case "drawElements":
              return {
                ws: [
                  [0, rY[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                ws: [
                  [0, rY[1]]
                ], instances: rY[4]
              };
            case "multiDrawArraysWEBGL": {
              const YY = rY[1],
                DY = rY[3],
                FY = rY[2],
                AY = rY[4],
                IY = [];
              for (let RY = 0; RY < rY[5]; RY++) IY.push([YY[FY + RY], DY[AY + RY]]);
              return {
                ws: IY,
                instances: 1
              }
            }
            default:
              return {
                ws: [], instances: 0
              }
          }
        }(rY, DY),
        aY = "inst" === IY.terrain ? gY : OY.reduce(((YY, rY) => {
          let [, DY] = rY;
          return YY + DY
        }), 0) / 6;
      if (Wr[RY].draws++, Wr[RY].faces += aY, null === IY.terrain) return;
      if (CY.context = YY, !IY.firstDraw) {
        IY.firstDraw = !0, cr(YY, AY, IY), Hr || (Hr = !0, wY(function(YY) {
          var rY;
          const DY = YY.getParameter(QY.DEPTH_FUNC),
            FY = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let AY = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in YY && YY.getParameter(QY.DRAW_FRAMEBUFFER_BINDING)) {
            const rY = YY;
            AY = rY.getFramebufferAttachmentParameter(QY.DRAW_FRAMEBUFFER, QY.DEPTH_ATTACHMENT, QY.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(rY.getFramebufferAttachmentParameter(QY.DRAW_FRAMEBUFFER,QY.DEPTH_ATTACHMENT,QY.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(rY.getFramebufferAttachmentParameter(QY.DRAW_FRAMEBUFFER,QY.DEPTH_ATTACHMENT,QY.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const IY = YY.getParameter(QY.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(rY=FY[DY])&&void 0!==rY?rY:`0x${DY.toString(16)}`} clear ${IY}${516===DY||518===DY?" (reverse-Z)":""}, samples ${String(YY.getParameter(QY.SAMPLES))}, ${AY}`
        }(YY)));
        const DY = YY.getError();
        DY !== QY.NO_ERROR && or.gl < gr && (or.gl++, wY(`GL error 0x${DY.toString(16)} after program ${KY(IY)}'s first terrain draw (${rY})`))
      }
      const vY = CY.pendingCheck;
      null !== vY && (vY.terrainDraws++, vY.draws.length < ar && qY(YY, AY, IY, rY, OY, gY))
    }
    let Hr = !1;
    const zr = new WeakSet;
    var Zr = DY(4055),
      Cr = DY(4272);
    const fr = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let jr = !1;
    const hr = new WeakSet,
      dr = new WeakMap,
      Jr = new WeakMap,
      Mr = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let wr = 0,
      br = !1,
      Xr = null,
      qr = {
        draws: 0,
        faces: 0
      };

    function pr(YY) {
      const rY = globalThis[YY];
      return null === rY || void 0 === rY ? void 0 : rY.prototype
    }

    function kr(YY) {
      return YY && "function" === typeof YY[Symbol.iterator] ? [...YY].sort().join(" ") : ""
    }

    function Gr(YY, rY) {
      const DY = null !== YY && void 0 !== YY ? YY : {},
        FY = null !== rY && void 0 !== rY ? rY : Object.keys(Object.getPrototypeOf(DY)).concat(Object.keys(DY));
      return [...new Set(FY)].filter((YY => "number" === typeof DY[YY])).map((YY => `${YY} ${String(DY[YY])}`)).join(", ")
    }

    function xr(YY, rY) {
      var DY;
      const FY = null !== (DY = rY.vertex) && void 0 !== DY ? DY : {};
      if (FY.module && hr.has(FY.module)) {
        var AY;
        const DY = String(null !== (AY = FY.entryPoint) && void 0 !== AY ? AY : "");
        if (DY.startsWith("vs_packed") && dr.set(YY, DY), !br) {
          var IY, RY, OY, gY, aY;
          br = !0;
          const YY = null !== (IY = rY.depthStencil) && void 0 !== IY ? IY : {},
            FY = null !== (RY = rY.multisample) && void 0 !== RY ? RY : {},
            AY = String(null !== (OY = YY.depthCompare) && void 0 !== OY ? OY : "");
          wY(`WebGPU terrain pipeline ${DY}: depth ${String(null!==(gY=YY.format)&&void 0!==gY?gY:"none")} ${AY}${AY.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(aY=FY.count)&&void 0!==aY?aY:1)}`)
        }
      }
    }

    function nr(YY) {
      ur(YY, "setPipeline", (YY => function() {
        for (var rY = arguments.length, DY = new Array(rY), FY = 0; FY < rY; FY++) DY[FY] = arguments[FY];
        return Jr.set(this, DY[0]), vr(YY, this, DY)
      }));
      for (const rY of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) ur(YY, rY, (YY => function() {
        const DY = Jr.get(this),
          FY = DY ? dr.get(DY) : void 0;
        for (var AY = arguments.length, IY = new Array(AY), RY = 0; RY < AY; RY++) IY[RY] = arguments[RY];
        return void 0 !== FY && Pr(rY, FY, IY), vr(YY, this, IY)
      }))
    }

    function Pr(YY, rY, DY) {
      var FY;
      (qr.draws++, "draw" === YY || "drawIndexed" === YY) && (qr.faces += DY[0] * (null !== (FY = DY[1]) && void 0 !== FY ? FY : 1) / 6);
      if (null !== Xr && Xr.length < ar) {
        const FY = ("draw" === YY ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === YY ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((rY, FY) => {
          const AY = YY.endsWith("Indirect") ? DY[1] : DY[FY];
          return `${rY} ${String(null!==AY&&void 0!==AY?AY:"instances"===rY?1:0)}`
        }));
        Xr.push(`  ${rY} ${YY} ${FY.join(" ")}`)
      }
    }

    function Ur() {
      if (jr || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      jr = !0, ur(pr("GPU"), "requestAdapter", (YY => function() {
        for (var rY = arguments.length, DY = new Array(rY), FY = 0; FY < rY; FY++) DY[FY] = arguments[FY];
        return vr(YY, this, DY).then((YY => {
          var rY;
          YY ? function(YY) {
            var rY;
            const DY = null !== (rY = YY.info) && void 0 !== rY ? rY : {};
            wY(`WebGPU adapter ${["vendor","architecture","device","description"].map((YY=>{var rY;return`${YY} "${String(null!==(rY=DY[YY])&&void 0!==rY?rY:"")}"`})).join(" ")}${YY.isFallbackAdapter?" (fallback)":""}`), wY(`WebGPU adapter features ${kr(YY.features)}`), wY(`WebGPU adapter limits ${Gr(YY.limits,fr)}`), bY(`WebGPU adapter all limits ${Gr(YY.limits,null)}`)
          }(YY) : wY(`WebGPU requestAdapter(${JSON.stringify(null!==(rY=DY[0])&&void 0!==rY?rY:{})}) gave none`);
          return YY
        }))
      })), ur(pr("GPUAdapter"), "requestDevice", (YY => function() {
        for (var rY = arguments.length, DY = new Array(rY), FY = 0; FY < rY; FY++) DY[FY] = arguments[FY];
        return vr(YY, this, DY).then((YY => (function(YY) {
          wY(`WebGPU device features ${kr(YY.features)}`), wY(`WebGPU device limits ${Gr(YY.limits,fr)}`), YY.addEventListener("uncapturederror", (YY => {
            if (Mr.uncaptured < gr) {
              var rY, DY, FY;
              Mr.uncaptured++;
              const AY = YY.error;
              wY(`WebGPU uncaptured ${null!==(rY=null===AY||void 0===AY||null===(DY=AY.constructor)||void 0===DY?void 0:DY.name)&&void 0!==rY?rY:"error"}: ${XY(String(null!==(FY=null===AY||void 0===AY?void 0:AY.message)&&void 0!==FY?FY:""),600)}`)
            }
          }));
          const rY = YY.lost;
          null === rY || void 0 === rY || rY.then((YY => {
            var rY;
            wY(`WebGPU device lost (${String(YY.reason)}): ${XY(String(null!==(rY=YY.message)&&void 0!==rY?rY:""),600)}`)
          }))
        }(YY), YY)), (YY => {
          throw wY(`WebGPU requestDevice failed: ${String(YY)}`), YY
        }))
      }));
      const YY = pr("GPUDevice");
      ur(YY, "createShaderModule", (YY => function() {
        for (var rY, DY, FY = arguments.length, AY = new Array(FY), IY = 0; IY < FY; IY++) AY[IY] = arguments[IY];
        const RY = vr(YY, this, AY);
        return function(YY, rY) {
          const DY = rY.includes("decodeQuad");
          DY && hr.add(YY);
          const FY = YY.getCompilationInfo;
          null === FY || void 0 === FY || FY.call(YY).then((YY => {
            if (0 === YY.messages.length && !DY) return;
            const rY = {};
            for (const DY of YY.messages) {
              var FY;
              rY[String(DY.type)] = (null !== (FY = rY[String(DY.type)]) && void 0 !== FY ? FY : 0) + 1
            }
            const AY = YY.messages.map((YY => `${String(YY.type)} ${String(YY.lineNum)}:${String(YY.linePos)} ${String(YY.message)}`)).join("\n");
            Mr.compile < gr && (Mr.compile++, wY(`WebGPU ${DY?"terrain ":""}shader module compiled: ${JSON.stringify(rY)}${AY?` first: ${XY(AY.split("\n")[0],300)}`:""}`)), AY && bY(`WebGPU shader module messages:\n${XY(AY)}`)
          }))
        }(RY, String(null !== (rY = (null !== (DY = AY[0]) && void 0 !== DY ? DY : {}).code) && void 0 !== rY ? rY : "")), RY
      })), ur(YY, "createRenderPipeline", (YY => function() {
        for (var rY, DY = arguments.length, FY = new Array(DY), AY = 0; AY < DY; AY++) FY[AY] = arguments[AY];
        const IY = vr(YY, this, FY);
        return xr(IY, null !== (rY = FY[0]) && void 0 !== rY ? rY : {}), IY
      })), ur(YY, "createRenderPipelineAsync", (YY => function() {
        for (var rY = arguments.length, DY = new Array(rY), FY = 0; FY < rY; FY++) DY[FY] = arguments[FY];
        return vr(YY, this, DY).then((YY => {
          var rY;
          return xr(YY, null !== (rY = DY[0]) && void 0 !== rY ? rY : {}), YY
        }), (YY => {
          var rY;
          throw function(YY, rY) {
            var DY, FY, AY;
            if (Mr.rejected >= gr) return;
            Mr.rejected++;
            const {
              reason: IY,
              message: RY
            } = null !== rY && void 0 !== rY ? rY : {}, OY = String(null !== (DY = (null !== (FY = YY.vertex) && void 0 !== FY ? FY : {}).entryPoint) && void 0 !== DY ? DY : "");
            wY(`WebGPU pipeline "${String(null!==(AY=YY.label)&&void 0!==AY?AY:"")}" ${OY} rejected (${String(null!==IY&&void 0!==IY?IY:"no reason")}): ${XY(String(null!==RY&&void 0!==RY?RY:rY),600)}`)
          }(null !== (rY = DY[0]) && void 0 !== rY ? rY : {}, YY), YY
        }))
      })), ur(pr("GPUCanvasContext"), "configure", (YY => function() {
        for (var rY, DY = arguments.length, FY = new Array(DY), AY = 0; AY < DY; AY++) FY[AY] = arguments[AY];
        const IY = null !== (rY = FY[0]) && void 0 !== rY ? rY : {};
        var RY, OY;
        wr++ < 3 && wY(`WebGPU canvas ${String(IY.format)} ${String(null!==(RY=IY.colorSpace)&&void 0!==RY?RY:"srgb")} alpha ${String(null!==(OY=IY.alphaMode)&&void 0!==OY?OY:"opaque")}`);
        return vr(YY, this, FY)
      })), nr(pr("GPURenderPassEncoder")), nr(pr("GPURenderBundleEncoder"))
    }
    const Lr = 1e4,
      tr = 6e4,
      YD = 5e3,
      rD = 3e3,
      DD = 100;
    let FD = null,
      AD = !1,
      ID = {
        ...Zr.c
      },
      RD = !1,
      OD = null,
      gD = 0,
      aD = () => {};
    const vD = new Promise((YY => {
      aD = YY
    }));

    function uD() {
      var YY;
      AD || (AD = !0, ID = Object.assign(window.bloxdRenderDebug ??= {
        ...Zr.c
      }, {
        faceCull: "0" === (0, IY.p)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (YY = (0, IY.p)("adrenoProbe")) && void 0 !== YY ? YY : ""
      }), wY("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), sr || "undefined" === typeof window || (sr = !0, "undefined" !== typeof WebGL2RenderingContext && er(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && er(WebGLRenderingContext.prototype, !1)), Ur(), (0, IY.e)("renderProbe", (() => {
        WD("console")
      })), QD(), setInterval(mD, YD))
    }

    function sD(YY) {
      var rY, DY;
      uD(), FD = null !== (rY = null === YY || void 0 === YY ? void 0 : YY.backend) && void 0 !== rY ? rY : null;
      const FY = `, renderer param ${null!==(DY=(0,IY.p)("renderer"))&&void 0!==DY?DY:"none"}, faceCull ${"0"===ID.faceCull?"off (whole parts)":"on"}, adrenoProbe ${ID.adrenoProbe||"none"}`;
      wY(`${(0,Cr.c)(YY)}${null===YY?"":FY}`)
    }

    function iD() {
      const YY = performance.now(),
        rY = yD(vD, Lr, tr).then((rY => WD(`${Math.round((performance.now()-YY)/1e3)} s after playable${rY?"":", no terrain drawn yet"}`)));
      (0, AY.b)(wY, (async () => {
        await rY, await OD
      }))
    }
    async function yD(YY, rY, DY) {
      const AY = (0, FY.c)(DY).then((() => !1));
      return await (0, FY.c)(rY), Promise.race([YY.then((() => !0)), AY])
    }

    function QD() {
      requestAnimationFrame((() => {
        gD++, QD()
      }))
    }

    function oD() {
      var YY, rY, DY;
      if (RD) return;
      (RD = !0, wY(`renderer caps ${null!==(YY=ID.caps)&&void 0!==YY?YY:"(not noted)"}; terrain fetch ${null!==(rY=ID.fetch)&&void 0!==rY?rY:"(not noted)"}`), ID.adrenoProbe) && wY(`adrenoProbe ${ID.adrenoProbe} asked; in force (storage fetch only): ${null!==(DY=ID.probe)&&void 0!==DY?DY:"(not noted)"}`);
      const FY = CY.context;
      if (FY) {
        for (const YY of function(YY) {
            var rY;
            const DY = [],
              FY = YY.getExtension("WEBGL_debug_renderer_info"),
              AY = FY ? YY.getParameter(FY.UNMASKED_VENDOR_WEBGL) : "(masked)",
              IY = FY ? YY.getParameter(FY.UNMASKED_RENDERER_WEBGL) : "(masked)";
            DY.push(`GL ${String(YY.getParameter(YY.VERSION))} | ${String(YY.getParameter(YY.SHADING_LANGUAGE_VERSION))} | ${String(YY.getParameter(YY.VENDOR))} / ${String(YY.getParameter(YY.RENDERER))}`), DY.push(`GL unmasked ${AY} / ${IY}`);
            const RY = [
              ["MAX_TEXTURE_SIZE", YY.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", YY.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", YY.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", YY.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", YY.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", YY.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", YY.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in YY && RY.push(["MAX_UNIFORM_BLOCK_SIZE", YY.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", YY.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", YY.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", YY.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), DY.push(`GL limits ${RY.map((rY=>{let[DY,FY]=rY;return`${DY} ${String(YY.getParameter(FY))}`})).join(", ")}`);
            const OY = (rY, DY) => {
              const FY = YY.getShaderPrecisionFormat(rY, YY.HIGH_FLOAT),
                AY = YY.getShaderPrecisionFormat(rY, YY.HIGH_INT);
              return `${DY} highp float ${FY?`${FY.rangeMin}/${FY.rangeMax}/${FY.precision}`:"?"} int ${AY?`${AY.rangeMin}/${AY.rangeMax}/${AY.precision}`:"?"}`
            };
            DY.push(`GL precision ${OY(YY.VERTEX_SHADER,"VS")}, ${OY(YY.FRAGMENT_SHADER,"FS")}`);
            const gY = YY.getContextAttributes();
            return DY.push(`GL context ${JSON.stringify(gY)} drawingBuffer ${YY.drawingBufferWidth}x${YY.drawingBufferHeight}${"drawingBufferFormat"in YY?` format 0x${Number(YY.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in YY?` ${String(YY.drawingBufferColorSpace)}`:""}`), DY.push(`GL extensions ${(null!==(rY=YY.getSupportedExtensions())&&void 0!==rY?rY:[]).join(" ")}`), DY
          }(FY)) wY(YY);
        ! function() {
          if (!CY.context) return;
          let YY = 0,
            rY = 0;
          for (const [DY, FY] of HY) !FY.gl.isContextLost() && FY.gl.isProgram(DY) && (rY++, cr(FY.gl, DY, FY), null !== FY.terrain && YY++);
          wY(`programs: ${rY} live of ${HY.length} linked, ${YY} packed terrain; CPU page copies ${Math.round(CY.shadowBytes/1048576)} MiB (${CY.uncopied} over budget)`)
        }()
      }
    }

    function WD(YY) {
      return OD ??= async function(YY) {
        oD(), "webgpu" === FD ? (ED(), "1" === ID.slotCheck && wY("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), ID.slotCheck = "1", await
          function(YY) {
            if (null !== Xr) return Promise.resolve();
            const rY = [];
            return Xr = rY, new Promise((DY => {
              setTimeout((() => {
                Xr = null, wY(`WebGPU draw ranges (${YY}): ${rY.length} terrain draws recorded in a second (first ${ar}; bundles replay without new ones)`);
                for (const YY of rY) wY(YY);
                DY()
              }), 1e3)
            }))
          }(YY), await async function() {
            for (let YY = 0;
              "1" === ID.slotCheck && YY < rD; YY += DD) await (0, FY.c)(DD);
            if ("1" === ID.slotCheck) return void wY(`slot check: no answer in ${rD} ms (only the storage fetch has one; a later answer logs on its own)`);
            ED()
          }()) : await Rr(YY);
        wY(`check (${YY}) done: bloxdDebug.save() downloads it all`)
      }(YY).catch((rY => {
        wY(`check (${YY}) failed: ${String(rY)}`)
      })).finally((() => {
        OD = null
      })), OD
    }

    function ED() {
      void 0 !== ID.slotCheck && "1" !== ID.slotCheck && (wY(ID.slotCheck), delete ID.slotCheck)
    }

    function mD() {
      const YY = YY => gD ? (YY / gD).toFixed(1) : "0",
        rY = function() {
          const YY = qr;
          return qr = {
            draws: 0,
            faces: 0
          }, YY
        }(),
        DY = function() {
          const YY = Wr;
          return Wr = {
            inst: {
              draws: 0,
              faces: 0
            },
            tex: {
              draws: 0,
              faces: 0
            },
            other: {
              draws: 0,
              faces: 0
            }
          }, YY
        }(),
        FY = function() {
          const YY = Er;
          return Er = {
            buffer: 0,
            texture: 0
          }, YY
        }();
      ED(), ("webgpu" === FD ? rY.draws : DY.inst.draws + DY.tex.draws) > 0 && aD();
      const AY = "webgpu" === FD ? [`terrain ${YY(rY.draws)} draws ${YY(rY.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((YY => DY[YY].draws > 0)).map((rY => `${rY} ${YY(DY[rY].draws)} draws ${YY(DY[rY].faces)} faces a frame`));
      wY(`${gD} frames: ${AY.join(", ")||"no draws"}; uploaded ${Math.round(FY.buffer/1024)} KiB to buffers, ${Math.round(FY.texture/1024)} KiB to data textures`), gD = 0
    }
  },
  4272: (YY, rY, DY) => {
    function FY(YY) {
      if (null === YY) return "backend: none picked (no renderer build)";
      const rY = YY.adapter ? `${YY.adapter.vendor}/${YY.adapter.architecture}` : "none";
      return `backend ${YY.backend}: reason ${YY.reason}, source ${YY.source}, adapter ${rY}`
    }
    DY.d(rY, {
      c: () => FY
    })
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);