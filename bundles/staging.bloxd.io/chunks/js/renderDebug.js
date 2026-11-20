export const id = 47;
export const ids = [47];
export const modules = {
  4673: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => IT
    });
    var lT = cT(31),
      MT = cT(36),
      KT = cT(1292),
      OT = cT(2853);
    const yT = 3e4,
      fT = 1e3;

    function xT() {
      return "visible" === document.visibilityState && "inGame" === lT.e.get("gameState") && (0, KT.q)()
    }

    function IT(TT, kT) {
      (0, OT.q)() || function(TT, kT, cT) {
        let lT = 0;
        const MT = setInterval((() => {
          kT() && (lT += fT, lT >= TT && (clearInterval(MT), cT()))
        }), fT)
      }(yT, xT, (() => {
        kT().then((() => {
          TT(`saved for the player after ${yT/1e3} s of play`), (0, OT.y)(), MT.k.nt("chat", {
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
  4670: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      installRenderDebug: () => Cc,
      renderDebugPlayable: () => vc,
      startRenderDebug: () => jc,
      waitForDraw: () => tc
    });
    var lT = cT(1828),
      MT = cT(4673),
      KT = cT(2853);
    const OT = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function yT(TT) {
      return 7 & TT
    }

    function fT(TT) {
      return TT >>> 11 & 1
    }

    function xT(TT) {
      return [1 + (TT >>> 18 & 63), 1 + (TT >>> 24 & 63)]
    }

    function IT(TT, kT) {
      const [cT, , lT] = TT, MT = yT(lT), KT = function(TT, kT, cT) {
        return kT + (1 === (22 >>> TT & 1) ? 4 - cT : cT) & 3
      }(MT, fT(lT), kT), OT = MT >>> 1, [IT, AT] = xT(cT), CT = 1 === KT || 2 === KT ? IT : 0, jT = KT >= 2 ? AT : 0, vT = [63 & cT, cT >>> 6 & 63, cT >>> 12 & 63];
      return vT[2 === OT ? 0 : 2] += CT, vT[1 === OT ? 0 : 1] += jT, vT
    }

    function AT(TT) {
      const kT = Math.max(...xT(TT[0]));
      return 1 === kT ? "1" : kT <= 4 ? "2-4" : kT <= 16 ? "5-16" : "17-64"
    }
    const CT = 16;

    function jT(TT) {
      let kT = 2166136261;
      for (let cT = 0; cT < TT.length; cT++) kT = Math.imul(kT ^ TT[cT], 16777619);
      return kT >>> 0
    }

    function vT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const lT = Math.max(0, kT - cT),
        MT = Math.min(TT.length, kT + cT),
        KT = [];
      for (let OT = lT; OT < MT; OT++) {
        const cT = TT[OT].toString(16).padStart(2, "0");
        KT.push(OT === kT ? `[${cT}]` : cT)
      }
      return KT.join(" ")
    }
    const tT = {
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
      hT = "_vs2fs_location0",
      NT = 0,
      QT = 4,
      ST = 6,
      DT = [0, 1, 2, 0, 2, 3],
      aT = 2048,
      FT = 4,
      rT = 256,
      PT = 64,
      wT = 268435456,
      mT = 65536,
      bT = /^#version [^\n]*\/\/ program (\S+)$/m;

    function zT(TT) {
      return null === TT.name ? `#${TT.id}` : `#${TT.id} ${TT.name}`
    }
    const JT = [],
      oT = new WeakMap,
      HT = new WeakMap,
      eT = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let GT = 1;
    const VT = new WeakMap;

    function ET(TT) {
      if (null === TT) return 0;
      let kT = VT.get(TT);
      return void 0 === kT && (kT = GT++, VT.set(TT, kT)), kT
    }
    class ZT {
      constructor(TT, kT) {
        this.print = TT, this.now = kT, this.shown = 0, this.ty = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.wj = [], this.dropped = 0
      }
      line(TT) {
        const kT = this.now();
        if (kT - this.second >= 1e3 && (this.second = kT, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.ty++, void this.store(TT);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${TT} (the last line here: the rest go to bloxdDebug.save())` : TT)
      }
      keep(TT) {
        this.sections++, this.store(TT)
      }
      store(TT) {
        this.wj.push(`${new Date(Date.now()).toISOString()} ${TT}`), this.wj.length > 2e4 && (this.wj.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.ty} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.wj].join("\n")
      }
    }
    let uT = null;

    function XT() {
      if (null === uT) {
        const TT = new ZT((TT => {
          (0, KT.k)("render", TT)
        }), (() => performance.now()));
        (0, KT.j)("render", (() => TT.dump())), uT = TT
      }
      return uT
    }

    function dT(TT) {
      XT().line(TT)
    }

    function LT(TT) {
      XT().keep(TT)
    }

    function RT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return TT.length <= kT ? TT : `${TT.slice(0,kT)}... (${TT.length-kT} more characters)`
    }

    function gT(TT, kT, cT, lT, MT, KT) {
      const OT = eT.pendingCheck;
      if (null === OT) return;
      const yT = "undefined" !== typeof WebGL2RenderingContext && TT instanceof WebGL2RenderingContext,
        fT = {
          gl: TT,
          program: cT,
          call: lT,
          qt: MT,
          instances: KT,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (OT.draws.push(fT), yT) try {
        const lT = function(TT) {
          const kT = [],
            cT = new Map,
            lT = Math.min(16, TT.getParameter(tT.MAX_VERTEX_ATTRIBS));
          for (let MT = 0; MT < lT; MT++) {
            if (!TT.getVertexAttrib(MT, tT.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const lT = TT.getVertexAttrib(MT, tT.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              KT = TT.getVertexAttribOffset(MT, tT.VERTEX_ATTRIB_ARRAY_POINTER),
              OT = TT.getVertexAttrib(MT, tT.VERTEX_ATTRIB_ARRAY_STRIDE),
              yT = TT.getVertexAttrib(MT, tT.VERTEX_ATTRIB_ARRAY_SIZE),
              fT = TT.getVertexAttrib(MT, tT.VERTEX_ATTRIB_ARRAY_TYPE),
              xT = "VERTEX_ATTRIB_ARRAY_INTEGER" in TT && TT.getVertexAttrib(MT, tT.VERTEX_ATTRIB_ARRAY_INTEGER),
              IT = "VERTEX_ATTRIB_ARRAY_DIVISOR" in TT ? TT.getVertexAttrib(MT, tT.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            cT.set(MT, {
              buffer: lT,
              offset: KT,
              stride: OT
            }), kT.push(`@${MT} buf#${ET(lT)} +${KT} stride ${OT} ${yT}x0x${fT.toString(16)}${xT?" int":""} div ${IT}`)
          }
          return {
            lines: kT,
            byLocation: cT
          }
        }(TT);
        if (fT.attributes = lT.lines, "inst" === cT.terrain) {
          const {
            group: MT,
            chunk: yT
          } = function(TT, kT, cT) {
            const lT = kT.get(ST),
              MT = TT.getVertexAttrib(ST, tT.CURRENT_VERTEX_ATTRIB),
              KT = lT ? `+${lT.offset}` : MT ? Array.from(MT).slice(0, 3).join(",") : "?";
            let OT = cT.groups.get(KT);
            return void 0 === OT && (OT = cT.groups.size, cT.groups.set(KT, OT)), {
              group: OT,
              chunk: KT
            }
          }(TT, lT.byLocation, OT);
          fT.group = MT, fT.chunk = yT;
          for (const TT of [NT, QT]) {
            var xT;
            const kT = null === (xT = lT.byLocation.get(TT)) || void 0 === xT ? void 0 : xT.buffer;
            kT && fT.pages.push({
              kind: "buf",
              buffer: kT
            })
          }! function(TT, kT, cT, lT, MT, KT, OT) {
            const yT = lT.get(NT),
              fT = OT.parts.get(KT);
            if (void 0 === fT && OT.parts.size >= FT) return;
            const xT = Math.min(MT, PT, rT - (null !== fT && void 0 !== fT ? fT : 0));
            if (null === yT || void 0 === yT || !yT.buffer || xT <= 0) return;
            const IT = UT(TT, kT, cT);
            if (!IT) return;
            const AT = yT.stride || 12,
              CT = pT(TT, yT.buffer, yT.offset, (xT - 1) * AT + 12),
              jT = new DataView(CT.buffer),
              vT = function(TT, kT) {
                const cT = function(TT) {
                    const kT = sT.get(TT);
                    if (void 0 !== kT && (null === kT || TT.isProgram(kT))) return kT;
                    eT.inProbe = !0;
                    let cT = null;
                    try {
                      cT = YT(TT, iT, qT, "fed", "the record feed")
                    } finally {
                      eT.inProbe = !1
                    }
                    return sT.set(TT, cT), cT
                  }(TT),
                  lT = cT ? nT(TT, cT, kT, (() => {
                    TT.drawArraysInstanced(tT.POINTS, 0, 1, kT)
                  }), "decode probe input (the record feed)") : null;
                return lT ? new Uint32Array(lT.buffer) : null
              }(TT, xT);
            vT || OT.fed.failed++;
            const hT = nT(TT, IT, 4 * xT, (() => {
              TT.drawArraysInstanced(tT.POINTS, 0, 4, xT)
            }));
            if (!hT) return;
            OT.parts.set(KT, (null !== fT && void 0 !== fT ? fT : 0) + xT);
            for (let tT = 0; tT < xT; tT++) {
              const TT = tT * AT,
                kT = [jT.getUint32(TT, !0), jT.getUint32(TT + 4, !0), jT.getUint32(TT + 8, !0)],
                cT = vT ? [vT[3 * tT], vT[3 * tT + 1], vT[3 * tT + 2]] : kT;
              vT && (OT.fed.records++, cT.some(((TT, cT) => TT !== kT[cT])) && (OT.fed.differing++, OT.fed.first.length < 8 && OT.fed.first.push(`part ${KT} instance ${tT}: fed ${cT.map(Mk).join(" ")} buffer ${kT.map(Mk).join(" ")}`)));
              for (let lT = 0; lT < 4; lT++) {
                const TT = 3 * (4 * tT + lT);
                OT.vertices.push({
                  record: cT,
                  slot: lT,
                  group: KT,
                  gpu: [hT[TT], hT[TT + 1], hT[TT + 2]]
                })
              }
            }
          }(TT, kT, cT, lT.byLocation, KT, MT, OT)
        } else {
          const lT = Tk(TT, kT, 16),
            KT = Tk(TT, kT, 8);
          for (const TT of [lT, KT]) TT && fT.pages.push({
            kind: "tex",
            texture: TT
          });
          lT && function(TT, kT, cT, lT, MT, KT) {
            if (KT.parts.size >= FT) return;
            const OT = UT(TT, kT, cT);
            if (!OT) return;
            let yT = 6 * rT;
            const fT = [];
            for (const [jT, vT] of MT) {
              const TT = Math.min(vT, yT, Math.max(6, 6 * Math.floor(rT / MT.length)));
              TT > 0 && (fT.push([jT, TT]), yT -= TT)
            }
            const xT = fT.reduce(((TT, kT) => {
                let [, cT] = kT;
                return TT + cT
              }), 0),
              IT = nT(TT, OT, xT, (() => {
                for (const [kT, cT] of fT) TT.drawArrays(tT.POINTS, kT, cT)
              }));
            if (!IT) return;
            let AT = 0;
            for (const [jT, vT] of fT) {
              const kT = Math.floor(jT / 6),
                cT = Math.floor((jT + vT - 1) / 6) - kT + 1,
                MT = kk(TT, lT, aT, kT, cT);
              for (let TT = jT; TT < jT + vT; TT++, AT++) {
                var CT;
                const cT = 4 * (Math.floor(TT / 6) - kT),
                  lT = [MT[cT], MT[cT + 1], MT[cT + 2]];
                KT.parts.set(MT[cT + 3], (null !== (CT = KT.parts.get(MT[cT + 3])) && void 0 !== CT ? CT : 0) + (TT % 6 === 0 ? 1 : 0)), KT.vertices.push({
                  record: lT,
                  slot: DT[TT % 6],
                  group: MT[cT + 3],
                  gpu: [IT[3 * AT], IT[3 * AT + 1], IT[3 * AT + 2]]
                })
              }
            }
          }(TT, kT, cT, lT, MT, OT)
        }
      } catch (IT) {
        dT(`decode probe failed on program ${zT(cT)}: ${String(IT)}`)
      }
    }

    function UT(TT, kT, cT) {
      if (void 0 !== cT.probe) return cT.probe && BT(TT, kT, cT.probe), cT.probe;
      cT.probe = null, eT.inProbe = !0;
      try {
        cT.probe = function(TT, kT) {
          return YT(TT, kT.vertex, kT.fragment, hT, `program ${zT(kT)}'s twin`)
        }(TT, cT)
      } finally {
        eT.inProbe = !1
      }
      return cT.probe && BT(TT, kT, cT.probe), cT.probe
    }

    function YT(TT, kT, cT, lT, MT) {
      const KT = [TT.createShader(tT.VERTEX_SHADER), TT.createShader(tT.FRAGMENT_SHADER)],
        OT = TT.createProgram();
      if (!OT || !KT[0] || !KT[1]) return null;
      TT.shaderSource(KT[0], kT), TT.shaderSource(KT[1], cT);
      for (const fT of KT) TT.compileShader(fT), TT.attachShader(OT, fT);
      TT.transformFeedbackVaryings(OT, [lT], tT.INTERLEAVED_ATTRIBS), TT.linkProgram(OT);
      for (const fT of KT) TT.deleteShader(fT);
      var yT;
      return TT.getProgramParameter(OT, tT.LINK_STATUS) ? OT : (dT(`decode probe: ${MT} failed to link: ${RT(null!==(yT=TT.getProgramInfoLog(OT))&&void 0!==yT?yT:"",300)}`), TT.deleteProgram(OT), null)
    }

    function BT(TT, kT, cT) {
      const lT = TT.getProgramParameter(kT, tT.ACTIVE_UNIFORM_BLOCKS);
      for (let yT = 0; yT < lT; yT++) {
        const lT = TT.getActiveUniformBlockName(kT, yT),
          MT = null === lT ? tT.INVALID_INDEX : TT.getUniformBlockIndex(cT, lT);
        MT !== tT.INVALID_INDEX && TT.uniformBlockBinding(cT, MT, TT.getActiveUniformBlockParameter(kT, yT, tT.UNIFORM_BLOCK_BINDING))
      }
      const MT = TT.getParameter(tT.CURRENT_PROGRAM);
      TT.useProgram(cT);
      const KT = TT.getProgramParameter(kT, tT.ACTIVE_UNIFORMS),
        OT = TT.getActiveUniforms(kT, [...Array(KT).keys()], tT.UNIFORM_BLOCK_INDEX);
      for (let yT = 0; yT < KT; yT++) {
        const lT = TT.getActiveUniform(kT, yT);
        if (!lT || -1 !== OT[yT]) continue;
        const MT = lT.name.replace(/\[0\]$/, "");
        for (let KT = 0; KT < lT.size; KT++) {
          const OT = lT.size > 1 ? `${MT}[${KT}]` : lT.name,
            yT = TT.getUniformLocation(kT, OT),
            fT = TT.getUniformLocation(cT, OT);
          yT && fT && WT(TT, fT, lT.type, TT.getUniform(kT, yT))
        }
      }
      TT.useProgram(MT)
    }

    function WT(TT, kT, cT, lT) {
      const MT = ArrayBuffer.isView(lT) ? Array.from(lT) : [Number(lT)];
      switch (cT) {
        case tT.FLOAT:
          return void TT.uniform1f(kT, MT[0]);
        case tT.FLOAT_VEC2:
          return void TT.uniform2fv(kT, MT);
        case tT.FLOAT_VEC3:
          return void TT.uniform3fv(kT, MT);
        case tT.FLOAT_VEC4:
          return void TT.uniform4fv(kT, MT);
        case tT.FLOAT_MAT3:
          return void TT.uniformMatrix3fv(kT, !1, MT);
        case tT.FLOAT_MAT4:
          return void TT.uniformMatrix4fv(kT, !1, MT);
        case tT.UNSIGNED_INT:
          return void TT.uniform1ui(kT, MT[0]);
        case tT.UNSIGNED_INT_VEC2:
          return void TT.uniform2uiv(kT, MT);
        case tT.UNSIGNED_INT_VEC3:
          return void TT.uniform3uiv(kT, MT);
        case tT.UNSIGNED_INT_VEC4:
          return void TT.uniform4uiv(kT, MT);
        case tT.INT_VEC2:
          return void TT.uniform2iv(kT, MT);
        case tT.INT_VEC3:
          return void TT.uniform3iv(kT, MT);
        case tT.INT_VEC4:
          return void TT.uniform4iv(kT, MT);
        default:
          TT.uniform1i(kT, MT[0])
      }
    }

    function nT(TT, kT, cT, lT) {
      let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const KT = TT.getParameter(tT.CURRENT_PROGRAM),
        OT = TT.getParameter(tT.TRANSFORM_FEEDBACK_BINDING),
        yT = TT.getParameter(tT.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        fT = TT.getParameter(tT.COPY_READ_BUFFER_BINDING),
        xT = TT.isEnabled(tT.RASTERIZER_DISCARD),
        IT = TT.createTransformFeedback(),
        AT = TT.createBuffer();
      eT.inProbe = !0;
      try {
        const KT = TT.getError();
        KT !== tT.NO_ERROR && dT(`GL error 0x${KT.toString(16)} pending before the decode probe (the renderer's)`), TT.useProgram(kT), TT.bindTransformFeedback(tT.TRANSFORM_FEEDBACK, IT), TT.bindBuffer(tT.TRANSFORM_FEEDBACK_BUFFER, AT), TT.bufferData(tT.TRANSFORM_FEEDBACK_BUFFER, 12 * cT, tT.STREAM_READ), TT.bindBufferBase(tT.TRANSFORM_FEEDBACK_BUFFER, 0, AT), TT.enable(tT.RASTERIZER_DISCARD), TT.beginTransformFeedback(tT.POINTS), lT(), TT.endTransformFeedback(), TT.bindBufferBase(tT.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const OT = TT.getError();
        if (OT !== tT.NO_ERROR) return dT(`${MT}: GL error 0x${OT.toString(16)} on the feedback draw`), null;
        const yT = new Float32Array(3 * cT);
        return TT.bindBuffer(tT.COPY_READ_BUFFER, AT), TT.getBufferSubData(tT.COPY_READ_BUFFER, 0, yT), yT
      } finally {
        xT || TT.disable(tT.RASTERIZER_DISCARD), TT.bindTransformFeedback(tT.TRANSFORM_FEEDBACK, OT), TT.bindBuffer(tT.TRANSFORM_FEEDBACK_BUFFER, yT), TT.bindBuffer(tT.COPY_READ_BUFFER, fT), TT.deleteTransformFeedback(IT), TT.deleteBuffer(AT), TT.useProgram(KT), eT.inProbe = !1
      }
    }

    function pT(TT, kT, cT, lT) {
      const MT = TT.getParameter(tT.COPY_READ_BUFFER_BINDING),
        KT = new Uint8Array(lT);
      return TT.bindBuffer(tT.COPY_READ_BUFFER, kT), TT.getBufferSubData(tT.COPY_READ_BUFFER, cT, KT), TT.bindBuffer(tT.COPY_READ_BUFFER, MT), KT
    }
    const iT = `#version 300 es\nlayout(location = ${NT}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      qT = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      sT = new WeakMap;

    function Tk(TT, kT, cT) {
      const lT = TT.getProgramParameter(kT, tT.ACTIVE_UNIFORMS),
        MT = TT.getParameter(tT.ACTIVE_TEXTURE);
      try {
        for (let MT = 0; MT < lT; MT++) {
          const lT = TT.getActiveUniform(kT, MT);
          if ((null === lT || void 0 === lT ? void 0 : lT.type) !== tT.UNSIGNED_INT_SAMPLER_2D) continue;
          const KT = TT.getUniformLocation(kT, lT.name),
            OT = KT ? TT.getUniform(kT, KT) : -1;
          if (OT < 0) continue;
          TT.activeTexture(tT.TEXTURE0 + OT);
          const yT = TT.getParameter(tT.TEXTURE_BINDING_2D);
          if (yT && HT.get(yT) === cT) return yT
        }
        return null
      } finally {
        TT.activeTexture(MT)
      }
    }

    function kk(TT, kT, cT, lT, MT) {
      const KT = new Uint32Array(4 * MT),
        OT = TT.getParameter(tT.READ_FRAMEBUFFER_BINDING),
        yT = TT.createFramebuffer();
      TT.bindFramebuffer(tT.READ_FRAMEBUFFER, yT), TT.framebufferTexture2D(tT.READ_FRAMEBUFFER, tT.COLOR_ATTACHMENT0, tT.TEXTURE_2D, kT, 0);
      try {
        let kT = 0;
        for (; kT < MT;) {
          const OT = lT + kT,
            yT = OT % cT,
            fT = Math.min(MT - kT, cT - yT);
          TT.readPixels(yT, Math.floor(OT / cT), fT, 1, tT.RGBA_INTEGER, tT.UNSIGNED_INT, KT.subarray(4 * kT, 4 * (kT + fT))), kT += fT
        }
      } finally {
        TT.bindFramebuffer(tT.READ_FRAMEBUFFER, OT), TT.deleteFramebuffer(yT)
      }
      return KT
    }

    function ck(TT, kT, cT) {
      let lT = 0,
        MT = 0;
      for (let fT = 0; fT < kT.bytes.length; fT += mT) {
        lT++;
        const TT = Math.min(fT + mT, kT.bytes.length);
        jT(kT.bytes.subarray(fT, TT)) !== jT(cT.subarray(fT, TT)) && MT++
      }
      const KT = `${TT} ${kT.bytes.length} B cpu ${jT(kT.bytes).toString(16)} gpu ${jT(cT).toString(16)}, ${MT}/${lT} blocks differ${kT.missed?`, ${kT.missed} GPU-side writes uncopied`:""}`;
      if (0 === MT) return KT;
      const {
        count: OT,
        offsets: yT
      } = function(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const lT = Math.min(TT.length, kT.length);
        let MT = Math.abs(TT.length - kT.length);
        const KT = [];
        for (let OT = 0; OT < lT; OT++) TT[OT] !== kT[OT] && (MT++, KT.length < cT && KT.push(OT));
        return {
          count: MT,
          offsets: KT
        }
      }(kT.bytes, cT);
      return LT([`${KT}: ${OT} bytes differ`, ...yT.map((TT => `  +${TT}: cpu ${vT(kT.bytes,TT)} | gpu ${vT(cT,TT)}`))].join("\n")), `${KT}: ${OT} bytes differ, first at ${yT.join(", ")} (context in the saved file)`
    }

    function lk(TT) {
      if (0 === TT.vertices.length) return void dT(`decode probe (${TT.reason}): no terrain draw probed (${TT.draws.length} seen)`);
      const kT = function(TT) {
          const kT = new Map;
          for (const lT of TT) {
            const TT = kT.get(lT.group);
            TT ? TT.push(lT) : kT.set(lT.group, [lT])
          }
          const cT = {
            vertices: TT.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [lT, MT] of kT) {
            const TT = new Map,
              kT = MT.map((kT => {
                const cT = IT(kT.record, kT.slot),
                  lT = [kT.gpu[0] - cT[0], kT.gpu[1] - cT[1], kT.gpu[2] - cT[2]],
                  MT = lT.map((TT => Math.round(64 * TT))).join(","),
                  KT = TT.get(MT);
                return KT ? KT.count++ : TT.set(MT, {
                  count: 1,
                  offset: lT
                }), cT
              }));
            let KT = [0, 0, 0],
              OT = 0;
            for (const cT of TT.values()) cT.count > OT && (OT = cT.count, KT = cT.offset);
            cT.translations.set(lT, KT), MT.forEach(((TT, lT) => {
              var MT;
              const OT = [kT[lT][0] + KT[0], kT[lT][1] + KT[1], kT[lT][2] + KT[2]];
              if (OT.every(((kT, cT) => {
                  return lT = TT.gpu[cT], MT = kT, Math.abs(lT - MT) <= Math.max(.001, 1e-6 * Math.abs(MT));
                  var lT, MT
                }))) return;
              cT.mismatches++, cT.byDirection[yT(TT.record[2])]++, cT.byDiagonal[fT(TT.record[2])]++;
              const xT = AT(TT.record);
              cT.byBand[xT] = (null !== (MT = cT.byBand[xT]) && void 0 !== MT ? MT : 0) + 1, cT.first.length < CT && cT.first.push({
                ...TT,
                expected: OT
              })
            }))
          }
          return cT
        }(TT.vertices),
        cT = kT.byDirection.map(((TT, kT) => TT ? `${OT[kT]} ${TT}` : "")).filter(Boolean).join(" "),
        lT = Object.entries(kT.byBand).map((TT => {
          let [kT, cT] = TT;
          return `${kT}: ${cT}`
        })).join(" ");
      if (dT(`decode probe (${TT.reason}): ${kT.mismatches}/${kT.vertices} vertices differ from the CPU decode over ${TT.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (kT.mismatches ? ` by direction [${cT}] diagonal [0: ${kT.byDiagonal[0]} 1: ${kT.byDiagonal[1]}] extent [${lT}]` : "")), TT.fed.records > 0 || TT.fed.failed > 0) {
        dT(`decode probe input: ${TT.fed.differing}/${TT.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (TT.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (TT.fed.failed ? `; the feed failed on ${TT.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const kT of TT.fed.first) dT(`  ${kT}`)
      }
      for (const MT of kT.first) {
        const [TT, kT, cT] = MT.record;
        dT(`  mismatch part ${MT.group} r0 ${TT.toString(16)} r1 ${kT.toString(16)} r2 ${cT.toString(16)} slot ${MT.slot} (${OT[yT(cT)]}): expected ${MT.expected.map(Kk).join(",")} gpu ${MT.gpu.map(Kk).join(",")}`)
      }
      LT(`decode probe translations: ${[...kT.translations].map((TT=>{let[kT,cT]=TT;return`${kT}: ${cT.map(Kk).join(",")}`})).join("; ")}`)
    }

    function Mk(TT) {
      return TT.toString(16)
    }

    function Kk(TT) {
      return Number.isInteger(TT) ? String(TT) : TT.toFixed(3)
    }

    function Ok(TT) {
      return null !== eT.pendingCheck ? Promise.resolve() : new Promise((kT => {
        let cT = !1;
        const lT = {
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
        eT.pendingCheck = lT;
        const MT = () => {
            eT.pendingCheck = null;
            try {
              ! function(TT) {
                dT(`draw ranges (${TT.reason}): ${TT.terrainDraws} terrain draws in the frame, the first ${TT.draws.length} here`);
                for (const kT of TT.draws) {
                  const TT = kT.qt.slice(0, 8).map((TT => {
                      let [kT, cT] = TT;
                      return `${kT}+${cT}`
                    })).join(" "),
                    cT = kT.qt.length > 8 ? ` (+${kT.qt.length-8} ranges)` : "";
                  dT(`  ${zT(kT.program)} ${kT.program.terrain} ${kT.call} ${TT}${cT} x${kT.instances}${kT.group>=0?` part ${kT.group} chunk ${kT.chunk}`:""} | ${kT.attributes.join(" | ")}`)
                }
              }(lT), lk(lT);
              lT.draws.some((TT => "undefined" !== typeof WebGL2RenderingContext && TT.gl instanceof WebGL2RenderingContext)) || 0 === lT.draws.length ? function(TT) {
                const kT = [],
                  cT = new Map;
                for (const lT of TT)
                  if ("undefined" !== typeof WebGL2RenderingContext && lT.gl instanceof WebGL2RenderingContext)
                    for (const TT of lT.pages) cT.set("buf" === TT.kind ? TT.buffer : TT.texture, {
                      page: TT,
                      gl: lT.gl
                    });
                for (const [lT, {
                    page: MT,
                    gl: KT
                  }] of cT) {
                  const TT = oT.get(lT);
                  if (!TT) {
                    kT.push(`${MT.kind}#${ET(lT)}: no CPU copy (${eT.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === MT.kind) {
                    kT.push(ck(`buf#${TT.id}`, TT, pT(KT, MT.buffer, 0, TT.bytes.length)));
                    continue
                  }
                  const cT = kk(KT, MT.texture, TT.width, 0, TT.width * TT.height),
                    OT = 16 === TT.texelBytes ? new Uint8Array(cT.buffer) : new Uint8Array(new Uint16Array(cT).buffer);
                  kT.push(ck(`tex#${TT.id} (${16===TT.texelBytes?"records":"light"})`, TT, OT))
                }
                for (const lT of kT) dT(`page readback ${lT}`)
              }(lT.draws) : dT("page readback: none on WebGL1 (no buffer readback)")
            } catch (TT) {
              dT(`check failed: ${String(TT)}`)
            }
            kT()
          },
          KT = () => {
            if (lT.draws.length > 0 && !cT) return cT = !0, void setTimeout(MT, 0);
            cT || requestAnimationFrame(KT)
          };
        requestAnimationFrame(KT), setTimeout((() => {
          cT || (cT = !0, MT())
        }), 5e3)
      }))
    }
    var yk = cT(4681);
    const fk = 20,
      xk = 24,
      Ik = Reflect.apply;

    function Ak(TT, kT, cT) {
      if (!TT) return;
      const lT = TT[kT];
      if ("function" === typeof lT) {
        const MT = cT(lT);
        TT[kT] = MT, (0, yk.u)(MT, lT)
      }
    }
    let Ck = !1;
    const jk = new WeakMap,
      vk = new WeakMap,
      tk = new WeakMap,
      hk = {
        gl: 0,
        lost: 0
      };
    let Nk = {
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
      Qk = {
        buffer: 0,
        texture: 0
      },
      Sk = 0;

    function Dk(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (TT instanceof ArrayBuffer) return new Uint8Array(TT, kT, cT || void 0);
      if (!ArrayBuffer.isView(TT)) return null;
      const lT = "BYTES_PER_ELEMENT" in TT ? TT.BYTES_PER_ELEMENT : 1,
        MT = TT.byteOffset + kT * lT,
        KT = cT ? cT * lT : TT.byteLength - kT * lT;
      return new Uint8Array(TT.buffer, MT, Math.max(0, KT))
    }

    function ak(TT, kT) {
      const cT = function(TT) {
        switch (TT) {
          case tT.ARRAY_BUFFER:
            return tT.ARRAY_BUFFER_BINDING;
          case tT.ELEMENT_ARRAY_BUFFER:
            return tT.ELEMENT_ARRAY_BUFFER_BINDING;
          case tT.COPY_READ_BUFFER:
            return tT.COPY_READ_BUFFER_BINDING;
          case tT.COPY_WRITE_BUFFER:
            return tT.COPY_WRITE_BUFFER_BINDING;
          case tT.UNIFORM_BUFFER:
            return tT.UNIFORM_BUFFER_BINDING;
          case tT.PIXEL_UNPACK_BUFFER:
            return tT.PIXEL_UNPACK_BUFFER_BINDING;
          case tT.TRANSFORM_FEEDBACK_BUFFER:
            return tT.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(kT);
      return cT ? TT.getParameter(cT) : null
    }

    function Fk(TT) {
      const kT = oT.get(TT);
      kT && (eT.shadowBytes -= kT.bytes.length, oT.delete(TT))
    }

    function rk(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      Fk(TT), eT.shadowBytes + kT > wT ? eT.uncopied++ : (eT.shadowBytes += kT, oT.set(TT, {
        id: ET(TT),
        bytes: new Uint8Array(kT),
        width: cT,
        height: lT,
        texelBytes: MT,
        missed: 0
      }))
    }

    function Pk(TT, kT) {
      for (const cT of ["deleteBuffer", "deleteTexture"]) Ak(TT, cT, (TT => function() {
        for (var kT = arguments.length, cT = new Array(kT), lT = 0; lT < kT; lT++) cT[lT] = arguments[lT];
        return cT[0] && Fk(cT[0]), Ik(TT, this, cT)
      }));
      Ak(TT, "shaderSource", (TT => function() {
        for (var kT = arguments.length, cT = new Array(kT), lT = 0; lT < kT; lT++) cT[lT] = arguments[lT];
        return cT[0] && "string" === typeof cT[1] && jk.set(cT[0], cT[1]), Ik(TT, this, cT)
      })), Ak(TT, "attachShader", (TT => function() {
        for (var kT, cT = arguments.length, lT = new Array(cT), MT = 0; MT < cT; MT++) lT[MT] = arguments[MT];
        const KT = lT[0],
          OT = null !== (kT = vk.get(KT)) && void 0 !== kT ? kT : [];
        return OT.push(lT[1]), vk.set(KT, OT), Ik(TT, this, lT)
      })), Ak(TT, "linkProgram", (TT => function() {
        for (var kT = arguments.length, cT = new Array(kT), lT = 0; lT < kT; lT++) cT[lT] = arguments[lT];
        const MT = Ik(TT, this, cT);
        return eT.inProbe || function(TT, kT) {
          var cT, lT, MT;
          "undefined" !== typeof HTMLCanvasElement && TT.canvas instanceof HTMLCanvasElement && function(TT) {
            if (Hk.has(TT)) return;
            Hk.add(TT);
            for (const kT of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) TT.addEventListener(kT, (TT => {
              hk.lost < fk && (hk.lost++, dT(`${kT}${"statusMessage"in TT?`: ${String(TT.statusMessage)}`:""}`))
            }))
          }(TT.canvas);
          eT.context ??= TT;
          const KT = null !== (cT = vk.get(kT)) && void 0 !== cT ? cT : [];
          let OT = "",
            yT = "";
          for (const IT of KT) {
            var fT;
            const TT = null !== (fT = jk.get(IT)) && void 0 !== fT ? fT : "";
            /\bgl_Position\b/.test(TT) ? OT = TT : yT = TT
          }
          const xT = {
            id: ET(kT),
            name: null !== (lT = null === (MT = bT.exec(OT)) || void 0 === MT ? void 0 : MT[1]) && void 0 !== lT ? lT : null,
            gl: TT,
            vertex: OT,
            fragment: yT,
            terrain: mk(OT),
            checked: !1,
            firstDraw: !1
          };
          if (tk.set(kT, xT), JT.push([kT, xT]), null !== xT.terrain) {
            const kT = KT.map((kT => {
              var cT;
              return null !== (cT = TT.getShaderInfoLog(kT)) && void 0 !== cT ? cT : ""
            })).filter((TT => "" !== TT.trim()));
            kT.length > 0 && LT(`program ${zT(xT)} (${xT.terrain}) shader logs:\n${RT(kT.join("\n"))}`)
          }
        }(this, cT[0]), MT
      })), Ak(TT, "bufferData", (TT => function() {
        for (var kT = arguments.length, cT = new Array(kT), lT = 0; lT < kT; lT++) cT[lT] = arguments[lT];
        const MT = Ik(TT, this, cT);
        if (!eT.inProbe) {
          const TT = ak(this, cT[0]);
          if (TT) {
            var KT, OT, yT;
            const kT = "number" === typeof cT[1] ? null : Dk(cT[1], null !== (KT = cT[3]) && void 0 !== KT ? KT : 0, null !== (OT = cT[4]) && void 0 !== OT ? OT : 0);
            var fT;
            if (rk(TT, "number" === typeof cT[1] ? cT[1] : null !== (yT = null === kT || void 0 === kT ? void 0 : kT.length) && void 0 !== yT ? yT : 0), kT) null === (fT = oT.get(TT)) || void 0 === fT || fT.bytes.set(kT)
          }
        }
        return MT
      })), Ak(TT, "bufferSubData", (TT => function() {
        for (var kT = arguments.length, cT = new Array(kT), lT = 0; lT < kT; lT++) cT[lT] = arguments[lT];
        const MT = Ik(TT, this, cT);
        if (!eT.inProbe) {
          var KT, OT;
          const TT = ak(this, cT[0]),
            kT = TT ? oT.get(TT) : void 0,
            lT = Dk(cT[2], null !== (KT = cT[3]) && void 0 !== KT ? KT : 0, null !== (OT = cT[4]) && void 0 !== OT ? OT : 0);
          if (kT && lT) {
            const TT = cT[1];
            kT.bytes.set(lT.subarray(0, Math.max(0, kT.bytes.length - TT)), TT), wk("buffer", kT, TT, lT.length)
          }
        }
        return MT
      })), kT && (Ak(TT, "copyBufferSubData", (TT => function() {
        for (var kT = arguments.length, cT = new Array(kT), lT = 0; lT < kT; lT++) cT[lT] = arguments[lT];
        const MT = Ik(TT, this, cT);
        if (!eT.inProbe) {
          const [TT, kT, lT, MT, KT] = cT, OT = ak(this, TT), yT = ak(this, kT), fT = OT ? oT.get(OT) : void 0, xT = yT ? oT.get(yT) : void 0;
          xT && (fT ? xT.bytes.set(fT.bytes.slice(lT, lT + KT), MT) : xT.missed++)
        }
        return MT
      })), Ak(TT, "texStorage2D", (TT => function() {
        for (var kT = arguments.length, cT = new Array(kT), lT = 0; lT < kT; lT++) cT[lT] = arguments[lT];
        const MT = Ik(TT, this, cT),
          [, , KT, OT, yT] = cT;
        if (!eT.inProbe && (KT === tT.RGBA32UI || KT === tT.RGBA16UI)) {
          const TT = this.getParameter(tT.TEXTURE_BINDING_2D),
            kT = KT === tT.RGBA32UI ? 16 : 8;
          TT && (HT.set(TT, kT), rk(TT, OT * yT * kT, OT, yT, kT))
        }
        return MT
      })), Ak(TT, "texSubImage2D", (TT => function() {
        for (var kT = arguments.length, cT = new Array(kT), lT = 0; lT < kT; lT++) cT[lT] = arguments[lT];
        const MT = Ik(TT, this, cT);
        return !eT.inProbe && cT.length >= 9 && cT[0] === tT.TEXTURE_2D && 0 === cT[1] && function(TT, kT) {
          var cT;
          const lT = TT.getParameter(tT.TEXTURE_BINDING_2D),
            MT = lT ? oT.get(lT) : void 0;
          if (!MT) return;
          const [, , KT, OT, yT, fT] = kT;
          let xT = Dk(kT[8], null !== (cT = kT[9]) && void 0 !== cT ? cT : 0);
          if (null === xT && "number" === typeof kT[8]) {
            const cT = ak(TT, tT.PIXEL_UNPACK_BUFFER),
              lT = cT ? oT.get(cT) : void 0;
            xT = lT ? lT.bytes.subarray(kT[8]) : null
          }
          if (null === xT) return void MT.missed++;
          const IT = TT.getParameter(tT.UNPACK_ROW_LENGTH) || yT,
            AT = TT.getParameter(tT.UNPACK_SKIP_ROWS),
            CT = TT.getParameter(tT.UNPACK_SKIP_PIXELS),
            jT = MT.texelBytes;
          for (let vT = 0; vT < fT; vT++) {
            const TT = ((AT + vT) * IT + CT) * jT,
              kT = ((OT + vT) * MT.width + KT) * jT;
            MT.bytes.set(xT.subarray(TT, TT + yT * jT), kT)
          }
          wk("texture", MT, (OT * MT.width + KT) * jT, yT * fT * jT)
        }(this, cT), MT
      })), Ak(TT, "copyTexSubImage2D", (TT => function() {
        for (var kT = arguments.length, cT = new Array(kT), lT = 0; lT < kT; lT++) cT[lT] = arguments[lT];
        const MT = cT[0] === tT.TEXTURE_2D ? this.getParameter(tT.TEXTURE_BINDING_2D) : null,
          KT = MT ? oT.get(MT) : void 0;
        return KT && KT.missed++, Ik(TT, this, cT)
      })));
      for (const cT of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) Ak(TT, cT, (TT => function() {
        for (var kT = arguments.length, lT = new Array(kT), MT = 0; MT < kT; MT++) lT[MT] = arguments[MT];
        const KT = Ik(TT, this, lT);
        return eT.inProbe || zk(this, cT, lT), KT
      }));
      Ak(TT, "getExtension", (TT => function() {
        for (var kT = arguments.length, cT = new Array(kT), lT = 0; lT < kT; lT++) cT[lT] = arguments[lT];
        const MT = Ik(TT, this, cT);
        return MT && "object" === typeof MT && function(TT, kT, cT) {
          const lT = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(kT in lT) || cT.bloxdRenderDebug) return;
          cT.bloxdRenderDebug = !0;
          for (const MT of lT[kT]) {
            const kT = cT[MT];
            "function" === typeof kT && (cT[MT] = function() {
              for (var lT = arguments.length, KT = new Array(lT), OT = 0; OT < lT; OT++) KT[OT] = arguments[OT];
              const yT = Ik(kT, cT, KT);
              return eT.inProbe || zk(TT, MT, KT), yT
            })
          }
        }(this, cT[0], MT), MT
      }))
    }

    function wk(TT, kT, cT, lT) {
      Qk[TT] += lT, Sk < 32 && kT.bytes.length >= 1 << 20 && (Sk++, LT(`upload ${TT} #${kT.id} +${cT} ${lT} B`))
    }

    function mk(TT) {
      if (!TT.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(TT) || /in uvec3 _p2vs_location0\b/.test(TT) ? "inst" : "tex"
    }

    function bk(TT, kT, cT) {
      var lT;
      if (cT.checked) return;
      cT.checked = !0;
      const MT = TT.getProgramParameter(kT, tT.LINK_STATUS),
        KT = (null !== (lT = TT.getProgramInfoLog(kT)) && void 0 !== lT ? lT : "").trim();
      var OT;
      null === cT.terrain && MT || (dT(`program ${zT(cT)} ${null!==(OT=cT.terrain)&&void 0!==OT?OT:"other"} link ${MT?"ok":"FAILED"}${KT?`: ${RT(KT,300)}`:""}`), KT && LT(`program ${zT(cT)} link log:\n${RT(KT)}`))
    }

    function zk(TT, kT, cT) {
      var lT;
      const MT = TT.getParameter(tT.CURRENT_PROGRAM),
        KT = MT ? tk.get(MT) : void 0;
      if (!MT || !KT) return;
      const OT = null !== (lT = KT.terrain) && void 0 !== lT ? lT : "other",
        {
          qt: yT,
          instances: fT
        } = function(TT, kT) {
          switch (TT) {
            case "drawArrays":
              return {
                qt: [
                  [kT[1], kT[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                qt: [
                  [kT[1], kT[2]]
                ], instances: kT[3]
              };
            case "drawElements":
              return {
                qt: [
                  [0, kT[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                qt: [
                  [0, kT[1]]
                ], instances: kT[4]
              };
            case "multiDrawArraysWEBGL": {
              const TT = kT[1],
                cT = kT[3],
                lT = kT[2],
                MT = kT[4],
                KT = [];
              for (let OT = 0; OT < kT[5]; OT++) KT.push([TT[lT + OT], cT[MT + OT]]);
              return {
                qt: KT,
                instances: 1
              }
            }
            default:
              return {
                qt: [], instances: 0
              }
          }
        }(kT, cT),
        xT = "inst" === KT.terrain ? fT : yT.reduce(((TT, kT) => {
          let [, cT] = kT;
          return TT + cT
        }), 0) / 6;
      if (Nk[OT].draws++, Nk[OT].faces += xT, null === KT.terrain) return;
      if (eT.context = TT, !KT.firstDraw) {
        KT.firstDraw = !0, bk(TT, MT, KT), Jk || (Jk = !0, dT(function(TT) {
          var kT;
          const cT = TT.getParameter(tT.DEPTH_FUNC),
            lT = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let MT = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in TT && TT.getParameter(tT.DRAW_FRAMEBUFFER_BINDING)) {
            const kT = TT;
            MT = kT.getFramebufferAttachmentParameter(tT.DRAW_FRAMEBUFFER, tT.DEPTH_ATTACHMENT, tT.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(kT.getFramebufferAttachmentParameter(tT.DRAW_FRAMEBUFFER,tT.DEPTH_ATTACHMENT,tT.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(kT.getFramebufferAttachmentParameter(tT.DRAW_FRAMEBUFFER,tT.DEPTH_ATTACHMENT,tT.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const KT = TT.getParameter(tT.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(kT=lT[cT])&&void 0!==kT?kT:`0x${cT.toString(16)}`} clear ${KT}${516===cT||518===cT?" (reverse-Z)":""}, samples ${String(TT.getParameter(tT.SAMPLES))}, ${MT}`
        }(TT)));
        const cT = TT.getError();
        cT !== tT.NO_ERROR && hk.gl < fk && (hk.gl++, dT(`GL error 0x${cT.toString(16)} after program ${zT(KT)}'s first terrain draw (${kT})`))
      }
      const IT = eT.pendingCheck;
      null !== IT && (IT.terrainDraws++, IT.draws.length < xk && gT(TT, MT, KT, kT, yT, fT))
    }
    let Jk = !1;
    const Hk = new WeakSet;
    var ek = cT(4491),
      Gk = cT(4688);
    const Vk = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let Ek = !1;
    const Zk = new WeakSet,
      uk = new WeakMap,
      Xk = new WeakMap,
      dk = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let Lk = 0,
      Rk = !1,
      gk = null,
      Uk = {
        draws: 0,
        faces: 0
      };

    function Yk(TT) {
      const kT = globalThis[TT];
      return null === kT || void 0 === kT ? void 0 : kT.prototype
    }

    function Bk(TT) {
      return TT && "function" === typeof TT[Symbol.iterator] ? [...TT].sort().join(" ") : ""
    }

    function Wk(TT, kT) {
      const cT = null !== TT && void 0 !== TT ? TT : {},
        lT = null !== kT && void 0 !== kT ? kT : Object.keys(Object.getPrototypeOf(cT)).concat(Object.keys(cT));
      return [...new Set(lT)].filter((TT => "number" === typeof cT[TT])).map((TT => `${TT} ${String(cT[TT])}`)).join(", ")
    }

    function nk(TT, kT) {
      var cT;
      const lT = null !== (cT = kT.vertex) && void 0 !== cT ? cT : {};
      if (lT.module && Zk.has(lT.module)) {
        var MT;
        const cT = String(null !== (MT = lT.entryPoint) && void 0 !== MT ? MT : "");
        if (cT.startsWith("vs_packed") && uk.set(TT, cT), !Rk) {
          var KT, OT, yT, fT, xT;
          Rk = !0;
          const TT = null !== (KT = kT.depthStencil) && void 0 !== KT ? KT : {},
            lT = null !== (OT = kT.multisample) && void 0 !== OT ? OT : {},
            MT = String(null !== (yT = TT.depthCompare) && void 0 !== yT ? yT : "");
          dT(`WebGPU terrain pipeline ${cT}: depth ${String(null!==(fT=TT.format)&&void 0!==fT?fT:"none")} ${MT}${MT.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(xT=lT.count)&&void 0!==xT?xT:1)}`)
        }
      }
    }

    function pk(TT) {
      Ak(TT, "setPipeline", (TT => function() {
        for (var kT = arguments.length, cT = new Array(kT), lT = 0; lT < kT; lT++) cT[lT] = arguments[lT];
        return Xk.set(this, cT[0]), Ik(TT, this, cT)
      }));
      for (const kT of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) Ak(TT, kT, (TT => function() {
        const cT = Xk.get(this),
          lT = cT ? uk.get(cT) : void 0;
        for (var MT = arguments.length, KT = new Array(MT), OT = 0; OT < MT; OT++) KT[OT] = arguments[OT];
        return void 0 !== lT && ik(kT, lT, KT), Ik(TT, this, KT)
      }))
    }

    function ik(TT, kT, cT) {
      var lT;
      (Uk.draws++, "draw" === TT || "drawIndexed" === TT) && (Uk.faces += cT[0] * (null !== (lT = cT[1]) && void 0 !== lT ? lT : 1) / 6);
      if (null !== gk && gk.length < xk) {
        const lT = ("draw" === TT ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === TT ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((kT, lT) => {
          const MT = TT.endsWith("Indirect") ? cT[1] : cT[lT];
          return `${kT} ${String(null!==MT&&void 0!==MT?MT:"instances"===kT?1:0)}`
        }));
        gk.push(`  ${kT} ${TT} ${lT.join(" ")}`)
      }
    }

    function qk() {
      if (Ek || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      Ek = !0, Ak(Yk("GPU"), "requestAdapter", (TT => function() {
        for (var kT = arguments.length, cT = new Array(kT), lT = 0; lT < kT; lT++) cT[lT] = arguments[lT];
        return Ik(TT, this, cT).then((TT => {
          var kT;
          TT ? function(TT) {
            var kT;
            const cT = null !== (kT = TT.info) && void 0 !== kT ? kT : {};
            dT(`WebGPU adapter ${["vendor","architecture","device","description"].map((TT=>{var kT;return`${TT} "${String(null!==(kT=cT[TT])&&void 0!==kT?kT:"")}"`})).join(" ")}${TT.isFallbackAdapter?" (fallback)":""}`), dT(`WebGPU adapter features ${Bk(TT.features)}`), dT(`WebGPU adapter limits ${Wk(TT.limits,Vk)}`), LT(`WebGPU adapter all limits ${Wk(TT.limits,null)}`)
          }(TT) : dT(`WebGPU requestAdapter(${JSON.stringify(null!==(kT=cT[0])&&void 0!==kT?kT:{})}) gave none`);
          return TT
        }))
      })), Ak(Yk("GPUAdapter"), "requestDevice", (TT => function() {
        for (var kT = arguments.length, cT = new Array(kT), lT = 0; lT < kT; lT++) cT[lT] = arguments[lT];
        return Ik(TT, this, cT).then((TT => (function(TT) {
          dT(`WebGPU device features ${Bk(TT.features)}`), dT(`WebGPU device limits ${Wk(TT.limits,Vk)}`), TT.addEventListener("uncapturederror", (TT => {
            if (dk.uncaptured < fk) {
              var kT, cT, lT;
              dk.uncaptured++;
              const MT = TT.error;
              dT(`WebGPU uncaptured ${null!==(kT=null===MT||void 0===MT||null===(cT=MT.constructor)||void 0===cT?void 0:cT.name)&&void 0!==kT?kT:"error"}: ${RT(String(null!==(lT=null===MT||void 0===MT?void 0:MT.message)&&void 0!==lT?lT:""),600)}`)
            }
          }));
          const kT = TT.lost;
          null === kT || void 0 === kT || kT.then((TT => {
            var kT;
            dT(`WebGPU device lost (${String(TT.reason)}): ${RT(String(null!==(kT=TT.message)&&void 0!==kT?kT:""),600)}`)
          }))
        }(TT), TT)), (TT => {
          throw dT(`WebGPU requestDevice failed: ${String(TT)}`), TT
        }))
      }));
      const TT = Yk("GPUDevice");
      Ak(TT, "createShaderModule", (TT => function() {
        for (var kT, cT, lT = arguments.length, MT = new Array(lT), KT = 0; KT < lT; KT++) MT[KT] = arguments[KT];
        const OT = Ik(TT, this, MT);
        return function(TT, kT) {
          const cT = kT.includes("decodeQuad");
          cT && Zk.add(TT);
          const lT = TT.getCompilationInfo;
          null === lT || void 0 === lT || lT.call(TT).then((TT => {
            if (0 === TT.messages.length && !cT) return;
            const kT = {};
            for (const cT of TT.messages) {
              var lT;
              kT[String(cT.type)] = (null !== (lT = kT[String(cT.type)]) && void 0 !== lT ? lT : 0) + 1
            }
            const MT = TT.messages.map((TT => `${String(TT.type)} ${String(TT.lineNum)}:${String(TT.linePos)} ${String(TT.message)}`)).join("\n");
            dk.compile < fk && (dk.compile++, dT(`WebGPU ${cT?"terrain ":""}shader module compiled: ${JSON.stringify(kT)}${MT?` first: ${RT(MT.split("\n")[0],300)}`:""}`)), MT && LT(`WebGPU shader module messages:\n${RT(MT)}`)
          }))
        }(OT, String(null !== (kT = (null !== (cT = MT[0]) && void 0 !== cT ? cT : {}).code) && void 0 !== kT ? kT : "")), OT
      })), Ak(TT, "createRenderPipeline", (TT => function() {
        for (var kT, cT = arguments.length, lT = new Array(cT), MT = 0; MT < cT; MT++) lT[MT] = arguments[MT];
        const KT = Ik(TT, this, lT);
        return nk(KT, null !== (kT = lT[0]) && void 0 !== kT ? kT : {}), KT
      })), Ak(TT, "createRenderPipelineAsync", (TT => function() {
        for (var kT = arguments.length, cT = new Array(kT), lT = 0; lT < kT; lT++) cT[lT] = arguments[lT];
        return Ik(TT, this, cT).then((TT => {
          var kT;
          return nk(TT, null !== (kT = cT[0]) && void 0 !== kT ? kT : {}), TT
        }), (TT => {
          var kT;
          throw function(TT, kT) {
            var cT, lT, MT;
            if (dk.rejected >= fk) return;
            dk.rejected++;
            const {
              reason: KT,
              message: OT
            } = null !== kT && void 0 !== kT ? kT : {}, yT = String(null !== (cT = (null !== (lT = TT.vertex) && void 0 !== lT ? lT : {}).entryPoint) && void 0 !== cT ? cT : "");
            dT(`WebGPU pipeline "${String(null!==(MT=TT.label)&&void 0!==MT?MT:"")}" ${yT} rejected (${String(null!==KT&&void 0!==KT?KT:"no reason")}): ${RT(String(null!==OT&&void 0!==OT?OT:kT),600)}`)
          }(null !== (kT = cT[0]) && void 0 !== kT ? kT : {}, TT), TT
        }))
      })), Ak(Yk("GPUCanvasContext"), "configure", (TT => function() {
        for (var kT, cT = arguments.length, lT = new Array(cT), MT = 0; MT < cT; MT++) lT[MT] = arguments[MT];
        const KT = null !== (kT = lT[0]) && void 0 !== kT ? kT : {};
        var OT, yT;
        Lk++ < 3 && dT(`WebGPU canvas ${String(KT.format)} ${String(null!==(OT=KT.colorSpace)&&void 0!==OT?OT:"srgb")} alpha ${String(null!==(yT=KT.alphaMode)&&void 0!==yT?yT:"opaque")}`);
        return Ik(TT, this, lT)
      })), pk(Yk("GPURenderPassEncoder")), pk(Yk("GPURenderBundleEncoder"))
    }
    const sk = 1e4,
      Tc = 6e4,
      kc = 5e3,
      cc = 3e3,
      lc = 100;
    let Mc = null,
      Kc = !1,
      Oc = {
        ...ek.c
      },
      yc = !1,
      fc = null,
      xc = 0,
      Ic = () => {};
    const Ac = new Promise((TT => {
      Ic = TT
    }));

    function Cc() {
      var TT;
      Kc || (Kc = !0, Oc = Object.assign(window.bloxdRenderDebug ??= {
        ...ek.c
      }, {
        faceCull: "0" === (0, KT.m)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (TT = (0, KT.m)("adrenoProbe")) && void 0 !== TT ? TT : ""
      }), dT("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), Ck || "undefined" === typeof window || (Ck = !0, "undefined" !== typeof WebGL2RenderingContext && Pk(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && Pk(WebGLRenderingContext.prototype, !1)), qk(), (0, KT.e)("renderProbe", (() => {
        Qc("console")
      })), hc(), setInterval(Dc, kc))
    }

    function jc(TT) {
      var kT, cT;
      Cc(), Mc = null !== (kT = null === TT || void 0 === TT ? void 0 : TT.backend) && void 0 !== kT ? kT : null;
      const lT = `, renderer param ${null!==(cT=(0,KT.m)("renderer"))&&void 0!==cT?cT:"none"}, faceCull ${"0"===Oc.faceCull?"off (whole parts)":"on"}, adrenoProbe ${Oc.adrenoProbe||"none"}`;
      dT(`${(0,Gk.e)(TT)}${null===TT?"":lT}`)
    }

    function vc() {
      const TT = performance.now(),
        kT = tc(Ac, sk, Tc).then((kT => Qc(`${Math.round((performance.now()-TT)/1e3)} s after playable${kT?"":", no terrain drawn yet"}`)));
      (0, MT.c)(dT, (async () => {
        await kT, await fc
      }))
    }
    async function tc(TT, kT, cT) {
      const MT = (0, lT.e)(cT).then((() => !1));
      return await (0, lT.e)(kT), Promise.race([TT.then((() => !0)), MT])
    }

    function hc() {
      requestAnimationFrame((() => {
        xc++, hc()
      }))
    }

    function Nc() {
      var TT, kT, cT;
      if (yc) return;
      (yc = !0, dT(`renderer caps ${null!==(TT=Oc.caps)&&void 0!==TT?TT:"(not noted)"}; terrain fetch ${null!==(kT=Oc.fetch)&&void 0!==kT?kT:"(not noted)"}`), Oc.adrenoProbe) && dT(`adrenoProbe ${Oc.adrenoProbe} asked; in force (storage fetch only): ${null!==(cT=Oc.probe)&&void 0!==cT?cT:"(not noted)"}`);
      const lT = eT.context;
      if (lT) {
        for (const TT of function(TT) {
            var kT;
            const cT = [],
              lT = TT.getExtension("WEBGL_debug_renderer_info"),
              MT = lT ? TT.getParameter(lT.UNMASKED_VENDOR_WEBGL) : "(masked)",
              KT = lT ? TT.getParameter(lT.UNMASKED_RENDERER_WEBGL) : "(masked)";
            cT.push(`GL ${String(TT.getParameter(TT.VERSION))} | ${String(TT.getParameter(TT.SHADING_LANGUAGE_VERSION))} | ${String(TT.getParameter(TT.VENDOR))} / ${String(TT.getParameter(TT.RENDERER))}`), cT.push(`GL unmasked ${MT} / ${KT}`);
            const OT = [
              ["MAX_TEXTURE_SIZE", TT.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", TT.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", TT.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", TT.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", TT.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", TT.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", TT.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in TT && OT.push(["MAX_UNIFORM_BLOCK_SIZE", TT.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", TT.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", TT.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", TT.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), cT.push(`GL limits ${OT.map((kT=>{let[cT,lT]=kT;return`${cT} ${String(TT.getParameter(lT))}`})).join(", ")}`);
            const yT = (kT, cT) => {
              const lT = TT.getShaderPrecisionFormat(kT, TT.HIGH_FLOAT),
                MT = TT.getShaderPrecisionFormat(kT, TT.HIGH_INT);
              return `${cT} highp float ${lT?`${lT.rangeMin}/${lT.rangeMax}/${lT.precision}`:"?"} int ${MT?`${MT.rangeMin}/${MT.rangeMax}/${MT.precision}`:"?"}`
            };
            cT.push(`GL precision ${yT(TT.VERTEX_SHADER,"VS")}, ${yT(TT.FRAGMENT_SHADER,"FS")}`);
            const fT = TT.getContextAttributes();
            return cT.push(`GL context ${JSON.stringify(fT)} drawingBuffer ${TT.drawingBufferWidth}x${TT.drawingBufferHeight}${"drawingBufferFormat"in TT?` format 0x${Number(TT.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in TT?` ${String(TT.drawingBufferColorSpace)}`:""}`), cT.push(`GL extensions ${(null!==(kT=TT.getSupportedExtensions())&&void 0!==kT?kT:[]).join(" ")}`), cT
          }(lT)) dT(TT);
        ! function() {
          if (!eT.context) return;
          let TT = 0,
            kT = 0;
          for (const [cT, lT] of JT) !lT.gl.isContextLost() && lT.gl.isProgram(cT) && (kT++, bk(lT.gl, cT, lT), null !== lT.terrain && TT++);
          dT(`programs: ${kT} live of ${JT.length} linked, ${TT} packed terrain; CPU page copies ${Math.round(eT.shadowBytes/1048576)} MiB (${eT.uncopied} over budget)`)
        }()
      }
    }

    function Qc(TT) {
      return fc ??= async function(TT) {
        Nc(), "webgpu" === Mc ? (Sc(), "1" === Oc.slotCheck && dT("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), Oc.slotCheck = "1", await
          function(TT) {
            if (null !== gk) return Promise.resolve();
            const kT = [];
            return gk = kT, new Promise((cT => {
              setTimeout((() => {
                gk = null, dT(`WebGPU draw ranges (${TT}): ${kT.length} terrain draws recorded in a second (first ${xk}; bundles replay without new ones)`);
                for (const TT of kT) dT(TT);
                cT()
              }), 1e3)
            }))
          }(TT), await async function() {
            if (await (0, ek.h)(Oc, "slotCheck", ["1"], cc, lc), "1" === Oc.slotCheck) return void dT(`slot check: no answer in ${cc} ms (only the storage fetch has one; a later answer logs on its own)`);
            Sc()
          }()) : await Ok(TT);
        dT(`check (${TT}) done: bloxdDebug.save() downloads it all`)
      }(TT).catch((kT => {
        dT(`check (${TT}) failed: ${String(kT)}`)
      })).finally((() => {
        fc = null
      })), fc
    }

    function Sc() {
      void 0 !== Oc.slotCheck && "1" !== Oc.slotCheck && (dT(Oc.slotCheck), delete Oc.slotCheck)
    }

    function Dc() {
      const TT = TT => xc ? (TT / xc).toFixed(1) : "0",
        kT = function() {
          const TT = Uk;
          return Uk = {
            draws: 0,
            faces: 0
          }, TT
        }(),
        cT = function() {
          const TT = Nk;
          return Nk = {
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
        lT = function() {
          const TT = Qk;
          return Qk = {
            buffer: 0,
            texture: 0
          }, TT
        }();
      Sc(), ("webgpu" === Mc ? kT.draws : cT.inst.draws + cT.tex.draws) > 0 && Ic();
      const MT = "webgpu" === Mc ? [`terrain ${TT(kT.draws)} draws ${TT(kT.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((TT => cT[TT].draws > 0)).map((kT => `${kT} ${TT(cT[kT].draws)} draws ${TT(cT[kT].faces)} faces a frame`));
      dT(`${xc} frames: ${MT.join(", ")||"no draws"}; uploaded ${Math.round(lT.buffer/1024)} KiB to buffers, ${Math.round(lT.texture/1024)} KiB to data textures`), xc = 0
    }
  },
  4688: (TT, kT, cT) => {
    function lT(TT) {
      if (null === TT) return "backend: none picked (no renderer build)";
      const kT = TT.adapter ? `${TT.adapter.vendor}/${TT.adapter.architecture}` : "none";
      return `backend ${TT.backend}: reason ${TT.reason}, source ${TT.source}, adapter ${kT}`
    }
    cT.d(kT, {
      e: () => lT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);