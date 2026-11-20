export const id = 203;
export const ids = [203];
export const modules = {
  41076: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      loadGlbAsset: () => HR,
      loadGlbTree: () => jR
    });
    var Eu = yu(37665),
      Ku = yu(41080),
      Qu = yu(36152),
      mu = yu.n(Qu);

    function Ju() {
      return mu()('(()=>{class uu extends Error{}function Ru(Ru,yu){const Eu=Ru._malloc(yu);if(0===Eu)throw new uu(`Draco: the decoder\'s heap refused ${yu} bytes`);return Eu}function yu(uu){return{[uu.DT_FLOAT32]:[Float32Array,5126],[uu.DT_INT8]:[Int8Array,5120],[uu.DT_INT16]:[Int16Array,5122],[uu.DT_INT32]:[Int32Array,5124],[uu.DT_UINT8]:[Uint8Array,5121],[uu.DT_UINT16]:[Uint16Array,5123],[uu.DT_UINT32]:[Uint32Array,5125]}}function Eu(Ru,Eu,Ku,Qu,mu){let Ju=null,Nu=null,Xu=null;try{Ju=new Ru.Decoder,Nu=new Ru.DecoderBuffer,Nu.Init(Eu,Eu.byteLength);let Vu=0;const ru=Ju.GetEncodedGeometryType(Nu);if(ru===Ru.TRIANGULAR_MESH){const yu=new Ru.Mesh;Xu=yu;const Eu=Ju.DecodeBufferToMesh(Nu,yu);if(!Eu.ok()||0===yu.ptr)throw new uu(Eu.error_msg());Vu=3*yu.num_faces()}else{if(ru!==Ru.POINT_CLOUD)throw new uu(`Draco: Cannot decode invalid geometry type ${ru}`);{const yu=new Ru.PointCloud;Xu=yu;const Eu=Ju.DecodeBufferToPointCloud(Nu,yu);if(!Eu.ok()||!yu.ptr)throw new uu(Eu.error_msg())}}const Bu=Xu.num_points();if(Bu!==Qu.vertices||Vu!==Qu.indices)throw new uu(`Draco: decoded ${Bu} vertices and ${Vu} indices, the accessors declare ${Qu.vertices} and ${Qu.indices}`);const xu=yu(Ru),Su=[];for(const{kind:Ru,id:yu,components:Eu}of Ku){const Ku=Ju.GetAttributeByUniqueId(Xu,yu);if(!Ku||0===Ku.ptr)throw new uu(`Draco: no attribute with id ${yu} (${Ru})`);const Qu=Ku.data_type();if(!xu[Qu])throw new uu(`Draco: Cannot decode invalid data type ${Qu}`);if(Ku.num_components()!==Eu)throw new uu(`Draco: ${Ru} decodes to ${Ku.num_components()} components, its accessor declares ${Eu}`);Su.push([Ru,Ku,Qu])}return mu({dracoDecoder:Ju,geometry:Xu,triangles:ru===Ru.TRIANGULAR_MESH,numPoints:Bu,numIndices:Vu,attributes:Su})}finally{Xu&&Ru.destroy(Xu),Nu&&Ru.destroy(Nu),Ju&&Ru.destroy(Ju)}}const Ku=self;let Qu=null;self.onmessage=uu=>{let{data:mu}=uu;if("init"===mu.id){try{importScripts(mu.url),Qu=DracoDecoderModule({wasmBinary:mu.wasmBinary}),Ku.postMessage({id:"initDone"})}catch(ru){Ku.postMessage({id:"initError",message:ru instanceof Error?ru.message:String(ru)})}return}const{seq:Ju,data:Nu,attributeIds:Xu,expected:Vu}=mu;Qu?Qu.then((uu=>{try{const Qu=function(uu,Ku,Qu,mu){const Ju=Object.keys(Qu).map((uu=>({kind:uu,id:Qu[uu],components:mu.components[uu]})));return Eu(uu,Ku,Ju,mu,(Eu=>{let{dracoDecoder:Ku,geometry:Qu,triangles:mu,numPoints:Ju,numIndices:Nu,attributes:Xu}=Eu;const Vu=yu(uu);let ru=null;if(mu){const yu=4*Nu,Eu=Ru(uu,yu);try{Ku.GetTrianglesUInt32Array(Qu,yu,Eu),ru=new Uint32Array(Nu),ru.set(new Uint32Array(uu.HEAPF32.buffer,Eu,Nu))}finally{uu._free(Eu)}}const Bu=[];for(const[yu,xu,Su]of Xu){const[Eu]=Vu[Su],mu=xu.num_components(),Nu=Ju*mu,Xu=Nu*Eu.BYTES_PER_ELEMENT,ru=Ru(uu,Xu);try{Ku.GetAttributeDataArrayForAllPoints(Qu,xu,Su,Xu,ru),Bu.push({kind:yu,data:new Eu(uu.HEAPF32.buffer,ru,Nu).slice(),size:mu,byteOffset:xu.byte_offset(),byteStride:xu.byte_stride(),normalized:xu.normalized()})}finally{uu._free(ru)}}return{indices:ru,attributes:Bu,totalVertices:Ju}}))}(uu,Nu,Xu,Vu),mu=Qu.attributes.map((uu=>uu.data.buffer));Qu.indices&&mu.push(Qu.indices.buffer),Ku.postMessage({id:"decoded",seq:Ju,...Qu},mu)}catch(ru){Ku.postMessage({id:"decodeError",seq:Ju,message:ru instanceof Error?ru.message:String(ru)})}}),(uu=>{Ku.postMessage({id:"decodeError",seq:Ju,message:uu instanceof Error?uu.message:String(uu)})})):Ku.postMessage({id:"decodeError",seq:Ju,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, yu.p + "dracoDecode.worker.ce129f5e.worker.js")
    }
    var Nu = yu(106);
    const Xu = 1e3;
    let Vu = null,
      ru = null;
    const Bu = [],
      xu = [];
    let Su = 0;
    const pu = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      Tu = function(uu, Ru) {
        const yu = uu ? Math.max(1, Math.min(Math.floor(.5 * uu), 4)) : 1;
        return Ru ? Math.min(yu, 2) : yu
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, Nu.isMobile)());

    function Wu() {
      if (!Vu) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: uu,
        wasmBinaryUrl: Ru
      } = Vu;
      return ru ??= fetch(Ru).then((uu => {
        if (!uu.ok) throw new Error(`Draco: fetching ${Ru} failed: ${uu.status}`);
        return uu.arrayBuffer()
      })), ru.catch((() => {
        ru = null
      })), pu.workersStarted++, ru.then((Ru => new Promise(((yu, Eu) => {
        const Ku = new Ju;
        Ku.onerror = uu => {
          Ku.onmessage = null, Ku.onerror = null, Ku.terminate(), Eu(new Error("Draco: the decode worker failed to start" + (uu.message ? `: ${uu.message}` : " (its script did not load)")))
        }, Ku.onmessage = uu => {
          let {
            data: Ru
          } = uu;
          Ku.onmessage = null, Ku.onerror = null, "initDone" === Ru.id ? yu(Ku) : (Ku.terminate(), Eu(new Error(`Draco: ${"initError"===Ru.id?Ru.message:"the worker did not start"}`)))
        };
        const Qu = Ru.slice(0),
          mu = {
            id: "init",
            url: uu,
            wasmBinary: Qu
          };
        Ku.postMessage(mu, [Qu])
      }))))
    }

    function ju(uu) {
      const Ru = Bu.indexOf(uu); - 1 !== Ru && Bu.splice(Ru, 1);
      const yu = xu.shift();
      yu && du(yu)
    }

    function Hu(uu, Ru) {
      uu.busy = !0, uu.releaseTimer && (clearTimeout(uu.releaseTimer), uu.releaseTimer = null);
      uu.worker.then((yu => {
        const Eu = Su++;
        yu.onmessage = Ku => {
          let {
            data: Qu
          } = Ku;
          if (("decoded" === Qu.id || "decodeError" === Qu.id) && Qu.seq === Eu) {
            if (yu.onmessage = null, yu.onerror = null, "decoded" === Qu.id) return pu.decodes++, Ru.resolve({
              indices: Qu.indices,
              attributes: Qu.attributes,
              totalVertices: Qu.totalVertices
            }), void(() => {
              const Ru = xu.shift();
              Ru ? Hu(uu, Ru) : (uu.busy = !1, uu.releaseTimer = setTimeout((() => {
                const Ru = Bu.indexOf(uu); - 1 !== Ru && Bu.splice(Ru, 1), uu.worker.then((uu => {
                  uu.terminate()
                }))
              }), Xu))
            })();
            yu.terminate(), Ru.reject(new Error(Qu.message)), ju(uu)
          }
        }, yu.onerror = Eu => {
          yu.onmessage = null, yu.onerror = null, yu.terminate(), Ru.reject(new Error(`Draco: the decode worker failed: ${Eu.message}`)), ju(uu)
        };
        const Ku = {
          id: "decode",
          seq: Eu,
          data: Ru.data,
          attributeIds: Ru.attributeIds,
          expected: Ru.expected
        };
        yu.postMessage(Ku, [Ru.data.buffer])
      }), (yu => {
        Ru.reject(yu instanceof Error ? yu : new Error(String(yu))), ju(uu)
      }))
    }

    function du(uu) {
      const Ru = Bu.find((uu => !uu.busy));
      if (Ru) Hu(Ru, uu);
      else {
        if (Bu.length < Tu) {
          const Ru = {
            worker: Wu(),
            busy: !0,
            releaseTimer: null
          };
          return Bu.push(Ru), pu.mostWorkers = Math.max(pu.mostWorkers, Bu.length), void Hu(Ru, uu)
        }
        xu.push(uu)
      }
    }

    function bu(uu, Ru, yu) {
      return new Promise(((Eu, Ku) => {
        du({
          data: new Int8Array(uu.buffer, uu.byteOffset, uu.byteLength).slice(),
          attributeIds: Ru,
          expected: yu,
          resolve: Eu,
          reject: Ku
        })
      }))
    }
    var Cu = yu(37190),
      ku = yu(37203),
      eu = yu(9143),
      Au = yu(9135);
    const Du = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function Mu(uu) {
      const Ru = (0, Au.j)(uu.byteLength);
      if (Ru) throw new eu.k(Ru);
      const {
        json: yu,
        bin: Eu
      } = (0, eu.y)(uu), Ku = (0, Au.h)(yu, Eu);
      if (Ku) throw new eu.k(Ku);
      try {
        return function(uu, Ru) {
          var yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu, ru, Bu, xu, Su, pu, Tu;
          const Wu = new Map,
            ju = yu => {
              let Eu = Wu.get(yu);
              if (!Eu) {
                var Ku;
                const Qu = uu.bufferViews[yu],
                  mu = null !== (Ku = Qu.byteOffset) && void 0 !== Ku ? Ku : 0;
                Eu = {
                  index: yu,
                  bytes: Ru.subarray(mu, mu + Qu.byteLength),
                  byteStride: Qu.byteStride
                }, Wu.set(yu, Eu)
              }
              return Eu
            },
            Hu = new Map,
            du = Ru => {
              let yu = Hu.get(Ru);
              if (!yu) {
                var Eu;
                const Ku = uu.accessors[Ru];
                yu = {
                  index: Ru,
                  count: Ku.count,
                  type: Ku.type,
                  numComponents: eu.m[Ku.type],
                  componentType: Ku.componentType,
                  normalized: null !== (Eu = Ku.normalized) && void 0 !== Eu && Eu,
                  byteOffset: Ku.byteOffset,
                  bufferView: void 0 === Ku.bufferView ? null : ju(Ku.bufferView),
                  min: Ku.min,
                  max: Ku.max
                }, Hu.set(Ru, yu)
              }
              return yu
            },
            bu = null !== (yu = null === (Eu = uu.extensionsUsed) || void 0 === Eu ? void 0 : Eu.includes("KHR_draco_mesh_compression")) && void 0 !== yu && yu,
            Cu = (null !== (Ku = uu.meshes) && void 0 !== Ku ? Ku : []).map(((Ru, yu) => {
              const Eu = Ru.primitives.map(((Ru, yu) => {
                var Eu, Ku, Qu;
                const mu = bu ? null === (Eu = Ru.extensions) || void 0 === Eu ? void 0 : Eu.KHR_draco_mesh_compression : void 0;
                let Ju = null;
                const Nu = [];
                if (mu) {
                  const yu = {
                    vertices: uu.accessors[Ru.attributes.POSITION].count,
                    indices: void 0 === Ru.indices ? 0 : uu.accessors[Ru.indices].count,
                    components: {}
                  };
                  Ju = {
                    bufferView: ju(mu.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: yu
                  };
                  for (const [Eu, Ku] of eu.h) {
                    const Qu = mu.attributes[Eu];
                    if (void 0 === Qu) continue;
                    Ju.attributeIds[Ku] = Qu;
                    const Nu = Ru.attributes[Eu];
                    var Xu;
                    if (void 0 !== Nu) Ju.normalized[Ku] = null !== (Xu = uu.accessors[Nu].normalized) && void 0 !== Xu && Xu, yu.components[Ku] = eu.m[uu.accessors[Nu].type]
                  }
                } else
                  for (const [uu, Vu] of eu.h) {
                    const yu = Ru.attributes[uu];
                    void 0 !== yu && Nu.push({
                      semantic: uu,
                      kind: Vu,
                      accessor: du(yu)
                    })
                  }
                return {
                  index: yu,
                  mode: null !== (Ku = Ru.mode) && void 0 !== Ku ? Ku : 4,
                  attributes: Nu,
                  indices: mu || void 0 === Ru.indices ? null : du(Ru.indices),
                  position: void 0 === Ru.attributes.POSITION ? null : du(Ru.attributes.POSITION),
                  material: null !== (Qu = Ru.material) && void 0 !== Qu ? Qu : null,
                  draco: Ju
                }
              }));
              return {
                index: yu,
                name: Ru.name,
                primitives: Eu,
                extras: Ru.extras
              }
            })),
            ku = (null !== (Qu = uu.nodes) && void 0 !== Qu ? Qu : []).map(((uu, Ru) => {
              var yu, Eu;
              return {
                index: Ru,
                name: uu.name,
                children: null !== (yu = uu.children) && void 0 !== yu ? yu : [],
                mesh: null !== (Eu = uu.mesh) && void 0 !== Eu ? Eu : null,
                translation: uu.translation,
                rotation: uu.rotation,
                scale: uu.scale,
                hasCamera: void 0 !== uu.camera,
                extras: uu.extras
              }
            })),
            Au = null !== (mu = null === (Ju = uu.extensionsUsed) || void 0 === Ju ? void 0 : Ju.includes("KHR_materials_unlit")) && void 0 !== mu && mu,
            Mu = null !== (Nu = null === (Xu = uu.extensionsUsed) || void 0 === Xu ? void 0 : Xu.includes("KHR_texture_transform")) && void 0 !== Nu && Nu,
            Iu = (null !== (Vu = uu.materials) && void 0 !== Vu ? Vu : []).map(((uu, Ru) => {
              var yu, Eu, Ku, Qu;
              const mu = uu.pbrMetallicRoughness,
                Ju = null === mu || void 0 === mu ? void 0 : mu.baseColorTexture;
              return {
                index: Ru,
                name: uu.name,
                extras: uu.extras,
                unlit: Au && void 0 !== (null === (yu = uu.extensions) || void 0 === yu ? void 0 : yu.KHR_materials_unlit),
                pbr: mu ? {
                  baseColorFactor: mu.baseColorFactor,
                  metallicFactor: mu.metallicFactor,
                  roughnessFactor: mu.roughnessFactor
                } : null,
                baseColorTexture: Ju ? {
                  texture: Ju.index,
                  transform: Mu && (null === (Eu = Ju.extensions) || void 0 === Eu ? void 0 : Eu.KHR_texture_transform) || null
                } : null,
                emissiveFactor: uu.emissiveFactor,
                alphaMode: null !== (Ku = uu.alphaMode) && void 0 !== Ku ? Ku : "OPAQUE",
                alphaCutoff: uu.alphaCutoff,
                doubleSided: null !== (Qu = uu.doubleSided) && void 0 !== Qu && Qu
              }
            })),
            Gu = (null !== (ru = uu.textures) && void 0 !== ru ? ru : []).map(((Ru, yu) => {
              var Eu, Ku;
              const Qu = void 0 === Ru.sampler ? Du : {
                index: Ru.sampler,
                ...null === (Eu = uu.samplers) || void 0 === Eu ? void 0 : Eu[Ru.sampler]
              };
              return {
                index: yu,
                sampler: {
                  index: Qu.index,
                  magFilter: Qu.magFilter,
                  minFilter: Qu.minFilter,
                  wrapS: Qu.wrapS,
                  wrapT: Qu.wrapT
                },
                image: null !== (Ku = Ru.source) && void 0 !== Ku ? Ku : -1
              }
            })),
            Uu = (null !== (Bu = uu.images) && void 0 !== Bu ? Bu : []).map(((uu, Ru) => ({
              index: Ru,
              name: uu.name,
              mimeType: uu.mimeType,
              bufferView: ju(uu.bufferView)
            }))),
            nu = null !== (xu = (0, eu.v)(uu)) && void 0 !== xu ? xu : 0;
          return {
            json: uu,
            rootNodes: null !== (Su = null === (pu = uu.scenes) || void 0 === pu || null === (Tu = pu[nu]) || void 0 === Tu ? void 0 : Tu.nodes) && void 0 !== Su ? Su : [],
            nodes: ku,
            meshes: Cu,
            materials: Iu,
            textures: Gu,
            images: Uu
          }
        }(yu, Eu)
      } catch (Qu) {
        throw Qu instanceof eu.i ? Qu : new eu.i(`reading the GLB failed: ${Qu instanceof Error?Qu.message:String(Qu)}`)
      }
    }
    async function Iu(uu, Ru) {
      var yu, Eu;
      const Ku = uu.draco;
      if (!Ku) throw new eu.i("not a Draco primitive");
      let Qu;
      try {
        Qu = await Ru(Ku.bufferView.bytes, Ku.attributeIds, Ku.expected)
      } catch (Xu) {
        throw new eu.i(`Draco decoding failed: ${Xu instanceof Error?Xu.message:String(Xu)}`)
      }
      const {
        vertices: mu,
        indices: Ju,
        components: Nu
      } = Ku.expected;
      if (Qu.totalVertices !== mu || (null !== (yu = null === (Eu = Qu.indices) || void 0 === Eu ? void 0 : Eu.length) && void 0 !== yu ? yu : 0) !== Ju || Qu.attributes.some((uu => uu.size !== Nu[uu.kind] || uu.data.length !== mu * uu.size))) throw new eu.i("Draco decoding gave other counts than the accessors declare");
      for (const Vu of Qu.attributes) {
        const uu = Ku.normalized[Vu.kind];
        void 0 !== uu && (Vu.normalized = uu)
      }
      return Qu
    }
    const Gu = new WeakMap;

    function Uu(uu, Ru) {
      var yu;
      const Eu = null !== (yu = Gu.get(uu)) && void 0 !== yu ? yu : Ru(uu);
      return Gu.set(uu, Eu), Eu
    }

    function nu(uu) {
      const Ru = uu.bufferView,
        yu = 5125 === uu.componentType ? Uint32Array : Uint16Array,
        Eu = Ru.bytes.buffer,
        Ku = Ru.bytes.byteOffset + (uu.byteOffset || 0);
      return Ku % yu.BYTES_PER_ELEMENT !== 0 ? new yu(Eu.slice(Ku, Ku + uu.count * yu.BYTES_PER_ELEMENT), 0) : new yu(Eu, Ku, uu.count)
    }

    function su(uu, Ru) {
      if (uu.min && uu.max) return [new Float64Array(uu.min), new Float64Array(uu.max)];
      const yu = Ru.find((uu => {
          let {
            kind: Ru
          } = uu;
          return "position" === Ru
        })),
        Eu = yu ? (0, ku.l)(yu, uu.count) : new Float32Array(0);
      return (0, ku.x)(Eu.length / 3, ((uu, Ru) => Eu[3 * uu + Ru]))
    }

    function tu(uu) {
      const Ru = uu.attributes.map((uu => {
          var Ru, yu;
          let {
            kind: Eu,
            accessor: Ku
          } = uu;
          const {
            bufferView: Qu,
            numComponents: mu
          } = Ku;
          if (!Qu) {
            return {
              kind: Eu,
              data: Uu(Ku, (() => new Float32Array(mu * Ku.count))),
              offset: 0,
              stride: 4 * mu,
              components: mu,
              glType: 5126,
              isNormalized: !1
            }
          }
          const Ju = null !== (Ru = Qu.byteStride) && void 0 !== Ru ? Ru : mu * eu.b[Ku.componentType];
          return {
            kind: Eu,
            data: Qu.bytes,
            offset: null !== (yu = Ku.byteOffset) && void 0 !== yu ? yu : 0,
            stride: Ju,
            components: mu,
            glType: Ku.componentType,
            isNormalized: Ku.normalized
          }
        })),
        yu = uu.indices,
        Eu = yu && Uu(yu, nu),
        Ku = uu.position;
      return new ku.h(Ru, Eu, Ku.count, ...su(Ku, Ru))
    }
    const lu = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function gu(uu, Ru) {
      const yu = Ru.attributes.map((uu => {
        let {
          kind: Ru,
          data: yu,
          size: Eu,
          byteOffset: Ku,
          byteStride: Qu,
          normalized: mu
        } = uu;
        return {
          kind: Ru,
          data: yu,
          offset: Ku,
          stride: Qu,
          components: Eu,
          glType: 5120 + lu.indexOf(yu.constructor),
          isNormalized: mu
        }
      }));
      return new ku.h(yu, Ru.indices, Ru.totalVertices, ...su(uu.position, yu))
    }

    function cu(uu) {
      const Ru = uu.lastIndexOf("/");
      return Ru < 0 ? uu : uu.substring(Ru + 1)
    }

    function Lu(uu) {
      const Ru = uu.lastIndexOf("/");
      return Ru < 0 ? "" : uu.substring(0, Ru + 1)
    }

    function zu(uu) {
      return uu.name || `node${uu.index}`
    }
    const Fu = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      wu = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      Zu = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function hu(uu) {
      var Ru, yu, Eu, Ku;
      const Qu = null !== (Ru = uu.minFilter) && void 0 !== Ru ? Ru : 9987;
      return 9729 === (null !== (yu = uu.magFilter) && void 0 !== yu ? yu : 9729) ? null !== (Eu = wu[Qu]) && void 0 !== Eu ? Eu : 3 : null !== (Ku = Zu[Qu]) && void 0 !== Ku ? Ku : 4
    }
    const Pu = {
      33071: 0,
      33648: 2
    };

    function iu(uu) {
      var Ru;
      return null !== (Ru = Pu[null !== uu && void 0 !== uu ? uu : 10497]) && void 0 !== Ru ? Ru : 1
    }

    function Yu(uu) {
      return 9728 === uu.minFilter || 9729 === uu.minFilter
    }

    function ou(uu) {
      var Ru, yu, Eu;
      const Ku = Float64Array.from(null !== (Ru = uu.scale) && void 0 !== Ru ? Ru : [1, 1, 1]);
      return uu.hasCamera && (Ku[0] = -1), {
        translation: Float64Array.from(null !== (yu = uu.translation) && void 0 !== yu ? yu : [0, 0, 0]),
        rotation: Float64Array.from(null !== (Eu = uu.rotation) && void 0 !== Eu ? Eu : [0, 0, 0, 1]),
        scale: Ku
      }
    }

    function qu(uu, Ru) {
      let {
        translation: yu,
        rotation: Eu,
        scale: Ku
      } = uu;
      const Qu = new Float32Array(16);
      return (0, Cu.e)(Ku, 0, Eu, 0, yu, 0, Qu), Ru && (0, Cu.r)(Qu, Ru, 0, Qu), Qu
    }
    class Ou {
      constructor(uu, Ru, yu, Eu) {
        this.model = uu, this.decode = Ru, this.fileInfo = yu, this.uniqueRootUrl = Eu, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const Ku = new Set,
          Qu = (Ru, yu) => {
            const Eu = uu.nodes[Ru];
            if (this.parents.has(Eu)) throw new eu.i(`/nodes/${Ru}: Invalid recursive node hierarchy`);
            this.parents.set(Eu, yu);
            const mu = null === Eu.mesh ? [] : uu.meshes[Eu.mesh].primitives,
              Ju = mu.map((uu => {
                const Ru = mu.length > 1;
                return {
                  name: Ru ? `${zu(Eu)}_primitive${uu.index}` : zu(Eu),
                  node: Eu,
                  primitive: uu,
                  part: Ru,
                  geometry: null
                }
              }));
            this.uses.set(Eu, Ju);
            const Nu = null !== Eu.mesh && Ku.has(Eu.mesh);
            Ku.add(Eu.mesh), this.own.set(Eu, Nu ? [] : Ju);
            for (const uu of Eu.children) Qu(uu, Eu)
          };
        for (const mu of uu.rootNodes) Qu(mu, null);
        this.primitives = uu.nodes.flatMap((uu => {
          var Ru;
          return null !== (Ru = this.own.get(uu)) && void 0 !== Ru ? Ru : []
        }))
      }
      decodeGeometries() {
        const uu = new Map;
        return Promise.all(this.primitives.map((async Ru => {
          const {
            primitive: yu
          } = Ru, Eu = yu.draco;
          let Ku = Eu ? uu.get(Eu.bufferView.index) : Promise.resolve(tu(yu));
          Ku || (Ku = Iu(yu, this.decode).then((uu => gu(yu, uu))), uu.set(Eu.bufferView.index, Ku)), Ru.geometry = await Ku
        })))
      }
      parentOf(uu) {
        var Ru;
        return null !== (Ru = this.parents.get(uu)) && void 0 !== Ru ? Ru : null
      }
      meshesUnder(uu) {
        const Ru = this.model.nodes.filter((uu => this.uses.has(uu)));
        for (const Eu of Ru) {
          const Ru = this.uses.get(Eu),
            yu = Ru.find((Ru => Ru.name === uu));
          if (yu) return 1 === Ru.length ? this.subtree(Eu) : this.own.get(Eu).includes(yu) ? [yu] : []
        }
        const yu = Ru.find((Ru => 1 !== this.uses.get(Ru).length && zu(Ru) === uu));
        return yu ? this.subtree(yu) : null
      }
      subtree(uu) {
        return [...this.own.get(uu), ...uu.children.flatMap((uu => this.subtree(this.model.nodes[uu])))]
      }
      worldMatrix(uu, Ru, yu) {
        let Eu = qu(ou(Ru ? Fu : {}), null);
        const Ku = [];
        for (let mu = uu.part ? uu.node : this.parentOf(uu.node); mu; mu = this.parentOf(mu)) Ku.unshift(mu);
        for (const mu of Ku) Eu = qu(ou(mu), Eu);
        const Qu = ou(uu.part ? {} : uu.node);
        return void 0 !== yu && Qu.scale.fill(yu), qu(Qu, Eu)
      }
      floats(uu) {
        const {
          vertexAttributes: Ru,
          vertexCount: yu
        } = uu.geometry;
        return new Map(Ru.map((uu => [uu.kind, (0, ku.l)(uu, yu)])))
      }
      imageUrl(uu) {
        return function(uu, Ru, yu) {
          let {
            name: Eu
          } = Ru;
          return `data:${uu}${Eu}#image${yu}`
        }(this.uniqueRootUrl, this.fileInfo, uu)
      }
      textureDesc(uu, Ru) {
        var yu;
        let {
          texture: Eu,
          transform: Ku
        } = uu;
        const {
          sampler: Qu,
          image: mu
        } = this.model.textures[Eu], {
          bufferView: Ju,
          mimeType: Nu,
          name: Xu
        } = this.model.images[mu], Vu = Ku && {
          ...Ku.offset ? {
            uOffset: Ku.offset[0],
            vOffset: Ku.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...Ku.rotation ? {
            wAng: -Ku.rotation
          } : {},
          ...Ku.scale ? {
            uScale: Ku.scale[0],
            vScale: Ku.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(mu),
          noMipmap: Yu(Qu),
          invertY: !1,
          samplingMode: hu(Qu),
          data: {
            bytes: Ju.bytes,
            mimeType: Nu,
            label: Xu,
            context: `/textures/${Eu}`
          },
          sets: {
            wrapU: iu(Qu.wrapS),
            wrapV: iu(Qu.wrapT),
            ...Vu,
            coordinatesIndex: null !== (yu = null === Ku || void 0 === Ku ? void 0 : Ku.texCoord) && void 0 !== yu ? yu : 0,
            hasAlpha: Ru
          }
        }
      }
    }
    async function vu(uu, Ru, yu, Eu, Ku, Qu) {
      let mu = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const Ju = function(uu, Ru, yu) {
          return "string" !== typeof Ru ? {
            url: "",
            rootUrl: uu,
            name: yu()
          } : Ru ? Ru.startsWith("data:") ? {
            url: Ru,
            rootUrl: uu,
            name: ""
          } : uu ? {
            url: uu + Ru,
            rootUrl: uu,
            name: Ru
          } : {
            url: Ru,
            rootUrl: Lu(Ru),
            name: cu(Ru)
          } : {
            url: uu,
            rootUrl: Lu(uu),
            name: cu(uu)
          }
        }(yu, uu, Ku),
        Nu = {};
      Ru.addPendingData(Nu);
      try {
        const yu = Mu(await async function(uu, Ru) {
            return "string" !== typeof Ru ? Ru : uu.url.startsWith("data:") ? (0, eu.o)(uu.url) : await (0, eu.s)(uu.url)
          }(Ju, uu)),
          Nu = new Ou(yu, Eu, Ju, function(uu, Ru) {
            let {
              rootUrl: yu,
              name: Eu
            } = uu;
            return !yu.startsWith("file:") && Eu ? yu : `${yu}${Ru()}/`
          }(Ju, Ku));
        return await Qu(Nu), Ru.importedMeshesFiles && (Ru.loadingPluginName = "jD", mu && Ru.importedMeshesFiles.push(Ju.url)), Nu
      } finally {
        Ru.removePendingData(Nu)
      }
    }
    var au = yu(37306),
      fu = yu(37170),
      uR = yu(37659);

    function RR(uu) {
      if (null === uu || void 0 === uu || !uu.min || !uu.max) return null;
      const [Ru, yu, Eu] = uu.min, [Ku, Qu, mu] = uu.max, {
        BoundingInfo: Ju,
        MS: Nu
      } = (0, au.c)();
      return new Ju(new Nu(Ru, yu, Eu), new Nu(Ku, Qu, mu))
    }

    function yR(uu) {
      (0, fu.i)(uu) || (uu.geometry && uu.geometry.useBoundingInfoFromGeometry ? uu._updateBoundingInfo() : uu.refreshBoundingInfo(!0, !0))
    }
    class ER {
      constructor(uu, Ru) {
        this.cp = uu, this.decode = Ru, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(uu) {
        let Ru = this.viewData.get(uu.index);
        return Ru || (Ru = this.bufferData.then((() => uu.bytes)), this.viewData.set(uu.index, Ru)), Ru
      }
      viewBuffer(uu) {
        let Ru = this.viewBuffers.get(uu.index);
        return Ru || (Ru = this.viewBytes(uu).then((uu => new((0, au.c)().XS)(this.cp.eS(), uu, !1))), this.viewBuffers.set(uu.index, Ru)), Ru
      }
      vertexBuffer(uu, Ru) {
        const {
          kind: yu,
          data: Eu
        } = Ru, Ku = `${uu.index}:${yu}`;
        let Qu = this.vertexBuffers.get(Ku);
        if (!Qu) {
          const mu = uu.bufferView;
          Qu = mu ? this.viewBuffer(mu).then((uu => this.layoutVertexBuffer(uu, Ru))) : Promise.resolve(Eu).then((uu => new((0, au.c)().VertexBuffer)(this.cp.eS(), uu, yu, !1))), this.vertexBuffers.set(Ku, Qu)
        }
        return Qu
      }
      layoutVertexBuffer(uu, Ru) {
        let {
          kind: yu,
          offset: Eu,
          stride: Ku,
          components: Qu,
          glType: mu,
          isNormalized: Ju
        } = Ru;
        const Nu = this.cp.eS();
        return new((0, au.c)().VertexBuffer)(Nu, uu, yu, !1, void 0, Ku, void 0, Eu, Qu, mu, Ju, !0, void 0, !0)
      }
      load(uu, Ru, yu) {
        const Eu = (0, fu.i)(yu),
          Ku = uu => {
            Eu || (yu._delayInfo = yu._delayInfo || [], -1 === yu._delayInfo.indexOf(uu) && yu._delayInfo.push(uu))
          },
          Qu = Ru.draco;
        if (Qu) {
          for (const uu in Qu.attributeIds) Ku(uu);
          let mu = this.dracoGeometry.get(Qu.bufferView.index);
          return mu || (mu = this.viewBytes(Qu.bufferView).then((async () => {
            let Ku;
            try {
              Ku = await Iu(Ru, this.decode)
            } catch (Nu) {
              throw new eu.i(`${uu}: ${Nu instanceof Error?Nu.message:String(Nu)}`)
            }
            const Qu = gu(Ru, Ku);
            if (Eu) return Qu;
            const mu = RR(Ru.position),
              Ju = new((0, au.c)().MirroredGeometry)(yu.name, this.cp);
            mu && (Ju._boundingInfo = mu, Ju.useBoundingInfoFromGeometry = !0), Qu.indexData && Ju.setIndices(Qu.indexData);
            for (const uu of Qu.vertexAttributes) Ju.setVerticesBuffer(this.layoutVertexBuffer(uu.data, uu), Qu.vertexCount);
            return Ju.link(Qu), Ju
          })), this.dracoGeometry.set(Qu.bufferView.index, mu)), mu
        }
        const mu = [],
          Ju = tu(Ru);
        if (Eu) return yu.isUnIndexed = !Ju.indexData, yu.hasVertexAlpha = (0, uR.d)(Ru), Promise.resolve(Ju);
        const Nu = new((0, au.c)().MirroredGeometry)(yu.name, this.cp),
          {
            indexData: Xu
          } = Ju;
        Xu ? mu.push(this.viewBytes(Ru.indices.bufferView).then((() => {
          Nu.setIndices(Xu)
        }))) : yu.isUnIndexed = !0;
        for (const [Vu, {
            kind: ru,
            accessor: Bu
          }] of Ru.attributes.entries()) Ku(ru), mu.push(this.vertexBuffer(Bu, Ju.vertexAttributes[Vu]).then((uu => {
          if ("position" === uu.getKind()) {
            const uu = RR(Bu);
            uu && (Nu._boundingInfo = uu, Nu.useBoundingInfoFromGeometry = !0)
          }
          Nu.setVerticesBuffer(uu, Ju.vertexCount)
        })));
        return (0, uR.d)(Ru) && (yu.hasVertexAlpha = !0), Promise.all(mu).then((() => (Nu.link(Ju), Nu)))
      }
    }
    var KR, QR = yu(37038),
      mR = yu(36828),
      JR = yu(37663),
      NR = yu(36983),
      XR = yu(37019),
      VR = yu(2632),
      rR = yu(37003);

    function BR(uu, Ru) {
      uu.metadata = uu.metadata || {};
      const yu = uu._internalMetadata = uu._internalMetadata || {},
        Eu = yu.jD = yu.jD || {};
      (Eu.pointers = Eu.pointers || []).push(Ru)
    }

    function xR(uu, Ru) {
      if (Ru && Object.keys(Ru).length > 0) {
        const yu = uu.metadata = uu.metadata || {};
        (yu.jD = yu.jD || {}).extras = Ru
      }
    }

    function SR(uu, Ru) {
      Ru.position = uu.translation ? mR.MS.FromArray(uu.translation) : mR.MS.Zero(), Ru.rotationQuaternion = uu.rotation ? mR.Quaternion.FromArray(uu.rotation) : mR.Quaternion.Identity(), Ru.pp = uu.scale ? mR.MS.FromArray(uu.scale) : mR.MS.One()
    }
    class pR {
      constructor(uu, Ru) {
        if (this.cp = uu, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, Ru) {
          const Ru = uu.eS(),
            yu = uu.zD.add((() => {
              this.dispose()
            })),
            Eu = Ru.onContextRestoredObservable.add((() => {
              for (const uu of [...this.geometries, ...this.meshes, ...this.textures]) uu._rebuild()
            }));
          this.release = () => {
            uu.zD.remove(yu), Ru.onContextRestoredObservable.remove(Eu)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const uu of this.meshes) this.cp.MEu(uu);
          for (const uu of this.materials) this.cp.addMaterial(uu);
          for (const uu of this.geometries) this.cp.addGeometry(uu);
          for (const uu of this.transformNodes) this.cp.addTransformNode(uu);
          for (const uu of this.textures) this.cp.addTexture(uu)
        }
      }
      dispose() {
        var uu;
        for (const Ru of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const uu of Ru.slice()) uu.dispose();
          Ru.length = 0
        }
        null === (uu = this.release) || void 0 === uu || uu.call(this), this.release = null
      }
    }
    class TR {
      constructor(uu, Ru, yu, Eu, Ku, Qu, mu) {
        this.asset = uu, this.cp = Ru, this.tree = yu, this.geometryData = Ku, this.materials = Qu, this.lite = mu, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = Eu ? yu : null
      }
      create(uu) {
        if (this.lite) return uu();
        const Ru = this.cp;
        Ru._blockEntityCollection = !!this.container;
        try {
          const Ru = uu();
          return this.container && (Ru._parentContainer = this.container), Ru
        } finally {
          Ru._blockEntityCollection = !1
        }
      }
      node(uu, Ru) {
        return this.create((() => this.lite ? Ru ? (0, JR.f)(this.lite, uu) : (0, JR.r)(this.lite, uu) : Ru ? new((0, au.c)().Mesh)(uu, this.cp) : new((0, au.c)().TransformNode)(uu, this.cp)))
      }
      async load() {
        var uu;
        this.asset.model.json.nodes && this.createRoot();
        const Ru = this.lite ? null : this.cp,
          yu = null !== (uu = null === Ru || void 0 === Ru ? void 0 : Ru.blockMaterialDirtyMechanism) && void 0 !== uu && uu;
        let Eu;
        Ru && (Ru.blockMaterialDirtyMechanism = !0);
        try {
          Eu = this.loadScene()
        } finally {
          null === Ru || void 0 === Ru || Ru._forceBlockMaterialDirtyMechanism(yu)
        }
        await Eu;
        const {
          root: Ku,
          tree: Qu
        } = this;
        Ku && (Ku.tC(!0), Qu.meshes.push(Ku), Qu.rootNodes.push(Ku));
        for (const Ju of this.asset.model.nodes) {
          const uu = this.nodeObjects.get(Ju.index);
          uu && ["TransformNode", "LiteNode"].includes(uu.getClassName()) && Qu.transformNodes.push(uu);
          for (const Ru of null !== (mu = this.nodePrimitives.get(Ju.index)) && void 0 !== mu ? mu : []) {
            var mu;
            Qu.meshes.push(Ru);
            const uu = Ru.geometry;
            uu && !Qu.geometries.includes(uu) && Qu.geometries.push(uu)
          }
        }
      }
      createRoot() {
        const uu = this.node("__root__", !0);
        this.root = uu, uu.tC(!1), this.cp.useRightHandedSystem || SR(Fu, uu)
      }
      loadScene() {
        const uu = [];
        for (const Ru of this.asset.model.rootNodes) uu.push(this.loadNode(this.asset.model.nodes[Ru], (uu => {
          uu.parent = this.root
        })));
        return uu.push(Promise.resolve()), Promise.all(uu).then((() => {}))
      }
      loadNode(uu, Ru) {
        const yu = `/nodes/${uu.index}`,
          Eu = [],
          Ku = Ku => {
            if (BR(Ku, yu), SR(uu, Ku), uu.hasCamera && !this.cp.useRightHandedSystem) {
              const {
                pp: uu
              } = Ku;
              uu.set(-1, uu.y, uu.z)
            }
            for (const Ru of uu.children) Eu.push(this.loadNode(this.asset.model.nodes[Ru], (uu => {
              uu.parent = Ku
            })));
            (yu => {
              xR(yu, uu.extras), Ru(yu)
            })(Ku)
          };
        if (null === uu.mesh) {
          const Ru = this.node(zu(uu), !1);
          this.nodeObjects.set(uu.index, Ru), Ku(Ru)
        } else {
          const Ru = this.asset.model.meshes[uu.mesh];
          Eu.push(this.loadMesh(`/meshes/${Ru.index}`, uu, Ru, Ku))
        }
        return Promise.all(Eu).then((() => {
          for (const yu of null !== (Ru = this.nodePrimitives.get(uu.index)) && void 0 !== Ru ? Ru : []) {
            var Ru;
            yR(yu)
          }
          return this.nodeObjects.get(uu.index)
        }))
      }
      loadMesh(uu, Ru, yu, Eu) {
        const Ku = [],
          Qu = zu(Ru);
        if (1 === yu.primitives.length) {
          const Eu = yu.primitives[0];
          Ku.push(this.loadPrimitive(`${uu}/primitives/${Eu.index}`, Qu, Eu, (uu => {
            this.nodeObjects.set(Ru.index, uu), this.nodePrimitives.set(Ru.index, [uu])
          })))
        } else {
          const Eu = this.node(Qu, !1);
          this.nodeObjects.set(Ru.index, Eu);
          const mu = [];
          this.nodePrimitives.set(Ru.index, mu);
          for (const Ru of yu.primitives) Ku.push(this.loadPrimitive(`${uu}/primitives/${Ru.index}`, `${Qu}_primitive${Ru.index}`, Ru, (uu => {
            uu.parent = Eu, mu.push(uu)
          })))
        }
        const mu = this.nodeObjects.get(Ru.index);
        return Eu(mu), Promise.all(Ku).then((() => mu))
      }
      loadPrimitive(uu, Ru, yu, Eu) {
        const Ku = [],
          Qu = this.node(Ru, !0);
        if (Qu.sideOrientation = this.cp.useRightHandedSystem ? NR.e.CounterClockWiseSideOrientation : NR.e.ClockWiseSideOrientation, Ku.push(this.geometryData.load(uu, yu, Qu).then((uu => {
            if ((0, fu.i)(Qu)) {
              var Ru, yu;
              const Eu = uu;
              Qu.replaceModel(Eu, Int32Array.of(0, null !== (Ru = null === (yu = Eu.indexData) || void 0 === yu ? void 0 : yu.length) && void 0 !== Ru ? Ru : Eu.vertexCount, 0, Eu.vertexCount))
            } else this.create((() => (uu.applyToMesh(Qu), uu)))
          }))), this.materials) {
          const uu = 0 === yu.mode ? NR.e.PointListDrawMode : NR.e.TriangleFillMode,
            Ru = null === yu.material ? null : this.asset.model.materials[yu.material];
          Ku.push(this.loadMaterial(Ru, uu, (uu => {
            Qu.material = uu
          })))
        }
        return BR(Qu, uu), Eu(Qu), Promise.all(Ku).then((() => Qu))
      }
      loadMaterial(uu, Ru, yu) {
        var Eu;
        const Ku = `${null!==(Eu=null===uu||void 0===uu?void 0:uu.index)&&void 0!==Eu?Eu:"default"}:${Ru}`;
        let Qu = this.materialData.get(Ku);
        return Qu || (Qu = this.createMaterial(uu, Ru), this.materialData.set(Ku, Qu)), yu(Qu.material), Qu.promise
      }
      createMaterial(uu, Ru) {
        const yu = uu ? uu.name || `material${uu.index}` : "__GLTFLoader._default",
          {
            style: Eu,
            unlit: Ku
          } = this.materials;
        let Qu;
        const mu = this.create((() => {
          const mu = (0, rR.c)({
            name: yu,
            cp: this.cp,
            sets: {
              ...(0, uR.c)(this.asset, uu, Eu, Ku),
              fillMode: Ru
            },
            unrendered: !0
          });
          return Qu = mu.model, mu.mirror
        }));
        let Ju = Promise.resolve();
        if (uu) {
          const Ru = `/materials/${uu.index}`,
            Eu = Qu.diffuseTexture;
          if (Eu && !Eu.mirror) Ju = new Promise((uu => setTimeout(uu)));
          else if (Eu) {
            const Ku = Eu.mirror;
            Ku._parentContainer = this.container, Ku.name = `${yu} (Base Color)`, BR(Ku, `${Ru}${uu.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(Ku), Ju = (0, XR.v)(Eu)
          }
          xR(mu, uu.extras), BR(mu, Ru)
        }
        return this.tree.materials.push(mu), {
          material: mu,
          promise: Ju
        }
      }
    }

    function WR() {
      QR.g.dracoDecodes = pu.decodes, QR.g.dracoWorkersStarted = pu.workersStarted, QR.g.dracoMostWorkers = pu.mostWorkers
    }
    async function jR(uu, Ru, yu, Ku, Qu) {
      try {
        return await async function(uu, Ru, yu, Ku, Qu, mu) {
          var Ju;
          let Nu;
          const Xu = null === (Ju = (0, VR.h)()) || void 0 === Ju ? void 0 : Ju.oS,
            Vu = null !== Xu && void 0 !== Xu && Xu.qS && Ru === Xu.lD() ? Xu : null,
            ru = Qu && !Vu;
          return await vu(uu, Ru, yu, Ku, Eu.b, (uu => (Nu = new pR(Ru, ru), new TR(uu, Ru, Nu, ru, new ER(Ru, Ku), mu, Vu).load())), !Qu), Nu
        }(uu, Ru, yu, bu, Ku, Qu)
      } finally {
        WR()
      }
    }
    async function HR(uu, Ru, yu, Ku) {
      try {
        return await vu(uu, Ru, yu, bu, Eu.b, (uu => Ku(uu, new ER(Ru, bu))))
      } finally {
        WR()
      }
    }
    KR = Ku.c, Vu || (Vu = {
      scriptUrl: new URL(KR.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(KR.wasmBinaryUrl, location.href).href
    })
  },
  41080: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => mu
    });
    var Eu = yu(145),
      Ku = yu(1183);

    function Qu(uu) {
      return (0, Eu.c)() ? `https://${Ku.c.discordDomain}/${uu.href}` : uu.href
    }
    const mu = {
      scriptUrl: Qu(new yu.U(yu(41085))),
      wasmBinaryUrl: Qu(new yu.U(yu(41093)))
    }
  },
  36152: uu => {
    uu.exports = function(uu, Ru, yu, Eu) {
      var Ku = self || window;
      try {
        try {
          var Qu;
          try {
            Qu = new Ku.Blob([uu])
          } catch (Xu) {
            (Qu = new(Ku.BlobBuilder || Ku.WebKitBlobBuilder || Ku.MozBlobBuilder || Ku.MSBlobBuilder)).append(uu), Qu = Qu.getBlob()
          }
          var mu = Ku.URL || Ku.webkitURL,
            Ju = mu.createObjectURL(Qu),
            Nu = new Ku[Ru](Ju, yu);
          return mu.revokeObjectURL(Ju), Nu
        } catch (Xu) {
          return new Ku[Ru]("data:application/javascript,".concat(encodeURIComponent(uu)), yu)
        }
      } catch (Xu) {
        if (!Eu) throw Error("Inline worker is not supported");
        return new Ku[Ru](Eu, yu)
      }
    }
  },
  41085: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  41093: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);