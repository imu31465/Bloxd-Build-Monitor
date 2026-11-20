export const id = 47;
export const ids = [47];
export const modules = {
  4347: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => cU
    });
    var tU = gU(21),
      pU = gU(24),
      EU = gU(1287),
      PU = gU(2624);
    const TU = 3e4,
      qU = 1e3;

    function KU() {
      return "visible" === document.visibilityState && "inGame" === tU.b.get("gameState") && (0, EU.r)()
    }

    function cU(UU, RU) {
      (0, PU.n)() || function(UU, RU, gU) {
        let tU = 0;
        const pU = setInterval((() => {
          RU() && (tU += qU, tU >= UU && (clearInterval(pU), gU()))
        }), qU)
      }(TU, KU, (() => {
        RU().then((() => {
          UU(`saved for the player after ${TU/1e3} s of play`), (0, PU.t)(), pU.p.yh("chat", {
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
  4345: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      installRenderDebug: () => Gg,
      renderDebugPlayable: () => ug,
      startRenderDebug: () => jg,
      waitForDraw: () => Cg
    });
    var tU = gU(1698),
      pU = gU(4347),
      EU = gU(2624);
    const PU = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function TU(UU) {
      return 7 & UU
    }

    function qU(UU) {
      return UU >>> 11 & 1
    }

    function KU(UU) {
      return [1 + (UU >>> 18 & 63), 1 + (UU >>> 24 & 63)]
    }

    function cU(UU, RU) {
      const [gU, , tU] = UU, pU = TU(tU), EU = function(UU, RU, gU) {
        return RU + (1 === (22 >>> UU & 1) ? 4 - gU : gU) & 3
      }(pU, qU(tU), RU), PU = pU >>> 1, [cU, GU] = KU(gU), jU = 1 === EU || 2 === EU ? cU : 0, uU = EU >= 2 ? GU : 0, CU = [63 & gU, gU >>> 6 & 63, gU >>> 12 & 63];
      return CU[2 === PU ? 0 : 2] += jU, CU[1 === PU ? 0 : 1] += uU, CU
    }

    function GU(UU) {
      const RU = Math.max(...KU(UU[0]));
      return 1 === RU ? "1" : RU <= 4 ? "2-4" : RU <= 16 ? "5-16" : "17-64"
    }
    const jU = 16;

    function uU(UU) {
      let RU = 2166136261;
      for (let gU = 0; gU < UU.length; gU++) RU = Math.imul(RU ^ UU[gU], 16777619);
      return RU >>> 0
    }

    function CU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const tU = Math.max(0, RU - gU),
        pU = Math.min(UU.length, RU + gU),
        EU = [];
      for (let PU = tU; PU < pU; PU++) {
        const gU = UU[PU].toString(16).padStart(2, "0");
        EU.push(PU === RU ? `[${gU}]` : gU)
      }
      return EU.join(" ")
    }
    const hU = {
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
      QU = "_vs2fs_location0",
      eU = 0,
      WU = 4,
      fU = 6,
      xU = [0, 1, 2, 0, 2, 3],
      mU = 2048,
      IU = 4,
      JU = 256,
      wU = 64,
      nU = 268435456,
      bU = 65536,
      oU = /^#version [^\n]*\/\/ program (\S+)$/m;

    function ZU(UU) {
      return null === UU.name ? `#${UU.id}` : `#${UU.id} ${UU.name}`
    }
    const aU = [],
      YU = new WeakMap,
      BU = new WeakMap,
      VU = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let rU = 1;
    const XU = new WeakMap;

    function vU(UU) {
      if (null === UU) return 0;
      let RU = XU.get(UU);
      return void 0 === RU && (RU = rU++, XU.set(UU, RU)), RU
    }
    class dU {
      constructor(UU, RU) {
        this.print = UU, this.now = RU, this.shown = 0, this.WT = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.xu = [], this.dropped = 0
      }
      line(UU) {
        const RU = this.now();
        if (RU - this.second >= 1e3 && (this.second = RU, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.WT++, void this.store(UU);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${UU} (the last line here: the rest go to bloxdDebug.save())` : UU)
      }
      keep(UU) {
        this.sections++, this.store(UU)
      }
      store(UU) {
        this.xu.push(`${new Date(Date.now()).toISOString()} ${UU}`), this.xu.length > 2e4 && (this.xu.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.WT} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.xu].join("\n")
      }
    }
    let HU = null;

    function SU() {
      if (null === HU) {
        const UU = new dU((UU => {
          (0, EU.h)("render", UU)
        }), (() => performance.now()));
        (0, EU.g)("render", (() => UU.dump())), HU = UU
      }
      return HU
    }

    function sU(UU) {
      SU().line(UU)
    }

    function yU(UU) {
      SU().keep(UU)
    }

    function kU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return UU.length <= RU ? UU : `${UU.slice(0,RU)}... (${UU.length-RU} more characters)`
    }

    function FU(UU, RU, gU, tU, pU, EU) {
      const PU = VU.pendingCheck;
      if (null === PU) return;
      const TU = "undefined" !== typeof WebGL2RenderingContext && UU instanceof WebGL2RenderingContext,
        qU = {
          gl: UU,
          program: gU,
          call: tU,
          hu: pU,
          instances: EU,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (PU.draws.push(qU), TU) try {
        const tU = function(UU) {
          const RU = [],
            gU = new Map,
            tU = Math.min(16, UU.getParameter(hU.MAX_VERTEX_ATTRIBS));
          for (let pU = 0; pU < tU; pU++) {
            if (!UU.getVertexAttrib(pU, hU.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const tU = UU.getVertexAttrib(pU, hU.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              EU = UU.getVertexAttribOffset(pU, hU.VERTEX_ATTRIB_ARRAY_POINTER),
              PU = UU.getVertexAttrib(pU, hU.VERTEX_ATTRIB_ARRAY_STRIDE),
              TU = UU.getVertexAttrib(pU, hU.VERTEX_ATTRIB_ARRAY_SIZE),
              qU = UU.getVertexAttrib(pU, hU.VERTEX_ATTRIB_ARRAY_TYPE),
              KU = "VERTEX_ATTRIB_ARRAY_INTEGER" in UU && UU.getVertexAttrib(pU, hU.VERTEX_ATTRIB_ARRAY_INTEGER),
              cU = "VERTEX_ATTRIB_ARRAY_DIVISOR" in UU ? UU.getVertexAttrib(pU, hU.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            gU.set(pU, {
              buffer: tU,
              offset: EU,
              stride: PU
            }), RU.push(`@${pU} buf#${vU(tU)} +${EU} stride ${PU} ${TU}x0x${qU.toString(16)}${KU?" int":""} div ${cU}`)
          }
          return {
            lines: RU,
            byLocation: gU
          }
        }(UU);
        if (qU.attributes = tU.lines, "inst" === gU.terrain) {
          const {
            group: pU,
            chunk: TU
          } = function(UU, RU, gU) {
            const tU = RU.get(fU),
              pU = UU.getVertexAttrib(fU, hU.CURRENT_VERTEX_ATTRIB),
              EU = tU ? `+${tU.offset}` : pU ? Array.from(pU).slice(0, 3).join(",") : "?";
            let PU = gU.groups.get(EU);
            return void 0 === PU && (PU = gU.groups.size, gU.groups.set(EU, PU)), {
              group: PU,
              chunk: EU
            }
          }(UU, tU.byLocation, PU);
          qU.group = pU, qU.chunk = TU;
          for (const UU of [eU, WU]) {
            var KU;
            const RU = null === (KU = tU.byLocation.get(UU)) || void 0 === KU ? void 0 : KU.buffer;
            RU && qU.pages.push({
              kind: "buf",
              buffer: RU
            })
          }! function(UU, RU, gU, tU, pU, EU, PU) {
            const TU = tU.get(eU),
              qU = PU.parts.get(EU);
            if (void 0 === qU && PU.parts.size >= IU) return;
            const KU = Math.min(pU, wU, JU - (null !== qU && void 0 !== qU ? qU : 0));
            if (null === TU || void 0 === TU || !TU.buffer || KU <= 0) return;
            const cU = iU(UU, RU, gU);
            if (!cU) return;
            const GU = TU.stride || 12,
              jU = LU(UU, TU.buffer, TU.offset, (KU - 1) * GU + 12),
              uU = new DataView(jU.buffer),
              CU = function(UU, RU) {
                const gU = function(UU) {
                    const RU = OU.get(UU);
                    if (void 0 !== RU && (null === RU || UU.isProgram(RU))) return RU;
                    VU.inProbe = !0;
                    let gU = null;
                    try {
                      gU = AU(UU, NU, lU, "fed", "the record feed")
                    } finally {
                      VU.inProbe = !1
                    }
                    return OU.set(UU, gU), gU
                  }(UU),
                  tU = gU ? DU(UU, gU, RU, (() => {
                    UU.drawArraysInstanced(hU.POINTS, 0, 1, RU)
                  }), "decode probe input (the record feed)") : null;
                return tU ? new Uint32Array(tU.buffer) : null
              }(UU, KU);
            CU || PU.fed.failed++;
            const QU = DU(UU, cU, 4 * KU, (() => {
              UU.drawArraysInstanced(hU.POINTS, 0, 4, KU)
            }));
            if (!QU) return;
            PU.parts.set(EU, (null !== qU && void 0 !== qU ? qU : 0) + KU);
            for (let hU = 0; hU < KU; hU++) {
              const UU = hU * GU,
                RU = [uU.getUint32(UU, !0), uU.getUint32(UU + 4, !0), uU.getUint32(UU + 8, !0)],
                gU = CU ? [CU[3 * hU], CU[3 * hU + 1], CU[3 * hU + 2]] : RU;
              CU && (PU.fed.records++, gU.some(((UU, gU) => UU !== RU[gU])) && (PU.fed.differing++, PU.fed.first.length < 8 && PU.fed.first.push(`part ${EU} instance ${hU}: fed ${gU.map(pR).join(" ")} buffer ${RU.map(pR).join(" ")}`)));
              for (let tU = 0; tU < 4; tU++) {
                const UU = 3 * (4 * hU + tU);
                PU.vertices.push({
                  record: gU,
                  slot: tU,
                  group: EU,
                  gpu: [QU[UU], QU[UU + 1], QU[UU + 2]]
                })
              }
            }
          }(UU, RU, gU, tU.byLocation, EU, pU, PU)
        } else {
          const tU = UR(UU, RU, 16),
            EU = UR(UU, RU, 8);
          for (const UU of [tU, EU]) UU && qU.pages.push({
            kind: "tex",
            texture: UU
          });
          tU && function(UU, RU, gU, tU, pU, EU) {
            if (EU.parts.size >= IU) return;
            const PU = iU(UU, RU, gU);
            if (!PU) return;
            let TU = 6 * JU;
            const qU = [];
            for (const [uU, CU] of pU) {
              const UU = Math.min(CU, TU, Math.max(6, 6 * Math.floor(JU / pU.length)));
              UU > 0 && (qU.push([uU, UU]), TU -= UU)
            }
            const KU = qU.reduce(((UU, RU) => {
                let [, gU] = RU;
                return UU + gU
              }), 0),
              cU = DU(UU, PU, KU, (() => {
                for (const [RU, gU] of qU) UU.drawArrays(hU.POINTS, RU, gU)
              }));
            if (!cU) return;
            let GU = 0;
            for (const [uU, CU] of qU) {
              const RU = Math.floor(uU / 6),
                gU = Math.floor((uU + CU - 1) / 6) - RU + 1,
                pU = RR(UU, tU, mU, RU, gU);
              for (let UU = uU; UU < uU + CU; UU++, GU++) {
                var jU;
                const gU = 4 * (Math.floor(UU / 6) - RU),
                  tU = [pU[gU], pU[gU + 1], pU[gU + 2]];
                EU.parts.set(pU[gU + 3], (null !== (jU = EU.parts.get(pU[gU + 3])) && void 0 !== jU ? jU : 0) + (UU % 6 === 0 ? 1 : 0)), EU.vertices.push({
                  record: tU,
                  slot: xU[UU % 6],
                  group: pU[gU + 3],
                  gpu: [cU[3 * GU], cU[3 * GU + 1], cU[3 * GU + 2]]
                })
              }
            }
          }(UU, RU, gU, tU, pU, PU)
        }
      } catch (cU) {
        sU(`decode probe failed on program ${ZU(gU)}: ${String(cU)}`)
      }
    }

    function iU(UU, RU, gU) {
      if (void 0 !== gU.probe) return gU.probe && zU(UU, RU, gU.probe), gU.probe;
      gU.probe = null, VU.inProbe = !0;
      try {
        gU.probe = function(UU, RU) {
          return AU(UU, RU.vertex, RU.fragment, QU, `program ${ZU(RU)}'s twin`)
        }(UU, gU)
      } finally {
        VU.inProbe = !1
      }
      return gU.probe && zU(UU, RU, gU.probe), gU.probe
    }

    function AU(UU, RU, gU, tU, pU) {
      const EU = [UU.createShader(hU.VERTEX_SHADER), UU.createShader(hU.FRAGMENT_SHADER)],
        PU = UU.createProgram();
      if (!PU || !EU[0] || !EU[1]) return null;
      UU.shaderSource(EU[0], RU), UU.shaderSource(EU[1], gU);
      for (const qU of EU) UU.compileShader(qU), UU.attachShader(PU, qU);
      UU.transformFeedbackVaryings(PU, [tU], hU.INTERLEAVED_ATTRIBS), UU.linkProgram(PU);
      for (const qU of EU) UU.deleteShader(qU);
      var TU;
      return UU.getProgramParameter(PU, hU.LINK_STATUS) ? PU : (sU(`decode probe: ${pU} failed to link: ${kU(null!==(TU=UU.getProgramInfoLog(PU))&&void 0!==TU?TU:"",300)}`), UU.deleteProgram(PU), null)
    }

    function zU(UU, RU, gU) {
      const tU = UU.getProgramParameter(RU, hU.ACTIVE_UNIFORM_BLOCKS);
      for (let TU = 0; TU < tU; TU++) {
        const tU = UU.getActiveUniformBlockName(RU, TU),
          pU = null === tU ? hU.INVALID_INDEX : UU.getUniformBlockIndex(gU, tU);
        pU !== hU.INVALID_INDEX && UU.uniformBlockBinding(gU, pU, UU.getActiveUniformBlockParameter(RU, TU, hU.UNIFORM_BLOCK_BINDING))
      }
      const pU = UU.getParameter(hU.CURRENT_PROGRAM);
      UU.useProgram(gU);
      const EU = UU.getProgramParameter(RU, hU.ACTIVE_UNIFORMS),
        PU = UU.getActiveUniforms(RU, [...Array(EU).keys()], hU.UNIFORM_BLOCK_INDEX);
      for (let TU = 0; TU < EU; TU++) {
        const tU = UU.getActiveUniform(RU, TU);
        if (!tU || -1 !== PU[TU]) continue;
        const pU = tU.name.replace(/\[0\]$/, "");
        for (let EU = 0; EU < tU.size; EU++) {
          const PU = tU.size > 1 ? `${pU}[${EU}]` : tU.name,
            TU = UU.getUniformLocation(RU, PU),
            qU = UU.getUniformLocation(gU, PU);
          TU && qU && MU(UU, qU, tU.type, UU.getUniform(RU, TU))
        }
      }
      UU.useProgram(pU)
    }

    function MU(UU, RU, gU, tU) {
      const pU = ArrayBuffer.isView(tU) ? Array.from(tU) : [Number(tU)];
      switch (gU) {
        case hU.FLOAT:
          return void UU.uniform1f(RU, pU[0]);
        case hU.FLOAT_VEC2:
          return void UU.uniform2fv(RU, pU);
        case hU.FLOAT_VEC3:
          return void UU.uniform3fv(RU, pU);
        case hU.FLOAT_VEC4:
          return void UU.uniform4fv(RU, pU);
        case hU.FLOAT_MAT3:
          return void UU.uniformMatrix3fv(RU, !1, pU);
        case hU.FLOAT_MAT4:
          return void UU.uniformMatrix4fv(RU, !1, pU);
        case hU.UNSIGNED_INT:
          return void UU.uniform1ui(RU, pU[0]);
        case hU.UNSIGNED_INT_VEC2:
          return void UU.uniform2uiv(RU, pU);
        case hU.UNSIGNED_INT_VEC3:
          return void UU.uniform3uiv(RU, pU);
        case hU.UNSIGNED_INT_VEC4:
          return void UU.uniform4uiv(RU, pU);
        case hU.INT_VEC2:
          return void UU.uniform2iv(RU, pU);
        case hU.INT_VEC3:
          return void UU.uniform3iv(RU, pU);
        case hU.INT_VEC4:
          return void UU.uniform4iv(RU, pU);
        default:
          UU.uniform1i(RU, pU[0])
      }
    }

    function DU(UU, RU, gU, tU) {
      let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const EU = UU.getParameter(hU.CURRENT_PROGRAM),
        PU = UU.getParameter(hU.TRANSFORM_FEEDBACK_BINDING),
        TU = UU.getParameter(hU.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        qU = UU.getParameter(hU.COPY_READ_BUFFER_BINDING),
        KU = UU.isEnabled(hU.RASTERIZER_DISCARD),
        cU = UU.createTransformFeedback(),
        GU = UU.createBuffer();
      VU.inProbe = !0;
      try {
        const EU = UU.getError();
        EU !== hU.NO_ERROR && sU(`GL error 0x${EU.toString(16)} pending before the decode probe (the renderer's)`), UU.useProgram(RU), UU.bindTransformFeedback(hU.TRANSFORM_FEEDBACK, cU), UU.bindBuffer(hU.TRANSFORM_FEEDBACK_BUFFER, GU), UU.bufferData(hU.TRANSFORM_FEEDBACK_BUFFER, 12 * gU, hU.STREAM_READ), UU.bindBufferBase(hU.TRANSFORM_FEEDBACK_BUFFER, 0, GU), UU.enable(hU.RASTERIZER_DISCARD), UU.beginTransformFeedback(hU.POINTS), tU(), UU.endTransformFeedback(), UU.bindBufferBase(hU.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const PU = UU.getError();
        if (PU !== hU.NO_ERROR) return sU(`${pU}: GL error 0x${PU.toString(16)} on the feedback draw`), null;
        const TU = new Float32Array(3 * gU);
        return UU.bindBuffer(hU.COPY_READ_BUFFER, GU), UU.getBufferSubData(hU.COPY_READ_BUFFER, 0, TU), TU
      } finally {
        KU || UU.disable(hU.RASTERIZER_DISCARD), UU.bindTransformFeedback(hU.TRANSFORM_FEEDBACK, PU), UU.bindBuffer(hU.TRANSFORM_FEEDBACK_BUFFER, TU), UU.bindBuffer(hU.COPY_READ_BUFFER, qU), UU.deleteTransformFeedback(cU), UU.deleteBuffer(GU), UU.useProgram(EU), VU.inProbe = !1
      }
    }

    function LU(UU, RU, gU, tU) {
      const pU = UU.getParameter(hU.COPY_READ_BUFFER_BINDING),
        EU = new Uint8Array(tU);
      return UU.bindBuffer(hU.COPY_READ_BUFFER, RU), UU.getBufferSubData(hU.COPY_READ_BUFFER, gU, EU), UU.bindBuffer(hU.COPY_READ_BUFFER, pU), EU
    }
    const NU = `#version 300 es\nlayout(location = ${eU}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      lU = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      OU = new WeakMap;

    function UR(UU, RU, gU) {
      const tU = UU.getProgramParameter(RU, hU.ACTIVE_UNIFORMS),
        pU = UU.getParameter(hU.ACTIVE_TEXTURE);
      try {
        for (let pU = 0; pU < tU; pU++) {
          const tU = UU.getActiveUniform(RU, pU);
          if ((null === tU || void 0 === tU ? void 0 : tU.type) !== hU.UNSIGNED_INT_SAMPLER_2D) continue;
          const EU = UU.getUniformLocation(RU, tU.name),
            PU = EU ? UU.getUniform(RU, EU) : -1;
          if (PU < 0) continue;
          UU.activeTexture(hU.TEXTURE0 + PU);
          const TU = UU.getParameter(hU.TEXTURE_BINDING_2D);
          if (TU && BU.get(TU) === gU) return TU
        }
        return null
      } finally {
        UU.activeTexture(pU)
      }
    }

    function RR(UU, RU, gU, tU, pU) {
      const EU = new Uint32Array(4 * pU),
        PU = UU.getParameter(hU.READ_FRAMEBUFFER_BINDING),
        TU = UU.createFramebuffer();
      UU.bindFramebuffer(hU.READ_FRAMEBUFFER, TU), UU.framebufferTexture2D(hU.READ_FRAMEBUFFER, hU.COLOR_ATTACHMENT0, hU.TEXTURE_2D, RU, 0);
      try {
        let RU = 0;
        for (; RU < pU;) {
          const PU = tU + RU,
            TU = PU % gU,
            qU = Math.min(pU - RU, gU - TU);
          UU.readPixels(TU, Math.floor(PU / gU), qU, 1, hU.RGBA_INTEGER, hU.UNSIGNED_INT, EU.subarray(4 * RU, 4 * (RU + qU))), RU += qU
        }
      } finally {
        UU.bindFramebuffer(hU.READ_FRAMEBUFFER, PU), UU.deleteFramebuffer(TU)
      }
      return EU
    }

    function gR(UU, RU, gU) {
      let tU = 0,
        pU = 0;
      for (let qU = 0; qU < RU.bytes.length; qU += bU) {
        tU++;
        const UU = Math.min(qU + bU, RU.bytes.length);
        uU(RU.bytes.subarray(qU, UU)) !== uU(gU.subarray(qU, UU)) && pU++
      }
      const EU = `${UU} ${RU.bytes.length} B cpu ${uU(RU.bytes).toString(16)} gpu ${uU(gU).toString(16)}, ${pU}/${tU} blocks differ${RU.missed?`, ${RU.missed} GPU-side writes uncopied`:""}`;
      if (0 === pU) return EU;
      const {
        count: PU,
        offsets: TU
      } = function(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const tU = Math.min(UU.length, RU.length);
        let pU = Math.abs(UU.length - RU.length);
        const EU = [];
        for (let PU = 0; PU < tU; PU++) UU[PU] !== RU[PU] && (pU++, EU.length < gU && EU.push(PU));
        return {
          count: pU,
          offsets: EU
        }
      }(RU.bytes, gU);
      return yU([`${EU}: ${PU} bytes differ`, ...TU.map((UU => `  +${UU}: cpu ${CU(RU.bytes,UU)} | gpu ${CU(gU,UU)}`))].join("\n")), `${EU}: ${PU} bytes differ, first at ${TU.join(", ")} (context in the saved file)`
    }

    function tR(UU) {
      if (0 === UU.vertices.length) return void sU(`decode probe (${UU.reason}): no terrain draw probed (${UU.draws.length} seen)`);
      const RU = function(UU) {
          const RU = new Map;
          for (const tU of UU) {
            const UU = RU.get(tU.group);
            UU ? UU.push(tU) : RU.set(tU.group, [tU])
          }
          const gU = {
            vertices: UU.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [tU, pU] of RU) {
            const UU = new Map,
              RU = pU.map((RU => {
                const gU = cU(RU.record, RU.slot),
                  tU = [RU.gpu[0] - gU[0], RU.gpu[1] - gU[1], RU.gpu[2] - gU[2]],
                  pU = tU.map((UU => Math.round(64 * UU))).join(","),
                  EU = UU.get(pU);
                return EU ? EU.count++ : UU.set(pU, {
                  count: 1,
                  offset: tU
                }), gU
              }));
            let EU = [0, 0, 0],
              PU = 0;
            for (const gU of UU.values()) gU.count > PU && (PU = gU.count, EU = gU.offset);
            gU.translations.set(tU, EU), pU.forEach(((UU, tU) => {
              var pU;
              const PU = [RU[tU][0] + EU[0], RU[tU][1] + EU[1], RU[tU][2] + EU[2]];
              if (PU.every(((RU, gU) => {
                  return tU = UU.gpu[gU], pU = RU, Math.abs(tU - pU) <= Math.max(.001, 1e-6 * Math.abs(pU));
                  var tU, pU
                }))) return;
              gU.mismatches++, gU.byDirection[TU(UU.record[2])]++, gU.byDiagonal[qU(UU.record[2])]++;
              const KU = GU(UU.record);
              gU.byBand[KU] = (null !== (pU = gU.byBand[KU]) && void 0 !== pU ? pU : 0) + 1, gU.first.length < jU && gU.first.push({
                ...UU,
                expected: PU
              })
            }))
          }
          return gU
        }(UU.vertices),
        gU = RU.byDirection.map(((UU, RU) => UU ? `${PU[RU]} ${UU}` : "")).filter(Boolean).join(" "),
        tU = Object.entries(RU.byBand).map((UU => {
          let [RU, gU] = UU;
          return `${RU}: ${gU}`
        })).join(" ");
      if (sU(`decode probe (${UU.reason}): ${RU.mismatches}/${RU.vertices} vertices differ from the CPU decode over ${UU.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (RU.mismatches ? ` by direction [${gU}] diagonal [0: ${RU.byDiagonal[0]} 1: ${RU.byDiagonal[1]}] extent [${tU}]` : "")), UU.fed.records > 0 || UU.fed.failed > 0) {
        sU(`decode probe input: ${UU.fed.differing}/${UU.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (UU.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (UU.fed.failed ? `; the feed failed on ${UU.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const RU of UU.fed.first) sU(`  ${RU}`)
      }
      for (const pU of RU.first) {
        const [UU, RU, gU] = pU.record;
        sU(`  mismatch part ${pU.group} r0 ${UU.toString(16)} r1 ${RU.toString(16)} r2 ${gU.toString(16)} slot ${pU.slot} (${PU[TU(gU)]}): expected ${pU.expected.map(ER).join(",")} gpu ${pU.gpu.map(ER).join(",")}`)
      }
      yU(`decode probe translations: ${[...RU.translations].map((UU=>{let[RU,gU]=UU;return`${RU}: ${gU.map(ER).join(",")}`})).join("; ")}`)
    }

    function pR(UU) {
      return UU.toString(16)
    }

    function ER(UU) {
      return Number.isInteger(UU) ? String(UU) : UU.toFixed(3)
    }

    function PR(UU) {
      return null !== VU.pendingCheck ? Promise.resolve() : new Promise((RU => {
        let gU = !1;
        const tU = {
          reason: UU,
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
        VU.pendingCheck = tU;
        const pU = () => {
            VU.pendingCheck = null;
            try {
              ! function(UU) {
                sU(`draw ranges (${UU.reason}): ${UU.terrainDraws} terrain draws in the frame, the first ${UU.draws.length} here`);
                for (const RU of UU.draws) {
                  const UU = RU.hu.slice(0, 8).map((UU => {
                      let [RU, gU] = UU;
                      return `${RU}+${gU}`
                    })).join(" "),
                    gU = RU.hu.length > 8 ? ` (+${RU.hu.length-8} ranges)` : "";
                  sU(`  ${ZU(RU.program)} ${RU.program.terrain} ${RU.call} ${UU}${gU} x${RU.instances}${RU.group>=0?` part ${RU.group} chunk ${RU.chunk}`:""} | ${RU.attributes.join(" | ")}`)
                }
              }(tU), tR(tU);
              tU.draws.some((UU => "undefined" !== typeof WebGL2RenderingContext && UU.gl instanceof WebGL2RenderingContext)) || 0 === tU.draws.length ? function(UU) {
                const RU = [],
                  gU = new Map;
                for (const tU of UU)
                  if ("undefined" !== typeof WebGL2RenderingContext && tU.gl instanceof WebGL2RenderingContext)
                    for (const UU of tU.pages) gU.set("buf" === UU.kind ? UU.buffer : UU.texture, {
                      page: UU,
                      gl: tU.gl
                    });
                for (const [tU, {
                    page: pU,
                    gl: EU
                  }] of gU) {
                  const UU = YU.get(tU);
                  if (!UU) {
                    RU.push(`${pU.kind}#${vU(tU)}: no CPU copy (${VU.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === pU.kind) {
                    RU.push(gR(`buf#${UU.id}`, UU, LU(EU, pU.buffer, 0, UU.bytes.length)));
                    continue
                  }
                  const gU = RR(EU, pU.texture, UU.width, 0, UU.width * UU.height),
                    PU = 16 === UU.texelBytes ? new Uint8Array(gU.buffer) : new Uint8Array(new Uint16Array(gU).buffer);
                  RU.push(gR(`tex#${UU.id} (${16===UU.texelBytes?"records":"light"})`, UU, PU))
                }
                for (const tU of RU) sU(`page readback ${tU}`)
              }(tU.draws) : sU("page readback: none on WebGL1 (no buffer readback)")
            } catch (UU) {
              sU(`check failed: ${String(UU)}`)
            }
            RU()
          },
          EU = () => {
            if (tU.draws.length > 0 && !gU) return gU = !0, void setTimeout(pU, 0);
            gU || requestAnimationFrame(EU)
          };
        requestAnimationFrame(EU), setTimeout((() => {
          gU || (gU = !0, pU())
        }), 5e3)
      }))
    }
    var TR = gU(4352);
    const qR = 20,
      KR = 24,
      cR = Reflect.apply;

    function GR(UU, RU, gU) {
      if (!UU) return;
      const tU = UU[RU];
      if ("function" === typeof tU) {
        const pU = gU(tU);
        UU[RU] = pU, (0, TR.B)(pU, tU)
      }
    }
    let jR = !1;
    const uR = new WeakMap,
      CR = new WeakMap,
      hR = new WeakMap,
      QR = {
        gl: 0,
        lost: 0
      };
    let eR = {
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
      WR = {
        buffer: 0,
        texture: 0
      },
      fR = 0;

    function xR(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (UU instanceof ArrayBuffer) return new Uint8Array(UU, RU, gU || void 0);
      if (!ArrayBuffer.isView(UU)) return null;
      const tU = "BYTES_PER_ELEMENT" in UU ? UU.BYTES_PER_ELEMENT : 1,
        pU = UU.byteOffset + RU * tU,
        EU = gU ? gU * tU : UU.byteLength - RU * tU;
      return new Uint8Array(UU.buffer, pU, Math.max(0, EU))
    }

    function mR(UU, RU) {
      const gU = function(UU) {
        switch (UU) {
          case hU.ARRAY_BUFFER:
            return hU.ARRAY_BUFFER_BINDING;
          case hU.ELEMENT_ARRAY_BUFFER:
            return hU.ELEMENT_ARRAY_BUFFER_BINDING;
          case hU.COPY_READ_BUFFER:
            return hU.COPY_READ_BUFFER_BINDING;
          case hU.COPY_WRITE_BUFFER:
            return hU.COPY_WRITE_BUFFER_BINDING;
          case hU.UNIFORM_BUFFER:
            return hU.UNIFORM_BUFFER_BINDING;
          case hU.PIXEL_UNPACK_BUFFER:
            return hU.PIXEL_UNPACK_BUFFER_BINDING;
          case hU.TRANSFORM_FEEDBACK_BUFFER:
            return hU.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(RU);
      return gU ? UU.getParameter(gU) : null
    }

    function IR(UU) {
      const RU = YU.get(UU);
      RU && (VU.shadowBytes -= RU.bytes.length, YU.delete(UU))
    }

    function JR(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      IR(UU), VU.shadowBytes + RU > nU ? VU.uncopied++ : (VU.shadowBytes += RU, YU.set(UU, {
        id: vU(UU),
        bytes: new Uint8Array(RU),
        width: gU,
        height: tU,
        texelBytes: pU,
        missed: 0
      }))
    }

    function wR(UU, RU) {
      for (const gU of ["deleteBuffer", "deleteTexture"]) GR(UU, gU, (UU => function() {
        for (var RU = arguments.length, gU = new Array(RU), tU = 0; tU < RU; tU++) gU[tU] = arguments[tU];
        return gU[0] && IR(gU[0]), cR(UU, this, gU)
      }));
      GR(UU, "shaderSource", (UU => function() {
        for (var RU = arguments.length, gU = new Array(RU), tU = 0; tU < RU; tU++) gU[tU] = arguments[tU];
        return gU[0] && "string" === typeof gU[1] && uR.set(gU[0], gU[1]), cR(UU, this, gU)
      })), GR(UU, "attachShader", (UU => function() {
        for (var RU, gU = arguments.length, tU = new Array(gU), pU = 0; pU < gU; pU++) tU[pU] = arguments[pU];
        const EU = tU[0],
          PU = null !== (RU = CR.get(EU)) && void 0 !== RU ? RU : [];
        return PU.push(tU[1]), CR.set(EU, PU), cR(UU, this, tU)
      })), GR(UU, "linkProgram", (UU => function() {
        for (var RU = arguments.length, gU = new Array(RU), tU = 0; tU < RU; tU++) gU[tU] = arguments[tU];
        const pU = cR(UU, this, gU);
        return VU.inProbe || function(UU, RU) {
          var gU, tU, pU;
          "undefined" !== typeof HTMLCanvasElement && UU.canvas instanceof HTMLCanvasElement && function(UU) {
            if (YR.has(UU)) return;
            YR.add(UU);
            for (const RU of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) UU.addEventListener(RU, (UU => {
              QR.lost < qR && (QR.lost++, sU(`${RU}${"statusMessage"in UU?`: ${String(UU.statusMessage)}`:""}`))
            }))
          }(UU.canvas);
          VU.context ??= UU;
          const EU = null !== (gU = CR.get(RU)) && void 0 !== gU ? gU : [];
          let PU = "",
            TU = "";
          for (const cU of EU) {
            var qU;
            const UU = null !== (qU = uR.get(cU)) && void 0 !== qU ? qU : "";
            /\bgl_Position\b/.test(UU) ? PU = UU : TU = UU
          }
          const KU = {
            id: vU(RU),
            name: null !== (tU = null === (pU = oU.exec(PU)) || void 0 === pU ? void 0 : pU[1]) && void 0 !== tU ? tU : null,
            gl: UU,
            vertex: PU,
            fragment: TU,
            terrain: bR(PU),
            checked: !1,
            firstDraw: !1
          };
          if (hR.set(RU, KU), aU.push([RU, KU]), null !== KU.terrain) {
            const RU = EU.map((RU => {
              var gU;
              return null !== (gU = UU.getShaderInfoLog(RU)) && void 0 !== gU ? gU : ""
            })).filter((UU => "" !== UU.trim()));
            RU.length > 0 && yU(`program ${ZU(KU)} (${KU.terrain}) shader logs:\n${kU(RU.join("\n"))}`)
          }
        }(this, gU[0]), pU
      })), GR(UU, "bufferData", (UU => function() {
        for (var RU = arguments.length, gU = new Array(RU), tU = 0; tU < RU; tU++) gU[tU] = arguments[tU];
        const pU = cR(UU, this, gU);
        if (!VU.inProbe) {
          const UU = mR(this, gU[0]);
          if (UU) {
            var EU, PU, TU;
            const RU = "number" === typeof gU[1] ? null : xR(gU[1], null !== (EU = gU[3]) && void 0 !== EU ? EU : 0, null !== (PU = gU[4]) && void 0 !== PU ? PU : 0);
            var qU;
            if (JR(UU, "number" === typeof gU[1] ? gU[1] : null !== (TU = null === RU || void 0 === RU ? void 0 : RU.length) && void 0 !== TU ? TU : 0), RU) null === (qU = YU.get(UU)) || void 0 === qU || qU.bytes.set(RU)
          }
        }
        return pU
      })), GR(UU, "bufferSubData", (UU => function() {
        for (var RU = arguments.length, gU = new Array(RU), tU = 0; tU < RU; tU++) gU[tU] = arguments[tU];
        const pU = cR(UU, this, gU);
        if (!VU.inProbe) {
          var EU, PU;
          const UU = mR(this, gU[0]),
            RU = UU ? YU.get(UU) : void 0,
            tU = xR(gU[2], null !== (EU = gU[3]) && void 0 !== EU ? EU : 0, null !== (PU = gU[4]) && void 0 !== PU ? PU : 0);
          if (RU && tU) {
            const UU = gU[1];
            RU.bytes.set(tU.subarray(0, Math.max(0, RU.bytes.length - UU)), UU), nR("buffer", RU, UU, tU.length)
          }
        }
        return pU
      })), RU && (GR(UU, "copyBufferSubData", (UU => function() {
        for (var RU = arguments.length, gU = new Array(RU), tU = 0; tU < RU; tU++) gU[tU] = arguments[tU];
        const pU = cR(UU, this, gU);
        if (!VU.inProbe) {
          const [UU, RU, tU, pU, EU] = gU, PU = mR(this, UU), TU = mR(this, RU), qU = PU ? YU.get(PU) : void 0, KU = TU ? YU.get(TU) : void 0;
          KU && (qU ? KU.bytes.set(qU.bytes.slice(tU, tU + EU), pU) : KU.missed++)
        }
        return pU
      })), GR(UU, "texStorage2D", (UU => function() {
        for (var RU = arguments.length, gU = new Array(RU), tU = 0; tU < RU; tU++) gU[tU] = arguments[tU];
        const pU = cR(UU, this, gU),
          [, , EU, PU, TU] = gU;
        if (!VU.inProbe && (EU === hU.RGBA32UI || EU === hU.RGBA16UI)) {
          const UU = this.getParameter(hU.TEXTURE_BINDING_2D),
            RU = EU === hU.RGBA32UI ? 16 : 8;
          UU && (BU.set(UU, RU), JR(UU, PU * TU * RU, PU, TU, RU))
        }
        return pU
      })), GR(UU, "texSubImage2D", (UU => function() {
        for (var RU = arguments.length, gU = new Array(RU), tU = 0; tU < RU; tU++) gU[tU] = arguments[tU];
        const pU = cR(UU, this, gU);
        return !VU.inProbe && gU.length >= 9 && gU[0] === hU.TEXTURE_2D && 0 === gU[1] && function(UU, RU) {
          var gU;
          const tU = UU.getParameter(hU.TEXTURE_BINDING_2D),
            pU = tU ? YU.get(tU) : void 0;
          if (!pU) return;
          const [, , EU, PU, TU, qU] = RU;
          let KU = xR(RU[8], null !== (gU = RU[9]) && void 0 !== gU ? gU : 0);
          if (null === KU && "number" === typeof RU[8]) {
            const gU = mR(UU, hU.PIXEL_UNPACK_BUFFER),
              tU = gU ? YU.get(gU) : void 0;
            KU = tU ? tU.bytes.subarray(RU[8]) : null
          }
          if (null === KU) return void pU.missed++;
          const cU = UU.getParameter(hU.UNPACK_ROW_LENGTH) || TU,
            GU = UU.getParameter(hU.UNPACK_SKIP_ROWS),
            jU = UU.getParameter(hU.UNPACK_SKIP_PIXELS),
            uU = pU.texelBytes;
          for (let CU = 0; CU < qU; CU++) {
            const UU = ((GU + CU) * cU + jU) * uU,
              RU = ((PU + CU) * pU.width + EU) * uU;
            pU.bytes.set(KU.subarray(UU, UU + TU * uU), RU)
          }
          nR("texture", pU, (PU * pU.width + EU) * uU, TU * qU * uU)
        }(this, gU), pU
      })), GR(UU, "copyTexSubImage2D", (UU => function() {
        for (var RU = arguments.length, gU = new Array(RU), tU = 0; tU < RU; tU++) gU[tU] = arguments[tU];
        const pU = gU[0] === hU.TEXTURE_2D ? this.getParameter(hU.TEXTURE_BINDING_2D) : null,
          EU = pU ? YU.get(pU) : void 0;
        return EU && EU.missed++, cR(UU, this, gU)
      })));
      for (const gU of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) GR(UU, gU, (UU => function() {
        for (var RU = arguments.length, tU = new Array(RU), pU = 0; pU < RU; pU++) tU[pU] = arguments[pU];
        const EU = cR(UU, this, tU);
        return VU.inProbe || ZR(this, gU, tU), EU
      }));
      GR(UU, "getExtension", (UU => function() {
        for (var RU = arguments.length, gU = new Array(RU), tU = 0; tU < RU; tU++) gU[tU] = arguments[tU];
        const pU = cR(UU, this, gU);
        return pU && "object" === typeof pU && function(UU, RU, gU) {
          const tU = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(RU in tU) || gU.bloxdRenderDebug) return;
          gU.bloxdRenderDebug = !0;
          for (const pU of tU[RU]) {
            const RU = gU[pU];
            "function" === typeof RU && (gU[pU] = function() {
              for (var tU = arguments.length, EU = new Array(tU), PU = 0; PU < tU; PU++) EU[PU] = arguments[PU];
              const TU = cR(RU, gU, EU);
              return VU.inProbe || ZR(UU, pU, EU), TU
            })
          }
        }(this, gU[0], pU), pU
      }))
    }

    function nR(UU, RU, gU, tU) {
      WR[UU] += tU, fR < 32 && RU.bytes.length >= 1 << 20 && (fR++, yU(`upload ${UU} #${RU.id} +${gU} ${tU} B`))
    }

    function bR(UU) {
      if (!UU.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(UU) || /in uvec3 _p2vs_location0\b/.test(UU) ? "inst" : "tex"
    }

    function oR(UU, RU, gU) {
      var tU;
      if (gU.checked) return;
      gU.checked = !0;
      const pU = UU.getProgramParameter(RU, hU.LINK_STATUS),
        EU = (null !== (tU = UU.getProgramInfoLog(RU)) && void 0 !== tU ? tU : "").trim();
      var PU;
      null === gU.terrain && pU || (sU(`program ${ZU(gU)} ${null!==(PU=gU.terrain)&&void 0!==PU?PU:"other"} link ${pU?"ok":"FAILED"}${EU?`: ${kU(EU,300)}`:""}`), EU && yU(`program ${ZU(gU)} link log:\n${kU(EU)}`))
    }

    function ZR(UU, RU, gU) {
      var tU;
      const pU = UU.getParameter(hU.CURRENT_PROGRAM),
        EU = pU ? hR.get(pU) : void 0;
      if (!pU || !EU) return;
      const PU = null !== (tU = EU.terrain) && void 0 !== tU ? tU : "other",
        {
          hu: TU,
          instances: qU
        } = function(UU, RU) {
          switch (UU) {
            case "drawArrays":
              return {
                hu: [
                  [RU[1], RU[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                hu: [
                  [RU[1], RU[2]]
                ], instances: RU[3]
              };
            case "drawElements":
              return {
                hu: [
                  [0, RU[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                hu: [
                  [0, RU[1]]
                ], instances: RU[4]
              };
            case "multiDrawArraysWEBGL": {
              const UU = RU[1],
                gU = RU[3],
                tU = RU[2],
                pU = RU[4],
                EU = [];
              for (let PU = 0; PU < RU[5]; PU++) EU.push([UU[tU + PU], gU[pU + PU]]);
              return {
                hu: EU,
                instances: 1
              }
            }
            default:
              return {
                hu: [], instances: 0
              }
          }
        }(RU, gU),
        KU = "inst" === EU.terrain ? qU : TU.reduce(((UU, RU) => {
          let [, gU] = RU;
          return UU + gU
        }), 0) / 6;
      if (eR[PU].draws++, eR[PU].faces += KU, null === EU.terrain) return;
      if (VU.context = UU, !EU.firstDraw) {
        EU.firstDraw = !0, oR(UU, pU, EU), aR || (aR = !0, sU(function(UU) {
          var RU;
          const gU = UU.getParameter(hU.DEPTH_FUNC),
            tU = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let pU = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in UU && UU.getParameter(hU.DRAW_FRAMEBUFFER_BINDING)) {
            const RU = UU;
            pU = RU.getFramebufferAttachmentParameter(hU.DRAW_FRAMEBUFFER, hU.DEPTH_ATTACHMENT, hU.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(RU.getFramebufferAttachmentParameter(hU.DRAW_FRAMEBUFFER,hU.DEPTH_ATTACHMENT,hU.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(RU.getFramebufferAttachmentParameter(hU.DRAW_FRAMEBUFFER,hU.DEPTH_ATTACHMENT,hU.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const EU = UU.getParameter(hU.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(RU=tU[gU])&&void 0!==RU?RU:`0x${gU.toString(16)}`} clear ${EU}${516===gU||518===gU?" (reverse-Z)":""}, samples ${String(UU.getParameter(hU.SAMPLES))}, ${pU}`
        }(UU)));
        const gU = UU.getError();
        gU !== hU.NO_ERROR && QR.gl < qR && (QR.gl++, sU(`GL error 0x${gU.toString(16)} after program ${ZU(EU)}'s first terrain draw (${RU})`))
      }
      const cU = VU.pendingCheck;
      null !== cU && (cU.terrainDraws++, cU.draws.length < KR && FU(UU, pU, EU, RU, TU, qU))
    }
    let aR = !1;
    const YR = new WeakSet;
    var BR = gU(4179),
      VR = gU(4356);
    const rR = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let XR = !1;
    const vR = new WeakSet,
      dR = new WeakMap,
      HR = new WeakMap,
      SR = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let sR = 0,
      yR = !1,
      kR = null,
      FR = {
        draws: 0,
        faces: 0
      };

    function iR(UU) {
      const RU = globalThis[UU];
      return null === RU || void 0 === RU ? void 0 : RU.prototype
    }

    function AR(UU) {
      return UU && "function" === typeof UU[Symbol.iterator] ? [...UU].sort().join(" ") : ""
    }

    function zR(UU, RU) {
      const gU = null !== UU && void 0 !== UU ? UU : {},
        tU = null !== RU && void 0 !== RU ? RU : Object.keys(Object.getPrototypeOf(gU)).concat(Object.keys(gU));
      return [...new Set(tU)].filter((UU => "number" === typeof gU[UU])).map((UU => `${UU} ${String(gU[UU])}`)).join(", ")
    }

    function MR(UU, RU) {
      var gU;
      const tU = null !== (gU = RU.vertex) && void 0 !== gU ? gU : {};
      if (tU.module && vR.has(tU.module)) {
        var pU;
        const gU = String(null !== (pU = tU.entryPoint) && void 0 !== pU ? pU : "");
        if (gU.startsWith("vs_packed") && dR.set(UU, gU), !yR) {
          var EU, PU, TU, qU, KU;
          yR = !0;
          const UU = null !== (EU = RU.depthStencil) && void 0 !== EU ? EU : {},
            tU = null !== (PU = RU.multisample) && void 0 !== PU ? PU : {},
            pU = String(null !== (TU = UU.depthCompare) && void 0 !== TU ? TU : "");
          sU(`WebGPU terrain pipeline ${gU}: depth ${String(null!==(qU=UU.format)&&void 0!==qU?qU:"none")} ${pU}${pU.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(KU=tU.count)&&void 0!==KU?KU:1)}`)
        }
      }
    }

    function DR(UU) {
      GR(UU, "setPipeline", (UU => function() {
        for (var RU = arguments.length, gU = new Array(RU), tU = 0; tU < RU; tU++) gU[tU] = arguments[tU];
        return HR.set(this, gU[0]), cR(UU, this, gU)
      }));
      for (const RU of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) GR(UU, RU, (UU => function() {
        const gU = HR.get(this),
          tU = gU ? dR.get(gU) : void 0;
        for (var pU = arguments.length, EU = new Array(pU), PU = 0; PU < pU; PU++) EU[PU] = arguments[PU];
        return void 0 !== tU && LR(RU, tU, EU), cR(UU, this, EU)
      }))
    }

    function LR(UU, RU, gU) {
      var tU;
      (FR.draws++, "draw" === UU || "drawIndexed" === UU) && (FR.faces += gU[0] * (null !== (tU = gU[1]) && void 0 !== tU ? tU : 1) / 6);
      if (null !== kR && kR.length < KR) {
        const tU = ("draw" === UU ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === UU ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((RU, tU) => {
          const pU = UU.endsWith("Indirect") ? gU[1] : gU[tU];
          return `${RU} ${String(null!==pU&&void 0!==pU?pU:"instances"===RU?1:0)}`
        }));
        kR.push(`  ${RU} ${UU} ${tU.join(" ")}`)
      }
    }

    function NR() {
      if (XR || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      XR = !0, GR(iR("GPU"), "requestAdapter", (UU => function() {
        for (var RU = arguments.length, gU = new Array(RU), tU = 0; tU < RU; tU++) gU[tU] = arguments[tU];
        return cR(UU, this, gU).then((UU => {
          var RU;
          UU ? function(UU) {
            var RU;
            const gU = null !== (RU = UU.info) && void 0 !== RU ? RU : {};
            sU(`WebGPU adapter ${["vendor","architecture","device","description"].map((UU=>{var RU;return`${UU} "${String(null!==(RU=gU[UU])&&void 0!==RU?RU:"")}"`})).join(" ")}${UU.isFallbackAdapter?" (fallback)":""}`), sU(`WebGPU adapter features ${AR(UU.features)}`), sU(`WebGPU adapter limits ${zR(UU.limits,rR)}`), yU(`WebGPU adapter all limits ${zR(UU.limits,null)}`)
          }(UU) : sU(`WebGPU requestAdapter(${JSON.stringify(null!==(RU=gU[0])&&void 0!==RU?RU:{})}) gave none`);
          return UU
        }))
      })), GR(iR("GPUAdapter"), "requestDevice", (UU => function() {
        for (var RU = arguments.length, gU = new Array(RU), tU = 0; tU < RU; tU++) gU[tU] = arguments[tU];
        return cR(UU, this, gU).then((UU => (function(UU) {
          sU(`WebGPU device features ${AR(UU.features)}`), sU(`WebGPU device limits ${zR(UU.limits,rR)}`), UU.addEventListener("uncapturederror", (UU => {
            if (SR.uncaptured < qR) {
              var RU, gU, tU;
              SR.uncaptured++;
              const pU = UU.error;
              sU(`WebGPU uncaptured ${null!==(RU=null===pU||void 0===pU||null===(gU=pU.constructor)||void 0===gU?void 0:gU.name)&&void 0!==RU?RU:"error"}: ${kU(String(null!==(tU=null===pU||void 0===pU?void 0:pU.message)&&void 0!==tU?tU:""),600)}`)
            }
          }));
          const RU = UU.lost;
          null === RU || void 0 === RU || RU.then((UU => {
            var RU;
            sU(`WebGPU device lost (${String(UU.reason)}): ${kU(String(null!==(RU=UU.message)&&void 0!==RU?RU:""),600)}`)
          }))
        }(UU), UU)), (UU => {
          throw sU(`WebGPU requestDevice failed: ${String(UU)}`), UU
        }))
      }));
      const UU = iR("GPUDevice");
      GR(UU, "createShaderModule", (UU => function() {
        for (var RU, gU, tU = arguments.length, pU = new Array(tU), EU = 0; EU < tU; EU++) pU[EU] = arguments[EU];
        const PU = cR(UU, this, pU);
        return function(UU, RU) {
          const gU = RU.includes("decodeQuad");
          gU && vR.add(UU);
          const tU = UU.getCompilationInfo;
          null === tU || void 0 === tU || tU.call(UU).then((UU => {
            if (0 === UU.messages.length && !gU) return;
            const RU = {};
            for (const gU of UU.messages) {
              var tU;
              RU[String(gU.type)] = (null !== (tU = RU[String(gU.type)]) && void 0 !== tU ? tU : 0) + 1
            }
            const pU = UU.messages.map((UU => `${String(UU.type)} ${String(UU.lineNum)}:${String(UU.linePos)} ${String(UU.message)}`)).join("\n");
            SR.compile < qR && (SR.compile++, sU(`WebGPU ${gU?"terrain ":""}shader module compiled: ${JSON.stringify(RU)}${pU?` first: ${kU(pU.split("\n")[0],300)}`:""}`)), pU && yU(`WebGPU shader module messages:\n${kU(pU)}`)
          }))
        }(PU, String(null !== (RU = (null !== (gU = pU[0]) && void 0 !== gU ? gU : {}).code) && void 0 !== RU ? RU : "")), PU
      })), GR(UU, "createRenderPipeline", (UU => function() {
        for (var RU, gU = arguments.length, tU = new Array(gU), pU = 0; pU < gU; pU++) tU[pU] = arguments[pU];
        const EU = cR(UU, this, tU);
        return MR(EU, null !== (RU = tU[0]) && void 0 !== RU ? RU : {}), EU
      })), GR(UU, "createRenderPipelineAsync", (UU => function() {
        for (var RU = arguments.length, gU = new Array(RU), tU = 0; tU < RU; tU++) gU[tU] = arguments[tU];
        return cR(UU, this, gU).then((UU => {
          var RU;
          return MR(UU, null !== (RU = gU[0]) && void 0 !== RU ? RU : {}), UU
        }), (UU => {
          var RU;
          throw function(UU, RU) {
            var gU, tU, pU;
            if (SR.rejected >= qR) return;
            SR.rejected++;
            const {
              reason: EU,
              message: PU
            } = null !== RU && void 0 !== RU ? RU : {}, TU = String(null !== (gU = (null !== (tU = UU.vertex) && void 0 !== tU ? tU : {}).entryPoint) && void 0 !== gU ? gU : "");
            sU(`WebGPU pipeline "${String(null!==(pU=UU.label)&&void 0!==pU?pU:"")}" ${TU} rejected (${String(null!==EU&&void 0!==EU?EU:"no reason")}): ${kU(String(null!==PU&&void 0!==PU?PU:RU),600)}`)
          }(null !== (RU = gU[0]) && void 0 !== RU ? RU : {}, UU), UU
        }))
      })), GR(iR("GPUCanvasContext"), "configure", (UU => function() {
        for (var RU, gU = arguments.length, tU = new Array(gU), pU = 0; pU < gU; pU++) tU[pU] = arguments[pU];
        const EU = null !== (RU = tU[0]) && void 0 !== RU ? RU : {};
        var PU, TU;
        sR++ < 3 && sU(`WebGPU canvas ${String(EU.format)} ${String(null!==(PU=EU.colorSpace)&&void 0!==PU?PU:"srgb")} alpha ${String(null!==(TU=EU.alphaMode)&&void 0!==TU?TU:"opaque")}`);
        return cR(UU, this, tU)
      })), DR(iR("GPURenderPassEncoder")), DR(iR("GPURenderBundleEncoder"))
    }
    const lR = 1e4,
      OR = 6e4,
      Ug = 5e3,
      Rg = 3e3,
      gg = 100;
    let tg = null,
      pg = !1,
      Eg = {
        ...BR.d
      },
      Pg = !1,
      Tg = null,
      qg = 0,
      Kg = () => {};
    const cg = new Promise((UU => {
      Kg = UU
    }));

    function Gg() {
      var UU;
      pg || (pg = !0, Eg = Object.assign(window.bloxdRenderDebug ??= {
        ...BR.d
      }, {
        faceCull: "0" === (0, EU.j)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (UU = (0, EU.j)("adrenoProbe")) && void 0 !== UU ? UU : ""
      }), sU("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), jR || "undefined" === typeof window || (jR = !0, "undefined" !== typeof WebGL2RenderingContext && wR(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && wR(WebGLRenderingContext.prototype, !1)), NR(), (0, EU.b)("renderProbe", (() => {
        eg("console")
      })), hg(), setInterval(fg, Ug))
    }

    function jg(UU) {
      var RU, gU;
      Gg(), tg = null !== (RU = null === UU || void 0 === UU ? void 0 : UU.backend) && void 0 !== RU ? RU : null;
      const tU = `, renderer param ${null!==(gU=(0,EU.j)("renderer"))&&void 0!==gU?gU:"none"}, faceCull ${"0"===Eg.faceCull?"off (whole parts)":"on"}, adrenoProbe ${Eg.adrenoProbe||"none"}`;
      sU(`${(0,VR.e)(UU)}${null===UU?"":tU}`)
    }

    function ug() {
      const UU = performance.now(),
        RU = Cg(cg, lR, OR).then((RU => eg(`${Math.round((performance.now()-UU)/1e3)} s after playable${RU?"":", no terrain drawn yet"}`)));
      (0, pU.e)(sU, (async () => {
        await RU, await Tg
      }))
    }
    async function Cg(UU, RU, gU) {
      const pU = (0, tU.b)(gU).then((() => !1));
      return await (0, tU.b)(RU), Promise.race([UU.then((() => !0)), pU])
    }

    function hg() {
      requestAnimationFrame((() => {
        qg++, hg()
      }))
    }

    function Qg() {
      var UU, RU, gU;
      if (Pg) return;
      (Pg = !0, sU(`renderer caps ${null!==(UU=Eg.caps)&&void 0!==UU?UU:"(not noted)"}; terrain fetch ${null!==(RU=Eg.fetch)&&void 0!==RU?RU:"(not noted)"}`), Eg.adrenoProbe) && sU(`adrenoProbe ${Eg.adrenoProbe} asked; in force (storage fetch only): ${null!==(gU=Eg.probe)&&void 0!==gU?gU:"(not noted)"}`);
      const tU = VU.context;
      if (tU) {
        for (const UU of function(UU) {
            var RU;
            const gU = [],
              tU = UU.getExtension("WEBGL_debug_renderer_info"),
              pU = tU ? UU.getParameter(tU.UNMASKED_VENDOR_WEBGL) : "(masked)",
              EU = tU ? UU.getParameter(tU.UNMASKED_RENDERER_WEBGL) : "(masked)";
            gU.push(`GL ${String(UU.getParameter(UU.VERSION))} | ${String(UU.getParameter(UU.SHADING_LANGUAGE_VERSION))} | ${String(UU.getParameter(UU.VENDOR))} / ${String(UU.getParameter(UU.RENDERER))}`), gU.push(`GL unmasked ${pU} / ${EU}`);
            const PU = [
              ["MAX_TEXTURE_SIZE", UU.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", UU.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", UU.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", UU.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", UU.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", UU.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", UU.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in UU && PU.push(["MAX_UNIFORM_BLOCK_SIZE", UU.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", UU.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", UU.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", UU.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), gU.push(`GL limits ${PU.map((RU=>{let[gU,tU]=RU;return`${gU} ${String(UU.getParameter(tU))}`})).join(", ")}`);
            const TU = (RU, gU) => {
              const tU = UU.getShaderPrecisionFormat(RU, UU.HIGH_FLOAT),
                pU = UU.getShaderPrecisionFormat(RU, UU.HIGH_INT);
              return `${gU} highp float ${tU?`${tU.rangeMin}/${tU.rangeMax}/${tU.precision}`:"?"} int ${pU?`${pU.rangeMin}/${pU.rangeMax}/${pU.precision}`:"?"}`
            };
            gU.push(`GL precision ${TU(UU.VERTEX_SHADER,"VS")}, ${TU(UU.FRAGMENT_SHADER,"FS")}`);
            const qU = UU.getContextAttributes();
            return gU.push(`GL context ${JSON.stringify(qU)} drawingBuffer ${UU.drawingBufferWidth}x${UU.drawingBufferHeight}${"drawingBufferFormat"in UU?` format 0x${Number(UU.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in UU?` ${String(UU.drawingBufferColorSpace)}`:""}`), gU.push(`GL extensions ${(null!==(RU=UU.getSupportedExtensions())&&void 0!==RU?RU:[]).join(" ")}`), gU
          }(tU)) sU(UU);
        ! function() {
          if (!VU.context) return;
          let UU = 0,
            RU = 0;
          for (const [gU, tU] of aU) !tU.gl.isContextLost() && tU.gl.isProgram(gU) && (RU++, oR(tU.gl, gU, tU), null !== tU.terrain && UU++);
          sU(`programs: ${RU} live of ${aU.length} linked, ${UU} packed terrain; CPU page copies ${Math.round(VU.shadowBytes/1048576)} MiB (${VU.uncopied} over budget)`)
        }()
      }
    }

    function eg(UU) {
      return Tg ??= async function(UU) {
        Qg(), "webgpu" === tg ? (Wg(), "1" === Eg.slotCheck && sU("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), Eg.slotCheck = "1", await
          function(UU) {
            if (null !== kR) return Promise.resolve();
            const RU = [];
            return kR = RU, new Promise((gU => {
              setTimeout((() => {
                kR = null, sU(`WebGPU draw ranges (${UU}): ${RU.length} terrain draws recorded in a second (first ${KR}; bundles replay without new ones)`);
                for (const UU of RU) sU(UU);
                gU()
              }), 1e3)
            }))
          }(UU), await async function() {
            for (let UU = 0;
              "1" === Eg.slotCheck && UU < Rg; UU += gg) await (0, tU.b)(gg);
            if ("1" === Eg.slotCheck) return void sU(`slot check: no answer in ${Rg} ms (only the storage fetch has one; a later answer logs on its own)`);
            Wg()
          }()) : await PR(UU);
        sU(`check (${UU}) done: bloxdDebug.save() downloads it all`)
      }(UU).catch((RU => {
        sU(`check (${UU}) failed: ${String(RU)}`)
      })).finally((() => {
        Tg = null
      })), Tg
    }

    function Wg() {
      void 0 !== Eg.slotCheck && "1" !== Eg.slotCheck && (sU(Eg.slotCheck), delete Eg.slotCheck)
    }

    function fg() {
      const UU = UU => qg ? (UU / qg).toFixed(1) : "0",
        RU = function() {
          const UU = FR;
          return FR = {
            draws: 0,
            faces: 0
          }, UU
        }(),
        gU = function() {
          const UU = eR;
          return eR = {
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
          }, UU
        }(),
        tU = function() {
          const UU = WR;
          return WR = {
            buffer: 0,
            texture: 0
          }, UU
        }();
      Wg(), ("webgpu" === tg ? RU.draws : gU.inst.draws + gU.tex.draws) > 0 && Kg();
      const pU = "webgpu" === tg ? [`terrain ${UU(RU.draws)} draws ${UU(RU.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((UU => gU[UU].draws > 0)).map((RU => `${RU} ${UU(gU[RU].draws)} draws ${UU(gU[RU].faces)} faces a frame`));
      sU(`${qg} frames: ${pU.join(", ")||"no draws"}; uploaded ${Math.round(tU.buffer/1024)} KiB to buffers, ${Math.round(tU.texture/1024)} KiB to data textures`), qg = 0
    }
  },
  4356: (UU, RU, gU) => {
    function tU(UU) {
      if (null === UU) return "backend: none picked (no renderer build)";
      const RU = UU.adapter ? `${UU.adapter.vendor}/${UU.adapter.architecture}` : "none";
      return `backend ${UU.backend}: reason ${UU.reason}, source ${UU.source}, adapter ${RU}`
    }
    gU.d(RU, {
      e: () => tU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);