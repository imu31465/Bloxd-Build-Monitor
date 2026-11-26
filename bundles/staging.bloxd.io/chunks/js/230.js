export const id = 230;
export const ids = [230];
export const modules = {
  44646: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      loadGlbAsset: () => fO,
      loadGlbTree: () => UO
    });
    var YB = GB(38589),
      DB = GB(120),
      QB = GB(1195);

    function oB(BB) {
      return (0, DB.isDiscordClient)() ? `https://${QB.e.discordDomain}/${BB.href}` : BB.href
    }
    const jB = {
      scriptUrl: oB(new GB.U(GB(44655))),
      wasmBinaryUrl: oB(new GB.U(GB(44657)))
    };
    var yB = GB(36856),
      JB = GB.n(yB);

    function MB() {
      return JB()('(()=>{class BB extends Error{}function OB(OB,GB){const YB=OB._malloc(GB);if(0===YB)throw new BB(`Draco: the decoder\'s heap refused ${GB} bytes`);return YB}function GB(GB,YB,DB,QB){let oB=null,jB=null,yB=null;try{oB=new GB.Decoder,jB=new GB.DecoderBuffer,jB.Init(YB,YB.byteLength);let JB=0;const MB=oB.GetEncodedGeometryType(jB);if(MB===GB.TRIANGULAR_MESH){const OB=new GB.Mesh;yB=OB;const YB=oB.DecodeBufferToMesh(jB,OB);if(!YB.ok()||0===OB.ptr)throw new BB(YB.error_msg());JB=3*OB.num_faces()}else{if(MB!==GB.POINT_CLOUD)throw new BB(`Draco: Cannot decode invalid geometry type ${MB}`);{const OB=new GB.PointCloud;yB=OB;const YB=oB.DecodeBufferToPointCloud(jB,OB);if(!YB.ok()||!OB.ptr)throw new BB(YB.error_msg())}}const PB=yB.num_points();if(PB!==QB.vertices||JB!==QB.indices)throw new BB(`Draco: decoded ${PB} vertices and ${JB} indices, the accessors declare ${QB.vertices} and ${QB.indices}`);const zB=function(BB){return{[BB.DT_FLOAT32]:Float32Array,[BB.DT_INT8]:Int8Array,[BB.DT_INT16]:Int16Array,[BB.DT_INT32]:Int32Array,[BB.DT_UINT8]:Uint8Array,[BB.DT_UINT16]:Uint16Array,[BB.DT_UINT32]:Uint32Array}}(GB),lB=[];for(const OB of Object.keys(DB)){const GB=DB[OB],YB=QB.components[OB],jB=oB.GetAttributeByUniqueId(yB,GB);if(!jB||0===jB.ptr)throw new BB(`Draco: no attribute with id ${GB} (${OB})`);const JB=jB.data_type();if(!zB[JB])throw new BB(`Draco: Cannot decode invalid data type ${JB}`);if(jB.num_components()!==YB)throw new BB(`Draco: ${OB} decodes to ${jB.num_components()} components, its accessor declares ${YB}`);lB.push([OB,jB,zB[JB]])}let pB=null;if(MB===GB.TRIANGULAR_MESH){const BB=4*JB,YB=OB(GB,BB);try{oB.GetTrianglesUInt32Array(yB,BB,YB),pB=new Uint32Array(JB),pB.set(new Uint32Array(GB.HEAPF32.buffer,YB,JB))}finally{GB._free(YB)}}const qB=[];for(const[BB,YB,DB]of lB){const QB=YB.num_components(),jB=PB*QB,JB=jB*DB.BYTES_PER_ELEMENT,MB=OB(GB,JB);try{oB.GetAttributeDataArrayForAllPoints(yB,YB,YB.data_type(),JB,MB),qB.push({kind:BB,data:new DB(GB.HEAPF32.buffer,MB,jB).slice(),size:QB,byteOffset:YB.byte_offset(),byteStride:YB.byte_stride(),normalized:YB.normalized()})}finally{GB._free(MB)}}return{indices:pB,attributes:qB,totalVertices:PB}}finally{yB&&GB.destroy(yB),jB&&GB.destroy(jB),oB&&GB.destroy(oB)}}const YB=self;let DB=null;self.onmessage=BB=>{let{data:OB}=BB;if("init"===OB.id){try{importScripts(OB.url),DB=DracoDecoderModule({wasmBinary:OB.wasmBinary}),YB.postMessage({id:"initDone"})}catch(JB){YB.postMessage({id:"initError",message:JB instanceof Error?JB.message:String(JB)})}return}const{seq:QB,data:oB,attributeIds:jB,expected:yB}=OB;DB?DB.then((BB=>{try{const OB=GB(BB,oB,jB,yB),DB=OB.attributes.map((BB=>BB.data.buffer));OB.indices&&DB.push(OB.indices.buffer),YB.postMessage({id:"decoded",seq:QB,...OB},DB)}catch(JB){YB.postMessage({id:"decodeError",seq:QB,message:JB instanceof Error?JB.message:String(JB)})}}),(BB=>{YB.postMessage({id:"decodeError",seq:QB,message:BB instanceof Error?BB.message:String(BB)})})):YB.postMessage({id:"decodeError",seq:QB,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, GB.p + "dracoDecode.worker.4d8036dc.worker.js")
    }
    var PB = GB(92),
      zB = GB(4820),
      lB = GB(3656);
    const pB = 2;
    const qB = 1e3;
    let ZB = null,
      NB = null;
    const RB = [],
      WB = [];
    let AB = 0;
    const VB = {
      decodes: 0,
      workersStarted: 0,
      mostWorkers: 0
    };
    let SB = null;

    function nB() {
      if (!ZB) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: BB,
        wasmBinaryUrl: OB
      } = ZB;
      return NB ??= fetch(OB).then((BB => {
        if (!BB.ok) throw new Error(`Draco: fetching ${OB} failed: ${BB.status}`);
        return BB.arrayBuffer()
      })), NB.catch((() => {
        NB = null
      })), VB.workersStarted++, Promise.all([NB, (0, lB.g)()]).then((OB => {
        let [GB] = OB;
        return new Promise(((OB, YB) => {
          const DB = new MB;
          DB.onerror = BB => {
            DB.onmessage = null, DB.onerror = null, DB.terminate(), YB(new Error("Draco: the decode worker failed to start" + (BB.message ? `: ${BB.message}` : " (its script did not load)")))
          }, DB.onmessage = BB => {
            let {
              data: GB
            } = BB;
            DB.onmessage = null, DB.onerror = null, "initDone" === GB.id ? OB(DB) : (DB.terminate(), YB(new Error(`Draco: ${"initError"===GB.id?GB.message:"the worker did not start"}`)))
          };
          const QB = GB.slice(0),
            oB = {
              id: "init",
              url: BB,
              wasmBinary: QB
            };
          DB.postMessage(oB, [QB])
        }))
      }))
    }

    function UB(BB) {
      const OB = RB.indexOf(BB); - 1 !== OB && RB.splice(OB, 1);
      const GB = WB.shift();
      GB && kB(GB)
    }

    function fB(BB, OB) {
      BB.busy = !0, BB.releaseTimer && (clearTimeout(BB.releaseTimer), BB.releaseTimer = null);
      BB.worker.then((GB => {
        const YB = AB++;
        GB.onmessage = DB => {
          let {
            data: QB
          } = DB;
          if (("decoded" === QB.id || "decodeError" === QB.id) && QB.seq === YB) {
            if (GB.onmessage = null, GB.onerror = null, "decoded" === QB.id) return VB.decodes++, OB.resolve({
              indices: QB.indices,
              attributes: QB.attributes,
              totalVertices: QB.totalVertices
            }), void(() => {
              const OB = WB.shift();
              OB ? fB(BB, OB) : (BB.busy = !1, BB.releaseTimer = setTimeout((() => {
                const OB = RB.indexOf(BB); - 1 !== OB && RB.splice(OB, 1), BB.worker.then((BB => {
                  BB.terminate()
                }))
              }), qB))
            })();
            GB.terminate(), OB.reject(new Error(QB.message)), UB(BB)
          }
        }, GB.onerror = YB => {
          GB.onmessage = null, GB.onerror = null, GB.terminate(), OB.reject(new Error(`Draco: the decode worker failed: ${YB.message}`)), UB(BB)
        };
        const DB = {
          id: "decode",
          seq: YB,
          data: OB.data,
          attributeIds: OB.attributeIds,
          expected: OB.expected
        };
        GB.postMessage(DB, [OB.data.buffer])
      }), (GB => {
        OB.reject(GB instanceof Error ? GB : new Error(String(GB))), UB(BB)
      }))
    }

    function kB(BB) {
      const OB = RB.find((BB => !BB.busy));
      if (OB) fB(OB, BB);
      else {
        if (SB ??= (0, zB.e)() ? 1 : function(BB, OB) {
            const GB = BB ? Math.max(1, Math.min(Math.floor(.5 * BB), 4)) : 1;
            return OB ? Math.min(GB, pB) : GB
          }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, PB.isMobile)()), RB.length < SB) {
          const OB = {
            worker: nB(),
            busy: !0,
            releaseTimer: null
          };
          return RB.push(OB), VB.mostWorkers = Math.max(VB.mostWorkers, RB.length), void fB(OB, BB)
        }
        WB.push(BB)
      }
    }

    function dB(BB, OB, GB) {
      return new Promise(((YB, DB) => {
        kB({
          data: new Int8Array(BB.buffer, BB.byteOffset, BB.byteLength).slice(),
          attributeIds: OB,
          expected: GB,
          resolve: YB,
          reject: DB
        })
      }))
    }
    var KB = GB(38074),
      uB = GB(38087),
      mB = GB(34875),
      IB = GB(34869);
    const FB = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function iB(BB) {
      const OB = (0, IB.j)(BB.byteLength);
      if (OB) throw new mB.g(OB);
      const {
        json: GB,
        bin: YB
      } = (0, mB.r)(BB), DB = (0, IB.h)(GB, YB);
      if (DB) throw new mB.g(DB);
      try {
        return function(BB, OB) {
          var GB, YB, DB, QB, oB, jB, yB, JB, MB, PB, zB, lB, pB, qB, ZB;
          const NB = new Map,
            RB = GB => {
              let YB = NB.get(GB);
              if (!YB) {
                var DB;
                const QB = BB.bufferViews[GB],
                  oB = null !== (DB = QB.byteOffset) && void 0 !== DB ? DB : 0;
                YB = {
                  index: GB,
                  bytes: OB.subarray(oB, oB + QB.byteLength),
                  byteStride: QB.byteStride
                }, NB.set(GB, YB)
              }
              return YB
            },
            WB = new Map,
            AB = OB => {
              let GB = WB.get(OB);
              if (!GB) {
                var YB;
                const DB = BB.accessors[OB];
                GB = {
                  index: OB,
                  count: DB.count,
                  type: DB.type,
                  numComponents: mB.h[DB.type],
                  componentType: DB.componentType,
                  normalized: null !== (YB = DB.normalized) && void 0 !== YB && YB,
                  byteOffset: DB.byteOffset,
                  bufferView: void 0 === DB.bufferView ? null : RB(DB.bufferView),
                  min: DB.min,
                  max: DB.max
                }, WB.set(OB, GB)
              }
              return GB
            },
            VB = null !== (GB = null === (YB = BB.extensionsUsed) || void 0 === YB ? void 0 : YB.includes("KHR_draco_mesh_compression")) && void 0 !== GB && GB,
            SB = (null !== (DB = BB.meshes) && void 0 !== DB ? DB : []).map(((OB, GB) => {
              const YB = OB.primitives.map(((OB, GB) => {
                var YB, DB, QB;
                const oB = VB ? null === (YB = OB.extensions) || void 0 === YB ? void 0 : YB.KHR_draco_mesh_compression : void 0;
                let jB = null;
                const yB = [];
                if (oB) {
                  const GB = {
                    vertices: BB.accessors[OB.attributes.POSITION].count,
                    indices: void 0 === OB.indices ? 0 : BB.accessors[OB.indices].count,
                    components: {}
                  };
                  jB = {
                    bufferView: RB(oB.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: GB
                  };
                  for (const [YB, DB] of mB.e) {
                    const QB = oB.attributes[YB];
                    if (void 0 === QB) continue;
                    jB.attributeIds[DB] = QB;
                    const yB = OB.attributes[YB];
                    var JB;
                    if (void 0 !== yB) jB.normalized[DB] = null !== (JB = BB.accessors[yB].normalized) && void 0 !== JB && JB, GB.components[DB] = mB.h[BB.accessors[yB].type]
                  }
                } else
                  for (const [BB, MB] of mB.e) {
                    const GB = OB.attributes[BB];
                    void 0 !== GB && yB.push({
                      semantic: BB,
                      kind: MB,
                      accessor: AB(GB)
                    })
                  }
                return {
                  index: GB,
                  mode: null !== (DB = OB.mode) && void 0 !== DB ? DB : 4,
                  attributes: yB,
                  indices: oB || void 0 === OB.indices ? null : AB(OB.indices),
                  position: void 0 === OB.attributes.POSITION ? null : AB(OB.attributes.POSITION),
                  material: null !== (QB = OB.material) && void 0 !== QB ? QB : null,
                  draco: jB
                }
              }));
              return {
                index: GB,
                name: OB.name,
                primitives: YB,
                extras: OB.extras
              }
            })),
            nB = (null !== (QB = BB.nodes) && void 0 !== QB ? QB : []).map(((BB, OB) => {
              var GB, YB;
              return {
                index: OB,
                name: BB.name,
                children: null !== (GB = BB.children) && void 0 !== GB ? GB : [],
                mesh: null !== (YB = BB.mesh) && void 0 !== YB ? YB : null,
                translation: BB.translation,
                rotation: BB.rotation,
                scale: BB.scale,
                hasCamera: void 0 !== BB.camera,
                extras: BB.extras
              }
            })),
            UB = null !== (oB = null === (jB = BB.extensionsUsed) || void 0 === jB ? void 0 : jB.includes("KHR_materials_unlit")) && void 0 !== oB && oB,
            fB = null !== (yB = null === (JB = BB.extensionsUsed) || void 0 === JB ? void 0 : JB.includes("KHR_texture_transform")) && void 0 !== yB && yB,
            kB = (null !== (MB = BB.materials) && void 0 !== MB ? MB : []).map(((BB, OB) => {
              var GB, YB, DB, QB;
              const oB = BB.pbrMetallicRoughness,
                jB = null === oB || void 0 === oB ? void 0 : oB.baseColorTexture;
              return {
                index: OB,
                name: BB.name,
                extras: BB.extras,
                unlit: UB && void 0 !== (null === (GB = BB.extensions) || void 0 === GB ? void 0 : GB.KHR_materials_unlit),
                pbr: oB ? {
                  baseColorFactor: oB.baseColorFactor,
                  metallicFactor: oB.metallicFactor,
                  roughnessFactor: oB.roughnessFactor
                } : null,
                baseColorTexture: jB ? {
                  texture: jB.index,
                  transform: fB && (null === (YB = jB.extensions) || void 0 === YB ? void 0 : YB.KHR_texture_transform) || null
                } : null,
                emissiveFactor: BB.emissiveFactor,
                alphaMode: null !== (DB = BB.alphaMode) && void 0 !== DB ? DB : "OPAQUE",
                alphaCutoff: BB.alphaCutoff,
                doubleSided: null !== (QB = BB.doubleSided) && void 0 !== QB && QB
              }
            })),
            dB = (null !== (PB = BB.textures) && void 0 !== PB ? PB : []).map(((OB, GB) => {
              var YB, DB;
              const QB = void 0 === OB.sampler ? FB : {
                index: OB.sampler,
                ...null === (YB = BB.samplers) || void 0 === YB ? void 0 : YB[OB.sampler]
              };
              return {
                index: GB,
                sampler: {
                  index: QB.index,
                  magFilter: QB.magFilter,
                  minFilter: QB.minFilter,
                  wrapS: QB.wrapS,
                  wrapT: QB.wrapT
                },
                image: null !== (DB = OB.source) && void 0 !== DB ? DB : -1
              }
            })),
            KB = (null !== (zB = BB.images) && void 0 !== zB ? zB : []).map(((BB, OB) => ({
              index: OB,
              name: BB.name,
              mimeType: BB.mimeType,
              bufferView: RB(BB.bufferView)
            }))),
            uB = null !== (lB = (0, mB.n)(BB)) && void 0 !== lB ? lB : 0;
          return {
            json: BB,
            rootNodes: null !== (pB = null === (qB = BB.scenes) || void 0 === qB || null === (ZB = qB[uB]) || void 0 === ZB ? void 0 : ZB.nodes) && void 0 !== pB ? pB : [],
            nodes: nB,
            meshes: SB,
            materials: kB,
            textures: dB,
            images: KB
          }
        }(GB, YB)
      } catch (QB) {
        throw QB instanceof mB.f ? QB : new mB.f(`reading the GLB failed: ${QB instanceof Error?QB.message:String(QB)}`)
      }
    }
    async function LB(BB, OB) {
      var GB, YB;
      const DB = BB.draco;
      if (!DB) throw new mB.f("not a Draco primitive");
      let QB;
      try {
        QB = await OB(DB.bufferView.bytes, DB.attributeIds, DB.expected)
      } catch (JB) {
        throw new mB.f(`Draco decoding failed: ${JB instanceof Error?JB.message:String(JB)}`)
      }
      const {
        vertices: oB,
        indices: jB,
        components: yB
      } = DB.expected;
      if (QB.totalVertices !== oB || (null !== (GB = null === (YB = QB.indices) || void 0 === YB ? void 0 : YB.length) && void 0 !== GB ? GB : 0) !== jB || QB.attributes.some((BB => BB.size !== yB[BB.kind] || BB.data.length !== oB * BB.size))) throw new mB.f("Draco decoding gave other counts than the accessors declare");
      for (const MB of QB.attributes) {
        const BB = DB.normalized[MB.kind];
        void 0 !== BB && (MB.normalized = BB)
      }
      return QB
    }
    const gB = new WeakMap;

    function rB(BB, OB) {
      var GB;
      const YB = null !== (GB = gB.get(BB)) && void 0 !== GB ? GB : OB(BB);
      return gB.set(BB, YB), YB
    }

    function XB(BB) {
      const OB = BB.bufferView,
        GB = 5125 === BB.componentType ? Uint32Array : Uint16Array,
        YB = OB.bytes.buffer,
        DB = OB.bytes.byteOffset + (BB.byteOffset || 0);
      return DB % GB.BYTES_PER_ELEMENT !== 0 ? new GB(YB.slice(DB, DB + BB.count * GB.BYTES_PER_ELEMENT), 0) : new GB(YB, DB, BB.count)
    }

    function wB(BB, OB) {
      if (BB.min && BB.max) return [new Float64Array(BB.min), new Float64Array(BB.max)];
      const GB = OB.find((BB => {
          let {
            kind: OB
          } = BB;
          return "position" === OB
        })),
        YB = GB ? (0, uB.i)(GB, BB.count) : new Float32Array(0);
      return (0, uB.p)(YB.length / 3, ((BB, OB) => YB[3 * BB + OB]))
    }

    function EB(BB) {
      const OB = BB.attributes.map((BB => {
          var OB, GB;
          let {
            kind: YB,
            accessor: DB
          } = BB;
          const {
            bufferView: QB,
            numComponents: oB
          } = DB;
          if (!QB) {
            return {
              kind: YB,
              data: rB(DB, (() => new Float32Array(oB * DB.count))),
              offset: 0,
              stride: 4 * oB,
              components: oB,
              glType: 5126,
              isNormalized: !1
            }
          }
          const jB = null !== (OB = QB.byteStride) && void 0 !== OB ? OB : oB * mB.b[DB.componentType];
          return {
            kind: YB,
            data: QB.bytes,
            offset: null !== (GB = DB.byteOffset) && void 0 !== GB ? GB : 0,
            stride: jB,
            components: oB,
            glType: DB.componentType,
            isNormalized: DB.normalized
          }
        })),
        GB = BB.indices,
        YB = GB && rB(GB, XB),
        DB = BB.position;
      return new uB.e(OB, YB, DB.count, ...wB(DB, OB))
    }
    const cB = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function hB(BB, OB) {
      const GB = OB.attributes.map((BB => {
        let {
          kind: OB,
          data: GB,
          size: YB,
          byteOffset: DB,
          byteStride: QB,
          normalized: oB
        } = BB;
        return {
          kind: OB,
          data: GB,
          offset: DB,
          stride: QB,
          components: YB,
          glType: 5120 + cB.indexOf(GB.constructor),
          isNormalized: oB
        }
      }));
      return new uB.e(GB, OB.indices, OB.totalVertices, ...wB(BB.position, GB))
    }

    function aB(BB) {
      const OB = BB.lastIndexOf("/");
      return OB < 0 ? BB : BB.substring(OB + 1)
    }

    function eB(BB) {
      const OB = BB.lastIndexOf("/");
      return OB < 0 ? "" : BB.substring(0, OB + 1)
    }

    function TB(BB) {
      return BB.name || `node${BB.index}`
    }
    const bB = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      CB = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      HB = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function vB(BB) {
      var OB, GB, YB, DB;
      const QB = null !== (OB = BB.minFilter) && void 0 !== OB ? OB : 9987;
      return 9729 === (null !== (GB = BB.magFilter) && void 0 !== GB ? GB : 9729) ? null !== (YB = CB[QB]) && void 0 !== YB ? YB : 3 : null !== (DB = HB[QB]) && void 0 !== DB ? DB : 4
    }
    const sB = {
      33071: 0,
      33648: 2
    };

    function xB(BB) {
      var OB;
      return null !== (OB = sB[null !== BB && void 0 !== BB ? BB : 10497]) && void 0 !== OB ? OB : 1
    }

    function tB(BB) {
      return 9728 === BB.minFilter || 9729 === BB.minFilter
    }

    function BO(BB) {
      var OB, GB, YB;
      const DB = Float64Array.from(null !== (OB = BB.scale) && void 0 !== OB ? OB : [1, 1, 1]);
      return BB.hasCamera && (DB[0] = -1), {
        translation: Float64Array.from(null !== (GB = BB.translation) && void 0 !== GB ? GB : [0, 0, 0]),
        rotation: Float64Array.from(null !== (YB = BB.rotation) && void 0 !== YB ? YB : [0, 0, 0, 1]),
        scale: DB
      }
    }

    function OO(BB, OB) {
      let {
        translation: GB,
        rotation: YB,
        scale: DB
      } = BB;
      const QB = new Float32Array(16);
      return (0, KB.e)(DB, 0, YB, 0, GB, 0, QB), OB && (0, KB.o)(QB, OB, 0, QB), QB
    }
    class GO {
      constructor(BB, OB, GB, YB) {
        this.model = BB, this.decode = OB, this.fileInfo = GB, this.uniqueRootUrl = YB, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const DB = new Set,
          QB = (OB, GB) => {
            const YB = BB.nodes[OB];
            if (this.parents.has(YB)) throw new mB.f(`/nodes/${OB}: Invalid recursive node hierarchy`);
            this.parents.set(YB, GB);
            const oB = null === YB.mesh ? [] : BB.meshes[YB.mesh].primitives,
              jB = oB.map((BB => {
                const OB = oB.length > 1;
                return {
                  name: OB ? `${TB(YB)}_primitive${BB.index}` : TB(YB),
                  node: YB,
                  primitive: BB,
                  part: OB,
                  geometry: null
                }
              }));
            this.uses.set(YB, jB);
            const yB = null !== YB.mesh && DB.has(YB.mesh);
            DB.add(YB.mesh), this.own.set(YB, yB ? [] : jB);
            for (const BB of YB.children) QB(BB, YB)
          };
        for (const oB of BB.rootNodes) QB(oB, null);
        this.primitives = BB.nodes.flatMap((BB => {
          var OB;
          return null !== (OB = this.own.get(BB)) && void 0 !== OB ? OB : []
        }))
      }
      decodeGeometries() {
        const BB = new Map;
        return Promise.all(this.primitives.map((async OB => {
          const {
            primitive: GB
          } = OB, YB = GB.draco;
          let DB = YB ? BB.get(YB.bufferView.index) : Promise.resolve(EB(GB));
          DB || (DB = LB(GB, this.decode).then((BB => hB(GB, BB))), BB.set(YB.bufferView.index, DB)), OB.geometry = await DB
        })))
      }
      parentOf(BB) {
        var OB;
        return null !== (OB = this.parents.get(BB)) && void 0 !== OB ? OB : null
      }
      meshesUnder(BB) {
        const OB = this.model.nodes.filter((BB => this.uses.has(BB)));
        for (const YB of OB) {
          const OB = this.uses.get(YB),
            GB = OB.find((OB => OB.name === BB));
          if (GB) return 1 === OB.length ? this.subtree(YB) : this.own.get(YB).includes(GB) ? [GB] : []
        }
        const GB = OB.find((OB => 1 !== this.uses.get(OB).length && TB(OB) === BB));
        return GB ? this.subtree(GB) : null
      }
      subtree(BB) {
        return [...this.own.get(BB), ...BB.children.flatMap((BB => this.subtree(this.model.nodes[BB])))]
      }
      worldMatrix(BB, OB, GB) {
        let YB = OO(BO(OB ? bB : {}), null);
        const DB = [];
        for (let oB = BB.part ? BB.node : this.parentOf(BB.node); oB; oB = this.parentOf(oB)) DB.unshift(oB);
        for (const oB of DB) YB = OO(BO(oB), YB);
        const QB = BO(BB.part ? {} : BB.node);
        return void 0 !== GB && QB.scale.fill(GB), OO(QB, YB)
      }
      floats(BB) {
        const {
          vertexAttributes: OB,
          vertexCount: GB
        } = BB.geometry;
        return new Map(OB.map((BB => [BB.kind, (0, uB.i)(BB, GB)])))
      }
      imageUrl(BB) {
        return function(BB, OB, GB) {
          let {
            name: YB
          } = OB;
          return `data:${BB}${YB}#image${GB}`
        }(this.uniqueRootUrl, this.fileInfo, BB)
      }
      textureDesc(BB, OB) {
        var GB;
        let {
          texture: YB,
          transform: DB
        } = BB;
        const {
          sampler: QB,
          image: oB
        } = this.model.textures[YB], {
          bufferView: jB,
          mimeType: yB,
          name: JB
        } = this.model.images[oB], MB = DB && {
          ...DB.offset ? {
            uOffset: DB.offset[0],
            vOffset: DB.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...DB.rotation ? {
            wAng: -DB.rotation
          } : {},
          ...DB.scale ? {
            uScale: DB.scale[0],
            vScale: DB.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(oB),
          noMipmap: tB(QB),
          invertY: !1,
          samplingMode: vB(QB),
          data: {
            bytes: jB.bytes,
            mimeType: yB,
            label: JB,
            context: `/textures/${YB}`
          },
          sets: {
            wrapU: xB(QB.wrapS),
            wrapV: xB(QB.wrapT),
            ...MB,
            coordinatesIndex: null !== (GB = null === DB || void 0 === DB ? void 0 : DB.texCoord) && void 0 !== GB ? GB : 0,
            hasAlpha: OB
          }
        }
      }
    }
    async function YO(BB, OB, GB, YB, DB, QB) {
      let oB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const jB = function(BB, OB, GB) {
          return "string" !== typeof OB ? {
            url: "",
            rootUrl: BB,
            name: GB()
          } : OB ? OB.startsWith("data:") ? {
            url: OB,
            rootUrl: BB,
            name: ""
          } : BB ? {
            url: BB + OB,
            rootUrl: BB,
            name: OB
          } : {
            url: OB,
            rootUrl: eB(OB),
            name: aB(OB)
          } : {
            url: BB,
            rootUrl: eB(BB),
            name: aB(BB)
          }
        }(GB, BB, DB),
        yB = {};
      OB.addPendingData(yB);
      try {
        const GB = iB(await async function(BB, OB) {
            return "string" !== typeof OB ? OB : BB.url.startsWith("data:") ? (0, mB.k)(BB.url) : await (0, mB.m)(BB.url)
          }(jB, BB)),
          yB = new GO(GB, YB, jB, function(BB, OB) {
            let {
              rootUrl: GB,
              name: YB
            } = BB;
            return !GB.startsWith("file:") && YB ? GB : `${GB}${OB()}/`
          }(jB, DB));
        return await QB(yB), OB.importedMeshesFiles && (OB.loadingPluginName = "Im", oB && OB.importedMeshesFiles.push(jB.url)), yB
      } finally {
        OB.removePendingData(yB)
      }
    }
    var DO = GB(38169),
      QO = GB(38049),
      oO = GB(38573);

    function jO(BB) {
      if (null === BB || void 0 === BB || !BB.min || !BB.max) return null;
      const [OB, GB, YB] = BB.min, [DB, QB, oB] = BB.max, {
        BoundingInfo: jB,
        Xp: yB
      } = (0, DO.c)();
      return new jB(new yB(OB, GB, YB), new yB(DB, QB, oB))
    }

    function yO(BB) {
      (0, QO.e)(BB) || (BB.geometry && BB.geometry.useBoundingInfoFromGeometry ? BB._updateBoundingInfo() : BB.refreshBoundingInfo(!0, !0))
    }
    class JO {
      constructor(BB, OB) {
        this.eq = BB, this.decode = OB, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(BB) {
        let OB = this.viewData.get(BB.index);
        return OB || (OB = this.bufferData.then((() => BB.bytes)), this.viewData.set(BB.index, OB)), OB
      }
      viewBuffer(BB) {
        let OB = this.viewBuffers.get(BB.index);
        return OB || (OB = this.viewBytes(BB).then((BB => new((0, DO.c)().BP)(this.eq.Lp(), BB, !1))), this.viewBuffers.set(BB.index, OB)), OB
      }
      vertexBuffer(BB, OB) {
        const {
          kind: GB,
          data: YB
        } = OB, DB = `${BB.index}:${GB}`;
        let QB = this.vertexBuffers.get(DB);
        if (!QB) {
          const oB = BB.bufferView;
          QB = oB ? this.viewBuffer(oB).then((BB => this.layoutVertexBuffer(BB, OB))) : Promise.resolve(YB).then((BB => new((0, DO.c)().VertexBuffer)(this.eq.Lp(), BB, GB, !1))), this.vertexBuffers.set(DB, QB)
        }
        return QB
      }
      layoutVertexBuffer(BB, OB) {
        let {
          kind: GB,
          offset: YB,
          stride: DB,
          components: QB,
          glType: oB,
          isNormalized: jB
        } = OB;
        const yB = this.eq.Lp();
        return new((0, DO.c)().VertexBuffer)(yB, BB, GB, !1, void 0, DB, void 0, YB, QB, oB, jB, !0, void 0, !0)
      }
      load(BB, OB, GB) {
        const YB = (0, QO.e)(GB),
          DB = BB => {
            YB || (GB._delayInfo = GB._delayInfo || [], -1 === GB._delayInfo.indexOf(BB) && GB._delayInfo.push(BB))
          },
          QB = OB.draco;
        if (QB) {
          for (const BB in QB.attributeIds) DB(BB);
          let oB = this.dracoGeometry.get(QB.bufferView.index);
          return oB || (oB = this.viewBytes(QB.bufferView).then((async () => {
            let DB;
            try {
              DB = await LB(OB, this.decode)
            } catch (yB) {
              throw new mB.f(`${BB}: ${yB instanceof Error?yB.message:String(yB)}`)
            }
            const QB = hB(OB, DB);
            if (YB) return QB;
            const oB = jO(OB.position),
              jB = new((0, DO.c)().MirroredGeometry)(GB.name, this.eq);
            oB && (jB._boundingInfo = oB, jB.useBoundingInfoFromGeometry = !0), QB.indexData && jB.setIndices(QB.indexData);
            for (const BB of QB.vertexAttributes) jB.setVerticesBuffer(this.layoutVertexBuffer(BB.data, BB), QB.vertexCount);
            return jB.link(QB), jB
          })), this.dracoGeometry.set(QB.bufferView.index, oB)), oB
        }
        const oB = [],
          jB = EB(OB);
        if (YB) return GB.isUnIndexed = !jB.indexData, GB.hasVertexAlpha = (0, oO.g)(OB), Promise.resolve(jB);
        const yB = new((0, DO.c)().MirroredGeometry)(GB.name, this.eq),
          {
            indexData: JB
          } = jB;
        JB ? oB.push(this.viewBytes(OB.indices.bufferView).then((() => {
          yB.setIndices(JB)
        }))) : GB.isUnIndexed = !0;
        for (const [MB, {
            kind: PB,
            accessor: zB
          }] of OB.attributes.entries()) DB(PB), oB.push(this.vertexBuffer(zB, jB.vertexAttributes[MB]).then((BB => {
          if ("position" === BB.getKind()) {
            const BB = jO(zB);
            BB && (yB._boundingInfo = BB, yB.useBoundingInfoFromGeometry = !0)
          }
          yB.setVerticesBuffer(BB, jB.vertexCount)
        })));
        return (0, oO.g)(OB) && (GB.hasVertexAlpha = !0), Promise.all(oB).then((() => (yB.link(jB), yB)))
      }
    }
    var MO, PO = GB(37993),
      zO = GB(37771),
      lO = GB(38583),
      pO = GB(37880),
      qO = GB(37966),
      ZO = GB(3088),
      NO = GB(37928);

    function RO(BB, OB) {
      BB.metadata = BB.metadata || {};
      const GB = BB._internalMetadata = BB._internalMetadata || {},
        YB = GB.Im = GB.Im || {};
      (YB.pointers = YB.pointers || []).push(OB)
    }

    function WO(BB, OB) {
      if (OB && Object.keys(OB).length > 0) {
        const GB = BB.metadata = BB.metadata || {};
        (GB.Im = GB.Im || {}).extras = OB
      }
    }

    function AO(BB, OB) {
      OB.position = BB.translation ? zO.Xp.FromArray(BB.translation) : zO.Xp.Zero(), OB.rotationQuaternion = BB.rotation ? zO.Quaternion.FromArray(BB.rotation) : zO.Quaternion.Identity(), OB.SP = BB.scale ? zO.Xp.FromArray(BB.scale) : zO.Xp.One()
    }
    class VO {
      constructor(BB, OB) {
        if (this.eq = BB, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, OB) {
          const OB = BB.Lp(),
            GB = BB.lF.add((() => {
              this.dispose()
            })),
            YB = OB.ip.add((() => {
              for (const BB of [...this.geometries, ...this.meshes, ...this.textures]) BB._rebuild()
            }));
          this.release = () => {
            BB.lF.remove(GB), OB.ip.remove(YB)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const BB of this.meshes) this.eq.UDB(BB);
          for (const BB of this.materials) this.eq.addMaterial(BB);
          for (const BB of this.geometries) this.eq.addGeometry(BB);
          for (const BB of this.transformNodes) this.eq.addTransformNode(BB);
          for (const BB of this.textures) this.eq.addTexture(BB)
        }
      }
      dispose() {
        var BB;
        for (const OB of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const BB of OB.slice()) BB.dispose();
          OB.length = 0
        }
        null === (BB = this.release) || void 0 === BB || BB.call(this), this.release = null
      }
    }
    class SO {
      constructor(BB, OB, GB, YB, DB, QB, oB) {
        this.asset = BB, this.eq = OB, this.tree = GB, this.geometryData = DB, this.materials = QB, this.lite = oB, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = YB ? GB : null
      }
      create(BB) {
        if (this.lite) return BB();
        const OB = this.eq;
        OB._blockEntityCollection = !!this.container;
        try {
          const OB = BB();
          return this.container && (OB._parentContainer = this.container), OB
        } finally {
          OB._blockEntityCollection = !1
        }
      }
      node(BB, OB) {
        return this.create((() => this.lite ? OB ? (0, lO.h)(this.lite, BB) : (0, lO.s)(this.lite, BB) : OB ? new((0, DO.c)().Mesh)(BB, this.eq) : new((0, DO.c)().TransformNode)(BB, this.eq)))
      }
      async load() {
        var BB;
        this.asset.model.json.nodes && this.createRoot();
        const OB = this.lite ? null : this.eq,
          GB = null !== (BB = null === OB || void 0 === OB ? void 0 : OB.blockMaterialDirtyMechanism) && void 0 !== BB && BB;
        let YB;
        OB && (OB.blockMaterialDirtyMechanism = !0);
        try {
          YB = this.loadScene()
        } finally {
          null === OB || void 0 === OB || OB._forceBlockMaterialDirtyMechanism(GB)
        }
        await YB;
        const {
          root: DB,
          tree: QB
        } = this;
        DB && (DB.Zk(!0), QB.meshes.push(DB), QB.rootNodes.push(DB));
        for (const jB of this.asset.model.nodes) {
          const BB = this.nodeObjects.get(jB.index);
          BB && ["TransformNode", "LiteNode"].includes(BB.getClassName()) && QB.transformNodes.push(BB);
          for (const OB of null !== (oB = this.nodePrimitives.get(jB.index)) && void 0 !== oB ? oB : []) {
            var oB;
            QB.meshes.push(OB);
            const BB = OB.geometry;
            BB && !QB.geometries.includes(BB) && QB.geometries.push(BB)
          }
        }
      }
      createRoot() {
        const BB = this.node("__root__", !0);
        this.root = BB, BB.Zk(!1), this.eq.useRightHandedSystem || AO(bB, BB)
      }
      loadScene() {
        const BB = [];
        for (const OB of this.asset.model.rootNodes) BB.push(this.loadNode(this.asset.model.nodes[OB], (BB => {
          BB.parent = this.root
        })));
        return BB.push(Promise.resolve()), Promise.all(BB).then((() => {}))
      }
      loadNode(BB, OB) {
        const GB = `/nodes/${BB.index}`,
          YB = [],
          DB = DB => {
            if (RO(DB, GB), AO(BB, DB), BB.hasCamera && !this.eq.useRightHandedSystem) {
              const {
                SP: BB
              } = DB;
              BB.set(-1, BB.y, BB.z)
            }
            for (const OB of BB.children) YB.push(this.loadNode(this.asset.model.nodes[OB], (BB => {
              BB.parent = DB
            })));
            (GB => {
              WO(GB, BB.extras), OB(GB)
            })(DB)
          };
        if (null === BB.mesh) {
          const OB = this.node(TB(BB), !1);
          this.nodeObjects.set(BB.index, OB), DB(OB)
        } else {
          const OB = this.asset.model.meshes[BB.mesh];
          YB.push(this.loadMesh(`/meshes/${OB.index}`, BB, OB, DB))
        }
        return Promise.all(YB).then((() => {
          for (const GB of null !== (OB = this.nodePrimitives.get(BB.index)) && void 0 !== OB ? OB : []) {
            var OB;
            yO(GB)
          }
          return this.nodeObjects.get(BB.index)
        }))
      }
      loadMesh(BB, OB, GB, YB) {
        const DB = [],
          QB = TB(OB);
        if (1 === GB.primitives.length) {
          const YB = GB.primitives[0];
          DB.push(this.loadPrimitive(`${BB}/primitives/${YB.index}`, QB, YB, (BB => {
            this.nodeObjects.set(OB.index, BB), this.nodePrimitives.set(OB.index, [BB])
          })))
        } else {
          const YB = this.node(QB, !1);
          this.nodeObjects.set(OB.index, YB);
          const oB = [];
          this.nodePrimitives.set(OB.index, oB);
          for (const OB of GB.primitives) DB.push(this.loadPrimitive(`${BB}/primitives/${OB.index}`, `${QB}_primitive${OB.index}`, OB, (BB => {
            BB.parent = YB, oB.push(BB)
          })))
        }
        const oB = this.nodeObjects.get(OB.index);
        return YB(oB), Promise.all(DB).then((() => oB))
      }
      loadPrimitive(BB, OB, GB, YB) {
        const DB = [],
          QB = this.node(OB, !0);
        if (QB.sideOrientation = this.eq.useRightHandedSystem ? pO.d.CounterClockWiseSideOrientation : pO.d.ClockWiseSideOrientation, DB.push(this.geometryData.load(BB, GB, QB).then((BB => {
            if ((0, QO.e)(QB)) {
              var OB, GB;
              const YB = BB;
              QB.replaceModel(YB, Int32Array.of(0, null !== (OB = null === (GB = YB.indexData) || void 0 === GB ? void 0 : GB.length) && void 0 !== OB ? OB : YB.vertexCount, 0, YB.vertexCount))
            } else this.create((() => (BB.applyToMesh(QB), BB)))
          }))), this.materials) {
          const BB = 0 === GB.mode ? pO.d.PointListDrawMode : pO.d.TriangleFillMode,
            OB = null === GB.material ? null : this.asset.model.materials[GB.material];
          DB.push(this.loadMaterial(OB, BB, (BB => {
            QB.material = BB
          })))
        }
        return RO(QB, BB), YB(QB), Promise.all(DB).then((() => QB))
      }
      loadMaterial(BB, OB, GB) {
        var YB;
        const DB = `${null!==(YB=null===BB||void 0===BB?void 0:BB.index)&&void 0!==YB?YB:"default"}:${OB}`;
        let QB = this.materialData.get(DB);
        return QB || (QB = this.createMaterial(BB, OB), this.materialData.set(DB, QB)), GB(QB.material), QB.promise
      }
      createMaterial(BB, OB) {
        const GB = BB ? BB.name || `material${BB.index}` : "__GLTFLoader._default",
          {
            style: YB,
            unlit: DB
          } = this.materials;
        let QB;
        const oB = this.create((() => {
          const oB = (0, NO.c)({
            name: GB,
            eq: this.eq,
            sets: {
              ...(0, oO.e)(this.asset, BB, YB, DB),
              fillMode: OB
            },
            unrendered: !0
          });
          return QB = oB.model, oB.mirror
        }));
        let jB = Promise.resolve();
        if (BB) {
          const OB = `/materials/${BB.index}`,
            YB = QB.diffuseTexture;
          if (YB && !YB.mirror) jB = new Promise((BB => setTimeout(BB)));
          else if (YB) {
            const DB = YB.mirror;
            DB._parentContainer = this.container, DB.name = `${GB} (Base Color)`, RO(DB, `${OB}${BB.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(DB), jB = (0, qO.q)(YB)
          }
          WO(oB, BB.extras), RO(oB, OB)
        }
        return this.tree.materials.push(oB), {
          material: oB,
          promise: jB
        }
      }
    }

    function nO() {
      PO.f.dracoDecodes = VB.decodes, PO.f.dracoWorkersStarted = VB.workersStarted, PO.f.dracoMostWorkers = VB.mostWorkers
    }
    async function UO(BB, OB, GB, DB, QB) {
      try {
        return await async function(BB, OB, GB, DB, QB, oB) {
          var jB;
          let yB;
          const JB = null === (jB = (0, ZO.g)()) || void 0 === jB ? void 0 : jB.UP,
            MB = null !== JB && void 0 !== JB && JB.Dq && OB === JB.JF() ? JB : null,
            PB = QB && !MB;
          return await YO(BB, OB, GB, DB, YB.e, (BB => (yB = new VO(OB, PB), new SO(BB, OB, yB, PB, new JO(OB, DB), oB, MB).load())), !QB), yB
        }(BB, OB, GB, dB, DB, QB)
      } finally {
        nO()
      }
    }
    async function fO(BB, OB, GB, DB) {
      try {
        return await YO(BB, OB, GB, dB, YB.e, (BB => DB(BB, new JO(OB, dB))))
      } finally {
        nO()
      }
    }
    MO = jB, ZB || (ZB = {
      scriptUrl: new URL(MO.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(MO.wasmBinaryUrl, location.href).href
    })
  },
  36856: BB => {
    BB.exports = function(BB, OB, GB, YB) {
      var DB = self || window;
      try {
        try {
          var QB;
          try {
            QB = new DB.Blob([BB])
          } catch (JB) {
            (QB = new(DB.BlobBuilder || DB.WebKitBlobBuilder || DB.MozBlobBuilder || DB.MSBlobBuilder)).append(BB), QB = QB.getBlob()
          }
          var oB = DB.URL || DB.webkitURL,
            jB = oB.createObjectURL(QB),
            yB = new DB[OB](jB, GB);
          return oB.revokeObjectURL(jB), yB
        } catch (JB) {
          return new DB[OB]("data:application/javascript,".concat(encodeURIComponent(BB)), GB)
        }
      } catch (JB) {
        if (!YB) throw Error("Inline worker is not supported");
        return new DB[OB](YB, GB)
      }
    }
  },
  44657: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  44655: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);