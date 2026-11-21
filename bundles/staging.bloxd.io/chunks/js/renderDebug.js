export const id = 47;
export const ids = [47];
export const modules = {
  4536: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => uQ
    });
    var LQ = wQ(17),
      qQ = wQ(22),
      oQ = wQ(1302),
      DQ = wQ(2753);
    const kQ = 3e4,
      vQ = 1e3;

    function mQ() {
      return "visible" === document.visibilityState && "inGame" === LQ.c.get("gameState") && (0, oQ.p)()
    }

    function uQ(QQ, FQ) {
      (0, DQ.p)() || function(QQ, FQ, wQ) {
        let LQ = 0;
        const qQ = setInterval((() => {
          FQ() && (LQ += vQ, LQ >= QQ && (clearInterval(qQ), wQ()))
        }), vQ)
      }(kQ, mQ, (() => {
        FQ().then((() => {
          QQ(`saved for the player after ${kQ/1e3} s of play`), (0, DQ.y)(), qQ.l.GA("chat", {
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
  4533: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      installRenderDebug: () => Hw,
      renderDebugPlayable: () => Yw,
      startRenderDebug: () => bw,
      waitForDraw: () => xw
    });
    var LQ = wQ(1799),
      qQ = wQ(4536),
      oQ = wQ(2753);
    const DQ = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function kQ(QQ) {
      return 7 & QQ
    }

    function vQ(QQ) {
      return QQ >>> 11 & 1
    }

    function mQ(QQ) {
      return [1 + (QQ >>> 18 & 63), 1 + (QQ >>> 24 & 63)]
    }

    function uQ(QQ, FQ) {
      const [wQ, , LQ] = QQ, qQ = kQ(LQ), oQ = function(QQ, FQ, wQ) {
        return FQ + (1 === (22 >>> QQ & 1) ? 4 - wQ : wQ) & 3
      }(qQ, vQ(LQ), FQ), DQ = qQ >>> 1, [uQ, HQ] = mQ(wQ), bQ = 1 === oQ || 2 === oQ ? uQ : 0, YQ = oQ >= 2 ? HQ : 0, xQ = [63 & wQ, wQ >>> 6 & 63, wQ >>> 12 & 63];
      return xQ[2 === DQ ? 0 : 2] += bQ, xQ[1 === DQ ? 0 : 1] += YQ, xQ
    }

    function HQ(QQ) {
      const FQ = Math.max(...mQ(QQ[0]));
      return 1 === FQ ? "1" : FQ <= 4 ? "2-4" : FQ <= 16 ? "5-16" : "17-64"
    }
    const bQ = 16;

    function YQ(QQ) {
      let FQ = 2166136261;
      for (let wQ = 0; wQ < QQ.length; wQ++) FQ = Math.imul(FQ ^ QQ[wQ], 16777619);
      return FQ >>> 0
    }

    function xQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const LQ = Math.max(0, FQ - wQ),
        qQ = Math.min(QQ.length, FQ + wQ),
        oQ = [];
      for (let DQ = LQ; DQ < qQ; DQ++) {
        const wQ = QQ[DQ].toString(16).padStart(2, "0");
        oQ.push(DQ === FQ ? `[${wQ}]` : wQ)
      }
      return oQ.join(" ")
    }
    const AQ = {
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
      tQ = "_vs2fs_location0",
      eQ = 0,
      MQ = 4,
      GQ = 6,
      pQ = [0, 1, 2, 0, 2, 3],
      cQ = 2048,
      CQ = 4,
      SQ = 256,
      iQ = 64,
      WQ = 268435456,
      RQ = 65536,
      OQ = /^#version [^\n]*\/\/ program (\S+)$/m;

    function sQ(QQ) {
      return null === QQ.name ? `#${QQ.id}` : `#${QQ.id} ${QQ.name}`
    }
    const rQ = [],
      IQ = new WeakMap,
      UQ = new WeakMap,
      NQ = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let TQ = 1;
    const KQ = new WeakMap;

    function zQ(QQ) {
      if (null === QQ) return 0;
      let FQ = KQ.get(QQ);
      return void 0 === FQ && (FQ = TQ++, KQ.set(QQ, FQ)), FQ
    }
    class lQ {
      constructor(QQ, FQ) {
        this.print = QQ, this.now = FQ, this.shown = 0, this.ym = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.iY = [], this.dropped = 0
      }
      line(QQ) {
        const FQ = this.now();
        if (FQ - this.second >= 1e3 && (this.second = FQ, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.ym++, void this.store(QQ);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${QQ} (the last line here: the rest go to bloxdDebug.save())` : QQ)
      }
      keep(QQ) {
        this.sections++, this.store(QQ)
      }
      store(QQ) {
        this.iY.push(`${new Date(Date.now()).toISOString()} ${QQ}`), this.iY.length > 2e4 && (this.iY.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.ym} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.iY].join("\n")
      }
    }
    let jQ = null;

    function aQ() {
      if (null === jQ) {
        const QQ = new lQ((QQ => {
          (0, oQ.m)("render", QQ)
        }), (() => performance.now()));
        (0, oQ.i)("render", (() => QQ.dump())), jQ = QQ
      }
      return jQ
    }

    function XQ(QQ) {
      aQ().line(QQ)
    }

    function fQ(QQ) {
      aQ().keep(QQ)
    }

    function VQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return QQ.length <= FQ ? QQ : `${QQ.slice(0,FQ)}... (${QQ.length-FQ} more characters)`
    }

    function hQ(QQ, FQ, wQ, LQ, qQ, oQ) {
      const DQ = NQ.pendingCheck;
      if (null === DQ) return;
      const kQ = "undefined" !== typeof WebGL2RenderingContext && QQ instanceof WebGL2RenderingContext,
        vQ = {
          gl: QQ,
          program: wQ,
          call: LQ,
          PA: qQ,
          instances: oQ,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (DQ.draws.push(vQ), kQ) try {
        const LQ = function(QQ) {
          const FQ = [],
            wQ = new Map,
            LQ = Math.min(16, QQ.getParameter(AQ.MAX_VERTEX_ATTRIBS));
          for (let qQ = 0; qQ < LQ; qQ++) {
            if (!QQ.getVertexAttrib(qQ, AQ.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const LQ = QQ.getVertexAttrib(qQ, AQ.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              oQ = QQ.getVertexAttribOffset(qQ, AQ.VERTEX_ATTRIB_ARRAY_POINTER),
              DQ = QQ.getVertexAttrib(qQ, AQ.VERTEX_ATTRIB_ARRAY_STRIDE),
              kQ = QQ.getVertexAttrib(qQ, AQ.VERTEX_ATTRIB_ARRAY_SIZE),
              vQ = QQ.getVertexAttrib(qQ, AQ.VERTEX_ATTRIB_ARRAY_TYPE),
              mQ = "VERTEX_ATTRIB_ARRAY_INTEGER" in QQ && QQ.getVertexAttrib(qQ, AQ.VERTEX_ATTRIB_ARRAY_INTEGER),
              uQ = "VERTEX_ATTRIB_ARRAY_DIVISOR" in QQ ? QQ.getVertexAttrib(qQ, AQ.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            wQ.set(qQ, {
              buffer: LQ,
              offset: oQ,
              stride: DQ
            }), FQ.push(`@${qQ} buf#${zQ(LQ)} +${oQ} stride ${DQ} ${kQ}x0x${vQ.toString(16)}${mQ?" int":""} div ${uQ}`)
          }
          return {
            lines: FQ,
            byLocation: wQ
          }
        }(QQ);
        if (vQ.attributes = LQ.lines, "inst" === wQ.terrain) {
          const {
            group: qQ,
            chunk: kQ
          } = function(QQ, FQ, wQ) {
            const LQ = FQ.get(GQ),
              qQ = QQ.getVertexAttrib(GQ, AQ.CURRENT_VERTEX_ATTRIB),
              oQ = LQ ? `+${LQ.offset}` : qQ ? Array.from(qQ).slice(0, 3).join(",") : "?";
            let DQ = wQ.groups.get(oQ);
            return void 0 === DQ && (DQ = wQ.groups.size, wQ.groups.set(oQ, DQ)), {
              group: DQ,
              chunk: oQ
            }
          }(QQ, LQ.byLocation, DQ);
          vQ.group = qQ, vQ.chunk = kQ;
          for (const QQ of [eQ, MQ]) {
            var mQ;
            const FQ = null === (mQ = LQ.byLocation.get(QQ)) || void 0 === mQ ? void 0 : mQ.buffer;
            FQ && vQ.pages.push({
              kind: "buf",
              buffer: FQ
            })
          }! function(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
            const kQ = LQ.get(eQ),
              vQ = DQ.parts.get(oQ);
            if (void 0 === vQ && DQ.parts.size >= CQ) return;
            const mQ = Math.min(qQ, iQ, SQ - (null !== vQ && void 0 !== vQ ? vQ : 0));
            if (null === kQ || void 0 === kQ || !kQ.buffer || mQ <= 0) return;
            const uQ = JQ(QQ, FQ, wQ);
            if (!uQ) return;
            const HQ = kQ.stride || 12,
              bQ = ZQ(QQ, kQ.buffer, kQ.offset, (mQ - 1) * HQ + 12),
              YQ = new DataView(bQ.buffer),
              xQ = function(QQ, FQ) {
                const wQ = function(QQ) {
                    const FQ = dQ.get(QQ);
                    if (void 0 !== FQ && (null === FQ || QQ.isProgram(FQ))) return FQ;
                    NQ.inProbe = !0;
                    let wQ = null;
                    try {
                      wQ = EQ(QQ, yQ, BQ, "fed", "the record feed")
                    } finally {
                      NQ.inProbe = !1
                    }
                    return dQ.set(QQ, wQ), wQ
                  }(QQ),
                  LQ = wQ ? PQ(QQ, wQ, FQ, (() => {
                    QQ.drawArraysInstanced(AQ.POINTS, 0, 1, FQ)
                  }), "decode probe input (the record feed)") : null;
                return LQ ? new Uint32Array(LQ.buffer) : null
              }(QQ, mQ);
            xQ || DQ.fed.failed++;
            const tQ = PQ(QQ, uQ, 4 * mQ, (() => {
              QQ.drawArraysInstanced(AQ.POINTS, 0, 4, mQ)
            }));
            if (!tQ) return;
            DQ.parts.set(oQ, (null !== vQ && void 0 !== vQ ? vQ : 0) + mQ);
            for (let AQ = 0; AQ < mQ; AQ++) {
              const QQ = AQ * HQ,
                FQ = [YQ.getUint32(QQ, !0), YQ.getUint32(QQ + 4, !0), YQ.getUint32(QQ + 8, !0)],
                wQ = xQ ? [xQ[3 * AQ], xQ[3 * AQ + 1], xQ[3 * AQ + 2]] : FQ;
              xQ && (DQ.fed.records++, wQ.some(((QQ, wQ) => QQ !== FQ[wQ])) && (DQ.fed.differing++, DQ.fed.first.length < 8 && DQ.fed.first.push(`part ${oQ} instance ${AQ}: fed ${wQ.map(qF).join(" ")} buffer ${FQ.map(qF).join(" ")}`)));
              for (let LQ = 0; LQ < 4; LQ++) {
                const QQ = 3 * (4 * AQ + LQ);
                DQ.vertices.push({
                  record: wQ,
                  slot: LQ,
                  group: oQ,
                  gpu: [tQ[QQ], tQ[QQ + 1], tQ[QQ + 2]]
                })
              }
            }
          }(QQ, FQ, wQ, LQ.byLocation, oQ, qQ, DQ)
        } else {
          const LQ = QF(QQ, FQ, 16),
            oQ = QF(QQ, FQ, 8);
          for (const QQ of [LQ, oQ]) QQ && vQ.pages.push({
            kind: "tex",
            texture: QQ
          });
          LQ && function(QQ, FQ, wQ, LQ, qQ, oQ) {
            if (oQ.parts.size >= CQ) return;
            const DQ = JQ(QQ, FQ, wQ);
            if (!DQ) return;
            let kQ = 6 * SQ;
            const vQ = [];
            for (const [YQ, xQ] of qQ) {
              const QQ = Math.min(xQ, kQ, Math.max(6, 6 * Math.floor(SQ / qQ.length)));
              QQ > 0 && (vQ.push([YQ, QQ]), kQ -= QQ)
            }
            const mQ = vQ.reduce(((QQ, FQ) => {
                let [, wQ] = FQ;
                return QQ + wQ
              }), 0),
              uQ = PQ(QQ, DQ, mQ, (() => {
                for (const [FQ, wQ] of vQ) QQ.drawArrays(AQ.POINTS, FQ, wQ)
              }));
            if (!uQ) return;
            let HQ = 0;
            for (const [YQ, xQ] of vQ) {
              const FQ = Math.floor(YQ / 6),
                wQ = Math.floor((YQ + xQ - 1) / 6) - FQ + 1,
                qQ = FF(QQ, LQ, cQ, FQ, wQ);
              for (let QQ = YQ; QQ < YQ + xQ; QQ++, HQ++) {
                var bQ;
                const wQ = 4 * (Math.floor(QQ / 6) - FQ),
                  LQ = [qQ[wQ], qQ[wQ + 1], qQ[wQ + 2]];
                oQ.parts.set(qQ[wQ + 3], (null !== (bQ = oQ.parts.get(qQ[wQ + 3])) && void 0 !== bQ ? bQ : 0) + (QQ % 6 === 0 ? 1 : 0)), oQ.vertices.push({
                  record: LQ,
                  slot: pQ[QQ % 6],
                  group: qQ[wQ + 3],
                  gpu: [uQ[3 * HQ], uQ[3 * HQ + 1], uQ[3 * HQ + 2]]
                })
              }
            }
          }(QQ, FQ, wQ, LQ, qQ, DQ)
        }
      } catch (uQ) {
        XQ(`decode probe failed on program ${sQ(wQ)}: ${String(uQ)}`)
      }
    }

    function JQ(QQ, FQ, wQ) {
      if (void 0 !== wQ.probe) return wQ.probe && nQ(QQ, FQ, wQ.probe), wQ.probe;
      wQ.probe = null, NQ.inProbe = !0;
      try {
        wQ.probe = function(QQ, FQ) {
          return EQ(QQ, FQ.vertex, FQ.fragment, tQ, `program ${sQ(FQ)}'s twin`)
        }(QQ, wQ)
      } finally {
        NQ.inProbe = !1
      }
      return wQ.probe && nQ(QQ, FQ, wQ.probe), wQ.probe
    }

    function EQ(QQ, FQ, wQ, LQ, qQ) {
      const oQ = [QQ.createShader(AQ.VERTEX_SHADER), QQ.createShader(AQ.FRAGMENT_SHADER)],
        DQ = QQ.createProgram();
      if (!DQ || !oQ[0] || !oQ[1]) return null;
      QQ.shaderSource(oQ[0], FQ), QQ.shaderSource(oQ[1], wQ);
      for (const vQ of oQ) QQ.compileShader(vQ), QQ.attachShader(DQ, vQ);
      QQ.transformFeedbackVaryings(DQ, [LQ], AQ.INTERLEAVED_ATTRIBS), QQ.linkProgram(DQ);
      for (const vQ of oQ) QQ.deleteShader(vQ);
      var kQ;
      return QQ.getProgramParameter(DQ, AQ.LINK_STATUS) ? DQ : (XQ(`decode probe: ${qQ} failed to link: ${VQ(null!==(kQ=QQ.getProgramInfoLog(DQ))&&void 0!==kQ?kQ:"",300)}`), QQ.deleteProgram(DQ), null)
    }

    function nQ(QQ, FQ, wQ) {
      const LQ = QQ.getProgramParameter(FQ, AQ.ACTIVE_UNIFORM_BLOCKS);
      for (let kQ = 0; kQ < LQ; kQ++) {
        const LQ = QQ.getActiveUniformBlockName(FQ, kQ),
          qQ = null === LQ ? AQ.INVALID_INDEX : QQ.getUniformBlockIndex(wQ, LQ);
        qQ !== AQ.INVALID_INDEX && QQ.uniformBlockBinding(wQ, qQ, QQ.getActiveUniformBlockParameter(FQ, kQ, AQ.UNIFORM_BLOCK_BINDING))
      }
      const qQ = QQ.getParameter(AQ.CURRENT_PROGRAM);
      QQ.useProgram(wQ);
      const oQ = QQ.getProgramParameter(FQ, AQ.ACTIVE_UNIFORMS),
        DQ = QQ.getActiveUniforms(FQ, [...Array(oQ).keys()], AQ.UNIFORM_BLOCK_INDEX);
      for (let kQ = 0; kQ < oQ; kQ++) {
        const LQ = QQ.getActiveUniform(FQ, kQ);
        if (!LQ || -1 !== DQ[kQ]) continue;
        const qQ = LQ.name.replace(/\[0\]$/, "");
        for (let oQ = 0; oQ < LQ.size; oQ++) {
          const DQ = LQ.size > 1 ? `${qQ}[${oQ}]` : LQ.name,
            kQ = QQ.getUniformLocation(FQ, DQ),
            vQ = QQ.getUniformLocation(wQ, DQ);
          kQ && vQ && gQ(QQ, vQ, LQ.type, QQ.getUniform(FQ, kQ))
        }
      }
      QQ.useProgram(qQ)
    }

    function gQ(QQ, FQ, wQ, LQ) {
      const qQ = ArrayBuffer.isView(LQ) ? Array.from(LQ) : [Number(LQ)];
      switch (wQ) {
        case AQ.FLOAT:
          return void QQ.uniform1f(FQ, qQ[0]);
        case AQ.FLOAT_VEC2:
          return void QQ.uniform2fv(FQ, qQ);
        case AQ.FLOAT_VEC3:
          return void QQ.uniform3fv(FQ, qQ);
        case AQ.FLOAT_VEC4:
          return void QQ.uniform4fv(FQ, qQ);
        case AQ.FLOAT_MAT3:
          return void QQ.uniformMatrix3fv(FQ, !1, qQ);
        case AQ.FLOAT_MAT4:
          return void QQ.uniformMatrix4fv(FQ, !1, qQ);
        case AQ.UNSIGNED_INT:
          return void QQ.uniform1ui(FQ, qQ[0]);
        case AQ.UNSIGNED_INT_VEC2:
          return void QQ.uniform2uiv(FQ, qQ);
        case AQ.UNSIGNED_INT_VEC3:
          return void QQ.uniform3uiv(FQ, qQ);
        case AQ.UNSIGNED_INT_VEC4:
          return void QQ.uniform4uiv(FQ, qQ);
        case AQ.INT_VEC2:
          return void QQ.uniform2iv(FQ, qQ);
        case AQ.INT_VEC3:
          return void QQ.uniform3iv(FQ, qQ);
        case AQ.INT_VEC4:
          return void QQ.uniform4iv(FQ, qQ);
        default:
          QQ.uniform1i(FQ, qQ[0])
      }
    }

    function PQ(QQ, FQ, wQ, LQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const oQ = QQ.getParameter(AQ.CURRENT_PROGRAM),
        DQ = QQ.getParameter(AQ.TRANSFORM_FEEDBACK_BINDING),
        kQ = QQ.getParameter(AQ.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        vQ = QQ.getParameter(AQ.COPY_READ_BUFFER_BINDING),
        mQ = QQ.isEnabled(AQ.RASTERIZER_DISCARD),
        uQ = QQ.createTransformFeedback(),
        HQ = QQ.createBuffer();
      NQ.inProbe = !0;
      try {
        const oQ = QQ.getError();
        oQ !== AQ.NO_ERROR && XQ(`GL error 0x${oQ.toString(16)} pending before the decode probe (the renderer's)`), QQ.useProgram(FQ), QQ.bindTransformFeedback(AQ.TRANSFORM_FEEDBACK, uQ), QQ.bindBuffer(AQ.TRANSFORM_FEEDBACK_BUFFER, HQ), QQ.bufferData(AQ.TRANSFORM_FEEDBACK_BUFFER, 12 * wQ, AQ.STREAM_READ), QQ.bindBufferBase(AQ.TRANSFORM_FEEDBACK_BUFFER, 0, HQ), QQ.enable(AQ.RASTERIZER_DISCARD), QQ.beginTransformFeedback(AQ.POINTS), LQ(), QQ.endTransformFeedback(), QQ.bindBufferBase(AQ.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const DQ = QQ.getError();
        if (DQ !== AQ.NO_ERROR) return XQ(`${qQ}: GL error 0x${DQ.toString(16)} on the feedback draw`), null;
        const kQ = new Float32Array(3 * wQ);
        return QQ.bindBuffer(AQ.COPY_READ_BUFFER, HQ), QQ.getBufferSubData(AQ.COPY_READ_BUFFER, 0, kQ), kQ
      } finally {
        mQ || QQ.disable(AQ.RASTERIZER_DISCARD), QQ.bindTransformFeedback(AQ.TRANSFORM_FEEDBACK, DQ), QQ.bindBuffer(AQ.TRANSFORM_FEEDBACK_BUFFER, kQ), QQ.bindBuffer(AQ.COPY_READ_BUFFER, vQ), QQ.deleteTransformFeedback(uQ), QQ.deleteBuffer(HQ), QQ.useProgram(oQ), NQ.inProbe = !1
      }
    }

    function ZQ(QQ, FQ, wQ, LQ) {
      const qQ = QQ.getParameter(AQ.COPY_READ_BUFFER_BINDING),
        oQ = new Uint8Array(LQ);
      return QQ.bindBuffer(AQ.COPY_READ_BUFFER, FQ), QQ.getBufferSubData(AQ.COPY_READ_BUFFER, wQ, oQ), QQ.bindBuffer(AQ.COPY_READ_BUFFER, qQ), oQ
    }
    const yQ = `#version 300 es\nlayout(location = ${eQ}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      BQ = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      dQ = new WeakMap;

    function QF(QQ, FQ, wQ) {
      const LQ = QQ.getProgramParameter(FQ, AQ.ACTIVE_UNIFORMS),
        qQ = QQ.getParameter(AQ.ACTIVE_TEXTURE);
      try {
        for (let qQ = 0; qQ < LQ; qQ++) {
          const LQ = QQ.getActiveUniform(FQ, qQ);
          if ((null === LQ || void 0 === LQ ? void 0 : LQ.type) !== AQ.UNSIGNED_INT_SAMPLER_2D) continue;
          const oQ = QQ.getUniformLocation(FQ, LQ.name),
            DQ = oQ ? QQ.getUniform(FQ, oQ) : -1;
          if (DQ < 0) continue;
          QQ.activeTexture(AQ.TEXTURE0 + DQ);
          const kQ = QQ.getParameter(AQ.TEXTURE_BINDING_2D);
          if (kQ && UQ.get(kQ) === wQ) return kQ
        }
        return null
      } finally {
        QQ.activeTexture(qQ)
      }
    }

    function FF(QQ, FQ, wQ, LQ, qQ) {
      const oQ = new Uint32Array(4 * qQ),
        DQ = QQ.getParameter(AQ.READ_FRAMEBUFFER_BINDING),
        kQ = QQ.createFramebuffer();
      QQ.bindFramebuffer(AQ.READ_FRAMEBUFFER, kQ), QQ.framebufferTexture2D(AQ.READ_FRAMEBUFFER, AQ.COLOR_ATTACHMENT0, AQ.TEXTURE_2D, FQ, 0);
      try {
        let FQ = 0;
        for (; FQ < qQ;) {
          const DQ = LQ + FQ,
            kQ = DQ % wQ,
            vQ = Math.min(qQ - FQ, wQ - kQ);
          QQ.readPixels(kQ, Math.floor(DQ / wQ), vQ, 1, AQ.RGBA_INTEGER, AQ.UNSIGNED_INT, oQ.subarray(4 * FQ, 4 * (FQ + vQ))), FQ += vQ
        }
      } finally {
        QQ.bindFramebuffer(AQ.READ_FRAMEBUFFER, DQ), QQ.deleteFramebuffer(kQ)
      }
      return oQ
    }

    function wF(QQ, FQ, wQ) {
      let LQ = 0,
        qQ = 0;
      for (let vQ = 0; vQ < FQ.bytes.length; vQ += RQ) {
        LQ++;
        const QQ = Math.min(vQ + RQ, FQ.bytes.length);
        YQ(FQ.bytes.subarray(vQ, QQ)) !== YQ(wQ.subarray(vQ, QQ)) && qQ++
      }
      const oQ = `${QQ} ${FQ.bytes.length} B cpu ${YQ(FQ.bytes).toString(16)} gpu ${YQ(wQ).toString(16)}, ${qQ}/${LQ} blocks differ${FQ.missed?`, ${FQ.missed} GPU-side writes uncopied`:""}`;
      if (0 === qQ) return oQ;
      const {
        count: DQ,
        offsets: kQ
      } = function(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const LQ = Math.min(QQ.length, FQ.length);
        let qQ = Math.abs(QQ.length - FQ.length);
        const oQ = [];
        for (let DQ = 0; DQ < LQ; DQ++) QQ[DQ] !== FQ[DQ] && (qQ++, oQ.length < wQ && oQ.push(DQ));
        return {
          count: qQ,
          offsets: oQ
        }
      }(FQ.bytes, wQ);
      return fQ([`${oQ}: ${DQ} bytes differ`, ...kQ.map((QQ => `  +${QQ}: cpu ${xQ(FQ.bytes,QQ)} | gpu ${xQ(wQ,QQ)}`))].join("\n")), `${oQ}: ${DQ} bytes differ, first at ${kQ.join(", ")} (context in the saved file)`
    }

    function LF(QQ) {
      if (0 === QQ.vertices.length) return void XQ(`decode probe (${QQ.reason}): no terrain draw probed (${QQ.draws.length} seen)`);
      const FQ = function(QQ) {
          const FQ = new Map;
          for (const LQ of QQ) {
            const QQ = FQ.get(LQ.group);
            QQ ? QQ.push(LQ) : FQ.set(LQ.group, [LQ])
          }
          const wQ = {
            vertices: QQ.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [LQ, qQ] of FQ) {
            const QQ = new Map,
              FQ = qQ.map((FQ => {
                const wQ = uQ(FQ.record, FQ.slot),
                  LQ = [FQ.gpu[0] - wQ[0], FQ.gpu[1] - wQ[1], FQ.gpu[2] - wQ[2]],
                  qQ = LQ.map((QQ => Math.round(64 * QQ))).join(","),
                  oQ = QQ.get(qQ);
                return oQ ? oQ.count++ : QQ.set(qQ, {
                  count: 1,
                  offset: LQ
                }), wQ
              }));
            let oQ = [0, 0, 0],
              DQ = 0;
            for (const wQ of QQ.values()) wQ.count > DQ && (DQ = wQ.count, oQ = wQ.offset);
            wQ.translations.set(LQ, oQ), qQ.forEach(((QQ, LQ) => {
              var qQ;
              const DQ = [FQ[LQ][0] + oQ[0], FQ[LQ][1] + oQ[1], FQ[LQ][2] + oQ[2]];
              if (DQ.every(((FQ, wQ) => {
                  return LQ = QQ.gpu[wQ], qQ = FQ, Math.abs(LQ - qQ) <= Math.max(.001, 1e-6 * Math.abs(qQ));
                  var LQ, qQ
                }))) return;
              wQ.mismatches++, wQ.byDirection[kQ(QQ.record[2])]++, wQ.byDiagonal[vQ(QQ.record[2])]++;
              const mQ = HQ(QQ.record);
              wQ.byBand[mQ] = (null !== (qQ = wQ.byBand[mQ]) && void 0 !== qQ ? qQ : 0) + 1, wQ.first.length < bQ && wQ.first.push({
                ...QQ,
                expected: DQ
              })
            }))
          }
          return wQ
        }(QQ.vertices),
        wQ = FQ.byDirection.map(((QQ, FQ) => QQ ? `${DQ[FQ]} ${QQ}` : "")).filter(Boolean).join(" "),
        LQ = Object.entries(FQ.byBand).map((QQ => {
          let [FQ, wQ] = QQ;
          return `${FQ}: ${wQ}`
        })).join(" ");
      if (XQ(`decode probe (${QQ.reason}): ${FQ.mismatches}/${FQ.vertices} vertices differ from the CPU decode over ${QQ.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (FQ.mismatches ? ` by direction [${wQ}] diagonal [0: ${FQ.byDiagonal[0]} 1: ${FQ.byDiagonal[1]}] extent [${LQ}]` : "")), QQ.fed.records > 0 || QQ.fed.failed > 0) {
        XQ(`decode probe input: ${QQ.fed.differing}/${QQ.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (QQ.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (QQ.fed.failed ? `; the feed failed on ${QQ.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const FQ of QQ.fed.first) XQ(`  ${FQ}`)
      }
      for (const qQ of FQ.first) {
        const [QQ, FQ, wQ] = qQ.record;
        XQ(`  mismatch part ${qQ.group} r0 ${QQ.toString(16)} r1 ${FQ.toString(16)} r2 ${wQ.toString(16)} slot ${qQ.slot} (${DQ[kQ(wQ)]}): expected ${qQ.expected.map(oF).join(",")} gpu ${qQ.gpu.map(oF).join(",")}`)
      }
      fQ(`decode probe translations: ${[...FQ.translations].map((QQ=>{let[FQ,wQ]=QQ;return`${FQ}: ${wQ.map(oF).join(",")}`})).join("; ")}`)
    }

    function qF(QQ) {
      return QQ.toString(16)
    }

    function oF(QQ) {
      return Number.isInteger(QQ) ? String(QQ) : QQ.toFixed(3)
    }

    function DF(QQ) {
      return null !== NQ.pendingCheck ? Promise.resolve() : new Promise((FQ => {
        let wQ = !1;
        const LQ = {
          reason: QQ,
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
        NQ.pendingCheck = LQ;
        const qQ = () => {
            NQ.pendingCheck = null;
            try {
              ! function(QQ) {
                XQ(`draw ranges (${QQ.reason}): ${QQ.terrainDraws} terrain draws in the frame, the first ${QQ.draws.length} here`);
                for (const FQ of QQ.draws) {
                  const QQ = FQ.PA.slice(0, 8).map((QQ => {
                      let [FQ, wQ] = QQ;
                      return `${FQ}+${wQ}`
                    })).join(" "),
                    wQ = FQ.PA.length > 8 ? ` (+${FQ.PA.length-8} ranges)` : "";
                  XQ(`  ${sQ(FQ.program)} ${FQ.program.terrain} ${FQ.call} ${QQ}${wQ} x${FQ.instances}${FQ.group>=0?` part ${FQ.group} chunk ${FQ.chunk}`:""} | ${FQ.attributes.join(" | ")}`)
                }
              }(LQ), LF(LQ);
              LQ.draws.some((QQ => "undefined" !== typeof WebGL2RenderingContext && QQ.gl instanceof WebGL2RenderingContext)) || 0 === LQ.draws.length ? function(QQ) {
                const FQ = [],
                  wQ = new Map;
                for (const LQ of QQ)
                  if ("undefined" !== typeof WebGL2RenderingContext && LQ.gl instanceof WebGL2RenderingContext)
                    for (const QQ of LQ.pages) wQ.set("buf" === QQ.kind ? QQ.buffer : QQ.texture, {
                      page: QQ,
                      gl: LQ.gl
                    });
                for (const [LQ, {
                    page: qQ,
                    gl: oQ
                  }] of wQ) {
                  const QQ = IQ.get(LQ);
                  if (!QQ) {
                    FQ.push(`${qQ.kind}#${zQ(LQ)}: no CPU copy (${NQ.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === qQ.kind) {
                    FQ.push(wF(`buf#${QQ.id}`, QQ, ZQ(oQ, qQ.buffer, 0, QQ.bytes.length)));
                    continue
                  }
                  const wQ = FF(oQ, qQ.texture, QQ.width, 0, QQ.width * QQ.height),
                    DQ = 16 === QQ.texelBytes ? new Uint8Array(wQ.buffer) : new Uint8Array(new Uint16Array(wQ).buffer);
                  FQ.push(wF(`tex#${QQ.id} (${16===QQ.texelBytes?"records":"light"})`, QQ, DQ))
                }
                for (const LQ of FQ) XQ(`page readback ${LQ}`)
              }(LQ.draws) : XQ("page readback: none on WebGL1 (no buffer readback)")
            } catch (QQ) {
              XQ(`check failed: ${String(QQ)}`)
            }
            FQ()
          },
          oQ = () => {
            if (LQ.draws.length > 0 && !wQ) return wQ = !0, void setTimeout(qQ, 0);
            wQ || requestAnimationFrame(oQ)
          };
        requestAnimationFrame(oQ), setTimeout((() => {
          wQ || (wQ = !0, qQ())
        }), 5e3)
      }))
    }
    var kF = wQ(4540);
    const vF = 20,
      mF = 24,
      uF = Reflect.apply;

    function HF(QQ, FQ, wQ) {
      if (!QQ) return;
      const LQ = QQ[FQ];
      if ("function" === typeof LQ) {
        const qQ = wQ(LQ);
        QQ[FQ] = qQ, (0, kF.m)(qQ, LQ)
      }
    }
    let bF = !1;
    const YF = new WeakMap,
      xF = new WeakMap,
      AF = new WeakMap,
      tF = {
        gl: 0,
        lost: 0
      };
    let eF = {
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
      MF = {
        buffer: 0,
        texture: 0
      },
      GF = 0;

    function pF(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (QQ instanceof ArrayBuffer) return new Uint8Array(QQ, FQ, wQ || void 0);
      if (!ArrayBuffer.isView(QQ)) return null;
      const LQ = "BYTES_PER_ELEMENT" in QQ ? QQ.BYTES_PER_ELEMENT : 1,
        qQ = QQ.byteOffset + FQ * LQ,
        oQ = wQ ? wQ * LQ : QQ.byteLength - FQ * LQ;
      return new Uint8Array(QQ.buffer, qQ, Math.max(0, oQ))
    }

    function cF(QQ, FQ) {
      const wQ = function(QQ) {
        switch (QQ) {
          case AQ.ARRAY_BUFFER:
            return AQ.ARRAY_BUFFER_BINDING;
          case AQ.ELEMENT_ARRAY_BUFFER:
            return AQ.ELEMENT_ARRAY_BUFFER_BINDING;
          case AQ.COPY_READ_BUFFER:
            return AQ.COPY_READ_BUFFER_BINDING;
          case AQ.COPY_WRITE_BUFFER:
            return AQ.COPY_WRITE_BUFFER_BINDING;
          case AQ.UNIFORM_BUFFER:
            return AQ.UNIFORM_BUFFER_BINDING;
          case AQ.PIXEL_UNPACK_BUFFER:
            return AQ.PIXEL_UNPACK_BUFFER_BINDING;
          case AQ.TRANSFORM_FEEDBACK_BUFFER:
            return AQ.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(FQ);
      return wQ ? QQ.getParameter(wQ) : null
    }

    function CF(QQ) {
      const FQ = IQ.get(QQ);
      FQ && (NQ.shadowBytes -= FQ.bytes.length, IQ.delete(QQ))
    }

    function SF(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      CF(QQ), NQ.shadowBytes + FQ > WQ ? NQ.uncopied++ : (NQ.shadowBytes += FQ, IQ.set(QQ, {
        id: zQ(QQ),
        bytes: new Uint8Array(FQ),
        width: wQ,
        height: LQ,
        texelBytes: qQ,
        missed: 0
      }))
    }

    function iF(QQ, FQ) {
      for (const wQ of ["deleteBuffer", "deleteTexture"]) HF(QQ, wQ, (QQ => function() {
        for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
        return wQ[0] && CF(wQ[0]), uF(QQ, this, wQ)
      }));
      HF(QQ, "shaderSource", (QQ => function() {
        for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
        return wQ[0] && "string" === typeof wQ[1] && YF.set(wQ[0], wQ[1]), uF(QQ, this, wQ)
      })), HF(QQ, "attachShader", (QQ => function() {
        for (var FQ, wQ = arguments.length, LQ = new Array(wQ), qQ = 0; qQ < wQ; qQ++) LQ[qQ] = arguments[qQ];
        const oQ = LQ[0],
          DQ = null !== (FQ = xF.get(oQ)) && void 0 !== FQ ? FQ : [];
        return DQ.push(LQ[1]), xF.set(oQ, DQ), uF(QQ, this, LQ)
      })), HF(QQ, "linkProgram", (QQ => function() {
        for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
        const qQ = uF(QQ, this, wQ);
        return NQ.inProbe || function(QQ, FQ) {
          var wQ, LQ, qQ;
          "undefined" !== typeof HTMLCanvasElement && QQ.canvas instanceof HTMLCanvasElement && function(QQ) {
            if (IF.has(QQ)) return;
            IF.add(QQ);
            for (const FQ of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) QQ.addEventListener(FQ, (QQ => {
              tF.lost < vF && (tF.lost++, XQ(`${FQ}${"statusMessage"in QQ?`: ${String(QQ.statusMessage)}`:""}`))
            }))
          }(QQ.canvas);
          NQ.context ??= QQ;
          const oQ = null !== (wQ = xF.get(FQ)) && void 0 !== wQ ? wQ : [];
          let DQ = "",
            kQ = "";
          for (const uQ of oQ) {
            var vQ;
            const QQ = null !== (vQ = YF.get(uQ)) && void 0 !== vQ ? vQ : "";
            /\bgl_Position\b/.test(QQ) ? DQ = QQ : kQ = QQ
          }
          const mQ = {
            id: zQ(FQ),
            name: null !== (LQ = null === (qQ = OQ.exec(DQ)) || void 0 === qQ ? void 0 : qQ[1]) && void 0 !== LQ ? LQ : null,
            gl: QQ,
            vertex: DQ,
            fragment: kQ,
            terrain: RF(DQ),
            checked: !1,
            firstDraw: !1
          };
          if (AF.set(FQ, mQ), rQ.push([FQ, mQ]), null !== mQ.terrain) {
            const FQ = oQ.map((FQ => {
              var wQ;
              return null !== (wQ = QQ.getShaderInfoLog(FQ)) && void 0 !== wQ ? wQ : ""
            })).filter((QQ => "" !== QQ.trim()));
            FQ.length > 0 && fQ(`program ${sQ(mQ)} (${mQ.terrain}) shader logs:\n${VQ(FQ.join("\n"))}`)
          }
        }(this, wQ[0]), qQ
      })), HF(QQ, "bufferData", (QQ => function() {
        for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
        const qQ = uF(QQ, this, wQ);
        if (!NQ.inProbe) {
          const QQ = cF(this, wQ[0]);
          if (QQ) {
            var oQ, DQ, kQ;
            const FQ = "number" === typeof wQ[1] ? null : pF(wQ[1], null !== (oQ = wQ[3]) && void 0 !== oQ ? oQ : 0, null !== (DQ = wQ[4]) && void 0 !== DQ ? DQ : 0);
            var vQ;
            if (SF(QQ, "number" === typeof wQ[1] ? wQ[1] : null !== (kQ = null === FQ || void 0 === FQ ? void 0 : FQ.length) && void 0 !== kQ ? kQ : 0), FQ) null === (vQ = IQ.get(QQ)) || void 0 === vQ || vQ.bytes.set(FQ)
          }
        }
        return qQ
      })), HF(QQ, "bufferSubData", (QQ => function() {
        for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
        const qQ = uF(QQ, this, wQ);
        if (!NQ.inProbe) {
          var oQ, DQ;
          const QQ = cF(this, wQ[0]),
            FQ = QQ ? IQ.get(QQ) : void 0,
            LQ = pF(wQ[2], null !== (oQ = wQ[3]) && void 0 !== oQ ? oQ : 0, null !== (DQ = wQ[4]) && void 0 !== DQ ? DQ : 0);
          if (FQ && LQ) {
            const QQ = wQ[1];
            FQ.bytes.set(LQ.subarray(0, Math.max(0, FQ.bytes.length - QQ)), QQ), WF("buffer", FQ, QQ, LQ.length)
          }
        }
        return qQ
      })), FQ && (HF(QQ, "copyBufferSubData", (QQ => function() {
        for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
        const qQ = uF(QQ, this, wQ);
        if (!NQ.inProbe) {
          const [QQ, FQ, LQ, qQ, oQ] = wQ, DQ = cF(this, QQ), kQ = cF(this, FQ), vQ = DQ ? IQ.get(DQ) : void 0, mQ = kQ ? IQ.get(kQ) : void 0;
          mQ && (vQ ? mQ.bytes.set(vQ.bytes.slice(LQ, LQ + oQ), qQ) : mQ.missed++)
        }
        return qQ
      })), HF(QQ, "texStorage2D", (QQ => function() {
        for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
        const qQ = uF(QQ, this, wQ),
          [, , oQ, DQ, kQ] = wQ;
        if (!NQ.inProbe && (oQ === AQ.RGBA32UI || oQ === AQ.RGBA16UI)) {
          const QQ = this.getParameter(AQ.TEXTURE_BINDING_2D),
            FQ = oQ === AQ.RGBA32UI ? 16 : 8;
          QQ && (UQ.set(QQ, FQ), SF(QQ, DQ * kQ * FQ, DQ, kQ, FQ))
        }
        return qQ
      })), HF(QQ, "texSubImage2D", (QQ => function() {
        for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
        const qQ = uF(QQ, this, wQ);
        return !NQ.inProbe && wQ.length >= 9 && wQ[0] === AQ.TEXTURE_2D && 0 === wQ[1] && function(QQ, FQ) {
          var wQ;
          const LQ = QQ.getParameter(AQ.TEXTURE_BINDING_2D),
            qQ = LQ ? IQ.get(LQ) : void 0;
          if (!qQ) return;
          const [, , oQ, DQ, kQ, vQ] = FQ;
          let mQ = pF(FQ[8], null !== (wQ = FQ[9]) && void 0 !== wQ ? wQ : 0);
          if (null === mQ && "number" === typeof FQ[8]) {
            const wQ = cF(QQ, AQ.PIXEL_UNPACK_BUFFER),
              LQ = wQ ? IQ.get(wQ) : void 0;
            mQ = LQ ? LQ.bytes.subarray(FQ[8]) : null
          }
          if (null === mQ) return void qQ.missed++;
          const uQ = QQ.getParameter(AQ.UNPACK_ROW_LENGTH) || kQ,
            HQ = QQ.getParameter(AQ.UNPACK_SKIP_ROWS),
            bQ = QQ.getParameter(AQ.UNPACK_SKIP_PIXELS),
            YQ = qQ.texelBytes;
          for (let xQ = 0; xQ < vQ; xQ++) {
            const QQ = ((HQ + xQ) * uQ + bQ) * YQ,
              FQ = ((DQ + xQ) * qQ.width + oQ) * YQ;
            qQ.bytes.set(mQ.subarray(QQ, QQ + kQ * YQ), FQ)
          }
          WF("texture", qQ, (DQ * qQ.width + oQ) * YQ, kQ * vQ * YQ)
        }(this, wQ), qQ
      })), HF(QQ, "copyTexSubImage2D", (QQ => function() {
        for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
        const qQ = wQ[0] === AQ.TEXTURE_2D ? this.getParameter(AQ.TEXTURE_BINDING_2D) : null,
          oQ = qQ ? IQ.get(qQ) : void 0;
        return oQ && oQ.missed++, uF(QQ, this, wQ)
      })));
      for (const wQ of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) HF(QQ, wQ, (QQ => function() {
        for (var FQ = arguments.length, LQ = new Array(FQ), qQ = 0; qQ < FQ; qQ++) LQ[qQ] = arguments[qQ];
        const oQ = uF(QQ, this, LQ);
        return NQ.inProbe || sF(this, wQ, LQ), oQ
      }));
      HF(QQ, "getExtension", (QQ => function() {
        for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
        const qQ = uF(QQ, this, wQ);
        return qQ && "object" === typeof qQ && function(QQ, FQ, wQ) {
          const LQ = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(FQ in LQ) || wQ.bloxdRenderDebug) return;
          wQ.bloxdRenderDebug = !0;
          for (const qQ of LQ[FQ]) {
            const FQ = wQ[qQ];
            "function" === typeof FQ && (wQ[qQ] = function() {
              for (var LQ = arguments.length, oQ = new Array(LQ), DQ = 0; DQ < LQ; DQ++) oQ[DQ] = arguments[DQ];
              const kQ = uF(FQ, wQ, oQ);
              return NQ.inProbe || sF(QQ, qQ, oQ), kQ
            })
          }
        }(this, wQ[0], qQ), qQ
      }))
    }

    function WF(QQ, FQ, wQ, LQ) {
      MF[QQ] += LQ, GF < 32 && FQ.bytes.length >= 1 << 20 && (GF++, fQ(`upload ${QQ} #${FQ.id} +${wQ} ${LQ} B`))
    }

    function RF(QQ) {
      if (!QQ.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(QQ) || /in uvec3 _p2vs_location0\b/.test(QQ) ? "inst" : "tex"
    }

    function OF(QQ, FQ, wQ) {
      var LQ;
      if (wQ.checked) return;
      wQ.checked = !0;
      const qQ = QQ.getProgramParameter(FQ, AQ.LINK_STATUS),
        oQ = (null !== (LQ = QQ.getProgramInfoLog(FQ)) && void 0 !== LQ ? LQ : "").trim();
      var DQ;
      null === wQ.terrain && qQ || (XQ(`program ${sQ(wQ)} ${null!==(DQ=wQ.terrain)&&void 0!==DQ?DQ:"other"} link ${qQ?"ok":"FAILED"}${oQ?`: ${VQ(oQ,300)}`:""}`), oQ && fQ(`program ${sQ(wQ)} link log:\n${VQ(oQ)}`))
    }

    function sF(QQ, FQ, wQ) {
      var LQ;
      const qQ = QQ.getParameter(AQ.CURRENT_PROGRAM),
        oQ = qQ ? AF.get(qQ) : void 0;
      if (!qQ || !oQ) return;
      const DQ = null !== (LQ = oQ.terrain) && void 0 !== LQ ? LQ : "other",
        {
          PA: kQ,
          instances: vQ
        } = function(QQ, FQ) {
          switch (QQ) {
            case "drawArrays":
              return {
                PA: [
                  [FQ[1], FQ[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                PA: [
                  [FQ[1], FQ[2]]
                ], instances: FQ[3]
              };
            case "drawElements":
              return {
                PA: [
                  [0, FQ[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                PA: [
                  [0, FQ[1]]
                ], instances: FQ[4]
              };
            case "multiDrawArraysWEBGL": {
              const QQ = FQ[1],
                wQ = FQ[3],
                LQ = FQ[2],
                qQ = FQ[4],
                oQ = [];
              for (let DQ = 0; DQ < FQ[5]; DQ++) oQ.push([QQ[LQ + DQ], wQ[qQ + DQ]]);
              return {
                PA: oQ,
                instances: 1
              }
            }
            default:
              return {
                PA: [], instances: 0
              }
          }
        }(FQ, wQ),
        mQ = "inst" === oQ.terrain ? vQ : kQ.reduce(((QQ, FQ) => {
          let [, wQ] = FQ;
          return QQ + wQ
        }), 0) / 6;
      if (eF[DQ].draws++, eF[DQ].faces += mQ, null === oQ.terrain) return;
      if (NQ.context = QQ, !oQ.firstDraw) {
        oQ.firstDraw = !0, OF(QQ, qQ, oQ), rF || (rF = !0, XQ(function(QQ) {
          var FQ;
          const wQ = QQ.getParameter(AQ.DEPTH_FUNC),
            LQ = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let qQ = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in QQ && QQ.getParameter(AQ.DRAW_FRAMEBUFFER_BINDING)) {
            const FQ = QQ;
            qQ = FQ.getFramebufferAttachmentParameter(AQ.DRAW_FRAMEBUFFER, AQ.DEPTH_ATTACHMENT, AQ.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(FQ.getFramebufferAttachmentParameter(AQ.DRAW_FRAMEBUFFER,AQ.DEPTH_ATTACHMENT,AQ.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(FQ.getFramebufferAttachmentParameter(AQ.DRAW_FRAMEBUFFER,AQ.DEPTH_ATTACHMENT,AQ.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const oQ = QQ.getParameter(AQ.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(FQ=LQ[wQ])&&void 0!==FQ?FQ:`0x${wQ.toString(16)}`} clear ${oQ}${516===wQ||518===wQ?" (reverse-Z)":""}, samples ${String(QQ.getParameter(AQ.SAMPLES))}, ${qQ}`
        }(QQ)));
        const wQ = QQ.getError();
        wQ !== AQ.NO_ERROR && tF.gl < vF && (tF.gl++, XQ(`GL error 0x${wQ.toString(16)} after program ${sQ(oQ)}'s first terrain draw (${FQ})`))
      }
      const uQ = NQ.pendingCheck;
      null !== uQ && (uQ.terrainDraws++, uQ.draws.length < mF && hQ(QQ, qQ, oQ, FQ, kQ, vQ))
    }
    let rF = !1;
    const IF = new WeakSet;
    var UF = wQ(4352),
      NF = wQ(4544);
    const TF = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let KF = !1;
    const zF = new WeakSet,
      lF = new WeakMap,
      jF = new WeakMap,
      aF = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let XF = 0,
      fF = !1,
      VF = null,
      hF = {
        draws: 0,
        faces: 0
      };

    function JF(QQ) {
      const FQ = globalThis[QQ];
      return null === FQ || void 0 === FQ ? void 0 : FQ.prototype
    }

    function EF(QQ) {
      return QQ && "function" === typeof QQ[Symbol.iterator] ? [...QQ].sort().join(" ") : ""
    }

    function nF(QQ, FQ) {
      const wQ = null !== QQ && void 0 !== QQ ? QQ : {},
        LQ = null !== FQ && void 0 !== FQ ? FQ : Object.keys(Object.getPrototypeOf(wQ)).concat(Object.keys(wQ));
      return [...new Set(LQ)].filter((QQ => "number" === typeof wQ[QQ])).map((QQ => `${QQ} ${String(wQ[QQ])}`)).join(", ")
    }

    function gF(QQ, FQ) {
      var wQ;
      const LQ = null !== (wQ = FQ.vertex) && void 0 !== wQ ? wQ : {};
      if (LQ.module && zF.has(LQ.module)) {
        var qQ;
        const wQ = String(null !== (qQ = LQ.entryPoint) && void 0 !== qQ ? qQ : "");
        if (wQ.startsWith("vs_packed") && lF.set(QQ, wQ), !fF) {
          var oQ, DQ, kQ, vQ, mQ;
          fF = !0;
          const QQ = null !== (oQ = FQ.depthStencil) && void 0 !== oQ ? oQ : {},
            LQ = null !== (DQ = FQ.multisample) && void 0 !== DQ ? DQ : {},
            qQ = String(null !== (kQ = QQ.depthCompare) && void 0 !== kQ ? kQ : "");
          XQ(`WebGPU terrain pipeline ${wQ}: depth ${String(null!==(vQ=QQ.format)&&void 0!==vQ?vQ:"none")} ${qQ}${qQ.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(mQ=LQ.count)&&void 0!==mQ?mQ:1)}`)
        }
      }
    }

    function PF(QQ) {
      HF(QQ, "setPipeline", (QQ => function() {
        for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
        return jF.set(this, wQ[0]), uF(QQ, this, wQ)
      }));
      for (const FQ of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) HF(QQ, FQ, (QQ => function() {
        const wQ = jF.get(this),
          LQ = wQ ? lF.get(wQ) : void 0;
        for (var qQ = arguments.length, oQ = new Array(qQ), DQ = 0; DQ < qQ; DQ++) oQ[DQ] = arguments[DQ];
        return void 0 !== LQ && ZF(FQ, LQ, oQ), uF(QQ, this, oQ)
      }))
    }

    function ZF(QQ, FQ, wQ) {
      var LQ;
      (hF.draws++, "draw" === QQ || "drawIndexed" === QQ) && (hF.faces += wQ[0] * (null !== (LQ = wQ[1]) && void 0 !== LQ ? LQ : 1) / 6);
      if (null !== VF && VF.length < mF) {
        const LQ = ("draw" === QQ ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === QQ ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((FQ, LQ) => {
          const qQ = QQ.endsWith("Indirect") ? wQ[1] : wQ[LQ];
          return `${FQ} ${String(null!==qQ&&void 0!==qQ?qQ:"instances"===FQ?1:0)}`
        }));
        VF.push(`  ${FQ} ${QQ} ${LQ.join(" ")}`)
      }
    }

    function yF() {
      if (KF || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      KF = !0, HF(JF("GPU"), "requestAdapter", (QQ => function() {
        for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
        return uF(QQ, this, wQ).then((QQ => {
          var FQ;
          QQ ? function(QQ) {
            var FQ;
            const wQ = null !== (FQ = QQ.info) && void 0 !== FQ ? FQ : {};
            XQ(`WebGPU adapter ${["vendor","architecture","device","description"].map((QQ=>{var FQ;return`${QQ} "${String(null!==(FQ=wQ[QQ])&&void 0!==FQ?FQ:"")}"`})).join(" ")}${QQ.isFallbackAdapter?" (fallback)":""}`), XQ(`WebGPU adapter features ${EF(QQ.features)}`), XQ(`WebGPU adapter limits ${nF(QQ.limits,TF)}`), fQ(`WebGPU adapter all limits ${nF(QQ.limits,null)}`)
          }(QQ) : XQ(`WebGPU requestAdapter(${JSON.stringify(null!==(FQ=wQ[0])&&void 0!==FQ?FQ:{})}) gave none`);
          return QQ
        }))
      })), HF(JF("GPUAdapter"), "requestDevice", (QQ => function() {
        for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
        return uF(QQ, this, wQ).then((QQ => (function(QQ) {
          XQ(`WebGPU device features ${EF(QQ.features)}`), XQ(`WebGPU device limits ${nF(QQ.limits,TF)}`), QQ.addEventListener("uncapturederror", (QQ => {
            if (aF.uncaptured < vF) {
              var FQ, wQ, LQ;
              aF.uncaptured++;
              const qQ = QQ.error;
              XQ(`WebGPU uncaptured ${null!==(FQ=null===qQ||void 0===qQ||null===(wQ=qQ.constructor)||void 0===wQ?void 0:wQ.name)&&void 0!==FQ?FQ:"error"}: ${VQ(String(null!==(LQ=null===qQ||void 0===qQ?void 0:qQ.message)&&void 0!==LQ?LQ:""),600)}`)
            }
          }));
          const FQ = QQ.lost;
          null === FQ || void 0 === FQ || FQ.then((QQ => {
            var FQ;
            XQ(`WebGPU device lost (${String(QQ.reason)}): ${VQ(String(null!==(FQ=QQ.message)&&void 0!==FQ?FQ:""),600)}`)
          }))
        }(QQ), QQ)), (QQ => {
          throw XQ(`WebGPU requestDevice failed: ${String(QQ)}`), QQ
        }))
      }));
      const QQ = JF("GPUDevice");
      HF(QQ, "createShaderModule", (QQ => function() {
        for (var FQ, wQ, LQ = arguments.length, qQ = new Array(LQ), oQ = 0; oQ < LQ; oQ++) qQ[oQ] = arguments[oQ];
        const DQ = uF(QQ, this, qQ);
        return function(QQ, FQ) {
          const wQ = FQ.includes("decodeQuad");
          wQ && zF.add(QQ);
          const LQ = QQ.getCompilationInfo;
          null === LQ || void 0 === LQ || LQ.call(QQ).then((QQ => {
            if (0 === QQ.messages.length && !wQ) return;
            const FQ = {};
            for (const wQ of QQ.messages) {
              var LQ;
              FQ[String(wQ.type)] = (null !== (LQ = FQ[String(wQ.type)]) && void 0 !== LQ ? LQ : 0) + 1
            }
            const qQ = QQ.messages.map((QQ => `${String(QQ.type)} ${String(QQ.lineNum)}:${String(QQ.linePos)} ${String(QQ.message)}`)).join("\n");
            aF.compile < vF && (aF.compile++, XQ(`WebGPU ${wQ?"terrain ":""}shader module compiled: ${JSON.stringify(FQ)}${qQ?` first: ${VQ(qQ.split("\n")[0],300)}`:""}`)), qQ && fQ(`WebGPU shader module messages:\n${VQ(qQ)}`)
          }))
        }(DQ, String(null !== (FQ = (null !== (wQ = qQ[0]) && void 0 !== wQ ? wQ : {}).code) && void 0 !== FQ ? FQ : "")), DQ
      })), HF(QQ, "createRenderPipeline", (QQ => function() {
        for (var FQ, wQ = arguments.length, LQ = new Array(wQ), qQ = 0; qQ < wQ; qQ++) LQ[qQ] = arguments[qQ];
        const oQ = uF(QQ, this, LQ);
        return gF(oQ, null !== (FQ = LQ[0]) && void 0 !== FQ ? FQ : {}), oQ
      })), HF(QQ, "createRenderPipelineAsync", (QQ => function() {
        for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
        return uF(QQ, this, wQ).then((QQ => {
          var FQ;
          return gF(QQ, null !== (FQ = wQ[0]) && void 0 !== FQ ? FQ : {}), QQ
        }), (QQ => {
          var FQ;
          throw function(QQ, FQ) {
            var wQ, LQ, qQ;
            if (aF.rejected >= vF) return;
            aF.rejected++;
            const {
              reason: oQ,
              message: DQ
            } = null !== FQ && void 0 !== FQ ? FQ : {}, kQ = String(null !== (wQ = (null !== (LQ = QQ.vertex) && void 0 !== LQ ? LQ : {}).entryPoint) && void 0 !== wQ ? wQ : "");
            XQ(`WebGPU pipeline "${String(null!==(qQ=QQ.label)&&void 0!==qQ?qQ:"")}" ${kQ} rejected (${String(null!==oQ&&void 0!==oQ?oQ:"no reason")}): ${VQ(String(null!==DQ&&void 0!==DQ?DQ:FQ),600)}`)
          }(null !== (FQ = wQ[0]) && void 0 !== FQ ? FQ : {}, QQ), QQ
        }))
      })), HF(JF("GPUCanvasContext"), "configure", (QQ => function() {
        for (var FQ, wQ = arguments.length, LQ = new Array(wQ), qQ = 0; qQ < wQ; qQ++) LQ[qQ] = arguments[qQ];
        const oQ = null !== (FQ = LQ[0]) && void 0 !== FQ ? FQ : {};
        var DQ, kQ;
        XF++ < 3 && XQ(`WebGPU canvas ${String(oQ.format)} ${String(null!==(DQ=oQ.colorSpace)&&void 0!==DQ?DQ:"srgb")} alpha ${String(null!==(kQ=oQ.alphaMode)&&void 0!==kQ?kQ:"opaque")}`);
        return uF(QQ, this, LQ)
      })), PF(JF("GPURenderPassEncoder")), PF(JF("GPURenderBundleEncoder"))
    }
    const BF = 1e4,
      dF = 6e4,
      Qw = 5e3,
      Fw = 3e3,
      ww = 100;
    let Lw = null,
      qw = !1,
      ow = {
        ...UF.d
      },
      Dw = !1,
      kw = null,
      vw = 0,
      mw = () => {};
    const uw = new Promise((QQ => {
      mw = QQ
    }));

    function Hw() {
      var QQ;
      qw || (qw = !0, ow = Object.assign(window.bloxdRenderDebug ??= {
        ...UF.d
      }, {
        faceCull: "0" === (0, oQ.n)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (QQ = (0, oQ.n)("adrenoProbe")) && void 0 !== QQ ? QQ : ""
      }), XQ("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), bF || "undefined" === typeof window || (bF = !0, "undefined" !== typeof WebGL2RenderingContext && iF(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && iF(WebGLRenderingContext.prototype, !1)), yF(), (0, oQ.e)("renderProbe", (() => {
        ew("console")
      })), Aw(), setInterval(Gw, Qw))
    }

    function bw(QQ) {
      var FQ, wQ;
      Hw(), Lw = null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.backend) && void 0 !== FQ ? FQ : null;
      const LQ = `, renderer param ${null!==(wQ=(0,oQ.n)("renderer"))&&void 0!==wQ?wQ:"none"}, faceCull ${"0"===ow.faceCull?"off (whole parts)":"on"}, adrenoProbe ${ow.adrenoProbe||"none"}`;
      XQ(`${(0,NF.c)(QQ)}${null===QQ?"":LQ}`)
    }

    function Yw() {
      const QQ = performance.now(),
        FQ = xw(uw, BF, dF).then((FQ => ew(`${Math.round((performance.now()-QQ)/1e3)} s after playable${FQ?"":", no terrain drawn yet"}`)));
      (0, qQ.c)(XQ, (async () => {
        await FQ, await kw
      }))
    }
    async function xw(QQ, FQ, wQ) {
      const qQ = (0, LQ.e)(wQ).then((() => !1));
      return await (0, LQ.e)(FQ), Promise.race([QQ.then((() => !0)), qQ])
    }

    function Aw() {
      requestAnimationFrame((() => {
        vw++, Aw()
      }))
    }

    function tw() {
      var QQ, FQ, wQ;
      if (Dw) return;
      (Dw = !0, XQ(`renderer caps ${null!==(QQ=ow.caps)&&void 0!==QQ?QQ:"(not noted)"}; terrain fetch ${null!==(FQ=ow.fetch)&&void 0!==FQ?FQ:"(not noted)"}`), ow.adrenoProbe) && XQ(`adrenoProbe ${ow.adrenoProbe} asked; in force (storage fetch only): ${null!==(wQ=ow.probe)&&void 0!==wQ?wQ:"(not noted)"}`);
      const LQ = NQ.context;
      if (LQ) {
        for (const QQ of function(QQ) {
            var FQ;
            const wQ = [],
              LQ = QQ.getExtension("WEBGL_debug_renderer_info"),
              qQ = LQ ? QQ.getParameter(LQ.UNMASKED_VENDOR_WEBGL) : "(masked)",
              oQ = LQ ? QQ.getParameter(LQ.UNMASKED_RENDERER_WEBGL) : "(masked)";
            wQ.push(`GL ${String(QQ.getParameter(QQ.VERSION))} | ${String(QQ.getParameter(QQ.SHADING_LANGUAGE_VERSION))} | ${String(QQ.getParameter(QQ.VENDOR))} / ${String(QQ.getParameter(QQ.RENDERER))}`), wQ.push(`GL unmasked ${qQ} / ${oQ}`);
            const DQ = [
              ["MAX_TEXTURE_SIZE", QQ.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", QQ.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", QQ.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", QQ.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", QQ.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", QQ.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", QQ.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in QQ && DQ.push(["MAX_UNIFORM_BLOCK_SIZE", QQ.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", QQ.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", QQ.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", QQ.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), wQ.push(`GL limits ${DQ.map((FQ=>{let[wQ,LQ]=FQ;return`${wQ} ${String(QQ.getParameter(LQ))}`})).join(", ")}`);
            const kQ = (FQ, wQ) => {
              const LQ = QQ.getShaderPrecisionFormat(FQ, QQ.HIGH_FLOAT),
                qQ = QQ.getShaderPrecisionFormat(FQ, QQ.HIGH_INT);
              return `${wQ} highp float ${LQ?`${LQ.rangeMin}/${LQ.rangeMax}/${LQ.precision}`:"?"} int ${qQ?`${qQ.rangeMin}/${qQ.rangeMax}/${qQ.precision}`:"?"}`
            };
            wQ.push(`GL precision ${kQ(QQ.VERTEX_SHADER,"VS")}, ${kQ(QQ.FRAGMENT_SHADER,"FS")}`);
            const vQ = QQ.getContextAttributes();
            return wQ.push(`GL context ${JSON.stringify(vQ)} drawingBuffer ${QQ.drawingBufferWidth}x${QQ.drawingBufferHeight}${"drawingBufferFormat"in QQ?` format 0x${Number(QQ.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in QQ?` ${String(QQ.drawingBufferColorSpace)}`:""}`), wQ.push(`GL extensions ${(null!==(FQ=QQ.getSupportedExtensions())&&void 0!==FQ?FQ:[]).join(" ")}`), wQ
          }(LQ)) XQ(QQ);
        ! function() {
          if (!NQ.context) return;
          let QQ = 0,
            FQ = 0;
          for (const [wQ, LQ] of rQ) !LQ.gl.isContextLost() && LQ.gl.isProgram(wQ) && (FQ++, OF(LQ.gl, wQ, LQ), null !== LQ.terrain && QQ++);
          XQ(`programs: ${FQ} live of ${rQ.length} linked, ${QQ} packed terrain; CPU page copies ${Math.round(NQ.shadowBytes/1048576)} MiB (${NQ.uncopied} over budget)`)
        }()
      }
    }

    function ew(QQ) {
      return kw ??= async function(QQ) {
        tw(), "webgpu" === Lw ? (Mw(), "1" === ow.slotCheck && XQ("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), ow.slotCheck = "1", await
          function(QQ) {
            if (null !== VF) return Promise.resolve();
            const FQ = [];
            return VF = FQ, new Promise((wQ => {
              setTimeout((() => {
                VF = null, XQ(`WebGPU draw ranges (${QQ}): ${FQ.length} terrain draws recorded in a second (first ${mF}; bundles replay without new ones)`);
                for (const QQ of FQ) XQ(QQ);
                wQ()
              }), 1e3)
            }))
          }(QQ), await async function() {
            if (await (0, UF.j)(ow, "slotCheck", ["1"], Fw, ww), "1" === ow.slotCheck) return void XQ(`slot check: no answer in ${Fw} ms (only the storage fetch has one; a later answer logs on its own)`);
            Mw()
          }()) : await DF(QQ);
        XQ(`check (${QQ}) done: bloxdDebug.save() downloads it all`)
      }(QQ).catch((FQ => {
        XQ(`check (${QQ}) failed: ${String(FQ)}`)
      })).finally((() => {
        kw = null
      })), kw
    }

    function Mw() {
      void 0 !== ow.slotCheck && "1" !== ow.slotCheck && (XQ(ow.slotCheck), delete ow.slotCheck)
    }

    function Gw() {
      const QQ = QQ => vw ? (QQ / vw).toFixed(1) : "0",
        FQ = function() {
          const QQ = hF;
          return hF = {
            draws: 0,
            faces: 0
          }, QQ
        }(),
        wQ = function() {
          const QQ = eF;
          return eF = {
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
          }, QQ
        }(),
        LQ = function() {
          const QQ = MF;
          return MF = {
            buffer: 0,
            texture: 0
          }, QQ
        }();
      Mw(), ("webgpu" === Lw ? FQ.draws : wQ.inst.draws + wQ.tex.draws) > 0 && mw();
      const qQ = "webgpu" === Lw ? [`terrain ${QQ(FQ.draws)} draws ${QQ(FQ.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((QQ => wQ[QQ].draws > 0)).map((FQ => `${FQ} ${QQ(wQ[FQ].draws)} draws ${QQ(wQ[FQ].faces)} faces a frame`));
      XQ(`${vw} frames: ${qQ.join(", ")||"no draws"}; uploaded ${Math.round(LQ.buffer/1024)} KiB to buffers, ${Math.round(LQ.texture/1024)} KiB to data textures`), vw = 0
    }
  },
  4544: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      if (null === QQ) return "backend: none picked (no renderer build)";
      const FQ = QQ.adapter ? `${QQ.adapter.vendor}/${QQ.adapter.architecture}` : "none";
      return `backend ${QQ.backend}: reason ${QQ.reason}, source ${QQ.source}, adapter ${FQ}`
    }
    wQ.d(FQ, {
      c: () => LQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);