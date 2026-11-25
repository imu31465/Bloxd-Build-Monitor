export const id = 267;
export const ids = [267];
export const modules = {
  41617: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB
    });
    class TB {}
    TB.AUTOSAMPLERSUFFIX = "Sampler", TB.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", TB.ALPHA_DISABLE = 0, TB.ALPHA_ADD = 1, TB.ALPHA_COMBINE = 2, TB.ALPHA_SUBTRACT = 3, TB.ALPHA_MULTIPLY = 4, TB.ALPHA_MAXIMIZED = 5, TB.ALPHA_ONEONE = 6, TB.ALPHA_PREMULTIPLIED = 7, TB.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, TB.ALPHA_INTERPOLATE = 9, TB.ALPHA_SCREENMODE = 10, TB.ALPHA_ONEONE_ONEONE = 11, TB.ALPHA_ALPHATOCOLOR = 12, TB.ALPHA_REVERSEONEMINUS = 13, TB.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14, TB.ALPHA_ONEONE_ONEZERO = 15, TB.ALPHA_EXCLUSION = 16, TB.ALPHA_LAYER_ACCUMULATE = 17, TB.ALPHA_MIN = 18, TB.ALPHA_MAX = 19, TB.ALPHA_DUAL_SRC0_ADD_SRC1xDST = 20, TB.ALPHA_REPLACE_COLOR = 21, TB.ALPHA_EQUATION_ADD = 0, TB.ALPHA_EQUATION_SUBSTRACT = 1, TB.ALPHA_EQUATION_REVERSE_SUBTRACT = 2, TB.ALPHA_EQUATION_MAX = 3, TB.ALPHA_EQUATION_MIN = 4, TB.ALPHA_EQUATION_DARKEN = 5, TB.DELAYLOADSTATE_NONE = 0, TB.DELAYLOADSTATE_LOADED = 1, TB.DELAYLOADSTATE_LOADING = 2, TB.DELAYLOADSTATE_NOTLOADED = 4, TB.NEVER = 512, TB.ALWAYS = 519, TB.LESS = 513, TB.EQUAL = 514, TB.LEQUAL = 515, TB.GREATER = 516, TB.GEQUAL = 518, TB.NOTEQUAL = 517, TB.KEEP = 7680, TB.ZERO = 0, TB.REPLACE = 7681, TB.INCR = 7682, TB.DECR = 7683, TB.INVERT = 5386, TB.INCR_WRAP = 34055, TB.DECR_WRAP = 34056, TB.TEXTURE_CLAMP_ADDRESSMODE = 0, TB.TEXTURE_WRAP_ADDRESSMODE = 1, TB.TEXTURE_MIRROR_ADDRESSMODE = 2, TB.TEXTURE_REPETITION_NONE = 0, TB.TEXTURE_REPETITION_NOISE_BLEND = 1, TB.TEXTURE_REPETITION_HEX_TILING = 2, TB.TEXTURE_REPETITION_TILE_RANDOMIZATION = 3, TB.TEXTURE_REPETITION_VORONOI_BOMBING = 4, TB.TEXTURE_CREATIONFLAG_STORAGE = 1, TB.TEXTUREFORMAT_ALPHA = 0, TB.TEXTUREFORMAT_LUMINANCE = 1, TB.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, TB.TEXTUREFORMAT_RGB = 4, TB.TEXTUREFORMAT_RGBA = 5, TB.TEXTUREFORMAT_RED = 6, TB.TEXTUREFORMAT_R = 6, TB.TEXTUREFORMAT_R16_UNORM = 33322, TB.TEXTUREFORMAT_RG16_UNORM = 33324, TB.TEXTUREFORMAT_RGB16_UNORM = 32852, TB.TEXTUREFORMAT_RGBA16_UNORM = 32859, TB.TEXTUREFORMAT_R16_SNORM = 36760, TB.TEXTUREFORMAT_RG16_SNORM = 36761, TB.TEXTUREFORMAT_RGB16_SNORM = 36762, TB.TEXTUREFORMAT_RGBA16_SNORM = 36763, TB.TEXTUREFORMAT_RG = 7, TB.TEXTUREFORMAT_RED_INTEGER = 8, TB.TEXTUREFORMAT_R_INTEGER = 8, TB.TEXTUREFORMAT_RG_INTEGER = 9, TB.TEXTUREFORMAT_RGB_INTEGER = 10, TB.TEXTUREFORMAT_RGBA_INTEGER = 11, TB.TEXTUREFORMAT_BGRA = 12, TB.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13, TB.TEXTUREFORMAT_DEPTH32_FLOAT = 14, TB.TEXTUREFORMAT_DEPTH16 = 15, TB.TEXTUREFORMAT_DEPTH24 = 16, TB.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 = 17, TB.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 = 18, TB.TEXTUREFORMAT_STENCIL8 = 19, TB.TEXTUREFORMAT_UNDEFINED = 4294967295, TB.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492, TB.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 36493, TB.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495, TB.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494, TB.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779, TB.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919, TB.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778, TB.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918, TB.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777, TB.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776, TB.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917, TB.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916, TB.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808, TB.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x4 = 37809, TB.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x5 = 37810, TB.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x5 = 37811, TB.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x6 = 37812, TB.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x5 = 37813, TB.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x6 = 37814, TB.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x8 = 37815, TB.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x5 = 37816, TB.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x6 = 37817, TB.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x8 = 37818, TB.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x10 = 37819, TB.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x10 = 37820, TB.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x12 = 37821, TB.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840, TB.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841, TB.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842, TB.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843, TB.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844, TB.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845, TB.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846, TB.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847, TB.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848, TB.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849, TB.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850, TB.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851, TB.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852, TB.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853, TB.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196, TB.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2 = 37492, TB.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2 = 37493, TB.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494, TB.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495, TB.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC = 37496, TB.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497, TB.TEXTURETYPE_UNSIGNED_BYTE = 0, TB.TEXTURETYPE_UNSIGNED_INT = 0, TB.TEXTURETYPE_FLOAT = 1, TB.TEXTURETYPE_HALF_FLOAT = 2, TB.TEXTURETYPE_BYTE = 3, TB.TEXTURETYPE_SHORT = 4, TB.TEXTURETYPE_UNSIGNED_SHORT = 5, TB.TEXTURETYPE_INT = 6, TB.TEXTURETYPE_UNSIGNED_INTEGER = 7, TB.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, TB.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, TB.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, TB.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, TB.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, TB.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, TB.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, TB.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, TB.TEXTURETYPE_UNDEFINED = 16, TB.TEXTURE_2D = 3553, TB.TEXTURE_2D_ARRAY = 35866, TB.TEXTURE_CUBE_MAP = 34067, TB.TEXTURE_CUBE_MAP_ARRAY = 3735928559, TB.TEXTURE_3D = 32879, TB.TEXTURE_NEAREST_SAMPLINGMODE = 1, TB.TEXTURE_NEAREST_NEAREST = 1, TB.TEXTURE_BILINEAR_SAMPLINGMODE = 2, TB.TEXTURE_LINEAR_LINEAR = 2, TB.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, TB.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, TB.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, TB.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, TB.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, TB.TEXTURE_NEAREST_LINEAR = 7, TB.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, TB.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, TB.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, TB.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, TB.TEXTURE_LINEAR_NEAREST = 12, TB.TEXTURE_EXPLICIT_MODE = 0, TB.TEXTURE_SPHERICAL_MODE = 1, TB.TEXTURE_PLANAR_MODE = 2, TB.TEXTURE_CUBIC_MODE = 3, TB.TEXTURE_PROJECTION_MODE = 4, TB.TEXTURE_SKYBOX_MODE = 5, TB.TEXTURE_INVCUBIC_MODE = 6, TB.TEXTURE_EQUIRECTANGULAR_MODE = 7, TB.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, TB.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, TB.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096, TB.TEXTURE_FILTERING_QUALITY_HIGH = 64, TB.TEXTURE_FILTERING_QUALITY_MEDIUM = 16, TB.TEXTURE_FILTERING_QUALITY_LOW = 8, TB.SCALEMODE_FLOOR = 1, TB.SCALEMODE_NEAREST = 2, TB.SCALEMODE_CEILING = 3, TB.MATERIAL_TextureDirtyFlag = 1, TB.MATERIAL_LightDirtyFlag = 2, TB.MATERIAL_FresnelDirtyFlag = 4, TB.MATERIAL_AttributesDirtyFlag = 8, TB.MATERIAL_MiscDirtyFlag = 16, TB.MATERIAL_PrePassDirtyFlag = 32, TB.MATERIAL_ImageProcessingDirtyFlag = 64, TB.MATERIAL_AllDirtyFlag = 127, TB.MATERIAL_TriangleFillMode = 0, TB.MATERIAL_WireFrameFillMode = 1, TB.MATERIAL_PointFillMode = 2, TB.MATERIAL_PointListDrawMode = 3, TB.MATERIAL_LineListDrawMode = 4, TB.MATERIAL_LineLoopDrawMode = 5, TB.MATERIAL_LineStripDrawMode = 6, TB.MATERIAL_TriangleStripDrawMode = 7, TB.MATERIAL_TriangleFanDrawMode = 8, TB.MATERIAL_ClockWiseSideOrientation = 0, TB.MATERIAL_CounterClockWiseSideOrientation = 1, TB.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR = 0, TB.MATERIAL_DIFFUSE_MODEL_BURLEY = 1, TB.MATERIAL_DIFFUSE_MODEL_LAMBERT = 2, TB.MATERIAL_DIFFUSE_MODEL_LEGACY = 3, TB.MATERIAL_DIELECTRIC_SPECULAR_MODEL_GLTF = 0, TB.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR = 1, TB.MATERIAL_CONDUCTOR_SPECULAR_MODEL_GLTF = 0, TB.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR = 1, TB.ACTION_NothingTrigger = 0, TB.ACTION_OnPickTrigger = 1, TB.ACTION_OnLeftPickTrigger = 2, TB.ACTION_OnRightPickTrigger = 3, TB.ACTION_OnCenterPickTrigger = 4, TB.ACTION_OnPickDownTrigger = 5, TB.ACTION_OnDoublePickTrigger = 6, TB.ACTION_OnPickUpTrigger = 7, TB.ACTION_OnPickOutTrigger = 16, TB.ACTION_OnLongPressTrigger = 8, TB.ACTION_OnPointerOverTrigger = 9, TB.ACTION_OnPointerOutTrigger = 10, TB.ACTION_OnEveryFrameTrigger = 11, TB.ACTION_OnIntersectionEnterTrigger = 12, TB.ACTION_OnIntersectionExitTrigger = 13, TB.ACTION_OnKeyDownTrigger = 14, TB.ACTION_OnKeyUpTrigger = 15, TB.PARTICLES_BILLBOARDMODE_Y = 2, TB.PARTICLES_BILLBOARDMODE_ALL = 7, TB.PARTICLES_BILLBOARDMODE_STRETCHED = 8, TB.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL = 9, TB.MESHES_CULLINGSTRATEGY_STANDARD = 0, TB.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, TB.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, TB.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, TB.SCENELOADER_NO_LOGGING = 0, TB.SCENELOADER_MINIMAL_LOGGING = 1, TB.SCENELOADER_SUMMARY_LOGGING = 2, TB.SCENELOADER_DETAILED_LOGGING = 3, TB.PREPASS_IRRADIANCE_LEGACY_TEXTURE_TYPE = 0, TB.PREPASS_POSITION_TEXTURE_TYPE = 1, TB.PREPASS_VELOCITY_TEXTURE_TYPE = 2, TB.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3, TB.PREPASS_COLOR_TEXTURE_TYPE = 4, TB.PREPASS_DEPTH_TEXTURE_TYPE = 5, TB.PREPASS_NORMAL_TEXTURE_TYPE = 6, TB.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7, TB.PREPASS_WORLD_NORMAL_TEXTURE_TYPE = 8, TB.PREPASS_LOCAL_POSITION_TEXTURE_TYPE = 9, TB.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE = 10, TB.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE = 11, TB.PREPASS_ALBEDO_TEXTURE_TYPE = 12, TB.PREPASS_NORMALIZED_VIEW_DEPTH_TEXTURE_TYPE = 13, TB.PREPASS_IRRADIANCE_TEXTURE_TYPE = 14, TB.PREPASS_OBJECT_ID_TEXTURE_TYPE = 15, TB.PREPASS_MESH_BLEND_TAG_TEXTURE_TYPE = 16, TB.BUFFER_CREATIONFLAG_READ = 1, TB.BUFFER_CREATIONFLAG_WRITE = 2, TB.BUFFER_CREATIONFLAG_READWRITE = 3, TB.BUFFER_CREATIONFLAG_UNIFORM = 4, TB.BUFFER_CREATIONFLAG_VERTEX = 8, TB.BUFFER_CREATIONFLAG_INDEX = 16, TB.BUFFER_CREATIONFLAG_STORAGE = 32, TB.BUFFER_CREATIONFLAG_INDIRECT = 64, TB.RENDERPASS_MAIN = 0, TB.INPUT_ALT_KEY = 18, TB.INPUT_CTRL_KEY = 17, TB.INPUT_META_KEY1 = 91, TB.INPUT_META_KEY2 = 92, TB.INPUT_META_KEY3 = 93, TB.INPUT_SHIFT_KEY = 16, TB.SNAPSHOTRENDERING_STANDARD = 0, TB.SNAPSHOTRENDERING_FAST = 1, TB.PERSPECTIVE_CAMERA = 0, TB.ORTHOGRAPHIC_CAMERA = 1, TB.FOVMODE_VERTICAL_FIXED = 0, TB.FOVMODE_HORIZONTAL_FIXED = 1, TB.RIG_MODE_NONE = 0, TB.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, TB.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, TB.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, TB.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, TB.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, TB.RIG_MODE_VR = 20, TB.RIG_MODE_CUSTOM = 22, TB.MAX_SUPPORTED_UV_SETS = 6, TB.GL_ALPHA_EQUATION_ADD = 32774, TB.GL_ALPHA_EQUATION_MIN = 32775, TB.GL_ALPHA_EQUATION_MAX = 32776, TB.GL_ALPHA_EQUATION_SUBTRACT = 32778, TB.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 32779, TB.GL_ALPHA_FUNCTION_SRC = 768, TB.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 769, TB.GL_ALPHA_FUNCTION_SRC_ALPHA = 770, TB.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 771, TB.GL_ALPHA_FUNCTION_DST_ALPHA = 772, TB.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 773, TB.GL_ALPHA_FUNCTION_DST_COLOR = 774, TB.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 775, TB.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 776, TB.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 32769, TB.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 32770, TB.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 32771, TB.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 32772, TB.GL_ALPHA_FUNCTION_SRC1_COLOR = 35065, TB.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_COLOR = 35066, TB.GL_ALPHA_FUNCTION_SRC1_ALPHA = 34185, TB.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_ALPHA = 35067, TB.SnippetUrl = "https://snippet.babylonjs.com", TB.FOGMODE_NONE = 0, TB.FOGMODE_EXP = 1, TB.FOGMODE_EXP2 = 2, TB.FOGMODE_LINEAR = 3, TB.BYTE = 5120, TB.UNSIGNED_BYTE = 5121, TB.SHORT = 5122, TB.UNSIGNED_SHORT = 5123, TB.INT = 5124, TB.UNSIGNED_INT = 5125, TB.FLOAT = 5126, TB.HALF_FLOAT = 5131, TB.PositionKind = "position", TB.NormalKind = "normal", TB.TangentKind = "tangent", TB.UVKind = "uv", TB.UV2Kind = "uv2", TB.UV3Kind = "uv3", TB.UV4Kind = "uv4", TB.UV5Kind = "uv5", TB.UV6Kind = "uv6", TB.ColorKind = "color", TB.ColorInstanceKind = "instanceColor", TB.MatricesIndicesKind = "matricesIndices", TB.MatricesWeightsKind = "matricesWeights", TB.MatricesIndicesExtraKind = "matricesIndicesExtra", TB.MatricesWeightsExtraKind = "matricesWeightsExtra", TB.ANIMATIONTYPE_FLOAT = 0, TB.ANIMATIONTYPE_VECTOR3 = 1, TB.ANIMATIONTYPE_QUATERNION = 2, TB.ANIMATIONTYPE_MATRIX = 3, TB.ANIMATIONTYPE_COLOR3 = 4, TB.ANIMATIONTYPE_COLOR4 = 7, TB.ANIMATIONTYPE_VECTOR2 = 5, TB.ANIMATIONTYPE_SIZE = 6, TB.ShadowMinZ = 0, TB.ShadowMaxZ = 1e4, TB.OUTLINELAYER_SAMPLING_TRIDIRECTIONAL = 0, TB.OUTLINELAYER_SAMPLING_OCTADIRECTIONAL = 1
  },
  41597: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => kB
    });
    var TB = ZB(40061),
      JB = ZB(40065),
      oB = ZB(37120),
      GB = ZB(40310),
      vB = ZB(40277);
    let kB = (() => {
      var BB;
      let IB, ZB, kB, cB, nB = GB.b,
        hB = [];
      return BB = class extends nB {
        constructor() {
          super(...arguments), this._position = (0, TB.l)(this, hB), this._needProjectionMatrixCompute = !0, this._viewMatrix = oB.b.Identity(), this._projectionMatrix = oB.b.Identity()
        }
        _setPosition(BB) {
          this._position = BB
        }
        get position() {
          return this._position
        }
        set position(BB) {
          this._setPosition(BB)
        }
        _setDirection(BB) {
          this._direction = BB
        }
        get direction() {
          return this._direction
        }
        set direction(BB) {
          this._setDirection(BB)
        }
        get shadowMinZ() {
          return this._shadowMinZ
        }
        set shadowMinZ(BB) {
          this._shadowMinZ = BB, this.forceProjectionMatrixCompute()
        }
        get shadowMaxZ() {
          return this._shadowMaxZ
        }
        set shadowMaxZ(BB) {
          this._shadowMaxZ = BB, this.forceProjectionMatrixCompute()
        }
        computeTransformedInformation() {
          return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = oB.s.Zero()), oB.s.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDirection || (this.transformedDirection = oB.s.Zero()), oB.s.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this.transformedDirection)), !0)
        }
        getDepthScale() {
          return 50
        }
        getShadowDirection(BB) {
          return this.transformedDirection ? this.transformedDirection : this.direction
        }
        getAbsolutePosition() {
          return this.transformedPosition ? this.transformedPosition : this.position
        }
        setDirectionToTarget(BB) {
          return this.direction = oB.s.Normalize(BB.subtract(this.position)), this.direction
        }
        getRotation() {
          this.direction.normalize();
          const BB = oB.s.Cross(this.direction, vB.c.Y),
            IB = oB.s.Cross(BB, this.direction);
          return oB.s.RotationFromAxis(BB, IB, this.direction)
        }
        needCube() {
          return !1
        }
        needProjectionMatrixCompute() {
          return this._needProjectionMatrixCompute
        }
        forceProjectionMatrixCompute() {
          this._needProjectionMatrixCompute = !0
        }
        _initCache() {
          super._initCache(), this._cache.position = oB.s.Zero()
        }
        _isSynchronized() {
          return !!this._cache.position.equals(this.position)
        }
        computeWorldMatrix(BB) {
          return !BB && this.isSynchronized() ? (this._currentRenderId = this.JR().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.TY(this.position), this._worldMatrix || (this._worldMatrix = oB.b.Identity()), oB.b.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this.parent && this.parent.getWorldMatrix && (this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix), this._markSyncedWithParent()), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix)
        }
        getDepthMinZ(BB) {
          return void 0 !== this.shadowMinZ ? this.shadowMinZ : BB?.minZ || 0
        }
        getDepthMaxZ(BB) {
          return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : BB?.maxZ || 1e4
        }
        setShadowProjectionMatrix(BB, IB, ZB) {
          return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(IB, ZB, BB) : this._setDefaultShadowProjectionMatrix(BB, IB, ZB), this
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
        }
        getViewMatrix(BB) {
          const IB = oB.m.rN[0];
          let ZB = this.position;
          this.computeTransformedInformation() && (ZB = this.transformedPosition), oB.s.NormalizeToRef(this.getShadowDirection(BB), IB), 1 === Math.abs(oB.s.Dot(IB, oB.s.Up())) && (IB.z = 1e-13);
          const TB = oB.m.rN[1];
          return ZB.addToRef(IB, TB), oB.b.LookAtLHToRef(ZB, TB, oB.s.Up(), this._viewMatrix), this._viewMatrix
        }
        getProjectionMatrix(BB, IB) {
          return this.setShadowProjectionMatrix(this._projectionMatrix, BB ?? this._viewMatrix, IB ?? []), this._projectionMatrix
        }
      }, (() => {
        const oB = "function" === typeof Symbol && Symbol.metadata ? Object.create(nB[Symbol.metadata] ?? null) : void 0;
        IB = [(0, JB.A)()], ZB = [(0, JB.A)()], kB = [(0, JB.C)()], cB = [(0, JB.C)()], (0, TB.j)(BB, null, IB, {
          kind: "getter",
          name: "position",
          static: !1,
          private: !1,
          access: {
            has: BB => "position" in BB,
            get: BB => BB.position
          },
          metadata: oB
        }, null, hB), (0, TB.j)(BB, null, ZB, {
          kind: "getter",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: BB => "direction" in BB,
            get: BB => BB.direction
          },
          metadata: oB
        }, null, hB), (0, TB.j)(BB, null, kB, {
          kind: "getter",
          name: "shadowMinZ",
          static: !1,
          private: !1,
          access: {
            has: BB => "shadowMinZ" in BB,
            get: BB => BB.shadowMinZ
          },
          metadata: oB
        }, null, hB), (0, TB.j)(BB, null, cB, {
          kind: "getter",
          name: "shadowMaxZ",
          static: !1,
          private: !1,
          access: {
            has: BB => "shadowMaxZ" in BB,
            get: BB => BB.shadowMaxZ
          },
          metadata: oB
        }, null, hB), oB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oB
        })
      })(), BB
    })()
  },
  41610: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => JB
    });
    var TB = ZB(40521);
    class JB extends TB.e {
      constructor(BB, IB, ZB, JB, oB) {
        let GB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          vB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          kB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
          cB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          nB = arguments.length > 9 ? arguments[9] : void 0,
          hB = arguments.length > 10 ? arguments[10] : void 0,
          zB = arguments.length > 11 ? arguments[11] : void 0,
          FB = arguments.length > 12 ? arguments[12] : void 0;
        super(null, oB, !GB, vB, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, nB), this.format = JB, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== cB || (kB = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== cB || (kB = 1), this._texture = this._engine.createRawTexture(BB, IB, ZB, JB, GB, vB, kB, null, cB, nB ?? 0, hB ?? !1, FB), this.wrapU = TB.e.CLAMP_ADDRESSMODE, this.wrapV = TB.e.CLAMP_ADDRESSMODE, this._waitingForData = !!zB && !BB)
      }
      update(BB) {
        this.updateMipLevel(BB, 0)
      }
      updateMipLevel(BB, IB) {
        this._getEngine().updateRawTexture(this._texture, BB, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, IB), this._waitingForData = !1
      }
      clone() {
        if (!this._texture) return super.clone();
        const BB = new JB(null, this.getSize().width, this.getSize().height, this.format, this.JR(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
        return BB._texture = this._texture, this._texture.incrementReferences(), BB
      }
      isReady() {
        return super.isReady() && !this._waitingForData
      }
      static CreateLuminanceTexture(BB, IB, ZB, TB) {
        return new JB(BB, IB, ZB, 1, TB, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateLuminanceAlphaTexture(BB, IB, ZB, TB) {
        return new JB(BB, IB, ZB, 2, TB, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateAlphaTexture(BB, IB, ZB, TB) {
        return new JB(BB, IB, ZB, 0, TB, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateRGBTexture(BB, IB, ZB, TB) {
        return new JB(BB, IB, ZB, 4, TB, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9])
      }
      static CreateRGBATexture(BB, IB, ZB, TB) {
        return new JB(BB, IB, ZB, 5, TB, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9], arguments.length > 10 && void 0 !== arguments[10] && arguments[10])
      }
      static CreateRGBAStorageTexture(BB, IB, ZB, TB) {
        return new JB(BB, IB, ZB, 5, TB, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, 1, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }
      static CreateRTexture(BB, IB, ZB, oB) {
        let GB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          vB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          kB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : TB.e.TRILINEAR_SAMPLINGMODE;
        return new JB(BB, IB, ZB, 6, oB, GB, vB, kB, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
      }
      static CreateRStorageTexture(BB, IB, ZB, oB) {
        let GB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          vB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          kB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : TB.e.TRILINEAR_SAMPLINGMODE;
        return new JB(BB, IB, ZB, 6, oB, GB, vB, kB, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
      }
    }
  },
  41647: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB.b
    });
    var TB = ZB(40488);
    (0, TB.d)()
  },
  41605: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => TB.e
    });
    var TB = ZB(40503);
    (0, TB.f)()
  },
  40503: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => zB,
      f: () => gB
    });
    var TB, JB, oB = ZB(37311),
      GB = ZB(40188),
      vB = ZB(40448),
      kB = ZB(40510),
      cB = ZB(40339),
      nB = ZB(40514),
      hB = ZB(39931);
    class zB extends vB.c {
      _isShaderMaterial(BB) {
        return !!BB && "ShaderMaterial" === BB.getClassName()
      }
      constructor(BB) {
        let IB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          TB = arguments.length > 5 ? arguments[5] : void 0,
          JB = arguments.length > 6 ? arguments[6] : void 0,
          vB = arguments.length > 7 ? arguments[7] : void 0;
        super(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, IB, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = TB, this.useVertexAlpha = JB, this.color = new oB.c(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, IB && (this.color = IB.color.clone(), this.alpha = IB.alpha, this.useVertexColor = IB.useVertexColor, this.useVertexAlpha = IB.useVertexAlpha), this.intersectionThreshold = .1;
        const kB = {
          attributes: [GB.i.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? kB.defines.push("#define VERTEXALPHA") : kB.needAlphaBlending = !1, this.useVertexColor ? (kB.defines.push("#define VERTEXCOLOR"), kB.attributes.push(GB.i.ColorKind)) : (kB.uniforms.push("color"), this._color4 = new oB.g), vB) this.material = vB;
        else {
          this.JR().PN().isWebGPU && !zB.ForceGLSL && (this._shaderLanguage = 1), kB.shaderLanguage = this._shaderLanguage, kB.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([ZB.e(349).then((() => ZB(42557))), ZB.e(355).then((() => ZB(42563)))]) : await Promise.all([ZB.e(331).then((() => ZB(42572))), ZB.e(337).then((() => ZB(42575)))])
          };
          const BB = new nB.n("colorShader", this.JR(), "color", kB, !1);
          BB.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(BB)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(BB) {
        const IB = this.material;
        if (IB === BB) return;
        const ZB = IB && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(BB), ZB && IB?.dispose()
      }
      _setInternalMaterial(BB) {
        this._setMaterial(BB), this.material && (this.material.fillMode = cB.e.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(BB) {}
      _bind(BB, IB) {
        if (!this._geometry) return this;
        const ZB = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(IB, ZB) : this._geometry._bind(IB, ZB, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: BB,
            g: IB,
            b: ZB
          } = this.color;
          this._color4.set(BB, IB, ZB, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(BB, IB, ZB) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const TB = this.JR().PN();
        return this._unIndexed ? TB.drawArraysType(cB.e.LineListDrawMode, BB.verticesStart, BB.verticesCount, ZB) : TB.drawElementsType(cB.e.LineListDrawMode, BB.indexStart, BB.indexCount, ZB), this
      }
      dispose(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || IB) && this.material?.dispose(!1, !1, !0), super.dispose(BB)
      }
      clone(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        if (IB && void 0 === IB._addToSceneRootNodes) {
          const ZB = IB;
          return ZB.source = this, new zB(BB, this.JR(), ZB.parent, ZB.source, ZB.doNotCloneChildren)
        }
        return new zB(BB, this.JR(), IB, this, ZB)
      }
      createInstance(BB) {
        const IB = new FB(BB, this);
        if (this.Zm) {
          IB.Zm = {};
          for (const BB in this.Zm) IB.Zm[BB] = this.Zm[BB]
        }
        return IB
      }
      serialize(BB) {
        super.serialize(BB), BB.color = this.color.HTB(), BB.alpha = this.alpha
      }
      static Parse(BB, IB) {
        const ZB = new zB(BB.name, IB);
        return ZB.color = oB.c.FromArray(BB.color), ZB.alpha = BB.alpha, ZB
      }
    }
    zB.ForceGLSL = !1;
    class FB extends kB.b {
      constructor(BB, IB) {
        super(BB, IB), this.intersectionThreshold = IB.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let NB = !1;

    function gB() {
      NB || (NB = !0, vB.c._LinesMeshParser = (BB, IB) => zB.Parse(BB, IB))
    }(TB = zB.prototype).enableEdgesRendering ?? (TB.enableEdgesRendering = (0, hB.j)("LinesMesh", "enableEdgesRendering")), (JB = FB.prototype).enableEdgesRendering ?? (JB.enableEdgesRendering = (0, hB.j)("InstancedLinesMesh", "enableEdgesRendering"))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);