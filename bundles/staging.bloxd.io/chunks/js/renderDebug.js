export const id = 47;
export const ids = [47];
export const modules = {
  4186: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => ST
    });
    var iT = IT(12),
      zT = IT(16),
      kT = IT(1253),
      WT = IT(2541);
    const XT = 3e4,
      BT = 1e3;

    function FT() {
      return "visible" === document.visibilityState && "inGame" === iT.c.get("gameState") && (0, kT.q)()
    }

    function ST(TT, oT) {
      (0, WT.s)() || function(TT, oT, IT) {
        let iT = 0;
        const zT = setInterval((() => {
          oT() && (iT += BT, iT >= TT && (clearInterval(zT), IT()))
        }), BT)
      }(XT, FT, (() => {
        oT().then((() => {
          TT(`saved for the player after ${XT/1e3} s of play`), (0, WT.B)(), zT.h.XM("chat", {
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
  4183: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      installRenderDebug: () => xI,
      renderDebugPlayable: () => KI,
      startRenderDebug: () => cI,
      waitForDraw: () => MI
    });
    var iT = IT(4161),
      zT = IT(4186),
      kT = IT(2541);
    const WT = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function XT(TT) {
      return 7 & TT
    }

    function BT(TT) {
      return TT >>> 11 & 1
    }

    function FT(TT) {
      return [1 + (TT >>> 18 & 63), 1 + (TT >>> 24 & 63)]
    }

    function ST(TT, oT) {
      const [IT, , iT] = TT, zT = XT(iT), kT = function(TT, oT, IT) {
        return oT + (1 === (22 >>> TT & 1) ? 4 - IT : IT) & 3
      }(zT, BT(iT), oT), WT = zT >>> 1, [ST, DT] = FT(IT), LT = 1 === kT || 2 === kT ? ST : 0, xT = kT >= 2 ? DT : 0, cT = [63 & IT, IT >>> 6 & 63, IT >>> 12 & 63];
      return cT[2 === WT ? 0 : 2] += LT, cT[1 === WT ? 0 : 1] += xT, cT
    }

    function DT(TT) {
      const oT = Math.max(...FT(TT[0]));
      return 1 === oT ? "1" : oT <= 4 ? "2-4" : oT <= 16 ? "5-16" : "17-64"
    }
    const LT = 16;

    function xT(TT) {
      let oT = 2166136261;
      for (let IT = 0; IT < TT.length; IT++) oT = Math.imul(oT ^ TT[IT], 16777619);
      return oT >>> 0
    }

    function cT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const iT = Math.max(0, oT - IT),
        zT = Math.min(TT.length, oT + IT),
        kT = [];
      for (let WT = iT; WT < zT; WT++) {
        const IT = TT[WT].toString(16).padStart(2, "0");
        kT.push(WT === oT ? `[${IT}]` : IT)
      }
      return kT.join(" ")
    }
    const KT = {
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
      MT = "_vs2fs_location0",
      rT = 0,
      AT = 4,
      gT = 6,
      hT = [0, 1, 2, 0, 2, 3],
      wT = 2048,
      mT = 4,
      eT = 256,
      RT = 64,
      uT = 268435456,
      vT = 65536,
      ET = /^#version [^\n]*\/\/ program (\S+)$/m;

    function fT(TT) {
      return null === TT.name ? `#${TT.id}` : `#${TT.id} ${TT.name}`
    }
    const CT = [],
      jT = new WeakMap,
      JT = new WeakMap,
      UT = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let aT = 1;
    const YT = new WeakMap;

    function QT(TT) {
      if (null === TT) return 0;
      let oT = YT.get(TT);
      return void 0 === oT && (oT = aT++, YT.set(TT, oT)), oT
    }
    class OT {
      constructor(TT, oT) {
        this.print = TT, this.now = oT, this.shown = 0, this.kS = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.qx = [], this.dropped = 0
      }
      line(TT) {
        const oT = this.now();
        if (oT - this.second >= 1e3 && (this.second = oT, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.kS++, void this.store(TT);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${TT} (the last line here: the rest go to bloxdDebug.save())` : TT)
      }
      keep(TT) {
        this.sections++, this.store(TT)
      }
      store(TT) {
        this.qx.push(`${new Date(Date.now()).toISOString()} ${TT}`), this.qx.length > 2e4 && (this.qx.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.kS} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.qx].join("\n")
      }
    }
    let HT = null;

    function nT() {
      if (null === HT) {
        const TT = new OT((TT => {
          (0, kT.l)("render", TT)
        }), (() => performance.now()));
        (0, kT.j)("render", (() => TT.dump())), HT = TT
      }
      return HT
    }

    function qT(TT) {
      nT().line(TT)
    }

    function ZT(TT) {
      nT().keep(TT)
    }

    function lT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return TT.length <= oT ? TT : `${TT.slice(0,oT)}... (${TT.length-oT} more characters)`
    }

    function sT(TT, oT, IT, iT, zT, kT) {
      const WT = UT.pendingCheck;
      if (null === WT) return;
      const XT = "undefined" !== typeof WebGL2RenderingContext && TT instanceof WebGL2RenderingContext,
        BT = {
          gl: TT,
          program: IT,
          call: iT,
          ec: zT,
          instances: kT,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (WT.draws.push(BT), XT) try {
        const iT = function(TT) {
          const oT = [],
            IT = new Map,
            iT = Math.min(16, TT.getParameter(KT.MAX_VERTEX_ATTRIBS));
          for (let zT = 0; zT < iT; zT++) {
            if (!TT.getVertexAttrib(zT, KT.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const iT = TT.getVertexAttrib(zT, KT.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              kT = TT.getVertexAttribOffset(zT, KT.VERTEX_ATTRIB_ARRAY_POINTER),
              WT = TT.getVertexAttrib(zT, KT.VERTEX_ATTRIB_ARRAY_STRIDE),
              XT = TT.getVertexAttrib(zT, KT.VERTEX_ATTRIB_ARRAY_SIZE),
              BT = TT.getVertexAttrib(zT, KT.VERTEX_ATTRIB_ARRAY_TYPE),
              FT = "VERTEX_ATTRIB_ARRAY_INTEGER" in TT && TT.getVertexAttrib(zT, KT.VERTEX_ATTRIB_ARRAY_INTEGER),
              ST = "VERTEX_ATTRIB_ARRAY_DIVISOR" in TT ? TT.getVertexAttrib(zT, KT.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            IT.set(zT, {
              buffer: iT,
              offset: kT,
              stride: WT
            }), oT.push(`@${zT} buf#${QT(iT)} +${kT} stride ${WT} ${XT}x0x${BT.toString(16)}${FT?" int":""} div ${ST}`)
          }
          return {
            lines: oT,
            byLocation: IT
          }
        }(TT);
        if (BT.attributes = iT.lines, "inst" === IT.terrain) {
          const {
            group: zT,
            chunk: XT
          } = function(TT, oT, IT) {
            const iT = oT.get(gT),
              zT = TT.getVertexAttrib(gT, KT.CURRENT_VERTEX_ATTRIB),
              kT = iT ? `+${iT.offset}` : zT ? Array.from(zT).slice(0, 3).join(",") : "?";
            let WT = IT.groups.get(kT);
            return void 0 === WT && (WT = IT.groups.size, IT.groups.set(kT, WT)), {
              group: WT,
              chunk: kT
            }
          }(TT, iT.byLocation, WT);
          BT.group = zT, BT.chunk = XT;
          for (const TT of [rT, AT]) {
            var FT;
            const oT = null === (FT = iT.byLocation.get(TT)) || void 0 === FT ? void 0 : FT.buffer;
            oT && BT.pages.push({
              kind: "buf",
              buffer: oT
            })
          }! function(TT, oT, IT, iT, zT, kT, WT) {
            const XT = iT.get(rT),
              BT = WT.parts.get(kT);
            if (void 0 === BT && WT.parts.size >= mT) return;
            const FT = Math.min(zT, RT, eT - (null !== BT && void 0 !== BT ? BT : 0));
            if (null === XT || void 0 === XT || !XT.buffer || FT <= 0) return;
            const ST = tT(TT, oT, IT);
            if (!ST) return;
            const DT = XT.stride || 12,
              LT = NT(TT, XT.buffer, XT.offset, (FT - 1) * DT + 12),
              xT = new DataView(LT.buffer),
              cT = function(TT, oT) {
                const IT = function(TT) {
                    const oT = VT.get(TT);
                    if (void 0 !== oT && (null === oT || TT.isProgram(oT))) return oT;
                    UT.inProbe = !0;
                    let IT = null;
                    try {
                      IT = GT(TT, PT, dT, "fed", "the record feed")
                    } finally {
                      UT.inProbe = !1
                    }
                    return VT.set(TT, IT), IT
                  }(TT),
                  iT = IT ? yT(TT, IT, oT, (() => {
                    TT.drawArraysInstanced(KT.POINTS, 0, 1, oT)
                  }), "decode probe input (the record feed)") : null;
                return iT ? new Uint32Array(iT.buffer) : null
              }(TT, FT);
            cT || WT.fed.failed++;
            const MT = yT(TT, ST, 4 * FT, (() => {
              TT.drawArraysInstanced(KT.POINTS, 0, 4, FT)
            }));
            if (!MT) return;
            WT.parts.set(kT, (null !== BT && void 0 !== BT ? BT : 0) + FT);
            for (let KT = 0; KT < FT; KT++) {
              const TT = KT * DT,
                oT = [xT.getUint32(TT, !0), xT.getUint32(TT + 4, !0), xT.getUint32(TT + 8, !0)],
                IT = cT ? [cT[3 * KT], cT[3 * KT + 1], cT[3 * KT + 2]] : oT;
              cT && (WT.fed.records++, IT.some(((TT, IT) => TT !== oT[IT])) && (WT.fed.differing++, WT.fed.first.length < 8 && WT.fed.first.push(`part ${kT} instance ${KT}: fed ${IT.map(zo).join(" ")} buffer ${oT.map(zo).join(" ")}`)));
              for (let iT = 0; iT < 4; iT++) {
                const TT = 3 * (4 * KT + iT);
                WT.vertices.push({
                  record: IT,
                  slot: iT,
                  group: kT,
                  gpu: [MT[TT], MT[TT + 1], MT[TT + 2]]
                })
              }
            }
          }(TT, oT, IT, iT.byLocation, kT, zT, WT)
        } else {
          const iT = To(TT, oT, 16),
            kT = To(TT, oT, 8);
          for (const TT of [iT, kT]) TT && BT.pages.push({
            kind: "tex",
            texture: TT
          });
          iT && function(TT, oT, IT, iT, zT, kT) {
            if (kT.parts.size >= mT) return;
            const WT = tT(TT, oT, IT);
            if (!WT) return;
            let XT = 6 * eT;
            const BT = [];
            for (const [xT, cT] of zT) {
              const TT = Math.min(cT, XT, Math.max(6, 6 * Math.floor(eT / zT.length)));
              TT > 0 && (BT.push([xT, TT]), XT -= TT)
            }
            const FT = BT.reduce(((TT, oT) => {
                let [, IT] = oT;
                return TT + IT
              }), 0),
              ST = yT(TT, WT, FT, (() => {
                for (const [oT, IT] of BT) TT.drawArrays(KT.POINTS, oT, IT)
              }));
            if (!ST) return;
            let DT = 0;
            for (const [xT, cT] of BT) {
              const oT = Math.floor(xT / 6),
                IT = Math.floor((xT + cT - 1) / 6) - oT + 1,
                zT = oo(TT, iT, wT, oT, IT);
              for (let TT = xT; TT < xT + cT; TT++, DT++) {
                var LT;
                const IT = 4 * (Math.floor(TT / 6) - oT),
                  iT = [zT[IT], zT[IT + 1], zT[IT + 2]];
                kT.parts.set(zT[IT + 3], (null !== (LT = kT.parts.get(zT[IT + 3])) && void 0 !== LT ? LT : 0) + (TT % 6 === 0 ? 1 : 0)), kT.vertices.push({
                  record: iT,
                  slot: hT[TT % 6],
                  group: zT[IT + 3],
                  gpu: [ST[3 * DT], ST[3 * DT + 1], ST[3 * DT + 2]]
                })
              }
            }
          }(TT, oT, IT, iT, zT, WT)
        }
      } catch (ST) {
        qT(`decode probe failed on program ${fT(IT)}: ${String(ST)}`)
      }
    }

    function tT(TT, oT, IT) {
      if (void 0 !== IT.probe) return IT.probe && pT(TT, oT, IT.probe), IT.probe;
      IT.probe = null, UT.inProbe = !0;
      try {
        IT.probe = function(TT, oT) {
          return GT(TT, oT.vertex, oT.fragment, MT, `program ${fT(oT)}'s twin`)
        }(TT, IT)
      } finally {
        UT.inProbe = !1
      }
      return IT.probe && pT(TT, oT, IT.probe), IT.probe
    }

    function GT(TT, oT, IT, iT, zT) {
      const kT = [TT.createShader(KT.VERTEX_SHADER), TT.createShader(KT.FRAGMENT_SHADER)],
        WT = TT.createProgram();
      if (!WT || !kT[0] || !kT[1]) return null;
      TT.shaderSource(kT[0], oT), TT.shaderSource(kT[1], IT);
      for (const BT of kT) TT.compileShader(BT), TT.attachShader(WT, BT);
      TT.transformFeedbackVaryings(WT, [iT], KT.INTERLEAVED_ATTRIBS), TT.linkProgram(WT);
      for (const BT of kT) TT.deleteShader(BT);
      var XT;
      return TT.getProgramParameter(WT, KT.LINK_STATUS) ? WT : (qT(`decode probe: ${zT} failed to link: ${lT(null!==(XT=TT.getProgramInfoLog(WT))&&void 0!==XT?XT:"",300)}`), TT.deleteProgram(WT), null)
    }

    function pT(TT, oT, IT) {
      const iT = TT.getProgramParameter(oT, KT.ACTIVE_UNIFORM_BLOCKS);
      for (let XT = 0; XT < iT; XT++) {
        const iT = TT.getActiveUniformBlockName(oT, XT),
          zT = null === iT ? KT.INVALID_INDEX : TT.getUniformBlockIndex(IT, iT);
        zT !== KT.INVALID_INDEX && TT.uniformBlockBinding(IT, zT, TT.getActiveUniformBlockParameter(oT, XT, KT.UNIFORM_BLOCK_BINDING))
      }
      const zT = TT.getParameter(KT.CURRENT_PROGRAM);
      TT.useProgram(IT);
      const kT = TT.getProgramParameter(oT, KT.ACTIVE_UNIFORMS),
        WT = TT.getActiveUniforms(oT, [...Array(kT).keys()], KT.UNIFORM_BLOCK_INDEX);
      for (let XT = 0; XT < kT; XT++) {
        const iT = TT.getActiveUniform(oT, XT);
        if (!iT || -1 !== WT[XT]) continue;
        const zT = iT.name.replace(/\[0\]$/, "");
        for (let kT = 0; kT < iT.size; kT++) {
          const WT = iT.size > 1 ? `${zT}[${kT}]` : iT.name,
            XT = TT.getUniformLocation(oT, WT),
            BT = TT.getUniformLocation(IT, WT);
          XT && BT && bT(TT, BT, iT.type, TT.getUniform(oT, XT))
        }
      }
      TT.useProgram(zT)
    }

    function bT(TT, oT, IT, iT) {
      const zT = ArrayBuffer.isView(iT) ? Array.from(iT) : [Number(iT)];
      switch (IT) {
        case KT.FLOAT:
          return void TT.uniform1f(oT, zT[0]);
        case KT.FLOAT_VEC2:
          return void TT.uniform2fv(oT, zT);
        case KT.FLOAT_VEC3:
          return void TT.uniform3fv(oT, zT);
        case KT.FLOAT_VEC4:
          return void TT.uniform4fv(oT, zT);
        case KT.FLOAT_MAT3:
          return void TT.uniformMatrix3fv(oT, !1, zT);
        case KT.FLOAT_MAT4:
          return void TT.uniformMatrix4fv(oT, !1, zT);
        case KT.UNSIGNED_INT:
          return void TT.uniform1ui(oT, zT[0]);
        case KT.UNSIGNED_INT_VEC2:
          return void TT.uniform2uiv(oT, zT);
        case KT.UNSIGNED_INT_VEC3:
          return void TT.uniform3uiv(oT, zT);
        case KT.UNSIGNED_INT_VEC4:
          return void TT.uniform4uiv(oT, zT);
        case KT.INT_VEC2:
          return void TT.uniform2iv(oT, zT);
        case KT.INT_VEC3:
          return void TT.uniform3iv(oT, zT);
        case KT.INT_VEC4:
          return void TT.uniform4iv(oT, zT);
        default:
          TT.uniform1i(oT, zT[0])
      }
    }

    function yT(TT, oT, IT, iT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const kT = TT.getParameter(KT.CURRENT_PROGRAM),
        WT = TT.getParameter(KT.TRANSFORM_FEEDBACK_BINDING),
        XT = TT.getParameter(KT.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        BT = TT.getParameter(KT.COPY_READ_BUFFER_BINDING),
        FT = TT.isEnabled(KT.RASTERIZER_DISCARD),
        ST = TT.createTransformFeedback(),
        DT = TT.createBuffer();
      UT.inProbe = !0;
      try {
        const kT = TT.getError();
        kT !== KT.NO_ERROR && qT(`GL error 0x${kT.toString(16)} pending before the decode probe (the renderer's)`), TT.useProgram(oT), TT.bindTransformFeedback(KT.TRANSFORM_FEEDBACK, ST), TT.bindBuffer(KT.TRANSFORM_FEEDBACK_BUFFER, DT), TT.bufferData(KT.TRANSFORM_FEEDBACK_BUFFER, 12 * IT, KT.STREAM_READ), TT.bindBufferBase(KT.TRANSFORM_FEEDBACK_BUFFER, 0, DT), TT.enable(KT.RASTERIZER_DISCARD), TT.beginTransformFeedback(KT.POINTS), iT(), TT.endTransformFeedback(), TT.bindBufferBase(KT.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const WT = TT.getError();
        if (WT !== KT.NO_ERROR) return qT(`${zT}: GL error 0x${WT.toString(16)} on the feedback draw`), null;
        const XT = new Float32Array(3 * IT);
        return TT.bindBuffer(KT.COPY_READ_BUFFER, DT), TT.getBufferSubData(KT.COPY_READ_BUFFER, 0, XT), XT
      } finally {
        FT || TT.disable(KT.RASTERIZER_DISCARD), TT.bindTransformFeedback(KT.TRANSFORM_FEEDBACK, WT), TT.bindBuffer(KT.TRANSFORM_FEEDBACK_BUFFER, XT), TT.bindBuffer(KT.COPY_READ_BUFFER, BT), TT.deleteTransformFeedback(ST), TT.deleteBuffer(DT), TT.useProgram(kT), UT.inProbe = !1
      }
    }

    function NT(TT, oT, IT, iT) {
      const zT = TT.getParameter(KT.COPY_READ_BUFFER_BINDING),
        kT = new Uint8Array(iT);
      return TT.bindBuffer(KT.COPY_READ_BUFFER, oT), TT.getBufferSubData(KT.COPY_READ_BUFFER, IT, kT), TT.bindBuffer(KT.COPY_READ_BUFFER, zT), kT
    }
    const PT = `#version 300 es\nlayout(location = ${rT}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      dT = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      VT = new WeakMap;

    function To(TT, oT, IT) {
      const iT = TT.getProgramParameter(oT, KT.ACTIVE_UNIFORMS),
        zT = TT.getParameter(KT.ACTIVE_TEXTURE);
      try {
        for (let zT = 0; zT < iT; zT++) {
          const iT = TT.getActiveUniform(oT, zT);
          if ((null === iT || void 0 === iT ? void 0 : iT.type) !== KT.UNSIGNED_INT_SAMPLER_2D) continue;
          const kT = TT.getUniformLocation(oT, iT.name),
            WT = kT ? TT.getUniform(oT, kT) : -1;
          if (WT < 0) continue;
          TT.activeTexture(KT.TEXTURE0 + WT);
          const XT = TT.getParameter(KT.TEXTURE_BINDING_2D);
          if (XT && JT.get(XT) === IT) return XT
        }
        return null
      } finally {
        TT.activeTexture(zT)
      }
    }

    function oo(TT, oT, IT, iT, zT) {
      const kT = new Uint32Array(4 * zT),
        WT = TT.getParameter(KT.READ_FRAMEBUFFER_BINDING),
        XT = TT.createFramebuffer();
      TT.bindFramebuffer(KT.READ_FRAMEBUFFER, XT), TT.framebufferTexture2D(KT.READ_FRAMEBUFFER, KT.COLOR_ATTACHMENT0, KT.TEXTURE_2D, oT, 0);
      try {
        let oT = 0;
        for (; oT < zT;) {
          const WT = iT + oT,
            XT = WT % IT,
            BT = Math.min(zT - oT, IT - XT);
          TT.readPixels(XT, Math.floor(WT / IT), BT, 1, KT.RGBA_INTEGER, KT.UNSIGNED_INT, kT.subarray(4 * oT, 4 * (oT + BT))), oT += BT
        }
      } finally {
        TT.bindFramebuffer(KT.READ_FRAMEBUFFER, WT), TT.deleteFramebuffer(XT)
      }
      return kT
    }

    function Io(TT, oT, IT) {
      let iT = 0,
        zT = 0;
      for (let BT = 0; BT < oT.bytes.length; BT += vT) {
        iT++;
        const TT = Math.min(BT + vT, oT.bytes.length);
        xT(oT.bytes.subarray(BT, TT)) !== xT(IT.subarray(BT, TT)) && zT++
      }
      const kT = `${TT} ${oT.bytes.length} B cpu ${xT(oT.bytes).toString(16)} gpu ${xT(IT).toString(16)}, ${zT}/${iT} blocks differ${oT.missed?`, ${oT.missed} GPU-side writes uncopied`:""}`;
      if (0 === zT) return kT;
      const {
        count: WT,
        offsets: XT
      } = function(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const iT = Math.min(TT.length, oT.length);
        let zT = Math.abs(TT.length - oT.length);
        const kT = [];
        for (let WT = 0; WT < iT; WT++) TT[WT] !== oT[WT] && (zT++, kT.length < IT && kT.push(WT));
        return {
          count: zT,
          offsets: kT
        }
      }(oT.bytes, IT);
      return ZT([`${kT}: ${WT} bytes differ`, ...XT.map((TT => `  +${TT}: cpu ${cT(oT.bytes,TT)} | gpu ${cT(IT,TT)}`))].join("\n")), `${kT}: ${WT} bytes differ, first at ${XT.join(", ")} (context in the saved file)`
    }

    function io(TT) {
      if (0 === TT.vertices.length) return void qT(`decode probe (${TT.reason}): no terrain draw probed (${TT.draws.length} seen)`);
      const oT = function(TT) {
          const oT = new Map;
          for (const iT of TT) {
            const TT = oT.get(iT.group);
            TT ? TT.push(iT) : oT.set(iT.group, [iT])
          }
          const IT = {
            vertices: TT.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [iT, zT] of oT) {
            const TT = new Map,
              oT = zT.map((oT => {
                const IT = ST(oT.record, oT.slot),
                  iT = [oT.gpu[0] - IT[0], oT.gpu[1] - IT[1], oT.gpu[2] - IT[2]],
                  zT = iT.map((TT => Math.round(64 * TT))).join(","),
                  kT = TT.get(zT);
                return kT ? kT.count++ : TT.set(zT, {
                  count: 1,
                  offset: iT
                }), IT
              }));
            let kT = [0, 0, 0],
              WT = 0;
            for (const IT of TT.values()) IT.count > WT && (WT = IT.count, kT = IT.offset);
            IT.translations.set(iT, kT), zT.forEach(((TT, iT) => {
              var zT;
              const WT = [oT[iT][0] + kT[0], oT[iT][1] + kT[1], oT[iT][2] + kT[2]];
              if (WT.every(((oT, IT) => {
                  return iT = TT.gpu[IT], zT = oT, Math.abs(iT - zT) <= Math.max(.001, 1e-6 * Math.abs(zT));
                  var iT, zT
                }))) return;
              IT.mismatches++, IT.byDirection[XT(TT.record[2])]++, IT.byDiagonal[BT(TT.record[2])]++;
              const FT = DT(TT.record);
              IT.byBand[FT] = (null !== (zT = IT.byBand[FT]) && void 0 !== zT ? zT : 0) + 1, IT.first.length < LT && IT.first.push({
                ...TT,
                expected: WT
              })
            }))
          }
          return IT
        }(TT.vertices),
        IT = oT.byDirection.map(((TT, oT) => TT ? `${WT[oT]} ${TT}` : "")).filter(Boolean).join(" "),
        iT = Object.entries(oT.byBand).map((TT => {
          let [oT, IT] = TT;
          return `${oT}: ${IT}`
        })).join(" ");
      if (qT(`decode probe (${TT.reason}): ${oT.mismatches}/${oT.vertices} vertices differ from the CPU decode over ${TT.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (oT.mismatches ? ` by direction [${IT}] diagonal [0: ${oT.byDiagonal[0]} 1: ${oT.byDiagonal[1]}] extent [${iT}]` : "")), TT.fed.records > 0 || TT.fed.failed > 0) {
        qT(`decode probe input: ${TT.fed.differing}/${TT.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (TT.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (TT.fed.failed ? `; the feed failed on ${TT.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const oT of TT.fed.first) qT(`  ${oT}`)
      }
      for (const zT of oT.first) {
        const [TT, oT, IT] = zT.record;
        qT(`  mismatch part ${zT.group} r0 ${TT.toString(16)} r1 ${oT.toString(16)} r2 ${IT.toString(16)} slot ${zT.slot} (${WT[XT(IT)]}): expected ${zT.expected.map(ko).join(",")} gpu ${zT.gpu.map(ko).join(",")}`)
      }
      ZT(`decode probe translations: ${[...oT.translations].map((TT=>{let[oT,IT]=TT;return`${oT}: ${IT.map(ko).join(",")}`})).join("; ")}`)
    }

    function zo(TT) {
      return TT.toString(16)
    }

    function ko(TT) {
      return Number.isInteger(TT) ? String(TT) : TT.toFixed(3)
    }

    function Wo(TT) {
      return null !== UT.pendingCheck ? Promise.resolve() : new Promise((oT => {
        let IT = !1;
        const iT = {
          reason: TT,
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
        UT.pendingCheck = iT;
        const zT = () => {
            UT.pendingCheck = null;
            try {
              ! function(TT) {
                qT(`draw ranges (${TT.reason}): ${TT.terrainDraws} terrain draws in the frame, the first ${TT.draws.length} here`);
                for (const oT of TT.draws) {
                  const TT = oT.ec.slice(0, 8).map((TT => {
                      let [oT, IT] = TT;
                      return `${oT}+${IT}`
                    })).join(" "),
                    IT = oT.ec.length > 8 ? ` (+${oT.ec.length-8} ranges)` : "";
                  qT(`  ${fT(oT.program)} ${oT.program.terrain} ${oT.call} ${TT}${IT} x${oT.instances}${oT.group>=0?` part ${oT.group} chunk ${oT.chunk}`:""} | ${oT.attributes.join(" | ")}`)
                }
              }(iT), io(iT);
              iT.draws.some((TT => "undefined" !== typeof WebGL2RenderingContext && TT.gl instanceof WebGL2RenderingContext)) || 0 === iT.draws.length ? function(TT) {
                const oT = [],
                  IT = new Map;
                for (const iT of TT)
                  if ("undefined" !== typeof WebGL2RenderingContext && iT.gl instanceof WebGL2RenderingContext)
                    for (const TT of iT.pages) IT.set("buf" === TT.kind ? TT.buffer : TT.texture, {
                      page: TT,
                      gl: iT.gl
                    });
                for (const [iT, {
                    page: zT,
                    gl: kT
                  }] of IT) {
                  const TT = jT.get(iT);
                  if (!TT) {
                    oT.push(`${zT.kind}#${QT(iT)}: no CPU copy (${UT.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === zT.kind) {
                    oT.push(Io(`buf#${TT.id}`, TT, NT(kT, zT.buffer, 0, TT.bytes.length)));
                    continue
                  }
                  const IT = oo(kT, zT.texture, TT.width, 0, TT.width * TT.height),
                    WT = 16 === TT.texelBytes ? new Uint8Array(IT.buffer) : new Uint8Array(new Uint16Array(IT).buffer);
                  oT.push(Io(`tex#${TT.id} (${16===TT.texelBytes?"records":"light"})`, TT, WT))
                }
                for (const iT of oT) qT(`page readback ${iT}`)
              }(iT.draws) : qT("page readback: none on WebGL1 (no buffer readback)")
            } catch (TT) {
              qT(`check failed: ${String(TT)}`)
            }
            oT()
          },
          kT = () => {
            if (iT.draws.length > 0 && !IT) return IT = !0, void setTimeout(zT, 0);
            IT || requestAnimationFrame(kT)
          };
        requestAnimationFrame(kT), setTimeout((() => {
          IT || (IT = !0, zT())
        }), 5e3)
      }))
    }
    var Xo = IT(4191);
    const Bo = 20,
      Fo = 24,
      So = Reflect.apply;

    function Do(TT, oT, IT) {
      if (!TT) return;
      const iT = TT[oT];
      if ("function" === typeof iT) {
        const zT = IT(iT);
        TT[oT] = zT, (0, Xo.w)(zT, iT)
      }
    }
    let Lo = !1;
    const xo = new WeakMap,
      co = new WeakMap,
      Ko = new WeakMap,
      Mo = {
        gl: 0,
        lost: 0
      };
    let ro = {
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
      Ao = {
        buffer: 0,
        texture: 0
      },
      go = 0;

    function ho(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (TT instanceof ArrayBuffer) return new Uint8Array(TT, oT, IT || void 0);
      if (!ArrayBuffer.isView(TT)) return null;
      const iT = "BYTES_PER_ELEMENT" in TT ? TT.BYTES_PER_ELEMENT : 1,
        zT = TT.byteOffset + oT * iT,
        kT = IT ? IT * iT : TT.byteLength - oT * iT;
      return new Uint8Array(TT.buffer, zT, Math.max(0, kT))
    }

    function wo(TT, oT) {
      const IT = function(TT) {
        switch (TT) {
          case KT.ARRAY_BUFFER:
            return KT.ARRAY_BUFFER_BINDING;
          case KT.ELEMENT_ARRAY_BUFFER:
            return KT.ELEMENT_ARRAY_BUFFER_BINDING;
          case KT.COPY_READ_BUFFER:
            return KT.COPY_READ_BUFFER_BINDING;
          case KT.COPY_WRITE_BUFFER:
            return KT.COPY_WRITE_BUFFER_BINDING;
          case KT.UNIFORM_BUFFER:
            return KT.UNIFORM_BUFFER_BINDING;
          case KT.PIXEL_UNPACK_BUFFER:
            return KT.PIXEL_UNPACK_BUFFER_BINDING;
          case KT.TRANSFORM_FEEDBACK_BUFFER:
            return KT.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(oT);
      return IT ? TT.getParameter(IT) : null
    }

    function mo(TT) {
      const oT = jT.get(TT);
      oT && (UT.shadowBytes -= oT.bytes.length, jT.delete(TT))
    }

    function eo(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      mo(TT), UT.shadowBytes + oT > uT ? UT.uncopied++ : (UT.shadowBytes += oT, jT.set(TT, {
        id: QT(TT),
        bytes: new Uint8Array(oT),
        width: IT,
        height: iT,
        texelBytes: zT,
        missed: 0
      }))
    }

    function Ro(TT, oT) {
      for (const IT of ["deleteBuffer", "deleteTexture"]) Do(TT, IT, (TT => function() {
        for (var oT = arguments.length, IT = new Array(oT), iT = 0; iT < oT; iT++) IT[iT] = arguments[iT];
        return IT[0] && mo(IT[0]), So(TT, this, IT)
      }));
      Do(TT, "shaderSource", (TT => function() {
        for (var oT = arguments.length, IT = new Array(oT), iT = 0; iT < oT; iT++) IT[iT] = arguments[iT];
        return IT[0] && "string" === typeof IT[1] && xo.set(IT[0], IT[1]), So(TT, this, IT)
      })), Do(TT, "attachShader", (TT => function() {
        for (var oT, IT = arguments.length, iT = new Array(IT), zT = 0; zT < IT; zT++) iT[zT] = arguments[zT];
        const kT = iT[0],
          WT = null !== (oT = co.get(kT)) && void 0 !== oT ? oT : [];
        return WT.push(iT[1]), co.set(kT, WT), So(TT, this, iT)
      })), Do(TT, "linkProgram", (TT => function() {
        for (var oT = arguments.length, IT = new Array(oT), iT = 0; iT < oT; iT++) IT[iT] = arguments[iT];
        const zT = So(TT, this, IT);
        return UT.inProbe || function(TT, oT) {
          var IT, iT, zT;
          "undefined" !== typeof HTMLCanvasElement && TT.canvas instanceof HTMLCanvasElement && function(TT) {
            if (jo.has(TT)) return;
            jo.add(TT);
            for (const oT of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) TT.addEventListener(oT, (TT => {
              Mo.lost < Bo && (Mo.lost++, qT(`${oT}${"statusMessage"in TT?`: ${String(TT.statusMessage)}`:""}`))
            }))
          }(TT.canvas);
          UT.context ??= TT;
          const kT = null !== (IT = co.get(oT)) && void 0 !== IT ? IT : [];
          let WT = "",
            XT = "";
          for (const ST of kT) {
            var BT;
            const TT = null !== (BT = xo.get(ST)) && void 0 !== BT ? BT : "";
            /\bgl_Position\b/.test(TT) ? WT = TT : XT = TT
          }
          const FT = {
            id: QT(oT),
            name: null !== (iT = null === (zT = ET.exec(WT)) || void 0 === zT ? void 0 : zT[1]) && void 0 !== iT ? iT : null,
            gl: TT,
            vertex: WT,
            fragment: XT,
            terrain: vo(WT),
            checked: !1,
            firstDraw: !1
          };
          if (Ko.set(oT, FT), CT.push([oT, FT]), null !== FT.terrain) {
            const oT = kT.map((oT => {
              var IT;
              return null !== (IT = TT.getShaderInfoLog(oT)) && void 0 !== IT ? IT : ""
            })).filter((TT => "" !== TT.trim()));
            oT.length > 0 && ZT(`program ${fT(FT)} (${FT.terrain}) shader logs:\n${lT(oT.join("\n"))}`)
          }
        }(this, IT[0]), zT
      })), Do(TT, "bufferData", (TT => function() {
        for (var oT = arguments.length, IT = new Array(oT), iT = 0; iT < oT; iT++) IT[iT] = arguments[iT];
        const zT = So(TT, this, IT);
        if (!UT.inProbe) {
          const TT = wo(this, IT[0]);
          if (TT) {
            var kT, WT, XT;
            const oT = "number" === typeof IT[1] ? null : ho(IT[1], null !== (kT = IT[3]) && void 0 !== kT ? kT : 0, null !== (WT = IT[4]) && void 0 !== WT ? WT : 0);
            var BT;
            if (eo(TT, "number" === typeof IT[1] ? IT[1] : null !== (XT = null === oT || void 0 === oT ? void 0 : oT.length) && void 0 !== XT ? XT : 0), oT) null === (BT = jT.get(TT)) || void 0 === BT || BT.bytes.set(oT)
          }
        }
        return zT
      })), Do(TT, "bufferSubData", (TT => function() {
        for (var oT = arguments.length, IT = new Array(oT), iT = 0; iT < oT; iT++) IT[iT] = arguments[iT];
        const zT = So(TT, this, IT);
        if (!UT.inProbe) {
          var kT, WT;
          const TT = wo(this, IT[0]),
            oT = TT ? jT.get(TT) : void 0,
            iT = ho(IT[2], null !== (kT = IT[3]) && void 0 !== kT ? kT : 0, null !== (WT = IT[4]) && void 0 !== WT ? WT : 0);
          if (oT && iT) {
            const TT = IT[1];
            oT.bytes.set(iT.subarray(0, Math.max(0, oT.bytes.length - TT)), TT), uo("buffer", oT, TT, iT.length)
          }
        }
        return zT
      })), oT && (Do(TT, "copyBufferSubData", (TT => function() {
        for (var oT = arguments.length, IT = new Array(oT), iT = 0; iT < oT; iT++) IT[iT] = arguments[iT];
        const zT = So(TT, this, IT);
        if (!UT.inProbe) {
          const [TT, oT, iT, zT, kT] = IT, WT = wo(this, TT), XT = wo(this, oT), BT = WT ? jT.get(WT) : void 0, FT = XT ? jT.get(XT) : void 0;
          FT && (BT ? FT.bytes.set(BT.bytes.slice(iT, iT + kT), zT) : FT.missed++)
        }
        return zT
      })), Do(TT, "texStorage2D", (TT => function() {
        for (var oT = arguments.length, IT = new Array(oT), iT = 0; iT < oT; iT++) IT[iT] = arguments[iT];
        const zT = So(TT, this, IT),
          [, , kT, WT, XT] = IT;
        if (!UT.inProbe && (kT === KT.RGBA32UI || kT === KT.RGBA16UI)) {
          const TT = this.getParameter(KT.TEXTURE_BINDING_2D),
            oT = kT === KT.RGBA32UI ? 16 : 8;
          TT && (JT.set(TT, oT), eo(TT, WT * XT * oT, WT, XT, oT))
        }
        return zT
      })), Do(TT, "texSubImage2D", (TT => function() {
        for (var oT = arguments.length, IT = new Array(oT), iT = 0; iT < oT; iT++) IT[iT] = arguments[iT];
        const zT = So(TT, this, IT);
        return !UT.inProbe && IT.length >= 9 && IT[0] === KT.TEXTURE_2D && 0 === IT[1] && function(TT, oT) {
          var IT;
          const iT = TT.getParameter(KT.TEXTURE_BINDING_2D),
            zT = iT ? jT.get(iT) : void 0;
          if (!zT) return;
          const [, , kT, WT, XT, BT] = oT;
          let FT = ho(oT[8], null !== (IT = oT[9]) && void 0 !== IT ? IT : 0);
          if (null === FT && "number" === typeof oT[8]) {
            const IT = wo(TT, KT.PIXEL_UNPACK_BUFFER),
              iT = IT ? jT.get(IT) : void 0;
            FT = iT ? iT.bytes.subarray(oT[8]) : null
          }
          if (null === FT) return void zT.missed++;
          const ST = TT.getParameter(KT.UNPACK_ROW_LENGTH) || XT,
            DT = TT.getParameter(KT.UNPACK_SKIP_ROWS),
            LT = TT.getParameter(KT.UNPACK_SKIP_PIXELS),
            xT = zT.texelBytes;
          for (let cT = 0; cT < BT; cT++) {
            const TT = ((DT + cT) * ST + LT) * xT,
              oT = ((WT + cT) * zT.width + kT) * xT;
            zT.bytes.set(FT.subarray(TT, TT + XT * xT), oT)
          }
          uo("texture", zT, (WT * zT.width + kT) * xT, XT * BT * xT)
        }(this, IT), zT
      })), Do(TT, "copyTexSubImage2D", (TT => function() {
        for (var oT = arguments.length, IT = new Array(oT), iT = 0; iT < oT; iT++) IT[iT] = arguments[iT];
        const zT = IT[0] === KT.TEXTURE_2D ? this.getParameter(KT.TEXTURE_BINDING_2D) : null,
          kT = zT ? jT.get(zT) : void 0;
        return kT && kT.missed++, So(TT, this, IT)
      })));
      for (const IT of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) Do(TT, IT, (TT => function() {
        for (var oT = arguments.length, iT = new Array(oT), zT = 0; zT < oT; zT++) iT[zT] = arguments[zT];
        const kT = So(TT, this, iT);
        return UT.inProbe || fo(this, IT, iT), kT
      }));
      Do(TT, "getExtension", (TT => function() {
        for (var oT = arguments.length, IT = new Array(oT), iT = 0; iT < oT; iT++) IT[iT] = arguments[iT];
        const zT = So(TT, this, IT);
        return zT && "object" === typeof zT && function(TT, oT, IT) {
          const iT = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(oT in iT) || IT.bloxdRenderDebug) return;
          IT.bloxdRenderDebug = !0;
          for (const zT of iT[oT]) {
            const oT = IT[zT];
            "function" === typeof oT && (IT[zT] = function() {
              for (var iT = arguments.length, kT = new Array(iT), WT = 0; WT < iT; WT++) kT[WT] = arguments[WT];
              const XT = So(oT, IT, kT);
              return UT.inProbe || fo(TT, zT, kT), XT
            })
          }
        }(this, IT[0], zT), zT
      }))
    }

    function uo(TT, oT, IT, iT) {
      Ao[TT] += iT, go < 32 && oT.bytes.length >= 1 << 20 && (go++, ZT(`upload ${TT} #${oT.id} +${IT} ${iT} B`))
    }

    function vo(TT) {
      if (!TT.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(TT) || /in uvec3 _p2vs_location0\b/.test(TT) ? "inst" : "tex"
    }

    function Eo(TT, oT, IT) {
      var iT;
      if (IT.checked) return;
      IT.checked = !0;
      const zT = TT.getProgramParameter(oT, KT.LINK_STATUS),
        kT = (null !== (iT = TT.getProgramInfoLog(oT)) && void 0 !== iT ? iT : "").trim();
      var WT;
      null === IT.terrain && zT || (qT(`program ${fT(IT)} ${null!==(WT=IT.terrain)&&void 0!==WT?WT:"other"} link ${zT?"ok":"FAILED"}${kT?`: ${lT(kT,300)}`:""}`), kT && ZT(`program ${fT(IT)} link log:\n${lT(kT)}`))
    }

    function fo(TT, oT, IT) {
      var iT;
      const zT = TT.getParameter(KT.CURRENT_PROGRAM),
        kT = zT ? Ko.get(zT) : void 0;
      if (!zT || !kT) return;
      const WT = null !== (iT = kT.terrain) && void 0 !== iT ? iT : "other",
        {
          ec: XT,
          instances: BT
        } = function(TT, oT) {
          switch (TT) {
            case "drawArrays":
              return {
                ec: [
                  [oT[1], oT[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                ec: [
                  [oT[1], oT[2]]
                ], instances: oT[3]
              };
            case "drawElements":
              return {
                ec: [
                  [0, oT[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                ec: [
                  [0, oT[1]]
                ], instances: oT[4]
              };
            case "multiDrawArraysWEBGL": {
              const TT = oT[1],
                IT = oT[3],
                iT = oT[2],
                zT = oT[4],
                kT = [];
              for (let WT = 0; WT < oT[5]; WT++) kT.push([TT[iT + WT], IT[zT + WT]]);
              return {
                ec: kT,
                instances: 1
              }
            }
            default:
              return {
                ec: [], instances: 0
              }
          }
        }(oT, IT),
        FT = "inst" === kT.terrain ? BT : XT.reduce(((TT, oT) => {
          let [, IT] = oT;
          return TT + IT
        }), 0) / 6;
      if (ro[WT].draws++, ro[WT].faces += FT, null === kT.terrain) return;
      if (UT.context = TT, !kT.firstDraw) {
        kT.firstDraw = !0, Eo(TT, zT, kT), Co || (Co = !0, qT(function(TT) {
          var oT;
          const IT = TT.getParameter(KT.DEPTH_FUNC),
            iT = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let zT = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in TT && TT.getParameter(KT.DRAW_FRAMEBUFFER_BINDING)) {
            const oT = TT;
            zT = oT.getFramebufferAttachmentParameter(KT.DRAW_FRAMEBUFFER, KT.DEPTH_ATTACHMENT, KT.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(oT.getFramebufferAttachmentParameter(KT.DRAW_FRAMEBUFFER,KT.DEPTH_ATTACHMENT,KT.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(oT.getFramebufferAttachmentParameter(KT.DRAW_FRAMEBUFFER,KT.DEPTH_ATTACHMENT,KT.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const kT = TT.getParameter(KT.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(oT=iT[IT])&&void 0!==oT?oT:`0x${IT.toString(16)}`} clear ${kT}${516===IT||518===IT?" (reverse-Z)":""}, samples ${String(TT.getParameter(KT.SAMPLES))}, ${zT}`
        }(TT)));
        const IT = TT.getError();
        IT !== KT.NO_ERROR && Mo.gl < Bo && (Mo.gl++, qT(`GL error 0x${IT.toString(16)} after program ${fT(kT)}'s first terrain draw (${oT})`))
      }
      const ST = UT.pendingCheck;
      null !== ST && (ST.terrainDraws++, ST.draws.length < Fo && sT(TT, zT, kT, oT, XT, BT))
    }
    let Co = !1;
    const jo = new WeakSet;
    var Jo = IT(4030),
      Uo = IT(4195);
    const ao = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let Yo = !1;
    const Qo = new WeakSet,
      Oo = new WeakMap,
      Ho = new WeakMap,
      no = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let qo = 0,
      Zo = !1,
      so = null,
      to = {
        draws: 0,
        faces: 0
      };

    function Go(TT) {
      const oT = globalThis[TT];
      return null === oT || void 0 === oT ? void 0 : oT.prototype
    }

    function po(TT) {
      return TT && "function" === typeof TT[Symbol.iterator] ? [...TT].sort().join(" ") : ""
    }

    function bo(TT, oT) {
      const IT = null !== TT && void 0 !== TT ? TT : {},
        iT = null !== oT && void 0 !== oT ? oT : Object.keys(Object.getPrototypeOf(IT)).concat(Object.keys(IT));
      return [...new Set(iT)].filter((TT => "number" === typeof IT[TT])).map((TT => `${TT} ${String(IT[TT])}`)).join(", ")
    }

    function yo(TT, oT) {
      var IT;
      const iT = null !== (IT = oT.vertex) && void 0 !== IT ? IT : {};
      if (iT.module && Qo.has(iT.module)) {
        var zT;
        const IT = String(null !== (zT = iT.entryPoint) && void 0 !== zT ? zT : "");
        if (IT.startsWith("vs_packed") && Oo.set(TT, IT), !Zo) {
          var kT, WT, XT, BT, FT;
          Zo = !0;
          const TT = null !== (kT = oT.depthStencil) && void 0 !== kT ? kT : {},
            iT = null !== (WT = oT.multisample) && void 0 !== WT ? WT : {},
            zT = String(null !== (XT = TT.depthCompare) && void 0 !== XT ? XT : "");
          qT(`WebGPU terrain pipeline ${IT}: depth ${String(null!==(BT=TT.format)&&void 0!==BT?BT:"none")} ${zT}${zT.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(FT=iT.count)&&void 0!==FT?FT:1)}`)
        }
      }
    }

    function No(TT) {
      Do(TT, "setPipeline", (TT => function() {
        for (var oT = arguments.length, IT = new Array(oT), iT = 0; iT < oT; iT++) IT[iT] = arguments[iT];
        return Ho.set(this, IT[0]), So(TT, this, IT)
      }));
      for (const oT of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) Do(TT, oT, (TT => function() {
        const IT = Ho.get(this),
          iT = IT ? Oo.get(IT) : void 0;
        for (var zT = arguments.length, kT = new Array(zT), WT = 0; WT < zT; WT++) kT[WT] = arguments[WT];
        return void 0 !== iT && Po(oT, iT, kT), So(TT, this, kT)
      }))
    }

    function Po(TT, oT, IT) {
      var iT;
      (to.draws++, "draw" === TT || "drawIndexed" === TT) && (to.faces += IT[0] * (null !== (iT = IT[1]) && void 0 !== iT ? iT : 1) / 6);
      if (null !== so && so.length < Fo) {
        const iT = ("draw" === TT ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === TT ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((oT, iT) => {
          const zT = TT.endsWith("Indirect") ? IT[1] : IT[iT];
          return `${oT} ${String(null!==zT&&void 0!==zT?zT:"instances"===oT?1:0)}`
        }));
        so.push(`  ${oT} ${TT} ${iT.join(" ")}`)
      }
    }

    function Vo() {
      if (Yo || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      Yo = !0, Do(Go("GPU"), "requestAdapter", (TT => function() {
        for (var oT = arguments.length, IT = new Array(oT), iT = 0; iT < oT; iT++) IT[iT] = arguments[iT];
        return So(TT, this, IT).then((TT => {
          var oT;
          TT ? function(TT) {
            var oT;
            const IT = null !== (oT = TT.info) && void 0 !== oT ? oT : {};
            qT(`WebGPU adapter ${["vendor","architecture","device","description"].map((TT=>{var oT;return`${TT} "${String(null!==(oT=IT[TT])&&void 0!==oT?oT:"")}"`})).join(" ")}${TT.isFallbackAdapter?" (fallback)":""}`), qT(`WebGPU adapter features ${po(TT.features)}`), qT(`WebGPU adapter limits ${bo(TT.limits,ao)}`), ZT(`WebGPU adapter all limits ${bo(TT.limits,null)}`)
          }(TT) : qT(`WebGPU requestAdapter(${JSON.stringify(null!==(oT=IT[0])&&void 0!==oT?oT:{})}) gave none`);
          return TT
        }))
      })), Do(Go("GPUAdapter"), "requestDevice", (TT => function() {
        for (var oT = arguments.length, IT = new Array(oT), iT = 0; iT < oT; iT++) IT[iT] = arguments[iT];
        return So(TT, this, IT).then((TT => (function(TT) {
          qT(`WebGPU device features ${po(TT.features)}`), qT(`WebGPU device limits ${bo(TT.limits,ao)}`), TT.addEventListener("uncapturederror", (TT => {
            if (no.uncaptured < Bo) {
              var oT, IT, iT;
              no.uncaptured++;
              const zT = TT.error;
              qT(`WebGPU uncaptured ${null!==(oT=null===zT||void 0===zT||null===(IT=zT.constructor)||void 0===IT?void 0:IT.name)&&void 0!==oT?oT:"error"}: ${lT(String(null!==(iT=null===zT||void 0===zT?void 0:zT.message)&&void 0!==iT?iT:""),600)}`)
            }
          }));
          const oT = TT.lost;
          null === oT || void 0 === oT || oT.then((TT => {
            var oT;
            qT(`WebGPU device lost (${String(TT.reason)}): ${lT(String(null!==(oT=TT.message)&&void 0!==oT?oT:""),600)}`)
          }))
        }(TT), TT)), (TT => {
          throw qT(`WebGPU requestDevice failed: ${String(TT)}`), TT
        }))
      }));
      const TT = Go("GPUDevice");
      Do(TT, "createShaderModule", (TT => function() {
        for (var oT, IT, iT = arguments.length, zT = new Array(iT), kT = 0; kT < iT; kT++) zT[kT] = arguments[kT];
        const WT = So(TT, this, zT);
        return function(TT, oT) {
          const IT = oT.includes("decodeQuad");
          IT && Qo.add(TT);
          const iT = TT.getCompilationInfo;
          null === iT || void 0 === iT || iT.call(TT).then((TT => {
            if (0 === TT.messages.length && !IT) return;
            const oT = {};
            for (const IT of TT.messages) {
              var iT;
              oT[String(IT.type)] = (null !== (iT = oT[String(IT.type)]) && void 0 !== iT ? iT : 0) + 1
            }
            const zT = TT.messages.map((TT => `${String(TT.type)} ${String(TT.lineNum)}:${String(TT.linePos)} ${String(TT.message)}`)).join("\n");
            no.compile < Bo && (no.compile++, qT(`WebGPU ${IT?"terrain ":""}shader module compiled: ${JSON.stringify(oT)}${zT?` first: ${lT(zT.split("\n")[0],300)}`:""}`)), zT && ZT(`WebGPU shader module messages:\n${lT(zT)}`)
          }))
        }(WT, String(null !== (oT = (null !== (IT = zT[0]) && void 0 !== IT ? IT : {}).code) && void 0 !== oT ? oT : "")), WT
      })), Do(TT, "createRenderPipeline", (TT => function() {
        for (var oT, IT = arguments.length, iT = new Array(IT), zT = 0; zT < IT; zT++) iT[zT] = arguments[zT];
        const kT = So(TT, this, iT);
        return yo(kT, null !== (oT = iT[0]) && void 0 !== oT ? oT : {}), kT
      })), Do(TT, "createRenderPipelineAsync", (TT => function() {
        for (var oT = arguments.length, IT = new Array(oT), iT = 0; iT < oT; iT++) IT[iT] = arguments[iT];
        return So(TT, this, IT).then((TT => {
          var oT;
          return yo(TT, null !== (oT = IT[0]) && void 0 !== oT ? oT : {}), TT
        }), (TT => {
          var oT;
          throw function(TT, oT) {
            var IT, iT, zT;
            if (no.rejected >= Bo) return;
            no.rejected++;
            const {
              reason: kT,
              message: WT
            } = null !== oT && void 0 !== oT ? oT : {}, XT = String(null !== (IT = (null !== (iT = TT.vertex) && void 0 !== iT ? iT : {}).entryPoint) && void 0 !== IT ? IT : "");
            qT(`WebGPU pipeline "${String(null!==(zT=TT.label)&&void 0!==zT?zT:"")}" ${XT} rejected (${String(null!==kT&&void 0!==kT?kT:"no reason")}): ${lT(String(null!==WT&&void 0!==WT?WT:oT),600)}`)
          }(null !== (oT = IT[0]) && void 0 !== oT ? oT : {}, TT), TT
        }))
      })), Do(Go("GPUCanvasContext"), "configure", (TT => function() {
        for (var oT, IT = arguments.length, iT = new Array(IT), zT = 0; zT < IT; zT++) iT[zT] = arguments[zT];
        const kT = null !== (oT = iT[0]) && void 0 !== oT ? oT : {};
        var WT, XT;
        qo++ < 3 && qT(`WebGPU canvas ${String(kT.format)} ${String(null!==(WT=kT.colorSpace)&&void 0!==WT?WT:"srgb")} alpha ${String(null!==(XT=kT.alphaMode)&&void 0!==XT?XT:"opaque")}`);
        return So(TT, this, iT)
      })), No(Go("GPURenderPassEncoder")), No(Go("GPURenderBundleEncoder"))
    }
    const TI = 1e4,
      oI = 6e4,
      II = 5e3,
      iI = 3e3,
      zI = 100;
    let kI = null,
      WI = !1,
      XI = {
        ...Jo.e
      },
      BI = !1,
      FI = null,
      SI = 0,
      DI = () => {};
    const LI = new Promise((TT => {
      DI = TT
    }));

    function xI() {
      var TT;
      WI || (WI = !0, XI = Object.assign(window.bloxdRenderDebug ??= {
        ...Jo.e
      }, {
        faceCull: "0" === (0, kT.n)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (TT = (0, kT.n)("adrenoProbe")) && void 0 !== TT ? TT : ""
      }), qT("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), Lo || "undefined" === typeof window || (Lo = !0, "undefined" !== typeof WebGL2RenderingContext && Ro(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && Ro(WebGLRenderingContext.prototype, !1)), Vo(), (0, kT.e)("renderProbe", (() => {
        gI("console")
      })), rI(), setInterval(wI, II))
    }

    function cI(TT) {
      var oT, IT;
      xI(), kI = null !== (oT = null === TT || void 0 === TT ? void 0 : TT.backend) && void 0 !== oT ? oT : null;
      const iT = `, renderer param ${null!==(IT=(0,kT.n)("renderer"))&&void 0!==IT?IT:"none"}, faceCull ${"0"===XI.faceCull?"off (whole parts)":"on"}, adrenoProbe ${XI.adrenoProbe||"none"}`;
      qT(`${(0,Uo.c)(TT)}${null===TT?"":iT}`)
    }

    function KI() {
      const TT = performance.now(),
        oT = MI(LI, TI, oI).then((oT => gI(`${Math.round((performance.now()-TT)/1e3)} s after playable${oT?"":", no terrain drawn yet"}`)));
      (0, zT.c)(qT, (async () => {
        await oT, await FI
      }))
    }
    async function MI(TT, oT, IT) {
      const zT = (0, iT.c)(IT).then((() => !1));
      return await (0, iT.c)(oT), Promise.race([TT.then((() => !0)), zT])
    }

    function rI() {
      requestAnimationFrame((() => {
        SI++, rI()
      }))
    }

    function AI() {
      var TT, oT, IT;
      if (BI) return;
      (BI = !0, qT(`renderer caps ${null!==(TT=XI.caps)&&void 0!==TT?TT:"(not noted)"}; terrain fetch ${null!==(oT=XI.fetch)&&void 0!==oT?oT:"(not noted)"}`), XI.adrenoProbe) && qT(`adrenoProbe ${XI.adrenoProbe} asked; in force (storage fetch only): ${null!==(IT=XI.probe)&&void 0!==IT?IT:"(not noted)"}`);
      const iT = UT.context;
      if (iT) {
        for (const TT of function(TT) {
            var oT;
            const IT = [],
              iT = TT.getExtension("WEBGL_debug_renderer_info"),
              zT = iT ? TT.getParameter(iT.UNMASKED_VENDOR_WEBGL) : "(masked)",
              kT = iT ? TT.getParameter(iT.UNMASKED_RENDERER_WEBGL) : "(masked)";
            IT.push(`GL ${String(TT.getParameter(TT.VERSION))} | ${String(TT.getParameter(TT.SHADING_LANGUAGE_VERSION))} | ${String(TT.getParameter(TT.VENDOR))} / ${String(TT.getParameter(TT.RENDERER))}`), IT.push(`GL unmasked ${zT} / ${kT}`);
            const WT = [
              ["MAX_TEXTURE_SIZE", TT.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", TT.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", TT.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", TT.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", TT.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", TT.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", TT.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in TT && WT.push(["MAX_UNIFORM_BLOCK_SIZE", TT.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", TT.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", TT.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", TT.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), IT.push(`GL limits ${WT.map((oT=>{let[IT,iT]=oT;return`${IT} ${String(TT.getParameter(iT))}`})).join(", ")}`);
            const XT = (oT, IT) => {
              const iT = TT.getShaderPrecisionFormat(oT, TT.HIGH_FLOAT),
                zT = TT.getShaderPrecisionFormat(oT, TT.HIGH_INT);
              return `${IT} highp float ${iT?`${iT.rangeMin}/${iT.rangeMax}/${iT.precision}`:"?"} int ${zT?`${zT.rangeMin}/${zT.rangeMax}/${zT.precision}`:"?"}`
            };
            IT.push(`GL precision ${XT(TT.VERTEX_SHADER,"VS")}, ${XT(TT.FRAGMENT_SHADER,"FS")}`);
            const BT = TT.getContextAttributes();
            return IT.push(`GL context ${JSON.stringify(BT)} drawingBuffer ${TT.drawingBufferWidth}x${TT.drawingBufferHeight}${"drawingBufferFormat"in TT?` format 0x${Number(TT.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in TT?` ${String(TT.drawingBufferColorSpace)}`:""}`), IT.push(`GL extensions ${(null!==(oT=TT.getSupportedExtensions())&&void 0!==oT?oT:[]).join(" ")}`), IT
          }(iT)) qT(TT);
        ! function() {
          if (!UT.context) return;
          let TT = 0,
            oT = 0;
          for (const [IT, iT] of CT) !iT.gl.isContextLost() && iT.gl.isProgram(IT) && (oT++, Eo(iT.gl, IT, iT), null !== iT.terrain && TT++);
          qT(`programs: ${oT} live of ${CT.length} linked, ${TT} packed terrain; CPU page copies ${Math.round(UT.shadowBytes/1048576)} MiB (${UT.uncopied} over budget)`)
        }()
      }
    }

    function gI(TT) {
      return FI ??= async function(TT) {
        AI(), "webgpu" === kI ? (hI(), "1" === XI.slotCheck && qT("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), XI.slotCheck = "1", await
          function(TT) {
            if (null !== so) return Promise.resolve();
            const oT = [];
            return so = oT, new Promise((IT => {
              setTimeout((() => {
                so = null, qT(`WebGPU draw ranges (${TT}): ${oT.length} terrain draws recorded in a second (first ${Fo}; bundles replay without new ones)`);
                for (const TT of oT) qT(TT);
                IT()
              }), 1e3)
            }))
          }(TT), await async function() {
            for (let TT = 0;
              "1" === XI.slotCheck && TT < iI; TT += zI) await (0, iT.c)(zI);
            if ("1" === XI.slotCheck) return void qT(`slot check: no answer in ${iI} ms (only the storage fetch has one; a later answer logs on its own)`);
            hI()
          }()) : await Wo(TT);
        qT(`check (${TT}) done: bloxdDebug.save() downloads it all`)
      }(TT).catch((oT => {
        qT(`check (${TT}) failed: ${String(oT)}`)
      })).finally((() => {
        FI = null
      })), FI
    }

    function hI() {
      void 0 !== XI.slotCheck && "1" !== XI.slotCheck && (qT(XI.slotCheck), delete XI.slotCheck)
    }

    function wI() {
      const TT = TT => SI ? (TT / SI).toFixed(1) : "0",
        oT = function() {
          const TT = to;
          return to = {
            draws: 0,
            faces: 0
          }, TT
        }(),
        IT = function() {
          const TT = ro;
          return ro = {
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
          }, TT
        }(),
        iT = function() {
          const TT = Ao;
          return Ao = {
            buffer: 0,
            texture: 0
          }, TT
        }();
      hI(), ("webgpu" === kI ? oT.draws : IT.inst.draws + IT.tex.draws) > 0 && DI();
      const zT = "webgpu" === kI ? [`terrain ${TT(oT.draws)} draws ${TT(oT.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((TT => IT[TT].draws > 0)).map((oT => `${oT} ${TT(IT[oT].draws)} draws ${TT(IT[oT].faces)} faces a frame`));
      qT(`${SI} frames: ${zT.join(", ")||"no draws"}; uploaded ${Math.round(iT.buffer/1024)} KiB to buffers, ${Math.round(iT.texture/1024)} KiB to data textures`), SI = 0
    }
  },
  4195: (TT, oT, IT) => {
    function iT(TT) {
      if (null === TT) return "backend: none picked (no renderer build)";
      const oT = TT.adapter ? `${TT.adapter.vendor}/${TT.adapter.architecture}` : "none";
      return `backend ${TT.backend}: reason ${TT.reason}, source ${TT.source}, adapter ${oT}`
    }
    IT.d(oT, {
      c: () => iT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);