export const id = 49;
export const ids = [49];
export const modules = {
  4706: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => VG
    });
    var wG = ZG(17),
      SG = ZG(19),
      LG = ZG(1251),
      yG = ZG(2801);
    const kG = 3e4,
      UG = 1e3;

    function YG() {
      return "visible" === document.visibilityState && "inGame" === wG.e.get("gameState") && (0, LG.A)()
    }

    function VG(GG, bG) {
      (0, yG.n)() || function(GG, bG, ZG) {
        let wG = 0;
        const SG = setInterval((() => {
          bG() && (wG += UG, wG >= GG && (clearInterval(SG), ZG()))
        }), UG)
      }(kG, YG, (() => {
        bG().then((() => {
          GG(`saved for the player after ${kG/1e3} s of play`), (0, yG.z)(), SG.l.xh("chat", {
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
  4697: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      installRenderDebug: () => pZ,
      renderDebugPlayable: () => QZ,
      startRenderDebug: () => fZ,
      waitForDraw: () => KZ
    });
    var wG = ZG(1786),
      SG = ZG(4706),
      LG = ZG(2801);
    const yG = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function kG(GG) {
      return 7 & GG
    }

    function UG(GG) {
      return GG >>> 11 & 1
    }

    function YG(GG) {
      return [1 + (GG >>> 18 & 63), 1 + (GG >>> 24 & 63)]
    }

    function VG(GG, bG) {
      const [ZG, , wG] = GG, SG = kG(wG), LG = function(GG, bG, ZG) {
        return bG + (1 === (22 >>> GG & 1) ? 4 - ZG : ZG) & 3
      }(SG, UG(wG), bG), yG = SG >>> 1, [VG, pG] = YG(ZG), fG = 1 === LG || 2 === LG ? VG : 0, QG = LG >= 2 ? pG : 0, KG = [63 & ZG, ZG >>> 6 & 63, ZG >>> 12 & 63];
      return KG[2 === yG ? 0 : 2] += fG, KG[1 === yG ? 0 : 1] += QG, KG
    }

    function pG(GG) {
      const bG = Math.max(...YG(GG[0]));
      return 1 === bG ? "1" : bG <= 4 ? "2-4" : bG <= 16 ? "5-16" : "17-64"
    }
    const fG = 16;

    function QG(GG) {
      let bG = 2166136261;
      for (let ZG = 0; ZG < GG.length; ZG++) bG = Math.imul(bG ^ GG[ZG], 16777619);
      return bG >>> 0
    }

    function KG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const wG = Math.max(0, bG - ZG),
        SG = Math.min(GG.length, bG + ZG),
        LG = [];
      for (let yG = wG; yG < SG; yG++) {
        const ZG = GG[yG].toString(16).padStart(2, "0");
        LG.push(yG === bG ? `[${ZG}]` : ZG)
      }
      return LG.join(" ")
    }
    const hG = {
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
      dG = "_vs2fs_location0";
    const JG = 0,
      rG = 4,
      zG = 6,
      EG = [0, 1, 2, 0, 2, 3],
      oG = 2048,
      XG = 4,
      uG = 256,
      iG = 64,
      CG = 268435456,
      WG = 65536,
      mG = /^#version [^\n]*\/\/ program (\S+)$/m;

    function IG(GG) {
      return null === GG.name ? `#${GG.id}` : `#${GG.id} ${GG.name}`
    }
    const FG = [],
      vG = new WeakMap,
      aG = new WeakMap,
      cG = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let lG = 1;
    const jG = new WeakMap;

    function PG(GG) {
      if (null === GG) return 0;
      let bG = jG.get(GG);
      return void 0 === bG && (bG = lG++, jG.set(GG, bG)), bG
    }
    class MG {
      constructor(GG, bG) {
        this.print = GG, this.now = bG, this.shown = 0, this.Ik = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.vQ = [], this.dropped = 0
      }
      line(GG) {
        const bG = this.now();
        if (bG - this.second >= 1e3 && (this.second = bG, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.Ik++, void this.store(GG);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${GG} (the last line here: the rest go to bloxdDebug.save())` : GG)
      }
      keep(GG) {
        this.sections++, this.store(GG)
      }
      store(GG) {
        this.vQ.push(`${new Date(Date.now()).toISOString()} ${GG}`), this.vQ.length > 2e4 && (this.vQ.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.Ik} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.vQ].join("\n")
      }
    }
    let AG = null;

    function sG() {
      if (null === AG) {
        const GG = new MG((GG => {
          (0, LG.j)("render", GG)
        }), (() => performance.now()));
        (0, LG.i)("render", (() => GG.dump())), AG = GG
      }
      return AG
    }

    function qG(GG) {
      sG().line(GG)
    }

    function nG(GG) {
      sG().keep(GG)
    }

    function gG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return GG.length <= bG ? GG : `${GG.slice(0,bG)}... (${GG.length-bG} more characters)`
    }

    function eG(GG, bG, ZG, wG, SG, LG) {
      const yG = cG.pendingCheck;
      if (null === yG) return;
      const kG = "undefined" !== typeof WebGL2RenderingContext && GG instanceof WebGL2RenderingContext,
        UG = {
          gl: GG,
          program: ZG,
          call: wG,
          Bh: SG,
          instances: LG,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (yG.draws.push(UG), kG) try {
        const wG = function(GG) {
          const bG = [],
            ZG = new Map,
            wG = Math.min(16, GG.getParameter(hG.MAX_VERTEX_ATTRIBS));
          for (let SG = 0; SG < wG; SG++) {
            if (!GG.getVertexAttrib(SG, hG.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const wG = GG.getVertexAttrib(SG, hG.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              LG = GG.getVertexAttribOffset(SG, hG.VERTEX_ATTRIB_ARRAY_POINTER),
              yG = GG.getVertexAttrib(SG, hG.VERTEX_ATTRIB_ARRAY_STRIDE),
              kG = GG.getVertexAttrib(SG, hG.VERTEX_ATTRIB_ARRAY_SIZE),
              UG = GG.getVertexAttrib(SG, hG.VERTEX_ATTRIB_ARRAY_TYPE),
              YG = "VERTEX_ATTRIB_ARRAY_INTEGER" in GG && GG.getVertexAttrib(SG, hG.VERTEX_ATTRIB_ARRAY_INTEGER),
              VG = "VERTEX_ATTRIB_ARRAY_DIVISOR" in GG ? GG.getVertexAttrib(SG, hG.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            ZG.set(SG, {
              buffer: wG,
              offset: LG,
              stride: yG
            }), bG.push(`@${SG} buf#${PG(wG)} +${LG} stride ${yG} ${kG}x0x${UG.toString(16)}${YG?" int":""} div ${VG}`)
          }
          return {
            lines: bG,
            byLocation: ZG
          }
        }(GG);
        if (UG.attributes = wG.lines, "inst" === ZG.terrain) {
          const {
            group: SG,
            chunk: kG
          } = function(GG, bG, ZG) {
            const wG = bG.get(zG),
              SG = GG.getVertexAttrib(zG, hG.CURRENT_VERTEX_ATTRIB),
              LG = wG ? `+${wG.offset}` : SG ? Array.from(SG).slice(0, 3).join(",") : "?";
            let yG = ZG.groups.get(LG);
            return void 0 === yG && (yG = ZG.groups.size, ZG.groups.set(LG, yG)), {
              group: yG,
              chunk: LG
            }
          }(GG, wG.byLocation, yG);
          UG.group = SG, UG.chunk = kG;
          for (const GG of [JG, rG]) {
            var YG;
            const bG = null === (YG = wG.byLocation.get(GG)) || void 0 === YG ? void 0 : YG.buffer;
            bG && UG.pages.push({
              kind: "buf",
              buffer: bG
            })
          }! function(GG, bG, ZG, wG, SG, LG, yG) {
            const kG = wG.get(JG),
              UG = yG.parts.get(LG);
            if (void 0 === UG && yG.parts.size >= XG) return;
            const YG = Math.min(SG, iG, uG - (null !== UG && void 0 !== UG ? UG : 0));
            if (null === kG || void 0 === kG || !kG.buffer || YG <= 0) return;
            const VG = RG(GG, bG, ZG);
            if (!VG) return;
            const pG = kG.stride || 12,
              fG = NG(GG, kG.buffer, kG.offset, (YG - 1) * pG + 12),
              QG = new DataView(fG.buffer),
              KG = function(GG, bG) {
                const ZG = function(GG) {
                    const bG = BG.get(GG);
                    if (void 0 !== bG && (null === bG || GG.isProgram(bG))) return bG;
                    cG.inProbe = !0;
                    let ZG = null;
                    try {
                      ZG = TG(GG, OG, xG, "fed", "the record feed")
                    } finally {
                      cG.inProbe = !1
                    }
                    return BG.set(GG, ZG), ZG
                  }(GG),
                  wG = ZG ? DG(GG, ZG, bG, (() => {
                    GG.drawArraysInstanced(hG.POINTS, 0, 1, bG)
                  }), "decode probe input (the record feed)") : null;
                return wG ? new Uint32Array(wG.buffer) : null
              }(GG, YG);
            KG || yG.fed.failed++;
            const dG = DG(GG, VG, 4 * YG, (() => {
              GG.drawArraysInstanced(hG.POINTS, 0, 4, YG)
            }));
            if (!dG) return;
            yG.parts.set(LG, (null !== UG && void 0 !== UG ? UG : 0) + YG);
            for (let hG = 0; hG < YG; hG++) {
              const GG = hG * pG,
                bG = [QG.getUint32(GG, !0), QG.getUint32(GG + 4, !0), QG.getUint32(GG + 8, !0)],
                ZG = KG ? [KG[3 * hG], KG[3 * hG + 1], KG[3 * hG + 2]] : bG;
              KG && (yG.fed.records++, ZG.some(((GG, ZG) => GG !== bG[ZG])) && (yG.fed.differing++, yG.fed.first.length < 8 && yG.fed.first.push(`part ${LG} instance ${hG}: fed ${ZG.map(Sb).join(" ")} buffer ${bG.map(Sb).join(" ")}`)));
              for (let wG = 0; wG < 4; wG++) {
                const GG = 3 * (4 * hG + wG);
                yG.vertices.push({
                  record: ZG,
                  slot: wG,
                  group: LG,
                  gpu: [dG[GG], dG[GG + 1], dG[GG + 2]]
                })
              }
            }
          }(GG, bG, ZG, wG.byLocation, LG, SG, yG)
        } else {
          const wG = Gb(GG, bG, 16),
            LG = Gb(GG, bG, 8);
          for (const GG of [wG, LG]) GG && UG.pages.push({
            kind: "tex",
            texture: GG
          });
          wG && function(GG, bG, ZG, wG, SG, LG) {
            if (LG.parts.size >= XG) return;
            const yG = RG(GG, bG, ZG);
            if (!yG) return;
            let kG = 6 * uG;
            const UG = [];
            for (const [QG, KG] of SG) {
              const GG = Math.min(KG, kG, Math.max(6, 6 * Math.floor(uG / SG.length)));
              GG > 0 && (UG.push([QG, GG]), kG -= GG)
            }
            const YG = UG.reduce(((GG, bG) => {
                let [, ZG] = bG;
                return GG + ZG
              }), 0),
              VG = DG(GG, yG, YG, (() => {
                for (const [bG, ZG] of UG) GG.drawArrays(hG.POINTS, bG, ZG)
              }));
            if (!VG) return;
            let pG = 0;
            for (const [QG, KG] of UG) {
              const bG = Math.floor(QG / 6),
                ZG = Math.floor((QG + KG - 1) / 6) - bG + 1,
                SG = bb(GG, wG, oG, bG, ZG);
              for (let GG = QG; GG < QG + KG; GG++, pG++) {
                var fG;
                const ZG = 4 * (Math.floor(GG / 6) - bG),
                  wG = [SG[ZG], SG[ZG + 1], SG[ZG + 2]];
                LG.parts.set(SG[ZG + 3], (null !== (fG = LG.parts.get(SG[ZG + 3])) && void 0 !== fG ? fG : 0) + (GG % 6 === 0 ? 1 : 0)), LG.vertices.push({
                  record: wG,
                  slot: EG[GG % 6],
                  group: SG[ZG + 3],
                  gpu: [VG[3 * pG], VG[3 * pG + 1], VG[3 * pG + 2]]
                })
              }
            }
          }(GG, bG, ZG, wG, SG, yG)
        }
      } catch (VG) {
        qG(`decode probe failed on program ${IG(ZG)}: ${String(VG)}`)
      }
    }

    function RG(GG, bG, ZG) {
      if (void 0 !== ZG.probe) return ZG.probe && HG(GG, bG, ZG.probe), ZG.probe;
      ZG.probe = null, cG.inProbe = !0;
      try {
        ZG.probe = function(GG, bG) {
          return TG(GG, (ZG = bG.vertex, ZG.replace(`\nvec3 ${dG} = vec3(0);\n`, `\nout vec3 ${dG};\n`)), bG.fragment, dG, `program ${IG(bG)}'s twin`);
          var ZG
        }(GG, ZG)
      } finally {
        cG.inProbe = !1
      }
      return ZG.probe && HG(GG, bG, ZG.probe), ZG.probe
    }

    function TG(GG, bG, ZG, wG, SG) {
      const LG = [GG.createShader(hG.VERTEX_SHADER), GG.createShader(hG.FRAGMENT_SHADER)],
        yG = GG.createProgram();
      if (!yG || !LG[0] || !LG[1]) return null;
      GG.shaderSource(LG[0], bG), GG.shaderSource(LG[1], ZG);
      for (const UG of LG) GG.compileShader(UG), GG.attachShader(yG, UG);
      GG.transformFeedbackVaryings(yG, [wG], hG.INTERLEAVED_ATTRIBS), GG.linkProgram(yG);
      for (const UG of LG) GG.deleteShader(UG);
      var kG;
      return GG.getProgramParameter(yG, hG.LINK_STATUS) ? yG : (qG(`decode probe: ${SG} failed to link: ${gG(null!==(kG=GG.getProgramInfoLog(yG))&&void 0!==kG?kG:"",300)}`), GG.deleteProgram(yG), null)
    }

    function HG(GG, bG, ZG) {
      const wG = GG.getProgramParameter(bG, hG.ACTIVE_UNIFORM_BLOCKS);
      for (let kG = 0; kG < wG; kG++) {
        const wG = GG.getActiveUniformBlockName(bG, kG),
          SG = null === wG ? hG.INVALID_INDEX : GG.getUniformBlockIndex(ZG, wG);
        SG !== hG.INVALID_INDEX && GG.uniformBlockBinding(ZG, SG, GG.getActiveUniformBlockParameter(bG, kG, hG.UNIFORM_BLOCK_BINDING))
      }
      const SG = GG.getParameter(hG.CURRENT_PROGRAM);
      GG.useProgram(ZG);
      const LG = GG.getProgramParameter(bG, hG.ACTIVE_UNIFORMS),
        yG = GG.getActiveUniforms(bG, [...Array(LG).keys()], hG.UNIFORM_BLOCK_INDEX);
      for (let kG = 0; kG < LG; kG++) {
        const wG = GG.getActiveUniform(bG, kG);
        if (!wG || -1 !== yG[kG]) continue;
        const SG = wG.name.replace(/\[0\]$/, "");
        for (let LG = 0; LG < wG.size; LG++) {
          const yG = wG.size > 1 ? `${SG}[${LG}]` : wG.name,
            kG = GG.getUniformLocation(bG, yG),
            UG = GG.getUniformLocation(ZG, yG);
          kG && UG && tG(GG, UG, wG.type, GG.getUniform(bG, kG))
        }
      }
      GG.useProgram(SG)
    }

    function tG(GG, bG, ZG, wG) {
      const SG = ArrayBuffer.isView(wG) ? Array.from(wG) : [Number(wG)];
      switch (ZG) {
        case hG.FLOAT:
          return void GG.uniform1f(bG, SG[0]);
        case hG.FLOAT_VEC2:
          return void GG.uniform2fv(bG, SG);
        case hG.FLOAT_VEC3:
          return void GG.uniform3fv(bG, SG);
        case hG.FLOAT_VEC4:
          return void GG.uniform4fv(bG, SG);
        case hG.FLOAT_MAT3:
          return void GG.uniformMatrix3fv(bG, !1, SG);
        case hG.FLOAT_MAT4:
          return void GG.uniformMatrix4fv(bG, !1, SG);
        case hG.UNSIGNED_INT:
          return void GG.uniform1ui(bG, SG[0]);
        case hG.UNSIGNED_INT_VEC2:
          return void GG.uniform2uiv(bG, SG);
        case hG.UNSIGNED_INT_VEC3:
          return void GG.uniform3uiv(bG, SG);
        case hG.UNSIGNED_INT_VEC4:
          return void GG.uniform4uiv(bG, SG);
        case hG.INT_VEC2:
          return void GG.uniform2iv(bG, SG);
        case hG.INT_VEC3:
          return void GG.uniform3iv(bG, SG);
        case hG.INT_VEC4:
          return void GG.uniform4iv(bG, SG);
        default:
          GG.uniform1i(bG, SG[0])
      }
    }

    function DG(GG, bG, ZG, wG) {
      let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const LG = GG.getParameter(hG.CURRENT_PROGRAM),
        yG = GG.getParameter(hG.TRANSFORM_FEEDBACK_BINDING),
        kG = GG.getParameter(hG.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        UG = GG.getParameter(hG.COPY_READ_BUFFER_BINDING),
        YG = GG.isEnabled(hG.RASTERIZER_DISCARD),
        VG = GG.createTransformFeedback(),
        pG = GG.createBuffer();
      cG.inProbe = !0;
      try {
        const LG = GG.getError();
        LG !== hG.NO_ERROR && qG(`GL error 0x${LG.toString(16)} pending before the decode probe (the renderer's)`), GG.useProgram(bG), GG.bindTransformFeedback(hG.TRANSFORM_FEEDBACK, VG), GG.bindBuffer(hG.TRANSFORM_FEEDBACK_BUFFER, pG), GG.bufferData(hG.TRANSFORM_FEEDBACK_BUFFER, 12 * ZG, hG.STREAM_READ), GG.bindBufferBase(hG.TRANSFORM_FEEDBACK_BUFFER, 0, pG), GG.enable(hG.RASTERIZER_DISCARD), GG.beginTransformFeedback(hG.POINTS), wG(), GG.endTransformFeedback(), GG.bindBufferBase(hG.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const yG = GG.getError();
        if (yG !== hG.NO_ERROR) return qG(`${SG}: GL error 0x${yG.toString(16)} on the feedback draw`), null;
        const kG = new Float32Array(3 * ZG);
        return GG.bindBuffer(hG.COPY_READ_BUFFER, pG), GG.getBufferSubData(hG.COPY_READ_BUFFER, 0, kG), kG
      } finally {
        YG || GG.disable(hG.RASTERIZER_DISCARD), GG.bindTransformFeedback(hG.TRANSFORM_FEEDBACK, yG), GG.bindBuffer(hG.TRANSFORM_FEEDBACK_BUFFER, kG), GG.bindBuffer(hG.COPY_READ_BUFFER, UG), GG.deleteTransformFeedback(VG), GG.deleteBuffer(pG), GG.useProgram(LG), cG.inProbe = !1
      }
    }

    function NG(GG, bG, ZG, wG) {
      const SG = GG.getParameter(hG.COPY_READ_BUFFER_BINDING),
        LG = new Uint8Array(wG);
      return GG.bindBuffer(hG.COPY_READ_BUFFER, bG), GG.getBufferSubData(hG.COPY_READ_BUFFER, ZG, LG), GG.bindBuffer(hG.COPY_READ_BUFFER, SG), LG
    }
    const OG = `#version 300 es\nlayout(location = ${JG}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      xG = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      BG = new WeakMap;

    function Gb(GG, bG, ZG) {
      const wG = GG.getProgramParameter(bG, hG.ACTIVE_UNIFORMS),
        SG = GG.getParameter(hG.ACTIVE_TEXTURE);
      try {
        for (let SG = 0; SG < wG; SG++) {
          const wG = GG.getActiveUniform(bG, SG);
          if ((null === wG || void 0 === wG ? void 0 : wG.type) !== hG.UNSIGNED_INT_SAMPLER_2D) continue;
          const LG = GG.getUniformLocation(bG, wG.name),
            yG = LG ? GG.getUniform(bG, LG) : -1;
          if (yG < 0) continue;
          GG.activeTexture(hG.TEXTURE0 + yG);
          const kG = GG.getParameter(hG.TEXTURE_BINDING_2D);
          if (kG && aG.get(kG) === ZG) return kG
        }
        return null
      } finally {
        GG.activeTexture(SG)
      }
    }

    function bb(GG, bG, ZG, wG, SG) {
      const LG = new Uint32Array(4 * SG),
        yG = GG.getParameter(hG.READ_FRAMEBUFFER_BINDING),
        kG = GG.createFramebuffer();
      GG.bindFramebuffer(hG.READ_FRAMEBUFFER, kG), GG.framebufferTexture2D(hG.READ_FRAMEBUFFER, hG.COLOR_ATTACHMENT0, hG.TEXTURE_2D, bG, 0);
      try {
        let bG = 0;
        for (; bG < SG;) {
          const yG = wG + bG,
            kG = yG % ZG,
            UG = Math.min(SG - bG, ZG - kG);
          GG.readPixels(kG, Math.floor(yG / ZG), UG, 1, hG.RGBA_INTEGER, hG.UNSIGNED_INT, LG.subarray(4 * bG, 4 * (bG + UG))), bG += UG
        }
      } finally {
        GG.bindFramebuffer(hG.READ_FRAMEBUFFER, yG), GG.deleteFramebuffer(kG)
      }
      return LG
    }

    function Zb(GG, bG, ZG) {
      let wG = 0,
        SG = 0;
      for (let UG = 0; UG < bG.bytes.length; UG += WG) {
        wG++;
        const GG = Math.min(UG + WG, bG.bytes.length);
        QG(bG.bytes.subarray(UG, GG)) !== QG(ZG.subarray(UG, GG)) && SG++
      }
      const LG = `${GG} ${bG.bytes.length} B cpu ${QG(bG.bytes).toString(16)} gpu ${QG(ZG).toString(16)}, ${SG}/${wG} blocks differ${bG.missed?`, ${bG.missed} GPU-side writes uncopied`:""}`;
      if (0 === SG) return LG;
      const {
        count: yG,
        offsets: kG
      } = function(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const wG = Math.min(GG.length, bG.length);
        let SG = Math.abs(GG.length - bG.length);
        const LG = [];
        for (let yG = 0; yG < wG; yG++) GG[yG] !== bG[yG] && (SG++, LG.length < ZG && LG.push(yG));
        return {
          count: SG,
          offsets: LG
        }
      }(bG.bytes, ZG);
      return nG([`${LG}: ${yG} bytes differ`, ...kG.map((GG => `  +${GG}: cpu ${KG(bG.bytes,GG)} | gpu ${KG(ZG,GG)}`))].join("\n")), `${LG}: ${yG} bytes differ, first at ${kG.join(", ")} (context in the saved file)`
    }

    function wb(GG) {
      if (0 === GG.vertices.length) return void qG(`decode probe (${GG.reason}): no terrain draw probed (${GG.draws.length} seen)`);
      const bG = function(GG) {
          const bG = new Map;
          for (const wG of GG) {
            const GG = bG.get(wG.group);
            GG ? GG.push(wG) : bG.set(wG.group, [wG])
          }
          const ZG = {
            vertices: GG.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [wG, SG] of bG) {
            const GG = new Map,
              bG = SG.map((bG => {
                const ZG = VG(bG.record, bG.slot),
                  wG = [bG.gpu[0] - ZG[0], bG.gpu[1] - ZG[1], bG.gpu[2] - ZG[2]],
                  SG = wG.map((GG => Math.round(64 * GG))).join(","),
                  LG = GG.get(SG);
                return LG ? LG.count++ : GG.set(SG, {
                  count: 1,
                  offset: wG
                }), ZG
              }));
            let LG = [0, 0, 0],
              yG = 0;
            for (const ZG of GG.values()) ZG.count > yG && (yG = ZG.count, LG = ZG.offset);
            ZG.translations.set(wG, LG), SG.forEach(((GG, wG) => {
              var SG;
              const yG = [bG[wG][0] + LG[0], bG[wG][1] + LG[1], bG[wG][2] + LG[2]];
              if (yG.every(((bG, ZG) => {
                  return wG = GG.gpu[ZG], SG = bG, Math.abs(wG - SG) <= Math.max(.001, 1e-6 * Math.abs(SG));
                  var wG, SG
                }))) return;
              ZG.mismatches++, ZG.byDirection[kG(GG.record[2])]++, ZG.byDiagonal[UG(GG.record[2])]++;
              const YG = pG(GG.record);
              ZG.byBand[YG] = (null !== (SG = ZG.byBand[YG]) && void 0 !== SG ? SG : 0) + 1, ZG.first.length < fG && ZG.first.push({
                ...GG,
                expected: yG
              })
            }))
          }
          return ZG
        }(GG.vertices),
        ZG = bG.byDirection.map(((GG, bG) => GG ? `${yG[bG]} ${GG}` : "")).filter(Boolean).join(" "),
        wG = Object.entries(bG.byBand).map((GG => {
          let [bG, ZG] = GG;
          return `${bG}: ${ZG}`
        })).join(" ");
      if (qG(`decode probe (${GG.reason}): ${bG.mismatches}/${bG.vertices} vertices differ from the CPU decode over ${GG.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (bG.mismatches ? ` by direction [${ZG}] diagonal [0: ${bG.byDiagonal[0]} 1: ${bG.byDiagonal[1]}] extent [${wG}]` : "")), GG.fed.records > 0 || GG.fed.failed > 0) {
        qG(`decode probe input: ${GG.fed.differing}/${GG.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (GG.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (GG.fed.failed ? `; the feed failed on ${GG.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const bG of GG.fed.first) qG(`  ${bG}`)
      }
      for (const SG of bG.first) {
        const [GG, bG, ZG] = SG.record;
        qG(`  mismatch part ${SG.group} r0 ${GG.toString(16)} r1 ${bG.toString(16)} r2 ${ZG.toString(16)} slot ${SG.slot} (${yG[kG(ZG)]}): expected ${SG.expected.map(Lb).join(",")} gpu ${SG.gpu.map(Lb).join(",")}`)
      }
      nG(`decode probe translations: ${[...bG.translations].map((GG=>{let[bG,ZG]=GG;return`${bG}: ${ZG.map(Lb).join(",")}`})).join("; ")}`)
    }

    function Sb(GG) {
      return GG.toString(16)
    }

    function Lb(GG) {
      return Number.isInteger(GG) ? String(GG) : GG.toFixed(3)
    }

    function yb(GG) {
      return null !== cG.pendingCheck ? Promise.resolve() : new Promise((bG => {
        let ZG = !1;
        const wG = {
          reason: GG,
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
        cG.pendingCheck = wG;
        const SG = () => {
            cG.pendingCheck = null;
            try {
              ! function(GG) {
                qG(`draw ranges (${GG.reason}): ${GG.terrainDraws} terrain draws in the frame, the first ${GG.draws.length} here`);
                for (const bG of GG.draws) {
                  const GG = bG.Bh.slice(0, 8).map((GG => {
                      let [bG, ZG] = GG;
                      return `${bG}+${ZG}`
                    })).join(" "),
                    ZG = bG.Bh.length > 8 ? ` (+${bG.Bh.length-8} ranges)` : "";
                  qG(`  ${IG(bG.program)} ${bG.program.terrain} ${bG.call} ${GG}${ZG} x${bG.instances}${bG.group>=0?` part ${bG.group} chunk ${bG.chunk}`:""} | ${bG.attributes.join(" | ")}`)
                }
              }(wG), wb(wG);
              wG.draws.some((GG => "undefined" !== typeof WebGL2RenderingContext && GG.gl instanceof WebGL2RenderingContext)) || 0 === wG.draws.length ? function(GG) {
                const bG = [],
                  ZG = new Map;
                for (const wG of GG)
                  if ("undefined" !== typeof WebGL2RenderingContext && wG.gl instanceof WebGL2RenderingContext)
                    for (const GG of wG.pages) ZG.set("buf" === GG.kind ? GG.buffer : GG.texture, {
                      page: GG,
                      gl: wG.gl
                    });
                for (const [wG, {
                    page: SG,
                    gl: LG
                  }] of ZG) {
                  const GG = vG.get(wG);
                  if (!GG) {
                    bG.push(`${SG.kind}#${PG(wG)}: no CPU copy (${cG.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === SG.kind) {
                    bG.push(Zb(`buf#${GG.id}`, GG, NG(LG, SG.buffer, 0, GG.bytes.length)));
                    continue
                  }
                  const ZG = bb(LG, SG.texture, GG.width, 0, GG.width * GG.height),
                    yG = 16 === GG.texelBytes ? new Uint8Array(ZG.buffer) : new Uint8Array(new Uint16Array(ZG).buffer);
                  bG.push(Zb(`tex#${GG.id} (${16===GG.texelBytes?"records":"light"})`, GG, yG))
                }
                for (const wG of bG) qG(`page readback ${wG}`)
              }(wG.draws) : qG("page readback: none on WebGL1 (no buffer readback)")
            } catch (GG) {
              qG(`check failed: ${String(GG)}`)
            }
            bG()
          },
          LG = () => {
            if (wG.draws.length > 0 && !ZG) return ZG = !0, void setTimeout(SG, 0);
            ZG || requestAnimationFrame(LG)
          };
        requestAnimationFrame(LG), setTimeout((() => {
          ZG || (ZG = !0, SG())
        }), 5e3)
      }))
    }
    var kb = ZG(4708);
    const Ub = 20,
      Yb = 24,
      Vb = Reflect.apply;

    function pb(GG, bG, ZG) {
      if (!GG) return;
      const wG = GG[bG];
      if ("function" === typeof wG) {
        const SG = ZG(wG);
        GG[bG] = SG, (0, kb.v)(SG, wG)
      }
    }
    let fb = !1;
    const Qb = new WeakMap,
      Kb = new WeakMap,
      hb = new WeakMap,
      db = {
        gl: 0,
        lost: 0
      };
    let Jb = {
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
      rb = {
        buffer: 0,
        texture: 0
      },
      zb = 0;

    function Eb(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (GG instanceof ArrayBuffer) return new Uint8Array(GG, bG, ZG || void 0);
      if (!ArrayBuffer.isView(GG)) return null;
      const wG = "BYTES_PER_ELEMENT" in GG ? GG.BYTES_PER_ELEMENT : 1,
        SG = GG.byteOffset + bG * wG,
        LG = ZG ? ZG * wG : GG.byteLength - bG * wG;
      return new Uint8Array(GG.buffer, SG, Math.max(0, LG))
    }

    function ob(GG, bG) {
      const ZG = function(GG) {
        switch (GG) {
          case hG.ARRAY_BUFFER:
            return hG.ARRAY_BUFFER_BINDING;
          case hG.ELEMENT_ARRAY_BUFFER:
            return hG.ELEMENT_ARRAY_BUFFER_BINDING;
          case hG.COPY_READ_BUFFER:
            return hG.COPY_READ_BUFFER_BINDING;
          case hG.COPY_WRITE_BUFFER:
            return hG.COPY_WRITE_BUFFER_BINDING;
          case hG.UNIFORM_BUFFER:
            return hG.UNIFORM_BUFFER_BINDING;
          case hG.PIXEL_UNPACK_BUFFER:
            return hG.PIXEL_UNPACK_BUFFER_BINDING;
          case hG.TRANSFORM_FEEDBACK_BUFFER:
            return hG.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(bG);
      return ZG ? GG.getParameter(ZG) : null
    }

    function Xb(GG) {
      const bG = vG.get(GG);
      bG && (cG.shadowBytes -= bG.bytes.length, vG.delete(GG))
    }

    function ub(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      Xb(GG), cG.shadowBytes + bG > CG ? cG.uncopied++ : (cG.shadowBytes += bG, vG.set(GG, {
        id: PG(GG),
        bytes: new Uint8Array(bG),
        width: ZG,
        height: wG,
        texelBytes: SG,
        missed: 0
      }))
    }

    function ib(GG, bG) {
      for (const ZG of ["deleteBuffer", "deleteTexture"]) pb(GG, ZG, (GG => function() {
        for (var bG = arguments.length, ZG = new Array(bG), wG = 0; wG < bG; wG++) ZG[wG] = arguments[wG];
        return ZG[0] && Xb(ZG[0]), Vb(GG, this, ZG)
      }));
      pb(GG, "shaderSource", (GG => function() {
        for (var bG = arguments.length, ZG = new Array(bG), wG = 0; wG < bG; wG++) ZG[wG] = arguments[wG];
        return ZG[0] && "string" === typeof ZG[1] && Qb.set(ZG[0], ZG[1]), Vb(GG, this, ZG)
      })), pb(GG, "attachShader", (GG => function() {
        for (var bG, ZG = arguments.length, wG = new Array(ZG), SG = 0; SG < ZG; SG++) wG[SG] = arguments[SG];
        const LG = wG[0],
          yG = null !== (bG = Kb.get(LG)) && void 0 !== bG ? bG : [];
        return yG.push(wG[1]), Kb.set(LG, yG), Vb(GG, this, wG)
      })), pb(GG, "linkProgram", (GG => function() {
        for (var bG = arguments.length, ZG = new Array(bG), wG = 0; wG < bG; wG++) ZG[wG] = arguments[wG];
        const SG = Vb(GG, this, ZG);
        return cG.inProbe || function(GG, bG) {
          var ZG, wG, SG;
          "undefined" !== typeof HTMLCanvasElement && GG.canvas instanceof HTMLCanvasElement && function(GG) {
            if (vb.has(GG)) return;
            vb.add(GG);
            for (const bG of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) GG.addEventListener(bG, (GG => {
              db.lost < Ub && (db.lost++, qG(`${bG}${"statusMessage"in GG?`: ${String(GG.statusMessage)}`:""}`))
            }))
          }(GG.canvas);
          cG.context ??= GG;
          const LG = null !== (ZG = Kb.get(bG)) && void 0 !== ZG ? ZG : [];
          let yG = "",
            kG = "";
          for (const VG of LG) {
            var UG;
            const GG = null !== (UG = Qb.get(VG)) && void 0 !== UG ? UG : "";
            /\bgl_Position\b/.test(GG) ? yG = GG : kG = GG
          }
          const YG = {
            id: PG(bG),
            name: null !== (wG = null === (SG = mG.exec(yG)) || void 0 === SG ? void 0 : SG[1]) && void 0 !== wG ? wG : null,
            gl: GG,
            vertex: yG,
            fragment: kG,
            terrain: Wb(yG),
            checked: !1,
            firstDraw: !1
          };
          if (hb.set(bG, YG), FG.push([bG, YG]), null !== YG.terrain) {
            const bG = LG.map((bG => {
              var ZG;
              return null !== (ZG = GG.getShaderInfoLog(bG)) && void 0 !== ZG ? ZG : ""
            })).filter((GG => "" !== GG.trim()));
            bG.length > 0 && nG(`program ${IG(YG)} (${YG.terrain}) shader logs:\n${gG(bG.join("\n"))}`)
          }
        }(this, ZG[0]), SG
      })), pb(GG, "bufferData", (GG => function() {
        for (var bG = arguments.length, ZG = new Array(bG), wG = 0; wG < bG; wG++) ZG[wG] = arguments[wG];
        const SG = Vb(GG, this, ZG);
        if (!cG.inProbe) {
          const GG = ob(this, ZG[0]);
          if (GG) {
            var LG, yG, kG;
            const bG = "number" === typeof ZG[1] ? null : Eb(ZG[1], null !== (LG = ZG[3]) && void 0 !== LG ? LG : 0, null !== (yG = ZG[4]) && void 0 !== yG ? yG : 0);
            var UG;
            if (ub(GG, "number" === typeof ZG[1] ? ZG[1] : null !== (kG = null === bG || void 0 === bG ? void 0 : bG.length) && void 0 !== kG ? kG : 0), bG) null === (UG = vG.get(GG)) || void 0 === UG || UG.bytes.set(bG)
          }
        }
        return SG
      })), pb(GG, "bufferSubData", (GG => function() {
        for (var bG = arguments.length, ZG = new Array(bG), wG = 0; wG < bG; wG++) ZG[wG] = arguments[wG];
        const SG = Vb(GG, this, ZG);
        if (!cG.inProbe) {
          var LG, yG;
          const GG = ob(this, ZG[0]),
            bG = GG ? vG.get(GG) : void 0,
            wG = Eb(ZG[2], null !== (LG = ZG[3]) && void 0 !== LG ? LG : 0, null !== (yG = ZG[4]) && void 0 !== yG ? yG : 0);
          if (bG && wG) {
            const GG = ZG[1];
            bG.bytes.set(wG.subarray(0, Math.max(0, bG.bytes.length - GG)), GG), Cb("buffer", bG, GG, wG.length)
          }
        }
        return SG
      })), bG && (pb(GG, "copyBufferSubData", (GG => function() {
        for (var bG = arguments.length, ZG = new Array(bG), wG = 0; wG < bG; wG++) ZG[wG] = arguments[wG];
        const SG = Vb(GG, this, ZG);
        if (!cG.inProbe) {
          const [GG, bG, wG, SG, LG] = ZG, yG = ob(this, GG), kG = ob(this, bG), UG = yG ? vG.get(yG) : void 0, YG = kG ? vG.get(kG) : void 0;
          YG && (UG ? YG.bytes.set(UG.bytes.slice(wG, wG + LG), SG) : YG.missed++)
        }
        return SG
      })), pb(GG, "texStorage2D", (GG => function() {
        for (var bG = arguments.length, ZG = new Array(bG), wG = 0; wG < bG; wG++) ZG[wG] = arguments[wG];
        const SG = Vb(GG, this, ZG),
          [, , LG, yG, kG] = ZG;
        if (!cG.inProbe && (LG === hG.RGBA32UI || LG === hG.RGBA16UI)) {
          const GG = this.getParameter(hG.TEXTURE_BINDING_2D),
            bG = LG === hG.RGBA32UI ? 16 : 8;
          GG && (aG.set(GG, bG), ub(GG, yG * kG * bG, yG, kG, bG))
        }
        return SG
      })), pb(GG, "texSubImage2D", (GG => function() {
        for (var bG = arguments.length, ZG = new Array(bG), wG = 0; wG < bG; wG++) ZG[wG] = arguments[wG];
        const SG = Vb(GG, this, ZG);
        return !cG.inProbe && ZG.length >= 9 && ZG[0] === hG.TEXTURE_2D && 0 === ZG[1] && function(GG, bG) {
          var ZG;
          const wG = GG.getParameter(hG.TEXTURE_BINDING_2D),
            SG = wG ? vG.get(wG) : void 0;
          if (!SG) return;
          const [, , LG, yG, kG, UG] = bG;
          let YG = Eb(bG[8], null !== (ZG = bG[9]) && void 0 !== ZG ? ZG : 0);
          if (null === YG && "number" === typeof bG[8]) {
            const ZG = ob(GG, hG.PIXEL_UNPACK_BUFFER),
              wG = ZG ? vG.get(ZG) : void 0;
            YG = wG ? wG.bytes.subarray(bG[8]) : null
          }
          if (null === YG) return void SG.missed++;
          const VG = GG.getParameter(hG.UNPACK_ROW_LENGTH) || kG,
            pG = GG.getParameter(hG.UNPACK_SKIP_ROWS),
            fG = GG.getParameter(hG.UNPACK_SKIP_PIXELS),
            QG = SG.texelBytes;
          for (let KG = 0; KG < UG; KG++) {
            const GG = ((pG + KG) * VG + fG) * QG,
              bG = ((yG + KG) * SG.width + LG) * QG;
            SG.bytes.set(YG.subarray(GG, GG + kG * QG), bG)
          }
          Cb("texture", SG, (yG * SG.width + LG) * QG, kG * UG * QG)
        }(this, ZG), SG
      })), pb(GG, "copyTexSubImage2D", (GG => function() {
        for (var bG = arguments.length, ZG = new Array(bG), wG = 0; wG < bG; wG++) ZG[wG] = arguments[wG];
        const SG = ZG[0] === hG.TEXTURE_2D ? this.getParameter(hG.TEXTURE_BINDING_2D) : null,
          LG = SG ? vG.get(SG) : void 0;
        return LG && LG.missed++, Vb(GG, this, ZG)
      })));
      for (const ZG of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) pb(GG, ZG, (GG => function() {
        for (var bG = arguments.length, wG = new Array(bG), SG = 0; SG < bG; SG++) wG[SG] = arguments[SG];
        const LG = Vb(GG, this, wG);
        return cG.inProbe || Ib(this, ZG, wG), LG
      }));
      pb(GG, "getExtension", (GG => function() {
        for (var bG = arguments.length, ZG = new Array(bG), wG = 0; wG < bG; wG++) ZG[wG] = arguments[wG];
        const SG = Vb(GG, this, ZG);
        return SG && "object" === typeof SG && function(GG, bG, ZG) {
          const wG = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(bG in wG) || ZG.bloxdRenderDebug) return;
          ZG.bloxdRenderDebug = !0;
          for (const SG of wG[bG]) {
            const bG = ZG[SG];
            "function" === typeof bG && (ZG[SG] = function() {
              for (var wG = arguments.length, LG = new Array(wG), yG = 0; yG < wG; yG++) LG[yG] = arguments[yG];
              const kG = Vb(bG, ZG, LG);
              return cG.inProbe || Ib(GG, SG, LG), kG
            })
          }
        }(this, ZG[0], SG), SG
      }))
    }

    function Cb(GG, bG, ZG, wG) {
      rb[GG] += wG, zb < 32 && bG.bytes.length >= 1 << 20 && (zb++, nG(`upload ${GG} #${bG.id} +${ZG} ${wG} B`))
    }

    function Wb(GG) {
      if (!GG.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(GG) || /in uvec3 _p2vs_location0\b/.test(GG) ? "inst" : "tex"
    }

    function mb(GG, bG, ZG) {
      var wG;
      if (ZG.checked) return;
      ZG.checked = !0;
      const SG = GG.getProgramParameter(bG, hG.LINK_STATUS),
        LG = (null !== (wG = GG.getProgramInfoLog(bG)) && void 0 !== wG ? wG : "").trim();
      var yG;
      null === ZG.terrain && SG || (qG(`program ${IG(ZG)} ${null!==(yG=ZG.terrain)&&void 0!==yG?yG:"other"} link ${SG?"ok":"FAILED"}${LG?`: ${gG(LG,300)}`:""}`), LG && nG(`program ${IG(ZG)} link log:\n${gG(LG)}`))
    }

    function Ib(GG, bG, ZG) {
      var wG;
      const SG = GG.getParameter(hG.CURRENT_PROGRAM),
        LG = SG ? hb.get(SG) : void 0;
      if (!SG || !LG) return;
      const yG = null !== (wG = LG.terrain) && void 0 !== wG ? wG : "other",
        {
          Bh: kG,
          instances: UG
        } = function(GG, bG) {
          switch (GG) {
            case "drawArrays":
              return {
                Bh: [
                  [bG[1], bG[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                Bh: [
                  [bG[1], bG[2]]
                ], instances: bG[3]
              };
            case "drawElements":
              return {
                Bh: [
                  [0, bG[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                Bh: [
                  [0, bG[1]]
                ], instances: bG[4]
              };
            case "multiDrawArraysWEBGL": {
              const GG = bG[1],
                ZG = bG[3],
                wG = bG[2],
                SG = bG[4],
                LG = [];
              for (let yG = 0; yG < bG[5]; yG++) LG.push([GG[wG + yG], ZG[SG + yG]]);
              return {
                Bh: LG,
                instances: 1
              }
            }
            default:
              return {
                Bh: [], instances: 0
              }
          }
        }(bG, ZG),
        YG = "inst" === LG.terrain ? UG : kG.reduce(((GG, bG) => {
          let [, ZG] = bG;
          return GG + ZG
        }), 0) / 6;
      if (Jb[yG].draws++, Jb[yG].faces += YG, null === LG.terrain) return;
      if (cG.context = GG, !LG.firstDraw) {
        LG.firstDraw = !0, mb(GG, SG, LG), Fb || (Fb = !0, qG(function(GG) {
          var bG;
          const ZG = GG.getParameter(hG.DEPTH_FUNC),
            wG = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let SG = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in GG && GG.getParameter(hG.DRAW_FRAMEBUFFER_BINDING)) {
            const bG = GG;
            SG = bG.getFramebufferAttachmentParameter(hG.DRAW_FRAMEBUFFER, hG.DEPTH_ATTACHMENT, hG.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(bG.getFramebufferAttachmentParameter(hG.DRAW_FRAMEBUFFER,hG.DEPTH_ATTACHMENT,hG.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(bG.getFramebufferAttachmentParameter(hG.DRAW_FRAMEBUFFER,hG.DEPTH_ATTACHMENT,hG.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const LG = GG.getParameter(hG.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(bG=wG[ZG])&&void 0!==bG?bG:`0x${ZG.toString(16)}`} clear ${LG}${516===ZG||518===ZG?" (reverse-Z)":""}, samples ${String(GG.getParameter(hG.SAMPLES))}, ${SG}`
        }(GG)));
        const ZG = GG.getError();
        ZG !== hG.NO_ERROR && db.gl < Ub && (db.gl++, qG(`GL error 0x${ZG.toString(16)} after program ${IG(LG)}'s first terrain draw (${bG})`))
      }
      const VG = cG.pendingCheck;
      null !== VG && (VG.terrainDraws++, VG.draws.length < Yb && eG(GG, SG, LG, bG, kG, UG))
    }
    let Fb = !1;
    const vb = new WeakSet;
    var ab = ZG(4527),
      cb = ZG(4712);
    const lb = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let jb = !1;
    const Pb = new WeakSet,
      Mb = new WeakMap,
      Ab = new WeakMap,
      sb = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let qb = 0,
      nb = !1,
      gb = null,
      eb = {
        draws: 0,
        faces: 0
      };

    function Rb(GG) {
      const bG = globalThis[GG];
      return null === bG || void 0 === bG ? void 0 : bG.prototype
    }

    function Tb(GG) {
      return GG && "function" === typeof GG[Symbol.iterator] ? [...GG].sort().join(" ") : ""
    }

    function Hb(GG, bG) {
      const ZG = null !== GG && void 0 !== GG ? GG : {},
        wG = null !== bG && void 0 !== bG ? bG : Object.keys(Object.getPrototypeOf(ZG)).concat(Object.keys(ZG));
      return [...new Set(wG)].filter((GG => "number" === typeof ZG[GG])).map((GG => `${GG} ${String(ZG[GG])}`)).join(", ")
    }

    function tb(GG, bG) {
      var ZG;
      const wG = null !== (ZG = bG.vertex) && void 0 !== ZG ? ZG : {};
      if (wG.module && Pb.has(wG.module)) {
        var SG;
        const ZG = String(null !== (SG = wG.entryPoint) && void 0 !== SG ? SG : "");
        if (ZG.startsWith("vs_packed") && Mb.set(GG, ZG), !nb) {
          var LG, yG, kG, UG, YG;
          nb = !0;
          const GG = null !== (LG = bG.depthStencil) && void 0 !== LG ? LG : {},
            wG = null !== (yG = bG.multisample) && void 0 !== yG ? yG : {},
            SG = String(null !== (kG = GG.depthCompare) && void 0 !== kG ? kG : "");
          qG(`WebGPU terrain pipeline ${ZG}: depth ${String(null!==(UG=GG.format)&&void 0!==UG?UG:"none")} ${SG}${SG.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(YG=wG.count)&&void 0!==YG?YG:1)}`)
        }
      }
    }

    function Db(GG) {
      pb(GG, "setPipeline", (GG => function() {
        for (var bG = arguments.length, ZG = new Array(bG), wG = 0; wG < bG; wG++) ZG[wG] = arguments[wG];
        return Ab.set(this, ZG[0]), Vb(GG, this, ZG)
      }));
      for (const bG of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) pb(GG, bG, (GG => function() {
        const ZG = Ab.get(this),
          wG = ZG ? Mb.get(ZG) : void 0;
        for (var SG = arguments.length, LG = new Array(SG), yG = 0; yG < SG; yG++) LG[yG] = arguments[yG];
        return void 0 !== wG && Nb(bG, wG, LG), Vb(GG, this, LG)
      }))
    }

    function Nb(GG, bG, ZG) {
      var wG;
      (eb.draws++, "draw" === GG || "drawIndexed" === GG) && (eb.faces += ZG[0] * (null !== (wG = ZG[1]) && void 0 !== wG ? wG : 1) / 6);
      if (null !== gb && gb.length < Yb) {
        const wG = ("draw" === GG ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === GG ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((bG, wG) => {
          const SG = GG.endsWith("Indirect") ? ZG[1] : ZG[wG];
          return `${bG} ${String(null!==SG&&void 0!==SG?SG:"instances"===bG?1:0)}`
        }));
        gb.push(`  ${bG} ${GG} ${wG.join(" ")}`)
      }
    }

    function Ob() {
      if (jb || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      jb = !0, pb(Rb("GPU"), "requestAdapter", (GG => function() {
        for (var bG = arguments.length, ZG = new Array(bG), wG = 0; wG < bG; wG++) ZG[wG] = arguments[wG];
        return Vb(GG, this, ZG).then((GG => {
          var bG;
          GG ? function(GG) {
            var bG;
            const ZG = null !== (bG = GG.info) && void 0 !== bG ? bG : {};
            qG(`WebGPU adapter ${["vendor","architecture","device","description"].map((GG=>{var bG;return`${GG} "${String(null!==(bG=ZG[GG])&&void 0!==bG?bG:"")}"`})).join(" ")}${GG.isFallbackAdapter?" (fallback)":""}`), qG(`WebGPU adapter features ${Tb(GG.features)}`), qG(`WebGPU adapter limits ${Hb(GG.limits,lb)}`), nG(`WebGPU adapter all limits ${Hb(GG.limits,null)}`)
          }(GG) : qG(`WebGPU requestAdapter(${JSON.stringify(null!==(bG=ZG[0])&&void 0!==bG?bG:{})}) gave none`);
          return GG
        }))
      })), pb(Rb("GPUAdapter"), "requestDevice", (GG => function() {
        for (var bG = arguments.length, ZG = new Array(bG), wG = 0; wG < bG; wG++) ZG[wG] = arguments[wG];
        return Vb(GG, this, ZG).then((GG => (function(GG) {
          qG(`WebGPU device features ${Tb(GG.features)}`), qG(`WebGPU device limits ${Hb(GG.limits,lb)}`), GG.addEventListener("uncapturederror", (GG => {
            if (sb.uncaptured < Ub) {
              var bG, ZG, wG;
              sb.uncaptured++;
              const SG = GG.error;
              qG(`WebGPU uncaptured ${null!==(bG=null===SG||void 0===SG||null===(ZG=SG.constructor)||void 0===ZG?void 0:ZG.name)&&void 0!==bG?bG:"error"}: ${gG(String(null!==(wG=null===SG||void 0===SG?void 0:SG.message)&&void 0!==wG?wG:""),600)}`)
            }
          }));
          const bG = GG.lost;
          null === bG || void 0 === bG || bG.then((GG => {
            var bG;
            qG(`WebGPU device lost (${String(GG.reason)}): ${gG(String(null!==(bG=GG.message)&&void 0!==bG?bG:""),600)}`)
          }))
        }(GG), GG)), (GG => {
          throw qG(`WebGPU requestDevice failed: ${String(GG)}`), GG
        }))
      }));
      const GG = Rb("GPUDevice");
      pb(GG, "createShaderModule", (GG => function() {
        for (var bG, ZG, wG = arguments.length, SG = new Array(wG), LG = 0; LG < wG; LG++) SG[LG] = arguments[LG];
        const yG = Vb(GG, this, SG);
        return function(GG, bG) {
          const ZG = bG.includes("decodeQuad");
          ZG && Pb.add(GG);
          const wG = GG.getCompilationInfo;
          null === wG || void 0 === wG || wG.call(GG).then((GG => {
            if (0 === GG.messages.length && !ZG) return;
            const bG = {};
            for (const ZG of GG.messages) {
              var wG;
              bG[String(ZG.type)] = (null !== (wG = bG[String(ZG.type)]) && void 0 !== wG ? wG : 0) + 1
            }
            const SG = GG.messages.map((GG => `${String(GG.type)} ${String(GG.lineNum)}:${String(GG.linePos)} ${String(GG.message)}`)).join("\n");
            sb.compile < Ub && (sb.compile++, qG(`WebGPU ${ZG?"terrain ":""}shader module compiled: ${JSON.stringify(bG)}${SG?` first: ${gG(SG.split("\n")[0],300)}`:""}`)), SG && nG(`WebGPU shader module messages:\n${gG(SG)}`)
          }))
        }(yG, String(null !== (bG = (null !== (ZG = SG[0]) && void 0 !== ZG ? ZG : {}).code) && void 0 !== bG ? bG : "")), yG
      })), pb(GG, "createRenderPipeline", (GG => function() {
        for (var bG, ZG = arguments.length, wG = new Array(ZG), SG = 0; SG < ZG; SG++) wG[SG] = arguments[SG];
        const LG = Vb(GG, this, wG);
        return tb(LG, null !== (bG = wG[0]) && void 0 !== bG ? bG : {}), LG
      })), pb(GG, "createRenderPipelineAsync", (GG => function() {
        for (var bG = arguments.length, ZG = new Array(bG), wG = 0; wG < bG; wG++) ZG[wG] = arguments[wG];
        return Vb(GG, this, ZG).then((GG => {
          var bG;
          return tb(GG, null !== (bG = ZG[0]) && void 0 !== bG ? bG : {}), GG
        }), (GG => {
          var bG;
          throw function(GG, bG) {
            var ZG, wG, SG;
            if (sb.rejected >= Ub) return;
            sb.rejected++;
            const {
              reason: LG,
              message: yG
            } = null !== bG && void 0 !== bG ? bG : {}, kG = String(null !== (ZG = (null !== (wG = GG.vertex) && void 0 !== wG ? wG : {}).entryPoint) && void 0 !== ZG ? ZG : "");
            qG(`WebGPU pipeline "${String(null!==(SG=GG.label)&&void 0!==SG?SG:"")}" ${kG} rejected (${String(null!==LG&&void 0!==LG?LG:"no reason")}): ${gG(String(null!==yG&&void 0!==yG?yG:bG),600)}`)
          }(null !== (bG = ZG[0]) && void 0 !== bG ? bG : {}, GG), GG
        }))
      })), pb(Rb("GPUCanvasContext"), "configure", (GG => function() {
        for (var bG, ZG = arguments.length, wG = new Array(ZG), SG = 0; SG < ZG; SG++) wG[SG] = arguments[SG];
        const LG = null !== (bG = wG[0]) && void 0 !== bG ? bG : {};
        var yG, kG;
        qb++ < 3 && qG(`WebGPU canvas ${String(LG.format)} ${String(null!==(yG=LG.colorSpace)&&void 0!==yG?yG:"srgb")} alpha ${String(null!==(kG=LG.alphaMode)&&void 0!==kG?kG:"opaque")}`);
        return Vb(GG, this, wG)
      })), Db(Rb("GPURenderPassEncoder")), Db(Rb("GPURenderBundleEncoder"))
    }
    const xb = 1e4,
      Bb = 6e4,
      GZ = 5e3,
      bZ = 3e3,
      ZZ = 100;
    let wZ = null,
      SZ = !1,
      LZ = {
        ...ab.c
      },
      yZ = !1,
      kZ = null,
      UZ = 0,
      YZ = () => {};
    const VZ = new Promise((GG => {
      YZ = GG
    }));

    function pZ() {
      var GG;
      SZ || (SZ = !0, LZ = Object.assign(window.bloxdRenderDebug ??= {
        ...ab.c
      }, {
        faceCull: "0" === (0, LG.k)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (GG = (0, LG.k)("adrenoProbe")) && void 0 !== GG ? GG : ""
      }), qG("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), fb || "undefined" === typeof window || (fb = !0, "undefined" !== typeof WebGL2RenderingContext && ib(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && ib(WebGLRenderingContext.prototype, !1)), Ob(), (0, LG.c)("renderProbe", (() => {
        JZ("console")
      })), hZ(), setInterval(zZ, GZ))
    }

    function fZ(GG) {
      var bG, ZG;
      pZ(), wZ = null !== (bG = null === GG || void 0 === GG ? void 0 : GG.backend) && void 0 !== bG ? bG : null;
      const wG = `, renderer param ${null!==(ZG=(0,LG.k)("renderer"))&&void 0!==ZG?ZG:"none"}, faceCull ${"0"===LZ.faceCull?"off (whole parts)":"on"}, adrenoProbe ${LZ.adrenoProbe||"none"}`;
      qG(`${(0,cb.b)(GG)}${null===GG?"":wG}`)
    }

    function QZ() {
      const GG = performance.now(),
        bG = KZ(VZ, xb, Bb).then((bG => JZ(`${Math.round((performance.now()-GG)/1e3)} s after playable${bG?"":", no terrain drawn yet"}`)));
      (0, SG.e)(qG, (async () => {
        await bG, await kZ
      }))
    }
    async function KZ(GG, bG, ZG) {
      const SG = (0, wG.e)(ZG).then((() => !1));
      return await (0, wG.e)(bG), Promise.race([GG.then((() => !0)), SG])
    }

    function hZ() {
      requestAnimationFrame((() => {
        UZ++, hZ()
      }))
    }

    function dZ() {
      var GG, bG, ZG;
      if (yZ) return;
      (yZ = !0, qG(`renderer caps ${null!==(GG=LZ.caps)&&void 0!==GG?GG:"(not noted)"}; terrain fetch ${null!==(bG=LZ.fetch)&&void 0!==bG?bG:"(not noted)"}`), LZ.adrenoProbe) && qG(`adrenoProbe ${LZ.adrenoProbe} asked; in force (storage fetch only): ${null!==(ZG=LZ.probe)&&void 0!==ZG?ZG:"(not noted)"}`);
      const wG = cG.context;
      if (wG) {
        for (const GG of function(GG) {
            var bG;
            const ZG = [],
              wG = GG.getExtension("WEBGL_debug_renderer_info"),
              SG = wG ? GG.getParameter(wG.UNMASKED_VENDOR_WEBGL) : "(masked)",
              LG = wG ? GG.getParameter(wG.UNMASKED_RENDERER_WEBGL) : "(masked)";
            ZG.push(`GL ${String(GG.getParameter(GG.VERSION))} | ${String(GG.getParameter(GG.SHADING_LANGUAGE_VERSION))} | ${String(GG.getParameter(GG.VENDOR))} / ${String(GG.getParameter(GG.RENDERER))}`), ZG.push(`GL unmasked ${SG} / ${LG}`);
            const yG = [
              ["MAX_TEXTURE_SIZE", GG.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", GG.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", GG.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", GG.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", GG.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", GG.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", GG.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in GG && yG.push(["MAX_UNIFORM_BLOCK_SIZE", GG.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", GG.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", GG.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", GG.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), ZG.push(`GL limits ${yG.map((bG=>{let[ZG,wG]=bG;return`${ZG} ${String(GG.getParameter(wG))}`})).join(", ")}`);
            const kG = (bG, ZG) => {
              const wG = GG.getShaderPrecisionFormat(bG, GG.HIGH_FLOAT),
                SG = GG.getShaderPrecisionFormat(bG, GG.HIGH_INT);
              return `${ZG} highp float ${wG?`${wG.rangeMin}/${wG.rangeMax}/${wG.precision}`:"?"} int ${SG?`${SG.rangeMin}/${SG.rangeMax}/${SG.precision}`:"?"}`
            };
            ZG.push(`GL precision ${kG(GG.VERTEX_SHADER,"VS")}, ${kG(GG.FRAGMENT_SHADER,"FS")}`);
            const UG = GG.getContextAttributes();
            return ZG.push(`GL context ${JSON.stringify(UG)} drawingBuffer ${GG.drawingBufferWidth}x${GG.drawingBufferHeight}${"drawingBufferFormat"in GG?` format 0x${Number(GG.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in GG?` ${String(GG.drawingBufferColorSpace)}`:""}`), ZG.push(`GL extensions ${(null!==(bG=GG.getSupportedExtensions())&&void 0!==bG?bG:[]).join(" ")}`), ZG
          }(wG)) qG(GG);
        ! function() {
          if (!cG.context) return;
          let GG = 0,
            bG = 0;
          for (const [ZG, wG] of FG) !wG.gl.isContextLost() && wG.gl.isProgram(ZG) && (bG++, mb(wG.gl, ZG, wG), null !== wG.terrain && GG++);
          qG(`programs: ${bG} live of ${FG.length} linked, ${GG} packed terrain; CPU page copies ${Math.round(cG.shadowBytes/1048576)} MiB (${cG.uncopied} over budget)`)
        }()
      }
    }

    function JZ(GG) {
      return kZ ??= async function(GG) {
        dZ(), "webgpu" === wZ ? (rZ(), "1" === LZ.slotCheck && qG("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), LZ.slotCheck = "1", await
          function(GG) {
            if (null !== gb) return Promise.resolve();
            const bG = [];
            return gb = bG, new Promise((ZG => {
              setTimeout((() => {
                gb = null, qG(`WebGPU draw ranges (${GG}): ${bG.length} terrain draws recorded in a second (first ${Yb}; bundles replay without new ones)`);
                for (const GG of bG) qG(GG);
                ZG()
              }), 1e3)
            }))
          }(GG), await async function() {
            if (await (0, ab.f)(LZ, "slotCheck", ["1"], bZ, ZZ), "1" === LZ.slotCheck) return void qG(`slot check: no answer in ${bZ} ms (only the storage fetch has one; a later answer logs on its own)`);
            rZ()
          }()) : await yb(GG);
        qG(`check (${GG}) done: bloxdDebug.save() downloads it all`)
      }(GG).catch((bG => {
        qG(`check (${GG}) failed: ${String(bG)}`)
      })).finally((() => {
        kZ = null
      })), kZ
    }

    function rZ() {
      void 0 !== LZ.slotCheck && "1" !== LZ.slotCheck && (qG(LZ.slotCheck), delete LZ.slotCheck)
    }

    function zZ() {
      const GG = GG => UZ ? (GG / UZ).toFixed(1) : "0",
        bG = function() {
          const GG = eb;
          return eb = {
            draws: 0,
            faces: 0
          }, GG
        }(),
        ZG = function() {
          const GG = Jb;
          return Jb = {
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
          }, GG
        }(),
        wG = function() {
          const GG = rb;
          return rb = {
            buffer: 0,
            texture: 0
          }, GG
        }();
      rZ(), ("webgpu" === wZ ? bG.draws : ZG.inst.draws + ZG.tex.draws) > 0 && YZ();
      const SG = "webgpu" === wZ ? [`terrain ${GG(bG.draws)} draws ${GG(bG.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((GG => ZG[GG].draws > 0)).map((bG => `${bG} ${GG(ZG[bG].draws)} draws ${GG(ZG[bG].faces)} faces a frame`));
      qG(`${UZ} frames: ${SG.join(", ")||"no draws"}; uploaded ${Math.round(wG.buffer/1024)} KiB to buffers, ${Math.round(wG.texture/1024)} KiB to data textures`), UZ = 0
    }
  },
  4712: (GG, bG, ZG) => {
    function wG(GG) {
      if (null === GG) return "backend: none picked (no renderer build)";
      const bG = GG.adapter ? `${GG.adapter.vendor}/${GG.adapter.architecture}` : "none";
      return `backend ${GG.backend}: reason ${GG.reason}, source ${GG.source}, adapter ${bG}`
    }
    ZG.d(bG, {
      b: () => wG
    })
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);