export const id = 209;
export const ids = [209];
export const modules = {
  41759: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      loadGlbAsset: () => ME,
      loadGlbTree: () => gE
    });
    var su = ju(38303),
      Uu = ju(41761),
      Zu = ju(36664),
      Xu = ju.n(Zu);

    function lu() {
      return Xu()('(()=>{class uu extends Error{}function Eu(Eu,ju){const su=Eu._malloc(ju);if(0===su)throw new uu(`Draco: the decoder\'s heap refused ${ju} bytes`);return su}function ju(uu){return{[uu.DT_FLOAT32]:[Float32Array,5126],[uu.DT_INT8]:[Int8Array,5120],[uu.DT_INT16]:[Int16Array,5122],[uu.DT_INT32]:[Int32Array,5124],[uu.DT_UINT8]:[Uint8Array,5121],[uu.DT_UINT16]:[Uint16Array,5123],[uu.DT_UINT32]:[Uint32Array,5125]}}function su(Eu,su,Uu,Zu,Xu){let lu=null,qu=null,fu=null;try{lu=new Eu.Decoder,qu=new Eu.DecoderBuffer,qu.Init(su,su.byteLength);let Cu=0;const bu=lu.GetEncodedGeometryType(qu);if(bu===Eu.TRIANGULAR_MESH){const ju=new Eu.Mesh;fu=ju;const su=lu.DecodeBufferToMesh(qu,ju);if(!su.ok()||0===ju.ptr)throw new uu(su.error_msg());Cu=3*ju.num_faces()}else{if(bu!==Eu.POINT_CLOUD)throw new uu(`Draco: Cannot decode invalid geometry type ${bu}`);{const ju=new Eu.PointCloud;fu=ju;const su=lu.DecodeBufferToPointCloud(qu,ju);if(!su.ok()||!ju.ptr)throw new uu(su.error_msg())}}const cu=fu.num_points();if(cu!==Zu.vertices||Cu!==Zu.indices)throw new uu(`Draco: decoded ${cu} vertices and ${Cu} indices, the accessors declare ${Zu.vertices} and ${Zu.indices}`);const Nu=ju(Eu),Ou=[];for(const{kind:Eu,id:ju,components:su}of Uu){const Uu=lu.GetAttributeByUniqueId(fu,ju);if(!Uu||0===Uu.ptr)throw new uu(`Draco: no attribute with id ${ju} (${Eu})`);const Zu=Uu.data_type();if(!Nu[Zu])throw new uu(`Draco: Cannot decode invalid data type ${Zu}`);if(Uu.num_components()!==su)throw new uu(`Draco: ${Eu} decodes to ${Uu.num_components()} components, its accessor declares ${su}`);Ou.push([Eu,Uu,Zu])}return Xu({dracoDecoder:lu,geometry:fu,triangles:bu===Eu.TRIANGULAR_MESH,numPoints:cu,numIndices:Cu,attributes:Ou})}finally{fu&&Eu.destroy(fu),qu&&Eu.destroy(qu),lu&&Eu.destroy(lu)}}const Uu=self;let Zu=null;self.onmessage=uu=>{let{data:Xu}=uu;if("init"===Xu.id){try{importScripts(Xu.url),Zu=DracoDecoderModule({wasmBinary:Xu.wasmBinary}),Uu.postMessage({id:"initDone"})}catch(bu){Uu.postMessage({id:"initError",message:bu instanceof Error?bu.message:String(bu)})}return}const{seq:lu,data:qu,attributeIds:fu,expected:Cu}=Xu;Zu?Zu.then((uu=>{try{const Zu=function(uu,Uu,Zu,Xu){const lu=Object.keys(Zu).map((uu=>({kind:uu,id:Zu[uu],components:Xu.components[uu]})));return su(uu,Uu,lu,Xu,(su=>{let{dracoDecoder:Uu,geometry:Zu,triangles:Xu,numPoints:lu,numIndices:qu,attributes:fu}=su;const Cu=ju(uu);let bu=null;if(Xu){const ju=4*qu,su=Eu(uu,ju);try{Uu.GetTrianglesUInt32Array(Zu,ju,su),bu=new Uint32Array(qu),bu.set(new Uint32Array(uu.HEAPF32.buffer,su,qu))}finally{uu._free(su)}}const cu=[];for(const[ju,Nu,Ou]of fu){const[su]=Cu[Ou],Xu=Nu.num_components(),qu=lu*Xu,fu=qu*su.BYTES_PER_ELEMENT,bu=Eu(uu,fu);try{Uu.GetAttributeDataArrayForAllPoints(Zu,Nu,Ou,fu,bu),cu.push({kind:ju,data:new su(uu.HEAPF32.buffer,bu,qu).slice(),size:Xu,byteOffset:Nu.byte_offset(),byteStride:Nu.byte_stride(),normalized:Nu.normalized()})}finally{uu._free(bu)}}return{indices:bu,attributes:cu,totalVertices:lu}}))}(uu,qu,fu,Cu),Xu=Zu.attributes.map((uu=>uu.data.buffer));Zu.indices&&Xu.push(Zu.indices.buffer),Uu.postMessage({id:"decoded",seq:lu,...Zu},Xu)}catch(bu){Uu.postMessage({id:"decodeError",seq:lu,message:bu instanceof Error?bu.message:String(bu)})}}),(uu=>{Uu.postMessage({id:"decodeError",seq:lu,message:uu instanceof Error?uu.message:String(uu)})})):Uu.postMessage({id:"decodeError",seq:lu,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, ju.p + "dracoDecode.worker.9e3a9b7f.worker.js")
    }
    var qu = ju(91);
    const fu = 1e3;
    let Cu = null,
      bu = null;
    const cu = [],
      Nu = [];
    let Ou = 0;
    const Yu = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      hu = function(uu, Eu) {
        const ju = uu ? Math.max(1, Math.min(Math.floor(.5 * uu), 4)) : 1;
        return Eu ? Math.min(ju, 2) : ju
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, qu.isMobile)());

    function Du() {
      if (!Cu) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: uu,
        wasmBinaryUrl: Eu
      } = Cu;
      return bu ??= fetch(Eu).then((uu => {
        if (!uu.ok) throw new Error(`Draco: fetching ${Eu} failed: ${uu.status}`);
        return uu.arrayBuffer()
      })), bu.catch((() => {
        bu = null
      })), Yu.workersStarted++, bu.then((Eu => new Promise(((ju, su) => {
        const Uu = new lu;
        Uu.onerror = uu => {
          Uu.onmessage = null, Uu.onerror = null, Uu.terminate(), su(new Error("Draco: the decode worker failed to start" + (uu.message ? `: ${uu.message}` : " (its script did not load)")))
        }, Uu.onmessage = uu => {
          let {
            data: Eu
          } = uu;
          Uu.onmessage = null, Uu.onerror = null, "initDone" === Eu.id ? ju(Uu) : (Uu.terminate(), su(new Error(`Draco: ${"initError"===Eu.id?Eu.message:"the worker did not start"}`)))
        };
        const Zu = Eu.slice(0),
          Xu = {
            id: "init",
            url: uu,
            wasmBinary: Zu
          };
        Uu.postMessage(Xu, [Zu])
      }))))
    }

    function gu(uu) {
      const Eu = cu.indexOf(uu); - 1 !== Eu && cu.splice(Eu, 1);
      const ju = Nu.shift();
      ju && eu(ju)
    }

    function Mu(uu, Eu) {
      uu.busy = !0, uu.releaseTimer && (clearTimeout(uu.releaseTimer), uu.releaseTimer = null);
      uu.worker.then((ju => {
        const su = Ou++;
        ju.onmessage = Uu => {
          let {
            data: Zu
          } = Uu;
          if (("decoded" === Zu.id || "decodeError" === Zu.id) && Zu.seq === su) {
            if (ju.onmessage = null, ju.onerror = null, "decoded" === Zu.id) return Yu.decodes++, Eu.resolve({
              indices: Zu.indices,
              attributes: Zu.attributes,
              totalVertices: Zu.totalVertices
            }), void(() => {
              const Eu = Nu.shift();
              Eu ? Mu(uu, Eu) : (uu.busy = !1, uu.releaseTimer = setTimeout((() => {
                const Eu = cu.indexOf(uu); - 1 !== Eu && cu.splice(Eu, 1), uu.worker.then((uu => {
                  uu.terminate()
                }))
              }), fu))
            })();
            ju.terminate(), Eu.reject(new Error(Zu.message)), gu(uu)
          }
        }, ju.onerror = su => {
          ju.onmessage = null, ju.onerror = null, ju.terminate(), Eu.reject(new Error(`Draco: the decode worker failed: ${su.message}`)), gu(uu)
        };
        const Uu = {
          id: "decode",
          seq: su,
          data: Eu.data,
          attributeIds: Eu.attributeIds,
          expected: Eu.expected
        };
        ju.postMessage(Uu, [Eu.data.buffer])
      }), (ju => {
        Eu.reject(ju instanceof Error ? ju : new Error(String(ju))), gu(uu)
      }))
    }

    function eu(uu) {
      const Eu = cu.find((uu => !uu.busy));
      if (Eu) Mu(Eu, uu);
      else {
        if (cu.length < hu) {
          const Eu = {
            worker: Du(),
            busy: !0,
            releaseTimer: null
          };
          return cu.push(Eu), Yu.mostWorkers = Math.max(Yu.mostWorkers, cu.length), void Mu(Eu, uu)
        }
        Nu.push(uu)
      }
    }

    function Gu(uu, Eu, ju) {
      return new Promise(((su, Uu) => {
        eu({
          data: new Int8Array(uu.buffer, uu.byteOffset, uu.byteLength).slice(),
          attributeIds: Eu,
          expected: ju,
          resolve: su,
          reject: Uu
        })
      }))
    }
    var pu = ju(37854),
      wu = ju(37867),
      Ju = ju(34621),
      du = ju(34617);
    const au = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function Pu(uu) {
      const Eu = (0, du.k)(uu.byteLength);
      if (Eu) throw new Ju.o(Eu);
      const {
        json: ju,
        bin: su
      } = (0, Ju.C)(uu), Uu = (0, du.h)(ju, su);
      if (Uu) throw new Ju.o(Uu);
      try {
        return function(uu, Eu) {
          var ju, su, Uu, Zu, Xu, lu, qu, fu, Cu, bu, cu, Nu, Ou, Yu, hu;
          const Du = new Map,
            gu = ju => {
              let su = Du.get(ju);
              if (!su) {
                var Uu;
                const Zu = uu.bufferViews[ju],
                  Xu = null !== (Uu = Zu.byteOffset) && void 0 !== Uu ? Uu : 0;
                su = {
                  index: ju,
                  bytes: Eu.subarray(Xu, Xu + Zu.byteLength),
                  byteStride: Zu.byteStride
                }, Du.set(ju, su)
              }
              return su
            },
            Mu = new Map,
            eu = Eu => {
              let ju = Mu.get(Eu);
              if (!ju) {
                var su;
                const Uu = uu.accessors[Eu];
                ju = {
                  index: Eu,
                  count: Uu.count,
                  type: Uu.type,
                  numComponents: Ju.r[Uu.type],
                  componentType: Uu.componentType,
                  normalized: null !== (su = Uu.normalized) && void 0 !== su && su,
                  byteOffset: Uu.byteOffset,
                  bufferView: void 0 === Uu.bufferView ? null : gu(Uu.bufferView),
                  min: Uu.min,
                  max: Uu.max
                }, Mu.set(Eu, ju)
              }
              return ju
            },
            Gu = null !== (ju = null === (su = uu.extensionsUsed) || void 0 === su ? void 0 : su.includes("KHR_draco_mesh_compression")) && void 0 !== ju && ju,
            pu = (null !== (Uu = uu.meshes) && void 0 !== Uu ? Uu : []).map(((Eu, ju) => {
              const su = Eu.primitives.map(((Eu, ju) => {
                var su, Uu, Zu;
                const Xu = Gu ? null === (su = Eu.extensions) || void 0 === su ? void 0 : su.KHR_draco_mesh_compression : void 0;
                let lu = null;
                const qu = [];
                if (Xu) {
                  const ju = {
                    vertices: uu.accessors[Eu.attributes.POSITION].count,
                    indices: void 0 === Eu.indices ? 0 : uu.accessors[Eu.indices].count,
                    components: {}
                  };
                  lu = {
                    bufferView: gu(Xu.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: ju
                  };
                  for (const [su, Uu] of Ju.j) {
                    const Zu = Xu.attributes[su];
                    if (void 0 === Zu) continue;
                    lu.attributeIds[Uu] = Zu;
                    const qu = Eu.attributes[su];
                    var fu;
                    if (void 0 !== qu) lu.normalized[Uu] = null !== (fu = uu.accessors[qu].normalized) && void 0 !== fu && fu, ju.components[Uu] = Ju.r[uu.accessors[qu].type]
                  }
                } else
                  for (const [uu, Cu] of Ju.j) {
                    const ju = Eu.attributes[uu];
                    void 0 !== ju && qu.push({
                      semantic: uu,
                      kind: Cu,
                      accessor: eu(ju)
                    })
                  }
                return {
                  index: ju,
                  mode: null !== (Uu = Eu.mode) && void 0 !== Uu ? Uu : 4,
                  attributes: qu,
                  indices: Xu || void 0 === Eu.indices ? null : eu(Eu.indices),
                  position: void 0 === Eu.attributes.POSITION ? null : eu(Eu.attributes.POSITION),
                  material: null !== (Zu = Eu.material) && void 0 !== Zu ? Zu : null,
                  draco: lu
                }
              }));
              return {
                index: ju,
                name: Eu.name,
                primitives: su,
                extras: Eu.extras
              }
            })),
            wu = (null !== (Zu = uu.nodes) && void 0 !== Zu ? Zu : []).map(((uu, Eu) => {
              var ju, su;
              return {
                index: Eu,
                name: uu.name,
                children: null !== (ju = uu.children) && void 0 !== ju ? ju : [],
                mesh: null !== (su = uu.mesh) && void 0 !== su ? su : null,
                translation: uu.translation,
                rotation: uu.rotation,
                scale: uu.scale,
                hasCamera: void 0 !== uu.camera,
                extras: uu.extras
              }
            })),
            du = null !== (Xu = null === (lu = uu.extensionsUsed) || void 0 === lu ? void 0 : lu.includes("KHR_materials_unlit")) && void 0 !== Xu && Xu,
            Pu = null !== (qu = null === (fu = uu.extensionsUsed) || void 0 === fu ? void 0 : fu.includes("KHR_texture_transform")) && void 0 !== qu && qu,
            ou = (null !== (Cu = uu.materials) && void 0 !== Cu ? Cu : []).map(((uu, Eu) => {
              var ju, su, Uu, Zu;
              const Xu = uu.pbrMetallicRoughness,
                lu = null === Xu || void 0 === Xu ? void 0 : Xu.baseColorTexture;
              return {
                index: Eu,
                name: uu.name,
                extras: uu.extras,
                unlit: du && void 0 !== (null === (ju = uu.extensions) || void 0 === ju ? void 0 : ju.KHR_materials_unlit),
                pbr: Xu ? {
                  baseColorFactor: Xu.baseColorFactor,
                  metallicFactor: Xu.metallicFactor,
                  roughnessFactor: Xu.roughnessFactor
                } : null,
                baseColorTexture: lu ? {
                  texture: lu.index,
                  transform: Pu && (null === (su = lu.extensions) || void 0 === su ? void 0 : su.KHR_texture_transform) || null
                } : null,
                emissiveFactor: uu.emissiveFactor,
                alphaMode: null !== (Uu = uu.alphaMode) && void 0 !== Uu ? Uu : "OPAQUE",
                alphaCutoff: uu.alphaCutoff,
                doubleSided: null !== (Zu = uu.doubleSided) && void 0 !== Zu && Zu
              }
            })),
            ku = (null !== (bu = uu.textures) && void 0 !== bu ? bu : []).map(((Eu, ju) => {
              var su, Uu;
              const Zu = void 0 === Eu.sampler ? au : {
                index: Eu.sampler,
                ...null === (su = uu.samplers) || void 0 === su ? void 0 : su[Eu.sampler]
              };
              return {
                index: ju,
                sampler: {
                  index: Zu.index,
                  magFilter: Zu.magFilter,
                  minFilter: Zu.minFilter,
                  wrapS: Zu.wrapS,
                  wrapT: Zu.wrapT
                },
                image: null !== (Uu = Eu.source) && void 0 !== Uu ? Uu : -1
              }
            })),
            mu = (null !== (cu = uu.images) && void 0 !== cu ? cu : []).map(((uu, Eu) => ({
              index: Eu,
              name: uu.name,
              mimeType: uu.mimeType,
              bufferView: gu(uu.bufferView)
            }))),
            vu = null !== (Nu = (0, Ju.A)(uu)) && void 0 !== Nu ? Nu : 0;
          return {
            json: uu,
            rootNodes: null !== (Ou = null === (Yu = uu.scenes) || void 0 === Yu || null === (hu = Yu[vu]) || void 0 === hu ? void 0 : hu.nodes) && void 0 !== Ou ? Ou : [],
            nodes: wu,
            meshes: pu,
            materials: ou,
            textures: ku,
            images: mu
          }
        }(ju, su)
      } catch (Zu) {
        throw Zu instanceof Ju.k ? Zu : new Ju.k(`reading the GLB failed: ${Zu instanceof Error?Zu.message:String(Zu)}`)
      }
    }
    async function ou(uu, Eu) {
      var ju, su;
      const Uu = uu.draco;
      if (!Uu) throw new Ju.k("not a Draco primitive");
      let Zu;
      try {
        Zu = await Eu(Uu.bufferView.bytes, Uu.attributeIds, Uu.expected)
      } catch (fu) {
        throw new Ju.k(`Draco decoding failed: ${fu instanceof Error?fu.message:String(fu)}`)
      }
      const {
        vertices: Xu,
        indices: lu,
        components: qu
      } = Uu.expected;
      if (Zu.totalVertices !== Xu || (null !== (ju = null === (su = Zu.indices) || void 0 === su ? void 0 : su.length) && void 0 !== ju ? ju : 0) !== lu || Zu.attributes.some((uu => uu.size !== qu[uu.kind] || uu.data.length !== Xu * uu.size))) throw new Ju.k("Draco decoding gave other counts than the accessors declare");
      for (const Cu of Zu.attributes) {
        const uu = Uu.normalized[Cu.kind];
        void 0 !== uu && (Cu.normalized = uu)
      }
      return Zu
    }
    const ku = new WeakMap;

    function mu(uu, Eu) {
      var ju;
      const su = null !== (ju = ku.get(uu)) && void 0 !== ju ? ju : Eu(uu);
      return ku.set(uu, su), su
    }

    function vu(uu) {
      const Eu = uu.bufferView,
        ju = 5125 === uu.componentType ? Uint32Array : Uint16Array,
        su = Eu.bytes.buffer,
        Uu = Eu.bytes.byteOffset + (uu.byteOffset || 0);
      return Uu % ju.BYTES_PER_ELEMENT !== 0 ? new ju(su.slice(Uu, Uu + uu.count * ju.BYTES_PER_ELEMENT), 0) : new ju(su, Uu, uu.count)
    }

    function Ku(uu, Eu) {
      if (uu.min && uu.max) return [new Float64Array(uu.min), new Float64Array(uu.max)];
      const ju = Eu.find((uu => {
          let {
            kind: Eu
          } = uu;
          return "position" === Eu
        })),
        su = ju ? (0, wu.j)(ju, uu.count) : new Float32Array(0);
      return (0, wu.v)(su.length / 3, ((uu, Eu) => su[3 * uu + Eu]))
    }

    function Vu(uu) {
      const Eu = uu.attributes.map((uu => {
          var Eu, ju;
          let {
            kind: su,
            accessor: Uu
          } = uu;
          const {
            bufferView: Zu,
            numComponents: Xu
          } = Uu;
          if (!Zu) {
            return {
              kind: su,
              data: mu(Uu, (() => new Float32Array(Xu * Uu.count))),
              offset: 0,
              stride: 4 * Xu,
              components: Xu,
              glType: 5126,
              isNormalized: !1
            }
          }
          const lu = null !== (Eu = Zu.byteStride) && void 0 !== Eu ? Eu : Xu * Ju.d[Uu.componentType];
          return {
            kind: su,
            data: Zu.bytes,
            offset: null !== (ju = Uu.byteOffset) && void 0 !== ju ? ju : 0,
            stride: lu,
            components: Xu,
            glType: Uu.componentType,
            isNormalized: Uu.normalized
          }
        })),
        ju = uu.indices,
        su = ju && mu(ju, vu),
        Uu = uu.position;
      return new wu.f(Eu, su, Uu.count, ...Ku(Uu, Eu))
    }
    const ru = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function Qu(uu, Eu) {
      const ju = Eu.attributes.map((uu => {
        let {
          kind: Eu,
          data: ju,
          size: su,
          byteOffset: Uu,
          byteStride: Zu,
          normalized: Xu
        } = uu;
        return {
          kind: Eu,
          data: ju,
          offset: Uu,
          stride: Zu,
          components: su,
          glType: 5120 + ru.indexOf(ju.constructor),
          isNormalized: Xu
        }
      }));
      return new wu.f(ju, Eu.indices, Eu.totalVertices, ...Ku(uu.position, ju))
    }

    function iu(uu) {
      const Eu = uu.lastIndexOf("/");
      return Eu < 0 ? uu : uu.substring(Eu + 1)
    }

    function Wu(uu) {
      const Eu = uu.lastIndexOf("/");
      return Eu < 0 ? "" : uu.substring(0, Eu + 1)
    }

    function Su(uu) {
      return uu.name || `node${uu.index}`
    }
    const Iu = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      Fu = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      Bu = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function Lu(uu) {
      var Eu, ju, su, Uu;
      const Zu = null !== (Eu = uu.minFilter) && void 0 !== Eu ? Eu : 9987;
      return 9729 === (null !== (ju = uu.magFilter) && void 0 !== ju ? ju : 9729) ? null !== (su = Fu[Zu]) && void 0 !== su ? su : 3 : null !== (Uu = Bu[Zu]) && void 0 !== Uu ? Uu : 4
    }
    const tu = {
      33071: 0,
      33648: 2
    };

    function xu(uu) {
      var Eu;
      return null !== (Eu = tu[null !== uu && void 0 !== uu ? uu : 10497]) && void 0 !== Eu ? Eu : 1
    }

    function Tu(uu) {
      return 9728 === uu.minFilter || 9729 === uu.minFilter
    }

    function Hu(uu) {
      var Eu, ju, su;
      const Uu = Float64Array.from(null !== (Eu = uu.scale) && void 0 !== Eu ? Eu : [1, 1, 1]);
      return uu.hasCamera && (Uu[0] = -1), {
        translation: Float64Array.from(null !== (ju = uu.translation) && void 0 !== ju ? ju : [0, 0, 0]),
        rotation: Float64Array.from(null !== (su = uu.rotation) && void 0 !== su ? su : [0, 0, 0, 1]),
        scale: Uu
      }
    }

    function Au(uu, Eu) {
      let {
        translation: ju,
        rotation: su,
        scale: Uu
      } = uu;
      const Zu = new Float32Array(16);
      return (0, pu.d)(Uu, 0, su, 0, ju, 0, Zu), Eu && (0, pu.j)(Zu, Eu, 0, Zu), Zu
    }
    class nu {
      constructor(uu, Eu, ju, su) {
        this.model = uu, this.decode = Eu, this.fileInfo = ju, this.uniqueRootUrl = su, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const Uu = new Set,
          Zu = (Eu, ju) => {
            const su = uu.nodes[Eu];
            if (this.parents.has(su)) throw new Ju.k(`/nodes/${Eu}: Invalid recursive node hierarchy`);
            this.parents.set(su, ju);
            const Xu = null === su.mesh ? [] : uu.meshes[su.mesh].primitives,
              lu = Xu.map((uu => {
                const Eu = Xu.length > 1;
                return {
                  name: Eu ? `${Su(su)}_primitive${uu.index}` : Su(su),
                  node: su,
                  primitive: uu,
                  part: Eu,
                  geometry: null
                }
              }));
            this.uses.set(su, lu);
            const qu = null !== su.mesh && Uu.has(su.mesh);
            Uu.add(su.mesh), this.own.set(su, qu ? [] : lu);
            for (const uu of su.children) Zu(uu, su)
          };
        for (const Xu of uu.rootNodes) Zu(Xu, null);
        this.primitives = uu.nodes.flatMap((uu => {
          var Eu;
          return null !== (Eu = this.own.get(uu)) && void 0 !== Eu ? Eu : []
        }))
      }
      decodeGeometries() {
        const uu = new Map;
        return Promise.all(this.primitives.map((async Eu => {
          const {
            primitive: ju
          } = Eu, su = ju.draco;
          let Uu = su ? uu.get(su.bufferView.index) : Promise.resolve(Vu(ju));
          Uu || (Uu = ou(ju, this.decode).then((uu => Qu(ju, uu))), uu.set(su.bufferView.index, Uu)), Eu.geometry = await Uu
        })))
      }
      parentOf(uu) {
        var Eu;
        return null !== (Eu = this.parents.get(uu)) && void 0 !== Eu ? Eu : null
      }
      meshesUnder(uu) {
        const Eu = this.model.nodes.filter((uu => this.uses.has(uu)));
        for (const su of Eu) {
          const Eu = this.uses.get(su),
            ju = Eu.find((Eu => Eu.name === uu));
          if (ju) return 1 === Eu.length ? this.subtree(su) : this.own.get(su).includes(ju) ? [ju] : []
        }
        const ju = Eu.find((Eu => 1 !== this.uses.get(Eu).length && Su(Eu) === uu));
        return ju ? this.subtree(ju) : null
      }
      subtree(uu) {
        return [...this.own.get(uu), ...uu.children.flatMap((uu => this.subtree(this.model.nodes[uu])))]
      }
      worldMatrix(uu, Eu, ju) {
        let su = Au(Hu(Eu ? Iu : {}), null);
        const Uu = [];
        for (let Xu = uu.part ? uu.node : this.parentOf(uu.node); Xu; Xu = this.parentOf(Xu)) Uu.unshift(Xu);
        for (const Xu of Uu) su = Au(Hu(Xu), su);
        const Zu = Hu(uu.part ? {} : uu.node);
        return void 0 !== ju && Zu.scale.fill(ju), Au(Zu, su)
      }
      floats(uu) {
        const {
          vertexAttributes: Eu,
          vertexCount: ju
        } = uu.geometry;
        return new Map(Eu.map((uu => [uu.kind, (0, wu.j)(uu, ju)])))
      }
      imageUrl(uu) {
        return function(uu, Eu, ju) {
          let {
            name: su
          } = Eu;
          return `data:${uu}${su}#image${ju}`
        }(this.uniqueRootUrl, this.fileInfo, uu)
      }
      textureDesc(uu, Eu) {
        var ju;
        let {
          texture: su,
          transform: Uu
        } = uu;
        const {
          sampler: Zu,
          image: Xu
        } = this.model.textures[su], {
          bufferView: lu,
          mimeType: qu,
          name: fu
        } = this.model.images[Xu], Cu = Uu && {
          ...Uu.offset ? {
            uOffset: Uu.offset[0],
            vOffset: Uu.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...Uu.rotation ? {
            wAng: -Uu.rotation
          } : {},
          ...Uu.scale ? {
            uScale: Uu.scale[0],
            vScale: Uu.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(Xu),
          noMipmap: Tu(Zu),
          invertY: !1,
          samplingMode: Lu(Zu),
          data: {
            bytes: lu.bytes,
            mimeType: qu,
            label: fu,
            context: `/textures/${su}`
          },
          sets: {
            wrapU: xu(Zu.wrapS),
            wrapV: xu(Zu.wrapT),
            ...Cu,
            coordinatesIndex: null !== (ju = null === Uu || void 0 === Uu ? void 0 : Uu.texCoord) && void 0 !== ju ? ju : 0,
            hasAlpha: Eu
          }
        }
      }
    }
    async function yu(uu, Eu, ju, su, Uu, Zu) {
      let Xu = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const lu = function(uu, Eu, ju) {
          return "string" !== typeof Eu ? {
            url: "",
            rootUrl: uu,
            name: ju()
          } : Eu ? Eu.startsWith("data:") ? {
            url: Eu,
            rootUrl: uu,
            name: ""
          } : uu ? {
            url: uu + Eu,
            rootUrl: uu,
            name: Eu
          } : {
            url: Eu,
            rootUrl: Wu(Eu),
            name: iu(Eu)
          } : {
            url: uu,
            rootUrl: Wu(uu),
            name: iu(uu)
          }
        }(ju, uu, Uu),
        qu = {};
      Eu.addPendingData(qu);
      try {
        const ju = Pu(await async function(uu, Eu) {
            return "string" !== typeof Eu ? Eu : uu.url.startsWith("data:") ? (0, Ju.u)(uu.url) : await (0, Ju.x)(uu.url)
          }(lu, uu)),
          qu = new nu(ju, su, lu, function(uu, Eu) {
            let {
              rootUrl: ju,
              name: su
            } = uu;
            return !ju.startsWith("file:") && su ? ju : `${ju}${Eu()}/`
          }(lu, Uu));
        return await Zu(qu), Eu.importedMeshesFiles && (Eu.loadingPluginName = "WK", Xu && Eu.importedMeshesFiles.push(lu.url)), qu
      } finally {
        Eu.removePendingData(qu)
      }
    }
    var zu = ju(37969),
      Ru = ju(37837),
      uE = ju(38287);

    function EE(uu) {
      if (null === uu || void 0 === uu || !uu.min || !uu.max) return null;
      const [Eu, ju, su] = uu.min, [Uu, Zu, Xu] = uu.max, {
        BoundingInfo: lu,
        dO: qu
      } = (0, zu.c)();
      return new lu(new qu(Eu, ju, su), new qu(Uu, Zu, Xu))
    }

    function jE(uu) {
      (0, Ru.g)(uu) || (uu.geometry && uu.geometry.useBoundingInfoFromGeometry ? uu._updateBoundingInfo() : uu.refreshBoundingInfo(!0, !0))
    }
    class sE {
      constructor(uu, Eu) {
        this.vY = uu, this.decode = Eu, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(uu) {
        let Eu = this.viewData.get(uu.index);
        return Eu || (Eu = this.bufferData.then((() => uu.bytes)), this.viewData.set(uu.index, Eu)), Eu
      }
      viewBuffer(uu) {
        let Eu = this.viewBuffers.get(uu.index);
        return Eu || (Eu = this.viewBytes(uu).then((uu => new((0, zu.c)().qO)(this.vY.wO(), uu, !1))), this.viewBuffers.set(uu.index, Eu)), Eu
      }
      vertexBuffer(uu, Eu) {
        const {
          kind: ju,
          data: su
        } = Eu, Uu = `${uu.index}:${ju}`;
        let Zu = this.vertexBuffers.get(Uu);
        if (!Zu) {
          const Xu = uu.bufferView;
          Zu = Xu ? this.viewBuffer(Xu).then((uu => this.layoutVertexBuffer(uu, Eu))) : Promise.resolve(su).then((uu => new((0, zu.c)().VertexBuffer)(this.vY.wO(), uu, ju, !1))), this.vertexBuffers.set(Uu, Zu)
        }
        return Zu
      }
      layoutVertexBuffer(uu, Eu) {
        let {
          kind: ju,
          offset: su,
          stride: Uu,
          components: Zu,
          glType: Xu,
          isNormalized: lu
        } = Eu;
        const qu = this.vY.wO();
        return new((0, zu.c)().VertexBuffer)(qu, uu, ju, !1, void 0, Uu, void 0, su, Zu, Xu, lu, !0, void 0, !0)
      }
      load(uu, Eu, ju) {
        const su = (0, Ru.g)(ju),
          Uu = uu => {
            su || (ju._delayInfo = ju._delayInfo || [], -1 === ju._delayInfo.indexOf(uu) && ju._delayInfo.push(uu))
          },
          Zu = Eu.draco;
        if (Zu) {
          for (const uu in Zu.attributeIds) Uu(uu);
          let Xu = this.dracoGeometry.get(Zu.bufferView.index);
          return Xu || (Xu = this.viewBytes(Zu.bufferView).then((async () => {
            let Uu;
            try {
              Uu = await ou(Eu, this.decode)
            } catch (qu) {
              throw new Ju.k(`${uu}: ${qu instanceof Error?qu.message:String(qu)}`)
            }
            const Zu = Qu(Eu, Uu);
            if (su) return Zu;
            const Xu = EE(Eu.position),
              lu = new((0, zu.c)().MirroredGeometry)(ju.name, this.vY);
            Xu && (lu._boundingInfo = Xu, lu.useBoundingInfoFromGeometry = !0), Zu.indexData && lu.setIndices(Zu.indexData);
            for (const uu of Zu.vertexAttributes) lu.setVerticesBuffer(this.layoutVertexBuffer(uu.data, uu), Zu.vertexCount);
            return lu.link(Zu), lu
          })), this.dracoGeometry.set(Zu.bufferView.index, Xu)), Xu
        }
        const Xu = [],
          lu = Vu(Eu);
        if (su) return ju.isUnIndexed = !lu.indexData, ju.hasVertexAlpha = (0, uE.e)(Eu), Promise.resolve(lu);
        const qu = new((0, zu.c)().MirroredGeometry)(ju.name, this.vY),
          {
            indexData: fu
          } = lu;
        fu ? Xu.push(this.viewBytes(Eu.indices.bufferView).then((() => {
          qu.setIndices(fu)
        }))) : ju.isUnIndexed = !0;
        for (const [Cu, {
            kind: bu,
            accessor: cu
          }] of Eu.attributes.entries()) Uu(bu), Xu.push(this.vertexBuffer(cu, lu.vertexAttributes[Cu]).then((uu => {
          if ("position" === uu.getKind()) {
            const uu = EE(cu);
            uu && (qu._boundingInfo = uu, qu.useBoundingInfoFromGeometry = !0)
          }
          qu.setVerticesBuffer(uu, lu.vertexCount)
        })));
        return (0, uE.e)(Eu) && (ju.hasVertexAlpha = !0), Promise.all(Xu).then((() => (qu.link(lu), qu)))
      }
    }
    var UE, ZE = ju(37729),
      XE = ju(37488),
      lE = ju(38298),
      qE = ju(37664),
      fE = ju(37704),
      CE = ju(2893),
      bE = ju(37693);

    function cE(uu, Eu) {
      uu.metadata = uu.metadata || {};
      const ju = uu._internalMetadata = uu._internalMetadata || {},
        su = ju.WK = ju.WK || {};
      (su.pointers = su.pointers || []).push(Eu)
    }

    function NE(uu, Eu) {
      if (Eu && Object.keys(Eu).length > 0) {
        const ju = uu.metadata = uu.metadata || {};
        (ju.WK = ju.WK || {}).extras = Eu
      }
    }

    function OE(uu, Eu) {
      Eu.position = uu.translation ? XE.dO.FromArray(uu.translation) : XE.dO.Zero(), Eu.rotationQuaternion = uu.rotation ? XE.Quaternion.FromArray(uu.rotation) : XE.Quaternion.Identity(), Eu.Of = uu.scale ? XE.dO.FromArray(uu.scale) : XE.dO.One()
    }
    class YE {
      constructor(uu, Eu) {
        if (this.vY = uu, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, Eu) {
          const Eu = uu.wO(),
            ju = uu.wV.add((() => {
              this.dispose()
            })),
            su = Eu.pO.add((() => {
              for (const uu of [...this.geometries, ...this.meshes, ...this.textures]) uu._rebuild()
            }));
          this.release = () => {
            uu.wV.remove(ju), Eu.pO.remove(su)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const uu of this.meshes) this.vY.hsu(uu);
          for (const uu of this.materials) this.vY.addMaterial(uu);
          for (const uu of this.geometries) this.vY.addGeometry(uu);
          for (const uu of this.transformNodes) this.vY.addTransformNode(uu);
          for (const uu of this.textures) this.vY.addTexture(uu)
        }
      }
      dispose() {
        var uu;
        for (const Eu of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const uu of Eu.slice()) uu.dispose();
          Eu.length = 0
        }
        null === (uu = this.release) || void 0 === uu || uu.call(this), this.release = null
      }
    }
    class hE {
      constructor(uu, Eu, ju, su, Uu, Zu, Xu) {
        this.asset = uu, this.vY = Eu, this.tree = ju, this.geometryData = Uu, this.materials = Zu, this.lite = Xu, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = su ? ju : null
      }
      create(uu) {
        if (this.lite) return uu();
        const Eu = this.vY;
        Eu._blockEntityCollection = !!this.container;
        try {
          const Eu = uu();
          return this.container && (Eu._parentContainer = this.container), Eu
        } finally {
          Eu._blockEntityCollection = !1
        }
      }
      node(uu, Eu) {
        return this.create((() => this.lite ? Eu ? (0, lE.g)(this.lite, uu) : (0, lE.q)(this.lite, uu) : Eu ? new((0, zu.c)().Mesh)(uu, this.vY) : new((0, zu.c)().TransformNode)(uu, this.vY)))
      }
      async load() {
        var uu;
        this.asset.model.json.nodes && this.createRoot();
        const Eu = this.lite ? null : this.vY,
          ju = null !== (uu = null === Eu || void 0 === Eu ? void 0 : Eu.blockMaterialDirtyMechanism) && void 0 !== uu && uu;
        let su;
        Eu && (Eu.blockMaterialDirtyMechanism = !0);
        try {
          su = this.loadScene()
        } finally {
          null === Eu || void 0 === Eu || Eu._forceBlockMaterialDirtyMechanism(ju)
        }
        await su;
        const {
          root: Uu,
          tree: Zu
        } = this;
        Uu && (Uu.Wk(!0), Zu.meshes.push(Uu), Zu.rootNodes.push(Uu));
        for (const lu of this.asset.model.nodes) {
          const uu = this.nodeObjects.get(lu.index);
          uu && ["TransformNode", "LiteNode"].includes(uu.getClassName()) && Zu.transformNodes.push(uu);
          for (const Eu of null !== (Xu = this.nodePrimitives.get(lu.index)) && void 0 !== Xu ? Xu : []) {
            var Xu;
            Zu.meshes.push(Eu);
            const uu = Eu.geometry;
            uu && !Zu.geometries.includes(uu) && Zu.geometries.push(uu)
          }
        }
      }
      createRoot() {
        const uu = this.node("__root__", !0);
        this.root = uu, uu.Wk(!1), this.vY.useRightHandedSystem || OE(Iu, uu)
      }
      loadScene() {
        const uu = [];
        for (const Eu of this.asset.model.rootNodes) uu.push(this.loadNode(this.asset.model.nodes[Eu], (uu => {
          uu.parent = this.root
        })));
        return uu.push(Promise.resolve()), Promise.all(uu).then((() => {}))
      }
      loadNode(uu, Eu) {
        const ju = `/nodes/${uu.index}`,
          su = [],
          Uu = Uu => {
            if (cE(Uu, ju), OE(uu, Uu), uu.hasCamera && !this.vY.useRightHandedSystem) {
              const {
                Of: uu
              } = Uu;
              uu.set(-1, uu.y, uu.z)
            }
            for (const Eu of uu.children) su.push(this.loadNode(this.asset.model.nodes[Eu], (uu => {
              uu.parent = Uu
            })));
            (ju => {
              NE(ju, uu.extras), Eu(ju)
            })(Uu)
          };
        if (null === uu.mesh) {
          const Eu = this.node(Su(uu), !1);
          this.nodeObjects.set(uu.index, Eu), Uu(Eu)
        } else {
          const Eu = this.asset.model.meshes[uu.mesh];
          su.push(this.loadMesh(`/meshes/${Eu.index}`, uu, Eu, Uu))
        }
        return Promise.all(su).then((() => {
          for (const ju of null !== (Eu = this.nodePrimitives.get(uu.index)) && void 0 !== Eu ? Eu : []) {
            var Eu;
            jE(ju)
          }
          return this.nodeObjects.get(uu.index)
        }))
      }
      loadMesh(uu, Eu, ju, su) {
        const Uu = [],
          Zu = Su(Eu);
        if (1 === ju.primitives.length) {
          const su = ju.primitives[0];
          Uu.push(this.loadPrimitive(`${uu}/primitives/${su.index}`, Zu, su, (uu => {
            this.nodeObjects.set(Eu.index, uu), this.nodePrimitives.set(Eu.index, [uu])
          })))
        } else {
          const su = this.node(Zu, !1);
          this.nodeObjects.set(Eu.index, su);
          const Xu = [];
          this.nodePrimitives.set(Eu.index, Xu);
          for (const Eu of ju.primitives) Uu.push(this.loadPrimitive(`${uu}/primitives/${Eu.index}`, `${Zu}_primitive${Eu.index}`, Eu, (uu => {
            uu.parent = su, Xu.push(uu)
          })))
        }
        const Xu = this.nodeObjects.get(Eu.index);
        return su(Xu), Promise.all(Uu).then((() => Xu))
      }
      loadPrimitive(uu, Eu, ju, su) {
        const Uu = [],
          Zu = this.node(Eu, !0);
        if (Zu.sideOrientation = this.vY.useRightHandedSystem ? qE.b.CounterClockWiseSideOrientation : qE.b.ClockWiseSideOrientation, Uu.push(this.geometryData.load(uu, ju, Zu).then((uu => {
            if ((0, Ru.g)(Zu)) {
              var Eu, ju;
              const su = uu;
              Zu.replaceModel(su, Int32Array.of(0, null !== (Eu = null === (ju = su.indexData) || void 0 === ju ? void 0 : ju.length) && void 0 !== Eu ? Eu : su.vertexCount, 0, su.vertexCount))
            } else this.create((() => (uu.applyToMesh(Zu), uu)))
          }))), this.materials) {
          const uu = 0 === ju.mode ? qE.b.PointListDrawMode : qE.b.TriangleFillMode,
            Eu = null === ju.material ? null : this.asset.model.materials[ju.material];
          Uu.push(this.loadMaterial(Eu, uu, (uu => {
            Zu.material = uu
          })))
        }
        return cE(Zu, uu), su(Zu), Promise.all(Uu).then((() => Zu))
      }
      loadMaterial(uu, Eu, ju) {
        var su;
        const Uu = `${null!==(su=null===uu||void 0===uu?void 0:uu.index)&&void 0!==su?su:"default"}:${Eu}`;
        let Zu = this.materialData.get(Uu);
        return Zu || (Zu = this.createMaterial(uu, Eu), this.materialData.set(Uu, Zu)), ju(Zu.material), Zu.promise
      }
      createMaterial(uu, Eu) {
        const ju = uu ? uu.name || `material${uu.index}` : "__GLTFLoader._default",
          {
            style: su,
            unlit: Uu
          } = this.materials;
        let Zu;
        const Xu = this.create((() => {
          const Xu = (0, bE.d)({
            name: ju,
            vY: this.vY,
            sets: {
              ...(0, uE.b)(this.asset, uu, su, Uu),
              fillMode: Eu
            },
            unrendered: !0
          });
          return Zu = Xu.model, Xu.mirror
        }));
        let lu = Promise.resolve();
        if (uu) {
          const Eu = `/materials/${uu.index}`,
            su = Zu.diffuseTexture;
          if (su && !su.mirror) lu = new Promise((uu => setTimeout(uu)));
          else if (su) {
            const Uu = su.mirror;
            Uu._parentContainer = this.container, Uu.name = `${ju} (Base Color)`, cE(Uu, `${Eu}${uu.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(Uu), lu = (0, fE.z)(su)
          }
          NE(Xu, uu.extras), cE(Xu, Eu)
        }
        return this.tree.materials.push(Xu), {
          material: Xu,
          promise: lu
        }
      }
    }

    function DE() {
      ZE.f.dracoDecodes = Yu.decodes, ZE.f.dracoWorkersStarted = Yu.workersStarted, ZE.f.dracoMostWorkers = Yu.mostWorkers
    }
    async function gE(uu, Eu, ju, Uu, Zu) {
      try {
        return await async function(uu, Eu, ju, Uu, Zu, Xu) {
          var lu;
          let qu;
          const fu = null === (lu = (0, CE.c)()) || void 0 === lu ? void 0 : lu.tO,
            Cu = null !== fu && void 0 !== fu && fu.xO && Eu === fu.hV() ? fu : null,
            bu = Zu && !Cu;
          return await yu(uu, Eu, ju, Uu, su.e, (uu => (qu = new YE(Eu, bu), new hE(uu, Eu, qu, bu, new sE(Eu, Uu), Xu, Cu).load())), !Zu), qu
        }(uu, Eu, ju, Gu, Uu, Zu)
      } finally {
        DE()
      }
    }
    async function ME(uu, Eu, ju, Uu) {
      try {
        return await yu(uu, Eu, ju, Gu, su.e, (uu => Uu(uu, new sE(Eu, Gu))))
      } finally {
        DE()
      }
    }
    UE = Uu.b, Cu || (Cu = {
      scriptUrl: new URL(UE.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(UE.wasmBinaryUrl, location.href).href
    })
  },
  41761: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu
    });
    var su = ju(131),
      Uu = ju(1135);

    function Zu(uu) {
      return (0, su.isDiscordClient)() ? `https://${Uu.e.discordDomain}/${uu.href}` : uu.href
    }
    const Xu = {
      scriptUrl: Zu(new ju.U(ju(41768))),
      wasmBinaryUrl: Zu(new ju.U(ju(41772)))
    }
  },
  36664: uu => {
    uu.exports = function(uu, Eu, ju, su) {
      var Uu = self || window;
      try {
        try {
          var Zu;
          try {
            Zu = new Uu.Blob([uu])
          } catch (fu) {
            (Zu = new(Uu.BlobBuilder || Uu.WebKitBlobBuilder || Uu.MozBlobBuilder || Uu.MSBlobBuilder)).append(uu), Zu = Zu.getBlob()
          }
          var Xu = Uu.URL || Uu.webkitURL,
            lu = Xu.createObjectURL(Zu),
            qu = new Uu[Eu](lu, ju);
          return Xu.revokeObjectURL(lu), qu
        } catch (fu) {
          return new Uu[Eu]("data:application/javascript,".concat(encodeURIComponent(uu)), ju)
        }
      } catch (fu) {
        if (!su) throw Error("Inline worker is not supported");
        return new Uu[Eu](su, ju)
      }
    }
  },
  41768: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  41772: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);