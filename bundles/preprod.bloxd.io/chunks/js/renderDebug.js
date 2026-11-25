export const id = 51;
export const ids = [51];
export const modules = {
  4997: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => gQ
    });
    var wQ = XQ(26),
      qQ = XQ(31),
      TQ = XQ(1335),
      zQ = XQ(3045);
    const sQ = 3e4,
      FQ = 1e3;

    function PQ() {
      return "visible" === document.visibilityState && "inGame" === wQ.b.get("gameState") && (0, TQ.A)()
    }

    function gQ(QQ, WQ) {
      (0, zQ.n)() || function(QQ, WQ, XQ) {
        let wQ = 0;
        const qQ = setInterval((() => {
          WQ() && (wQ += FQ, wQ >= QQ && (clearInterval(qQ), XQ()))
        }), FQ)
      }(sQ, PQ, (() => {
        WQ().then((() => {
          QQ(`saved for the player after ${sQ/1e3} s of play`), (0, zQ.A)(), qQ.k.mB("chat", {
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
  4995: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      installRenderDebug: () => JX,
      renderDebugPlayable: () => IX,
      startRenderDebug: () => rX,
      waitForDraw: () => jX
    });
    var wQ = XQ(1881),
      qQ = XQ(4997),
      TQ = XQ(3045);
    const zQ = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function sQ(QQ) {
      return 7 & QQ
    }

    function FQ(QQ) {
      return QQ >>> 11 & 1
    }

    function PQ(QQ) {
      return [1 + (QQ >>> 18 & 63), 1 + (QQ >>> 24 & 63)]
    }

    function gQ(QQ, WQ) {
      const [XQ, , wQ] = QQ, qQ = sQ(wQ), TQ = function(QQ, WQ, XQ) {
        return WQ + (1 === (22 >>> QQ & 1) ? 4 - XQ : XQ) & 3
      }(qQ, FQ(wQ), WQ), zQ = qQ >>> 1, [gQ, JQ] = PQ(XQ), rQ = 1 === TQ || 2 === TQ ? gQ : 0, IQ = TQ >= 2 ? JQ : 0, jQ = [63 & XQ, XQ >>> 6 & 63, XQ >>> 12 & 63];
      return jQ[2 === zQ ? 0 : 2] += rQ, jQ[1 === zQ ? 0 : 1] += IQ, jQ
    }

    function JQ(QQ) {
      const WQ = Math.max(...PQ(QQ[0]));
      return 1 === WQ ? "1" : WQ <= 4 ? "2-4" : WQ <= 16 ? "5-16" : "17-64"
    }
    const rQ = 16;

    function IQ(QQ) {
      let WQ = 2166136261;
      for (let XQ = 0; XQ < QQ.length; XQ++) WQ = Math.imul(WQ ^ QQ[XQ], 16777619);
      return WQ >>> 0
    }

    function jQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const wQ = Math.max(0, WQ - XQ),
        qQ = Math.min(QQ.length, WQ + XQ),
        TQ = [];
      for (let zQ = wQ; zQ < qQ; zQ++) {
        const XQ = QQ[zQ].toString(16).padStart(2, "0");
        TQ.push(zQ === WQ ? `[${XQ}]` : XQ)
      }
      return TQ.join(" ")
    }
    const BQ = {
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
      yQ = "_vs2fs_location0";
    const VQ = 0,
      DQ = 4,
      pQ = 6,
      GQ = [0, 1, 2, 0, 2, 3],
      UQ = 2048,
      bQ = 4,
      vQ = 256,
      dQ = 64,
      HQ = 268435456,
      aQ = 65536,
      lQ = /^#version [^\n]*\/\/ program (\S+)$/m;

    function hQ(QQ) {
      return null === QQ.name ? `#${QQ.id}` : `#${QQ.id} ${QQ.name}`
    }
    const iQ = [],
      cQ = new WeakMap,
      AQ = new WeakMap,
      RQ = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let EQ = 1;
    const CQ = new WeakMap;

    function uQ(QQ) {
      if (null === QQ) return 0;
      let WQ = CQ.get(QQ);
      return void 0 === WQ && (WQ = EQ++, CQ.set(QQ, WQ)), WQ
    }
    class LQ {
      constructor(QQ, WQ) {
        this.print = QQ, this.now = WQ, this.shown = 0, this.Ds = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.HI = [], this.dropped = 0
      }
      line(QQ) {
        const WQ = this.now();
        if (WQ - this.second >= 1e3 && (this.second = WQ, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.Ds++, void this.store(QQ);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${QQ} (the last line here: the rest go to bloxdDebug.save())` : QQ)
      }
      keep(QQ) {
        this.sections++, this.store(QQ)
      }
      store(QQ) {
        this.HI.push(`${new Date(Date.now()).toISOString()} ${QQ}`), this.HI.length > 2e4 && (this.HI.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.Ds} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.HI].join("\n")
      }
    }
    let kQ = null;

    function fQ() {
      if (null === kQ) {
        const QQ = new LQ((QQ => {
          (0, TQ.j)("render", QQ)
        }), (() => performance.now()));
        (0, TQ.h)("render", (() => QQ.dump())), kQ = QQ
      }
      return kQ
    }

    function SQ(QQ) {
      fQ().line(QQ)
    }

    function tQ(QQ) {
      fQ().keep(QQ)
    }

    function oQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return QQ.length <= WQ ? QQ : `${QQ.slice(0,WQ)}... (${QQ.length-WQ} more characters)`
    }

    function eQ(QQ, WQ, XQ, wQ, qQ, TQ) {
      const zQ = RQ.pendingCheck;
      if (null === zQ) return;
      const sQ = "undefined" !== typeof WebGL2RenderingContext && QQ instanceof WebGL2RenderingContext,
        FQ = {
          gl: QQ,
          program: XQ,
          call: wQ,
          Qy: qQ,
          instances: TQ,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (zQ.draws.push(FQ), sQ) try {
        const wQ = function(QQ) {
          const WQ = [],
            XQ = new Map,
            wQ = Math.min(16, QQ.getParameter(BQ.MAX_VERTEX_ATTRIBS));
          for (let qQ = 0; qQ < wQ; qQ++) {
            if (!QQ.getVertexAttrib(qQ, BQ.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const wQ = QQ.getVertexAttrib(qQ, BQ.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              TQ = QQ.getVertexAttribOffset(qQ, BQ.VERTEX_ATTRIB_ARRAY_POINTER),
              zQ = QQ.getVertexAttrib(qQ, BQ.VERTEX_ATTRIB_ARRAY_STRIDE),
              sQ = QQ.getVertexAttrib(qQ, BQ.VERTEX_ATTRIB_ARRAY_SIZE),
              FQ = QQ.getVertexAttrib(qQ, BQ.VERTEX_ATTRIB_ARRAY_TYPE),
              PQ = "VERTEX_ATTRIB_ARRAY_INTEGER" in QQ && QQ.getVertexAttrib(qQ, BQ.VERTEX_ATTRIB_ARRAY_INTEGER),
              gQ = "VERTEX_ATTRIB_ARRAY_DIVISOR" in QQ ? QQ.getVertexAttrib(qQ, BQ.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            XQ.set(qQ, {
              buffer: wQ,
              offset: TQ,
              stride: zQ
            }), WQ.push(`@${qQ} buf#${uQ(wQ)} +${TQ} stride ${zQ} ${sQ}x0x${FQ.toString(16)}${PQ?" int":""} div ${gQ}`)
          }
          return {
            lines: WQ,
            byLocation: XQ
          }
        }(QQ);
        if (FQ.attributes = wQ.lines, "inst" === XQ.terrain) {
          const {
            group: qQ,
            chunk: sQ
          } = function(QQ, WQ, XQ) {
            const wQ = WQ.get(pQ),
              qQ = QQ.getVertexAttrib(pQ, BQ.CURRENT_VERTEX_ATTRIB),
              TQ = wQ ? `+${wQ.offset}` : qQ ? Array.from(qQ).slice(0, 3).join(",") : "?";
            let zQ = XQ.groups.get(TQ);
            return void 0 === zQ && (zQ = XQ.groups.size, XQ.groups.set(TQ, zQ)), {
              group: zQ,
              chunk: TQ
            }
          }(QQ, wQ.byLocation, zQ);
          FQ.group = qQ, FQ.chunk = sQ;
          for (const QQ of [VQ, DQ]) {
            var PQ;
            const WQ = null === (PQ = wQ.byLocation.get(QQ)) || void 0 === PQ ? void 0 : PQ.buffer;
            WQ && FQ.pages.push({
              kind: "buf",
              buffer: WQ
            })
          }! function(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
            const sQ = wQ.get(VQ),
              FQ = zQ.parts.get(TQ);
            if (void 0 === FQ && zQ.parts.size >= bQ) return;
            const PQ = Math.min(qQ, dQ, vQ - (null !== FQ && void 0 !== FQ ? FQ : 0));
            if (null === sQ || void 0 === sQ || !sQ.buffer || PQ <= 0) return;
            const gQ = nQ(QQ, WQ, XQ);
            if (!gQ) return;
            const JQ = sQ.stride || 12,
              rQ = OQ(QQ, sQ.buffer, sQ.offset, (PQ - 1) * JQ + 12),
              IQ = new DataView(rQ.buffer),
              jQ = function(QQ, WQ) {
                const XQ = function(QQ) {
                    const WQ = MQ.get(QQ);
                    if (void 0 !== WQ && (null === WQ || QQ.isProgram(WQ))) return WQ;
                    RQ.inProbe = !0;
                    let XQ = null;
                    try {
                      XQ = xQ(QQ, KQ, mQ, "fed", "the record feed")
                    } finally {
                      RQ.inProbe = !1
                    }
                    return MQ.set(QQ, XQ), XQ
                  }(QQ),
                  wQ = XQ ? ZQ(QQ, XQ, WQ, (() => {
                    QQ.drawArraysInstanced(BQ.POINTS, 0, 1, WQ)
                  }), "decode probe input (the record feed)") : null;
                return wQ ? new Uint32Array(wQ.buffer) : null
              }(QQ, PQ);
            jQ || zQ.fed.failed++;
            const yQ = ZQ(QQ, gQ, 4 * PQ, (() => {
              QQ.drawArraysInstanced(BQ.POINTS, 0, 4, PQ)
            }));
            if (!yQ) return;
            zQ.parts.set(TQ, (null !== FQ && void 0 !== FQ ? FQ : 0) + PQ);
            for (let BQ = 0; BQ < PQ; BQ++) {
              const QQ = BQ * JQ,
                WQ = [IQ.getUint32(QQ, !0), IQ.getUint32(QQ + 4, !0), IQ.getUint32(QQ + 8, !0)],
                XQ = jQ ? [jQ[3 * BQ], jQ[3 * BQ + 1], jQ[3 * BQ + 2]] : WQ;
              jQ && (zQ.fed.records++, XQ.some(((QQ, XQ) => QQ !== WQ[XQ])) && (zQ.fed.differing++, zQ.fed.first.length < 8 && zQ.fed.first.push(`part ${TQ} instance ${BQ}: fed ${XQ.map(qW).join(" ")} buffer ${WQ.map(qW).join(" ")}`)));
              for (let wQ = 0; wQ < 4; wQ++) {
                const QQ = 3 * (4 * BQ + wQ);
                zQ.vertices.push({
                  record: XQ,
                  slot: wQ,
                  group: TQ,
                  gpu: [yQ[QQ], yQ[QQ + 1], yQ[QQ + 2]]
                })
              }
            }
          }(QQ, WQ, XQ, wQ.byLocation, TQ, qQ, zQ)
        } else {
          const wQ = QW(QQ, WQ, 16),
            TQ = QW(QQ, WQ, 8);
          for (const QQ of [wQ, TQ]) QQ && FQ.pages.push({
            kind: "tex",
            texture: QQ
          });
          wQ && function(QQ, WQ, XQ, wQ, qQ, TQ) {
            if (TQ.parts.size >= bQ) return;
            const zQ = nQ(QQ, WQ, XQ);
            if (!zQ) return;
            let sQ = 6 * vQ;
            const FQ = [];
            for (const [IQ, jQ] of qQ) {
              const QQ = Math.min(jQ, sQ, Math.max(6, 6 * Math.floor(vQ / qQ.length)));
              QQ > 0 && (FQ.push([IQ, QQ]), sQ -= QQ)
            }
            const PQ = FQ.reduce(((QQ, WQ) => {
                let [, XQ] = WQ;
                return QQ + XQ
              }), 0),
              gQ = ZQ(QQ, zQ, PQ, (() => {
                for (const [WQ, XQ] of FQ) QQ.drawArrays(BQ.POINTS, WQ, XQ)
              }));
            if (!gQ) return;
            let JQ = 0;
            for (const [IQ, jQ] of FQ) {
              const WQ = Math.floor(IQ / 6),
                XQ = Math.floor((IQ + jQ - 1) / 6) - WQ + 1,
                qQ = WW(QQ, wQ, UQ, WQ, XQ);
              for (let QQ = IQ; QQ < IQ + jQ; QQ++, JQ++) {
                var rQ;
                const XQ = 4 * (Math.floor(QQ / 6) - WQ),
                  wQ = [qQ[XQ], qQ[XQ + 1], qQ[XQ + 2]];
                TQ.parts.set(qQ[XQ + 3], (null !== (rQ = TQ.parts.get(qQ[XQ + 3])) && void 0 !== rQ ? rQ : 0) + (QQ % 6 === 0 ? 1 : 0)), TQ.vertices.push({
                  record: wQ,
                  slot: GQ[QQ % 6],
                  group: qQ[XQ + 3],
                  gpu: [gQ[3 * JQ], gQ[3 * JQ + 1], gQ[3 * JQ + 2]]
                })
              }
            }
          }(QQ, WQ, XQ, wQ, qQ, zQ)
        }
      } catch (gQ) {
        SQ(`decode probe failed on program ${hQ(XQ)}: ${String(gQ)}`)
      }
    }

    function nQ(QQ, WQ, XQ) {
      if (void 0 !== XQ.probe) return XQ.probe && YQ(QQ, WQ, XQ.probe), XQ.probe;
      XQ.probe = null, RQ.inProbe = !0;
      try {
        XQ.probe = function(QQ, WQ) {
          return xQ(QQ, (XQ = WQ.vertex, XQ.replace(`\nvec3 ${yQ} = vec3(0);\n`, `\nout vec3 ${yQ};\n`)), WQ.fragment, yQ, `program ${hQ(WQ)}'s twin`);
          var XQ
        }(QQ, XQ)
      } finally {
        RQ.inProbe = !1
      }
      return XQ.probe && YQ(QQ, WQ, XQ.probe), XQ.probe
    }

    function xQ(QQ, WQ, XQ, wQ, qQ) {
      const TQ = [QQ.createShader(BQ.VERTEX_SHADER), QQ.createShader(BQ.FRAGMENT_SHADER)],
        zQ = QQ.createProgram();
      if (!zQ || !TQ[0] || !TQ[1]) return null;
      QQ.shaderSource(TQ[0], WQ), QQ.shaderSource(TQ[1], XQ);
      for (const FQ of TQ) QQ.compileShader(FQ), QQ.attachShader(zQ, FQ);
      QQ.transformFeedbackVaryings(zQ, [wQ], BQ.INTERLEAVED_ATTRIBS), QQ.linkProgram(zQ);
      for (const FQ of TQ) QQ.deleteShader(FQ);
      var sQ;
      return QQ.getProgramParameter(zQ, BQ.LINK_STATUS) ? zQ : (SQ(`decode probe: ${qQ} failed to link: ${oQ(null!==(sQ=QQ.getProgramInfoLog(zQ))&&void 0!==sQ?sQ:"",300)}`), QQ.deleteProgram(zQ), null)
    }

    function YQ(QQ, WQ, XQ) {
      const wQ = QQ.getProgramParameter(WQ, BQ.ACTIVE_UNIFORM_BLOCKS);
      for (let sQ = 0; sQ < wQ; sQ++) {
        const wQ = QQ.getActiveUniformBlockName(WQ, sQ),
          qQ = null === wQ ? BQ.INVALID_INDEX : QQ.getUniformBlockIndex(XQ, wQ);
        qQ !== BQ.INVALID_INDEX && QQ.uniformBlockBinding(XQ, qQ, QQ.getActiveUniformBlockParameter(WQ, sQ, BQ.UNIFORM_BLOCK_BINDING))
      }
      const qQ = QQ.getParameter(BQ.CURRENT_PROGRAM);
      QQ.useProgram(XQ);
      const TQ = QQ.getProgramParameter(WQ, BQ.ACTIVE_UNIFORMS),
        zQ = QQ.getActiveUniforms(WQ, [...Array(TQ).keys()], BQ.UNIFORM_BLOCK_INDEX);
      for (let sQ = 0; sQ < TQ; sQ++) {
        const wQ = QQ.getActiveUniform(WQ, sQ);
        if (!wQ || -1 !== zQ[sQ]) continue;
        const qQ = wQ.name.replace(/\[0\]$/, "");
        for (let TQ = 0; TQ < wQ.size; TQ++) {
          const zQ = wQ.size > 1 ? `${qQ}[${TQ}]` : wQ.name,
            sQ = QQ.getUniformLocation(WQ, zQ),
            FQ = QQ.getUniformLocation(XQ, zQ);
          sQ && FQ && NQ(QQ, FQ, wQ.type, QQ.getUniform(WQ, sQ))
        }
      }
      QQ.useProgram(qQ)
    }

    function NQ(QQ, WQ, XQ, wQ) {
      const qQ = ArrayBuffer.isView(wQ) ? Array.from(wQ) : [Number(wQ)];
      switch (XQ) {
        case BQ.FLOAT:
          return void QQ.uniform1f(WQ, qQ[0]);
        case BQ.FLOAT_VEC2:
          return void QQ.uniform2fv(WQ, qQ);
        case BQ.FLOAT_VEC3:
          return void QQ.uniform3fv(WQ, qQ);
        case BQ.FLOAT_VEC4:
          return void QQ.uniform4fv(WQ, qQ);
        case BQ.FLOAT_MAT3:
          return void QQ.uniformMatrix3fv(WQ, !1, qQ);
        case BQ.FLOAT_MAT4:
          return void QQ.uniformMatrix4fv(WQ, !1, qQ);
        case BQ.UNSIGNED_INT:
          return void QQ.uniform1ui(WQ, qQ[0]);
        case BQ.UNSIGNED_INT_VEC2:
          return void QQ.uniform2uiv(WQ, qQ);
        case BQ.UNSIGNED_INT_VEC3:
          return void QQ.uniform3uiv(WQ, qQ);
        case BQ.UNSIGNED_INT_VEC4:
          return void QQ.uniform4uiv(WQ, qQ);
        case BQ.INT_VEC2:
          return void QQ.uniform2iv(WQ, qQ);
        case BQ.INT_VEC3:
          return void QQ.uniform3iv(WQ, qQ);
        case BQ.INT_VEC4:
          return void QQ.uniform4iv(WQ, qQ);
        default:
          QQ.uniform1i(WQ, qQ[0])
      }
    }

    function ZQ(QQ, WQ, XQ, wQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const TQ = QQ.getParameter(BQ.CURRENT_PROGRAM),
        zQ = QQ.getParameter(BQ.TRANSFORM_FEEDBACK_BINDING),
        sQ = QQ.getParameter(BQ.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        FQ = QQ.getParameter(BQ.COPY_READ_BUFFER_BINDING),
        PQ = QQ.isEnabled(BQ.RASTERIZER_DISCARD),
        gQ = QQ.createTransformFeedback(),
        JQ = QQ.createBuffer();
      RQ.inProbe = !0;
      try {
        const TQ = QQ.getError();
        TQ !== BQ.NO_ERROR && SQ(`GL error 0x${TQ.toString(16)} pending before the decode probe (the renderer's)`), QQ.useProgram(WQ), QQ.bindTransformFeedback(BQ.TRANSFORM_FEEDBACK, gQ), QQ.bindBuffer(BQ.TRANSFORM_FEEDBACK_BUFFER, JQ), QQ.bufferData(BQ.TRANSFORM_FEEDBACK_BUFFER, 12 * XQ, BQ.STREAM_READ), QQ.bindBufferBase(BQ.TRANSFORM_FEEDBACK_BUFFER, 0, JQ), QQ.enable(BQ.RASTERIZER_DISCARD), QQ.beginTransformFeedback(BQ.POINTS), wQ(), QQ.endTransformFeedback(), QQ.bindBufferBase(BQ.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const zQ = QQ.getError();
        if (zQ !== BQ.NO_ERROR) return SQ(`${qQ}: GL error 0x${zQ.toString(16)} on the feedback draw`), null;
        const sQ = new Float32Array(3 * XQ);
        return QQ.bindBuffer(BQ.COPY_READ_BUFFER, JQ), QQ.getBufferSubData(BQ.COPY_READ_BUFFER, 0, sQ), sQ
      } finally {
        PQ || QQ.disable(BQ.RASTERIZER_DISCARD), QQ.bindTransformFeedback(BQ.TRANSFORM_FEEDBACK, zQ), QQ.bindBuffer(BQ.TRANSFORM_FEEDBACK_BUFFER, sQ), QQ.bindBuffer(BQ.COPY_READ_BUFFER, FQ), QQ.deleteTransformFeedback(gQ), QQ.deleteBuffer(JQ), QQ.useProgram(TQ), RQ.inProbe = !1
      }
    }

    function OQ(QQ, WQ, XQ, wQ) {
      const qQ = QQ.getParameter(BQ.COPY_READ_BUFFER_BINDING),
        TQ = new Uint8Array(wQ);
      return QQ.bindBuffer(BQ.COPY_READ_BUFFER, WQ), QQ.getBufferSubData(BQ.COPY_READ_BUFFER, XQ, TQ), QQ.bindBuffer(BQ.COPY_READ_BUFFER, qQ), TQ
    }
    const KQ = `#version 300 es\nlayout(location = ${VQ}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      mQ = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      MQ = new WeakMap;

    function QW(QQ, WQ, XQ) {
      const wQ = QQ.getProgramParameter(WQ, BQ.ACTIVE_UNIFORMS),
        qQ = QQ.getParameter(BQ.ACTIVE_TEXTURE);
      try {
        for (let qQ = 0; qQ < wQ; qQ++) {
          const wQ = QQ.getActiveUniform(WQ, qQ);
          if ((null === wQ || void 0 === wQ ? void 0 : wQ.type) !== BQ.UNSIGNED_INT_SAMPLER_2D) continue;
          const TQ = QQ.getUniformLocation(WQ, wQ.name),
            zQ = TQ ? QQ.getUniform(WQ, TQ) : -1;
          if (zQ < 0) continue;
          QQ.activeTexture(BQ.TEXTURE0 + zQ);
          const sQ = QQ.getParameter(BQ.TEXTURE_BINDING_2D);
          if (sQ && AQ.get(sQ) === XQ) return sQ
        }
        return null
      } finally {
        QQ.activeTexture(qQ)
      }
    }

    function WW(QQ, WQ, XQ, wQ, qQ) {
      const TQ = new Uint32Array(4 * qQ),
        zQ = QQ.getParameter(BQ.READ_FRAMEBUFFER_BINDING),
        sQ = QQ.createFramebuffer();
      QQ.bindFramebuffer(BQ.READ_FRAMEBUFFER, sQ), QQ.framebufferTexture2D(BQ.READ_FRAMEBUFFER, BQ.COLOR_ATTACHMENT0, BQ.TEXTURE_2D, WQ, 0);
      try {
        let WQ = 0;
        for (; WQ < qQ;) {
          const zQ = wQ + WQ,
            sQ = zQ % XQ,
            FQ = Math.min(qQ - WQ, XQ - sQ);
          QQ.readPixels(sQ, Math.floor(zQ / XQ), FQ, 1, BQ.RGBA_INTEGER, BQ.UNSIGNED_INT, TQ.subarray(4 * WQ, 4 * (WQ + FQ))), WQ += FQ
        }
      } finally {
        QQ.bindFramebuffer(BQ.READ_FRAMEBUFFER, zQ), QQ.deleteFramebuffer(sQ)
      }
      return TQ
    }

    function XW(QQ, WQ, XQ) {
      let wQ = 0,
        qQ = 0;
      for (let FQ = 0; FQ < WQ.bytes.length; FQ += aQ) {
        wQ++;
        const QQ = Math.min(FQ + aQ, WQ.bytes.length);
        IQ(WQ.bytes.subarray(FQ, QQ)) !== IQ(XQ.subarray(FQ, QQ)) && qQ++
      }
      const TQ = `${QQ} ${WQ.bytes.length} B cpu ${IQ(WQ.bytes).toString(16)} gpu ${IQ(XQ).toString(16)}, ${qQ}/${wQ} blocks differ${WQ.missed?`, ${WQ.missed} GPU-side writes uncopied`:""}`;
      if (0 === qQ) return TQ;
      const {
        count: zQ,
        offsets: sQ
      } = function(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const wQ = Math.min(QQ.length, WQ.length);
        let qQ = Math.abs(QQ.length - WQ.length);
        const TQ = [];
        for (let zQ = 0; zQ < wQ; zQ++) QQ[zQ] !== WQ[zQ] && (qQ++, TQ.length < XQ && TQ.push(zQ));
        return {
          count: qQ,
          offsets: TQ
        }
      }(WQ.bytes, XQ);
      return tQ([`${TQ}: ${zQ} bytes differ`, ...sQ.map((QQ => `  +${QQ}: cpu ${jQ(WQ.bytes,QQ)} | gpu ${jQ(XQ,QQ)}`))].join("\n")), `${TQ}: ${zQ} bytes differ, first at ${sQ.join(", ")} (context in the saved file)`
    }

    function wW(QQ) {
      if (0 === QQ.vertices.length) return void SQ(`decode probe (${QQ.reason}): no terrain draw probed (${QQ.draws.length} seen)`);
      const WQ = function(QQ) {
          const WQ = new Map;
          for (const wQ of QQ) {
            const QQ = WQ.get(wQ.group);
            QQ ? QQ.push(wQ) : WQ.set(wQ.group, [wQ])
          }
          const XQ = {
            vertices: QQ.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [wQ, qQ] of WQ) {
            const QQ = new Map,
              WQ = qQ.map((WQ => {
                const XQ = gQ(WQ.record, WQ.slot),
                  wQ = [WQ.gpu[0] - XQ[0], WQ.gpu[1] - XQ[1], WQ.gpu[2] - XQ[2]],
                  qQ = wQ.map((QQ => Math.round(64 * QQ))).join(","),
                  TQ = QQ.get(qQ);
                return TQ ? TQ.count++ : QQ.set(qQ, {
                  count: 1,
                  offset: wQ
                }), XQ
              }));
            let TQ = [0, 0, 0],
              zQ = 0;
            for (const XQ of QQ.values()) XQ.count > zQ && (zQ = XQ.count, TQ = XQ.offset);
            XQ.translations.set(wQ, TQ), qQ.forEach(((QQ, wQ) => {
              var qQ;
              const zQ = [WQ[wQ][0] + TQ[0], WQ[wQ][1] + TQ[1], WQ[wQ][2] + TQ[2]];
              if (zQ.every(((WQ, XQ) => {
                  return wQ = QQ.gpu[XQ], qQ = WQ, Math.abs(wQ - qQ) <= Math.max(.001, 1e-6 * Math.abs(qQ));
                  var wQ, qQ
                }))) return;
              XQ.mismatches++, XQ.byDirection[sQ(QQ.record[2])]++, XQ.byDiagonal[FQ(QQ.record[2])]++;
              const PQ = JQ(QQ.record);
              XQ.byBand[PQ] = (null !== (qQ = XQ.byBand[PQ]) && void 0 !== qQ ? qQ : 0) + 1, XQ.first.length < rQ && XQ.first.push({
                ...QQ,
                expected: zQ
              })
            }))
          }
          return XQ
        }(QQ.vertices),
        XQ = WQ.byDirection.map(((QQ, WQ) => QQ ? `${zQ[WQ]} ${QQ}` : "")).filter(Boolean).join(" "),
        wQ = Object.entries(WQ.byBand).map((QQ => {
          let [WQ, XQ] = QQ;
          return `${WQ}: ${XQ}`
        })).join(" ");
      if (SQ(`decode probe (${QQ.reason}): ${WQ.mismatches}/${WQ.vertices} vertices differ from the CPU decode over ${QQ.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (WQ.mismatches ? ` by direction [${XQ}] diagonal [0: ${WQ.byDiagonal[0]} 1: ${WQ.byDiagonal[1]}] extent [${wQ}]` : "")), QQ.fed.records > 0 || QQ.fed.failed > 0) {
        SQ(`decode probe input: ${QQ.fed.differing}/${QQ.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (QQ.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (QQ.fed.failed ? `; the feed failed on ${QQ.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const WQ of QQ.fed.first) SQ(`  ${WQ}`)
      }
      for (const qQ of WQ.first) {
        const [QQ, WQ, XQ] = qQ.record;
        SQ(`  mismatch part ${qQ.group} r0 ${QQ.toString(16)} r1 ${WQ.toString(16)} r2 ${XQ.toString(16)} slot ${qQ.slot} (${zQ[sQ(XQ)]}): expected ${qQ.expected.map(TW).join(",")} gpu ${qQ.gpu.map(TW).join(",")}`)
      }
      tQ(`decode probe translations: ${[...WQ.translations].map((QQ=>{let[WQ,XQ]=QQ;return`${WQ}: ${XQ.map(TW).join(",")}`})).join("; ")}`)
    }

    function qW(QQ) {
      return QQ.toString(16)
    }

    function TW(QQ) {
      return Number.isInteger(QQ) ? String(QQ) : QQ.toFixed(3)
    }

    function zW(QQ) {
      return null !== RQ.pendingCheck ? Promise.resolve() : new Promise((WQ => {
        let XQ = !1;
        const wQ = {
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
        RQ.pendingCheck = wQ;
        const qQ = () => {
            RQ.pendingCheck = null;
            try {
              ! function(QQ) {
                SQ(`draw ranges (${QQ.reason}): ${QQ.terrainDraws} terrain draws in the frame, the first ${QQ.draws.length} here`);
                for (const WQ of QQ.draws) {
                  const QQ = WQ.Qy.slice(0, 8).map((QQ => {
                      let [WQ, XQ] = QQ;
                      return `${WQ}+${XQ}`
                    })).join(" "),
                    XQ = WQ.Qy.length > 8 ? ` (+${WQ.Qy.length-8} ranges)` : "";
                  SQ(`  ${hQ(WQ.program)} ${WQ.program.terrain} ${WQ.call} ${QQ}${XQ} x${WQ.instances}${WQ.group>=0?` part ${WQ.group} chunk ${WQ.chunk}`:""} | ${WQ.attributes.join(" | ")}`)
                }
              }(wQ), wW(wQ);
              wQ.draws.some((QQ => "undefined" !== typeof WebGL2RenderingContext && QQ.gl instanceof WebGL2RenderingContext)) || 0 === wQ.draws.length ? function(QQ) {
                const WQ = [],
                  XQ = new Map;
                for (const wQ of QQ)
                  if ("undefined" !== typeof WebGL2RenderingContext && wQ.gl instanceof WebGL2RenderingContext)
                    for (const QQ of wQ.pages) XQ.set("buf" === QQ.kind ? QQ.buffer : QQ.texture, {
                      page: QQ,
                      gl: wQ.gl
                    });
                for (const [wQ, {
                    page: qQ,
                    gl: TQ
                  }] of XQ) {
                  const QQ = cQ.get(wQ);
                  if (!QQ) {
                    WQ.push(`${qQ.kind}#${uQ(wQ)}: no CPU copy (${RQ.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === qQ.kind) {
                    WQ.push(XW(`buf#${QQ.id}`, QQ, OQ(TQ, qQ.buffer, 0, QQ.bytes.length)));
                    continue
                  }
                  const XQ = WW(TQ, qQ.texture, QQ.width, 0, QQ.width * QQ.height),
                    zQ = 16 === QQ.texelBytes ? new Uint8Array(XQ.buffer) : new Uint8Array(new Uint16Array(XQ).buffer);
                  WQ.push(XW(`tex#${QQ.id} (${16===QQ.texelBytes?"records":"light"})`, QQ, zQ))
                }
                for (const wQ of WQ) SQ(`page readback ${wQ}`)
              }(wQ.draws) : SQ("page readback: none on WebGL1 (no buffer readback)")
            } catch (QQ) {
              SQ(`check failed: ${String(QQ)}`)
            }
            WQ()
          },
          TQ = () => {
            if (wQ.draws.length > 0 && !XQ) return XQ = !0, void setTimeout(qQ, 0);
            XQ || requestAnimationFrame(TQ)
          };
        requestAnimationFrame(TQ), setTimeout((() => {
          XQ || (XQ = !0, qQ())
        }), 5e3)
      }))
    }
    var sW = XQ(5002);
    const FW = 20,
      PW = 24,
      gW = Reflect.apply;

    function JW(QQ, WQ, XQ) {
      if (!QQ) return;
      const wQ = QQ[WQ];
      if ("function" === typeof wQ) {
        const qQ = XQ(wQ);
        QQ[WQ] = qQ, (0, sW.s)(qQ, wQ)
      }
    }
    let rW = !1;
    const IW = new WeakMap,
      jW = new WeakMap,
      BW = new WeakMap,
      yW = {
        gl: 0,
        lost: 0
      };
    let VW = {
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
      DW = {
        buffer: 0,
        texture: 0
      },
      pW = 0;

    function GW(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (QQ instanceof ArrayBuffer) return new Uint8Array(QQ, WQ, XQ || void 0);
      if (!ArrayBuffer.isView(QQ)) return null;
      const wQ = "BYTES_PER_ELEMENT" in QQ ? QQ.BYTES_PER_ELEMENT : 1,
        qQ = QQ.byteOffset + WQ * wQ,
        TQ = XQ ? XQ * wQ : QQ.byteLength - WQ * wQ;
      return new Uint8Array(QQ.buffer, qQ, Math.max(0, TQ))
    }

    function UW(QQ, WQ) {
      const XQ = function(QQ) {
        switch (QQ) {
          case BQ.ARRAY_BUFFER:
            return BQ.ARRAY_BUFFER_BINDING;
          case BQ.ELEMENT_ARRAY_BUFFER:
            return BQ.ELEMENT_ARRAY_BUFFER_BINDING;
          case BQ.COPY_READ_BUFFER:
            return BQ.COPY_READ_BUFFER_BINDING;
          case BQ.COPY_WRITE_BUFFER:
            return BQ.COPY_WRITE_BUFFER_BINDING;
          case BQ.UNIFORM_BUFFER:
            return BQ.UNIFORM_BUFFER_BINDING;
          case BQ.PIXEL_UNPACK_BUFFER:
            return BQ.PIXEL_UNPACK_BUFFER_BINDING;
          case BQ.TRANSFORM_FEEDBACK_BUFFER:
            return BQ.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(WQ);
      return XQ ? QQ.getParameter(XQ) : null
    }

    function bW(QQ) {
      const WQ = cQ.get(QQ);
      WQ && (RQ.shadowBytes -= WQ.bytes.length, cQ.delete(QQ))
    }

    function vW(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      bW(QQ), RQ.shadowBytes + WQ > HQ ? RQ.uncopied++ : (RQ.shadowBytes += WQ, cQ.set(QQ, {
        id: uQ(QQ),
        bytes: new Uint8Array(WQ),
        width: XQ,
        height: wQ,
        texelBytes: qQ,
        missed: 0
      }))
    }

    function dW(QQ, WQ) {
      for (const XQ of ["deleteBuffer", "deleteTexture"]) JW(QQ, XQ, (QQ => function() {
        for (var WQ = arguments.length, XQ = new Array(WQ), wQ = 0; wQ < WQ; wQ++) XQ[wQ] = arguments[wQ];
        return XQ[0] && bW(XQ[0]), gW(QQ, this, XQ)
      }));
      JW(QQ, "shaderSource", (QQ => function() {
        for (var WQ = arguments.length, XQ = new Array(WQ), wQ = 0; wQ < WQ; wQ++) XQ[wQ] = arguments[wQ];
        return XQ[0] && "string" === typeof XQ[1] && IW.set(XQ[0], XQ[1]), gW(QQ, this, XQ)
      })), JW(QQ, "attachShader", (QQ => function() {
        for (var WQ, XQ = arguments.length, wQ = new Array(XQ), qQ = 0; qQ < XQ; qQ++) wQ[qQ] = arguments[qQ];
        const TQ = wQ[0],
          zQ = null !== (WQ = jW.get(TQ)) && void 0 !== WQ ? WQ : [];
        return zQ.push(wQ[1]), jW.set(TQ, zQ), gW(QQ, this, wQ)
      })), JW(QQ, "linkProgram", (QQ => function() {
        for (var WQ = arguments.length, XQ = new Array(WQ), wQ = 0; wQ < WQ; wQ++) XQ[wQ] = arguments[wQ];
        const qQ = gW(QQ, this, XQ);
        return RQ.inProbe || function(QQ, WQ) {
          var XQ, wQ, qQ;
          "undefined" !== typeof HTMLCanvasElement && QQ.canvas instanceof HTMLCanvasElement && function(QQ) {
            if (cW.has(QQ)) return;
            cW.add(QQ);
            for (const WQ of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) QQ.addEventListener(WQ, (QQ => {
              yW.lost < FW && (yW.lost++, SQ(`${WQ}${"statusMessage"in QQ?`: ${String(QQ.statusMessage)}`:""}`))
            }))
          }(QQ.canvas);
          RQ.context ??= QQ;
          const TQ = null !== (XQ = jW.get(WQ)) && void 0 !== XQ ? XQ : [];
          let zQ = "",
            sQ = "";
          for (const gQ of TQ) {
            var FQ;
            const QQ = null !== (FQ = IW.get(gQ)) && void 0 !== FQ ? FQ : "";
            /\bgl_Position\b/.test(QQ) ? zQ = QQ : sQ = QQ
          }
          const PQ = {
            id: uQ(WQ),
            name: null !== (wQ = null === (qQ = lQ.exec(zQ)) || void 0 === qQ ? void 0 : qQ[1]) && void 0 !== wQ ? wQ : null,
            gl: QQ,
            vertex: zQ,
            fragment: sQ,
            terrain: aW(zQ),
            checked: !1,
            firstDraw: !1
          };
          if (BW.set(WQ, PQ), iQ.push([WQ, PQ]), null !== PQ.terrain) {
            const WQ = TQ.map((WQ => {
              var XQ;
              return null !== (XQ = QQ.getShaderInfoLog(WQ)) && void 0 !== XQ ? XQ : ""
            })).filter((QQ => "" !== QQ.trim()));
            WQ.length > 0 && tQ(`program ${hQ(PQ)} (${PQ.terrain}) shader logs:\n${oQ(WQ.join("\n"))}`)
          }
        }(this, XQ[0]), qQ
      })), JW(QQ, "bufferData", (QQ => function() {
        for (var WQ = arguments.length, XQ = new Array(WQ), wQ = 0; wQ < WQ; wQ++) XQ[wQ] = arguments[wQ];
        const qQ = gW(QQ, this, XQ);
        if (!RQ.inProbe) {
          const QQ = UW(this, XQ[0]);
          if (QQ) {
            var TQ, zQ, sQ;
            const WQ = "number" === typeof XQ[1] ? null : GW(XQ[1], null !== (TQ = XQ[3]) && void 0 !== TQ ? TQ : 0, null !== (zQ = XQ[4]) && void 0 !== zQ ? zQ : 0);
            var FQ;
            if (vW(QQ, "number" === typeof XQ[1] ? XQ[1] : null !== (sQ = null === WQ || void 0 === WQ ? void 0 : WQ.length) && void 0 !== sQ ? sQ : 0), WQ) null === (FQ = cQ.get(QQ)) || void 0 === FQ || FQ.bytes.set(WQ)
          }
        }
        return qQ
      })), JW(QQ, "bufferSubData", (QQ => function() {
        for (var WQ = arguments.length, XQ = new Array(WQ), wQ = 0; wQ < WQ; wQ++) XQ[wQ] = arguments[wQ];
        const qQ = gW(QQ, this, XQ);
        if (!RQ.inProbe) {
          var TQ, zQ;
          const QQ = UW(this, XQ[0]),
            WQ = QQ ? cQ.get(QQ) : void 0,
            wQ = GW(XQ[2], null !== (TQ = XQ[3]) && void 0 !== TQ ? TQ : 0, null !== (zQ = XQ[4]) && void 0 !== zQ ? zQ : 0);
          if (WQ && wQ) {
            const QQ = XQ[1];
            WQ.bytes.set(wQ.subarray(0, Math.max(0, WQ.bytes.length - QQ)), QQ), HW("buffer", WQ, QQ, wQ.length)
          }
        }
        return qQ
      })), WQ && (JW(QQ, "copyBufferSubData", (QQ => function() {
        for (var WQ = arguments.length, XQ = new Array(WQ), wQ = 0; wQ < WQ; wQ++) XQ[wQ] = arguments[wQ];
        const qQ = gW(QQ, this, XQ);
        if (!RQ.inProbe) {
          const [QQ, WQ, wQ, qQ, TQ] = XQ, zQ = UW(this, QQ), sQ = UW(this, WQ), FQ = zQ ? cQ.get(zQ) : void 0, PQ = sQ ? cQ.get(sQ) : void 0;
          PQ && (FQ ? PQ.bytes.set(FQ.bytes.slice(wQ, wQ + TQ), qQ) : PQ.missed++)
        }
        return qQ
      })), JW(QQ, "texStorage2D", (QQ => function() {
        for (var WQ = arguments.length, XQ = new Array(WQ), wQ = 0; wQ < WQ; wQ++) XQ[wQ] = arguments[wQ];
        const qQ = gW(QQ, this, XQ),
          [, , TQ, zQ, sQ] = XQ;
        if (!RQ.inProbe && (TQ === BQ.RGBA32UI || TQ === BQ.RGBA16UI)) {
          const QQ = this.getParameter(BQ.TEXTURE_BINDING_2D),
            WQ = TQ === BQ.RGBA32UI ? 16 : 8;
          QQ && (AQ.set(QQ, WQ), vW(QQ, zQ * sQ * WQ, zQ, sQ, WQ))
        }
        return qQ
      })), JW(QQ, "texSubImage2D", (QQ => function() {
        for (var WQ = arguments.length, XQ = new Array(WQ), wQ = 0; wQ < WQ; wQ++) XQ[wQ] = arguments[wQ];
        const qQ = gW(QQ, this, XQ);
        return !RQ.inProbe && XQ.length >= 9 && XQ[0] === BQ.TEXTURE_2D && 0 === XQ[1] && function(QQ, WQ) {
          var XQ;
          const wQ = QQ.getParameter(BQ.TEXTURE_BINDING_2D),
            qQ = wQ ? cQ.get(wQ) : void 0;
          if (!qQ) return;
          const [, , TQ, zQ, sQ, FQ] = WQ;
          let PQ = GW(WQ[8], null !== (XQ = WQ[9]) && void 0 !== XQ ? XQ : 0);
          if (null === PQ && "number" === typeof WQ[8]) {
            const XQ = UW(QQ, BQ.PIXEL_UNPACK_BUFFER),
              wQ = XQ ? cQ.get(XQ) : void 0;
            PQ = wQ ? wQ.bytes.subarray(WQ[8]) : null
          }
          if (null === PQ) return void qQ.missed++;
          const gQ = QQ.getParameter(BQ.UNPACK_ROW_LENGTH) || sQ,
            JQ = QQ.getParameter(BQ.UNPACK_SKIP_ROWS),
            rQ = QQ.getParameter(BQ.UNPACK_SKIP_PIXELS),
            IQ = qQ.texelBytes;
          for (let jQ = 0; jQ < FQ; jQ++) {
            const QQ = ((JQ + jQ) * gQ + rQ) * IQ,
              WQ = ((zQ + jQ) * qQ.width + TQ) * IQ;
            qQ.bytes.set(PQ.subarray(QQ, QQ + sQ * IQ), WQ)
          }
          HW("texture", qQ, (zQ * qQ.width + TQ) * IQ, sQ * FQ * IQ)
        }(this, XQ), qQ
      })), JW(QQ, "copyTexSubImage2D", (QQ => function() {
        for (var WQ = arguments.length, XQ = new Array(WQ), wQ = 0; wQ < WQ; wQ++) XQ[wQ] = arguments[wQ];
        const qQ = XQ[0] === BQ.TEXTURE_2D ? this.getParameter(BQ.TEXTURE_BINDING_2D) : null,
          TQ = qQ ? cQ.get(qQ) : void 0;
        return TQ && TQ.missed++, gW(QQ, this, XQ)
      })));
      for (const XQ of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) JW(QQ, XQ, (QQ => function() {
        for (var WQ = arguments.length, wQ = new Array(WQ), qQ = 0; qQ < WQ; qQ++) wQ[qQ] = arguments[qQ];
        const TQ = gW(QQ, this, wQ);
        return RQ.inProbe || hW(this, XQ, wQ), TQ
      }));
      JW(QQ, "getExtension", (QQ => function() {
        for (var WQ = arguments.length, XQ = new Array(WQ), wQ = 0; wQ < WQ; wQ++) XQ[wQ] = arguments[wQ];
        const qQ = gW(QQ, this, XQ);
        return qQ && "object" === typeof qQ && function(QQ, WQ, XQ) {
          const wQ = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(WQ in wQ) || XQ.bloxdRenderDebug) return;
          XQ.bloxdRenderDebug = !0;
          for (const qQ of wQ[WQ]) {
            const WQ = XQ[qQ];
            "function" === typeof WQ && (XQ[qQ] = function() {
              for (var wQ = arguments.length, TQ = new Array(wQ), zQ = 0; zQ < wQ; zQ++) TQ[zQ] = arguments[zQ];
              const sQ = gW(WQ, XQ, TQ);
              return RQ.inProbe || hW(QQ, qQ, TQ), sQ
            })
          }
        }(this, XQ[0], qQ), qQ
      }))
    }

    function HW(QQ, WQ, XQ, wQ) {
      DW[QQ] += wQ, pW < 32 && WQ.bytes.length >= 1 << 20 && (pW++, tQ(`upload ${QQ} #${WQ.id} +${XQ} ${wQ} B`))
    }

    function aW(QQ) {
      if (!QQ.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(QQ) || /in uvec3 _p2vs_location0\b/.test(QQ) ? "inst" : "tex"
    }

    function lW(QQ, WQ, XQ) {
      var wQ;
      if (XQ.checked) return;
      XQ.checked = !0;
      const qQ = QQ.getProgramParameter(WQ, BQ.LINK_STATUS),
        TQ = (null !== (wQ = QQ.getProgramInfoLog(WQ)) && void 0 !== wQ ? wQ : "").trim();
      var zQ;
      null === XQ.terrain && qQ || (SQ(`program ${hQ(XQ)} ${null!==(zQ=XQ.terrain)&&void 0!==zQ?zQ:"other"} link ${qQ?"ok":"FAILED"}${TQ?`: ${oQ(TQ,300)}`:""}`), TQ && tQ(`program ${hQ(XQ)} link log:\n${oQ(TQ)}`))
    }

    function hW(QQ, WQ, XQ) {
      var wQ;
      const qQ = QQ.getParameter(BQ.CURRENT_PROGRAM),
        TQ = qQ ? BW.get(qQ) : void 0;
      if (!qQ || !TQ) return;
      const zQ = null !== (wQ = TQ.terrain) && void 0 !== wQ ? wQ : "other",
        {
          Qy: sQ,
          instances: FQ
        } = function(QQ, WQ) {
          switch (QQ) {
            case "drawArrays":
              return {
                Qy: [
                  [WQ[1], WQ[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                Qy: [
                  [WQ[1], WQ[2]]
                ], instances: WQ[3]
              };
            case "drawElements":
              return {
                Qy: [
                  [0, WQ[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                Qy: [
                  [0, WQ[1]]
                ], instances: WQ[4]
              };
            case "multiDrawArraysWEBGL": {
              const QQ = WQ[1],
                XQ = WQ[3],
                wQ = WQ[2],
                qQ = WQ[4],
                TQ = [];
              for (let zQ = 0; zQ < WQ[5]; zQ++) TQ.push([QQ[wQ + zQ], XQ[qQ + zQ]]);
              return {
                Qy: TQ,
                instances: 1
              }
            }
            default:
              return {
                Qy: [], instances: 0
              }
          }
        }(WQ, XQ),
        PQ = "inst" === TQ.terrain ? FQ : sQ.reduce(((QQ, WQ) => {
          let [, XQ] = WQ;
          return QQ + XQ
        }), 0) / 6;
      if (VW[zQ].draws++, VW[zQ].faces += PQ, null === TQ.terrain) return;
      if (RQ.context = QQ, !TQ.firstDraw) {
        TQ.firstDraw = !0, lW(QQ, qQ, TQ), iW || (iW = !0, SQ(function(QQ) {
          var WQ;
          const XQ = QQ.getParameter(BQ.DEPTH_FUNC),
            wQ = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let qQ = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in QQ && QQ.getParameter(BQ.DRAW_FRAMEBUFFER_BINDING)) {
            const WQ = QQ;
            qQ = WQ.getFramebufferAttachmentParameter(BQ.DRAW_FRAMEBUFFER, BQ.DEPTH_ATTACHMENT, BQ.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(WQ.getFramebufferAttachmentParameter(BQ.DRAW_FRAMEBUFFER,BQ.DEPTH_ATTACHMENT,BQ.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(WQ.getFramebufferAttachmentParameter(BQ.DRAW_FRAMEBUFFER,BQ.DEPTH_ATTACHMENT,BQ.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const TQ = QQ.getParameter(BQ.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(WQ=wQ[XQ])&&void 0!==WQ?WQ:`0x${XQ.toString(16)}`} clear ${TQ}${516===XQ||518===XQ?" (reverse-Z)":""}, samples ${String(QQ.getParameter(BQ.SAMPLES))}, ${qQ}`
        }(QQ)));
        const XQ = QQ.getError();
        XQ !== BQ.NO_ERROR && yW.gl < FW && (yW.gl++, SQ(`GL error 0x${XQ.toString(16)} after program ${hQ(TQ)}'s first terrain draw (${WQ})`))
      }
      const gQ = RQ.pendingCheck;
      null !== gQ && (gQ.terrainDraws++, gQ.draws.length < PW && eQ(QQ, qQ, TQ, WQ, sQ, FQ))
    }
    let iW = !1;
    const cW = new WeakSet;
    var AW = XQ(4821),
      RW = XQ(5008);
    const EW = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let CW = !1;
    const uW = new WeakSet,
      LW = new WeakMap,
      kW = new WeakMap,
      fW = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let SW = 0,
      tW = !1,
      oW = null,
      eW = {
        draws: 0,
        faces: 0
      };

    function nW(QQ) {
      const WQ = globalThis[QQ];
      return null === WQ || void 0 === WQ ? void 0 : WQ.prototype
    }

    function xW(QQ) {
      return QQ && "function" === typeof QQ[Symbol.iterator] ? [...QQ].sort().join(" ") : ""
    }

    function YW(QQ, WQ) {
      const XQ = null !== QQ && void 0 !== QQ ? QQ : {},
        wQ = null !== WQ && void 0 !== WQ ? WQ : Object.keys(Object.getPrototypeOf(XQ)).concat(Object.keys(XQ));
      return [...new Set(wQ)].filter((QQ => "number" === typeof XQ[QQ])).map((QQ => `${QQ} ${String(XQ[QQ])}`)).join(", ")
    }

    function NW(QQ, WQ) {
      var XQ;
      const wQ = null !== (XQ = WQ.vertex) && void 0 !== XQ ? XQ : {};
      if (wQ.module && uW.has(wQ.module)) {
        var qQ;
        const XQ = String(null !== (qQ = wQ.entryPoint) && void 0 !== qQ ? qQ : "");
        if (XQ.startsWith("vs_packed") && LW.set(QQ, XQ), !tW) {
          var TQ, zQ, sQ, FQ, PQ;
          tW = !0;
          const QQ = null !== (TQ = WQ.depthStencil) && void 0 !== TQ ? TQ : {},
            wQ = null !== (zQ = WQ.multisample) && void 0 !== zQ ? zQ : {},
            qQ = String(null !== (sQ = QQ.depthCompare) && void 0 !== sQ ? sQ : "");
          SQ(`WebGPU terrain pipeline ${XQ}: depth ${String(null!==(FQ=QQ.format)&&void 0!==FQ?FQ:"none")} ${qQ}${qQ.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(PQ=wQ.count)&&void 0!==PQ?PQ:1)}`)
        }
      }
    }

    function ZW(QQ) {
      JW(QQ, "setPipeline", (QQ => function() {
        for (var WQ = arguments.length, XQ = new Array(WQ), wQ = 0; wQ < WQ; wQ++) XQ[wQ] = arguments[wQ];
        return kW.set(this, XQ[0]), gW(QQ, this, XQ)
      }));
      for (const WQ of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) JW(QQ, WQ, (QQ => function() {
        const XQ = kW.get(this),
          wQ = XQ ? LW.get(XQ) : void 0;
        for (var qQ = arguments.length, TQ = new Array(qQ), zQ = 0; zQ < qQ; zQ++) TQ[zQ] = arguments[zQ];
        return void 0 !== wQ && OW(WQ, wQ, TQ), gW(QQ, this, TQ)
      }))
    }

    function OW(QQ, WQ, XQ) {
      var wQ;
      (eW.draws++, "draw" === QQ || "drawIndexed" === QQ) && (eW.faces += XQ[0] * (null !== (wQ = XQ[1]) && void 0 !== wQ ? wQ : 1) / 6);
      if (null !== oW && oW.length < PW) {
        const wQ = ("draw" === QQ ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === QQ ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((WQ, wQ) => {
          const qQ = QQ.endsWith("Indirect") ? XQ[1] : XQ[wQ];
          return `${WQ} ${String(null!==qQ&&void 0!==qQ?qQ:"instances"===WQ?1:0)}`
        }));
        oW.push(`  ${WQ} ${QQ} ${wQ.join(" ")}`)
      }
    }

    function KW() {
      if (CW || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      CW = !0, JW(nW("GPU"), "requestAdapter", (QQ => function() {
        for (var WQ = arguments.length, XQ = new Array(WQ), wQ = 0; wQ < WQ; wQ++) XQ[wQ] = arguments[wQ];
        return gW(QQ, this, XQ).then((QQ => {
          var WQ;
          QQ ? function(QQ) {
            var WQ;
            const XQ = null !== (WQ = QQ.info) && void 0 !== WQ ? WQ : {};
            SQ(`WebGPU adapter ${["vendor","architecture","device","description"].map((QQ=>{var WQ;return`${QQ} "${String(null!==(WQ=XQ[QQ])&&void 0!==WQ?WQ:"")}"`})).join(" ")}${QQ.isFallbackAdapter?" (fallback)":""}`), SQ(`WebGPU adapter features ${xW(QQ.features)}`), SQ(`WebGPU adapter limits ${YW(QQ.limits,EW)}`), tQ(`WebGPU adapter all limits ${YW(QQ.limits,null)}`)
          }(QQ) : SQ(`WebGPU requestAdapter(${JSON.stringify(null!==(WQ=XQ[0])&&void 0!==WQ?WQ:{})}) gave none`);
          return QQ
        }))
      })), JW(nW("GPUAdapter"), "requestDevice", (QQ => function() {
        for (var WQ = arguments.length, XQ = new Array(WQ), wQ = 0; wQ < WQ; wQ++) XQ[wQ] = arguments[wQ];
        return gW(QQ, this, XQ).then((QQ => (function(QQ) {
          SQ(`WebGPU device features ${xW(QQ.features)}`), SQ(`WebGPU device limits ${YW(QQ.limits,EW)}`), QQ.addEventListener("uncapturederror", (QQ => {
            if (fW.uncaptured < FW) {
              var WQ, XQ, wQ;
              fW.uncaptured++;
              const qQ = QQ.error;
              SQ(`WebGPU uncaptured ${null!==(WQ=null===qQ||void 0===qQ||null===(XQ=qQ.constructor)||void 0===XQ?void 0:XQ.name)&&void 0!==WQ?WQ:"error"}: ${oQ(String(null!==(wQ=null===qQ||void 0===qQ?void 0:qQ.message)&&void 0!==wQ?wQ:""),600)}`)
            }
          }));
          const WQ = QQ.lost;
          null === WQ || void 0 === WQ || WQ.then((QQ => {
            var WQ;
            SQ(`WebGPU device lost (${String(QQ.reason)}): ${oQ(String(null!==(WQ=QQ.message)&&void 0!==WQ?WQ:""),600)}`)
          }))
        }(QQ), QQ)), (QQ => {
          throw SQ(`WebGPU requestDevice failed: ${String(QQ)}`), QQ
        }))
      }));
      const QQ = nW("GPUDevice");
      JW(QQ, "createShaderModule", (QQ => function() {
        for (var WQ, XQ, wQ = arguments.length, qQ = new Array(wQ), TQ = 0; TQ < wQ; TQ++) qQ[TQ] = arguments[TQ];
        const zQ = gW(QQ, this, qQ);
        return function(QQ, WQ) {
          const XQ = WQ.includes("decodeQuad");
          XQ && uW.add(QQ);
          const wQ = QQ.getCompilationInfo;
          null === wQ || void 0 === wQ || wQ.call(QQ).then((QQ => {
            if (0 === QQ.messages.length && !XQ) return;
            const WQ = {};
            for (const XQ of QQ.messages) {
              var wQ;
              WQ[String(XQ.type)] = (null !== (wQ = WQ[String(XQ.type)]) && void 0 !== wQ ? wQ : 0) + 1
            }
            const qQ = QQ.messages.map((QQ => `${String(QQ.type)} ${String(QQ.lineNum)}:${String(QQ.linePos)} ${String(QQ.message)}`)).join("\n");
            fW.compile < FW && (fW.compile++, SQ(`WebGPU ${XQ?"terrain ":""}shader module compiled: ${JSON.stringify(WQ)}${qQ?` first: ${oQ(qQ.split("\n")[0],300)}`:""}`)), qQ && tQ(`WebGPU shader module messages:\n${oQ(qQ)}`)
          }))
        }(zQ, String(null !== (WQ = (null !== (XQ = qQ[0]) && void 0 !== XQ ? XQ : {}).code) && void 0 !== WQ ? WQ : "")), zQ
      })), JW(QQ, "createRenderPipeline", (QQ => function() {
        for (var WQ, XQ = arguments.length, wQ = new Array(XQ), qQ = 0; qQ < XQ; qQ++) wQ[qQ] = arguments[qQ];
        const TQ = gW(QQ, this, wQ);
        return NW(TQ, null !== (WQ = wQ[0]) && void 0 !== WQ ? WQ : {}), TQ
      })), JW(QQ, "createRenderPipelineAsync", (QQ => function() {
        for (var WQ = arguments.length, XQ = new Array(WQ), wQ = 0; wQ < WQ; wQ++) XQ[wQ] = arguments[wQ];
        return gW(QQ, this, XQ).then((QQ => {
          var WQ;
          return NW(QQ, null !== (WQ = XQ[0]) && void 0 !== WQ ? WQ : {}), QQ
        }), (QQ => {
          var WQ;
          throw function(QQ, WQ) {
            var XQ, wQ, qQ;
            if (fW.rejected >= FW) return;
            fW.rejected++;
            const {
              reason: TQ,
              message: zQ
            } = null !== WQ && void 0 !== WQ ? WQ : {}, sQ = String(null !== (XQ = (null !== (wQ = QQ.vertex) && void 0 !== wQ ? wQ : {}).entryPoint) && void 0 !== XQ ? XQ : "");
            SQ(`WebGPU pipeline "${String(null!==(qQ=QQ.label)&&void 0!==qQ?qQ:"")}" ${sQ} rejected (${String(null!==TQ&&void 0!==TQ?TQ:"no reason")}): ${oQ(String(null!==zQ&&void 0!==zQ?zQ:WQ),600)}`)
          }(null !== (WQ = XQ[0]) && void 0 !== WQ ? WQ : {}, QQ), QQ
        }))
      })), JW(nW("GPUCanvasContext"), "configure", (QQ => function() {
        for (var WQ, XQ = arguments.length, wQ = new Array(XQ), qQ = 0; qQ < XQ; qQ++) wQ[qQ] = arguments[qQ];
        const TQ = null !== (WQ = wQ[0]) && void 0 !== WQ ? WQ : {};
        var zQ, sQ;
        SW++ < 3 && SQ(`WebGPU canvas ${String(TQ.format)} ${String(null!==(zQ=TQ.colorSpace)&&void 0!==zQ?zQ:"srgb")} alpha ${String(null!==(sQ=TQ.alphaMode)&&void 0!==sQ?sQ:"opaque")}`);
        return gW(QQ, this, wQ)
      })), ZW(nW("GPURenderPassEncoder")), ZW(nW("GPURenderBundleEncoder"))
    }
    const mW = 1e4,
      MW = 6e4,
      QX = 5e3,
      WX = 3e3,
      XX = 100;
    let wX = null,
      qX = !1,
      TX = {
        ...AW.d
      },
      zX = !1,
      sX = null,
      FX = 0,
      PX = () => {};
    const gX = new Promise((QQ => {
      PX = QQ
    }));

    function JX() {
      var QQ;
      qX || (qX = !0, TX = Object.assign(window.bloxdRenderDebug ??= {
        ...AW.d
      }, {
        faceCull: "0" === (0, TQ.k)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (QQ = (0, TQ.k)("adrenoProbe")) && void 0 !== QQ ? QQ : ""
      }), SQ("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), rW || "undefined" === typeof window || (rW = !0, "undefined" !== typeof WebGL2RenderingContext && dW(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && dW(WebGLRenderingContext.prototype, !1)), KW(), (0, TQ.e)("renderProbe", (() => {
        VX("console")
      })), BX(), setInterval(pX, QX))
    }

    function rX(QQ) {
      var WQ, XQ;
      JX(), wX = null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.backend) && void 0 !== WQ ? WQ : null;
      const wQ = `, renderer param ${null!==(XQ=(0,TQ.k)("renderer"))&&void 0!==XQ?XQ:"none"}, faceCull ${"0"===TX.faceCull?"off (whole parts)":"on"}, adrenoProbe ${TX.adrenoProbe||"none"}`;
      SQ(`${(0,RW.d)(QQ)}${null===QQ?"":wQ}`)
    }

    function IX() {
      const QQ = performance.now(),
        WQ = jX(gX, mW, MW).then((WQ => VX(`${Math.round((performance.now()-QQ)/1e3)} s after playable${WQ?"":", no terrain drawn yet"}`)));
      (0, qQ.c)(SQ, (async () => {
        await WQ, await sX
      }))
    }
    async function jX(QQ, WQ, XQ) {
      const qQ = (0, wQ.e)(XQ).then((() => !1));
      return await (0, wQ.e)(WQ), Promise.race([QQ.then((() => !0)), qQ])
    }

    function BX() {
      requestAnimationFrame((() => {
        FX++, BX()
      }))
    }

    function yX() {
      var QQ, WQ, XQ;
      if (zX) return;
      (zX = !0, SQ(`renderer caps ${null!==(QQ=TX.caps)&&void 0!==QQ?QQ:"(not noted)"}; terrain fetch ${null!==(WQ=TX.fetch)&&void 0!==WQ?WQ:"(not noted)"}`), TX.adrenoProbe) && SQ(`adrenoProbe ${TX.adrenoProbe} asked; in force (storage fetch only): ${null!==(XQ=TX.probe)&&void 0!==XQ?XQ:"(not noted)"}`);
      const wQ = RQ.context;
      if (wQ) {
        for (const QQ of function(QQ) {
            var WQ;
            const XQ = [],
              wQ = QQ.getExtension("WEBGL_debug_renderer_info"),
              qQ = wQ ? QQ.getParameter(wQ.UNMASKED_VENDOR_WEBGL) : "(masked)",
              TQ = wQ ? QQ.getParameter(wQ.UNMASKED_RENDERER_WEBGL) : "(masked)";
            XQ.push(`GL ${String(QQ.getParameter(QQ.VERSION))} | ${String(QQ.getParameter(QQ.SHADING_LANGUAGE_VERSION))} | ${String(QQ.getParameter(QQ.VENDOR))} / ${String(QQ.getParameter(QQ.RENDERER))}`), XQ.push(`GL unmasked ${qQ} / ${TQ}`);
            const zQ = [
              ["MAX_TEXTURE_SIZE", QQ.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", QQ.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", QQ.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", QQ.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", QQ.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", QQ.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", QQ.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in QQ && zQ.push(["MAX_UNIFORM_BLOCK_SIZE", QQ.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", QQ.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", QQ.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", QQ.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), XQ.push(`GL limits ${zQ.map((WQ=>{let[XQ,wQ]=WQ;return`${XQ} ${String(QQ.getParameter(wQ))}`})).join(", ")}`);
            const sQ = (WQ, XQ) => {
              const wQ = QQ.getShaderPrecisionFormat(WQ, QQ.HIGH_FLOAT),
                qQ = QQ.getShaderPrecisionFormat(WQ, QQ.HIGH_INT);
              return `${XQ} highp float ${wQ?`${wQ.rangeMin}/${wQ.rangeMax}/${wQ.precision}`:"?"} int ${qQ?`${qQ.rangeMin}/${qQ.rangeMax}/${qQ.precision}`:"?"}`
            };
            XQ.push(`GL precision ${sQ(QQ.VERTEX_SHADER,"VS")}, ${sQ(QQ.FRAGMENT_SHADER,"FS")}`);
            const FQ = QQ.getContextAttributes();
            return XQ.push(`GL context ${JSON.stringify(FQ)} drawingBuffer ${QQ.drawingBufferWidth}x${QQ.drawingBufferHeight}${"drawingBufferFormat"in QQ?` format 0x${Number(QQ.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in QQ?` ${String(QQ.drawingBufferColorSpace)}`:""}`), XQ.push(`GL extensions ${(null!==(WQ=QQ.getSupportedExtensions())&&void 0!==WQ?WQ:[]).join(" ")}`), XQ
          }(wQ)) SQ(QQ);
        ! function() {
          if (!RQ.context) return;
          let QQ = 0,
            WQ = 0;
          for (const [XQ, wQ] of iQ) !wQ.gl.isContextLost() && wQ.gl.isProgram(XQ) && (WQ++, lW(wQ.gl, XQ, wQ), null !== wQ.terrain && QQ++);
          SQ(`programs: ${WQ} live of ${iQ.length} linked, ${QQ} packed terrain; CPU page copies ${Math.round(RQ.shadowBytes/1048576)} MiB (${RQ.uncopied} over budget)`)
        }()
      }
    }

    function VX(QQ) {
      return sX ??= async function(QQ) {
        yX(), "webgpu" === wX ? (DX(), "1" === TX.slotCheck && SQ("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), TX.slotCheck = "1", await
          function(QQ) {
            if (null !== oW) return Promise.resolve();
            const WQ = [];
            return oW = WQ, new Promise((XQ => {
              setTimeout((() => {
                oW = null, SQ(`WebGPU draw ranges (${QQ}): ${WQ.length} terrain draws recorded in a second (first ${PW}; bundles replay without new ones)`);
                for (const QQ of WQ) SQ(QQ);
                XQ()
              }), 1e3)
            }))
          }(QQ), await async function() {
            if (await (0, AW.h)(TX, "slotCheck", ["1"], WX, XX), "1" === TX.slotCheck) return void SQ(`slot check: no answer in ${WX} ms (only the storage fetch has one; a later answer logs on its own)`);
            DX()
          }()) : await zW(QQ);
        SQ(`check (${QQ}) done: bloxdDebug.save() downloads it all`)
      }(QQ).catch((WQ => {
        SQ(`check (${QQ}) failed: ${String(WQ)}`)
      })).finally((() => {
        sX = null
      })), sX
    }

    function DX() {
      void 0 !== TX.slotCheck && "1" !== TX.slotCheck && (SQ(TX.slotCheck), delete TX.slotCheck)
    }

    function pX() {
      const QQ = QQ => FX ? (QQ / FX).toFixed(1) : "0",
        WQ = function() {
          const QQ = eW;
          return eW = {
            draws: 0,
            faces: 0
          }, QQ
        }(),
        XQ = function() {
          const QQ = VW;
          return VW = {
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
        wQ = function() {
          const QQ = DW;
          return DW = {
            buffer: 0,
            texture: 0
          }, QQ
        }();
      DX(), ("webgpu" === wX ? WQ.draws : XQ.inst.draws + XQ.tex.draws) > 0 && PX();
      const qQ = "webgpu" === wX ? [`terrain ${QQ(WQ.draws)} draws ${QQ(WQ.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((QQ => XQ[QQ].draws > 0)).map((WQ => `${WQ} ${QQ(XQ[WQ].draws)} draws ${QQ(XQ[WQ].faces)} faces a frame`));
      SQ(`${FX} frames: ${qQ.join(", ")||"no draws"}; uploaded ${Math.round(wQ.buffer/1024)} KiB to buffers, ${Math.round(wQ.texture/1024)} KiB to data textures`), FX = 0
    }
  },
  5008: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      if (null === QQ) return "backend: none picked (no renderer build)";
      const WQ = QQ.adapter ? `${QQ.adapter.vendor}/${QQ.adapter.architecture}` : "none";
      return `backend ${QQ.backend}: reason ${QQ.reason}, source ${QQ.source}, adapter ${WQ}`
    }
    XQ.d(WQ, {
      d: () => wQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);