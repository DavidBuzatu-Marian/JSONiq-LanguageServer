// Generated from ./src/grammar/jsoniq.g4 by ANTLR 4.9.0-SNAPSHOT
import { ATN } from "antlr4ts/atn/ATN.js";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer.js";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException.js";
import { NoViableAltException } from "antlr4ts/NoViableAltException.js";
import { Parser } from "antlr4ts/Parser.js";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext.js";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator.js";
import { RecognitionException } from "antlr4ts/RecognitionException.js";
import { Token } from "antlr4ts/Token.js";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl.js";
import * as Utils from "antlr4ts/misc/Utils.js";
export class jsoniqParser extends Parser {
    // @Override
    // @NotNull
    get vocabulary() {
        return jsoniqParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() {
        return "jsoniq.g4";
    }
    // @Override
    get ruleNames() {
        return jsoniqParser.ruleNames;
    }
    // @Override
    get serializedATN() {
        return jsoniqParser._serializedATN;
    }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator(jsoniqParser._ATN, this);
    }
    // @RuleVersion(0)
    moduleAndThisIsIt() {
        let _localctx = new ModuleAndThisIsItContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, jsoniqParser.RULE_moduleAndThisIsIt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 254;
                this.module();
                this.state = 255;
                this.match(jsoniqParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    module() {
        let _localctx = new ModuleContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, jsoniqParser.RULE_module);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 262;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                    case 1:
                        {
                            this.state = 257;
                            this.match(jsoniqParser.Kjsoniq);
                            this.state = 258;
                            this.match(jsoniqParser.Kversion);
                            this.state = 259;
                            _localctx._vers = this.stringLiteral();
                            this.state = 260;
                            this.match(jsoniqParser.T__0);
                        }
                        break;
                }
                this.state = 266;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case jsoniqParser.T__1:
                        {
                            this.state = 264;
                            this.libraryModule();
                        }
                        break;
                    case jsoniqParser.EOF:
                    case jsoniqParser.T__4:
                    case jsoniqParser.T__6:
                    case jsoniqParser.T__7:
                    case jsoniqParser.T__8:
                    case jsoniqParser.T__12:
                    case jsoniqParser.T__15:
                    case jsoniqParser.T__28:
                    case jsoniqParser.T__30:
                    case jsoniqParser.T__47:
                    case jsoniqParser.T__48:
                    case jsoniqParser.T__53:
                    case jsoniqParser.T__56:
                    case jsoniqParser.T__58:
                    case jsoniqParser.Kfor:
                    case jsoniqParser.Klet:
                    case jsoniqParser.Kwhere:
                    case jsoniqParser.Kgroup:
                    case jsoniqParser.Kby:
                    case jsoniqParser.Korder:
                    case jsoniqParser.Kreturn:
                    case jsoniqParser.Kif:
                    case jsoniqParser.Kin:
                    case jsoniqParser.Kas:
                    case jsoniqParser.Kat:
                    case jsoniqParser.Kallowing:
                    case jsoniqParser.Kempty:
                    case jsoniqParser.Kcount:
                    case jsoniqParser.Kstable:
                    case jsoniqParser.Kascending:
                    case jsoniqParser.Kdescending:
                    case jsoniqParser.Ksome:
                    case jsoniqParser.Kevery:
                    case jsoniqParser.Ksatisfies:
                    case jsoniqParser.Kcollation:
                    case jsoniqParser.Kgreatest:
                    case jsoniqParser.Kleast:
                    case jsoniqParser.Kswitch:
                    case jsoniqParser.Kcase:
                    case jsoniqParser.Ktry:
                    case jsoniqParser.Kcatch:
                    case jsoniqParser.Kdefault:
                    case jsoniqParser.Kthen:
                    case jsoniqParser.Kelse:
                    case jsoniqParser.Ktypeswitch:
                    case jsoniqParser.Kor:
                    case jsoniqParser.Kand:
                    case jsoniqParser.Knot:
                    case jsoniqParser.Kto:
                    case jsoniqParser.Kinstance:
                    case jsoniqParser.Kof:
                    case jsoniqParser.Kstatically:
                    case jsoniqParser.Kis:
                    case jsoniqParser.Ktreat:
                    case jsoniqParser.Kcast:
                    case jsoniqParser.Kcastable:
                    case jsoniqParser.Kversion:
                    case jsoniqParser.Kjsoniq:
                    case jsoniqParser.Kunordered:
                    case jsoniqParser.Ktrue:
                    case jsoniqParser.Kfalse:
                    case jsoniqParser.Ktype:
                    case jsoniqParser.Kvalidate:
                    case jsoniqParser.Kannotate:
                    case jsoniqParser.Kdeclare:
                    case jsoniqParser.Kcontext:
                    case jsoniqParser.Kitem:
                    case jsoniqParser.Kvariable:
                    case jsoniqParser.Kinsert:
                    case jsoniqParser.Kdelete:
                    case jsoniqParser.Krename:
                    case jsoniqParser.Kreplace:
                    case jsoniqParser.Kcopy:
                    case jsoniqParser.Kmodify:
                    case jsoniqParser.Kappend:
                    case jsoniqParser.Kinto:
                    case jsoniqParser.Kvalue:
                    case jsoniqParser.Kjson:
                    case jsoniqParser.Kwith:
                    case jsoniqParser.Kposition:
                    case jsoniqParser.Kbreak:
                    case jsoniqParser.Kloop:
                    case jsoniqParser.Kcontinue:
                    case jsoniqParser.Kexit:
                    case jsoniqParser.Kreturning:
                    case jsoniqParser.Kwhile:
                    case jsoniqParser.STRING:
                    case jsoniqParser.NullLiteral:
                    case jsoniqParser.Literal:
                    case jsoniqParser.NCName:
                        {
                            this.state = 265;
                            _localctx._main = this.mainModule();
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    mainModule() {
        let _localctx = new MainModuleContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, jsoniqParser.RULE_mainModule);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 268;
                this.prolog();
                this.state = 269;
                this.program();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    libraryModule() {
        let _localctx = new LibraryModuleContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, jsoniqParser.RULE_libraryModule);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 271;
                this.match(jsoniqParser.T__1);
                this.state = 272;
                this.match(jsoniqParser.T__2);
                this.state = 273;
                this.match(jsoniqParser.NCName);
                this.state = 274;
                this.match(jsoniqParser.T__3);
                this.state = 275;
                this.uriLiteral();
                this.state = 276;
                this.match(jsoniqParser.T__0);
                this.state = 277;
                this.prolog();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    prolog() {
        let _localctx = new PrologContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, jsoniqParser.RULE_prolog);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 288;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 282;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 279;
                                            this.setter();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 280;
                                            this.namespaceDecl();
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 281;
                                            this.moduleImport();
                                        }
                                        break;
                                }
                                this.state = 284;
                                this.match(jsoniqParser.T__0);
                            }
                        }
                    }
                    this.state = 290;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                }
                this.state = 296;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 291;
                                this.annotatedDecl();
                                this.state = 292;
                                this.match(jsoniqParser.T__0);
                            }
                        }
                    }
                    this.state = 298;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    program() {
        let _localctx = new ProgramContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, jsoniqParser.RULE_program);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 299;
                this.statementsAndOptionalExpr();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    statements() {
        let _localctx = new StatementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, jsoniqParser.RULE_statements);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 304;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 301;
                                this.statement();
                            }
                        }
                    }
                    this.state = 306;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    statementsAndExpr() {
        let _localctx = new StatementsAndExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, jsoniqParser.RULE_statementsAndExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 307;
                this.statements();
                this.state = 308;
                this.expr();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    statementsAndOptionalExpr() {
        let _localctx = new StatementsAndOptionalExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, jsoniqParser.RULE_statementsAndOptionalExpr);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 310;
                this.statements();
                this.state = 312;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((_la & ~0x1f) === 0 &&
                    ((1 << _la) &
                        ((1 << jsoniqParser.T__4) |
                            (1 << jsoniqParser.T__6) |
                            (1 << jsoniqParser.T__8) |
                            (1 << jsoniqParser.T__12) |
                            (1 << jsoniqParser.T__15) |
                            (1 << jsoniqParser.T__30))) !==
                        0) ||
                    (((_la - 48) & ~0x1f) === 0 &&
                        ((1 << (_la - 48)) &
                            ((1 << (jsoniqParser.T__47 - 48)) |
                                (1 << (jsoniqParser.T__48 - 48)) |
                                (1 << (jsoniqParser.T__53 - 48)) |
                                (1 << (jsoniqParser.T__56 - 48)) |
                                (1 << (jsoniqParser.T__58 - 48)) |
                                (1 << (jsoniqParser.Kfor - 48)) |
                                (1 << (jsoniqParser.Klet - 48)) |
                                (1 << (jsoniqParser.Kwhere - 48)) |
                                (1 << (jsoniqParser.Kgroup - 48)) |
                                (1 << (jsoniqParser.Kby - 48)) |
                                (1 << (jsoniqParser.Korder - 48)) |
                                (1 << (jsoniqParser.Kreturn - 48)) |
                                (1 << (jsoniqParser.Kif - 48)) |
                                (1 << (jsoniqParser.Kin - 48)) |
                                (1 << (jsoniqParser.Kas - 48)) |
                                (1 << (jsoniqParser.Kat - 48)) |
                                (1 << (jsoniqParser.Kallowing - 48)) |
                                (1 << (jsoniqParser.Kempty - 48)) |
                                (1 << (jsoniqParser.Kcount - 48)) |
                                (1 << (jsoniqParser.Kstable - 48)) |
                                (1 << (jsoniqParser.Kascending - 48)) |
                                (1 << (jsoniqParser.Kdescending - 48)) |
                                (1 << (jsoniqParser.Ksome - 48)) |
                                (1 << (jsoniqParser.Kevery - 48)))) !==
                            0) ||
                    (((_la - 80) & ~0x1f) === 0 &&
                        ((1 << (_la - 80)) &
                            ((1 << (jsoniqParser.Ksatisfies - 80)) |
                                (1 << (jsoniqParser.Kcollation - 80)) |
                                (1 << (jsoniqParser.Kgreatest - 80)) |
                                (1 << (jsoniqParser.Kleast - 80)) |
                                (1 << (jsoniqParser.Kswitch - 80)) |
                                (1 << (jsoniqParser.Kcase - 80)) |
                                (1 << (jsoniqParser.Ktry - 80)) |
                                (1 << (jsoniqParser.Kcatch - 80)) |
                                (1 << (jsoniqParser.Kdefault - 80)) |
                                (1 << (jsoniqParser.Kthen - 80)) |
                                (1 << (jsoniqParser.Kelse - 80)) |
                                (1 << (jsoniqParser.Ktypeswitch - 80)) |
                                (1 << (jsoniqParser.Kor - 80)) |
                                (1 << (jsoniqParser.Kand - 80)) |
                                (1 << (jsoniqParser.Knot - 80)) |
                                (1 << (jsoniqParser.Kto - 80)) |
                                (1 << (jsoniqParser.Kinstance - 80)) |
                                (1 << (jsoniqParser.Kof - 80)) |
                                (1 << (jsoniqParser.Kstatically - 80)) |
                                (1 << (jsoniqParser.Kis - 80)) |
                                (1 << (jsoniqParser.Ktreat - 80)) |
                                (1 << (jsoniqParser.Kcast - 80)) |
                                (1 << (jsoniqParser.Kcastable - 80)) |
                                (1 << (jsoniqParser.Kversion - 80)) |
                                (1 << (jsoniqParser.Kjsoniq - 80)) |
                                (1 << (jsoniqParser.Kunordered - 80)) |
                                (1 << (jsoniqParser.Ktrue - 80)) |
                                (1 << (jsoniqParser.Kfalse - 80)) |
                                (1 << (jsoniqParser.Ktype - 80)) |
                                (1 << (jsoniqParser.Kvalidate - 80)) |
                                (1 << (jsoniqParser.Kannotate - 80)) |
                                (1 << (jsoniqParser.Kdeclare - 80)))) !==
                            0) ||
                    (((_la - 112) & ~0x1f) === 0 &&
                        ((1 << (_la - 112)) &
                            ((1 << (jsoniqParser.Kcontext - 112)) |
                                (1 << (jsoniqParser.Kitem - 112)) |
                                (1 << (jsoniqParser.Kvariable - 112)) |
                                (1 << (jsoniqParser.Kinsert - 112)) |
                                (1 << (jsoniqParser.Kdelete - 112)) |
                                (1 << (jsoniqParser.Krename - 112)) |
                                (1 << (jsoniqParser.Kreplace - 112)) |
                                (1 << (jsoniqParser.Kcopy - 112)) |
                                (1 << (jsoniqParser.Kmodify - 112)) |
                                (1 << (jsoniqParser.Kappend - 112)) |
                                (1 << (jsoniqParser.Kinto - 112)) |
                                (1 << (jsoniqParser.Kvalue - 112)) |
                                (1 << (jsoniqParser.Kjson - 112)) |
                                (1 << (jsoniqParser.Kwith - 112)) |
                                (1 << (jsoniqParser.Kposition - 112)) |
                                (1 << (jsoniqParser.Kbreak - 112)) |
                                (1 << (jsoniqParser.Kloop - 112)) |
                                (1 << (jsoniqParser.Kcontinue - 112)) |
                                (1 << (jsoniqParser.Kexit - 112)) |
                                (1 << (jsoniqParser.Kreturning - 112)) |
                                (1 << (jsoniqParser.Kwhile - 112)) |
                                (1 << (jsoniqParser.STRING - 112)) |
                                (1 << (jsoniqParser.NullLiteral - 112)) |
                                (1 << (jsoniqParser.Literal - 112)) |
                                (1 << (jsoniqParser.NCName - 112)))) !==
                            0)) {
                    {
                        this.state = 311;
                        this.expr();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    statement() {
        let _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, jsoniqParser.RULE_statement);
        try {
            this.state = 327;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 314;
                        this.applyStatement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 315;
                        this.assignStatement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 316;
                        this.blockStatement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 317;
                        this.breakStatement();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 318;
                        this.continueStatement();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 319;
                        this.exitStatement();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 320;
                        this.flowrStatement();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 321;
                        this.ifStatement();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 322;
                        this.switchStatement();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 323;
                        this.tryCatchStatement();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 324;
                        this.typeSwitchStatement();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 325;
                        this.varDeclStatement();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 326;
                        this.whileStatement();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    applyStatement() {
        let _localctx = new ApplyStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, jsoniqParser.RULE_applyStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 329;
                this.exprSimple();
                this.state = 330;
                this.match(jsoniqParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    assignStatement() {
        let _localctx = new AssignStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, jsoniqParser.RULE_assignStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 332;
                this.match(jsoniqParser.T__4);
                this.state = 333;
                this.qname();
                this.state = 334;
                this.match(jsoniqParser.T__5);
                this.state = 335;
                this.exprSingle();
                this.state = 336;
                this.match(jsoniqParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    blockStatement() {
        let _localctx = new BlockStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, jsoniqParser.RULE_blockStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 338;
                this.match(jsoniqParser.T__6);
                this.state = 339;
                this.statements();
                this.state = 340;
                this.match(jsoniqParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    breakStatement() {
        let _localctx = new BreakStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, jsoniqParser.RULE_breakStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 342;
                this.match(jsoniqParser.Kbreak);
                this.state = 343;
                this.match(jsoniqParser.Kloop);
                this.state = 344;
                this.match(jsoniqParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    continueStatement() {
        let _localctx = new ContinueStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, jsoniqParser.RULE_continueStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 346;
                this.match(jsoniqParser.Kcontinue);
                this.state = 347;
                this.match(jsoniqParser.Kloop);
                this.state = 348;
                this.match(jsoniqParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    exitStatement() {
        let _localctx = new ExitStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, jsoniqParser.RULE_exitStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 350;
                this.match(jsoniqParser.Kexit);
                this.state = 351;
                this.match(jsoniqParser.Kreturning);
                this.state = 352;
                this.exprSingle();
                this.state = 353;
                this.match(jsoniqParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    flowrStatement() {
        let _localctx = new FlowrStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, jsoniqParser.RULE_flowrStatement);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 357;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case jsoniqParser.Kfor:
                        {
                            this.state = 355;
                            _localctx._start_for = this.forClause();
                        }
                        break;
                    case jsoniqParser.Klet:
                        {
                            this.state = 356;
                            _localctx._start_let = this.letClause();
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
                this.state = 367;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((_la - 61) & ~0x1f) === 0 &&
                    ((1 << (_la - 61)) &
                        ((1 << (jsoniqParser.Kfor - 61)) |
                            (1 << (jsoniqParser.Klet - 61)) |
                            (1 << (jsoniqParser.Kwhere - 61)) |
                            (1 << (jsoniqParser.Kgroup - 61)) |
                            (1 << (jsoniqParser.Korder - 61)) |
                            (1 << (jsoniqParser.Kcount - 61)) |
                            (1 << (jsoniqParser.Kstable - 61)))) !==
                        0) {
                    {
                        this.state = 365;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case jsoniqParser.Kfor:
                                {
                                    this.state = 359;
                                    this.forClause();
                                }
                                break;
                            case jsoniqParser.Klet:
                                {
                                    this.state = 360;
                                    this.letClause();
                                }
                                break;
                            case jsoniqParser.Kwhere:
                                {
                                    this.state = 361;
                                    this.whereClause();
                                }
                                break;
                            case jsoniqParser.Kgroup:
                                {
                                    this.state = 362;
                                    this.groupByClause();
                                }
                                break;
                            case jsoniqParser.Korder:
                            case jsoniqParser.Kstable:
                                {
                                    this.state = 363;
                                    this.orderByClause();
                                }
                                break;
                            case jsoniqParser.Kcount:
                                {
                                    this.state = 364;
                                    this.countClause();
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                    }
                    this.state = 369;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 370;
                this.match(jsoniqParser.Kreturn);
                this.state = 371;
                _localctx._returnStmt = this.statement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ifStatement() {
        let _localctx = new IfStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, jsoniqParser.RULE_ifStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 373;
                this.match(jsoniqParser.Kif);
                this.state = 374;
                this.match(jsoniqParser.T__8);
                this.state = 375;
                _localctx._test_expr = this.expr();
                this.state = 376;
                this.match(jsoniqParser.T__9);
                this.state = 377;
                this.match(jsoniqParser.Kthen);
                this.state = 378;
                _localctx._branch = this.statement();
                this.state = 379;
                this.match(jsoniqParser.Kelse);
                this.state = 380;
                _localctx._else_branch = this.statement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    switchStatement() {
        let _localctx = new SwitchStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, jsoniqParser.RULE_switchStatement);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 382;
                this.match(jsoniqParser.Kswitch);
                this.state = 383;
                this.match(jsoniqParser.T__8);
                this.state = 384;
                _localctx._condExpr = this.expr();
                this.state = 385;
                this.match(jsoniqParser.T__9);
                this.state = 387;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 386;
                            _localctx._switchCaseStatement = this.switchCaseStatement();
                            _localctx._cases.push(_localctx._switchCaseStatement);
                        }
                    }
                    this.state = 389;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === jsoniqParser.Kcase);
                this.state = 391;
                this.match(jsoniqParser.Kdefault);
                this.state = 392;
                this.match(jsoniqParser.Kreturn);
                this.state = 393;
                _localctx._def = this.statement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    switchCaseStatement() {
        let _localctx = new SwitchCaseStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, jsoniqParser.RULE_switchCaseStatement);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 397;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 395;
                            this.match(jsoniqParser.Kcase);
                            this.state = 396;
                            _localctx._exprSingle = this.exprSingle();
                            _localctx._cond.push(_localctx._exprSingle);
                        }
                    }
                    this.state = 399;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === jsoniqParser.Kcase);
                this.state = 401;
                this.match(jsoniqParser.Kreturn);
                this.state = 402;
                _localctx._ret = this.statement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    tryCatchStatement() {
        let _localctx = new TryCatchStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, jsoniqParser.RULE_tryCatchStatement);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 404;
                this.match(jsoniqParser.Ktry);
                this.state = 405;
                _localctx._try_block = this.blockStatement();
                this.state = 407;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 406;
                                    _localctx._catchCaseStatement = this.catchCaseStatement();
                                    _localctx._catches.push(_localctx._catchCaseStatement);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 409;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    catchCaseStatement() {
        let _localctx = new CatchCaseStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, jsoniqParser.RULE_catchCaseStatement);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 411;
                this.match(jsoniqParser.Kcatch);
                this.state = 414;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case jsoniqParser.T__10:
                        {
                            this.state = 412;
                            _localctx._s11 = this.match(jsoniqParser.T__10);
                            _localctx._jokers.push(_localctx._s11);
                        }
                        break;
                    case jsoniqParser.Kfor:
                    case jsoniqParser.Klet:
                    case jsoniqParser.Kwhere:
                    case jsoniqParser.Kgroup:
                    case jsoniqParser.Kby:
                    case jsoniqParser.Korder:
                    case jsoniqParser.Kreturn:
                    case jsoniqParser.Kif:
                    case jsoniqParser.Kin:
                    case jsoniqParser.Kas:
                    case jsoniqParser.Kat:
                    case jsoniqParser.Kallowing:
                    case jsoniqParser.Kempty:
                    case jsoniqParser.Kcount:
                    case jsoniqParser.Kstable:
                    case jsoniqParser.Kascending:
                    case jsoniqParser.Kdescending:
                    case jsoniqParser.Ksome:
                    case jsoniqParser.Kevery:
                    case jsoniqParser.Ksatisfies:
                    case jsoniqParser.Kcollation:
                    case jsoniqParser.Kgreatest:
                    case jsoniqParser.Kleast:
                    case jsoniqParser.Kswitch:
                    case jsoniqParser.Kcase:
                    case jsoniqParser.Ktry:
                    case jsoniqParser.Kcatch:
                    case jsoniqParser.Kdefault:
                    case jsoniqParser.Kthen:
                    case jsoniqParser.Kelse:
                    case jsoniqParser.Ktypeswitch:
                    case jsoniqParser.Kor:
                    case jsoniqParser.Kand:
                    case jsoniqParser.Knot:
                    case jsoniqParser.Kto:
                    case jsoniqParser.Kinstance:
                    case jsoniqParser.Kof:
                    case jsoniqParser.Kstatically:
                    case jsoniqParser.Kis:
                    case jsoniqParser.Ktreat:
                    case jsoniqParser.Kcast:
                    case jsoniqParser.Kcastable:
                    case jsoniqParser.Kversion:
                    case jsoniqParser.Kjsoniq:
                    case jsoniqParser.Kunordered:
                    case jsoniqParser.Ktrue:
                    case jsoniqParser.Kfalse:
                    case jsoniqParser.Ktype:
                    case jsoniqParser.Kvalidate:
                    case jsoniqParser.Kannotate:
                    case jsoniqParser.Kdeclare:
                    case jsoniqParser.Kcontext:
                    case jsoniqParser.Kitem:
                    case jsoniqParser.Kvariable:
                    case jsoniqParser.Kinsert:
                    case jsoniqParser.Kdelete:
                    case jsoniqParser.Krename:
                    case jsoniqParser.Kreplace:
                    case jsoniqParser.Kcopy:
                    case jsoniqParser.Kmodify:
                    case jsoniqParser.Kappend:
                    case jsoniqParser.Kinto:
                    case jsoniqParser.Kvalue:
                    case jsoniqParser.Kjson:
                    case jsoniqParser.Kwith:
                    case jsoniqParser.Kposition:
                    case jsoniqParser.Kbreak:
                    case jsoniqParser.Kloop:
                    case jsoniqParser.Kcontinue:
                    case jsoniqParser.Kexit:
                    case jsoniqParser.Kreturning:
                    case jsoniqParser.Kwhile:
                    case jsoniqParser.NullLiteral:
                    case jsoniqParser.NCName:
                        {
                            this.state = 413;
                            _localctx._qname = this.qname();
                            _localctx._errors.push(_localctx._qname);
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
                this.state = 423;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jsoniqParser.T__11) {
                    {
                        {
                            this.state = 416;
                            this.match(jsoniqParser.T__11);
                            this.state = 419;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case jsoniqParser.T__10:
                                    {
                                        this.state = 417;
                                        _localctx._s11 = this.match(jsoniqParser.T__10);
                                        _localctx._jokers.push(_localctx._s11);
                                    }
                                    break;
                                case jsoniqParser.Kfor:
                                case jsoniqParser.Klet:
                                case jsoniqParser.Kwhere:
                                case jsoniqParser.Kgroup:
                                case jsoniqParser.Kby:
                                case jsoniqParser.Korder:
                                case jsoniqParser.Kreturn:
                                case jsoniqParser.Kif:
                                case jsoniqParser.Kin:
                                case jsoniqParser.Kas:
                                case jsoniqParser.Kat:
                                case jsoniqParser.Kallowing:
                                case jsoniqParser.Kempty:
                                case jsoniqParser.Kcount:
                                case jsoniqParser.Kstable:
                                case jsoniqParser.Kascending:
                                case jsoniqParser.Kdescending:
                                case jsoniqParser.Ksome:
                                case jsoniqParser.Kevery:
                                case jsoniqParser.Ksatisfies:
                                case jsoniqParser.Kcollation:
                                case jsoniqParser.Kgreatest:
                                case jsoniqParser.Kleast:
                                case jsoniqParser.Kswitch:
                                case jsoniqParser.Kcase:
                                case jsoniqParser.Ktry:
                                case jsoniqParser.Kcatch:
                                case jsoniqParser.Kdefault:
                                case jsoniqParser.Kthen:
                                case jsoniqParser.Kelse:
                                case jsoniqParser.Ktypeswitch:
                                case jsoniqParser.Kor:
                                case jsoniqParser.Kand:
                                case jsoniqParser.Knot:
                                case jsoniqParser.Kto:
                                case jsoniqParser.Kinstance:
                                case jsoniqParser.Kof:
                                case jsoniqParser.Kstatically:
                                case jsoniqParser.Kis:
                                case jsoniqParser.Ktreat:
                                case jsoniqParser.Kcast:
                                case jsoniqParser.Kcastable:
                                case jsoniqParser.Kversion:
                                case jsoniqParser.Kjsoniq:
                                case jsoniqParser.Kunordered:
                                case jsoniqParser.Ktrue:
                                case jsoniqParser.Kfalse:
                                case jsoniqParser.Ktype:
                                case jsoniqParser.Kvalidate:
                                case jsoniqParser.Kannotate:
                                case jsoniqParser.Kdeclare:
                                case jsoniqParser.Kcontext:
                                case jsoniqParser.Kitem:
                                case jsoniqParser.Kvariable:
                                case jsoniqParser.Kinsert:
                                case jsoniqParser.Kdelete:
                                case jsoniqParser.Krename:
                                case jsoniqParser.Kreplace:
                                case jsoniqParser.Kcopy:
                                case jsoniqParser.Kmodify:
                                case jsoniqParser.Kappend:
                                case jsoniqParser.Kinto:
                                case jsoniqParser.Kvalue:
                                case jsoniqParser.Kjson:
                                case jsoniqParser.Kwith:
                                case jsoniqParser.Kposition:
                                case jsoniqParser.Kbreak:
                                case jsoniqParser.Kloop:
                                case jsoniqParser.Kcontinue:
                                case jsoniqParser.Kexit:
                                case jsoniqParser.Kreturning:
                                case jsoniqParser.Kwhile:
                                case jsoniqParser.NullLiteral:
                                case jsoniqParser.NCName:
                                    {
                                        this.state = 418;
                                        _localctx._qname = this.qname();
                                        _localctx._errors.push(_localctx._qname);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 425;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 426;
                _localctx._catch_block = this.blockStatement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeSwitchStatement() {
        let _localctx = new TypeSwitchStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, jsoniqParser.RULE_typeSwitchStatement);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 428;
                this.match(jsoniqParser.Ktypeswitch);
                this.state = 429;
                this.match(jsoniqParser.T__8);
                this.state = 430;
                _localctx._cond = this.expr();
                this.state = 431;
                this.match(jsoniqParser.T__9);
                this.state = 433;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 432;
                            _localctx._caseStatement = this.caseStatement();
                            _localctx._cases.push(_localctx._caseStatement);
                        }
                    }
                    this.state = 435;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === jsoniqParser.Kcase);
                this.state = 437;
                this.match(jsoniqParser.Kdefault);
                this.state = 439;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.T__4) {
                    {
                        this.state = 438;
                        _localctx._var_ref = this.varRef();
                    }
                }
                this.state = 441;
                this.match(jsoniqParser.Kreturn);
                this.state = 442;
                _localctx._def = this.statement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    caseStatement() {
        let _localctx = new CaseStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, jsoniqParser.RULE_caseStatement);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 444;
                this.match(jsoniqParser.Kcase);
                this.state = 448;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.T__4) {
                    {
                        this.state = 445;
                        _localctx._var_ref = this.varRef();
                        this.state = 446;
                        this.match(jsoniqParser.Kas);
                    }
                }
                this.state = 450;
                _localctx._sequenceType = this.sequenceType();
                _localctx._union.push(_localctx._sequenceType);
                this.state = 455;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jsoniqParser.T__11) {
                    {
                        {
                            this.state = 451;
                            this.match(jsoniqParser.T__11);
                            this.state = 452;
                            _localctx._sequenceType = this.sequenceType();
                            _localctx._union.push(_localctx._sequenceType);
                        }
                    }
                    this.state = 457;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 458;
                this.match(jsoniqParser.Kreturn);
                this.state = 459;
                _localctx._ret = this.statement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation() {
        let _localctx = new AnnotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, jsoniqParser.RULE_annotation);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 461;
                this.match(jsoniqParser.T__12);
                this.state = 462;
                _localctx._name = this.qname();
                this.state = 473;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.T__8) {
                    {
                        this.state = 463;
                        this.match(jsoniqParser.T__8);
                        this.state = 464;
                        this.match(jsoniqParser.Literal);
                        this.state = 469;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === jsoniqParser.T__13) {
                            {
                                {
                                    this.state = 465;
                                    this.match(jsoniqParser.T__13);
                                    this.state = 466;
                                    this.match(jsoniqParser.Literal);
                                }
                            }
                            this.state = 471;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 472;
                        this.match(jsoniqParser.T__9);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotations() {
        let _localctx = new AnnotationsContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, jsoniqParser.RULE_annotations);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 478;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jsoniqParser.T__12) {
                    {
                        {
                            this.state = 475;
                            this.annotation();
                        }
                    }
                    this.state = 480;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    varDeclStatement() {
        let _localctx = new VarDeclStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, jsoniqParser.RULE_varDeclStatement);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 481;
                this.annotations();
                this.state = 482;
                this.match(jsoniqParser.Kvariable);
                this.state = 483;
                this.varDeclForStatement();
                this.state = 488;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jsoniqParser.T__13) {
                    {
                        {
                            this.state = 484;
                            this.match(jsoniqParser.T__13);
                            this.state = 485;
                            this.varDeclForStatement();
                        }
                    }
                    this.state = 490;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 491;
                this.match(jsoniqParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    varDeclForStatement() {
        let _localctx = new VarDeclForStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, jsoniqParser.RULE_varDeclForStatement);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 493;
                _localctx._var_ref = this.varRef();
                this.state = 496;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.Kas) {
                    {
                        this.state = 494;
                        this.match(jsoniqParser.Kas);
                        this.state = 495;
                        this.sequenceType();
                    }
                }
                this.state = 500;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.T__5) {
                    {
                        this.state = 498;
                        this.match(jsoniqParser.T__5);
                        this.state = 499;
                        _localctx._exprSingle = this.exprSingle();
                        _localctx._expr_vals.push(_localctx._exprSingle);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    whileStatement() {
        let _localctx = new WhileStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, jsoniqParser.RULE_whileStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 502;
                this.match(jsoniqParser.Kwhile);
                this.state = 503;
                this.match(jsoniqParser.T__8);
                this.state = 504;
                _localctx._test_expr = this.expr();
                this.state = 505;
                this.match(jsoniqParser.T__9);
                this.state = 506;
                _localctx._stmt = this.statement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    setter() {
        let _localctx = new SetterContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, jsoniqParser.RULE_setter);
        try {
            this.state = 512;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 508;
                        this.defaultCollationDecl();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 509;
                        this.orderingModeDecl();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 510;
                        this.emptyOrderDecl();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 511;
                        this.decimalFormatDecl();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    namespaceDecl() {
        let _localctx = new NamespaceDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, jsoniqParser.RULE_namespaceDecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 514;
                this.match(jsoniqParser.Kdeclare);
                this.state = 515;
                this.match(jsoniqParser.T__2);
                this.state = 516;
                this.match(jsoniqParser.NCName);
                this.state = 517;
                this.match(jsoniqParser.T__3);
                this.state = 518;
                this.uriLiteral();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotatedDecl() {
        let _localctx = new AnnotatedDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, jsoniqParser.RULE_annotatedDecl);
        try {
            this.state = 524;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 520;
                        this.functionDecl();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 521;
                        this.varDecl();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 522;
                        this.typeDecl();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 523;
                        this.contextItemDecl();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    defaultCollationDecl() {
        let _localctx = new DefaultCollationDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, jsoniqParser.RULE_defaultCollationDecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 526;
                this.match(jsoniqParser.Kdeclare);
                this.state = 527;
                this.match(jsoniqParser.Kdefault);
                this.state = 528;
                this.match(jsoniqParser.Kcollation);
                this.state = 529;
                this.uriLiteral();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    orderingModeDecl() {
        let _localctx = new OrderingModeDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, jsoniqParser.RULE_orderingModeDecl);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 531;
                this.match(jsoniqParser.Kdeclare);
                this.state = 532;
                this.match(jsoniqParser.T__14);
                this.state = 533;
                _la = this._input.LA(1);
                if (!(_la === jsoniqParser.T__15 || _la === jsoniqParser.Kunordered)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    emptyOrderDecl() {
        let _localctx = new EmptyOrderDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, jsoniqParser.RULE_emptyOrderDecl);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 535;
                this.match(jsoniqParser.Kdeclare);
                this.state = 536;
                this.match(jsoniqParser.Kdefault);
                this.state = 537;
                this.match(jsoniqParser.Korder);
                this.state = 538;
                this.match(jsoniqParser.Kempty);
                {
                    this.state = 539;
                    _localctx._emptySequenceOrder = this._input.LT(1);
                    _la = this._input.LA(1);
                    if (!(_la === jsoniqParser.Kgreatest || _la === jsoniqParser.Kleast)) {
                        _localctx._emptySequenceOrder =
                            this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    decimalFormatDecl() {
        let _localctx = new DecimalFormatDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, jsoniqParser.RULE_decimalFormatDecl);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 541;
                this.match(jsoniqParser.Kdeclare);
                this.state = 546;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case jsoniqParser.T__16:
                        {
                            {
                                this.state = 542;
                                this.match(jsoniqParser.T__16);
                                this.state = 543;
                                this.qname();
                            }
                        }
                        break;
                    case jsoniqParser.Kdefault:
                        {
                            {
                                this.state = 544;
                                this.match(jsoniqParser.Kdefault);
                                this.state = 545;
                                this.match(jsoniqParser.T__16);
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
                this.state = 554;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((_la & ~0x1f) === 0 &&
                    ((1 << _la) &
                        ((1 << jsoniqParser.T__18) |
                            (1 << jsoniqParser.T__19) |
                            (1 << jsoniqParser.T__20) |
                            (1 << jsoniqParser.T__21) |
                            (1 << jsoniqParser.T__22) |
                            (1 << jsoniqParser.T__23) |
                            (1 << jsoniqParser.T__24) |
                            (1 << jsoniqParser.T__25) |
                            (1 << jsoniqParser.T__26) |
                            (1 << jsoniqParser.T__27))) !==
                        0) {
                    {
                        {
                            this.state = 548;
                            this.dfPropertyName();
                            this.state = 549;
                            this.match(jsoniqParser.T__3);
                            this.state = 550;
                            this.stringLiteral();
                        }
                    }
                    this.state = 556;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    qname() {
        let _localctx = new QnameContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, jsoniqParser.RULE_qname);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 562;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
                    case 1:
                        {
                            this.state = 559;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case jsoniqParser.NCName:
                                    {
                                        this.state = 557;
                                        _localctx._ns = this.match(jsoniqParser.NCName);
                                    }
                                    break;
                                case jsoniqParser.Kfor:
                                case jsoniqParser.Klet:
                                case jsoniqParser.Kwhere:
                                case jsoniqParser.Kgroup:
                                case jsoniqParser.Kby:
                                case jsoniqParser.Korder:
                                case jsoniqParser.Kreturn:
                                case jsoniqParser.Kif:
                                case jsoniqParser.Kin:
                                case jsoniqParser.Kas:
                                case jsoniqParser.Kat:
                                case jsoniqParser.Kallowing:
                                case jsoniqParser.Kempty:
                                case jsoniqParser.Kcount:
                                case jsoniqParser.Kstable:
                                case jsoniqParser.Kascending:
                                case jsoniqParser.Kdescending:
                                case jsoniqParser.Ksome:
                                case jsoniqParser.Kevery:
                                case jsoniqParser.Ksatisfies:
                                case jsoniqParser.Kcollation:
                                case jsoniqParser.Kgreatest:
                                case jsoniqParser.Kleast:
                                case jsoniqParser.Kswitch:
                                case jsoniqParser.Kcase:
                                case jsoniqParser.Ktry:
                                case jsoniqParser.Kcatch:
                                case jsoniqParser.Kdefault:
                                case jsoniqParser.Kthen:
                                case jsoniqParser.Kelse:
                                case jsoniqParser.Ktypeswitch:
                                case jsoniqParser.Kor:
                                case jsoniqParser.Kand:
                                case jsoniqParser.Knot:
                                case jsoniqParser.Kto:
                                case jsoniqParser.Kinstance:
                                case jsoniqParser.Kof:
                                case jsoniqParser.Kstatically:
                                case jsoniqParser.Kis:
                                case jsoniqParser.Ktreat:
                                case jsoniqParser.Kcast:
                                case jsoniqParser.Kcastable:
                                case jsoniqParser.Kversion:
                                case jsoniqParser.Kjsoniq:
                                case jsoniqParser.Kunordered:
                                case jsoniqParser.Ktrue:
                                case jsoniqParser.Kfalse:
                                case jsoniqParser.Ktype:
                                case jsoniqParser.Kvalidate:
                                case jsoniqParser.Kannotate:
                                case jsoniqParser.Kdeclare:
                                case jsoniqParser.Kcontext:
                                case jsoniqParser.Kitem:
                                case jsoniqParser.Kvariable:
                                case jsoniqParser.Kinsert:
                                case jsoniqParser.Kdelete:
                                case jsoniqParser.Krename:
                                case jsoniqParser.Kreplace:
                                case jsoniqParser.Kcopy:
                                case jsoniqParser.Kmodify:
                                case jsoniqParser.Kappend:
                                case jsoniqParser.Kinto:
                                case jsoniqParser.Kvalue:
                                case jsoniqParser.Kjson:
                                case jsoniqParser.Kwith:
                                case jsoniqParser.Kposition:
                                case jsoniqParser.Kbreak:
                                case jsoniqParser.Kloop:
                                case jsoniqParser.Kcontinue:
                                case jsoniqParser.Kexit:
                                case jsoniqParser.Kreturning:
                                case jsoniqParser.Kwhile:
                                case jsoniqParser.NullLiteral:
                                    {
                                        this.state = 558;
                                        _localctx._nskw = this.keyWords();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                            this.state = 561;
                            this.match(jsoniqParser.T__17);
                        }
                        break;
                }
                this.state = 566;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case jsoniqParser.NCName:
                        {
                            this.state = 564;
                            _localctx._local_name = this.match(jsoniqParser.NCName);
                        }
                        break;
                    case jsoniqParser.Kfor:
                    case jsoniqParser.Klet:
                    case jsoniqParser.Kwhere:
                    case jsoniqParser.Kgroup:
                    case jsoniqParser.Kby:
                    case jsoniqParser.Korder:
                    case jsoniqParser.Kreturn:
                    case jsoniqParser.Kif:
                    case jsoniqParser.Kin:
                    case jsoniqParser.Kas:
                    case jsoniqParser.Kat:
                    case jsoniqParser.Kallowing:
                    case jsoniqParser.Kempty:
                    case jsoniqParser.Kcount:
                    case jsoniqParser.Kstable:
                    case jsoniqParser.Kascending:
                    case jsoniqParser.Kdescending:
                    case jsoniqParser.Ksome:
                    case jsoniqParser.Kevery:
                    case jsoniqParser.Ksatisfies:
                    case jsoniqParser.Kcollation:
                    case jsoniqParser.Kgreatest:
                    case jsoniqParser.Kleast:
                    case jsoniqParser.Kswitch:
                    case jsoniqParser.Kcase:
                    case jsoniqParser.Ktry:
                    case jsoniqParser.Kcatch:
                    case jsoniqParser.Kdefault:
                    case jsoniqParser.Kthen:
                    case jsoniqParser.Kelse:
                    case jsoniqParser.Ktypeswitch:
                    case jsoniqParser.Kor:
                    case jsoniqParser.Kand:
                    case jsoniqParser.Knot:
                    case jsoniqParser.Kto:
                    case jsoniqParser.Kinstance:
                    case jsoniqParser.Kof:
                    case jsoniqParser.Kstatically:
                    case jsoniqParser.Kis:
                    case jsoniqParser.Ktreat:
                    case jsoniqParser.Kcast:
                    case jsoniqParser.Kcastable:
                    case jsoniqParser.Kversion:
                    case jsoniqParser.Kjsoniq:
                    case jsoniqParser.Kunordered:
                    case jsoniqParser.Ktrue:
                    case jsoniqParser.Kfalse:
                    case jsoniqParser.Ktype:
                    case jsoniqParser.Kvalidate:
                    case jsoniqParser.Kannotate:
                    case jsoniqParser.Kdeclare:
                    case jsoniqParser.Kcontext:
                    case jsoniqParser.Kitem:
                    case jsoniqParser.Kvariable:
                    case jsoniqParser.Kinsert:
                    case jsoniqParser.Kdelete:
                    case jsoniqParser.Krename:
                    case jsoniqParser.Kreplace:
                    case jsoniqParser.Kcopy:
                    case jsoniqParser.Kmodify:
                    case jsoniqParser.Kappend:
                    case jsoniqParser.Kinto:
                    case jsoniqParser.Kvalue:
                    case jsoniqParser.Kjson:
                    case jsoniqParser.Kwith:
                    case jsoniqParser.Kposition:
                    case jsoniqParser.Kbreak:
                    case jsoniqParser.Kloop:
                    case jsoniqParser.Kcontinue:
                    case jsoniqParser.Kexit:
                    case jsoniqParser.Kreturning:
                    case jsoniqParser.Kwhile:
                    case jsoniqParser.NullLiteral:
                        {
                            this.state = 565;
                            _localctx._local_namekw = this.keyWords();
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    dfPropertyName() {
        let _localctx = new DfPropertyNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, jsoniqParser.RULE_dfPropertyName);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 568;
                _la = this._input.LA(1);
                if (!((_la & ~0x1f) === 0 &&
                    ((1 << _la) &
                        ((1 << jsoniqParser.T__18) |
                            (1 << jsoniqParser.T__19) |
                            (1 << jsoniqParser.T__20) |
                            (1 << jsoniqParser.T__21) |
                            (1 << jsoniqParser.T__22) |
                            (1 << jsoniqParser.T__23) |
                            (1 << jsoniqParser.T__24) |
                            (1 << jsoniqParser.T__25) |
                            (1 << jsoniqParser.T__26) |
                            (1 << jsoniqParser.T__27))) !==
                        0)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    moduleImport() {
        let _localctx = new ModuleImportContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, jsoniqParser.RULE_moduleImport);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 570;
                this.match(jsoniqParser.T__28);
                this.state = 571;
                this.match(jsoniqParser.T__1);
                this.state = 575;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.T__2) {
                    {
                        this.state = 572;
                        this.match(jsoniqParser.T__2);
                        this.state = 573;
                        _localctx._prefix = this.match(jsoniqParser.NCName);
                        this.state = 574;
                        this.match(jsoniqParser.T__3);
                    }
                }
                this.state = 577;
                _localctx._targetNamespace = this.uriLiteral();
                this.state = 587;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.Kat) {
                    {
                        this.state = 578;
                        this.match(jsoniqParser.Kat);
                        this.state = 579;
                        this.uriLiteral();
                        this.state = 584;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === jsoniqParser.T__13) {
                            {
                                {
                                    this.state = 580;
                                    this.match(jsoniqParser.T__13);
                                    this.state = 581;
                                    this.uriLiteral();
                                }
                            }
                            this.state = 586;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    varDecl() {
        let _localctx = new VarDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, jsoniqParser.RULE_varDecl);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 589;
                this.match(jsoniqParser.Kdeclare);
                this.state = 590;
                this.annotations();
                this.state = 591;
                this.match(jsoniqParser.Kvariable);
                this.state = 592;
                this.varRef();
                this.state = 595;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.Kas) {
                    {
                        this.state = 593;
                        this.match(jsoniqParser.Kas);
                        this.state = 594;
                        this.sequenceType();
                    }
                }
                this.state = 604;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case jsoniqParser.T__5:
                        {
                            {
                                this.state = 597;
                                this.match(jsoniqParser.T__5);
                                this.state = 598;
                                this.exprSingle();
                            }
                        }
                        break;
                    case jsoniqParser.T__29:
                        {
                            {
                                this.state = 599;
                                _localctx._external = this.match(jsoniqParser.T__29);
                                this.state = 602;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === jsoniqParser.T__5) {
                                    {
                                        this.state = 600;
                                        this.match(jsoniqParser.T__5);
                                        this.state = 601;
                                        this.exprSingle();
                                    }
                                }
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    contextItemDecl() {
        let _localctx = new ContextItemDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, jsoniqParser.RULE_contextItemDecl);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 606;
                this.match(jsoniqParser.Kdeclare);
                this.state = 607;
                this.match(jsoniqParser.Kcontext);
                this.state = 608;
                this.match(jsoniqParser.Kitem);
                this.state = 611;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.Kas) {
                    {
                        this.state = 609;
                        this.match(jsoniqParser.Kas);
                        this.state = 610;
                        this.sequenceType();
                    }
                }
                this.state = 620;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case jsoniqParser.T__5:
                        {
                            {
                                this.state = 613;
                                this.match(jsoniqParser.T__5);
                                this.state = 614;
                                this.exprSingle();
                            }
                        }
                        break;
                    case jsoniqParser.T__29:
                        {
                            {
                                this.state = 615;
                                _localctx._external = this.match(jsoniqParser.T__29);
                                this.state = 618;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === jsoniqParser.T__5) {
                                    {
                                        this.state = 616;
                                        this.match(jsoniqParser.T__5);
                                        this.state = 617;
                                        this.exprSingle();
                                    }
                                }
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionDecl() {
        let _localctx = new FunctionDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, jsoniqParser.RULE_functionDecl);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 622;
                this.match(jsoniqParser.Kdeclare);
                this.state = 623;
                this.annotations();
                this.state = 624;
                this.match(jsoniqParser.T__30);
                this.state = 625;
                _localctx._fn_name = this.qname();
                this.state = 626;
                this.match(jsoniqParser.T__8);
                this.state = 628;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.T__4) {
                    {
                        this.state = 627;
                        this.paramList();
                    }
                }
                this.state = 630;
                this.match(jsoniqParser.T__9);
                this.state = 633;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.Kas) {
                    {
                        this.state = 631;
                        this.match(jsoniqParser.Kas);
                        this.state = 632;
                        _localctx._return_type = this.sequenceType();
                    }
                }
                this.state = 640;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case jsoniqParser.T__6:
                        {
                            this.state = 635;
                            this.match(jsoniqParser.T__6);
                            {
                                this.state = 636;
                                _localctx._fn_body = this.statementsAndOptionalExpr();
                            }
                            this.state = 637;
                            this.match(jsoniqParser.T__7);
                        }
                        break;
                    case jsoniqParser.T__29:
                        {
                            this.state = 639;
                            this.match(jsoniqParser.T__29);
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeDecl() {
        let _localctx = new TypeDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, jsoniqParser.RULE_typeDecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 642;
                this.match(jsoniqParser.Kdeclare);
                this.state = 643;
                this.match(jsoniqParser.Ktype);
                this.state = 644;
                _localctx._type_name = this.qname();
                this.state = 645;
                this.match(jsoniqParser.Kas);
                this.state = 647;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 46, this._ctx)) {
                    case 1:
                        {
                            this.state = 646;
                            _localctx._schema = this.schemaLanguage();
                        }
                        break;
                }
                this.state = 649;
                _localctx._type_definition = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    schemaLanguage() {
        let _localctx = new SchemaLanguageContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, jsoniqParser.RULE_schemaLanguage);
        try {
            this.state = 657;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 47, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 651;
                        this.match(jsoniqParser.T__31);
                        this.state = 652;
                        this.match(jsoniqParser.T__32);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 653;
                        this.match(jsoniqParser.T__31);
                        this.state = 654;
                        this.match(jsoniqParser.T__33);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 655;
                        this.match(jsoniqParser.Kjson);
                        this.state = 656;
                        this.match(jsoniqParser.T__34);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    paramList() {
        let _localctx = new ParamListContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, jsoniqParser.RULE_paramList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 659;
                this.param();
                this.state = 664;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jsoniqParser.T__13) {
                    {
                        {
                            this.state = 660;
                            this.match(jsoniqParser.T__13);
                            this.state = 661;
                            this.param();
                        }
                    }
                    this.state = 666;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    param() {
        let _localctx = new ParamContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, jsoniqParser.RULE_param);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 667;
                this.match(jsoniqParser.T__4);
                this.state = 668;
                this.qname();
                this.state = 671;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.Kas) {
                    {
                        this.state = 669;
                        this.match(jsoniqParser.Kas);
                        this.state = 670;
                        this.sequenceType();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expr() {
        let _localctx = new ExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, jsoniqParser.RULE_expr);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 673;
                this.exprSingle();
                this.state = 678;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jsoniqParser.T__13) {
                    {
                        {
                            this.state = 674;
                            this.match(jsoniqParser.T__13);
                            this.state = 675;
                            this.exprSingle();
                        }
                    }
                    this.state = 680;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    exprSingle() {
        let _localctx = new ExprSingleContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, jsoniqParser.RULE_exprSingle);
        try {
            this.state = 687;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 681;
                        this.exprSimple();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 682;
                        this.flowrExpr();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 683;
                        this.switchExpr();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 684;
                        this.typeSwitchExpr();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 685;
                        this.ifExpr();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 686;
                        this.tryCatchExpr();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    exprSimple() {
        let _localctx = new ExprSimpleContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, jsoniqParser.RULE_exprSimple);
        try {
            this.state = 697;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 52, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 689;
                        this.quantifiedExpr();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 690;
                        this.orExpr();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 691;
                        this.insertExpr();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 692;
                        this.deleteExpr();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 693;
                        this.renameExpr();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 694;
                        this.replaceExpr();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 695;
                        this.transformExpr();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 696;
                        this.appendExpr();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    flowrExpr() {
        let _localctx = new FlowrExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, jsoniqParser.RULE_flowrExpr);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 701;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case jsoniqParser.Kfor:
                        {
                            this.state = 699;
                            _localctx._start_for = this.forClause();
                        }
                        break;
                    case jsoniqParser.Klet:
                        {
                            this.state = 700;
                            _localctx._start_let = this.letClause();
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
                this.state = 711;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((_la - 61) & ~0x1f) === 0 &&
                    ((1 << (_la - 61)) &
                        ((1 << (jsoniqParser.Kfor - 61)) |
                            (1 << (jsoniqParser.Klet - 61)) |
                            (1 << (jsoniqParser.Kwhere - 61)) |
                            (1 << (jsoniqParser.Kgroup - 61)) |
                            (1 << (jsoniqParser.Korder - 61)) |
                            (1 << (jsoniqParser.Kcount - 61)) |
                            (1 << (jsoniqParser.Kstable - 61)))) !==
                        0) {
                    {
                        this.state = 709;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case jsoniqParser.Kfor:
                                {
                                    this.state = 703;
                                    this.forClause();
                                }
                                break;
                            case jsoniqParser.Klet:
                                {
                                    this.state = 704;
                                    this.letClause();
                                }
                                break;
                            case jsoniqParser.Kwhere:
                                {
                                    this.state = 705;
                                    this.whereClause();
                                }
                                break;
                            case jsoniqParser.Kgroup:
                                {
                                    this.state = 706;
                                    this.groupByClause();
                                }
                                break;
                            case jsoniqParser.Korder:
                            case jsoniqParser.Kstable:
                                {
                                    this.state = 707;
                                    this.orderByClause();
                                }
                                break;
                            case jsoniqParser.Kcount:
                                {
                                    this.state = 708;
                                    this.countClause();
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                    }
                    this.state = 713;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 714;
                this.match(jsoniqParser.Kreturn);
                this.state = 715;
                _localctx._return_expr = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    forClause() {
        let _localctx = new ForClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, jsoniqParser.RULE_forClause);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 717;
                this.match(jsoniqParser.Kfor);
                this.state = 718;
                _localctx._forVar = this.forVar();
                _localctx._vars.push(_localctx._forVar);
                this.state = 723;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jsoniqParser.T__13) {
                    {
                        {
                            this.state = 719;
                            this.match(jsoniqParser.T__13);
                            this.state = 720;
                            _localctx._forVar = this.forVar();
                            _localctx._vars.push(_localctx._forVar);
                        }
                    }
                    this.state = 725;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    forVar() {
        let _localctx = new ForVarContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, jsoniqParser.RULE_forVar);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 726;
                _localctx._var_ref = this.varRef();
                this.state = 729;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.Kas) {
                    {
                        this.state = 727;
                        this.match(jsoniqParser.Kas);
                        this.state = 728;
                        _localctx._seq = this.sequenceType();
                    }
                }
                this.state = 733;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.Kallowing) {
                    {
                        this.state = 731;
                        _localctx._flag = this.match(jsoniqParser.Kallowing);
                        this.state = 732;
                        this.match(jsoniqParser.Kempty);
                    }
                }
                this.state = 737;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.Kat) {
                    {
                        this.state = 735;
                        this.match(jsoniqParser.Kat);
                        this.state = 736;
                        _localctx._at = this.varRef();
                    }
                }
                this.state = 739;
                this.match(jsoniqParser.Kin);
                this.state = 740;
                _localctx._ex = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    letClause() {
        let _localctx = new LetClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, jsoniqParser.RULE_letClause);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 742;
                this.match(jsoniqParser.Klet);
                this.state = 743;
                _localctx._letVar = this.letVar();
                _localctx._vars.push(_localctx._letVar);
                this.state = 748;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jsoniqParser.T__13) {
                    {
                        {
                            this.state = 744;
                            this.match(jsoniqParser.T__13);
                            this.state = 745;
                            _localctx._letVar = this.letVar();
                            _localctx._vars.push(_localctx._letVar);
                        }
                    }
                    this.state = 750;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    letVar() {
        let _localctx = new LetVarContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, jsoniqParser.RULE_letVar);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 751;
                _localctx._var_ref = this.varRef();
                this.state = 754;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.Kas) {
                    {
                        this.state = 752;
                        this.match(jsoniqParser.Kas);
                        this.state = 753;
                        _localctx._seq = this.sequenceType();
                    }
                }
                this.state = 756;
                this.match(jsoniqParser.T__5);
                this.state = 757;
                _localctx._ex = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    whereClause() {
        let _localctx = new WhereClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, jsoniqParser.RULE_whereClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 759;
                this.match(jsoniqParser.Kwhere);
                this.state = 760;
                this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    groupByClause() {
        let _localctx = new GroupByClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, jsoniqParser.RULE_groupByClause);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 762;
                this.match(jsoniqParser.Kgroup);
                this.state = 763;
                this.match(jsoniqParser.Kby);
                this.state = 764;
                _localctx._groupByVar = this.groupByVar();
                _localctx._vars.push(_localctx._groupByVar);
                this.state = 769;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jsoniqParser.T__13) {
                    {
                        {
                            this.state = 765;
                            this.match(jsoniqParser.T__13);
                            this.state = 766;
                            _localctx._groupByVar = this.groupByVar();
                            _localctx._vars.push(_localctx._groupByVar);
                        }
                    }
                    this.state = 771;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    groupByVar() {
        let _localctx = new GroupByVarContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, jsoniqParser.RULE_groupByVar);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 772;
                _localctx._var_ref = this.varRef();
                this.state = 779;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.T__5 || _la === jsoniqParser.Kas) {
                    {
                        this.state = 775;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === jsoniqParser.Kas) {
                            {
                                this.state = 773;
                                this.match(jsoniqParser.Kas);
                                this.state = 774;
                                _localctx._seq = this.sequenceType();
                            }
                        }
                        this.state = 777;
                        _localctx._decl = this.match(jsoniqParser.T__5);
                        this.state = 778;
                        _localctx._ex = this.exprSingle();
                    }
                }
                this.state = 783;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.Kcollation) {
                    {
                        this.state = 781;
                        this.match(jsoniqParser.Kcollation);
                        this.state = 782;
                        _localctx._uri = this.uriLiteral();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    orderByClause() {
        let _localctx = new OrderByClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, jsoniqParser.RULE_orderByClause);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 790;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case jsoniqParser.Korder:
                        {
                            {
                                this.state = 785;
                                this.match(jsoniqParser.Korder);
                                this.state = 786;
                                this.match(jsoniqParser.Kby);
                            }
                        }
                        break;
                    case jsoniqParser.Kstable:
                        {
                            {
                                this.state = 787;
                                _localctx._stb = this.match(jsoniqParser.Kstable);
                                this.state = 788;
                                this.match(jsoniqParser.Korder);
                                this.state = 789;
                                this.match(jsoniqParser.Kby);
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
                this.state = 792;
                this.orderByExpr();
                this.state = 797;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jsoniqParser.T__13) {
                    {
                        {
                            this.state = 793;
                            this.match(jsoniqParser.T__13);
                            this.state = 794;
                            this.orderByExpr();
                        }
                    }
                    this.state = 799;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    orderByExpr() {
        let _localctx = new OrderByExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, jsoniqParser.RULE_orderByExpr);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 800;
                _localctx._ex = this.exprSingle();
                this.state = 803;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case jsoniqParser.Kascending:
                        {
                            this.state = 801;
                            this.match(jsoniqParser.Kascending);
                        }
                        break;
                    case jsoniqParser.Kdescending:
                        {
                            this.state = 802;
                            _localctx._desc = this.match(jsoniqParser.Kdescending);
                        }
                        break;
                    case jsoniqParser.T__13:
                    case jsoniqParser.Kfor:
                    case jsoniqParser.Klet:
                    case jsoniqParser.Kwhere:
                    case jsoniqParser.Kgroup:
                    case jsoniqParser.Korder:
                    case jsoniqParser.Kreturn:
                    case jsoniqParser.Kempty:
                    case jsoniqParser.Kcount:
                    case jsoniqParser.Kstable:
                    case jsoniqParser.Kcollation:
                        break;
                    default:
                        break;
                }
                this.state = 810;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.Kempty) {
                    {
                        this.state = 805;
                        this.match(jsoniqParser.Kempty);
                        this.state = 808;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case jsoniqParser.Kgreatest:
                                {
                                    this.state = 806;
                                    _localctx._gr = this.match(jsoniqParser.Kgreatest);
                                }
                                break;
                            case jsoniqParser.Kleast:
                                {
                                    this.state = 807;
                                    _localctx._ls = this.match(jsoniqParser.Kleast);
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                    }
                }
                this.state = 814;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.Kcollation) {
                    {
                        this.state = 812;
                        this.match(jsoniqParser.Kcollation);
                        this.state = 813;
                        _localctx._uril = this.uriLiteral();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    countClause() {
        let _localctx = new CountClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, jsoniqParser.RULE_countClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 816;
                this.match(jsoniqParser.Kcount);
                this.state = 817;
                this.varRef();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    quantifiedExpr() {
        let _localctx = new QuantifiedExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, jsoniqParser.RULE_quantifiedExpr);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 821;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case jsoniqParser.Ksome:
                        {
                            this.state = 819;
                            _localctx._so = this.match(jsoniqParser.Ksome);
                        }
                        break;
                    case jsoniqParser.Kevery:
                        {
                            this.state = 820;
                            _localctx._ev = this.match(jsoniqParser.Kevery);
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
                this.state = 823;
                _localctx._quantifiedExprVar = this.quantifiedExprVar();
                _localctx._vars.push(_localctx._quantifiedExprVar);
                this.state = 828;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jsoniqParser.T__13) {
                    {
                        {
                            this.state = 824;
                            this.match(jsoniqParser.T__13);
                            this.state = 825;
                            _localctx._quantifiedExprVar = this.quantifiedExprVar();
                            _localctx._vars.push(_localctx._quantifiedExprVar);
                        }
                    }
                    this.state = 830;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 831;
                this.match(jsoniqParser.Ksatisfies);
                this.state = 832;
                this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    quantifiedExprVar() {
        let _localctx = new QuantifiedExprVarContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, jsoniqParser.RULE_quantifiedExprVar);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 834;
                this.varRef();
                this.state = 837;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.Kas) {
                    {
                        this.state = 835;
                        this.match(jsoniqParser.Kas);
                        this.state = 836;
                        this.sequenceType();
                    }
                }
                this.state = 839;
                this.match(jsoniqParser.Kin);
                this.state = 840;
                this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    switchExpr() {
        let _localctx = new SwitchExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, jsoniqParser.RULE_switchExpr);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 842;
                this.match(jsoniqParser.Kswitch);
                this.state = 843;
                this.match(jsoniqParser.T__8);
                this.state = 844;
                _localctx._cond = this.expr();
                this.state = 845;
                this.match(jsoniqParser.T__9);
                this.state = 847;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 846;
                            _localctx._switchCaseClause = this.switchCaseClause();
                            _localctx._cases.push(_localctx._switchCaseClause);
                        }
                    }
                    this.state = 849;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === jsoniqParser.Kcase);
                this.state = 851;
                this.match(jsoniqParser.Kdefault);
                this.state = 852;
                this.match(jsoniqParser.Kreturn);
                this.state = 853;
                _localctx._def = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    switchCaseClause() {
        let _localctx = new SwitchCaseClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, jsoniqParser.RULE_switchCaseClause);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 857;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 855;
                            this.match(jsoniqParser.Kcase);
                            this.state = 856;
                            _localctx._exprSingle = this.exprSingle();
                            _localctx._cond.push(_localctx._exprSingle);
                        }
                    }
                    this.state = 859;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === jsoniqParser.Kcase);
                this.state = 861;
                this.match(jsoniqParser.Kreturn);
                this.state = 862;
                _localctx._ret = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeSwitchExpr() {
        let _localctx = new TypeSwitchExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, jsoniqParser.RULE_typeSwitchExpr);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 864;
                this.match(jsoniqParser.Ktypeswitch);
                this.state = 865;
                this.match(jsoniqParser.T__8);
                this.state = 866;
                _localctx._cond = this.expr();
                this.state = 867;
                this.match(jsoniqParser.T__9);
                this.state = 869;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 868;
                            _localctx._caseClause = this.caseClause();
                            _localctx._cses.push(_localctx._caseClause);
                        }
                    }
                    this.state = 871;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === jsoniqParser.Kcase);
                this.state = 873;
                this.match(jsoniqParser.Kdefault);
                this.state = 875;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.T__4) {
                    {
                        this.state = 874;
                        _localctx._var_ref = this.varRef();
                    }
                }
                this.state = 877;
                this.match(jsoniqParser.Kreturn);
                this.state = 878;
                _localctx._def = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    caseClause() {
        let _localctx = new CaseClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, jsoniqParser.RULE_caseClause);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 880;
                this.match(jsoniqParser.Kcase);
                this.state = 884;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.T__4) {
                    {
                        this.state = 881;
                        _localctx._var_ref = this.varRef();
                        this.state = 882;
                        this.match(jsoniqParser.Kas);
                    }
                }
                this.state = 886;
                _localctx._sequenceType = this.sequenceType();
                _localctx._union.push(_localctx._sequenceType);
                this.state = 891;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jsoniqParser.T__11) {
                    {
                        {
                            this.state = 887;
                            this.match(jsoniqParser.T__11);
                            this.state = 888;
                            _localctx._sequenceType = this.sequenceType();
                            _localctx._union.push(_localctx._sequenceType);
                        }
                    }
                    this.state = 893;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 894;
                this.match(jsoniqParser.Kreturn);
                this.state = 895;
                _localctx._ret = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ifExpr() {
        let _localctx = new IfExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, jsoniqParser.RULE_ifExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 897;
                this.match(jsoniqParser.Kif);
                this.state = 898;
                this.match(jsoniqParser.T__8);
                this.state = 899;
                _localctx._test_condition = this.expr();
                this.state = 900;
                this.match(jsoniqParser.T__9);
                this.state = 901;
                this.match(jsoniqParser.Kthen);
                this.state = 902;
                _localctx._branch = this.exprSingle();
                this.state = 903;
                this.match(jsoniqParser.Kelse);
                this.state = 904;
                _localctx._else_branch = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    tryCatchExpr() {
        let _localctx = new TryCatchExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, jsoniqParser.RULE_tryCatchExpr);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 906;
                this.match(jsoniqParser.Ktry);
                this.state = 907;
                this.match(jsoniqParser.T__6);
                this.state = 908;
                _localctx._try_expression = this.expr();
                this.state = 909;
                this.match(jsoniqParser.T__7);
                this.state = 911;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 910;
                                    _localctx._catchClause = this.catchClause();
                                    _localctx._catches.push(_localctx._catchClause);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 913;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
                } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    catchClause() {
        let _localctx = new CatchClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, jsoniqParser.RULE_catchClause);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 915;
                this.match(jsoniqParser.Kcatch);
                this.state = 918;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case jsoniqParser.T__10:
                        {
                            this.state = 916;
                            _localctx._s11 = this.match(jsoniqParser.T__10);
                            _localctx._jokers.push(_localctx._s11);
                        }
                        break;
                    case jsoniqParser.Kfor:
                    case jsoniqParser.Klet:
                    case jsoniqParser.Kwhere:
                    case jsoniqParser.Kgroup:
                    case jsoniqParser.Kby:
                    case jsoniqParser.Korder:
                    case jsoniqParser.Kreturn:
                    case jsoniqParser.Kif:
                    case jsoniqParser.Kin:
                    case jsoniqParser.Kas:
                    case jsoniqParser.Kat:
                    case jsoniqParser.Kallowing:
                    case jsoniqParser.Kempty:
                    case jsoniqParser.Kcount:
                    case jsoniqParser.Kstable:
                    case jsoniqParser.Kascending:
                    case jsoniqParser.Kdescending:
                    case jsoniqParser.Ksome:
                    case jsoniqParser.Kevery:
                    case jsoniqParser.Ksatisfies:
                    case jsoniqParser.Kcollation:
                    case jsoniqParser.Kgreatest:
                    case jsoniqParser.Kleast:
                    case jsoniqParser.Kswitch:
                    case jsoniqParser.Kcase:
                    case jsoniqParser.Ktry:
                    case jsoniqParser.Kcatch:
                    case jsoniqParser.Kdefault:
                    case jsoniqParser.Kthen:
                    case jsoniqParser.Kelse:
                    case jsoniqParser.Ktypeswitch:
                    case jsoniqParser.Kor:
                    case jsoniqParser.Kand:
                    case jsoniqParser.Knot:
                    case jsoniqParser.Kto:
                    case jsoniqParser.Kinstance:
                    case jsoniqParser.Kof:
                    case jsoniqParser.Kstatically:
                    case jsoniqParser.Kis:
                    case jsoniqParser.Ktreat:
                    case jsoniqParser.Kcast:
                    case jsoniqParser.Kcastable:
                    case jsoniqParser.Kversion:
                    case jsoniqParser.Kjsoniq:
                    case jsoniqParser.Kunordered:
                    case jsoniqParser.Ktrue:
                    case jsoniqParser.Kfalse:
                    case jsoniqParser.Ktype:
                    case jsoniqParser.Kvalidate:
                    case jsoniqParser.Kannotate:
                    case jsoniqParser.Kdeclare:
                    case jsoniqParser.Kcontext:
                    case jsoniqParser.Kitem:
                    case jsoniqParser.Kvariable:
                    case jsoniqParser.Kinsert:
                    case jsoniqParser.Kdelete:
                    case jsoniqParser.Krename:
                    case jsoniqParser.Kreplace:
                    case jsoniqParser.Kcopy:
                    case jsoniqParser.Kmodify:
                    case jsoniqParser.Kappend:
                    case jsoniqParser.Kinto:
                    case jsoniqParser.Kvalue:
                    case jsoniqParser.Kjson:
                    case jsoniqParser.Kwith:
                    case jsoniqParser.Kposition:
                    case jsoniqParser.Kbreak:
                    case jsoniqParser.Kloop:
                    case jsoniqParser.Kcontinue:
                    case jsoniqParser.Kexit:
                    case jsoniqParser.Kreturning:
                    case jsoniqParser.Kwhile:
                    case jsoniqParser.NullLiteral:
                    case jsoniqParser.NCName:
                        {
                            this.state = 917;
                            _localctx._qname = this.qname();
                            _localctx._errors.push(_localctx._qname);
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
                this.state = 927;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jsoniqParser.T__11) {
                    {
                        {
                            this.state = 920;
                            this.match(jsoniqParser.T__11);
                            this.state = 923;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case jsoniqParser.T__10:
                                    {
                                        this.state = 921;
                                        _localctx._s11 = this.match(jsoniqParser.T__10);
                                        _localctx._jokers.push(_localctx._s11);
                                    }
                                    break;
                                case jsoniqParser.Kfor:
                                case jsoniqParser.Klet:
                                case jsoniqParser.Kwhere:
                                case jsoniqParser.Kgroup:
                                case jsoniqParser.Kby:
                                case jsoniqParser.Korder:
                                case jsoniqParser.Kreturn:
                                case jsoniqParser.Kif:
                                case jsoniqParser.Kin:
                                case jsoniqParser.Kas:
                                case jsoniqParser.Kat:
                                case jsoniqParser.Kallowing:
                                case jsoniqParser.Kempty:
                                case jsoniqParser.Kcount:
                                case jsoniqParser.Kstable:
                                case jsoniqParser.Kascending:
                                case jsoniqParser.Kdescending:
                                case jsoniqParser.Ksome:
                                case jsoniqParser.Kevery:
                                case jsoniqParser.Ksatisfies:
                                case jsoniqParser.Kcollation:
                                case jsoniqParser.Kgreatest:
                                case jsoniqParser.Kleast:
                                case jsoniqParser.Kswitch:
                                case jsoniqParser.Kcase:
                                case jsoniqParser.Ktry:
                                case jsoniqParser.Kcatch:
                                case jsoniqParser.Kdefault:
                                case jsoniqParser.Kthen:
                                case jsoniqParser.Kelse:
                                case jsoniqParser.Ktypeswitch:
                                case jsoniqParser.Kor:
                                case jsoniqParser.Kand:
                                case jsoniqParser.Knot:
                                case jsoniqParser.Kto:
                                case jsoniqParser.Kinstance:
                                case jsoniqParser.Kof:
                                case jsoniqParser.Kstatically:
                                case jsoniqParser.Kis:
                                case jsoniqParser.Ktreat:
                                case jsoniqParser.Kcast:
                                case jsoniqParser.Kcastable:
                                case jsoniqParser.Kversion:
                                case jsoniqParser.Kjsoniq:
                                case jsoniqParser.Kunordered:
                                case jsoniqParser.Ktrue:
                                case jsoniqParser.Kfalse:
                                case jsoniqParser.Ktype:
                                case jsoniqParser.Kvalidate:
                                case jsoniqParser.Kannotate:
                                case jsoniqParser.Kdeclare:
                                case jsoniqParser.Kcontext:
                                case jsoniqParser.Kitem:
                                case jsoniqParser.Kvariable:
                                case jsoniqParser.Kinsert:
                                case jsoniqParser.Kdelete:
                                case jsoniqParser.Krename:
                                case jsoniqParser.Kreplace:
                                case jsoniqParser.Kcopy:
                                case jsoniqParser.Kmodify:
                                case jsoniqParser.Kappend:
                                case jsoniqParser.Kinto:
                                case jsoniqParser.Kvalue:
                                case jsoniqParser.Kjson:
                                case jsoniqParser.Kwith:
                                case jsoniqParser.Kposition:
                                case jsoniqParser.Kbreak:
                                case jsoniqParser.Kloop:
                                case jsoniqParser.Kcontinue:
                                case jsoniqParser.Kexit:
                                case jsoniqParser.Kreturning:
                                case jsoniqParser.Kwhile:
                                case jsoniqParser.NullLiteral:
                                case jsoniqParser.NCName:
                                    {
                                        this.state = 922;
                                        _localctx._qname = this.qname();
                                        _localctx._errors.push(_localctx._qname);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 929;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 930;
                this.match(jsoniqParser.T__6);
                this.state = 931;
                _localctx._catch_expression = this.expr();
                this.state = 932;
                this.match(jsoniqParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    orExpr() {
        let _localctx = new OrExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, jsoniqParser.RULE_orExpr);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 934;
                _localctx._main_expr = this.andExpr();
                this.state = 939;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 935;
                                this.match(jsoniqParser.Kor);
                                this.state = 936;
                                _localctx._andExpr = this.andExpr();
                                _localctx._rhs.push(_localctx._andExpr);
                            }
                        }
                    }
                    this.state = 941;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    andExpr() {
        let _localctx = new AndExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, jsoniqParser.RULE_andExpr);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 942;
                _localctx._main_expr = this.notExpr();
                this.state = 947;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 943;
                                this.match(jsoniqParser.Kand);
                                this.state = 944;
                                _localctx._notExpr = this.notExpr();
                                _localctx._rhs.push(_localctx._notExpr);
                            }
                        }
                    }
                    this.state = 949;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    notExpr() {
        let _localctx = new NotExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, jsoniqParser.RULE_notExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 951;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 87, this._ctx)) {
                    case 1:
                        {
                            this.state = 950;
                            _localctx._Knot = this.match(jsoniqParser.Knot);
                            _localctx._op.push(_localctx._Knot);
                        }
                        break;
                }
                this.state = 953;
                _localctx._main_expr = this.comparisonExpr();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    comparisonExpr() {
        let _localctx = new ComparisonExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, jsoniqParser.RULE_comparisonExpr);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 955;
                _localctx._main_expr = this.stringConcatExpr();
                this.state = 958;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.T__3 ||
                    (((_la - 36) & ~0x1f) === 0 &&
                        ((1 << (_la - 36)) &
                            ((1 << (jsoniqParser.T__35 - 36)) |
                                (1 << (jsoniqParser.T__36 - 36)) |
                                (1 << (jsoniqParser.T__37 - 36)) |
                                (1 << (jsoniqParser.T__38 - 36)) |
                                (1 << (jsoniqParser.T__39 - 36)) |
                                (1 << (jsoniqParser.T__40 - 36)) |
                                (1 << (jsoniqParser.T__41 - 36)) |
                                (1 << (jsoniqParser.T__42 - 36)) |
                                (1 << (jsoniqParser.T__43 - 36)) |
                                (1 << (jsoniqParser.T__44 - 36)) |
                                (1 << (jsoniqParser.T__45 - 36)))) !==
                            0)) {
                    {
                        this.state = 956;
                        _localctx.__tset1997 = this._input.LT(1);
                        _la = this._input.LA(1);
                        if (!(_la === jsoniqParser.T__3 ||
                            (((_la - 36) & ~0x1f) === 0 &&
                                ((1 << (_la - 36)) &
                                    ((1 << (jsoniqParser.T__35 - 36)) |
                                        (1 << (jsoniqParser.T__36 - 36)) |
                                        (1 << (jsoniqParser.T__37 - 36)) |
                                        (1 << (jsoniqParser.T__38 - 36)) |
                                        (1 << (jsoniqParser.T__39 - 36)) |
                                        (1 << (jsoniqParser.T__40 - 36)) |
                                        (1 << (jsoniqParser.T__41 - 36)) |
                                        (1 << (jsoniqParser.T__42 - 36)) |
                                        (1 << (jsoniqParser.T__43 - 36)) |
                                        (1 << (jsoniqParser.T__44 - 36)) |
                                        (1 << (jsoniqParser.T__45 - 36)))) !==
                                    0))) {
                            _localctx.__tset1997 = this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        _localctx._op.push(_localctx.__tset1997);
                        this.state = 957;
                        _localctx._stringConcatExpr = this.stringConcatExpr();
                        _localctx._rhs.push(_localctx._stringConcatExpr);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    stringConcatExpr() {
        let _localctx = new StringConcatExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, jsoniqParser.RULE_stringConcatExpr);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 960;
                _localctx._main_expr = this.rangeExpr();
                this.state = 965;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jsoniqParser.T__46) {
                    {
                        {
                            this.state = 961;
                            this.match(jsoniqParser.T__46);
                            this.state = 962;
                            _localctx._rangeExpr = this.rangeExpr();
                            _localctx._rhs.push(_localctx._rangeExpr);
                        }
                    }
                    this.state = 967;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    rangeExpr() {
        let _localctx = new RangeExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, jsoniqParser.RULE_rangeExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 968;
                _localctx._main_expr = this.additiveExpr();
                this.state = 971;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 90, this._ctx)) {
                    case 1:
                        {
                            this.state = 969;
                            this.match(jsoniqParser.Kto);
                            this.state = 970;
                            _localctx._additiveExpr = this.additiveExpr();
                            _localctx._rhs.push(_localctx._additiveExpr);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    additiveExpr() {
        let _localctx = new AdditiveExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, jsoniqParser.RULE_additiveExpr);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 973;
                _localctx._main_expr = this.multiplicativeExpr();
                this.state = 978;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 974;
                                _localctx.__tset2115 = this._input.LT(1);
                                _la = this._input.LA(1);
                                if (!(_la === jsoniqParser.T__47 || _la === jsoniqParser.T__48)) {
                                    _localctx.__tset2115 = this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                _localctx._op.push(_localctx.__tset2115);
                                this.state = 975;
                                _localctx._multiplicativeExpr = this.multiplicativeExpr();
                                _localctx._rhs.push(_localctx._multiplicativeExpr);
                            }
                        }
                    }
                    this.state = 980;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    multiplicativeExpr() {
        let _localctx = new MultiplicativeExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, jsoniqParser.RULE_multiplicativeExpr);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 981;
                _localctx._main_expr = this.instanceOfExpr();
                this.state = 986;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jsoniqParser.T__10 ||
                    (((_la - 50) & ~0x1f) === 0 &&
                        ((1 << (_la - 50)) &
                            ((1 << (jsoniqParser.T__49 - 50)) |
                                (1 << (jsoniqParser.T__50 - 50)) |
                                (1 << (jsoniqParser.T__51 - 50)))) !==
                            0)) {
                    {
                        {
                            this.state = 982;
                            _localctx.__tset2148 = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (!(_la === jsoniqParser.T__10 ||
                                (((_la - 50) & ~0x1f) === 0 &&
                                    ((1 << (_la - 50)) &
                                        ((1 << (jsoniqParser.T__49 - 50)) |
                                            (1 << (jsoniqParser.T__50 - 50)) |
                                            (1 << (jsoniqParser.T__51 - 50)))) !==
                                        0))) {
                                _localctx.__tset2148 = this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            _localctx._op.push(_localctx.__tset2148);
                            this.state = 983;
                            _localctx._instanceOfExpr = this.instanceOfExpr();
                            _localctx._rhs.push(_localctx._instanceOfExpr);
                        }
                    }
                    this.state = 988;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    instanceOfExpr() {
        let _localctx = new InstanceOfExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, jsoniqParser.RULE_instanceOfExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 989;
                _localctx._main_expr = this.isStaticallyExpr();
                this.state = 993;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 93, this._ctx)) {
                    case 1:
                        {
                            this.state = 990;
                            this.match(jsoniqParser.Kinstance);
                            this.state = 991;
                            this.match(jsoniqParser.Kof);
                            this.state = 992;
                            _localctx._seq = this.sequenceType();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    isStaticallyExpr() {
        let _localctx = new IsStaticallyExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, jsoniqParser.RULE_isStaticallyExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 995;
                _localctx._main_expr = this.treatExpr();
                this.state = 999;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 94, this._ctx)) {
                    case 1:
                        {
                            this.state = 996;
                            this.match(jsoniqParser.Kis);
                            this.state = 997;
                            this.match(jsoniqParser.Kstatically);
                            this.state = 998;
                            _localctx._seq = this.sequenceType();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    treatExpr() {
        let _localctx = new TreatExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, jsoniqParser.RULE_treatExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1001;
                _localctx._main_expr = this.castableExpr();
                this.state = 1005;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 95, this._ctx)) {
                    case 1:
                        {
                            this.state = 1002;
                            this.match(jsoniqParser.Ktreat);
                            this.state = 1003;
                            this.match(jsoniqParser.Kas);
                            this.state = 1004;
                            _localctx._seq = this.sequenceType();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    castableExpr() {
        let _localctx = new CastableExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, jsoniqParser.RULE_castableExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1007;
                _localctx._main_expr = this.castExpr();
                this.state = 1011;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 96, this._ctx)) {
                    case 1:
                        {
                            this.state = 1008;
                            this.match(jsoniqParser.Kcastable);
                            this.state = 1009;
                            this.match(jsoniqParser.Kas);
                            this.state = 1010;
                            _localctx._single = this.singleType();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    castExpr() {
        let _localctx = new CastExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, jsoniqParser.RULE_castExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1013;
                _localctx._main_expr = this.arrowExpr();
                this.state = 1017;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                    case 1:
                        {
                            this.state = 1014;
                            this.match(jsoniqParser.Kcast);
                            this.state = 1015;
                            this.match(jsoniqParser.Kas);
                            this.state = 1016;
                            _localctx._single = this.singleType();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    arrowExpr() {
        let _localctx = new ArrowExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, jsoniqParser.RULE_arrowExpr);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1019;
                _localctx._main_expr = this.unaryExpr();
                this.state = 1028;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                {
                                    this.state = 1020;
                                    this.match(jsoniqParser.T__3);
                                    this.state = 1021;
                                    this.match(jsoniqParser.T__44);
                                }
                                this.state = 1023;
                                _localctx._arrowFunctionSpecifier =
                                    this.arrowFunctionSpecifier();
                                _localctx._function.push(_localctx._arrowFunctionSpecifier);
                                this.state = 1024;
                                _localctx._argumentList = this.argumentList();
                                _localctx._arguments.push(_localctx._argumentList);
                            }
                        }
                    }
                    this.state = 1030;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    arrowFunctionSpecifier() {
        let _localctx = new ArrowFunctionSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, jsoniqParser.RULE_arrowFunctionSpecifier);
        try {
            this.state = 1034;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case jsoniqParser.Kfor:
                case jsoniqParser.Klet:
                case jsoniqParser.Kwhere:
                case jsoniqParser.Kgroup:
                case jsoniqParser.Kby:
                case jsoniqParser.Korder:
                case jsoniqParser.Kreturn:
                case jsoniqParser.Kif:
                case jsoniqParser.Kin:
                case jsoniqParser.Kas:
                case jsoniqParser.Kat:
                case jsoniqParser.Kallowing:
                case jsoniqParser.Kempty:
                case jsoniqParser.Kcount:
                case jsoniqParser.Kstable:
                case jsoniqParser.Kascending:
                case jsoniqParser.Kdescending:
                case jsoniqParser.Ksome:
                case jsoniqParser.Kevery:
                case jsoniqParser.Ksatisfies:
                case jsoniqParser.Kcollation:
                case jsoniqParser.Kgreatest:
                case jsoniqParser.Kleast:
                case jsoniqParser.Kswitch:
                case jsoniqParser.Kcase:
                case jsoniqParser.Ktry:
                case jsoniqParser.Kcatch:
                case jsoniqParser.Kdefault:
                case jsoniqParser.Kthen:
                case jsoniqParser.Kelse:
                case jsoniqParser.Ktypeswitch:
                case jsoniqParser.Kor:
                case jsoniqParser.Kand:
                case jsoniqParser.Knot:
                case jsoniqParser.Kto:
                case jsoniqParser.Kinstance:
                case jsoniqParser.Kof:
                case jsoniqParser.Kstatically:
                case jsoniqParser.Kis:
                case jsoniqParser.Ktreat:
                case jsoniqParser.Kcast:
                case jsoniqParser.Kcastable:
                case jsoniqParser.Kversion:
                case jsoniqParser.Kjsoniq:
                case jsoniqParser.Kunordered:
                case jsoniqParser.Ktrue:
                case jsoniqParser.Kfalse:
                case jsoniqParser.Ktype:
                case jsoniqParser.Kvalidate:
                case jsoniqParser.Kannotate:
                case jsoniqParser.Kdeclare:
                case jsoniqParser.Kcontext:
                case jsoniqParser.Kitem:
                case jsoniqParser.Kvariable:
                case jsoniqParser.Kinsert:
                case jsoniqParser.Kdelete:
                case jsoniqParser.Krename:
                case jsoniqParser.Kreplace:
                case jsoniqParser.Kcopy:
                case jsoniqParser.Kmodify:
                case jsoniqParser.Kappend:
                case jsoniqParser.Kinto:
                case jsoniqParser.Kvalue:
                case jsoniqParser.Kjson:
                case jsoniqParser.Kwith:
                case jsoniqParser.Kposition:
                case jsoniqParser.Kbreak:
                case jsoniqParser.Kloop:
                case jsoniqParser.Kcontinue:
                case jsoniqParser.Kexit:
                case jsoniqParser.Kreturning:
                case jsoniqParser.Kwhile:
                case jsoniqParser.NullLiteral:
                case jsoniqParser.NCName:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1031;
                        this.qname();
                    }
                    break;
                case jsoniqParser.T__4:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1032;
                        this.varRef();
                    }
                    break;
                case jsoniqParser.T__8:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1033;
                        this.parenthesizedExpr();
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    unaryExpr() {
        let _localctx = new UnaryExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, jsoniqParser.RULE_unaryExpr);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1039;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jsoniqParser.T__47 || _la === jsoniqParser.T__48) {
                    {
                        {
                            this.state = 1036;
                            _localctx.__tset2345 = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (!(_la === jsoniqParser.T__47 || _la === jsoniqParser.T__48)) {
                                _localctx.__tset2345 = this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            _localctx._op.push(_localctx.__tset2345);
                        }
                    }
                    this.state = 1041;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1042;
                _localctx._main_expr = this.valueExpr();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    valueExpr() {
        let _localctx = new ValueExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, jsoniqParser.RULE_valueExpr);
        try {
            this.state = 1047;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 101, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1044;
                        _localctx._simpleMap_expr = this.simpleMapExpr();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1045;
                        _localctx._validate_expr = this.validateExpr();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1046;
                        _localctx._annotate_expr = this.annotateExpr();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    validateExpr() {
        let _localctx = new ValidateExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, jsoniqParser.RULE_validateExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1049;
                this.match(jsoniqParser.Kvalidate);
                this.state = 1050;
                this.match(jsoniqParser.Ktype);
                this.state = 1051;
                this.sequenceType();
                this.state = 1052;
                this.match(jsoniqParser.T__6);
                this.state = 1053;
                this.expr();
                this.state = 1054;
                this.match(jsoniqParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotateExpr() {
        let _localctx = new AnnotateExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, jsoniqParser.RULE_annotateExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1056;
                this.match(jsoniqParser.Kannotate);
                this.state = 1057;
                this.match(jsoniqParser.Ktype);
                this.state = 1058;
                this.sequenceType();
                this.state = 1059;
                this.match(jsoniqParser.T__6);
                this.state = 1060;
                this.expr();
                this.state = 1061;
                this.match(jsoniqParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    simpleMapExpr() {
        let _localctx = new SimpleMapExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, jsoniqParser.RULE_simpleMapExpr);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1063;
                _localctx._main_expr = this.postFixExpr();
                this.state = 1068;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jsoniqParser.T__52) {
                    {
                        {
                            this.state = 1064;
                            this.match(jsoniqParser.T__52);
                            this.state = 1065;
                            _localctx._postFixExpr = this.postFixExpr();
                            _localctx._map_expr.push(_localctx._postFixExpr);
                        }
                    }
                    this.state = 1070;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    postFixExpr() {
        let _localctx = new PostFixExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, jsoniqParser.RULE_postFixExpr);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1071;
                _localctx._main_expr = this.primaryExpr();
                this.state = 1079;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 1077;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 103, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1072;
                                        this.arrayLookup();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1073;
                                        this.predicate();
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 1074;
                                        this.objectLookup();
                                    }
                                    break;
                                case 4:
                                    {
                                        this.state = 1075;
                                        this.arrayUnboxing();
                                    }
                                    break;
                                case 5:
                                    {
                                        this.state = 1076;
                                        this.argumentList();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1081;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    arrayLookup() {
        let _localctx = new ArrayLookupContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, jsoniqParser.RULE_arrayLookup);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1082;
                this.match(jsoniqParser.T__53);
                this.state = 1083;
                this.match(jsoniqParser.T__53);
                this.state = 1084;
                this.expr();
                this.state = 1085;
                this.match(jsoniqParser.T__54);
                this.state = 1086;
                this.match(jsoniqParser.T__54);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    arrayUnboxing() {
        let _localctx = new ArrayUnboxingContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, jsoniqParser.RULE_arrayUnboxing);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1088;
                this.match(jsoniqParser.T__53);
                this.state = 1089;
                this.match(jsoniqParser.T__54);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    predicate() {
        let _localctx = new PredicateContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, jsoniqParser.RULE_predicate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1091;
                this.match(jsoniqParser.T__53);
                this.state = 1092;
                this.expr();
                this.state = 1093;
                this.match(jsoniqParser.T__54);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    objectLookup() {
        let _localctx = new ObjectLookupContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, jsoniqParser.RULE_objectLookup);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1095;
                this.match(jsoniqParser.T__55);
                this.state = 1102;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case jsoniqParser.Kfor:
                    case jsoniqParser.Klet:
                    case jsoniqParser.Kwhere:
                    case jsoniqParser.Kgroup:
                    case jsoniqParser.Kby:
                    case jsoniqParser.Korder:
                    case jsoniqParser.Kreturn:
                    case jsoniqParser.Kif:
                    case jsoniqParser.Kin:
                    case jsoniqParser.Kas:
                    case jsoniqParser.Kat:
                    case jsoniqParser.Kallowing:
                    case jsoniqParser.Kempty:
                    case jsoniqParser.Kcount:
                    case jsoniqParser.Kstable:
                    case jsoniqParser.Kascending:
                    case jsoniqParser.Kdescending:
                    case jsoniqParser.Ksome:
                    case jsoniqParser.Kevery:
                    case jsoniqParser.Ksatisfies:
                    case jsoniqParser.Kcollation:
                    case jsoniqParser.Kgreatest:
                    case jsoniqParser.Kleast:
                    case jsoniqParser.Kswitch:
                    case jsoniqParser.Kcase:
                    case jsoniqParser.Ktry:
                    case jsoniqParser.Kcatch:
                    case jsoniqParser.Kdefault:
                    case jsoniqParser.Kthen:
                    case jsoniqParser.Kelse:
                    case jsoniqParser.Ktypeswitch:
                    case jsoniqParser.Kor:
                    case jsoniqParser.Kand:
                    case jsoniqParser.Knot:
                    case jsoniqParser.Kto:
                    case jsoniqParser.Kinstance:
                    case jsoniqParser.Kof:
                    case jsoniqParser.Kstatically:
                    case jsoniqParser.Kis:
                    case jsoniqParser.Ktreat:
                    case jsoniqParser.Kcast:
                    case jsoniqParser.Kcastable:
                    case jsoniqParser.Kversion:
                    case jsoniqParser.Kjsoniq:
                    case jsoniqParser.Kunordered:
                    case jsoniqParser.Ktrue:
                    case jsoniqParser.Kfalse:
                    case jsoniqParser.Ktype:
                    case jsoniqParser.Kvalidate:
                    case jsoniqParser.Kannotate:
                    case jsoniqParser.Kdeclare:
                    case jsoniqParser.Kcontext:
                    case jsoniqParser.Kitem:
                    case jsoniqParser.Kvariable:
                    case jsoniqParser.Kinsert:
                    case jsoniqParser.Kdelete:
                    case jsoniqParser.Krename:
                    case jsoniqParser.Kreplace:
                    case jsoniqParser.Kcopy:
                    case jsoniqParser.Kmodify:
                    case jsoniqParser.Kappend:
                    case jsoniqParser.Kinto:
                    case jsoniqParser.Kvalue:
                    case jsoniqParser.Kjson:
                    case jsoniqParser.Kwith:
                    case jsoniqParser.Kposition:
                    case jsoniqParser.Kbreak:
                    case jsoniqParser.Kloop:
                    case jsoniqParser.Kcontinue:
                    case jsoniqParser.Kexit:
                    case jsoniqParser.Kreturning:
                    case jsoniqParser.Kwhile:
                    case jsoniqParser.NullLiteral:
                        {
                            this.state = 1096;
                            _localctx._kw = this.keyWords();
                        }
                        break;
                    case jsoniqParser.STRING:
                        {
                            this.state = 1097;
                            _localctx._lt = this.stringLiteral();
                        }
                        break;
                    case jsoniqParser.NCName:
                        {
                            this.state = 1098;
                            _localctx._nc = this.match(jsoniqParser.NCName);
                        }
                        break;
                    case jsoniqParser.T__8:
                        {
                            this.state = 1099;
                            _localctx._pe = this.parenthesizedExpr();
                        }
                        break;
                    case jsoniqParser.T__4:
                        {
                            this.state = 1100;
                            _localctx._vr = this.varRef();
                        }
                        break;
                    case jsoniqParser.T__56:
                        {
                            this.state = 1101;
                            _localctx._ci = this.contextItemExpr();
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    primaryExpr() {
        let _localctx = new PrimaryExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, jsoniqParser.RULE_primaryExpr);
        try {
            this.state = 1119;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 106, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1104;
                        this.match(jsoniqParser.NullLiteral);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1105;
                        this.match(jsoniqParser.Ktrue);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1106;
                        this.match(jsoniqParser.Kfalse);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1107;
                        this.match(jsoniqParser.Literal);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1108;
                        this.stringLiteral();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1109;
                        this.varRef();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1110;
                        this.parenthesizedExpr();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1111;
                        this.contextItemExpr();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1112;
                        this.objectConstructor();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1113;
                        this.functionCall();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 1114;
                        this.orderedExpr();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 1115;
                        this.unorderedExpr();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 1116;
                        this.arrayConstructor();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 1117;
                        this.functionItemExpr();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 1118;
                        this.blockExpr();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    blockExpr() {
        let _localctx = new BlockExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, jsoniqParser.RULE_blockExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1121;
                this.match(jsoniqParser.T__6);
                this.state = 1122;
                this.statementsAndExpr();
                this.state = 1123;
                this.match(jsoniqParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    varRef() {
        let _localctx = new VarRefContext(this._ctx, this.state);
        this.enterRule(_localctx, 192, jsoniqParser.RULE_varRef);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1125;
                this.match(jsoniqParser.T__4);
                this.state = 1126;
                _localctx._var_name = this.qname();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    parenthesizedExpr() {
        let _localctx = new ParenthesizedExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 194, jsoniqParser.RULE_parenthesizedExpr);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1128;
                this.match(jsoniqParser.T__8);
                this.state = 1130;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((_la & ~0x1f) === 0 &&
                    ((1 << _la) &
                        ((1 << jsoniqParser.T__4) |
                            (1 << jsoniqParser.T__6) |
                            (1 << jsoniqParser.T__8) |
                            (1 << jsoniqParser.T__12) |
                            (1 << jsoniqParser.T__15) |
                            (1 << jsoniqParser.T__30))) !==
                        0) ||
                    (((_la - 48) & ~0x1f) === 0 &&
                        ((1 << (_la - 48)) &
                            ((1 << (jsoniqParser.T__47 - 48)) |
                                (1 << (jsoniqParser.T__48 - 48)) |
                                (1 << (jsoniqParser.T__53 - 48)) |
                                (1 << (jsoniqParser.T__56 - 48)) |
                                (1 << (jsoniqParser.T__58 - 48)) |
                                (1 << (jsoniqParser.Kfor - 48)) |
                                (1 << (jsoniqParser.Klet - 48)) |
                                (1 << (jsoniqParser.Kwhere - 48)) |
                                (1 << (jsoniqParser.Kgroup - 48)) |
                                (1 << (jsoniqParser.Kby - 48)) |
                                (1 << (jsoniqParser.Korder - 48)) |
                                (1 << (jsoniqParser.Kreturn - 48)) |
                                (1 << (jsoniqParser.Kif - 48)) |
                                (1 << (jsoniqParser.Kin - 48)) |
                                (1 << (jsoniqParser.Kas - 48)) |
                                (1 << (jsoniqParser.Kat - 48)) |
                                (1 << (jsoniqParser.Kallowing - 48)) |
                                (1 << (jsoniqParser.Kempty - 48)) |
                                (1 << (jsoniqParser.Kcount - 48)) |
                                (1 << (jsoniqParser.Kstable - 48)) |
                                (1 << (jsoniqParser.Kascending - 48)) |
                                (1 << (jsoniqParser.Kdescending - 48)) |
                                (1 << (jsoniqParser.Ksome - 48)) |
                                (1 << (jsoniqParser.Kevery - 48)))) !==
                            0) ||
                    (((_la - 80) & ~0x1f) === 0 &&
                        ((1 << (_la - 80)) &
                            ((1 << (jsoniqParser.Ksatisfies - 80)) |
                                (1 << (jsoniqParser.Kcollation - 80)) |
                                (1 << (jsoniqParser.Kgreatest - 80)) |
                                (1 << (jsoniqParser.Kleast - 80)) |
                                (1 << (jsoniqParser.Kswitch - 80)) |
                                (1 << (jsoniqParser.Kcase - 80)) |
                                (1 << (jsoniqParser.Ktry - 80)) |
                                (1 << (jsoniqParser.Kcatch - 80)) |
                                (1 << (jsoniqParser.Kdefault - 80)) |
                                (1 << (jsoniqParser.Kthen - 80)) |
                                (1 << (jsoniqParser.Kelse - 80)) |
                                (1 << (jsoniqParser.Ktypeswitch - 80)) |
                                (1 << (jsoniqParser.Kor - 80)) |
                                (1 << (jsoniqParser.Kand - 80)) |
                                (1 << (jsoniqParser.Knot - 80)) |
                                (1 << (jsoniqParser.Kto - 80)) |
                                (1 << (jsoniqParser.Kinstance - 80)) |
                                (1 << (jsoniqParser.Kof - 80)) |
                                (1 << (jsoniqParser.Kstatically - 80)) |
                                (1 << (jsoniqParser.Kis - 80)) |
                                (1 << (jsoniqParser.Ktreat - 80)) |
                                (1 << (jsoniqParser.Kcast - 80)) |
                                (1 << (jsoniqParser.Kcastable - 80)) |
                                (1 << (jsoniqParser.Kversion - 80)) |
                                (1 << (jsoniqParser.Kjsoniq - 80)) |
                                (1 << (jsoniqParser.Kunordered - 80)) |
                                (1 << (jsoniqParser.Ktrue - 80)) |
                                (1 << (jsoniqParser.Kfalse - 80)) |
                                (1 << (jsoniqParser.Ktype - 80)) |
                                (1 << (jsoniqParser.Kvalidate - 80)) |
                                (1 << (jsoniqParser.Kannotate - 80)) |
                                (1 << (jsoniqParser.Kdeclare - 80)))) !==
                            0) ||
                    (((_la - 112) & ~0x1f) === 0 &&
                        ((1 << (_la - 112)) &
                            ((1 << (jsoniqParser.Kcontext - 112)) |
                                (1 << (jsoniqParser.Kitem - 112)) |
                                (1 << (jsoniqParser.Kvariable - 112)) |
                                (1 << (jsoniqParser.Kinsert - 112)) |
                                (1 << (jsoniqParser.Kdelete - 112)) |
                                (1 << (jsoniqParser.Krename - 112)) |
                                (1 << (jsoniqParser.Kreplace - 112)) |
                                (1 << (jsoniqParser.Kcopy - 112)) |
                                (1 << (jsoniqParser.Kmodify - 112)) |
                                (1 << (jsoniqParser.Kappend - 112)) |
                                (1 << (jsoniqParser.Kinto - 112)) |
                                (1 << (jsoniqParser.Kvalue - 112)) |
                                (1 << (jsoniqParser.Kjson - 112)) |
                                (1 << (jsoniqParser.Kwith - 112)) |
                                (1 << (jsoniqParser.Kposition - 112)) |
                                (1 << (jsoniqParser.Kbreak - 112)) |
                                (1 << (jsoniqParser.Kloop - 112)) |
                                (1 << (jsoniqParser.Kcontinue - 112)) |
                                (1 << (jsoniqParser.Kexit - 112)) |
                                (1 << (jsoniqParser.Kreturning - 112)) |
                                (1 << (jsoniqParser.Kwhile - 112)) |
                                (1 << (jsoniqParser.STRING - 112)) |
                                (1 << (jsoniqParser.NullLiteral - 112)) |
                                (1 << (jsoniqParser.Literal - 112)) |
                                (1 << (jsoniqParser.NCName - 112)))) !==
                            0)) {
                    {
                        this.state = 1129;
                        this.expr();
                    }
                }
                this.state = 1132;
                this.match(jsoniqParser.T__9);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    contextItemExpr() {
        let _localctx = new ContextItemExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 196, jsoniqParser.RULE_contextItemExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1134;
                this.match(jsoniqParser.T__56);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    orderedExpr() {
        let _localctx = new OrderedExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 198, jsoniqParser.RULE_orderedExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1136;
                this.match(jsoniqParser.T__15);
                this.state = 1137;
                this.match(jsoniqParser.T__6);
                this.state = 1138;
                this.expr();
                this.state = 1139;
                this.match(jsoniqParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    unorderedExpr() {
        let _localctx = new UnorderedExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 200, jsoniqParser.RULE_unorderedExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1141;
                this.match(jsoniqParser.Kunordered);
                this.state = 1142;
                this.match(jsoniqParser.T__6);
                this.state = 1143;
                this.expr();
                this.state = 1144;
                this.match(jsoniqParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionCall() {
        let _localctx = new FunctionCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 202, jsoniqParser.RULE_functionCall);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1146;
                _localctx._fn_name = this.qname();
                this.state = 1147;
                this.argumentList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    argumentList() {
        let _localctx = new ArgumentListContext(this._ctx, this.state);
        this.enterRule(_localctx, 204, jsoniqParser.RULE_argumentList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1149;
                this.match(jsoniqParser.T__8);
                this.state = 1156;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((_la & ~0x1f) === 0 &&
                    ((1 << _la) &
                        ((1 << jsoniqParser.T__4) |
                            (1 << jsoniqParser.T__6) |
                            (1 << jsoniqParser.T__8) |
                            (1 << jsoniqParser.T__12) |
                            (1 << jsoniqParser.T__15) |
                            (1 << jsoniqParser.T__30))) !==
                        0) ||
                    (((_la - 48) & ~0x1f) === 0 &&
                        ((1 << (_la - 48)) &
                            ((1 << (jsoniqParser.T__47 - 48)) |
                                (1 << (jsoniqParser.T__48 - 48)) |
                                (1 << (jsoniqParser.T__53 - 48)) |
                                (1 << (jsoniqParser.T__56 - 48)) |
                                (1 << (jsoniqParser.T__58 - 48)) |
                                (1 << (jsoniqParser.Kfor - 48)) |
                                (1 << (jsoniqParser.Klet - 48)) |
                                (1 << (jsoniqParser.Kwhere - 48)) |
                                (1 << (jsoniqParser.Kgroup - 48)) |
                                (1 << (jsoniqParser.Kby - 48)) |
                                (1 << (jsoniqParser.Korder - 48)) |
                                (1 << (jsoniqParser.Kreturn - 48)) |
                                (1 << (jsoniqParser.Kif - 48)) |
                                (1 << (jsoniqParser.Kin - 48)) |
                                (1 << (jsoniqParser.Kas - 48)) |
                                (1 << (jsoniqParser.Kat - 48)) |
                                (1 << (jsoniqParser.Kallowing - 48)) |
                                (1 << (jsoniqParser.Kempty - 48)) |
                                (1 << (jsoniqParser.Kcount - 48)) |
                                (1 << (jsoniqParser.Kstable - 48)) |
                                (1 << (jsoniqParser.Kascending - 48)) |
                                (1 << (jsoniqParser.Kdescending - 48)) |
                                (1 << (jsoniqParser.Ksome - 48)) |
                                (1 << (jsoniqParser.Kevery - 48)))) !==
                            0) ||
                    (((_la - 80) & ~0x1f) === 0 &&
                        ((1 << (_la - 80)) &
                            ((1 << (jsoniqParser.Ksatisfies - 80)) |
                                (1 << (jsoniqParser.Kcollation - 80)) |
                                (1 << (jsoniqParser.Kgreatest - 80)) |
                                (1 << (jsoniqParser.Kleast - 80)) |
                                (1 << (jsoniqParser.Kswitch - 80)) |
                                (1 << (jsoniqParser.Kcase - 80)) |
                                (1 << (jsoniqParser.Ktry - 80)) |
                                (1 << (jsoniqParser.Kcatch - 80)) |
                                (1 << (jsoniqParser.Kdefault - 80)) |
                                (1 << (jsoniqParser.Kthen - 80)) |
                                (1 << (jsoniqParser.Kelse - 80)) |
                                (1 << (jsoniqParser.Ktypeswitch - 80)) |
                                (1 << (jsoniqParser.Kor - 80)) |
                                (1 << (jsoniqParser.Kand - 80)) |
                                (1 << (jsoniqParser.Knot - 80)) |
                                (1 << (jsoniqParser.Kto - 80)) |
                                (1 << (jsoniqParser.Kinstance - 80)) |
                                (1 << (jsoniqParser.Kof - 80)) |
                                (1 << (jsoniqParser.Kstatically - 80)) |
                                (1 << (jsoniqParser.Kis - 80)) |
                                (1 << (jsoniqParser.Ktreat - 80)) |
                                (1 << (jsoniqParser.Kcast - 80)) |
                                (1 << (jsoniqParser.Kcastable - 80)) |
                                (1 << (jsoniqParser.Kversion - 80)) |
                                (1 << (jsoniqParser.Kjsoniq - 80)) |
                                (1 << (jsoniqParser.Kunordered - 80)) |
                                (1 << (jsoniqParser.Ktrue - 80)) |
                                (1 << (jsoniqParser.Kfalse - 80)) |
                                (1 << (jsoniqParser.Ktype - 80)) |
                                (1 << (jsoniqParser.Kvalidate - 80)) |
                                (1 << (jsoniqParser.Kannotate - 80)) |
                                (1 << (jsoniqParser.Kdeclare - 80)))) !==
                            0) ||
                    (((_la - 112) & ~0x1f) === 0 &&
                        ((1 << (_la - 112)) &
                            ((1 << (jsoniqParser.Kcontext - 112)) |
                                (1 << (jsoniqParser.Kitem - 112)) |
                                (1 << (jsoniqParser.Kvariable - 112)) |
                                (1 << (jsoniqParser.Kinsert - 112)) |
                                (1 << (jsoniqParser.Kdelete - 112)) |
                                (1 << (jsoniqParser.Krename - 112)) |
                                (1 << (jsoniqParser.Kreplace - 112)) |
                                (1 << (jsoniqParser.Kcopy - 112)) |
                                (1 << (jsoniqParser.Kmodify - 112)) |
                                (1 << (jsoniqParser.Kappend - 112)) |
                                (1 << (jsoniqParser.Kinto - 112)) |
                                (1 << (jsoniqParser.Kvalue - 112)) |
                                (1 << (jsoniqParser.Kjson - 112)) |
                                (1 << (jsoniqParser.Kwith - 112)) |
                                (1 << (jsoniqParser.Kposition - 112)) |
                                (1 << (jsoniqParser.Kbreak - 112)) |
                                (1 << (jsoniqParser.Kloop - 112)) |
                                (1 << (jsoniqParser.Kcontinue - 112)) |
                                (1 << (jsoniqParser.Kexit - 112)) |
                                (1 << (jsoniqParser.Kreturning - 112)) |
                                (1 << (jsoniqParser.Kwhile - 112)) |
                                (1 << (jsoniqParser.STRING - 112)) |
                                (1 << (jsoniqParser.ArgumentPlaceholder - 112)) |
                                (1 << (jsoniqParser.NullLiteral - 112)) |
                                (1 << (jsoniqParser.Literal - 112)) |
                                (1 << (jsoniqParser.NCName - 112)))) !==
                            0)) {
                    {
                        {
                            this.state = 1150;
                            _localctx._argument = this.argument();
                            _localctx._args.push(_localctx._argument);
                            this.state = 1152;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === jsoniqParser.T__13) {
                                {
                                    this.state = 1151;
                                    this.match(jsoniqParser.T__13);
                                }
                            }
                        }
                    }
                    this.state = 1158;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1159;
                this.match(jsoniqParser.T__9);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    argument() {
        let _localctx = new ArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 206, jsoniqParser.RULE_argument);
        try {
            this.state = 1163;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case jsoniqParser.T__4:
                case jsoniqParser.T__6:
                case jsoniqParser.T__8:
                case jsoniqParser.T__12:
                case jsoniqParser.T__15:
                case jsoniqParser.T__30:
                case jsoniqParser.T__47:
                case jsoniqParser.T__48:
                case jsoniqParser.T__53:
                case jsoniqParser.T__56:
                case jsoniqParser.T__58:
                case jsoniqParser.Kfor:
                case jsoniqParser.Klet:
                case jsoniqParser.Kwhere:
                case jsoniqParser.Kgroup:
                case jsoniqParser.Kby:
                case jsoniqParser.Korder:
                case jsoniqParser.Kreturn:
                case jsoniqParser.Kif:
                case jsoniqParser.Kin:
                case jsoniqParser.Kas:
                case jsoniqParser.Kat:
                case jsoniqParser.Kallowing:
                case jsoniqParser.Kempty:
                case jsoniqParser.Kcount:
                case jsoniqParser.Kstable:
                case jsoniqParser.Kascending:
                case jsoniqParser.Kdescending:
                case jsoniqParser.Ksome:
                case jsoniqParser.Kevery:
                case jsoniqParser.Ksatisfies:
                case jsoniqParser.Kcollation:
                case jsoniqParser.Kgreatest:
                case jsoniqParser.Kleast:
                case jsoniqParser.Kswitch:
                case jsoniqParser.Kcase:
                case jsoniqParser.Ktry:
                case jsoniqParser.Kcatch:
                case jsoniqParser.Kdefault:
                case jsoniqParser.Kthen:
                case jsoniqParser.Kelse:
                case jsoniqParser.Ktypeswitch:
                case jsoniqParser.Kor:
                case jsoniqParser.Kand:
                case jsoniqParser.Knot:
                case jsoniqParser.Kto:
                case jsoniqParser.Kinstance:
                case jsoniqParser.Kof:
                case jsoniqParser.Kstatically:
                case jsoniqParser.Kis:
                case jsoniqParser.Ktreat:
                case jsoniqParser.Kcast:
                case jsoniqParser.Kcastable:
                case jsoniqParser.Kversion:
                case jsoniqParser.Kjsoniq:
                case jsoniqParser.Kunordered:
                case jsoniqParser.Ktrue:
                case jsoniqParser.Kfalse:
                case jsoniqParser.Ktype:
                case jsoniqParser.Kvalidate:
                case jsoniqParser.Kannotate:
                case jsoniqParser.Kdeclare:
                case jsoniqParser.Kcontext:
                case jsoniqParser.Kitem:
                case jsoniqParser.Kvariable:
                case jsoniqParser.Kinsert:
                case jsoniqParser.Kdelete:
                case jsoniqParser.Krename:
                case jsoniqParser.Kreplace:
                case jsoniqParser.Kcopy:
                case jsoniqParser.Kmodify:
                case jsoniqParser.Kappend:
                case jsoniqParser.Kinto:
                case jsoniqParser.Kvalue:
                case jsoniqParser.Kjson:
                case jsoniqParser.Kwith:
                case jsoniqParser.Kposition:
                case jsoniqParser.Kbreak:
                case jsoniqParser.Kloop:
                case jsoniqParser.Kcontinue:
                case jsoniqParser.Kexit:
                case jsoniqParser.Kreturning:
                case jsoniqParser.Kwhile:
                case jsoniqParser.STRING:
                case jsoniqParser.NullLiteral:
                case jsoniqParser.Literal:
                case jsoniqParser.NCName:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1161;
                        this.exprSingle();
                    }
                    break;
                case jsoniqParser.ArgumentPlaceholder:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1162;
                        this.match(jsoniqParser.ArgumentPlaceholder);
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionItemExpr() {
        let _localctx = new FunctionItemExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 208, jsoniqParser.RULE_functionItemExpr);
        try {
            this.state = 1167;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 111, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1165;
                        this.namedFunctionRef();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1166;
                        this.inlineFunctionExpr();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    namedFunctionRef() {
        let _localctx = new NamedFunctionRefContext(this._ctx, this.state);
        this.enterRule(_localctx, 210, jsoniqParser.RULE_namedFunctionRef);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1169;
                _localctx._fn_name = this.qname();
                this.state = 1170;
                this.match(jsoniqParser.T__57);
                this.state = 1171;
                _localctx._arity = this.match(jsoniqParser.Literal);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    inlineFunctionExpr() {
        let _localctx = new InlineFunctionExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 212, jsoniqParser.RULE_inlineFunctionExpr);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1173;
                this.annotations();
                this.state = 1174;
                this.match(jsoniqParser.T__30);
                this.state = 1175;
                this.match(jsoniqParser.T__8);
                this.state = 1177;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.T__4) {
                    {
                        this.state = 1176;
                        this.paramList();
                    }
                }
                this.state = 1179;
                this.match(jsoniqParser.T__9);
                this.state = 1182;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.Kas) {
                    {
                        this.state = 1180;
                        this.match(jsoniqParser.Kas);
                        this.state = 1181;
                        _localctx._return_type = this.sequenceType();
                    }
                }
                {
                    this.state = 1184;
                    this.match(jsoniqParser.T__6);
                    {
                        this.state = 1185;
                        _localctx._fn_body = this.statementsAndOptionalExpr();
                    }
                    this.state = 1186;
                    this.match(jsoniqParser.T__7);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    insertExpr() {
        let _localctx = new InsertExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 214, jsoniqParser.RULE_insertExpr);
        let _la;
        try {
            this.state = 1211;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 116, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1188;
                        this.match(jsoniqParser.Kinsert);
                        this.state = 1189;
                        this.match(jsoniqParser.Kjson);
                        this.state = 1190;
                        _localctx._to_insert_expr = this.exprSingle();
                        this.state = 1191;
                        this.match(jsoniqParser.Kinto);
                        this.state = 1192;
                        _localctx._main_expr = this.exprSingle();
                        this.state = 1196;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 114, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1193;
                                    this.match(jsoniqParser.Kat);
                                    this.state = 1194;
                                    this.match(jsoniqParser.Kposition);
                                    this.state = 1195;
                                    _localctx._pos_expr = this.exprSingle();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1198;
                        this.match(jsoniqParser.Kinsert);
                        this.state = 1199;
                        this.match(jsoniqParser.Kjson);
                        this.state = 1200;
                        this.pairConstructor();
                        this.state = 1205;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === jsoniqParser.T__13) {
                            {
                                {
                                    this.state = 1201;
                                    this.match(jsoniqParser.T__13);
                                    this.state = 1202;
                                    this.pairConstructor();
                                }
                            }
                            this.state = 1207;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1208;
                        this.match(jsoniqParser.Kinto);
                        this.state = 1209;
                        _localctx._main_expr = this.exprSingle();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    deleteExpr() {
        let _localctx = new DeleteExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 216, jsoniqParser.RULE_deleteExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1213;
                this.match(jsoniqParser.Kdelete);
                this.state = 1214;
                this.match(jsoniqParser.Kjson);
                this.state = 1215;
                this.updateLocator();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    renameExpr() {
        let _localctx = new RenameExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 218, jsoniqParser.RULE_renameExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1217;
                this.match(jsoniqParser.Krename);
                this.state = 1218;
                this.match(jsoniqParser.Kjson);
                this.state = 1219;
                this.updateLocator();
                this.state = 1220;
                this.match(jsoniqParser.Kas);
                this.state = 1221;
                _localctx._name_expr = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    replaceExpr() {
        let _localctx = new ReplaceExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 220, jsoniqParser.RULE_replaceExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1223;
                this.match(jsoniqParser.Kreplace);
                this.state = 1224;
                this.match(jsoniqParser.Kjson);
                this.state = 1225;
                this.match(jsoniqParser.Kvalue);
                this.state = 1226;
                this.match(jsoniqParser.Kof);
                this.state = 1227;
                this.updateLocator();
                this.state = 1228;
                this.match(jsoniqParser.Kwith);
                this.state = 1229;
                _localctx._replacer_expr = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    transformExpr() {
        let _localctx = new TransformExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 222, jsoniqParser.RULE_transformExpr);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1231;
                this.match(jsoniqParser.Kcopy);
                this.state = 1232;
                this.match(jsoniqParser.Kjson);
                this.state = 1233;
                this.copyDecl();
                this.state = 1238;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === jsoniqParser.T__13) {
                    {
                        {
                            this.state = 1234;
                            this.match(jsoniqParser.T__13);
                            this.state = 1235;
                            this.copyDecl();
                        }
                    }
                    this.state = 1240;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1241;
                this.match(jsoniqParser.Kmodify);
                this.state = 1242;
                _localctx._mod_expr = this.exprSingle();
                this.state = 1243;
                this.match(jsoniqParser.Kreturn);
                this.state = 1244;
                _localctx._ret_expr = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    appendExpr() {
        let _localctx = new AppendExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 224, jsoniqParser.RULE_appendExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1246;
                this.match(jsoniqParser.Kappend);
                this.state = 1247;
                this.match(jsoniqParser.Kjson);
                this.state = 1248;
                _localctx._to_append_expr = this.exprSingle();
                this.state = 1249;
                this.match(jsoniqParser.Kinto);
                this.state = 1250;
                _localctx._array_expr = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    updateLocator() {
        let _localctx = new UpdateLocatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 226, jsoniqParser.RULE_updateLocator);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1252;
                _localctx._main_expr = this.primaryExpr();
                this.state = 1255;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 1255;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case jsoniqParser.T__53:
                                        {
                                            this.state = 1253;
                                            this.arrayLookup();
                                        }
                                        break;
                                    case jsoniqParser.T__55:
                                        {
                                            this.state = 1254;
                                            this.objectLookup();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException(this);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 1257;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
                } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    copyDecl() {
        let _localctx = new CopyDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 228, jsoniqParser.RULE_copyDecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1259;
                _localctx._var_ref = this.varRef();
                this.state = 1260;
                this.match(jsoniqParser.T__5);
                this.state = 1261;
                _localctx._src_expr = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    sequenceType() {
        let _localctx = new SequenceTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 230, jsoniqParser.RULE_sequenceType);
        try {
            this.state = 1271;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case jsoniqParser.T__8:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1263;
                        this.match(jsoniqParser.T__8);
                        this.state = 1264;
                        this.match(jsoniqParser.T__9);
                    }
                    break;
                case jsoniqParser.T__30:
                case jsoniqParser.Kfor:
                case jsoniqParser.Klet:
                case jsoniqParser.Kwhere:
                case jsoniqParser.Kgroup:
                case jsoniqParser.Kby:
                case jsoniqParser.Korder:
                case jsoniqParser.Kreturn:
                case jsoniqParser.Kif:
                case jsoniqParser.Kin:
                case jsoniqParser.Kas:
                case jsoniqParser.Kat:
                case jsoniqParser.Kallowing:
                case jsoniqParser.Kempty:
                case jsoniqParser.Kcount:
                case jsoniqParser.Kstable:
                case jsoniqParser.Kascending:
                case jsoniqParser.Kdescending:
                case jsoniqParser.Ksome:
                case jsoniqParser.Kevery:
                case jsoniqParser.Ksatisfies:
                case jsoniqParser.Kcollation:
                case jsoniqParser.Kgreatest:
                case jsoniqParser.Kleast:
                case jsoniqParser.Kswitch:
                case jsoniqParser.Kcase:
                case jsoniqParser.Ktry:
                case jsoniqParser.Kcatch:
                case jsoniqParser.Kdefault:
                case jsoniqParser.Kthen:
                case jsoniqParser.Kelse:
                case jsoniqParser.Ktypeswitch:
                case jsoniqParser.Kor:
                case jsoniqParser.Kand:
                case jsoniqParser.Knot:
                case jsoniqParser.Kto:
                case jsoniqParser.Kinstance:
                case jsoniqParser.Kof:
                case jsoniqParser.Kstatically:
                case jsoniqParser.Kis:
                case jsoniqParser.Ktreat:
                case jsoniqParser.Kcast:
                case jsoniqParser.Kcastable:
                case jsoniqParser.Kversion:
                case jsoniqParser.Kjsoniq:
                case jsoniqParser.Kunordered:
                case jsoniqParser.Ktrue:
                case jsoniqParser.Kfalse:
                case jsoniqParser.Ktype:
                case jsoniqParser.Kvalidate:
                case jsoniqParser.Kannotate:
                case jsoniqParser.Kdeclare:
                case jsoniqParser.Kcontext:
                case jsoniqParser.Kitem:
                case jsoniqParser.Kvariable:
                case jsoniqParser.Kinsert:
                case jsoniqParser.Kdelete:
                case jsoniqParser.Krename:
                case jsoniqParser.Kreplace:
                case jsoniqParser.Kcopy:
                case jsoniqParser.Kmodify:
                case jsoniqParser.Kappend:
                case jsoniqParser.Kinto:
                case jsoniqParser.Kvalue:
                case jsoniqParser.Kjson:
                case jsoniqParser.Kwith:
                case jsoniqParser.Kposition:
                case jsoniqParser.Kbreak:
                case jsoniqParser.Kloop:
                case jsoniqParser.Kcontinue:
                case jsoniqParser.Kexit:
                case jsoniqParser.Kreturning:
                case jsoniqParser.Kwhile:
                case jsoniqParser.NullLiteral:
                case jsoniqParser.NCName:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1265;
                        _localctx._item = this.itemType();
                        this.state = 1269;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 120, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1266;
                                    _localctx._s134 = this.match(jsoniqParser.ArgumentPlaceholder);
                                    _localctx._question.push(_localctx._s134);
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1267;
                                    _localctx._s11 = this.match(jsoniqParser.T__10);
                                    _localctx._star.push(_localctx._s11);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1268;
                                    _localctx._s48 = this.match(jsoniqParser.T__47);
                                    _localctx._plus.push(_localctx._s48);
                                }
                                break;
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    objectConstructor() {
        let _localctx = new ObjectConstructorContext(this._ctx, this.state);
        this.enterRule(_localctx, 232, jsoniqParser.RULE_objectConstructor);
        let _la;
        try {
            this.state = 1289;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case jsoniqParser.T__6:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1273;
                        this.match(jsoniqParser.T__6);
                        this.state = 1282;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((_la & ~0x1f) === 0 &&
                            ((1 << _la) &
                                ((1 << jsoniqParser.T__4) |
                                    (1 << jsoniqParser.T__6) |
                                    (1 << jsoniqParser.T__8) |
                                    (1 << jsoniqParser.T__12) |
                                    (1 << jsoniqParser.T__15) |
                                    (1 << jsoniqParser.T__30))) !==
                                0) ||
                            (((_la - 48) & ~0x1f) === 0 &&
                                ((1 << (_la - 48)) &
                                    ((1 << (jsoniqParser.T__47 - 48)) |
                                        (1 << (jsoniqParser.T__48 - 48)) |
                                        (1 << (jsoniqParser.T__53 - 48)) |
                                        (1 << (jsoniqParser.T__56 - 48)) |
                                        (1 << (jsoniqParser.T__58 - 48)) |
                                        (1 << (jsoniqParser.Kfor - 48)) |
                                        (1 << (jsoniqParser.Klet - 48)) |
                                        (1 << (jsoniqParser.Kwhere - 48)) |
                                        (1 << (jsoniqParser.Kgroup - 48)) |
                                        (1 << (jsoniqParser.Kby - 48)) |
                                        (1 << (jsoniqParser.Korder - 48)) |
                                        (1 << (jsoniqParser.Kreturn - 48)) |
                                        (1 << (jsoniqParser.Kif - 48)) |
                                        (1 << (jsoniqParser.Kin - 48)) |
                                        (1 << (jsoniqParser.Kas - 48)) |
                                        (1 << (jsoniqParser.Kat - 48)) |
                                        (1 << (jsoniqParser.Kallowing - 48)) |
                                        (1 << (jsoniqParser.Kempty - 48)) |
                                        (1 << (jsoniqParser.Kcount - 48)) |
                                        (1 << (jsoniqParser.Kstable - 48)) |
                                        (1 << (jsoniqParser.Kascending - 48)) |
                                        (1 << (jsoniqParser.Kdescending - 48)) |
                                        (1 << (jsoniqParser.Ksome - 48)) |
                                        (1 << (jsoniqParser.Kevery - 48)))) !==
                                    0) ||
                            (((_la - 80) & ~0x1f) === 0 &&
                                ((1 << (_la - 80)) &
                                    ((1 << (jsoniqParser.Ksatisfies - 80)) |
                                        (1 << (jsoniqParser.Kcollation - 80)) |
                                        (1 << (jsoniqParser.Kgreatest - 80)) |
                                        (1 << (jsoniqParser.Kleast - 80)) |
                                        (1 << (jsoniqParser.Kswitch - 80)) |
                                        (1 << (jsoniqParser.Kcase - 80)) |
                                        (1 << (jsoniqParser.Ktry - 80)) |
                                        (1 << (jsoniqParser.Kcatch - 80)) |
                                        (1 << (jsoniqParser.Kdefault - 80)) |
                                        (1 << (jsoniqParser.Kthen - 80)) |
                                        (1 << (jsoniqParser.Kelse - 80)) |
                                        (1 << (jsoniqParser.Ktypeswitch - 80)) |
                                        (1 << (jsoniqParser.Kor - 80)) |
                                        (1 << (jsoniqParser.Kand - 80)) |
                                        (1 << (jsoniqParser.Knot - 80)) |
                                        (1 << (jsoniqParser.Kto - 80)) |
                                        (1 << (jsoniqParser.Kinstance - 80)) |
                                        (1 << (jsoniqParser.Kof - 80)) |
                                        (1 << (jsoniqParser.Kstatically - 80)) |
                                        (1 << (jsoniqParser.Kis - 80)) |
                                        (1 << (jsoniqParser.Ktreat - 80)) |
                                        (1 << (jsoniqParser.Kcast - 80)) |
                                        (1 << (jsoniqParser.Kcastable - 80)) |
                                        (1 << (jsoniqParser.Kversion - 80)) |
                                        (1 << (jsoniqParser.Kjsoniq - 80)) |
                                        (1 << (jsoniqParser.Kunordered - 80)) |
                                        (1 << (jsoniqParser.Ktrue - 80)) |
                                        (1 << (jsoniqParser.Kfalse - 80)) |
                                        (1 << (jsoniqParser.Ktype - 80)) |
                                        (1 << (jsoniqParser.Kvalidate - 80)) |
                                        (1 << (jsoniqParser.Kannotate - 80)) |
                                        (1 << (jsoniqParser.Kdeclare - 80)))) !==
                                    0) ||
                            (((_la - 112) & ~0x1f) === 0 &&
                                ((1 << (_la - 112)) &
                                    ((1 << (jsoniqParser.Kcontext - 112)) |
                                        (1 << (jsoniqParser.Kitem - 112)) |
                                        (1 << (jsoniqParser.Kvariable - 112)) |
                                        (1 << (jsoniqParser.Kinsert - 112)) |
                                        (1 << (jsoniqParser.Kdelete - 112)) |
                                        (1 << (jsoniqParser.Krename - 112)) |
                                        (1 << (jsoniqParser.Kreplace - 112)) |
                                        (1 << (jsoniqParser.Kcopy - 112)) |
                                        (1 << (jsoniqParser.Kmodify - 112)) |
                                        (1 << (jsoniqParser.Kappend - 112)) |
                                        (1 << (jsoniqParser.Kinto - 112)) |
                                        (1 << (jsoniqParser.Kvalue - 112)) |
                                        (1 << (jsoniqParser.Kjson - 112)) |
                                        (1 << (jsoniqParser.Kwith - 112)) |
                                        (1 << (jsoniqParser.Kposition - 112)) |
                                        (1 << (jsoniqParser.Kbreak - 112)) |
                                        (1 << (jsoniqParser.Kloop - 112)) |
                                        (1 << (jsoniqParser.Kcontinue - 112)) |
                                        (1 << (jsoniqParser.Kexit - 112)) |
                                        (1 << (jsoniqParser.Kreturning - 112)) |
                                        (1 << (jsoniqParser.Kwhile - 112)) |
                                        (1 << (jsoniqParser.STRING - 112)) |
                                        (1 << (jsoniqParser.NullLiteral - 112)) |
                                        (1 << (jsoniqParser.Literal - 112)) |
                                        (1 << (jsoniqParser.NCName - 112)))) !==
                                    0)) {
                            {
                                this.state = 1274;
                                this.pairConstructor();
                                this.state = 1279;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === jsoniqParser.T__13) {
                                    {
                                        {
                                            this.state = 1275;
                                            this.match(jsoniqParser.T__13);
                                            this.state = 1276;
                                            this.pairConstructor();
                                        }
                                    }
                                    this.state = 1281;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 1284;
                        this.match(jsoniqParser.T__7);
                    }
                    break;
                case jsoniqParser.T__58:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1285;
                        _localctx._s59 = this.match(jsoniqParser.T__58);
                        _localctx._merge_operator.push(_localctx._s59);
                        this.state = 1286;
                        this.expr();
                        this.state = 1287;
                        this.match(jsoniqParser.T__59);
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    itemType() {
        let _localctx = new ItemTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 234, jsoniqParser.RULE_itemType);
        try {
            this.state = 1294;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 125, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1291;
                        this.qname();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1292;
                        this.match(jsoniqParser.NullLiteral);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1293;
                        this.functionTest();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionTest() {
        let _localctx = new FunctionTestContext(this._ctx, this.state);
        this.enterRule(_localctx, 236, jsoniqParser.RULE_functionTest);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1298;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 126, this._ctx)) {
                    case 1:
                        {
                            this.state = 1296;
                            this.anyFunctionTest();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1297;
                            this.typedFunctionTest();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    anyFunctionTest() {
        let _localctx = new AnyFunctionTestContext(this._ctx, this.state);
        this.enterRule(_localctx, 238, jsoniqParser.RULE_anyFunctionTest);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1300;
                this.match(jsoniqParser.T__30);
                this.state = 1301;
                this.match(jsoniqParser.T__8);
                this.state = 1302;
                this.match(jsoniqParser.T__10);
                this.state = 1303;
                this.match(jsoniqParser.T__9);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typedFunctionTest() {
        let _localctx = new TypedFunctionTestContext(this._ctx, this.state);
        this.enterRule(_localctx, 240, jsoniqParser.RULE_typedFunctionTest);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1305;
                this.match(jsoniqParser.T__30);
                this.state = 1306;
                this.match(jsoniqParser.T__8);
                this.state = 1315;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === jsoniqParser.T__8 ||
                    _la === jsoniqParser.T__30 ||
                    (((_la - 61) & ~0x1f) === 0 &&
                        ((1 << (_la - 61)) &
                            ((1 << (jsoniqParser.Kfor - 61)) |
                                (1 << (jsoniqParser.Klet - 61)) |
                                (1 << (jsoniqParser.Kwhere - 61)) |
                                (1 << (jsoniqParser.Kgroup - 61)) |
                                (1 << (jsoniqParser.Kby - 61)) |
                                (1 << (jsoniqParser.Korder - 61)) |
                                (1 << (jsoniqParser.Kreturn - 61)) |
                                (1 << (jsoniqParser.Kif - 61)) |
                                (1 << (jsoniqParser.Kin - 61)) |
                                (1 << (jsoniqParser.Kas - 61)) |
                                (1 << (jsoniqParser.Kat - 61)) |
                                (1 << (jsoniqParser.Kallowing - 61)) |
                                (1 << (jsoniqParser.Kempty - 61)) |
                                (1 << (jsoniqParser.Kcount - 61)) |
                                (1 << (jsoniqParser.Kstable - 61)) |
                                (1 << (jsoniqParser.Kascending - 61)) |
                                (1 << (jsoniqParser.Kdescending - 61)) |
                                (1 << (jsoniqParser.Ksome - 61)) |
                                (1 << (jsoniqParser.Kevery - 61)) |
                                (1 << (jsoniqParser.Ksatisfies - 61)) |
                                (1 << (jsoniqParser.Kcollation - 61)) |
                                (1 << (jsoniqParser.Kgreatest - 61)) |
                                (1 << (jsoniqParser.Kleast - 61)) |
                                (1 << (jsoniqParser.Kswitch - 61)) |
                                (1 << (jsoniqParser.Kcase - 61)) |
                                (1 << (jsoniqParser.Ktry - 61)) |
                                (1 << (jsoniqParser.Kcatch - 61)) |
                                (1 << (jsoniqParser.Kdefault - 61)) |
                                (1 << (jsoniqParser.Kthen - 61)) |
                                (1 << (jsoniqParser.Kelse - 61)) |
                                (1 << (jsoniqParser.Ktypeswitch - 61)) |
                                (1 << (jsoniqParser.Kor - 61)))) !==
                            0) ||
                    (((_la - 93) & ~0x1f) === 0 &&
                        ((1 << (_la - 93)) &
                            ((1 << (jsoniqParser.Kand - 93)) |
                                (1 << (jsoniqParser.Knot - 93)) |
                                (1 << (jsoniqParser.Kto - 93)) |
                                (1 << (jsoniqParser.Kinstance - 93)) |
                                (1 << (jsoniqParser.Kof - 93)) |
                                (1 << (jsoniqParser.Kstatically - 93)) |
                                (1 << (jsoniqParser.Kis - 93)) |
                                (1 << (jsoniqParser.Ktreat - 93)) |
                                (1 << (jsoniqParser.Kcast - 93)) |
                                (1 << (jsoniqParser.Kcastable - 93)) |
                                (1 << (jsoniqParser.Kversion - 93)) |
                                (1 << (jsoniqParser.Kjsoniq - 93)) |
                                (1 << (jsoniqParser.Kunordered - 93)) |
                                (1 << (jsoniqParser.Ktrue - 93)) |
                                (1 << (jsoniqParser.Kfalse - 93)) |
                                (1 << (jsoniqParser.Ktype - 93)) |
                                (1 << (jsoniqParser.Kvalidate - 93)) |
                                (1 << (jsoniqParser.Kannotate - 93)) |
                                (1 << (jsoniqParser.Kdeclare - 93)) |
                                (1 << (jsoniqParser.Kcontext - 93)) |
                                (1 << (jsoniqParser.Kitem - 93)) |
                                (1 << (jsoniqParser.Kvariable - 93)) |
                                (1 << (jsoniqParser.Kinsert - 93)) |
                                (1 << (jsoniqParser.Kdelete - 93)) |
                                (1 << (jsoniqParser.Krename - 93)) |
                                (1 << (jsoniqParser.Kreplace - 93)) |
                                (1 << (jsoniqParser.Kcopy - 93)) |
                                (1 << (jsoniqParser.Kmodify - 93)) |
                                (1 << (jsoniqParser.Kappend - 93)) |
                                (1 << (jsoniqParser.Kinto - 93)) |
                                (1 << (jsoniqParser.Kvalue - 93)) |
                                (1 << (jsoniqParser.Kjson - 93)))) !==
                            0) ||
                    (((_la - 125) & ~0x1f) === 0 &&
                        ((1 << (_la - 125)) &
                            ((1 << (jsoniqParser.Kwith - 125)) |
                                (1 << (jsoniqParser.Kposition - 125)) |
                                (1 << (jsoniqParser.Kbreak - 125)) |
                                (1 << (jsoniqParser.Kloop - 125)) |
                                (1 << (jsoniqParser.Kcontinue - 125)) |
                                (1 << (jsoniqParser.Kexit - 125)) |
                                (1 << (jsoniqParser.Kreturning - 125)) |
                                (1 << (jsoniqParser.Kwhile - 125)) |
                                (1 << (jsoniqParser.NullLiteral - 125)) |
                                (1 << (jsoniqParser.NCName - 125)))) !==
                            0)) {
                    {
                        this.state = 1307;
                        _localctx._sequenceType = this.sequenceType();
                        _localctx._st.push(_localctx._sequenceType);
                        this.state = 1312;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === jsoniqParser.T__13) {
                            {
                                {
                                    this.state = 1308;
                                    this.match(jsoniqParser.T__13);
                                    this.state = 1309;
                                    _localctx._sequenceType = this.sequenceType();
                                    _localctx._st.push(_localctx._sequenceType);
                                }
                            }
                            this.state = 1314;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 1317;
                this.match(jsoniqParser.T__9);
                this.state = 1318;
                this.match(jsoniqParser.Kas);
                this.state = 1319;
                _localctx._rt = this.sequenceType();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    singleType() {
        let _localctx = new SingleTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 242, jsoniqParser.RULE_singleType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1321;
                _localctx._item = this.itemType();
                this.state = 1323;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 129, this._ctx)) {
                    case 1:
                        {
                            this.state = 1322;
                            _localctx._s134 = this.match(jsoniqParser.ArgumentPlaceholder);
                            _localctx._question.push(_localctx._s134);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    pairConstructor() {
        let _localctx = new PairConstructorContext(this._ctx, this.state);
        this.enterRule(_localctx, 244, jsoniqParser.RULE_pairConstructor);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1327;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 130, this._ctx)) {
                    case 1:
                        {
                            this.state = 1325;
                            _localctx._lhs = this.exprSingle();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1326;
                            _localctx._name = this.match(jsoniqParser.NCName);
                        }
                        break;
                }
                this.state = 1329;
                _la = this._input.LA(1);
                if (!(_la === jsoniqParser.T__17 ||
                    _la === jsoniqParser.ArgumentPlaceholder)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1330;
                _localctx._rhs = this.exprSingle();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    arrayConstructor() {
        let _localctx = new ArrayConstructorContext(this._ctx, this.state);
        this.enterRule(_localctx, 246, jsoniqParser.RULE_arrayConstructor);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1332;
                this.match(jsoniqParser.T__53);
                this.state = 1334;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((_la & ~0x1f) === 0 &&
                    ((1 << _la) &
                        ((1 << jsoniqParser.T__4) |
                            (1 << jsoniqParser.T__6) |
                            (1 << jsoniqParser.T__8) |
                            (1 << jsoniqParser.T__12) |
                            (1 << jsoniqParser.T__15) |
                            (1 << jsoniqParser.T__30))) !==
                        0) ||
                    (((_la - 48) & ~0x1f) === 0 &&
                        ((1 << (_la - 48)) &
                            ((1 << (jsoniqParser.T__47 - 48)) |
                                (1 << (jsoniqParser.T__48 - 48)) |
                                (1 << (jsoniqParser.T__53 - 48)) |
                                (1 << (jsoniqParser.T__56 - 48)) |
                                (1 << (jsoniqParser.T__58 - 48)) |
                                (1 << (jsoniqParser.Kfor - 48)) |
                                (1 << (jsoniqParser.Klet - 48)) |
                                (1 << (jsoniqParser.Kwhere - 48)) |
                                (1 << (jsoniqParser.Kgroup - 48)) |
                                (1 << (jsoniqParser.Kby - 48)) |
                                (1 << (jsoniqParser.Korder - 48)) |
                                (1 << (jsoniqParser.Kreturn - 48)) |
                                (1 << (jsoniqParser.Kif - 48)) |
                                (1 << (jsoniqParser.Kin - 48)) |
                                (1 << (jsoniqParser.Kas - 48)) |
                                (1 << (jsoniqParser.Kat - 48)) |
                                (1 << (jsoniqParser.Kallowing - 48)) |
                                (1 << (jsoniqParser.Kempty - 48)) |
                                (1 << (jsoniqParser.Kcount - 48)) |
                                (1 << (jsoniqParser.Kstable - 48)) |
                                (1 << (jsoniqParser.Kascending - 48)) |
                                (1 << (jsoniqParser.Kdescending - 48)) |
                                (1 << (jsoniqParser.Ksome - 48)) |
                                (1 << (jsoniqParser.Kevery - 48)))) !==
                            0) ||
                    (((_la - 80) & ~0x1f) === 0 &&
                        ((1 << (_la - 80)) &
                            ((1 << (jsoniqParser.Ksatisfies - 80)) |
                                (1 << (jsoniqParser.Kcollation - 80)) |
                                (1 << (jsoniqParser.Kgreatest - 80)) |
                                (1 << (jsoniqParser.Kleast - 80)) |
                                (1 << (jsoniqParser.Kswitch - 80)) |
                                (1 << (jsoniqParser.Kcase - 80)) |
                                (1 << (jsoniqParser.Ktry - 80)) |
                                (1 << (jsoniqParser.Kcatch - 80)) |
                                (1 << (jsoniqParser.Kdefault - 80)) |
                                (1 << (jsoniqParser.Kthen - 80)) |
                                (1 << (jsoniqParser.Kelse - 80)) |
                                (1 << (jsoniqParser.Ktypeswitch - 80)) |
                                (1 << (jsoniqParser.Kor - 80)) |
                                (1 << (jsoniqParser.Kand - 80)) |
                                (1 << (jsoniqParser.Knot - 80)) |
                                (1 << (jsoniqParser.Kto - 80)) |
                                (1 << (jsoniqParser.Kinstance - 80)) |
                                (1 << (jsoniqParser.Kof - 80)) |
                                (1 << (jsoniqParser.Kstatically - 80)) |
                                (1 << (jsoniqParser.Kis - 80)) |
                                (1 << (jsoniqParser.Ktreat - 80)) |
                                (1 << (jsoniqParser.Kcast - 80)) |
                                (1 << (jsoniqParser.Kcastable - 80)) |
                                (1 << (jsoniqParser.Kversion - 80)) |
                                (1 << (jsoniqParser.Kjsoniq - 80)) |
                                (1 << (jsoniqParser.Kunordered - 80)) |
                                (1 << (jsoniqParser.Ktrue - 80)) |
                                (1 << (jsoniqParser.Kfalse - 80)) |
                                (1 << (jsoniqParser.Ktype - 80)) |
                                (1 << (jsoniqParser.Kvalidate - 80)) |
                                (1 << (jsoniqParser.Kannotate - 80)) |
                                (1 << (jsoniqParser.Kdeclare - 80)))) !==
                            0) ||
                    (((_la - 112) & ~0x1f) === 0 &&
                        ((1 << (_la - 112)) &
                            ((1 << (jsoniqParser.Kcontext - 112)) |
                                (1 << (jsoniqParser.Kitem - 112)) |
                                (1 << (jsoniqParser.Kvariable - 112)) |
                                (1 << (jsoniqParser.Kinsert - 112)) |
                                (1 << (jsoniqParser.Kdelete - 112)) |
                                (1 << (jsoniqParser.Krename - 112)) |
                                (1 << (jsoniqParser.Kreplace - 112)) |
                                (1 << (jsoniqParser.Kcopy - 112)) |
                                (1 << (jsoniqParser.Kmodify - 112)) |
                                (1 << (jsoniqParser.Kappend - 112)) |
                                (1 << (jsoniqParser.Kinto - 112)) |
                                (1 << (jsoniqParser.Kvalue - 112)) |
                                (1 << (jsoniqParser.Kjson - 112)) |
                                (1 << (jsoniqParser.Kwith - 112)) |
                                (1 << (jsoniqParser.Kposition - 112)) |
                                (1 << (jsoniqParser.Kbreak - 112)) |
                                (1 << (jsoniqParser.Kloop - 112)) |
                                (1 << (jsoniqParser.Kcontinue - 112)) |
                                (1 << (jsoniqParser.Kexit - 112)) |
                                (1 << (jsoniqParser.Kreturning - 112)) |
                                (1 << (jsoniqParser.Kwhile - 112)) |
                                (1 << (jsoniqParser.STRING - 112)) |
                                (1 << (jsoniqParser.NullLiteral - 112)) |
                                (1 << (jsoniqParser.Literal - 112)) |
                                (1 << (jsoniqParser.NCName - 112)))) !==
                            0)) {
                    {
                        this.state = 1333;
                        this.expr();
                    }
                }
                this.state = 1336;
                this.match(jsoniqParser.T__54);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    uriLiteral() {
        let _localctx = new UriLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 248, jsoniqParser.RULE_uriLiteral);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1338;
                this.stringLiteral();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    stringLiteral() {
        let _localctx = new StringLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 250, jsoniqParser.RULE_stringLiteral);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1340;
                this.match(jsoniqParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    keyWords() {
        let _localctx = new KeyWordsContext(this._ctx, this.state);
        this.enterRule(_localctx, 252, jsoniqParser.RULE_keyWords);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1342;
                _la = this._input.LA(1);
                if (!((((_la - 61) & ~0x1f) === 0 &&
                    ((1 << (_la - 61)) &
                        ((1 << (jsoniqParser.Kfor - 61)) |
                            (1 << (jsoniqParser.Klet - 61)) |
                            (1 << (jsoniqParser.Kwhere - 61)) |
                            (1 << (jsoniqParser.Kgroup - 61)) |
                            (1 << (jsoniqParser.Kby - 61)) |
                            (1 << (jsoniqParser.Korder - 61)) |
                            (1 << (jsoniqParser.Kreturn - 61)) |
                            (1 << (jsoniqParser.Kif - 61)) |
                            (1 << (jsoniqParser.Kin - 61)) |
                            (1 << (jsoniqParser.Kas - 61)) |
                            (1 << (jsoniqParser.Kat - 61)) |
                            (1 << (jsoniqParser.Kallowing - 61)) |
                            (1 << (jsoniqParser.Kempty - 61)) |
                            (1 << (jsoniqParser.Kcount - 61)) |
                            (1 << (jsoniqParser.Kstable - 61)) |
                            (1 << (jsoniqParser.Kascending - 61)) |
                            (1 << (jsoniqParser.Kdescending - 61)) |
                            (1 << (jsoniqParser.Ksome - 61)) |
                            (1 << (jsoniqParser.Kevery - 61)) |
                            (1 << (jsoniqParser.Ksatisfies - 61)) |
                            (1 << (jsoniqParser.Kcollation - 61)) |
                            (1 << (jsoniqParser.Kgreatest - 61)) |
                            (1 << (jsoniqParser.Kleast - 61)) |
                            (1 << (jsoniqParser.Kswitch - 61)) |
                            (1 << (jsoniqParser.Kcase - 61)) |
                            (1 << (jsoniqParser.Ktry - 61)) |
                            (1 << (jsoniqParser.Kcatch - 61)) |
                            (1 << (jsoniqParser.Kdefault - 61)) |
                            (1 << (jsoniqParser.Kthen - 61)) |
                            (1 << (jsoniqParser.Kelse - 61)) |
                            (1 << (jsoniqParser.Ktypeswitch - 61)) |
                            (1 << (jsoniqParser.Kor - 61)))) !==
                        0) ||
                    (((_la - 93) & ~0x1f) === 0 &&
                        ((1 << (_la - 93)) &
                            ((1 << (jsoniqParser.Kand - 93)) |
                                (1 << (jsoniqParser.Knot - 93)) |
                                (1 << (jsoniqParser.Kto - 93)) |
                                (1 << (jsoniqParser.Kinstance - 93)) |
                                (1 << (jsoniqParser.Kof - 93)) |
                                (1 << (jsoniqParser.Kstatically - 93)) |
                                (1 << (jsoniqParser.Kis - 93)) |
                                (1 << (jsoniqParser.Ktreat - 93)) |
                                (1 << (jsoniqParser.Kcast - 93)) |
                                (1 << (jsoniqParser.Kcastable - 93)) |
                                (1 << (jsoniqParser.Kversion - 93)) |
                                (1 << (jsoniqParser.Kjsoniq - 93)) |
                                (1 << (jsoniqParser.Kunordered - 93)) |
                                (1 << (jsoniqParser.Ktrue - 93)) |
                                (1 << (jsoniqParser.Kfalse - 93)) |
                                (1 << (jsoniqParser.Ktype - 93)) |
                                (1 << (jsoniqParser.Kvalidate - 93)) |
                                (1 << (jsoniqParser.Kannotate - 93)) |
                                (1 << (jsoniqParser.Kdeclare - 93)) |
                                (1 << (jsoniqParser.Kcontext - 93)) |
                                (1 << (jsoniqParser.Kitem - 93)) |
                                (1 << (jsoniqParser.Kvariable - 93)) |
                                (1 << (jsoniqParser.Kinsert - 93)) |
                                (1 << (jsoniqParser.Kdelete - 93)) |
                                (1 << (jsoniqParser.Krename - 93)) |
                                (1 << (jsoniqParser.Kreplace - 93)) |
                                (1 << (jsoniqParser.Kcopy - 93)) |
                                (1 << (jsoniqParser.Kmodify - 93)) |
                                (1 << (jsoniqParser.Kappend - 93)) |
                                (1 << (jsoniqParser.Kinto - 93)) |
                                (1 << (jsoniqParser.Kvalue - 93)) |
                                (1 << (jsoniqParser.Kjson - 93)))) !==
                            0) ||
                    (((_la - 125) & ~0x1f) === 0 &&
                        ((1 << (_la - 125)) &
                            ((1 << (jsoniqParser.Kwith - 125)) |
                                (1 << (jsoniqParser.Kposition - 125)) |
                                (1 << (jsoniqParser.Kbreak - 125)) |
                                (1 << (jsoniqParser.Kloop - 125)) |
                                (1 << (jsoniqParser.Kcontinue - 125)) |
                                (1 << (jsoniqParser.Kexit - 125)) |
                                (1 << (jsoniqParser.Kreturning - 125)) |
                                (1 << (jsoniqParser.Kwhile - 125)) |
                                (1 << (jsoniqParser.NullLiteral - 125)))) !==
                            0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static get _ATN() {
        if (!jsoniqParser.__ATN) {
            jsoniqParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(jsoniqParser._serializedATN));
        }
        return jsoniqParser.__ATN;
    }
}
jsoniqParser.T__0 = 1;
jsoniqParser.T__1 = 2;
jsoniqParser.T__2 = 3;
jsoniqParser.T__3 = 4;
jsoniqParser.T__4 = 5;
jsoniqParser.T__5 = 6;
jsoniqParser.T__6 = 7;
jsoniqParser.T__7 = 8;
jsoniqParser.T__8 = 9;
jsoniqParser.T__9 = 10;
jsoniqParser.T__10 = 11;
jsoniqParser.T__11 = 12;
jsoniqParser.T__12 = 13;
jsoniqParser.T__13 = 14;
jsoniqParser.T__14 = 15;
jsoniqParser.T__15 = 16;
jsoniqParser.T__16 = 17;
jsoniqParser.T__17 = 18;
jsoniqParser.T__18 = 19;
jsoniqParser.T__19 = 20;
jsoniqParser.T__20 = 21;
jsoniqParser.T__21 = 22;
jsoniqParser.T__22 = 23;
jsoniqParser.T__23 = 24;
jsoniqParser.T__24 = 25;
jsoniqParser.T__25 = 26;
jsoniqParser.T__26 = 27;
jsoniqParser.T__27 = 28;
jsoniqParser.T__28 = 29;
jsoniqParser.T__29 = 30;
jsoniqParser.T__30 = 31;
jsoniqParser.T__31 = 32;
jsoniqParser.T__32 = 33;
jsoniqParser.T__33 = 34;
jsoniqParser.T__34 = 35;
jsoniqParser.T__35 = 36;
jsoniqParser.T__36 = 37;
jsoniqParser.T__37 = 38;
jsoniqParser.T__38 = 39;
jsoniqParser.T__39 = 40;
jsoniqParser.T__40 = 41;
jsoniqParser.T__41 = 42;
jsoniqParser.T__42 = 43;
jsoniqParser.T__43 = 44;
jsoniqParser.T__44 = 45;
jsoniqParser.T__45 = 46;
jsoniqParser.T__46 = 47;
jsoniqParser.T__47 = 48;
jsoniqParser.T__48 = 49;
jsoniqParser.T__49 = 50;
jsoniqParser.T__50 = 51;
jsoniqParser.T__51 = 52;
jsoniqParser.T__52 = 53;
jsoniqParser.T__53 = 54;
jsoniqParser.T__54 = 55;
jsoniqParser.T__55 = 56;
jsoniqParser.T__56 = 57;
jsoniqParser.T__57 = 58;
jsoniqParser.T__58 = 59;
jsoniqParser.T__59 = 60;
jsoniqParser.Kfor = 61;
jsoniqParser.Klet = 62;
jsoniqParser.Kwhere = 63;
jsoniqParser.Kgroup = 64;
jsoniqParser.Kby = 65;
jsoniqParser.Korder = 66;
jsoniqParser.Kreturn = 67;
jsoniqParser.Kif = 68;
jsoniqParser.Kin = 69;
jsoniqParser.Kas = 70;
jsoniqParser.Kat = 71;
jsoniqParser.Kallowing = 72;
jsoniqParser.Kempty = 73;
jsoniqParser.Kcount = 74;
jsoniqParser.Kstable = 75;
jsoniqParser.Kascending = 76;
jsoniqParser.Kdescending = 77;
jsoniqParser.Ksome = 78;
jsoniqParser.Kevery = 79;
jsoniqParser.Ksatisfies = 80;
jsoniqParser.Kcollation = 81;
jsoniqParser.Kgreatest = 82;
jsoniqParser.Kleast = 83;
jsoniqParser.Kswitch = 84;
jsoniqParser.Kcase = 85;
jsoniqParser.Ktry = 86;
jsoniqParser.Kcatch = 87;
jsoniqParser.Kdefault = 88;
jsoniqParser.Kthen = 89;
jsoniqParser.Kelse = 90;
jsoniqParser.Ktypeswitch = 91;
jsoniqParser.Kor = 92;
jsoniqParser.Kand = 93;
jsoniqParser.Knot = 94;
jsoniqParser.Kto = 95;
jsoniqParser.Kinstance = 96;
jsoniqParser.Kof = 97;
jsoniqParser.Kstatically = 98;
jsoniqParser.Kis = 99;
jsoniqParser.Ktreat = 100;
jsoniqParser.Kcast = 101;
jsoniqParser.Kcastable = 102;
jsoniqParser.Kversion = 103;
jsoniqParser.Kjsoniq = 104;
jsoniqParser.Kunordered = 105;
jsoniqParser.Ktrue = 106;
jsoniqParser.Kfalse = 107;
jsoniqParser.Ktype = 108;
jsoniqParser.Kvalidate = 109;
jsoniqParser.Kannotate = 110;
jsoniqParser.Kdeclare = 111;
jsoniqParser.Kcontext = 112;
jsoniqParser.Kitem = 113;
jsoniqParser.Kvariable = 114;
jsoniqParser.Kinsert = 115;
jsoniqParser.Kdelete = 116;
jsoniqParser.Krename = 117;
jsoniqParser.Kreplace = 118;
jsoniqParser.Kcopy = 119;
jsoniqParser.Kmodify = 120;
jsoniqParser.Kappend = 121;
jsoniqParser.Kinto = 122;
jsoniqParser.Kvalue = 123;
jsoniqParser.Kjson = 124;
jsoniqParser.Kwith = 125;
jsoniqParser.Kposition = 126;
jsoniqParser.Kbreak = 127;
jsoniqParser.Kloop = 128;
jsoniqParser.Kcontinue = 129;
jsoniqParser.Kexit = 130;
jsoniqParser.Kreturning = 131;
jsoniqParser.Kwhile = 132;
jsoniqParser.STRING = 133;
jsoniqParser.ArgumentPlaceholder = 134;
jsoniqParser.NullLiteral = 135;
jsoniqParser.Literal = 136;
jsoniqParser.NumericLiteral = 137;
jsoniqParser.IntegerLiteral = 138;
jsoniqParser.DecimalLiteral = 139;
jsoniqParser.DoubleLiteral = 140;
jsoniqParser.WS = 141;
jsoniqParser.NCName = 142;
jsoniqParser.XQComment = 143;
jsoniqParser.ContentChar = 144;
jsoniqParser.RULE_moduleAndThisIsIt = 0;
jsoniqParser.RULE_module = 1;
jsoniqParser.RULE_mainModule = 2;
jsoniqParser.RULE_libraryModule = 3;
jsoniqParser.RULE_prolog = 4;
jsoniqParser.RULE_program = 5;
jsoniqParser.RULE_statements = 6;
jsoniqParser.RULE_statementsAndExpr = 7;
jsoniqParser.RULE_statementsAndOptionalExpr = 8;
jsoniqParser.RULE_statement = 9;
jsoniqParser.RULE_applyStatement = 10;
jsoniqParser.RULE_assignStatement = 11;
jsoniqParser.RULE_blockStatement = 12;
jsoniqParser.RULE_breakStatement = 13;
jsoniqParser.RULE_continueStatement = 14;
jsoniqParser.RULE_exitStatement = 15;
jsoniqParser.RULE_flowrStatement = 16;
jsoniqParser.RULE_ifStatement = 17;
jsoniqParser.RULE_switchStatement = 18;
jsoniqParser.RULE_switchCaseStatement = 19;
jsoniqParser.RULE_tryCatchStatement = 20;
jsoniqParser.RULE_catchCaseStatement = 21;
jsoniqParser.RULE_typeSwitchStatement = 22;
jsoniqParser.RULE_caseStatement = 23;
jsoniqParser.RULE_annotation = 24;
jsoniqParser.RULE_annotations = 25;
jsoniqParser.RULE_varDeclStatement = 26;
jsoniqParser.RULE_varDeclForStatement = 27;
jsoniqParser.RULE_whileStatement = 28;
jsoniqParser.RULE_setter = 29;
jsoniqParser.RULE_namespaceDecl = 30;
jsoniqParser.RULE_annotatedDecl = 31;
jsoniqParser.RULE_defaultCollationDecl = 32;
jsoniqParser.RULE_orderingModeDecl = 33;
jsoniqParser.RULE_emptyOrderDecl = 34;
jsoniqParser.RULE_decimalFormatDecl = 35;
jsoniqParser.RULE_qname = 36;
jsoniqParser.RULE_dfPropertyName = 37;
jsoniqParser.RULE_moduleImport = 38;
jsoniqParser.RULE_varDecl = 39;
jsoniqParser.RULE_contextItemDecl = 40;
jsoniqParser.RULE_functionDecl = 41;
jsoniqParser.RULE_typeDecl = 42;
jsoniqParser.RULE_schemaLanguage = 43;
jsoniqParser.RULE_paramList = 44;
jsoniqParser.RULE_param = 45;
jsoniqParser.RULE_expr = 46;
jsoniqParser.RULE_exprSingle = 47;
jsoniqParser.RULE_exprSimple = 48;
jsoniqParser.RULE_flowrExpr = 49;
jsoniqParser.RULE_forClause = 50;
jsoniqParser.RULE_forVar = 51;
jsoniqParser.RULE_letClause = 52;
jsoniqParser.RULE_letVar = 53;
jsoniqParser.RULE_whereClause = 54;
jsoniqParser.RULE_groupByClause = 55;
jsoniqParser.RULE_groupByVar = 56;
jsoniqParser.RULE_orderByClause = 57;
jsoniqParser.RULE_orderByExpr = 58;
jsoniqParser.RULE_countClause = 59;
jsoniqParser.RULE_quantifiedExpr = 60;
jsoniqParser.RULE_quantifiedExprVar = 61;
jsoniqParser.RULE_switchExpr = 62;
jsoniqParser.RULE_switchCaseClause = 63;
jsoniqParser.RULE_typeSwitchExpr = 64;
jsoniqParser.RULE_caseClause = 65;
jsoniqParser.RULE_ifExpr = 66;
jsoniqParser.RULE_tryCatchExpr = 67;
jsoniqParser.RULE_catchClause = 68;
jsoniqParser.RULE_orExpr = 69;
jsoniqParser.RULE_andExpr = 70;
jsoniqParser.RULE_notExpr = 71;
jsoniqParser.RULE_comparisonExpr = 72;
jsoniqParser.RULE_stringConcatExpr = 73;
jsoniqParser.RULE_rangeExpr = 74;
jsoniqParser.RULE_additiveExpr = 75;
jsoniqParser.RULE_multiplicativeExpr = 76;
jsoniqParser.RULE_instanceOfExpr = 77;
jsoniqParser.RULE_isStaticallyExpr = 78;
jsoniqParser.RULE_treatExpr = 79;
jsoniqParser.RULE_castableExpr = 80;
jsoniqParser.RULE_castExpr = 81;
jsoniqParser.RULE_arrowExpr = 82;
jsoniqParser.RULE_arrowFunctionSpecifier = 83;
jsoniqParser.RULE_unaryExpr = 84;
jsoniqParser.RULE_valueExpr = 85;
jsoniqParser.RULE_validateExpr = 86;
jsoniqParser.RULE_annotateExpr = 87;
jsoniqParser.RULE_simpleMapExpr = 88;
jsoniqParser.RULE_postFixExpr = 89;
jsoniqParser.RULE_arrayLookup = 90;
jsoniqParser.RULE_arrayUnboxing = 91;
jsoniqParser.RULE_predicate = 92;
jsoniqParser.RULE_objectLookup = 93;
jsoniqParser.RULE_primaryExpr = 94;
jsoniqParser.RULE_blockExpr = 95;
jsoniqParser.RULE_varRef = 96;
jsoniqParser.RULE_parenthesizedExpr = 97;
jsoniqParser.RULE_contextItemExpr = 98;
jsoniqParser.RULE_orderedExpr = 99;
jsoniqParser.RULE_unorderedExpr = 100;
jsoniqParser.RULE_functionCall = 101;
jsoniqParser.RULE_argumentList = 102;
jsoniqParser.RULE_argument = 103;
jsoniqParser.RULE_functionItemExpr = 104;
jsoniqParser.RULE_namedFunctionRef = 105;
jsoniqParser.RULE_inlineFunctionExpr = 106;
jsoniqParser.RULE_insertExpr = 107;
jsoniqParser.RULE_deleteExpr = 108;
jsoniqParser.RULE_renameExpr = 109;
jsoniqParser.RULE_replaceExpr = 110;
jsoniqParser.RULE_transformExpr = 111;
jsoniqParser.RULE_appendExpr = 112;
jsoniqParser.RULE_updateLocator = 113;
jsoniqParser.RULE_copyDecl = 114;
jsoniqParser.RULE_sequenceType = 115;
jsoniqParser.RULE_objectConstructor = 116;
jsoniqParser.RULE_itemType = 117;
jsoniqParser.RULE_functionTest = 118;
jsoniqParser.RULE_anyFunctionTest = 119;
jsoniqParser.RULE_typedFunctionTest = 120;
jsoniqParser.RULE_singleType = 121;
jsoniqParser.RULE_pairConstructor = 122;
jsoniqParser.RULE_arrayConstructor = 123;
jsoniqParser.RULE_uriLiteral = 124;
jsoniqParser.RULE_stringLiteral = 125;
jsoniqParser.RULE_keyWords = 126;
// tslint:disable:no-trailing-whitespace
jsoniqParser.ruleNames = [
    "moduleAndThisIsIt",
    "module",
    "mainModule",
    "libraryModule",
    "prolog",
    "program",
    "statements",
    "statementsAndExpr",
    "statementsAndOptionalExpr",
    "statement",
    "applyStatement",
    "assignStatement",
    "blockStatement",
    "breakStatement",
    "continueStatement",
    "exitStatement",
    "flowrStatement",
    "ifStatement",
    "switchStatement",
    "switchCaseStatement",
    "tryCatchStatement",
    "catchCaseStatement",
    "typeSwitchStatement",
    "caseStatement",
    "annotation",
    "annotations",
    "varDeclStatement",
    "varDeclForStatement",
    "whileStatement",
    "setter",
    "namespaceDecl",
    "annotatedDecl",
    "defaultCollationDecl",
    "orderingModeDecl",
    "emptyOrderDecl",
    "decimalFormatDecl",
    "qname",
    "dfPropertyName",
    "moduleImport",
    "varDecl",
    "contextItemDecl",
    "functionDecl",
    "typeDecl",
    "schemaLanguage",
    "paramList",
    "param",
    "expr",
    "exprSingle",
    "exprSimple",
    "flowrExpr",
    "forClause",
    "forVar",
    "letClause",
    "letVar",
    "whereClause",
    "groupByClause",
    "groupByVar",
    "orderByClause",
    "orderByExpr",
    "countClause",
    "quantifiedExpr",
    "quantifiedExprVar",
    "switchExpr",
    "switchCaseClause",
    "typeSwitchExpr",
    "caseClause",
    "ifExpr",
    "tryCatchExpr",
    "catchClause",
    "orExpr",
    "andExpr",
    "notExpr",
    "comparisonExpr",
    "stringConcatExpr",
    "rangeExpr",
    "additiveExpr",
    "multiplicativeExpr",
    "instanceOfExpr",
    "isStaticallyExpr",
    "treatExpr",
    "castableExpr",
    "castExpr",
    "arrowExpr",
    "arrowFunctionSpecifier",
    "unaryExpr",
    "valueExpr",
    "validateExpr",
    "annotateExpr",
    "simpleMapExpr",
    "postFixExpr",
    "arrayLookup",
    "arrayUnboxing",
    "predicate",
    "objectLookup",
    "primaryExpr",
    "blockExpr",
    "varRef",
    "parenthesizedExpr",
    "contextItemExpr",
    "orderedExpr",
    "unorderedExpr",
    "functionCall",
    "argumentList",
    "argument",
    "functionItemExpr",
    "namedFunctionRef",
    "inlineFunctionExpr",
    "insertExpr",
    "deleteExpr",
    "renameExpr",
    "replaceExpr",
    "transformExpr",
    "appendExpr",
    "updateLocator",
    "copyDecl",
    "sequenceType",
    "objectConstructor",
    "itemType",
    "functionTest",
    "anyFunctionTest",
    "typedFunctionTest",
    "singleType",
    "pairConstructor",
    "arrayConstructor",
    "uriLiteral",
    "stringLiteral",
    "keyWords",
];
jsoniqParser._LITERAL_NAMES = [
    undefined,
    "';'",
    "'module'",
    "'namespace'",
    "'='",
    "'$'",
    "':='",
    "'{'",
    "'}'",
    "'('",
    "')'",
    "'*'",
    "'|'",
    "'%'",
    "','",
    "'ordering'",
    "'ordered'",
    "'decimal-format'",
    "':'",
    "'decimal-separator'",
    "'grouping-separator'",
    "'infinity'",
    "'minus-sign'",
    "'NaN'",
    "'percent'",
    "'per-mille'",
    "'zero-digit'",
    "'digit'",
    "'pattern-separator'",
    "'import'",
    "'external'",
    "'function'",
    "'jsound'",
    "'compact'",
    "'verbose'",
    "'schema'",
    "'eq'",
    "'ne'",
    "'lt'",
    "'le'",
    "'gt'",
    "'ge'",
    "'!='",
    "'<'",
    "'<='",
    "'>'",
    "'>='",
    "'||'",
    "'+'",
    "'-'",
    "'div'",
    "'idiv'",
    "'mod'",
    "'!'",
    "'['",
    "']'",
    "'.'",
    "'$$'",
    "'#'",
    "'{|'",
    "'|}'",
    "'for'",
    "'let'",
    "'where'",
    "'group'",
    "'by'",
    "'order'",
    "'return'",
    "'if'",
    "'in'",
    "'as'",
    "'at'",
    "'allowing'",
    "'empty'",
    "'count'",
    "'stable'",
    "'ascending'",
    "'descending'",
    "'some'",
    "'every'",
    "'satisfies'",
    "'collation'",
    "'greatest'",
    "'least'",
    "'switch'",
    "'case'",
    "'try'",
    "'catch'",
    "'default'",
    "'then'",
    "'else'",
    "'typeswitch'",
    "'or'",
    "'and'",
    "'not'",
    "'to'",
    "'instance'",
    "'of'",
    "'statically'",
    "'is'",
    "'treat'",
    "'cast'",
    "'castable'",
    "'version'",
    "'jsoniq'",
    "'unordered'",
    "'true'",
    "'false'",
    "'type'",
    "'validate'",
    "'annotate'",
    "'declare'",
    "'context'",
    "'item'",
    "'variable'",
    "'insert'",
    "'delete'",
    "'rename'",
    "'replace'",
    "'copy'",
    "'modify'",
    "'append'",
    "'into'",
    "'value'",
    "'json'",
    "'with'",
    "'position'",
    "'break'",
    "'loop'",
    "'continue'",
    "'exit'",
    "'returning'",
    "'while'",
    undefined,
    "'?'",
    "'null'",
];
jsoniqParser._SYMBOLIC_NAMES = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "Kfor",
    "Klet",
    "Kwhere",
    "Kgroup",
    "Kby",
    "Korder",
    "Kreturn",
    "Kif",
    "Kin",
    "Kas",
    "Kat",
    "Kallowing",
    "Kempty",
    "Kcount",
    "Kstable",
    "Kascending",
    "Kdescending",
    "Ksome",
    "Kevery",
    "Ksatisfies",
    "Kcollation",
    "Kgreatest",
    "Kleast",
    "Kswitch",
    "Kcase",
    "Ktry",
    "Kcatch",
    "Kdefault",
    "Kthen",
    "Kelse",
    "Ktypeswitch",
    "Kor",
    "Kand",
    "Knot",
    "Kto",
    "Kinstance",
    "Kof",
    "Kstatically",
    "Kis",
    "Ktreat",
    "Kcast",
    "Kcastable",
    "Kversion",
    "Kjsoniq",
    "Kunordered",
    "Ktrue",
    "Kfalse",
    "Ktype",
    "Kvalidate",
    "Kannotate",
    "Kdeclare",
    "Kcontext",
    "Kitem",
    "Kvariable",
    "Kinsert",
    "Kdelete",
    "Krename",
    "Kreplace",
    "Kcopy",
    "Kmodify",
    "Kappend",
    "Kinto",
    "Kvalue",
    "Kjson",
    "Kwith",
    "Kposition",
    "Kbreak",
    "Kloop",
    "Kcontinue",
    "Kexit",
    "Kreturning",
    "Kwhile",
    "STRING",
    "ArgumentPlaceholder",
    "NullLiteral",
    "Literal",
    "NumericLiteral",
    "IntegerLiteral",
    "DecimalLiteral",
    "DoubleLiteral",
    "WS",
    "NCName",
    "XQComment",
    "ContentChar",
];
jsoniqParser.VOCABULARY = new VocabularyImpl(jsoniqParser._LITERAL_NAMES, jsoniqParser._SYMBOLIC_NAMES, []);
jsoniqParser._serializedATNSegments = 3;
jsoniqParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x92\u0543\x04" +
    "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
    "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
    "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
    "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
    "\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
    '\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04' +
    "#\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
    "+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
    "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
    "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
    "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
    "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
    "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
    "`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
    "i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
    "r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
    "{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x03\x02\x03\x02" +
    "\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u0109\n\x03\x03" +
    "\x03\x03\x03\x05\x03\u010D\n\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
    "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06" +
    "\x05\x06\u011D\n\x06\x03\x06\x03\x06\x07\x06\u0121\n\x06\f\x06\x0E\x06" +
    "\u0124\v\x06\x03\x06\x03\x06\x03\x06\x07\x06\u0129\n\x06\f\x06\x0E\x06" +
    "\u012C\v\x06\x03\x07\x03\x07\x03\b\x07\b\u0131\n\b\f\b\x0E\b\u0134\v\b" +
    "\x03\t\x03\t\x03\t\x03\n\x03\n\x05\n\u013B\n\n\x03\v\x03\v\x03\v\x03\v" +
    "\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u014A\n\v" +
    "\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E" +
    "\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10" +
    "\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x05\x12" +
    "\u0168\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u0170" +
    "\n\x12\f\x12\x0E\x12\u0173\v\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13" +
    "\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14" +
    "\x03\x14\x03\x14\x03\x14\x06\x14\u0186\n\x14\r\x14\x0E\x14\u0187\x03\x14" +
    "\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x06\x15\u0190\n\x15\r\x15\x0E" +
    "\x15\u0191\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x06\x16\u019A" +
    "\n\x16\r\x16\x0E\x16\u019B\x03\x17\x03\x17\x03\x17\x05\x17\u01A1\n\x17" +
    "\x03\x17\x03\x17\x03\x17\x05\x17\u01A6\n\x17\x07\x17\u01A8\n\x17\f\x17" +
    "\x0E\x17\u01AB\v\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
    "\x18\x06\x18\u01B4\n\x18\r\x18\x0E\x18\u01B5\x03\x18\x03\x18\x05\x18\u01BA" +
    "\n\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19" +
    "\u01C3\n\x19\x03\x19\x03\x19\x03\x19\x07\x19\u01C8\n\x19\f\x19\x0E\x19" +
    "\u01CB\v\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
    "\x1A\x03\x1A\x07\x1A\u01D6\n\x1A\f\x1A\x0E\x1A\u01D9\v\x1A\x03\x1A\x05" +
    "\x1A\u01DC\n\x1A\x03\x1B\x07\x1B\u01DF\n\x1B\f\x1B\x0E\x1B\u01E2\v\x1B" +
    "\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u01E9\n\x1C\f\x1C\x0E" +
    "\x1C\u01EC\v\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01F3" +
    "\n\x1D\x03\x1D\x03\x1D\x05\x1D\u01F7\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03" +
    "\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0203\n\x1F" +
    '\x03 \x03 \x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x05!\u020F\n!\x03"' +
    '\x03"\x03"\x03"\x03"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$' +
    "\x03$\x03%\x03%\x03%\x03%\x03%\x05%\u0225\n%\x03%\x03%\x03%\x03%\x07%" +
    "\u022B\n%\f%\x0E%\u022E\v%\x03&\x03&\x05&\u0232\n&\x03&\x05&\u0235\n&" +
    "\x03&\x03&\x05&\u0239\n&\x03'\x03'\x03(\x03(\x03(\x03(\x03(\x05(\u0242" +
    "\n(\x03(\x03(\x03(\x03(\x03(\x07(\u0249\n(\f(\x0E(\u024C\v(\x05(\u024E" +
    "\n(\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u0256\n)\x03)\x03)\x03)\x03)\x03" +
    ")\x05)\u025D\n)\x05)\u025F\n)\x03*\x03*\x03*\x03*\x03*\x05*\u0266\n*\x03" +
    "*\x03*\x03*\x03*\x03*\x05*\u026D\n*\x05*\u026F\n*\x03+\x03+\x03+\x03+" +
    "\x03+\x03+\x05+\u0277\n+\x03+\x03+\x03+\x05+\u027C\n+\x03+\x03+\x03+\x03" +
    "+\x03+\x05+\u0283\n+\x03,\x03,\x03,\x03,\x03,\x05,\u028A\n,\x03,\x03," +
    "\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u0294\n-\x03.\x03.\x03.\x07.\u0299" +
    "\n.\f.\x0E.\u029C\v.\x03/\x03/\x03/\x03/\x05/\u02A2\n/\x030\x030\x030" +
    "\x070\u02A7\n0\f0\x0E0\u02AA\v0\x031\x031\x031\x031\x031\x031\x051\u02B2" +
    "\n1\x032\x032\x032\x032\x032\x032\x032\x032\x052\u02BC\n2\x033\x033\x05" +
    "3\u02C0\n3\x033\x033\x033\x033\x033\x033\x073\u02C8\n3\f3\x0E3\u02CB\v" +
    "3\x033\x033\x033\x034\x034\x034\x034\x074\u02D4\n4\f4\x0E4\u02D7\v4\x03" +
    "5\x035\x035\x055\u02DC\n5\x035\x035\x055\u02E0\n5\x035\x035\x055\u02E4" +
    "\n5\x035\x035\x035\x036\x036\x036\x036\x076\u02ED\n6\f6\x0E6\u02F0\v6" +
    "\x037\x037\x037\x057\u02F5\n7\x037\x037\x037\x038\x038\x038\x039\x039" +
    "\x039\x039\x039\x079\u0302\n9\f9\x0E9\u0305\v9\x03:\x03:\x03:\x05:\u030A" +
    "\n:\x03:\x03:\x05:\u030E\n:\x03:\x03:\x05:\u0312\n:\x03;\x03;\x03;\x03" +
    ";\x03;\x05;\u0319\n;\x03;\x03;\x03;\x07;\u031E\n;\f;\x0E;\u0321\v;\x03" +
    "<\x03<\x03<\x05<\u0326\n<\x03<\x03<\x03<\x05<\u032B\n<\x05<\u032D\n<\x03" +
    "<\x03<\x05<\u0331\n<\x03=\x03=\x03=\x03>\x03>\x05>\u0338\n>\x03>\x03>" +
    "\x03>\x07>\u033D\n>\f>\x0E>\u0340\v>\x03>\x03>\x03>\x03?\x03?\x03?\x05" +
    "?\u0348\n?\x03?\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x06@\u0352\n@\r@\x0E" +
    "@\u0353\x03@\x03@\x03@\x03@\x03A\x03A\x06A\u035C\nA\rA\x0EA\u035D\x03" +
    "A\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x06B\u0368\nB\rB\x0EB\u0369\x03B" +
    "\x03B\x05B\u036E\nB\x03B\x03B\x03B\x03C\x03C\x03C\x03C\x05C\u0377\nC\x03" +
    "C\x03C\x03C\x07C\u037C\nC\fC\x0EC\u037F\vC\x03C\x03C\x03C\x03D\x03D\x03" +
    "D\x03D\x03D\x03D\x03D\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x06E\u0392\n" +
    "E\rE\x0EE\u0393\x03F\x03F\x03F\x05F\u0399\nF\x03F\x03F\x03F\x05F\u039E" +
    "\nF\x07F\u03A0\nF\fF\x0EF\u03A3\vF\x03F\x03F\x03F\x03F\x03G\x03G\x03G" +
    "\x07G\u03AC\nG\fG\x0EG\u03AF\vG\x03H\x03H\x03H\x07H\u03B4\nH\fH\x0EH\u03B7" +
    "\vH\x03I\x05I\u03BA\nI\x03I\x03I\x03J\x03J\x03J\x05J\u03C1\nJ\x03K\x03" +
    "K\x03K\x07K\u03C6\nK\fK\x0EK\u03C9\vK\x03L\x03L\x03L\x05L\u03CE\nL\x03" +
    "M\x03M\x03M\x07M\u03D3\nM\fM\x0EM\u03D6\vM\x03N\x03N\x03N\x07N\u03DB\n" +
    "N\fN\x0EN\u03DE\vN\x03O\x03O\x03O\x03O\x05O\u03E4\nO\x03P\x03P\x03P\x03" +
    "P\x05P\u03EA\nP\x03Q\x03Q\x03Q\x03Q\x05Q\u03F0\nQ\x03R\x03R\x03R\x03R" +
    "\x05R\u03F6\nR\x03S\x03S\x03S\x03S\x05S\u03FC\nS\x03T\x03T\x03T\x03T\x03" +
    "T\x03T\x03T\x07T\u0405\nT\fT\x0ET\u0408\vT\x03U\x03U\x03U\x05U\u040D\n" +
    "U\x03V\x07V\u0410\nV\fV\x0EV\u0413\vV\x03V\x03V\x03W\x03W\x03W\x05W\u041A" +
    "\nW\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03" +
    "Y\x03Z\x03Z\x03Z\x07Z\u042D\nZ\fZ\x0EZ\u0430\vZ\x03[\x03[\x03[\x03[\x03" +
    "[\x03[\x07[\u0438\n[\f[\x0E[\u043B\v[\x03\\\x03\\\x03\\\x03\\\x03\\\x03" +
    "\\\x03]\x03]\x03]\x03^\x03^\x03^\x03^\x03_\x03_\x03_\x03_\x03_\x03_\x03" +
    "_\x05_\u0451\n_\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03" +
    "`\x03`\x03`\x03`\x03`\x05`\u0462\n`\x03a\x03a\x03a\x03a\x03b\x03b\x03" +
    "b\x03c\x03c\x05c\u046D\nc\x03c\x03c\x03d\x03d\x03e\x03e\x03e\x03e\x03" +
    "e\x03f\x03f\x03f\x03f\x03f\x03g\x03g\x03g\x03h\x03h\x03h\x05h\u0483\n" +
    "h\x07h\u0485\nh\fh\x0Eh\u0488\vh\x03h\x03h\x03i\x03i\x05i\u048E\ni\x03" +
    "j\x03j\x05j\u0492\nj\x03k\x03k\x03k\x03k\x03l\x03l\x03l\x03l\x05l\u049C" +
    "\nl\x03l\x03l\x03l\x05l\u04A1\nl\x03l\x03l\x03l\x03l\x03m\x03m\x03m\x03" +
    "m\x03m\x03m\x03m\x03m\x05m\u04AF\nm\x03m\x03m\x03m\x03m\x03m\x07m\u04B6" +
    "\nm\fm\x0Em\u04B9\vm\x03m\x03m\x03m\x05m\u04BE\nm\x03n\x03n\x03n\x03n" +
    "\x03o\x03o\x03o\x03o\x03o\x03o\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03" +
    "p\x03q\x03q\x03q\x03q\x03q\x07q\u04D7\nq\fq\x0Eq\u04DA\vq\x03q\x03q\x03" +
    "q\x03q\x03q\x03r\x03r\x03r\x03r\x03r\x03r\x03s\x03s\x03s\x06s\u04EA\n" +
    "s\rs\x0Es\u04EB\x03t\x03t\x03t\x03t\x03u\x03u\x03u\x03u\x03u\x03u\x05" +
    "u\u04F8\nu\x05u\u04FA\nu\x03v\x03v\x03v\x03v\x07v\u0500\nv\fv\x0Ev\u0503" +
    "\vv\x05v\u0505\nv\x03v\x03v\x03v\x03v\x03v\x05v\u050C\nv\x03w\x03w\x03" +
    "w\x05w\u0511\nw\x03x\x03x\x05x\u0515\nx\x03y\x03y\x03y\x03y\x03y\x03z" +
    "\x03z\x03z\x03z\x03z\x07z\u0521\nz\fz\x0Ez\u0524\vz\x05z\u0526\nz\x03" +
    "z\x03z\x03z\x03z\x03{\x03{\x05{\u052E\n{\x03|\x03|\x05|\u0532\n|\x03|" +
    "\x03|\x03|\x03}\x03}\x05}\u0539\n}\x03}\x03}\x03~\x03~\x03\x7F\x03\x7F" +
    "\x03\x80\x03\x80\x03\x80\x02\x02\x02\x81\x02\x02\x04\x02\x06\x02\b\x02" +
    "\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
    '\x02\x1E\x02 \x02"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026' +
    "\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
    "R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
    "n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02" +
    "\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02" +
    "\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02" +
    "\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02" +
    "\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02" +
    "\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02" +
    "\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02" +
    "\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\x02\n\x04\x02" +
    "\x12\x12kk\x03\x02TU\x03\x02\x15\x1E\x04\x02\x06\x06&0\x03\x0223\x04\x02" +
    "\r\r46\x04\x02\x14\x14\x88\x88\x04\x02?\x86\x89\x89\x02\u0584\x02\u0100" +
    "\x03\x02\x02\x02\x04\u0108\x03\x02\x02\x02\x06\u010E\x03\x02\x02\x02\b" +
    "\u0111\x03\x02\x02\x02\n\u0122\x03\x02\x02\x02\f\u012D\x03\x02\x02\x02" +
    "\x0E\u0132\x03\x02\x02\x02\x10\u0135\x03\x02\x02\x02\x12\u0138\x03\x02" +
    "\x02\x02\x14\u0149\x03\x02\x02\x02\x16\u014B\x03\x02\x02\x02\x18\u014E" +
    "\x03\x02\x02\x02\x1A\u0154\x03\x02\x02\x02\x1C\u0158\x03\x02\x02\x02\x1E" +
    '\u015C\x03\x02\x02\x02 \u0160\x03\x02\x02\x02"\u0167\x03\x02\x02\x02' +
    "$\u0177\x03\x02\x02\x02&\u0180\x03\x02\x02\x02(\u018F\x03\x02\x02\x02" +
    "*\u0196\x03\x02\x02\x02,\u019D\x03\x02\x02\x02.\u01AE\x03\x02\x02\x02" +
    "0\u01BE\x03\x02\x02\x022\u01CF\x03\x02\x02\x024\u01E0\x03\x02\x02\x02" +
    "6\u01E3\x03\x02\x02\x028\u01EF\x03\x02\x02\x02:\u01F8\x03\x02\x02\x02" +
    "<\u0202\x03\x02\x02\x02>\u0204\x03\x02\x02\x02@\u020E\x03\x02\x02\x02" +
    "B\u0210\x03\x02\x02\x02D\u0215\x03\x02\x02\x02F\u0219\x03\x02\x02\x02" +
    "H\u021F\x03\x02\x02\x02J\u0234\x03\x02\x02\x02L\u023A\x03\x02\x02\x02" +
    "N\u023C\x03\x02\x02\x02P\u024F\x03\x02\x02\x02R\u0260\x03\x02\x02\x02" +
    "T\u0270\x03\x02\x02\x02V\u0284\x03\x02\x02\x02X\u0293\x03\x02\x02\x02" +
    "Z\u0295\x03\x02\x02\x02\\\u029D\x03\x02\x02\x02^\u02A3\x03\x02\x02\x02" +
    "`\u02B1\x03\x02\x02\x02b\u02BB\x03\x02\x02\x02d\u02BF\x03\x02\x02\x02" +
    "f\u02CF\x03\x02\x02\x02h\u02D8\x03\x02\x02\x02j\u02E8\x03\x02\x02\x02" +
    "l\u02F1\x03\x02\x02\x02n\u02F9\x03\x02\x02\x02p\u02FC\x03\x02\x02\x02" +
    "r\u0306\x03\x02\x02\x02t\u0318\x03\x02\x02\x02v\u0322\x03\x02\x02\x02" +
    "x\u0332\x03\x02\x02\x02z\u0337\x03\x02\x02\x02|\u0344\x03\x02\x02\x02" +
    "~\u034C\x03\x02\x02\x02\x80\u035B\x03\x02\x02\x02\x82\u0362\x03\x02\x02" +
    "\x02\x84\u0372\x03\x02\x02\x02\x86\u0383\x03\x02\x02\x02\x88\u038C\x03" +
    "\x02\x02\x02\x8A\u0395\x03\x02\x02\x02\x8C\u03A8\x03\x02\x02\x02\x8E\u03B0" +
    "\x03\x02\x02\x02\x90\u03B9\x03\x02\x02\x02\x92\u03BD\x03\x02\x02\x02\x94" +
    "\u03C2\x03\x02\x02\x02\x96\u03CA\x03\x02\x02\x02\x98\u03CF\x03\x02\x02" +
    "\x02\x9A\u03D7\x03\x02\x02\x02\x9C\u03DF\x03\x02\x02\x02\x9E\u03E5\x03" +
    "\x02\x02\x02\xA0\u03EB\x03\x02\x02\x02\xA2\u03F1\x03\x02\x02\x02\xA4\u03F7" +
    "\x03\x02\x02\x02\xA6\u03FD\x03\x02\x02\x02\xA8\u040C\x03\x02\x02\x02\xAA" +
    "\u0411\x03\x02\x02\x02\xAC\u0419\x03\x02\x02\x02\xAE\u041B\x03\x02\x02" +
    "\x02\xB0\u0422\x03\x02\x02\x02\xB2\u0429\x03\x02\x02\x02\xB4\u0431\x03" +
    "\x02\x02\x02\xB6\u043C\x03\x02\x02\x02\xB8\u0442\x03\x02\x02\x02\xBA\u0445" +
    "\x03\x02\x02\x02\xBC\u0449\x03\x02\x02\x02\xBE\u0461\x03\x02\x02\x02\xC0" +
    "\u0463\x03\x02\x02\x02\xC2\u0467\x03\x02\x02\x02\xC4\u046A\x03\x02\x02" +
    "\x02\xC6\u0470\x03\x02\x02\x02\xC8\u0472\x03\x02\x02\x02\xCA\u0477\x03" +
    "\x02\x02\x02\xCC\u047C\x03\x02\x02\x02\xCE\u047F\x03\x02\x02\x02\xD0\u048D" +
    "\x03\x02\x02\x02\xD2\u0491\x03\x02\x02\x02\xD4\u0493\x03\x02\x02\x02\xD6" +
    "\u0497\x03\x02\x02\x02\xD8\u04BD\x03\x02\x02\x02\xDA\u04BF\x03\x02\x02" +
    "\x02\xDC\u04C3\x03\x02\x02\x02\xDE\u04C9\x03\x02\x02\x02\xE0\u04D1\x03" +
    "\x02\x02\x02\xE2\u04E0\x03\x02\x02\x02\xE4\u04E6\x03\x02\x02\x02\xE6\u04ED" +
    "\x03\x02\x02\x02\xE8\u04F9\x03\x02\x02\x02\xEA\u050B\x03\x02\x02\x02\xEC" +
    "\u0510\x03\x02\x02\x02\xEE\u0514\x03\x02\x02\x02\xF0\u0516\x03\x02\x02" +
    "\x02\xF2\u051B\x03\x02\x02\x02\xF4\u052B\x03\x02\x02\x02\xF6\u0531\x03" +
    "\x02\x02\x02\xF8\u0536\x03\x02\x02\x02\xFA\u053C\x03\x02\x02\x02\xFC\u053E" +
    "\x03\x02\x02\x02\xFE\u0540\x03\x02\x02\x02\u0100\u0101\x05\x04\x03\x02" +
    "\u0101\u0102\x07\x02\x02\x03\u0102\x03\x03\x02\x02\x02\u0103\u0104\x07" +
    "j\x02\x02\u0104\u0105\x07i\x02\x02\u0105\u0106\x05\xFC\x7F\x02\u0106\u0107" +
    "\x07\x03\x02\x02\u0107\u0109\x03\x02\x02\x02\u0108\u0103\x03\x02\x02\x02" +
    "\u0108\u0109\x03\x02\x02\x02\u0109\u010C\x03\x02\x02\x02\u010A\u010D\x05" +
    "\b\x05\x02\u010B\u010D\x05\x06\x04\x02\u010C\u010A\x03\x02\x02\x02\u010C" +
    "\u010B\x03\x02\x02\x02\u010D\x05\x03\x02\x02\x02\u010E\u010F\x05\n\x06" +
    "\x02\u010F\u0110\x05\f\x07\x02\u0110\x07\x03\x02\x02\x02\u0111\u0112\x07" +
    "\x04\x02\x02\u0112\u0113\x07\x05\x02\x02\u0113\u0114\x07\x90\x02\x02\u0114" +
    "\u0115\x07\x06\x02\x02\u0115\u0116\x05\xFA~\x02\u0116\u0117\x07\x03\x02" +
    "\x02\u0117\u0118\x05\n\x06\x02\u0118\t\x03\x02\x02\x02\u0119\u011D\x05" +
    "<\x1F\x02\u011A\u011D\x05> \x02\u011B\u011D\x05N(\x02\u011C\u0119\x03" +
    "\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011C\u011B\x03\x02\x02\x02\u011D" +
    "\u011E\x03\x02\x02\x02\u011E\u011F\x07\x03\x02\x02\u011F\u0121\x03\x02" +
    "\x02\x02\u0120\u011C\x03\x02\x02\x02\u0121\u0124\x03\x02\x02\x02\u0122" +
    "\u0120\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u012A\x03\x02" +
    "\x02\x02\u0124\u0122\x03\x02\x02\x02\u0125\u0126\x05@!\x02\u0126\u0127" +
    "\x07\x03\x02\x02\u0127\u0129\x03\x02\x02\x02\u0128\u0125\x03\x02\x02\x02" +
    "\u0129\u012C\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012A\u012B\x03" +
    "\x02\x02\x02\u012B\v\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012D" +
    "\u012E\x05\x12\n\x02\u012E\r\x03\x02\x02\x02\u012F\u0131\x05\x14\v\x02" +
    "\u0130\u012F\x03\x02\x02\x02\u0131\u0134\x03\x02\x02\x02\u0132\u0130\x03" +
    "\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\x0F\x03\x02\x02\x02\u0134" +
    "\u0132\x03\x02\x02\x02\u0135\u0136\x05\x0E\b\x02\u0136\u0137\x05^0\x02" +
    "\u0137\x11\x03\x02\x02\x02\u0138\u013A\x05\x0E\b\x02\u0139\u013B\x05^" +
    "0\x02\u013A\u0139\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\x13" +
    "\x03\x02\x02\x02\u013C\u014A\x05\x16\f\x02\u013D\u014A\x05\x18\r\x02\u013E" +
    "\u014A\x05\x1A\x0E\x02\u013F\u014A\x05\x1C\x0F\x02\u0140\u014A\x05\x1E" +
    '\x10\x02\u0141\u014A\x05 \x11\x02\u0142\u014A\x05"\x12\x02\u0143\u014A' +
    "\x05$\x13\x02\u0144\u014A\x05&\x14\x02\u0145\u014A\x05*\x16\x02\u0146" +
    "\u014A\x05.\x18\x02\u0147\u014A\x056\x1C\x02\u0148\u014A\x05:\x1E\x02" +
    "\u0149\u013C\x03\x02\x02\x02\u0149\u013D\x03\x02\x02\x02\u0149\u013E\x03" +
    "\x02\x02\x02\u0149\u013F\x03\x02\x02\x02\u0149\u0140\x03\x02\x02\x02\u0149" +
    "\u0141\x03\x02\x02\x02\u0149\u0142\x03\x02\x02\x02\u0149\u0143\x03\x02" +
    "\x02\x02\u0149\u0144\x03\x02\x02\x02\u0149\u0145\x03\x02\x02\x02\u0149" +
    "\u0146\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u0149\u0148\x03\x02" +
    "\x02\x02\u014A\x15\x03\x02\x02\x02\u014B\u014C\x05b2\x02\u014C\u014D\x07" +
    "\x03\x02\x02\u014D\x17\x03\x02\x02\x02\u014E\u014F\x07\x07\x02\x02\u014F" +
    "\u0150\x05J&\x02\u0150\u0151\x07\b\x02\x02\u0151\u0152\x05`1\x02\u0152" +
    "\u0153\x07\x03\x02\x02\u0153\x19\x03\x02\x02\x02\u0154\u0155\x07\t\x02" +
    "\x02\u0155\u0156\x05\x0E\b\x02\u0156\u0157\x07\n\x02\x02\u0157\x1B\x03" +
    "\x02\x02\x02\u0158\u0159\x07\x81\x02\x02\u0159\u015A\x07\x82\x02\x02\u015A" +
    "\u015B\x07\x03\x02\x02\u015B\x1D\x03\x02\x02\x02\u015C\u015D\x07\x83\x02" +
    "\x02\u015D\u015E\x07\x82\x02\x02\u015E\u015F\x07\x03\x02\x02\u015F\x1F" +
    "\x03\x02\x02\x02\u0160\u0161\x07\x84\x02\x02\u0161\u0162\x07\x85\x02\x02" +
    "\u0162\u0163\x05`1\x02\u0163\u0164\x07\x03\x02\x02\u0164!\x03\x02\x02" +
    "\x02\u0165\u0168\x05f4\x02\u0166\u0168\x05j6\x02\u0167\u0165\x03\x02\x02" +
    "\x02\u0167\u0166\x03\x02\x02\x02\u0168\u0171\x03\x02\x02\x02\u0169\u0170" +
    "\x05f4\x02\u016A\u0170\x05j6\x02\u016B\u0170\x05n8\x02\u016C\u0170\x05" +
    "p9\x02\u016D\u0170\x05t;\x02\u016E\u0170\x05x=\x02\u016F\u0169\x03\x02" +
    "\x02\x02\u016F\u016A\x03\x02\x02\x02\u016F\u016B\x03\x02\x02\x02\u016F" +
    "\u016C\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02\u016F\u016E\x03\x02" +
    "\x02\x02\u0170\u0173\x03\x02\x02\x02\u0171\u016F\x03\x02\x02\x02\u0171" +
    "\u0172\x03\x02\x02\x02\u0172\u0174\x03\x02\x02\x02\u0173\u0171\x03\x02" +
    "\x02\x02\u0174\u0175\x07E\x02\x02\u0175\u0176\x05\x14\v\x02\u0176#\x03" +
    "\x02\x02\x02\u0177\u0178\x07F\x02\x02\u0178\u0179\x07\v\x02\x02\u0179" +
    "\u017A\x05^0\x02\u017A\u017B\x07\f\x02\x02\u017B\u017C\x07[\x02\x02\u017C" +
    "\u017D\x05\x14\v\x02\u017D\u017E\x07\\\x02\x02\u017E\u017F\x05\x14\v\x02" +
    "\u017F%\x03\x02\x02\x02\u0180\u0181\x07V\x02\x02\u0181\u0182\x07\v\x02" +
    "\x02\u0182\u0183\x05^0\x02\u0183\u0185\x07\f\x02\x02\u0184\u0186\x05(" +
    "\x15\x02\u0185\u0184\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187" +
    "\u0185\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188\u0189\x03\x02" +
    "\x02\x02\u0189\u018A\x07Z\x02\x02\u018A\u018B\x07E\x02\x02\u018B\u018C" +
    "\x05\x14\v\x02\u018C'\x03\x02\x02\x02\u018D\u018E\x07W\x02\x02\u018E" +
    "\u0190\x05`1\x02\u018F\u018D\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02" +
    "\u0191\u018F\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0193\x03" +
    "\x02\x02\x02\u0193\u0194\x07E";
jsoniqParser._serializedATNSegment1 = "\x02\x02\u0194\u0195\x05\x14\v\x02\u0195)\x03\x02\x02\x02\u0196\u0197" +
    "\x07X\x02\x02\u0197\u0199\x05\x1A\x0E\x02\u0198\u019A\x05,\x17\x02\u0199" +
    "\u0198\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B\u0199\x03\x02" +
    "\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C+\x03\x02\x02\x02\u019D\u01A0" +
    "\x07Y\x02\x02\u019E\u01A1\x07\r\x02\x02\u019F\u01A1\x05J&\x02\u01A0\u019E" +
    "\x03\x02\x02\x02\u01A0\u019F\x03\x02\x02\x02\u01A1\u01A9\x03\x02\x02\x02" +
    "\u01A2\u01A5\x07\x0E\x02\x02\u01A3\u01A6\x07\r\x02\x02\u01A4\u01A6\x05" +
    "J&\x02\u01A5\u01A3\x03\x02\x02\x02\u01A5\u01A4\x03\x02\x02\x02\u01A6\u01A8" +
    "\x03\x02\x02\x02\u01A7\u01A2\x03\x02\x02\x02\u01A8\u01AB\x03\x02\x02\x02" +
    "\u01A9\u01A7\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01AC\x03" +
    "\x02\x02\x02\u01AB\u01A9\x03\x02\x02\x02\u01AC\u01AD\x05\x1A\x0E\x02\u01AD" +
    "-\x03\x02\x02\x02\u01AE\u01AF\x07]\x02\x02\u01AF\u01B0\x07\v\x02\x02\u01B0" +
    "\u01B1\x05^0\x02\u01B1\u01B3\x07\f\x02\x02\u01B2\u01B4\x050\x19\x02\u01B3" +
    "\u01B2\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B3\x03\x02" +
    "\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7" +
    "\u01B9\x07Z\x02\x02\u01B8\u01BA\x05\xC2b\x02\u01B9\u01B8\x03\x02\x02\x02" +
    "\u01B9\u01BA\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BC\x07" +
    "E\x02\x02\u01BC\u01BD\x05\x14\v\x02\u01BD/\x03\x02\x02\x02\u01BE\u01C2" +
    "\x07W\x02\x02\u01BF\u01C0\x05\xC2b\x02\u01C0\u01C1\x07H\x02\x02\u01C1" +
    "\u01C3\x03\x02\x02\x02\u01C2\u01BF\x03\x02\x02\x02\u01C2\u01C3\x03\x02" +
    "\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01C9\x05\xE8u\x02\u01C5\u01C6" +
    "\x07\x0E\x02\x02\u01C6\u01C8\x05\xE8u\x02\u01C7\u01C5\x03\x02\x02\x02" +
    "\u01C8\u01CB\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01C9\u01CA\x03" +
    "\x02\x02\x02\u01CA\u01CC\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CC" +
    "\u01CD\x07E\x02\x02\u01CD\u01CE\x05\x14\v\x02\u01CE1\x03\x02\x02\x02\u01CF" +
    "\u01D0\x07\x0F\x02\x02\u01D0\u01DB\x05J&\x02\u01D1\u01D2\x07\v\x02\x02" +
    "\u01D2\u01D7\x07\x8A\x02\x02\u01D3\u01D4\x07\x10\x02\x02\u01D4\u01D6\x07" +
    "\x8A\x02\x02\u01D5\u01D3\x03\x02\x02\x02\u01D6\u01D9\x03\x02\x02\x02\u01D7" +
    "\u01D5\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01DA\x03\x02" +
    "\x02\x02\u01D9\u01D7\x03\x02\x02\x02\u01DA\u01DC\x07\f\x02\x02\u01DB\u01D1" +
    "\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC3\x03\x02\x02\x02\u01DD" +
    "\u01DF\x052\x1A\x02\u01DE\u01DD\x03\x02\x02\x02\u01DF\u01E2\x03\x02\x02" +
    "\x02\u01E0\u01DE\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E15\x03" +
    "\x02\x02\x02\u01E2\u01E0\x03\x02\x02\x02\u01E3\u01E4\x054\x1B\x02\u01E4" +
    "\u01E5\x07t\x02\x02\u01E5\u01EA\x058\x1D\x02\u01E6\u01E7\x07\x10\x02\x02" +
    "\u01E7\u01E9\x058\x1D\x02\u01E8\u01E6\x03\x02\x02\x02\u01E9\u01EC\x03" +
    "\x02\x02\x02\u01EA\u01E8\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB" +
    "\u01ED\x03\x02\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01ED\u01EE\x07\x03" +
    "\x02\x02\u01EE7\x03\x02\x02\x02\u01EF\u01F2\x05\xC2b\x02\u01F0\u01F1\x07" +
    "H\x02\x02\u01F1\u01F3\x05\xE8u\x02\u01F2\u01F0\x03\x02\x02\x02\u01F2\u01F3" +
    "\x03\x02\x02\x02\u01F3\u01F6\x03\x02\x02\x02\u01F4\u01F5\x07\b\x02\x02" +
    "\u01F5\u01F7\x05`1\x02\u01F6\u01F4\x03\x02\x02\x02\u01F6\u01F7\x03\x02" +
    "\x02\x02\u01F79\x03\x02\x02\x02\u01F8\u01F9\x07\x86\x02\x02\u01F9\u01FA" +
    "\x07\v\x02\x02\u01FA\u01FB\x05^0\x02\u01FB\u01FC\x07\f\x02\x02\u01FC\u01FD" +
    '\x05\x14\v\x02\u01FD;\x03\x02\x02\x02\u01FE\u0203\x05B"\x02\u01FF\u0203' +
    "\x05D#\x02\u0200\u0203\x05F$\x02\u0201\u0203\x05H%\x02\u0202\u01FE\x03" +
    "\x02\x02\x02\u0202\u01FF\x03\x02\x02\x02\u0202\u0200\x03\x02\x02\x02\u0202" +
    "\u0201\x03\x02\x02\x02\u0203=\x03\x02\x02\x02\u0204\u0205\x07q\x02\x02" +
    "\u0205\u0206\x07\x05\x02\x02\u0206\u0207\x07\x90\x02\x02\u0207\u0208\x07" +
    "\x06\x02\x02\u0208\u0209\x05\xFA~\x02\u0209?\x03\x02\x02\x02\u020A\u020F" +
    "\x05T+\x02\u020B\u020F\x05P)\x02\u020C\u020F\x05V,\x02\u020D\u020F\x05" +
    "R*\x02\u020E\u020A\x03\x02\x02\x02\u020E\u020B\x03\x02\x02\x02\u020E\u020C" +
    "\x03\x02\x02\x02\u020E\u020D\x03\x02\x02\x02\u020FA\x03\x02\x02\x02\u0210" +
    "\u0211\x07q\x02\x02\u0211\u0212\x07Z\x02\x02\u0212\u0213\x07S\x02\x02" +
    "\u0213\u0214\x05\xFA~\x02\u0214C\x03\x02\x02\x02\u0215\u0216\x07q\x02" +
    "\x02\u0216\u0217\x07\x11\x02\x02\u0217\u0218\t\x02\x02\x02\u0218E\x03" +
    "\x02\x02\x02\u0219\u021A\x07q\x02\x02\u021A\u021B\x07Z\x02\x02\u021B\u021C" +
    "\x07D\x02\x02\u021C\u021D\x07K\x02\x02\u021D\u021E\t\x03\x02\x02\u021E" +
    "G\x03\x02\x02\x02\u021F\u0224\x07q\x02\x02\u0220\u0221\x07\x13\x02\x02" +
    "\u0221\u0225\x05J&\x02\u0222\u0223\x07Z\x02\x02\u0223\u0225\x07\x13\x02" +
    "\x02\u0224\u0220\x03\x02\x02\x02\u0224\u0222\x03\x02\x02\x02\u0225\u022C" +
    "\x03\x02\x02\x02\u0226\u0227\x05L'\x02\u0227\u0228\x07\x06\x02\x02\u0228" +
    "\u0229\x05\xFC\x7F\x02\u0229\u022B\x03\x02\x02\x02\u022A\u0226\x03\x02" +
    "\x02\x02\u022B\u022E\x03\x02\x02\x02\u022C\u022A\x03\x02\x02\x02\u022C" +
    "\u022D\x03\x02\x02\x02\u022DI\x03\x02\x02\x02\u022E\u022C\x03\x02\x02" +
    "\x02\u022F\u0232\x07\x90\x02\x02\u0230\u0232\x05\xFE\x80\x02\u0231\u022F" +
    "\x03\x02\x02\x02\u0231\u0230\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02" +
    "\u0233\u0235\x07\x14\x02\x02\u0234\u0231\x03\x02\x02\x02\u0234\u0235\x03" +
    "\x02\x02\x02\u0235\u0238\x03\x02\x02\x02\u0236\u0239\x07\x90\x02\x02\u0237" +
    "\u0239\x05\xFE\x80\x02\u0238\u0236\x03\x02\x02\x02\u0238\u0237\x03\x02" +
    "\x02\x02\u0239K\x03\x02\x02\x02\u023A\u023B\t\x04\x02\x02\u023BM\x03\x02" +
    "\x02\x02\u023C\u023D\x07\x1F\x02\x02\u023D\u0241\x07\x04\x02\x02\u023E" +
    "\u023F\x07\x05\x02\x02\u023F\u0240\x07\x90\x02\x02\u0240\u0242\x07\x06" +
    "\x02\x02\u0241\u023E\x03\x02\x02\x02\u0241\u0242\x03\x02\x02\x02\u0242" +
    "\u0243\x03\x02\x02\x02\u0243\u024D\x05\xFA~\x02\u0244\u0245\x07I\x02\x02" +
    "\u0245\u024A\x05\xFA~\x02\u0246\u0247\x07\x10\x02\x02\u0247\u0249\x05" +
    "\xFA~\x02\u0248\u0246\x03\x02\x02\x02\u0249\u024C\x03\x02\x02\x02\u024A" +
    "\u0248\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B\u024E\x03\x02" +
    "\x02\x02\u024C\u024A\x03\x02\x02\x02\u024D\u0244\x03\x02\x02\x02\u024D" +
    "\u024E\x03\x02\x02\x02\u024EO\x03\x02\x02\x02\u024F\u0250\x07q\x02\x02" +
    "\u0250\u0251\x054\x1B\x02\u0251\u0252\x07t\x02\x02\u0252\u0255\x05\xC2" +
    "b\x02\u0253\u0254\x07H\x02\x02\u0254\u0256\x05\xE8u\x02\u0255\u0253\x03" +
    "\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256\u025E\x03\x02\x02\x02\u0257" +
    "\u0258\x07\b\x02\x02\u0258\u025F\x05`1\x02\u0259\u025C\x07 \x02\x02\u025A" +
    "\u025B\x07\b\x02\x02\u025B\u025D\x05`1\x02\u025C\u025A\x03\x02\x02\x02" +
    "\u025C\u025D\x03\x02\x02\x02\u025D\u025F\x03\x02\x02\x02\u025E\u0257\x03" +
    "\x02\x02\x02\u025E\u0259\x03\x02\x02\x02\u025FQ\x03\x02\x02\x02\u0260" +
    "\u0261\x07q\x02\x02\u0261\u0262\x07r\x02\x02\u0262\u0265\x07s\x02\x02" +
    "\u0263\u0264\x07H\x02\x02\u0264\u0266\x05\xE8u\x02\u0265\u0263\x03\x02" +
    "\x02\x02\u0265\u0266\x03\x02\x02\x02\u0266\u026E\x03\x02\x02\x02\u0267" +
    "\u0268\x07\b\x02\x02\u0268\u026F\x05`1\x02\u0269\u026C\x07 \x02\x02\u026A" +
    "\u026B\x07\b\x02\x02\u026B\u026D\x05`1\x02\u026C\u026A\x03\x02\x02\x02" +
    "\u026C\u026D\x03\x02\x02\x02\u026D\u026F\x03\x02\x02\x02\u026E\u0267\x03" +
    "\x02\x02\x02\u026E\u0269\x03\x02\x02\x02\u026FS\x03\x02\x02\x02\u0270" +
    "\u0271\x07q\x02\x02\u0271\u0272\x054\x1B\x02\u0272\u0273\x07!\x02\x02" +
    "\u0273\u0274\x05J&\x02\u0274\u0276\x07\v\x02\x02\u0275\u0277\x05Z.\x02" +
    "\u0276\u0275\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02\u0277\u0278\x03" +
    "\x02\x02\x02\u0278\u027B\x07\f\x02\x02\u0279\u027A\x07H\x02\x02\u027A" +
    "\u027C\x05\xE8u\x02\u027B\u0279\x03\x02\x02\x02\u027B\u027C\x03\x02\x02" +
    "\x02\u027C\u0282\x03\x02\x02\x02\u027D\u027E\x07\t\x02\x02\u027E\u027F" +
    "\x05\x12\n\x02\u027F\u0280\x07\n\x02\x02\u0280\u0283\x03\x02\x02\x02\u0281" +
    "\u0283\x07 \x02\x02\u0282\u027D\x03\x02\x02\x02\u0282\u0281\x03\x02\x02" +
    "\x02\u0283U\x03\x02\x02\x02\u0284\u0285\x07q\x02\x02\u0285\u0286\x07n" +
    "\x02\x02\u0286\u0287\x05J&\x02\u0287\u0289\x07H\x02\x02\u0288\u028A\x05" +
    "X-\x02\u0289\u0288\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02\u028A\u028B" +
    "\x03\x02\x02\x02\u028B\u028C\x05`1\x02\u028CW\x03\x02\x02\x02\u028D\u028E" +
    '\x07"\x02\x02\u028E\u0294\x07#\x02\x02\u028F\u0290\x07"\x02\x02\u0290' +
    "\u0294\x07$\x02\x02\u0291\u0292\x07~\x02\x02\u0292\u0294\x07%\x02\x02" +
    "\u0293\u028D\x03\x02\x02\x02\u0293\u028F\x03\x02\x02\x02\u0293\u0291\x03" +
    "\x02\x02\x02\u0294Y\x03\x02\x02\x02\u0295\u029A\x05\\/\x02\u0296\u0297" +
    "\x07\x10\x02\x02\u0297\u0299\x05\\/\x02\u0298\u0296\x03\x02\x02\x02\u0299" +
    "\u029C\x03\x02\x02\x02\u029A\u0298\x03\x02\x02\x02\u029A\u029B\x03\x02" +
    "\x02\x02\u029B[\x03\x02\x02\x02\u029C\u029A\x03\x02\x02\x02\u029D\u029E" +
    "\x07\x07\x02\x02\u029E\u02A1\x05J&\x02\u029F\u02A0\x07H\x02\x02\u02A0" +
    "\u02A2\x05\xE8u\x02\u02A1\u029F\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02" +
    "\x02\u02A2]\x03\x02\x02\x02\u02A3\u02A8\x05`1\x02\u02A4\u02A5\x07\x10" +
    "\x02\x02\u02A5\u02A7\x05`1\x02\u02A6\u02A4\x03\x02\x02\x02\u02A7\u02AA" +
    "\x03\x02\x02\x02\u02A8\u02A6\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02" +
    "\u02A9_\x03\x02\x02\x02\u02AA\u02A8\x03\x02\x02\x02\u02AB\u02B2\x05b2" +
    "\x02\u02AC\u02B2\x05d3\x02\u02AD\u02B2\x05~@\x02\u02AE\u02B2\x05\x82B" +
    "\x02\u02AF\u02B2\x05\x86D\x02\u02B0\u02B2\x05\x88E\x02\u02B1\u02AB\x03" +
    "\x02\x02\x02\u02B1\u02AC\x03\x02\x02\x02\u02B1\u02AD\x03\x02\x02\x02\u02B1" +
    "\u02AE\x03\x02\x02\x02\u02B1\u02AF\x03\x02\x02\x02\u02B1\u02B0\x03\x02" +
    "\x02\x02\u02B2a\x03\x02\x02\x02\u02B3\u02BC\x05z>\x02\u02B4\u02BC\x05" +
    "\x8CG\x02\u02B5\u02BC\x05\xD8m\x02\u02B6\u02BC\x05\xDAn\x02\u02B7\u02BC" +
    "\x05\xDCo\x02\u02B8\u02BC\x05\xDEp\x02\u02B9\u02BC\x05\xE0q\x02\u02BA" +
    "\u02BC\x05\xE2r\x02\u02BB\u02B3\x03\x02\x02\x02\u02BB\u02B4\x03\x02\x02" +
    "\x02\u02BB\u02B5\x03\x02\x02\x02\u02BB\u02B6\x03\x02\x02\x02\u02BB\u02B7" +
    "\x03\x02\x02\x02\u02BB\u02B8\x03\x02\x02\x02\u02BB\u02B9\x03\x02\x02\x02" +
    "\u02BB\u02BA\x03\x02\x02\x02\u02BCc\x03\x02\x02\x02\u02BD\u02C0\x05f4" +
    "\x02\u02BE\u02C0\x05j6\x02\u02BF\u02BD\x03\x02\x02\x02\u02BF\u02BE\x03" +
    "\x02\x02\x02\u02C0\u02C9\x03\x02\x02\x02\u02C1\u02C8\x05f4\x02\u02C2\u02C8" +
    "\x05j6\x02\u02C3\u02C8\x05n8\x02\u02C4\u02C8\x05p9\x02\u02C5\u02C8\x05" +
    "t;\x02\u02C6\u02C8\x05x=\x02\u02C7\u02C1\x03\x02\x02\x02\u02C7\u02C2\x03" +
    "\x02\x02\x02\u02C7\u02C3\x03\x02\x02\x02\u02C7\u02C4\x03\x02\x02\x02\u02C7" +
    "\u02C5\x03\x02\x02\x02\u02C7\u02C6\x03\x02\x02\x02\u02C8\u02CB\x03\x02" +
    "\x02\x02\u02C9\u02C7\x03\x02\x02\x02\u02C9\u02CA\x03\x02\x02\x02\u02CA" +
    "\u02CC\x03\x02\x02\x02\u02CB\u02C9\x03\x02\x02\x02\u02CC\u02CD\x07E\x02" +
    "\x02\u02CD\u02CE\x05`1\x02\u02CEe\x03\x02\x02\x02\u02CF\u02D0\x07?\x02" +
    "\x02\u02D0\u02D5\x05h5\x02\u02D1\u02D2\x07\x10\x02\x02\u02D2\u02D4\x05" +
    "h5\x02\u02D3\u02D1\x03\x02\x02\x02\u02D4\u02D7\x03\x02\x02\x02\u02D5\u02D3" +
    "\x03\x02\x02\x02\u02D5\u02D6\x03\x02\x02\x02\u02D6g\x03\x02\x02\x02\u02D7" +
    "\u02D5\x03\x02\x02\x02\u02D8\u02DB\x05\xC2b\x02\u02D9\u02DA\x07H\x02\x02" +
    "\u02DA\u02DC\x05\xE8u\x02\u02DB\u02D9\x03\x02\x02\x02\u02DB\u02DC\x03" +
    "\x02\x02\x02\u02DC\u02DF\x03\x02\x02\x02\u02DD\u02DE\x07J\x02\x02\u02DE" +
    "\u02E0\x07K\x02\x02\u02DF\u02DD\x03\x02\x02\x02\u02DF\u02E0\x03\x02\x02" +
    "\x02\u02E0\u02E3\x03\x02\x02\x02\u02E1\u02E2\x07I\x02\x02\u02E2\u02E4" +
    "\x05\xC2b\x02\u02E3\u02E1\x03\x02\x02\x02\u02E3\u02E4\x03\x02\x02\x02" +
    "\u02E4\u02E5\x03\x02\x02\x02\u02E5\u02E6\x07G\x02\x02\u02E6\u02E7\x05" +
    "`1\x02\u02E7i\x03\x02\x02\x02\u02E8\u02E9\x07@\x02\x02\u02E9\u02EE\x05" +
    "l7\x02\u02EA\u02EB\x07\x10\x02\x02\u02EB\u02ED\x05l7\x02\u02EC\u02EA\x03" +
    "\x02\x02\x02\u02ED\u02F0\x03\x02\x02\x02\u02EE\u02EC\x03\x02\x02\x02\u02EE" +
    "\u02EF\x03\x02\x02\x02\u02EFk\x03\x02\x02\x02\u02F0\u02EE\x03\x02\x02" +
    "\x02\u02F1\u02F4\x05\xC2b\x02\u02F2\u02F3\x07H\x02\x02\u02F3\u02F5\x05" +
    "\xE8u\x02\u02F4\u02F2\x03\x02\x02\x02\u02F4\u02F5\x03\x02\x02\x02\u02F5" +
    "\u02F6\x03\x02\x02\x02\u02F6\u02F7\x07\b\x02\x02\u02F7\u02F8\x05`1\x02" +
    "\u02F8m\x03\x02\x02\x02\u02F9\u02FA\x07A\x02\x02\u02FA\u02FB\x05`1\x02" +
    "\u02FBo\x03\x02\x02\x02\u02FC\u02FD\x07B\x02\x02\u02FD\u02FE\x07C\x02" +
    "\x02\u02FE\u0303\x05r:\x02\u02FF\u0300\x07\x10\x02\x02\u0300\u0302\x05" +
    "r:\x02\u0301\u02FF\x03\x02\x02\x02\u0302\u0305\x03\x02\x02\x02\u0303\u0301" +
    "\x03\x02\x02\x02\u0303\u0304\x03\x02\x02\x02\u0304q\x03\x02\x02\x02\u0305" +
    "\u0303\x03\x02\x02\x02\u0306\u030D\x05\xC2b\x02\u0307\u0308\x07H\x02\x02" +
    "\u0308\u030A\x05\xE8u\x02\u0309\u0307\x03\x02\x02\x02\u0309\u030A\x03" +
    "\x02\x02\x02\u030A\u030B\x03\x02\x02\x02\u030B\u030C\x07\b\x02\x02\u030C" +
    "\u030E\x05`1\x02\u030D\u0309\x03\x02\x02\x02\u030D\u030E\x03\x02\x02\x02" +
    "\u030E\u0311\x03\x02\x02\x02\u030F\u0310\x07S\x02\x02\u0310\u0312\x05" +
    "\xFA~\x02\u0311\u030F\x03\x02\x02\x02\u0311\u0312\x03\x02\x02\x02\u0312" +
    "s\x03\x02\x02\x02\u0313\u0314\x07D\x02\x02\u0314\u0319\x07C\x02\x02\u0315" +
    "\u0316\x07M\x02\x02\u0316\u0317\x07D\x02\x02\u0317\u0319\x07C\x02\x02" +
    "\u0318\u0313\x03\x02\x02\x02\u0318\u0315\x03\x02\x02\x02\u0319\u031A\x03" +
    "\x02\x02\x02\u031A\u031F\x05v<\x02\u031B\u031C\x07\x10\x02\x02\u031C\u031E" +
    "\x05v<\x02\u031D\u031B\x03\x02\x02\x02\u031E\u0321\x03\x02\x02\x02\u031F" +
    "\u031D\x03\x02\x02\x02\u031F\u0320\x03\x02\x02\x02\u0320u\x03\x02\x02" +
    "\x02\u0321\u031F\x03\x02\x02\x02\u0322\u0325\x05`1\x02\u0323\u0326\x07" +
    "N\x02\x02\u0324\u0326\x07O\x02\x02\u0325\u0323\x03\x02\x02\x02\u0325\u0324" +
    "\x03\x02\x02\x02\u0325\u0326\x03\x02\x02\x02\u0326\u032C\x03\x02\x02\x02" +
    "\u0327\u032A\x07K\x02\x02\u0328\u032B\x07T\x02\x02\u0329\u032B\x07U\x02" +
    "\x02\u032A\u0328\x03\x02\x02\x02\u032A\u0329\x03\x02\x02\x02\u032B\u032D" +
    "\x03\x02\x02\x02\u032C\u0327\x03\x02\x02\x02\u032C\u032D\x03\x02\x02\x02" +
    "\u032D\u0330\x03\x02\x02\x02\u032E\u032F\x07S\x02\x02\u032F\u0331\x05" +
    "\xFA~\x02\u0330\u032E\x03\x02\x02\x02\u0330\u0331\x03\x02\x02\x02\u0331" +
    "w\x03\x02\x02\x02\u0332\u0333\x07L\x02\x02\u0333\u0334\x05\xC2b\x02\u0334" +
    "y\x03\x02\x02\x02\u0335\u0338\x07P\x02\x02\u0336\u0338\x07Q\x02\x02\u0337" +
    "\u0335\x03\x02\x02\x02\u0337\u0336\x03\x02\x02\x02\u0338\u0339\x03\x02" +
    "\x02\x02\u0339\u033E\x05|?\x02\u033A\u033B\x07\x10\x02\x02\u033B\u033D" +
    "\x05|?\x02\u033C\u033A\x03\x02\x02\x02\u033D\u0340\x03\x02\x02\x02\u033E" +
    "\u033C\x03\x02\x02\x02\u033E\u033F\x03\x02\x02\x02\u033F\u0341\x03\x02" +
    "\x02\x02\u0340\u033E\x03\x02\x02\x02\u0341\u0342\x07R\x02\x02\u0342\u0343" +
    "\x05`1\x02\u0343{\x03\x02\x02\x02\u0344\u0347\x05\xC2b\x02\u0345\u0346" +
    "\x07H\x02\x02\u0346\u0348\x05\xE8u\x02\u0347\u0345\x03\x02\x02\x02\u0347" +
    "\u0348\x03\x02\x02\x02\u0348\u0349\x03\x02\x02\x02\u0349\u034A\x07G\x02" +
    "\x02\u034A\u034B\x05`1\x02\u034B}\x03\x02\x02\x02\u034C\u034D\x07V\x02" +
    "\x02\u034D\u034E\x07\v\x02\x02\u034E\u034F\x05^0\x02\u034F\u0351\x07\f" +
    "\x02\x02\u0350\u0352\x05\x80A\x02\u0351\u0350\x03\x02\x02\x02\u0352\u0353" +
    "\x03\x02\x02\x02\u0353\u0351\x03\x02\x02\x02\u0353\u0354\x03\x02\x02\x02" +
    "\u0354\u0355\x03\x02\x02\x02\u0355\u0356\x07Z\x02\x02\u0356\u0357\x07" +
    "E\x02\x02\u0357\u0358\x05`1\x02\u0358\x7F\x03\x02\x02\x02\u0359\u035A" +
    "\x07W\x02\x02\u035A\u035C\x05`1\x02\u035B\u0359\x03\x02\x02\x02\u035C" +
    "\u035D\x03\x02\x02\x02\u035D\u035B\x03\x02\x02\x02\u035D\u035E\x03\x02" +
    "\x02\x02\u035E\u035F\x03\x02\x02\x02\u035F\u0360\x07E\x02\x02\u0360\u0361" +
    "\x05`1\x02\u0361\x81\x03\x02\x02\x02\u0362\u0363\x07]\x02\x02\u0363\u0364" +
    "\x07\v\x02\x02\u0364\u0365\x05^0\x02\u0365\u0367\x07\f\x02\x02\u0366\u0368" +
    "\x05\x84C\x02\u0367\u0366\x03\x02\x02\x02\u0368\u0369\x03\x02\x02\x02" +
    "\u0369\u0367\x03\x02\x02\x02\u0369\u036A\x03\x02\x02\x02\u036A\u036B\x03" +
    "\x02\x02\x02\u036B\u036D\x07Z\x02\x02\u036C\u036E\x05\xC2b\x02\u036D\u036C" +
    "\x03\x02\x02\x02\u036D\u036E\x03\x02\x02\x02\u036E\u036F\x03\x02\x02\x02" +
    "\u036F\u0370\x07E\x02\x02\u0370\u0371\x05`1\x02\u0371\x83\x03\x02\x02" +
    "\x02\u0372\u0376\x07W\x02\x02\u0373\u0374\x05\xC2b\x02\u0374\u0375\x07" +
    "H\x02\x02\u0375\u0377\x03\x02\x02\x02\u0376\u0373\x03\x02\x02\x02\u0376" +
    "\u0377\x03\x02\x02\x02\u0377\u0378\x03\x02\x02\x02\u0378\u037D\x05\xE8" +
    "u\x02\u0379\u037A\x07\x0E\x02\x02\u037A\u037C\x05\xE8u\x02\u037B\u0379" +
    "\x03\x02\x02\x02\u037C\u037F\x03\x02\x02\x02\u037D\u037B\x03\x02\x02\x02" +
    "\u037D\u037E\x03\x02\x02\x02\u037E\u0380\x03\x02\x02\x02\u037F\u037D\x03" +
    "\x02\x02\x02\u0380\u0381\x07E\x02\x02\u0381\u0382\x05`1\x02\u0382\x85" +
    "\x03\x02\x02\x02\u0383\u0384\x07F\x02\x02\u0384\u0385\x07\v\x02\x02\u0385" +
    "\u0386\x05^0\x02\u0386\u0387\x07\f\x02\x02\u0387\u0388\x07[\x02\x02\u0388" +
    "\u0389\x05`1\x02\u0389\u038A\x07\\\x02\x02\u038A\u038B\x05`1\x02\u038B" +
    "\x87\x03\x02\x02\x02\u038C\u038D\x07X\x02\x02\u038D\u038E\x07\t\x02\x02" +
    "\u038E\u038F\x05^0\x02\u038F\u0391\x07\n\x02\x02\u0390\u0392\x05\x8AF" +
    "\x02\u0391\u0390\x03\x02\x02\x02\u0392\u0393\x03\x02\x02\x02\u0393\u0391" +
    "\x03\x02\x02\x02\u0393\u0394\x03\x02\x02\x02\u0394\x89\x03\x02\x02\x02" +
    "\u0395\u0398\x07Y\x02\x02\u0396\u0399\x07\r\x02\x02\u0397\u0399\x05J&" +
    "\x02\u0398\u0396\x03\x02\x02\x02\u0398\u0397\x03\x02\x02\x02\u0399\u03A1" +
    "\x03\x02\x02\x02\u039A\u039D\x07\x0E\x02\x02\u039B\u039E\x07\r\x02\x02" +
    "\u039C\u039E\x05J&\x02\u039D\u039B\x03\x02\x02\x02\u039D\u039C\x03\x02" +
    "\x02\x02\u039E\u03A0\x03\x02\x02\x02\u039F\u039A\x03\x02\x02\x02\u03A0" +
    "\u03A3\x03\x02\x02\x02\u03A1\u039F\x03\x02\x02\x02\u03A1\u03A2\x03\x02" +
    "\x02\x02\u03A2\u03A4\x03\x02\x02\x02\u03A3\u03A1\x03\x02\x02\x02\u03A4" +
    "\u03A5\x07\t\x02\x02\u03A5\u03A6\x05^0\x02\u03A6\u03A7\x07\n\x02\x02\u03A7" +
    "\x8B\x03\x02\x02\x02\u03A8\u03AD\x05\x8EH\x02\u03A9\u03AA\x07^\x02\x02" +
    "\u03AA\u03AC\x05\x8EH\x02\u03AB\u03A9\x03\x02\x02\x02\u03AC\u03AF\x03" +
    "\x02\x02\x02\u03AD\u03AB\x03\x02\x02\x02\u03AD\u03AE\x03\x02\x02\x02\u03AE" +
    "\x8D\x03\x02\x02\x02\u03AF\u03AD\x03\x02\x02\x02\u03B0\u03B5\x05\x90I" +
    "\x02\u03B1\u03B2\x07_\x02\x02\u03B2\u03B4\x05\x90I\x02\u03B3\u03B1\x03" +
    "\x02\x02\x02\u03B4\u03B7\x03\x02\x02\x02\u03B5\u03B3\x03\x02\x02\x02\u03B5" +
    "\u03B6\x03\x02\x02\x02\u03B6\x8F\x03\x02\x02\x02\u03B7\u03B5\x03\x02\x02" +
    "\x02\u03B8\u03BA\x07`\x02\x02\u03B9\u03B8\x03\x02\x02\x02\u03B9\u03BA" +
    "\x03\x02\x02\x02\u03BA\u03BB\x03\x02\x02\x02\u03BB\u03BC\x05\x92J\x02" +
    "\u03BC\x91\x03\x02\x02\x02\u03BD\u03C0\x05\x94K\x02\u03BE\u03BF\t\x05" +
    "\x02\x02\u03BF\u03C1\x05\x94K\x02\u03C0\u03BE\x03\x02\x02\x02\u03C0\u03C1" +
    "\x03\x02\x02\x02\u03C1\x93\x03\x02\x02\x02\u03C2\u03C7\x05\x96L\x02\u03C3" +
    "\u03C4\x071\x02\x02\u03C4\u03C6\x05\x96L\x02\u03C5\u03C3\x03\x02\x02\x02" +
    "\u03C6\u03C9\x03\x02\x02\x02\u03C7\u03C5\x03\x02\x02\x02\u03C7\u03C8\x03" +
    "\x02\x02\x02\u03C8\x95\x03\x02\x02\x02\u03C9\u03C7\x03\x02\x02\x02\u03CA" +
    "\u03CD\x05\x98M\x02\u03CB\u03CC\x07a\x02\x02\u03CC\u03CE\x05\x98M\x02" +
    "\u03CD\u03CB\x03\x02\x02\x02\u03CD\u03CE\x03\x02\x02\x02\u03CE\x97\x03" +
    "\x02\x02\x02\u03CF\u03D4\x05\x9AN\x02\u03D0\u03D1\t\x06\x02\x02\u03D1" +
    "\u03D3\x05\x9AN\x02\u03D2\u03D0\x03\x02\x02\x02\u03D3\u03D6\x03\x02\x02" +
    "\x02\u03D4\u03D2\x03\x02\x02\x02\u03D4\u03D5\x03\x02\x02\x02\u03D5\x99" +
    "\x03\x02\x02\x02\u03D6\u03D4\x03\x02\x02\x02\u03D7\u03DC\x05\x9CO\x02" +
    "\u03D8\u03D9\t\x07\x02\x02\u03D9\u03DB\x05\x9CO\x02\u03DA\u03D8\x03\x02" +
    "\x02\x02\u03DB\u03DE\x03\x02\x02\x02\u03DC\u03DA\x03\x02\x02\x02\u03DC" +
    "\u03DD\x03\x02\x02\x02\u03DD\x9B\x03\x02\x02\x02\u03DE\u03DC\x03\x02\x02" +
    "\x02\u03DF\u03E3\x05\x9EP\x02\u03E0\u03E1\x07b\x02\x02\u03E1\u03E2\x07" +
    "c\x02\x02\u03E2\u03E4\x05\xE8u\x02\u03E3\u03E0\x03\x02\x02\x02\u03E3\u03E4" +
    "\x03\x02\x02\x02\u03E4\x9D\x03\x02\x02\x02\u03E5\u03E9\x05\xA0Q\x02\u03E6" +
    "\u03E7\x07e\x02\x02\u03E7\u03E8\x07d\x02\x02\u03E8\u03EA\x05\xE8u\x02" +
    "\u03E9\u03E6\x03\x02\x02\x02\u03E9\u03EA\x03\x02\x02\x02\u03EA\x9F\x03" +
    "\x02\x02\x02\u03EB\u03EF\x05\xA2R\x02\u03EC\u03ED\x07f\x02\x02\u03ED\u03EE" +
    "\x07H\x02\x02\u03EE\u03F0\x05\xE8u\x02\u03EF\u03EC\x03\x02\x02\x02\u03EF" +
    "\u03F0\x03\x02\x02\x02\u03F0\xA1\x03\x02\x02\x02\u03F1\u03F5\x05\xA4S" +
    "\x02\u03F2\u03F3\x07h\x02\x02\u03F3\u03F4\x07H\x02\x02\u03F4\u03F6\x05" +
    "\xF4{\x02\u03F5\u03F2\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6" +
    "\xA3\x03\x02\x02\x02\u03F7\u03FB\x05\xA6T\x02\u03F8\u03F9\x07g\x02\x02" +
    "\u03F9\u03FA\x07H\x02\x02\u03FA\u03FC\x05\xF4{\x02\u03FB\u03F8\x03\x02" +
    "\x02\x02\u03FB\u03FC\x03\x02\x02\x02\u03FC\xA5\x03\x02\x02\x02\u03FD\u0406" +
    "\x05\xAAV\x02\u03FE\u03FF\x07\x06\x02\x02\u03FF\u0400\x07/\x02\x02\u0400" +
    "\u0401\x03\x02\x02\x02\u0401\u0402\x05\xA8U\x02\u0402\u0403\x05\xCEh\x02" +
    "\u0403\u0405\x03\x02\x02\x02\u0404\u03FE\x03\x02\x02\x02\u0405\u0408\x03" +
    "\x02\x02\x02\u0406\u0404\x03\x02\x02\x02\u0406\u0407\x03\x02\x02\x02\u0407" +
    "\xA7\x03\x02\x02\x02\u0408\u0406\x03\x02\x02\x02\u0409\u040D\x05J&\x02" +
    "\u040A\u040D\x05\xC2b\x02\u040B\u040D\x05\xC4c\x02\u040C\u0409\x03\x02" +
    "\x02\x02\u040C\u040A\x03\x02\x02\x02\u040C\u040B\x03\x02\x02\x02\u040D" +
    "\xA9\x03\x02\x02\x02\u040E\u0410\t\x06\x02\x02\u040F\u040E\x03\x02\x02" +
    "\x02\u0410\u0413\x03\x02\x02\x02\u0411\u040F\x03\x02\x02\x02\u0411\u0412" +
    "\x03\x02\x02\x02\u0412\u0414\x03\x02\x02\x02\u0413\u0411\x03\x02\x02\x02" +
    "\u0414\u0415\x05\xACW\x02\u0415\xAB\x03\x02\x02\x02\u0416\u041A\x05\xB2" +
    "Z\x02\u0417\u041A\x05\xAEX\x02\u0418\u041A\x05\xB0Y\x02\u0419\u0416\x03" +
    "\x02\x02\x02\u0419\u0417\x03\x02\x02\x02\u0419\u0418\x03\x02\x02\x02\u041A" +
    "\xAD\x03\x02\x02\x02\u041B\u041C\x07o\x02\x02\u041C\u041D\x07n\x02\x02" +
    "\u041D\u041E\x05\xE8u\x02\u041E\u041F\x07\t\x02\x02\u041F\u0420\x05^0" +
    "\x02\u0420\u0421\x07\n\x02\x02\u0421\xAF\x03\x02\x02\x02\u0422\u0423\x07" +
    "p\x02\x02\u0423\u0424\x07n\x02\x02\u0424\u0425\x05\xE8u\x02\u0425\u0426" +
    "\x07\t\x02\x02\u0426\u0427\x05^0\x02\u0427\u0428\x07\n\x02\x02\u0428\xB1" +
    "\x03\x02\x02\x02\u0429\u042E\x05\xB4[\x02\u042A\u042B\x077\x02\x02\u042B" +
    "\u042D\x05\xB4[\x02\u042C\u042A\x03\x02\x02\x02\u042D\u0430\x03\x02\x02" +
    "\x02\u042E\u042C\x03\x02\x02\x02\u042E\u042F\x03\x02\x02\x02\u042F\xB3" +
    "\x03\x02\x02\x02\u0430\u042E\x03\x02\x02\x02\u0431\u0439\x05\xBE`\x02" +
    "\u0432\u0438\x05\xB6\\\x02\u0433\u0438\x05\xBA^\x02\u0434\u0438\x05\xBC" +
    "_\x02\u0435\u0438\x05\xB8]\x02\u0436\u0438\x05\xCEh\x02\u0437\u0432\x03" +
    "\x02\x02\x02\u0437\u0433\x03\x02\x02\x02\u0437\u0434\x03\x02\x02\x02\u0437" +
    "\u0435\x03\x02\x02\x02\u0437\u0436\x03\x02\x02\x02\u0438\u043B\x03\x02" +
    "\x02\x02\u0439\u0437\x03\x02\x02\x02\u0439\u043A\x03\x02\x02\x02\u043A" +
    "\xB5\x03\x02\x02\x02\u043B\u0439\x03\x02\x02\x02\u043C\u043D\x078\x02" +
    "\x02\u043D\u043E\x078\x02\x02\u043E\u043F\x05^0\x02\u043F\u0440\x079\x02" +
    "\x02\u0440\u0441\x079\x02\x02\u0441\xB7\x03\x02\x02\x02\u0442\u0443\x07" +
    "8\x02\x02\u0443\u0444\x079\x02\x02\u0444\xB9\x03\x02\x02\x02\u0445\u0446" +
    "\x078\x02\x02\u0446\u0447\x05^0\x02\u0447\u0448\x079\x02\x02\u0448\xBB" +
    "\x03\x02\x02\x02\u0449\u0450\x07:\x02\x02\u044A\u0451\x05\xFE\x80\x02" +
    "\u044B\u0451\x05\xFC\x7F\x02\u044C\u0451\x07\x90\x02\x02\u044D\u0451\x05" +
    "\xC4c\x02\u044E\u0451\x05\xC2b\x02\u044F\u0451\x05\xC6d\x02\u0450\u044A" +
    "\x03\x02\x02\x02\u0450\u044B\x03\x02\x02\x02\u0450\u044C\x03\x02\x02\x02" +
    "\u0450\u044D\x03\x02\x02\x02\u0450\u044E\x03\x02\x02\x02\u0450\u044F\x03" +
    "\x02\x02\x02\u0451\xBD\x03\x02\x02\x02\u0452\u0462\x07\x89\x02\x02\u0453" +
    "\u0462\x07l\x02\x02\u0454\u0462\x07m\x02\x02\u0455\u0462\x07\x8A\x02\x02" +
    "\u0456\u0462\x05\xFC\x7F\x02\u0457\u0462\x05\xC2b\x02\u0458\u0462\x05" +
    "\xC4c\x02\u0459\u0462\x05\xC6d\x02\u045A\u0462\x05\xEAv\x02";
jsoniqParser._serializedATNSegment2 = "\u045B\u0462\x05\xCCg\x02\u045C\u0462\x05\xC8e\x02\u045D\u0462\x05\xCA" +
    "f\x02\u045E\u0462\x05\xF8}\x02\u045F\u0462\x05\xD2j\x02\u0460\u0462\x05" +
    "\xC0a\x02\u0461\u0452\x03\x02\x02\x02\u0461\u0453\x03\x02\x02\x02\u0461" +
    "\u0454\x03\x02\x02\x02\u0461\u0455\x03\x02\x02\x02\u0461\u0456\x03\x02" +
    "\x02\x02\u0461\u0457\x03\x02\x02\x02\u0461\u0458\x03\x02\x02\x02\u0461" +
    "\u0459\x03\x02\x02\x02\u0461\u045A\x03\x02\x02\x02\u0461\u045B\x03\x02" +
    "\x02\x02\u0461\u045C\x03\x02\x02\x02\u0461\u045D\x03\x02\x02\x02\u0461" +
    "\u045E\x03\x02\x02\x02\u0461\u045F\x03\x02\x02\x02\u0461\u0460\x03\x02" +
    "\x02\x02\u0462\xBF\x03\x02\x02\x02\u0463\u0464\x07\t\x02\x02\u0464\u0465" +
    "\x05\x10\t\x02\u0465\u0466\x07\n\x02\x02\u0466\xC1\x03\x02\x02\x02\u0467" +
    "\u0468\x07\x07\x02\x02\u0468\u0469\x05J&\x02\u0469\xC3\x03\x02\x02\x02" +
    "\u046A\u046C\x07\v\x02\x02\u046B\u046D\x05^0\x02\u046C\u046B\x03\x02\x02" +
    "\x02\u046C\u046D\x03\x02\x02\x02\u046D\u046E\x03\x02\x02\x02\u046E\u046F" +
    "\x07\f\x02\x02\u046F\xC5\x03\x02\x02\x02\u0470\u0471\x07;\x02\x02\u0471" +
    "\xC7\x03\x02\x02\x02\u0472\u0473\x07\x12\x02\x02\u0473\u0474\x07\t\x02" +
    "\x02\u0474\u0475\x05^0\x02\u0475\u0476\x07\n\x02\x02\u0476\xC9\x03\x02" +
    "\x02\x02\u0477\u0478\x07k\x02\x02\u0478\u0479\x07\t\x02\x02\u0479\u047A" +
    "\x05^0\x02\u047A\u047B\x07\n\x02\x02\u047B\xCB\x03\x02\x02\x02\u047C\u047D" +
    "\x05J&\x02\u047D\u047E\x05\xCEh\x02\u047E\xCD\x03\x02\x02\x02\u047F\u0486" +
    "\x07\v\x02\x02\u0480\u0482\x05\xD0i\x02\u0481\u0483\x07\x10\x02\x02\u0482" +
    "\u0481\x03\x02\x02\x02\u0482\u0483\x03\x02\x02\x02\u0483\u0485\x03\x02" +
    "\x02\x02\u0484\u0480\x03\x02\x02\x02\u0485\u0488\x03\x02\x02\x02\u0486" +
    "\u0484\x03\x02\x02\x02\u0486\u0487\x03\x02\x02\x02\u0487\u0489\x03\x02" +
    "\x02\x02\u0488\u0486\x03\x02\x02\x02\u0489\u048A\x07\f\x02\x02\u048A\xCF" +
    "\x03\x02\x02\x02\u048B\u048E\x05`1\x02\u048C\u048E\x07\x88\x02\x02\u048D" +
    "\u048B\x03\x02\x02\x02\u048D\u048C\x03\x02\x02\x02\u048E\xD1\x03\x02\x02" +
    "\x02\u048F\u0492\x05\xD4k\x02\u0490\u0492\x05\xD6l\x02\u0491\u048F\x03" +
    "\x02\x02\x02\u0491\u0490\x03\x02\x02\x02\u0492\xD3\x03\x02\x02\x02\u0493" +
    "\u0494\x05J&\x02\u0494\u0495\x07<\x02\x02\u0495\u0496\x07\x8A\x02\x02" +
    "\u0496\xD5\x03\x02\x02\x02\u0497\u0498\x054\x1B\x02\u0498\u0499\x07!\x02" +
    "\x02\u0499\u049B\x07\v\x02\x02\u049A\u049C\x05Z.\x02\u049B\u049A\x03\x02" +
    "\x02\x02\u049B\u049C\x03\x02\x02\x02\u049C\u049D\x03\x02\x02\x02\u049D" +
    "\u04A0\x07\f\x02\x02\u049E\u049F\x07H\x02\x02\u049F\u04A1\x05\xE8u\x02" +
    "\u04A0\u049E\x03\x02\x02\x02\u04A0\u04A1\x03\x02\x02\x02\u04A1\u04A2\x03" +
    "\x02\x02\x02\u04A2\u04A3\x07\t\x02\x02\u04A3\u04A4\x05\x12\n\x02\u04A4" +
    "\u04A5\x07\n\x02\x02\u04A5\xD7\x03\x02\x02\x02\u04A6\u04A7\x07u\x02\x02" +
    "\u04A7\u04A8\x07~\x02\x02\u04A8\u04A9\x05`1\x02\u04A9\u04AA\x07|\x02\x02" +
    "\u04AA\u04AE\x05`1\x02\u04AB\u04AC\x07I\x02\x02\u04AC\u04AD\x07\x80\x02" +
    "\x02\u04AD\u04AF\x05`1\x02\u04AE\u04AB\x03\x02\x02\x02\u04AE\u04AF\x03" +
    "\x02\x02\x02\u04AF\u04BE\x03\x02\x02\x02\u04B0\u04B1\x07u\x02\x02\u04B1" +
    "\u04B2\x07~\x02\x02\u04B2\u04B7\x05\xF6|\x02\u04B3\u04B4\x07\x10\x02\x02" +
    "\u04B4\u04B6\x05\xF6|\x02\u04B5\u04B3\x03\x02\x02\x02\u04B6\u04B9\x03" +
    "\x02\x02\x02\u04B7\u04B5\x03\x02\x02\x02\u04B7\u04B8\x03\x02\x02\x02\u04B8" +
    "\u04BA\x03\x02\x02\x02\u04B9\u04B7\x03\x02\x02\x02\u04BA\u04BB\x07|\x02" +
    "\x02\u04BB\u04BC\x05`1\x02\u04BC\u04BE\x03\x02\x02\x02\u04BD\u04A6\x03" +
    "\x02\x02\x02\u04BD\u04B0\x03\x02\x02\x02\u04BE\xD9\x03\x02\x02\x02\u04BF" +
    "\u04C0\x07v\x02\x02\u04C0\u04C1\x07~\x02\x02\u04C1\u04C2\x05\xE4s\x02" +
    "\u04C2\xDB\x03\x02\x02\x02\u04C3\u04C4\x07w\x02\x02\u04C4\u04C5\x07~\x02" +
    "\x02\u04C5\u04C6\x05\xE4s\x02\u04C6\u04C7\x07H\x02\x02\u04C7\u04C8\x05" +
    "`1\x02\u04C8\xDD\x03\x02\x02\x02\u04C9\u04CA\x07x\x02\x02\u04CA\u04CB" +
    "\x07~\x02\x02\u04CB\u04CC\x07}\x02\x02\u04CC\u04CD\x07c\x02\x02\u04CD" +
    "\u04CE\x05\xE4s\x02\u04CE\u04CF\x07\x7F\x02\x02\u04CF\u04D0\x05`1\x02" +
    "\u04D0\xDF\x03\x02\x02\x02\u04D1\u04D2\x07y\x02\x02\u04D2\u04D3\x07~\x02" +
    "\x02\u04D3\u04D8\x05\xE6t\x02\u04D4\u04D5\x07\x10\x02\x02\u04D5\u04D7" +
    "\x05\xE6t\x02\u04D6\u04D4\x03\x02\x02\x02\u04D7\u04DA\x03\x02\x02\x02" +
    "\u04D8\u04D6\x03\x02\x02\x02\u04D8\u04D9\x03\x02\x02\x02\u04D9\u04DB\x03" +
    "\x02\x02\x02\u04DA\u04D8\x03\x02\x02\x02\u04DB\u04DC\x07z\x02\x02\u04DC" +
    "\u04DD\x05`1\x02\u04DD\u04DE\x07E\x02\x02\u04DE\u04DF\x05`1\x02\u04DF" +
    "\xE1\x03\x02\x02\x02\u04E0\u04E1\x07{\x02\x02\u04E1\u04E2\x07~\x02\x02" +
    "\u04E2\u04E3\x05`1\x02\u04E3\u04E4\x07|\x02\x02\u04E4\u04E5\x05`1\x02" +
    "\u04E5\xE3\x03\x02\x02\x02\u04E6\u04E9\x05\xBE`\x02\u04E7\u04EA\x05\xB6" +
    "\\\x02\u04E8\u04EA\x05\xBC_\x02\u04E9\u04E7\x03\x02\x02\x02\u04E9\u04E8" +
    "\x03\x02\x02\x02\u04EA\u04EB\x03\x02\x02\x02\u04EB\u04E9\x03\x02\x02\x02" +
    "\u04EB\u04EC\x03\x02\x02\x02\u04EC\xE5\x03\x02\x02\x02\u04ED\u04EE\x05" +
    "\xC2b\x02\u04EE\u04EF\x07\b\x02\x02\u04EF\u04F0\x05`1\x02\u04F0\xE7\x03" +
    "\x02\x02\x02\u04F1\u04F2\x07\v\x02\x02\u04F2\u04FA\x07\f\x02\x02\u04F3" +
    "\u04F7\x05\xECw\x02\u04F4\u04F8\x07\x88\x02\x02\u04F5\u04F8\x07\r\x02" +
    "\x02\u04F6\u04F8\x072\x02\x02\u04F7\u04F4\x03\x02\x02\x02\u04F7\u04F5" +
    "\x03\x02\x02\x02\u04F7\u04F6\x03\x02\x02\x02\u04F7\u04F8\x03\x02\x02\x02" +
    "\u04F8\u04FA\x03\x02\x02\x02\u04F9\u04F1\x03\x02\x02\x02\u04F9\u04F3\x03" +
    "\x02\x02\x02\u04FA\xE9\x03\x02\x02\x02\u04FB\u0504\x07\t\x02\x02\u04FC" +
    "\u0501\x05\xF6|\x02\u04FD\u04FE\x07\x10\x02\x02\u04FE\u0500\x05\xF6|\x02" +
    "\u04FF\u04FD\x03\x02\x02\x02\u0500\u0503\x03\x02\x02\x02\u0501\u04FF\x03" +
    "\x02\x02\x02\u0501\u0502\x03\x02\x02\x02\u0502\u0505\x03\x02\x02\x02\u0503" +
    "\u0501\x03\x02\x02\x02\u0504\u04FC\x03\x02\x02\x02\u0504\u0505\x03\x02" +
    "\x02\x02\u0505\u0506\x03\x02\x02\x02\u0506\u050C\x07\n\x02\x02\u0507\u0508" +
    "\x07=\x02\x02\u0508\u0509\x05^0\x02\u0509\u050A\x07>\x02\x02\u050A\u050C" +
    "\x03\x02\x02\x02\u050B\u04FB\x03\x02\x02\x02\u050B\u0507\x03\x02\x02\x02" +
    "\u050C\xEB\x03\x02\x02\x02\u050D\u0511\x05J&\x02\u050E\u0511\x07\x89\x02" +
    "\x02\u050F\u0511\x05\xEEx\x02\u0510\u050D\x03\x02\x02\x02\u0510\u050E" +
    "\x03\x02\x02\x02\u0510\u050F\x03\x02\x02\x02\u0511\xED\x03\x02\x02\x02" +
    "\u0512\u0515\x05\xF0y\x02\u0513\u0515\x05\xF2z\x02\u0514\u0512\x03\x02" +
    "\x02\x02\u0514\u0513\x03\x02\x02\x02\u0515\xEF\x03\x02\x02\x02\u0516\u0517" +
    "\x07!\x02\x02\u0517\u0518\x07\v\x02\x02\u0518\u0519\x07\r\x02\x02\u0519" +
    "\u051A\x07\f\x02\x02\u051A\xF1\x03\x02\x02\x02\u051B\u051C\x07!\x02\x02" +
    "\u051C\u0525\x07\v\x02\x02\u051D\u0522\x05\xE8u\x02\u051E\u051F\x07\x10" +
    "\x02\x02\u051F\u0521\x05\xE8u\x02\u0520\u051E\x03\x02\x02\x02\u0521\u0524" +
    "\x03\x02\x02\x02\u0522\u0520\x03\x02\x02\x02\u0522\u0523\x03\x02\x02\x02" +
    "\u0523\u0526\x03\x02\x02\x02\u0524\u0522\x03\x02\x02\x02\u0525\u051D\x03" +
    "\x02\x02\x02\u0525\u0526\x03\x02\x02\x02\u0526\u0527\x03\x02\x02\x02\u0527" +
    "\u0528\x07\f\x02\x02\u0528\u0529\x07H\x02\x02\u0529\u052A\x05\xE8u\x02" +
    "\u052A\xF3\x03\x02\x02\x02\u052B\u052D\x05\xECw\x02\u052C\u052E\x07\x88" +
    "\x02\x02\u052D\u052C\x03\x02\x02\x02\u052D\u052E\x03\x02\x02\x02\u052E" +
    "\xF5\x03\x02\x02\x02\u052F\u0532\x05`1\x02\u0530\u0532\x07\x90\x02\x02" +
    "\u0531\u052F\x03\x02\x02\x02\u0531\u0530\x03\x02\x02\x02\u0532\u0533\x03" +
    "\x02\x02\x02\u0533\u0534\t\b\x02\x02\u0534\u0535\x05`1\x02\u0535\xF7\x03" +
    "\x02\x02\x02\u0536\u0538\x078\x02\x02\u0537\u0539\x05^0\x02\u0538\u0537" +
    "\x03\x02\x02\x02\u0538\u0539\x03\x02\x02\x02\u0539\u053A\x03\x02\x02\x02" +
    "\u053A\u053B\x079\x02\x02\u053B\xF9\x03\x02\x02\x02\u053C\u053D\x05\xFC" +
    "\x7F\x02\u053D\xFB\x03\x02\x02\x02\u053E\u053F\x07\x87\x02\x02\u053F\xFD" +
    "\x03\x02\x02\x02\u0540\u0541\t\t\x02\x02\u0541\xFF\x03\x02\x02\x02\x86" +
    "\u0108\u010C\u011C\u0122\u012A\u0132\u013A\u0149\u0167\u016F\u0171\u0187" +
    "\u0191\u019B\u01A0\u01A5\u01A9\u01B5\u01B9\u01C2\u01C9\u01D7\u01DB\u01E0" +
    "\u01EA\u01F2\u01F6\u0202\u020E\u0224\u022C\u0231\u0234\u0238\u0241\u024A" +
    "\u024D\u0255\u025C\u025E\u0265\u026C\u026E\u0276\u027B\u0282\u0289\u0293" +
    "\u029A\u02A1\u02A8\u02B1\u02BB\u02BF\u02C7\u02C9\u02D5\u02DB\u02DF\u02E3" +
    "\u02EE\u02F4\u0303\u0309\u030D\u0311\u0318\u031F\u0325\u032A\u032C\u0330" +
    "\u0337\u033E\u0347\u0353\u035D\u0369\u036D\u0376\u037D\u0393\u0398\u039D" +
    "\u03A1\u03AD\u03B5\u03B9\u03C0\u03C7\u03CD\u03D4\u03DC\u03E3\u03E9\u03EF" +
    "\u03F5\u03FB\u0406\u040C\u0411\u0419\u042E\u0437\u0439\u0450\u0461\u046C" +
    "\u0482\u0486\u048D\u0491\u049B\u04A0\u04AE\u04B7\u04BD\u04D8\u04E9\u04EB" +
    "\u04F7\u04F9\u0501\u0504\u050B\u0510\u0514\u0522\u0525\u052D\u0531\u0538";
jsoniqParser._serializedATN = Utils.join([
    jsoniqParser._serializedATNSegment0,
    jsoniqParser._serializedATNSegment1,
    jsoniqParser._serializedATNSegment2,
], "");
export class ModuleAndThisIsItContext extends ParserRuleContext {
    module() {
        return this.getRuleContext(0, ModuleContext);
    }
    EOF() {
        return this.getToken(jsoniqParser.EOF, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_moduleAndThisIsIt;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterModuleAndThisIsIt) {
            listener.enterModuleAndThisIsIt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitModuleAndThisIsIt) {
            listener.exitModuleAndThisIsIt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitModuleAndThisIsIt) {
            return visitor.visitModuleAndThisIsIt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ModuleContext extends ParserRuleContext {
    libraryModule() {
        return this.tryGetRuleContext(0, LibraryModuleContext);
    }
    Kjsoniq() {
        return this.tryGetToken(jsoniqParser.Kjsoniq, 0);
    }
    Kversion() {
        return this.tryGetToken(jsoniqParser.Kversion, 0);
    }
    mainModule() {
        return this.tryGetRuleContext(0, MainModuleContext);
    }
    stringLiteral() {
        return this.tryGetRuleContext(0, StringLiteralContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_module;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterModule) {
            listener.enterModule(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitModule) {
            listener.exitModule(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitModule) {
            return visitor.visitModule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class MainModuleContext extends ParserRuleContext {
    prolog() {
        return this.getRuleContext(0, PrologContext);
    }
    program() {
        return this.getRuleContext(0, ProgramContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_mainModule;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMainModule) {
            listener.enterMainModule(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMainModule) {
            listener.exitMainModule(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMainModule) {
            return visitor.visitMainModule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LibraryModuleContext extends ParserRuleContext {
    NCName() {
        return this.getToken(jsoniqParser.NCName, 0);
    }
    uriLiteral() {
        return this.getRuleContext(0, UriLiteralContext);
    }
    prolog() {
        return this.getRuleContext(0, PrologContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_libraryModule;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLibraryModule) {
            listener.enterLibraryModule(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLibraryModule) {
            listener.exitLibraryModule(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLibraryModule) {
            return visitor.visitLibraryModule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PrologContext extends ParserRuleContext {
    annotatedDecl(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotatedDeclContext);
        }
        else {
            return this.getRuleContext(i, AnnotatedDeclContext);
        }
    }
    setter(i) {
        if (i === undefined) {
            return this.getRuleContexts(SetterContext);
        }
        else {
            return this.getRuleContext(i, SetterContext);
        }
    }
    namespaceDecl(i) {
        if (i === undefined) {
            return this.getRuleContexts(NamespaceDeclContext);
        }
        else {
            return this.getRuleContext(i, NamespaceDeclContext);
        }
    }
    moduleImport(i) {
        if (i === undefined) {
            return this.getRuleContexts(ModuleImportContext);
        }
        else {
            return this.getRuleContext(i, ModuleImportContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_prolog;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterProlog) {
            listener.enterProlog(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProlog) {
            listener.exitProlog(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitProlog) {
            return visitor.visitProlog(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ProgramContext extends ParserRuleContext {
    statementsAndOptionalExpr() {
        return this.getRuleContext(0, StatementsAndOptionalExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_program;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterProgram) {
            listener.enterProgram(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProgram) {
            listener.exitProgram(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class StatementsContext extends ParserRuleContext {
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_statements;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStatements) {
            listener.enterStatements(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStatements) {
            listener.exitStatements(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStatements) {
            return visitor.visitStatements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class StatementsAndExprContext extends ParserRuleContext {
    statements() {
        return this.getRuleContext(0, StatementsContext);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_statementsAndExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStatementsAndExpr) {
            listener.enterStatementsAndExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStatementsAndExpr) {
            listener.exitStatementsAndExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStatementsAndExpr) {
            return visitor.visitStatementsAndExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class StatementsAndOptionalExprContext extends ParserRuleContext {
    statements() {
        return this.getRuleContext(0, StatementsContext);
    }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_statementsAndOptionalExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStatementsAndOptionalExpr) {
            listener.enterStatementsAndOptionalExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStatementsAndOptionalExpr) {
            listener.exitStatementsAndOptionalExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStatementsAndOptionalExpr) {
            return visitor.visitStatementsAndOptionalExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class StatementContext extends ParserRuleContext {
    applyStatement() {
        return this.tryGetRuleContext(0, ApplyStatementContext);
    }
    assignStatement() {
        return this.tryGetRuleContext(0, AssignStatementContext);
    }
    blockStatement() {
        return this.tryGetRuleContext(0, BlockStatementContext);
    }
    breakStatement() {
        return this.tryGetRuleContext(0, BreakStatementContext);
    }
    continueStatement() {
        return this.tryGetRuleContext(0, ContinueStatementContext);
    }
    exitStatement() {
        return this.tryGetRuleContext(0, ExitStatementContext);
    }
    flowrStatement() {
        return this.tryGetRuleContext(0, FlowrStatementContext);
    }
    ifStatement() {
        return this.tryGetRuleContext(0, IfStatementContext);
    }
    switchStatement() {
        return this.tryGetRuleContext(0, SwitchStatementContext);
    }
    tryCatchStatement() {
        return this.tryGetRuleContext(0, TryCatchStatementContext);
    }
    typeSwitchStatement() {
        return this.tryGetRuleContext(0, TypeSwitchStatementContext);
    }
    varDeclStatement() {
        return this.tryGetRuleContext(0, VarDeclStatementContext);
    }
    whileStatement() {
        return this.tryGetRuleContext(0, WhileStatementContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_statement;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ApplyStatementContext extends ParserRuleContext {
    exprSimple() {
        return this.getRuleContext(0, ExprSimpleContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_applyStatement;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterApplyStatement) {
            listener.enterApplyStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitApplyStatement) {
            listener.exitApplyStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitApplyStatement) {
            return visitor.visitApplyStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AssignStatementContext extends ParserRuleContext {
    qname() {
        return this.getRuleContext(0, QnameContext);
    }
    exprSingle() {
        return this.getRuleContext(0, ExprSingleContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_assignStatement;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAssignStatement) {
            listener.enterAssignStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAssignStatement) {
            listener.exitAssignStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignStatement) {
            return visitor.visitAssignStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class BlockStatementContext extends ParserRuleContext {
    statements() {
        return this.getRuleContext(0, StatementsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_blockStatement;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterBlockStatement) {
            listener.enterBlockStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBlockStatement) {
            listener.exitBlockStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBlockStatement) {
            return visitor.visitBlockStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class BreakStatementContext extends ParserRuleContext {
    Kbreak() {
        return this.getToken(jsoniqParser.Kbreak, 0);
    }
    Kloop() {
        return this.getToken(jsoniqParser.Kloop, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_breakStatement;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterBreakStatement) {
            listener.enterBreakStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBreakStatement) {
            listener.exitBreakStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBreakStatement) {
            return visitor.visitBreakStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ContinueStatementContext extends ParserRuleContext {
    Kcontinue() {
        return this.getToken(jsoniqParser.Kcontinue, 0);
    }
    Kloop() {
        return this.getToken(jsoniqParser.Kloop, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_continueStatement;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterContinueStatement) {
            listener.enterContinueStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitContinueStatement) {
            listener.exitContinueStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitContinueStatement) {
            return visitor.visitContinueStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExitStatementContext extends ParserRuleContext {
    Kexit() {
        return this.getToken(jsoniqParser.Kexit, 0);
    }
    Kreturning() {
        return this.getToken(jsoniqParser.Kreturning, 0);
    }
    exprSingle() {
        return this.getRuleContext(0, ExprSingleContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_exitStatement;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExitStatement) {
            listener.enterExitStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExitStatement) {
            listener.exitExitStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExitStatement) {
            return visitor.visitExitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FlowrStatementContext extends ParserRuleContext {
    Kreturn() {
        return this.getToken(jsoniqParser.Kreturn, 0);
    }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    forClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(ForClauseContext);
        }
        else {
            return this.getRuleContext(i, ForClauseContext);
        }
    }
    letClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(LetClauseContext);
        }
        else {
            return this.getRuleContext(i, LetClauseContext);
        }
    }
    whereClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(WhereClauseContext);
        }
        else {
            return this.getRuleContext(i, WhereClauseContext);
        }
    }
    groupByClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(GroupByClauseContext);
        }
        else {
            return this.getRuleContext(i, GroupByClauseContext);
        }
    }
    orderByClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(OrderByClauseContext);
        }
        else {
            return this.getRuleContext(i, OrderByClauseContext);
        }
    }
    countClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(CountClauseContext);
        }
        else {
            return this.getRuleContext(i, CountClauseContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_flowrStatement;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFlowrStatement) {
            listener.enterFlowrStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFlowrStatement) {
            listener.exitFlowrStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFlowrStatement) {
            return visitor.visitFlowrStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class IfStatementContext extends ParserRuleContext {
    Kif() {
        return this.getToken(jsoniqParser.Kif, 0);
    }
    Kthen() {
        return this.getToken(jsoniqParser.Kthen, 0);
    }
    Kelse() {
        return this.getToken(jsoniqParser.Kelse, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_ifStatement;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIfStatement) {
            listener.enterIfStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIfStatement) {
            listener.exitIfStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIfStatement) {
            return visitor.visitIfStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SwitchStatementContext extends ParserRuleContext {
    Kswitch() {
        return this.getToken(jsoniqParser.Kswitch, 0);
    }
    Kdefault() {
        return this.getToken(jsoniqParser.Kdefault, 0);
    }
    Kreturn() {
        return this.getToken(jsoniqParser.Kreturn, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    switchCaseStatement(i) {
        if (i === undefined) {
            return this.getRuleContexts(SwitchCaseStatementContext);
        }
        else {
            return this.getRuleContext(i, SwitchCaseStatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._cases = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_switchStatement;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSwitchStatement) {
            listener.enterSwitchStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSwitchStatement) {
            listener.exitSwitchStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSwitchStatement) {
            return visitor.visitSwitchStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SwitchCaseStatementContext extends ParserRuleContext {
    Kreturn() {
        return this.getToken(jsoniqParser.Kreturn, 0);
    }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    Kcase(i) {
        if (i === undefined) {
            return this.getTokens(jsoniqParser.Kcase);
        }
        else {
            return this.getToken(jsoniqParser.Kcase, i);
        }
    }
    exprSingle(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprSingleContext);
        }
        else {
            return this.getRuleContext(i, ExprSingleContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._cond = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_switchCaseStatement;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSwitchCaseStatement) {
            listener.enterSwitchCaseStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSwitchCaseStatement) {
            listener.exitSwitchCaseStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSwitchCaseStatement) {
            return visitor.visitSwitchCaseStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TryCatchStatementContext extends ParserRuleContext {
    Ktry() {
        return this.getToken(jsoniqParser.Ktry, 0);
    }
    blockStatement() {
        return this.getRuleContext(0, BlockStatementContext);
    }
    catchCaseStatement(i) {
        if (i === undefined) {
            return this.getRuleContexts(CatchCaseStatementContext);
        }
        else {
            return this.getRuleContext(i, CatchCaseStatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._catches = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_tryCatchStatement;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTryCatchStatement) {
            listener.enterTryCatchStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTryCatchStatement) {
            listener.exitTryCatchStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTryCatchStatement) {
            return visitor.visitTryCatchStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CatchCaseStatementContext extends ParserRuleContext {
    Kcatch() {
        return this.getToken(jsoniqParser.Kcatch, 0);
    }
    blockStatement() {
        return this.getRuleContext(0, BlockStatementContext);
    }
    qname(i) {
        if (i === undefined) {
            return this.getRuleContexts(QnameContext);
        }
        else {
            return this.getRuleContext(i, QnameContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._jokers = [];
        this._errors = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_catchCaseStatement;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCatchCaseStatement) {
            listener.enterCatchCaseStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCatchCaseStatement) {
            listener.exitCatchCaseStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCatchCaseStatement) {
            return visitor.visitCatchCaseStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TypeSwitchStatementContext extends ParserRuleContext {
    Ktypeswitch() {
        return this.getToken(jsoniqParser.Ktypeswitch, 0);
    }
    Kdefault() {
        return this.getToken(jsoniqParser.Kdefault, 0);
    }
    Kreturn() {
        return this.getToken(jsoniqParser.Kreturn, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    caseStatement(i) {
        if (i === undefined) {
            return this.getRuleContexts(CaseStatementContext);
        }
        else {
            return this.getRuleContext(i, CaseStatementContext);
        }
    }
    varRef() {
        return this.tryGetRuleContext(0, VarRefContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._cases = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_typeSwitchStatement;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeSwitchStatement) {
            listener.enterTypeSwitchStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeSwitchStatement) {
            listener.exitTypeSwitchStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeSwitchStatement) {
            return visitor.visitTypeSwitchStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CaseStatementContext extends ParserRuleContext {
    Kcase() {
        return this.getToken(jsoniqParser.Kcase, 0);
    }
    Kreturn() {
        return this.getToken(jsoniqParser.Kreturn, 0);
    }
    sequenceType(i) {
        if (i === undefined) {
            return this.getRuleContexts(SequenceTypeContext);
        }
        else {
            return this.getRuleContext(i, SequenceTypeContext);
        }
    }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    Kas() {
        return this.tryGetToken(jsoniqParser.Kas, 0);
    }
    varRef() {
        return this.tryGetRuleContext(0, VarRefContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._union = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_caseStatement;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCaseStatement) {
            listener.enterCaseStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCaseStatement) {
            listener.exitCaseStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCaseStatement) {
            return visitor.visitCaseStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AnnotationContext extends ParserRuleContext {
    qname() {
        return this.getRuleContext(0, QnameContext);
    }
    Literal(i) {
        if (i === undefined) {
            return this.getTokens(jsoniqParser.Literal);
        }
        else {
            return this.getToken(jsoniqParser.Literal, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_annotation;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation) {
            listener.enterAnnotation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation) {
            listener.exitAnnotation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation) {
            return visitor.visitAnnotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AnnotationsContext extends ParserRuleContext {
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_annotations;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotations) {
            listener.enterAnnotations(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotations) {
            listener.exitAnnotations(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotations) {
            return visitor.visitAnnotations(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class VarDeclStatementContext extends ParserRuleContext {
    annotations() {
        return this.getRuleContext(0, AnnotationsContext);
    }
    Kvariable() {
        return this.getToken(jsoniqParser.Kvariable, 0);
    }
    varDeclForStatement(i) {
        if (i === undefined) {
            return this.getRuleContexts(VarDeclForStatementContext);
        }
        else {
            return this.getRuleContext(i, VarDeclForStatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_varDeclStatement;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterVarDeclStatement) {
            listener.enterVarDeclStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVarDeclStatement) {
            listener.exitVarDeclStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVarDeclStatement) {
            return visitor.visitVarDeclStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class VarDeclForStatementContext extends ParserRuleContext {
    varRef() {
        return this.getRuleContext(0, VarRefContext);
    }
    Kas() {
        return this.tryGetToken(jsoniqParser.Kas, 0);
    }
    sequenceType() {
        return this.tryGetRuleContext(0, SequenceTypeContext);
    }
    exprSingle() {
        return this.tryGetRuleContext(0, ExprSingleContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._expr_vals = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_varDeclForStatement;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterVarDeclForStatement) {
            listener.enterVarDeclForStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVarDeclForStatement) {
            listener.exitVarDeclForStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVarDeclForStatement) {
            return visitor.visitVarDeclForStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class WhileStatementContext extends ParserRuleContext {
    Kwhile() {
        return this.getToken(jsoniqParser.Kwhile, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_whileStatement;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterWhileStatement) {
            listener.enterWhileStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWhileStatement) {
            listener.exitWhileStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitWhileStatement) {
            return visitor.visitWhileStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SetterContext extends ParserRuleContext {
    defaultCollationDecl() {
        return this.tryGetRuleContext(0, DefaultCollationDeclContext);
    }
    orderingModeDecl() {
        return this.tryGetRuleContext(0, OrderingModeDeclContext);
    }
    emptyOrderDecl() {
        return this.tryGetRuleContext(0, EmptyOrderDeclContext);
    }
    decimalFormatDecl() {
        return this.tryGetRuleContext(0, DecimalFormatDeclContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_setter;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSetter) {
            listener.enterSetter(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSetter) {
            listener.exitSetter(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSetter) {
            return visitor.visitSetter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NamespaceDeclContext extends ParserRuleContext {
    Kdeclare() {
        return this.getToken(jsoniqParser.Kdeclare, 0);
    }
    NCName() {
        return this.getToken(jsoniqParser.NCName, 0);
    }
    uriLiteral() {
        return this.getRuleContext(0, UriLiteralContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_namespaceDecl;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterNamespaceDecl) {
            listener.enterNamespaceDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNamespaceDecl) {
            listener.exitNamespaceDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNamespaceDecl) {
            return visitor.visitNamespaceDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AnnotatedDeclContext extends ParserRuleContext {
    functionDecl() {
        return this.tryGetRuleContext(0, FunctionDeclContext);
    }
    varDecl() {
        return this.tryGetRuleContext(0, VarDeclContext);
    }
    typeDecl() {
        return this.tryGetRuleContext(0, TypeDeclContext);
    }
    contextItemDecl() {
        return this.tryGetRuleContext(0, ContextItemDeclContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_annotatedDecl;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotatedDecl) {
            listener.enterAnnotatedDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotatedDecl) {
            listener.exitAnnotatedDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotatedDecl) {
            return visitor.visitAnnotatedDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DefaultCollationDeclContext extends ParserRuleContext {
    Kdeclare() {
        return this.getToken(jsoniqParser.Kdeclare, 0);
    }
    Kdefault() {
        return this.getToken(jsoniqParser.Kdefault, 0);
    }
    Kcollation() {
        return this.getToken(jsoniqParser.Kcollation, 0);
    }
    uriLiteral() {
        return this.getRuleContext(0, UriLiteralContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_defaultCollationDecl;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterDefaultCollationDecl) {
            listener.enterDefaultCollationDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDefaultCollationDecl) {
            listener.exitDefaultCollationDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDefaultCollationDecl) {
            return visitor.visitDefaultCollationDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class OrderingModeDeclContext extends ParserRuleContext {
    Kdeclare() {
        return this.getToken(jsoniqParser.Kdeclare, 0);
    }
    Kunordered() {
        return this.getToken(jsoniqParser.Kunordered, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_orderingModeDecl;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterOrderingModeDecl) {
            listener.enterOrderingModeDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOrderingModeDecl) {
            listener.exitOrderingModeDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOrderingModeDecl) {
            return visitor.visitOrderingModeDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class EmptyOrderDeclContext extends ParserRuleContext {
    Kdeclare() {
        return this.getToken(jsoniqParser.Kdeclare, 0);
    }
    Kdefault() {
        return this.getToken(jsoniqParser.Kdefault, 0);
    }
    Korder() {
        return this.getToken(jsoniqParser.Korder, 0);
    }
    Kempty() {
        return this.getToken(jsoniqParser.Kempty, 0);
    }
    Kgreatest() {
        return this.tryGetToken(jsoniqParser.Kgreatest, 0);
    }
    Kleast() {
        return this.tryGetToken(jsoniqParser.Kleast, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_emptyOrderDecl;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterEmptyOrderDecl) {
            listener.enterEmptyOrderDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEmptyOrderDecl) {
            listener.exitEmptyOrderDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEmptyOrderDecl) {
            return visitor.visitEmptyOrderDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DecimalFormatDeclContext extends ParserRuleContext {
    Kdeclare() {
        return this.getToken(jsoniqParser.Kdeclare, 0);
    }
    dfPropertyName(i) {
        if (i === undefined) {
            return this.getRuleContexts(DfPropertyNameContext);
        }
        else {
            return this.getRuleContext(i, DfPropertyNameContext);
        }
    }
    stringLiteral(i) {
        if (i === undefined) {
            return this.getRuleContexts(StringLiteralContext);
        }
        else {
            return this.getRuleContext(i, StringLiteralContext);
        }
    }
    qname() {
        return this.tryGetRuleContext(0, QnameContext);
    }
    Kdefault() {
        return this.tryGetToken(jsoniqParser.Kdefault, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_decimalFormatDecl;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterDecimalFormatDecl) {
            listener.enterDecimalFormatDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDecimalFormatDecl) {
            listener.exitDecimalFormatDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDecimalFormatDecl) {
            return visitor.visitDecimalFormatDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class QnameContext extends ParserRuleContext {
    NCName(i) {
        if (i === undefined) {
            return this.getTokens(jsoniqParser.NCName);
        }
        else {
            return this.getToken(jsoniqParser.NCName, i);
        }
    }
    keyWords(i) {
        if (i === undefined) {
            return this.getRuleContexts(KeyWordsContext);
        }
        else {
            return this.getRuleContext(i, KeyWordsContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_qname;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterQname) {
            listener.enterQname(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQname) {
            listener.exitQname(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQname) {
            return visitor.visitQname(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DfPropertyNameContext extends ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_dfPropertyName;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterDfPropertyName) {
            listener.enterDfPropertyName(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDfPropertyName) {
            listener.exitDfPropertyName(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDfPropertyName) {
            return visitor.visitDfPropertyName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ModuleImportContext extends ParserRuleContext {
    uriLiteral(i) {
        if (i === undefined) {
            return this.getRuleContexts(UriLiteralContext);
        }
        else {
            return this.getRuleContext(i, UriLiteralContext);
        }
    }
    Kat() {
        return this.tryGetToken(jsoniqParser.Kat, 0);
    }
    NCName() {
        return this.tryGetToken(jsoniqParser.NCName, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_moduleImport;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterModuleImport) {
            listener.enterModuleImport(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitModuleImport) {
            listener.exitModuleImport(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitModuleImport) {
            return visitor.visitModuleImport(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class VarDeclContext extends ParserRuleContext {
    Kdeclare() {
        return this.getToken(jsoniqParser.Kdeclare, 0);
    }
    annotations() {
        return this.getRuleContext(0, AnnotationsContext);
    }
    Kvariable() {
        return this.getToken(jsoniqParser.Kvariable, 0);
    }
    varRef() {
        return this.getRuleContext(0, VarRefContext);
    }
    Kas() {
        return this.tryGetToken(jsoniqParser.Kas, 0);
    }
    sequenceType() {
        return this.tryGetRuleContext(0, SequenceTypeContext);
    }
    exprSingle() {
        return this.tryGetRuleContext(0, ExprSingleContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_varDecl;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterVarDecl) {
            listener.enterVarDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVarDecl) {
            listener.exitVarDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVarDecl) {
            return visitor.visitVarDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ContextItemDeclContext extends ParserRuleContext {
    Kdeclare() {
        return this.getToken(jsoniqParser.Kdeclare, 0);
    }
    Kcontext() {
        return this.getToken(jsoniqParser.Kcontext, 0);
    }
    Kitem() {
        return this.getToken(jsoniqParser.Kitem, 0);
    }
    Kas() {
        return this.tryGetToken(jsoniqParser.Kas, 0);
    }
    sequenceType() {
        return this.tryGetRuleContext(0, SequenceTypeContext);
    }
    exprSingle() {
        return this.tryGetRuleContext(0, ExprSingleContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_contextItemDecl;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterContextItemDecl) {
            listener.enterContextItemDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitContextItemDecl) {
            listener.exitContextItemDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitContextItemDecl) {
            return visitor.visitContextItemDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionDeclContext extends ParserRuleContext {
    Kdeclare() {
        return this.getToken(jsoniqParser.Kdeclare, 0);
    }
    annotations() {
        return this.getRuleContext(0, AnnotationsContext);
    }
    qname() {
        return this.getRuleContext(0, QnameContext);
    }
    paramList() {
        return this.tryGetRuleContext(0, ParamListContext);
    }
    Kas() {
        return this.tryGetToken(jsoniqParser.Kas, 0);
    }
    sequenceType() {
        return this.tryGetRuleContext(0, SequenceTypeContext);
    }
    statementsAndOptionalExpr() {
        return this.tryGetRuleContext(0, StatementsAndOptionalExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_functionDecl;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionDecl) {
            listener.enterFunctionDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionDecl) {
            listener.exitFunctionDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionDecl) {
            return visitor.visitFunctionDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TypeDeclContext extends ParserRuleContext {
    Kdeclare() {
        return this.getToken(jsoniqParser.Kdeclare, 0);
    }
    Ktype() {
        return this.getToken(jsoniqParser.Ktype, 0);
    }
    Kas() {
        return this.getToken(jsoniqParser.Kas, 0);
    }
    qname() {
        return this.getRuleContext(0, QnameContext);
    }
    exprSingle() {
        return this.getRuleContext(0, ExprSingleContext);
    }
    schemaLanguage() {
        return this.tryGetRuleContext(0, SchemaLanguageContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_typeDecl;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeDecl) {
            listener.enterTypeDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeDecl) {
            listener.exitTypeDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeDecl) {
            return visitor.visitTypeDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SchemaLanguageContext extends ParserRuleContext {
    Kjson() {
        return this.tryGetToken(jsoniqParser.Kjson, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_schemaLanguage;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSchemaLanguage) {
            listener.enterSchemaLanguage(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSchemaLanguage) {
            listener.exitSchemaLanguage(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSchemaLanguage) {
            return visitor.visitSchemaLanguage(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParamListContext extends ParserRuleContext {
    param(i) {
        if (i === undefined) {
            return this.getRuleContexts(ParamContext);
        }
        else {
            return this.getRuleContext(i, ParamContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_paramList;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterParamList) {
            listener.enterParamList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParamList) {
            listener.exitParamList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParamList) {
            return visitor.visitParamList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParamContext extends ParserRuleContext {
    qname() {
        return this.getRuleContext(0, QnameContext);
    }
    Kas() {
        return this.tryGetToken(jsoniqParser.Kas, 0);
    }
    sequenceType() {
        return this.tryGetRuleContext(0, SequenceTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_param;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterParam) {
            listener.enterParam(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParam) {
            listener.exitParam(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParam) {
            return visitor.visitParam(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExprContext extends ParserRuleContext {
    exprSingle(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprSingleContext);
        }
        else {
            return this.getRuleContext(i, ExprSingleContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_expr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpr) {
            listener.enterExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpr) {
            listener.exitExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpr) {
            return visitor.visitExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExprSingleContext extends ParserRuleContext {
    exprSimple() {
        return this.tryGetRuleContext(0, ExprSimpleContext);
    }
    flowrExpr() {
        return this.tryGetRuleContext(0, FlowrExprContext);
    }
    switchExpr() {
        return this.tryGetRuleContext(0, SwitchExprContext);
    }
    typeSwitchExpr() {
        return this.tryGetRuleContext(0, TypeSwitchExprContext);
    }
    ifExpr() {
        return this.tryGetRuleContext(0, IfExprContext);
    }
    tryCatchExpr() {
        return this.tryGetRuleContext(0, TryCatchExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_exprSingle;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExprSingle) {
            listener.enterExprSingle(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExprSingle) {
            listener.exitExprSingle(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExprSingle) {
            return visitor.visitExprSingle(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExprSimpleContext extends ParserRuleContext {
    quantifiedExpr() {
        return this.tryGetRuleContext(0, QuantifiedExprContext);
    }
    orExpr() {
        return this.tryGetRuleContext(0, OrExprContext);
    }
    insertExpr() {
        return this.tryGetRuleContext(0, InsertExprContext);
    }
    deleteExpr() {
        return this.tryGetRuleContext(0, DeleteExprContext);
    }
    renameExpr() {
        return this.tryGetRuleContext(0, RenameExprContext);
    }
    replaceExpr() {
        return this.tryGetRuleContext(0, ReplaceExprContext);
    }
    transformExpr() {
        return this.tryGetRuleContext(0, TransformExprContext);
    }
    appendExpr() {
        return this.tryGetRuleContext(0, AppendExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_exprSimple;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExprSimple) {
            listener.enterExprSimple(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExprSimple) {
            listener.exitExprSimple(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExprSimple) {
            return visitor.visitExprSimple(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FlowrExprContext extends ParserRuleContext {
    Kreturn() {
        return this.getToken(jsoniqParser.Kreturn, 0);
    }
    exprSingle() {
        return this.getRuleContext(0, ExprSingleContext);
    }
    forClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(ForClauseContext);
        }
        else {
            return this.getRuleContext(i, ForClauseContext);
        }
    }
    letClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(LetClauseContext);
        }
        else {
            return this.getRuleContext(i, LetClauseContext);
        }
    }
    whereClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(WhereClauseContext);
        }
        else {
            return this.getRuleContext(i, WhereClauseContext);
        }
    }
    groupByClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(GroupByClauseContext);
        }
        else {
            return this.getRuleContext(i, GroupByClauseContext);
        }
    }
    orderByClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(OrderByClauseContext);
        }
        else {
            return this.getRuleContext(i, OrderByClauseContext);
        }
    }
    countClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(CountClauseContext);
        }
        else {
            return this.getRuleContext(i, CountClauseContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_flowrExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFlowrExpr) {
            listener.enterFlowrExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFlowrExpr) {
            listener.exitFlowrExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFlowrExpr) {
            return visitor.visitFlowrExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ForClauseContext extends ParserRuleContext {
    Kfor() {
        return this.getToken(jsoniqParser.Kfor, 0);
    }
    forVar(i) {
        if (i === undefined) {
            return this.getRuleContexts(ForVarContext);
        }
        else {
            return this.getRuleContext(i, ForVarContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._vars = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_forClause;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterForClause) {
            listener.enterForClause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitForClause) {
            listener.exitForClause(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitForClause) {
            return visitor.visitForClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ForVarContext extends ParserRuleContext {
    Kin() {
        return this.getToken(jsoniqParser.Kin, 0);
    }
    varRef(i) {
        if (i === undefined) {
            return this.getRuleContexts(VarRefContext);
        }
        else {
            return this.getRuleContext(i, VarRefContext);
        }
    }
    exprSingle() {
        return this.getRuleContext(0, ExprSingleContext);
    }
    Kas() {
        return this.tryGetToken(jsoniqParser.Kas, 0);
    }
    Kempty() {
        return this.tryGetToken(jsoniqParser.Kempty, 0);
    }
    Kat() {
        return this.tryGetToken(jsoniqParser.Kat, 0);
    }
    sequenceType() {
        return this.tryGetRuleContext(0, SequenceTypeContext);
    }
    Kallowing() {
        return this.tryGetToken(jsoniqParser.Kallowing, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_forVar;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterForVar) {
            listener.enterForVar(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitForVar) {
            listener.exitForVar(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitForVar) {
            return visitor.visitForVar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LetClauseContext extends ParserRuleContext {
    Klet() {
        return this.getToken(jsoniqParser.Klet, 0);
    }
    letVar(i) {
        if (i === undefined) {
            return this.getRuleContexts(LetVarContext);
        }
        else {
            return this.getRuleContext(i, LetVarContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._vars = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_letClause;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLetClause) {
            listener.enterLetClause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLetClause) {
            listener.exitLetClause(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLetClause) {
            return visitor.visitLetClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LetVarContext extends ParserRuleContext {
    varRef() {
        return this.getRuleContext(0, VarRefContext);
    }
    exprSingle() {
        return this.getRuleContext(0, ExprSingleContext);
    }
    Kas() {
        return this.tryGetToken(jsoniqParser.Kas, 0);
    }
    sequenceType() {
        return this.tryGetRuleContext(0, SequenceTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_letVar;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLetVar) {
            listener.enterLetVar(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLetVar) {
            listener.exitLetVar(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLetVar) {
            return visitor.visitLetVar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class WhereClauseContext extends ParserRuleContext {
    Kwhere() {
        return this.getToken(jsoniqParser.Kwhere, 0);
    }
    exprSingle() {
        return this.getRuleContext(0, ExprSingleContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_whereClause;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterWhereClause) {
            listener.enterWhereClause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWhereClause) {
            listener.exitWhereClause(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitWhereClause) {
            return visitor.visitWhereClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class GroupByClauseContext extends ParserRuleContext {
    Kgroup() {
        return this.getToken(jsoniqParser.Kgroup, 0);
    }
    Kby() {
        return this.getToken(jsoniqParser.Kby, 0);
    }
    groupByVar(i) {
        if (i === undefined) {
            return this.getRuleContexts(GroupByVarContext);
        }
        else {
            return this.getRuleContext(i, GroupByVarContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._vars = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_groupByClause;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterGroupByClause) {
            listener.enterGroupByClause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGroupByClause) {
            listener.exitGroupByClause(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGroupByClause) {
            return visitor.visitGroupByClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class GroupByVarContext extends ParserRuleContext {
    varRef() {
        return this.getRuleContext(0, VarRefContext);
    }
    Kcollation() {
        return this.tryGetToken(jsoniqParser.Kcollation, 0);
    }
    exprSingle() {
        return this.tryGetRuleContext(0, ExprSingleContext);
    }
    uriLiteral() {
        return this.tryGetRuleContext(0, UriLiteralContext);
    }
    Kas() {
        return this.tryGetToken(jsoniqParser.Kas, 0);
    }
    sequenceType() {
        return this.tryGetRuleContext(0, SequenceTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_groupByVar;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterGroupByVar) {
            listener.enterGroupByVar(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGroupByVar) {
            listener.exitGroupByVar(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGroupByVar) {
            return visitor.visitGroupByVar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class OrderByClauseContext extends ParserRuleContext {
    orderByExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(OrderByExprContext);
        }
        else {
            return this.getRuleContext(i, OrderByExprContext);
        }
    }
    Korder() {
        return this.tryGetToken(jsoniqParser.Korder, 0);
    }
    Kby() {
        return this.tryGetToken(jsoniqParser.Kby, 0);
    }
    Kstable() {
        return this.tryGetToken(jsoniqParser.Kstable, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_orderByClause;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterOrderByClause) {
            listener.enterOrderByClause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOrderByClause) {
            listener.exitOrderByClause(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOrderByClause) {
            return visitor.visitOrderByClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class OrderByExprContext extends ParserRuleContext {
    exprSingle() {
        return this.getRuleContext(0, ExprSingleContext);
    }
    Kascending() {
        return this.tryGetToken(jsoniqParser.Kascending, 0);
    }
    Kempty() {
        return this.tryGetToken(jsoniqParser.Kempty, 0);
    }
    Kcollation() {
        return this.tryGetToken(jsoniqParser.Kcollation, 0);
    }
    Kdescending() {
        return this.tryGetToken(jsoniqParser.Kdescending, 0);
    }
    uriLiteral() {
        return this.tryGetRuleContext(0, UriLiteralContext);
    }
    Kgreatest() {
        return this.tryGetToken(jsoniqParser.Kgreatest, 0);
    }
    Kleast() {
        return this.tryGetToken(jsoniqParser.Kleast, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_orderByExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterOrderByExpr) {
            listener.enterOrderByExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOrderByExpr) {
            listener.exitOrderByExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOrderByExpr) {
            return visitor.visitOrderByExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CountClauseContext extends ParserRuleContext {
    Kcount() {
        return this.getToken(jsoniqParser.Kcount, 0);
    }
    varRef() {
        return this.getRuleContext(0, VarRefContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_countClause;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCountClause) {
            listener.enterCountClause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCountClause) {
            listener.exitCountClause(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCountClause) {
            return visitor.visitCountClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class QuantifiedExprContext extends ParserRuleContext {
    Ksatisfies() {
        return this.getToken(jsoniqParser.Ksatisfies, 0);
    }
    exprSingle() {
        return this.getRuleContext(0, ExprSingleContext);
    }
    quantifiedExprVar(i) {
        if (i === undefined) {
            return this.getRuleContexts(QuantifiedExprVarContext);
        }
        else {
            return this.getRuleContext(i, QuantifiedExprVarContext);
        }
    }
    Ksome() {
        return this.tryGetToken(jsoniqParser.Ksome, 0);
    }
    Kevery() {
        return this.tryGetToken(jsoniqParser.Kevery, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._vars = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_quantifiedExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterQuantifiedExpr) {
            listener.enterQuantifiedExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuantifiedExpr) {
            listener.exitQuantifiedExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQuantifiedExpr) {
            return visitor.visitQuantifiedExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class QuantifiedExprVarContext extends ParserRuleContext {
    varRef() {
        return this.getRuleContext(0, VarRefContext);
    }
    Kin() {
        return this.getToken(jsoniqParser.Kin, 0);
    }
    exprSingle() {
        return this.getRuleContext(0, ExprSingleContext);
    }
    Kas() {
        return this.tryGetToken(jsoniqParser.Kas, 0);
    }
    sequenceType() {
        return this.tryGetRuleContext(0, SequenceTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_quantifiedExprVar;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterQuantifiedExprVar) {
            listener.enterQuantifiedExprVar(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuantifiedExprVar) {
            listener.exitQuantifiedExprVar(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQuantifiedExprVar) {
            return visitor.visitQuantifiedExprVar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SwitchExprContext extends ParserRuleContext {
    Kswitch() {
        return this.getToken(jsoniqParser.Kswitch, 0);
    }
    Kdefault() {
        return this.getToken(jsoniqParser.Kdefault, 0);
    }
    Kreturn() {
        return this.getToken(jsoniqParser.Kreturn, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    exprSingle() {
        return this.getRuleContext(0, ExprSingleContext);
    }
    switchCaseClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(SwitchCaseClauseContext);
        }
        else {
            return this.getRuleContext(i, SwitchCaseClauseContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._cases = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_switchExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSwitchExpr) {
            listener.enterSwitchExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSwitchExpr) {
            listener.exitSwitchExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSwitchExpr) {
            return visitor.visitSwitchExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SwitchCaseClauseContext extends ParserRuleContext {
    Kreturn() {
        return this.getToken(jsoniqParser.Kreturn, 0);
    }
    exprSingle(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprSingleContext);
        }
        else {
            return this.getRuleContext(i, ExprSingleContext);
        }
    }
    Kcase(i) {
        if (i === undefined) {
            return this.getTokens(jsoniqParser.Kcase);
        }
        else {
            return this.getToken(jsoniqParser.Kcase, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._cond = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_switchCaseClause;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSwitchCaseClause) {
            listener.enterSwitchCaseClause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSwitchCaseClause) {
            listener.exitSwitchCaseClause(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSwitchCaseClause) {
            return visitor.visitSwitchCaseClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TypeSwitchExprContext extends ParserRuleContext {
    Ktypeswitch() {
        return this.getToken(jsoniqParser.Ktypeswitch, 0);
    }
    Kdefault() {
        return this.getToken(jsoniqParser.Kdefault, 0);
    }
    Kreturn() {
        return this.getToken(jsoniqParser.Kreturn, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    exprSingle() {
        return this.getRuleContext(0, ExprSingleContext);
    }
    caseClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(CaseClauseContext);
        }
        else {
            return this.getRuleContext(i, CaseClauseContext);
        }
    }
    varRef() {
        return this.tryGetRuleContext(0, VarRefContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._cses = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_typeSwitchExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeSwitchExpr) {
            listener.enterTypeSwitchExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeSwitchExpr) {
            listener.exitTypeSwitchExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeSwitchExpr) {
            return visitor.visitTypeSwitchExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CaseClauseContext extends ParserRuleContext {
    Kcase() {
        return this.getToken(jsoniqParser.Kcase, 0);
    }
    Kreturn() {
        return this.getToken(jsoniqParser.Kreturn, 0);
    }
    sequenceType(i) {
        if (i === undefined) {
            return this.getRuleContexts(SequenceTypeContext);
        }
        else {
            return this.getRuleContext(i, SequenceTypeContext);
        }
    }
    exprSingle() {
        return this.getRuleContext(0, ExprSingleContext);
    }
    Kas() {
        return this.tryGetToken(jsoniqParser.Kas, 0);
    }
    varRef() {
        return this.tryGetRuleContext(0, VarRefContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._union = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_caseClause;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCaseClause) {
            listener.enterCaseClause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCaseClause) {
            listener.exitCaseClause(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCaseClause) {
            return visitor.visitCaseClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class IfExprContext extends ParserRuleContext {
    Kif() {
        return this.getToken(jsoniqParser.Kif, 0);
    }
    Kthen() {
        return this.getToken(jsoniqParser.Kthen, 0);
    }
    Kelse() {
        return this.getToken(jsoniqParser.Kelse, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    exprSingle(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprSingleContext);
        }
        else {
            return this.getRuleContext(i, ExprSingleContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_ifExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIfExpr) {
            listener.enterIfExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIfExpr) {
            listener.exitIfExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIfExpr) {
            return visitor.visitIfExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TryCatchExprContext extends ParserRuleContext {
    Ktry() {
        return this.getToken(jsoniqParser.Ktry, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    catchClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(CatchClauseContext);
        }
        else {
            return this.getRuleContext(i, CatchClauseContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._catches = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_tryCatchExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTryCatchExpr) {
            listener.enterTryCatchExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTryCatchExpr) {
            listener.exitTryCatchExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTryCatchExpr) {
            return visitor.visitTryCatchExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CatchClauseContext extends ParserRuleContext {
    Kcatch() {
        return this.getToken(jsoniqParser.Kcatch, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    qname(i) {
        if (i === undefined) {
            return this.getRuleContexts(QnameContext);
        }
        else {
            return this.getRuleContext(i, QnameContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._jokers = [];
        this._errors = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_catchClause;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCatchClause) {
            listener.enterCatchClause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCatchClause) {
            listener.exitCatchClause(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCatchClause) {
            return visitor.visitCatchClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class OrExprContext extends ParserRuleContext {
    andExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(AndExprContext);
        }
        else {
            return this.getRuleContext(i, AndExprContext);
        }
    }
    Kor(i) {
        if (i === undefined) {
            return this.getTokens(jsoniqParser.Kor);
        }
        else {
            return this.getToken(jsoniqParser.Kor, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._rhs = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_orExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterOrExpr) {
            listener.enterOrExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOrExpr) {
            listener.exitOrExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOrExpr) {
            return visitor.visitOrExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AndExprContext extends ParserRuleContext {
    notExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(NotExprContext);
        }
        else {
            return this.getRuleContext(i, NotExprContext);
        }
    }
    Kand(i) {
        if (i === undefined) {
            return this.getTokens(jsoniqParser.Kand);
        }
        else {
            return this.getToken(jsoniqParser.Kand, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._rhs = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_andExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAndExpr) {
            listener.enterAndExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAndExpr) {
            listener.exitAndExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAndExpr) {
            return visitor.visitAndExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NotExprContext extends ParserRuleContext {
    comparisonExpr() {
        return this.getRuleContext(0, ComparisonExprContext);
    }
    Knot() {
        return this.tryGetToken(jsoniqParser.Knot, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._op = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_notExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterNotExpr) {
            listener.enterNotExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNotExpr) {
            listener.exitNotExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNotExpr) {
            return visitor.visitNotExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ComparisonExprContext extends ParserRuleContext {
    stringConcatExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(StringConcatExprContext);
        }
        else {
            return this.getRuleContext(i, StringConcatExprContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._op = [];
        this._rhs = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_comparisonExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterComparisonExpr) {
            listener.enterComparisonExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitComparisonExpr) {
            listener.exitComparisonExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitComparisonExpr) {
            return visitor.visitComparisonExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class StringConcatExprContext extends ParserRuleContext {
    rangeExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(RangeExprContext);
        }
        else {
            return this.getRuleContext(i, RangeExprContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._rhs = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_stringConcatExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStringConcatExpr) {
            listener.enterStringConcatExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStringConcatExpr) {
            listener.exitStringConcatExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStringConcatExpr) {
            return visitor.visitStringConcatExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class RangeExprContext extends ParserRuleContext {
    additiveExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(AdditiveExprContext);
        }
        else {
            return this.getRuleContext(i, AdditiveExprContext);
        }
    }
    Kto() {
        return this.tryGetToken(jsoniqParser.Kto, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._rhs = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_rangeExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterRangeExpr) {
            listener.enterRangeExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRangeExpr) {
            listener.exitRangeExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRangeExpr) {
            return visitor.visitRangeExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AdditiveExprContext extends ParserRuleContext {
    multiplicativeExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(MultiplicativeExprContext);
        }
        else {
            return this.getRuleContext(i, MultiplicativeExprContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._op = [];
        this._rhs = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_additiveExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAdditiveExpr) {
            listener.enterAdditiveExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAdditiveExpr) {
            listener.exitAdditiveExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAdditiveExpr) {
            return visitor.visitAdditiveExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class MultiplicativeExprContext extends ParserRuleContext {
    instanceOfExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(InstanceOfExprContext);
        }
        else {
            return this.getRuleContext(i, InstanceOfExprContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._op = [];
        this._rhs = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_multiplicativeExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMultiplicativeExpr) {
            listener.enterMultiplicativeExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMultiplicativeExpr) {
            listener.exitMultiplicativeExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMultiplicativeExpr) {
            return visitor.visitMultiplicativeExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InstanceOfExprContext extends ParserRuleContext {
    isStaticallyExpr() {
        return this.getRuleContext(0, IsStaticallyExprContext);
    }
    Kinstance() {
        return this.tryGetToken(jsoniqParser.Kinstance, 0);
    }
    Kof() {
        return this.tryGetToken(jsoniqParser.Kof, 0);
    }
    sequenceType() {
        return this.tryGetRuleContext(0, SequenceTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_instanceOfExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterInstanceOfExpr) {
            listener.enterInstanceOfExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInstanceOfExpr) {
            listener.exitInstanceOfExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInstanceOfExpr) {
            return visitor.visitInstanceOfExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class IsStaticallyExprContext extends ParserRuleContext {
    treatExpr() {
        return this.getRuleContext(0, TreatExprContext);
    }
    Kis() {
        return this.tryGetToken(jsoniqParser.Kis, 0);
    }
    Kstatically() {
        return this.tryGetToken(jsoniqParser.Kstatically, 0);
    }
    sequenceType() {
        return this.tryGetRuleContext(0, SequenceTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_isStaticallyExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIsStaticallyExpr) {
            listener.enterIsStaticallyExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIsStaticallyExpr) {
            listener.exitIsStaticallyExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIsStaticallyExpr) {
            return visitor.visitIsStaticallyExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TreatExprContext extends ParserRuleContext {
    castableExpr() {
        return this.getRuleContext(0, CastableExprContext);
    }
    Ktreat() {
        return this.tryGetToken(jsoniqParser.Ktreat, 0);
    }
    Kas() {
        return this.tryGetToken(jsoniqParser.Kas, 0);
    }
    sequenceType() {
        return this.tryGetRuleContext(0, SequenceTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_treatExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTreatExpr) {
            listener.enterTreatExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTreatExpr) {
            listener.exitTreatExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTreatExpr) {
            return visitor.visitTreatExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CastableExprContext extends ParserRuleContext {
    castExpr() {
        return this.getRuleContext(0, CastExprContext);
    }
    Kcastable() {
        return this.tryGetToken(jsoniqParser.Kcastable, 0);
    }
    Kas() {
        return this.tryGetToken(jsoniqParser.Kas, 0);
    }
    singleType() {
        return this.tryGetRuleContext(0, SingleTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_castableExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCastableExpr) {
            listener.enterCastableExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCastableExpr) {
            listener.exitCastableExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCastableExpr) {
            return visitor.visitCastableExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CastExprContext extends ParserRuleContext {
    arrowExpr() {
        return this.getRuleContext(0, ArrowExprContext);
    }
    Kcast() {
        return this.tryGetToken(jsoniqParser.Kcast, 0);
    }
    Kas() {
        return this.tryGetToken(jsoniqParser.Kas, 0);
    }
    singleType() {
        return this.tryGetRuleContext(0, SingleTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_castExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCastExpr) {
            listener.enterCastExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCastExpr) {
            listener.exitCastExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCastExpr) {
            return visitor.visitCastExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArrowExprContext extends ParserRuleContext {
    unaryExpr() {
        return this.getRuleContext(0, UnaryExprContext);
    }
    arrowFunctionSpecifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(ArrowFunctionSpecifierContext);
        }
        else {
            return this.getRuleContext(i, ArrowFunctionSpecifierContext);
        }
    }
    argumentList(i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentListContext);
        }
        else {
            return this.getRuleContext(i, ArgumentListContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._function = [];
        this._arguments = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_arrowExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterArrowExpr) {
            listener.enterArrowExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArrowExpr) {
            listener.exitArrowExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArrowExpr) {
            return visitor.visitArrowExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArrowFunctionSpecifierContext extends ParserRuleContext {
    qname() {
        return this.tryGetRuleContext(0, QnameContext);
    }
    varRef() {
        return this.tryGetRuleContext(0, VarRefContext);
    }
    parenthesizedExpr() {
        return this.tryGetRuleContext(0, ParenthesizedExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_arrowFunctionSpecifier;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterArrowFunctionSpecifier) {
            listener.enterArrowFunctionSpecifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArrowFunctionSpecifier) {
            listener.exitArrowFunctionSpecifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArrowFunctionSpecifier) {
            return visitor.visitArrowFunctionSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnaryExprContext extends ParserRuleContext {
    valueExpr() {
        return this.getRuleContext(0, ValueExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._op = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_unaryExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterUnaryExpr) {
            listener.enterUnaryExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnaryExpr) {
            listener.exitUnaryExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnaryExpr) {
            return visitor.visitUnaryExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ValueExprContext extends ParserRuleContext {
    simpleMapExpr() {
        return this.tryGetRuleContext(0, SimpleMapExprContext);
    }
    validateExpr() {
        return this.tryGetRuleContext(0, ValidateExprContext);
    }
    annotateExpr() {
        return this.tryGetRuleContext(0, AnnotateExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_valueExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterValueExpr) {
            listener.enterValueExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValueExpr) {
            listener.exitValueExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitValueExpr) {
            return visitor.visitValueExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ValidateExprContext extends ParserRuleContext {
    Kvalidate() {
        return this.getToken(jsoniqParser.Kvalidate, 0);
    }
    Ktype() {
        return this.getToken(jsoniqParser.Ktype, 0);
    }
    sequenceType() {
        return this.getRuleContext(0, SequenceTypeContext);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_validateExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterValidateExpr) {
            listener.enterValidateExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValidateExpr) {
            listener.exitValidateExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitValidateExpr) {
            return visitor.visitValidateExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AnnotateExprContext extends ParserRuleContext {
    Kannotate() {
        return this.getToken(jsoniqParser.Kannotate, 0);
    }
    Ktype() {
        return this.getToken(jsoniqParser.Ktype, 0);
    }
    sequenceType() {
        return this.getRuleContext(0, SequenceTypeContext);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_annotateExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotateExpr) {
            listener.enterAnnotateExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotateExpr) {
            listener.exitAnnotateExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotateExpr) {
            return visitor.visitAnnotateExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SimpleMapExprContext extends ParserRuleContext {
    postFixExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(PostFixExprContext);
        }
        else {
            return this.getRuleContext(i, PostFixExprContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._map_expr = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_simpleMapExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSimpleMapExpr) {
            listener.enterSimpleMapExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSimpleMapExpr) {
            listener.exitSimpleMapExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSimpleMapExpr) {
            return visitor.visitSimpleMapExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PostFixExprContext extends ParserRuleContext {
    primaryExpr() {
        return this.getRuleContext(0, PrimaryExprContext);
    }
    arrayLookup(i) {
        if (i === undefined) {
            return this.getRuleContexts(ArrayLookupContext);
        }
        else {
            return this.getRuleContext(i, ArrayLookupContext);
        }
    }
    predicate(i) {
        if (i === undefined) {
            return this.getRuleContexts(PredicateContext);
        }
        else {
            return this.getRuleContext(i, PredicateContext);
        }
    }
    objectLookup(i) {
        if (i === undefined) {
            return this.getRuleContexts(ObjectLookupContext);
        }
        else {
            return this.getRuleContext(i, ObjectLookupContext);
        }
    }
    arrayUnboxing(i) {
        if (i === undefined) {
            return this.getRuleContexts(ArrayUnboxingContext);
        }
        else {
            return this.getRuleContext(i, ArrayUnboxingContext);
        }
    }
    argumentList(i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentListContext);
        }
        else {
            return this.getRuleContext(i, ArgumentListContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_postFixExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPostFixExpr) {
            listener.enterPostFixExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPostFixExpr) {
            listener.exitPostFixExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPostFixExpr) {
            return visitor.visitPostFixExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArrayLookupContext extends ParserRuleContext {
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_arrayLookup;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterArrayLookup) {
            listener.enterArrayLookup(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArrayLookup) {
            listener.exitArrayLookup(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArrayLookup) {
            return visitor.visitArrayLookup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArrayUnboxingContext extends ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_arrayUnboxing;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterArrayUnboxing) {
            listener.enterArrayUnboxing(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArrayUnboxing) {
            listener.exitArrayUnboxing(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArrayUnboxing) {
            return visitor.visitArrayUnboxing(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PredicateContext extends ParserRuleContext {
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_predicate;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPredicate) {
            listener.enterPredicate(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPredicate) {
            listener.exitPredicate(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPredicate) {
            return visitor.visitPredicate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ObjectLookupContext extends ParserRuleContext {
    keyWords() {
        return this.tryGetRuleContext(0, KeyWordsContext);
    }
    stringLiteral() {
        return this.tryGetRuleContext(0, StringLiteralContext);
    }
    NCName() {
        return this.tryGetToken(jsoniqParser.NCName, 0);
    }
    parenthesizedExpr() {
        return this.tryGetRuleContext(0, ParenthesizedExprContext);
    }
    varRef() {
        return this.tryGetRuleContext(0, VarRefContext);
    }
    contextItemExpr() {
        return this.tryGetRuleContext(0, ContextItemExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_objectLookup;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterObjectLookup) {
            listener.enterObjectLookup(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitObjectLookup) {
            listener.exitObjectLookup(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitObjectLookup) {
            return visitor.visitObjectLookup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PrimaryExprContext extends ParserRuleContext {
    NullLiteral() {
        return this.tryGetToken(jsoniqParser.NullLiteral, 0);
    }
    Ktrue() {
        return this.tryGetToken(jsoniqParser.Ktrue, 0);
    }
    Kfalse() {
        return this.tryGetToken(jsoniqParser.Kfalse, 0);
    }
    Literal() {
        return this.tryGetToken(jsoniqParser.Literal, 0);
    }
    stringLiteral() {
        return this.tryGetRuleContext(0, StringLiteralContext);
    }
    varRef() {
        return this.tryGetRuleContext(0, VarRefContext);
    }
    parenthesizedExpr() {
        return this.tryGetRuleContext(0, ParenthesizedExprContext);
    }
    contextItemExpr() {
        return this.tryGetRuleContext(0, ContextItemExprContext);
    }
    objectConstructor() {
        return this.tryGetRuleContext(0, ObjectConstructorContext);
    }
    functionCall() {
        return this.tryGetRuleContext(0, FunctionCallContext);
    }
    orderedExpr() {
        return this.tryGetRuleContext(0, OrderedExprContext);
    }
    unorderedExpr() {
        return this.tryGetRuleContext(0, UnorderedExprContext);
    }
    arrayConstructor() {
        return this.tryGetRuleContext(0, ArrayConstructorContext);
    }
    functionItemExpr() {
        return this.tryGetRuleContext(0, FunctionItemExprContext);
    }
    blockExpr() {
        return this.tryGetRuleContext(0, BlockExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_primaryExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPrimaryExpr) {
            listener.enterPrimaryExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPrimaryExpr) {
            listener.exitPrimaryExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPrimaryExpr) {
            return visitor.visitPrimaryExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class BlockExprContext extends ParserRuleContext {
    statementsAndExpr() {
        return this.getRuleContext(0, StatementsAndExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_blockExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterBlockExpr) {
            listener.enterBlockExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBlockExpr) {
            listener.exitBlockExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBlockExpr) {
            return visitor.visitBlockExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class VarRefContext extends ParserRuleContext {
    qname() {
        return this.getRuleContext(0, QnameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_varRef;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterVarRef) {
            listener.enterVarRef(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVarRef) {
            listener.exitVarRef(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVarRef) {
            return visitor.visitVarRef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParenthesizedExprContext extends ParserRuleContext {
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_parenthesizedExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterParenthesizedExpr) {
            listener.enterParenthesizedExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParenthesizedExpr) {
            listener.exitParenthesizedExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParenthesizedExpr) {
            return visitor.visitParenthesizedExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ContextItemExprContext extends ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_contextItemExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterContextItemExpr) {
            listener.enterContextItemExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitContextItemExpr) {
            listener.exitContextItemExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitContextItemExpr) {
            return visitor.visitContextItemExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class OrderedExprContext extends ParserRuleContext {
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_orderedExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterOrderedExpr) {
            listener.enterOrderedExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOrderedExpr) {
            listener.exitOrderedExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOrderedExpr) {
            return visitor.visitOrderedExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnorderedExprContext extends ParserRuleContext {
    Kunordered() {
        return this.getToken(jsoniqParser.Kunordered, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_unorderedExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterUnorderedExpr) {
            listener.enterUnorderedExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnorderedExpr) {
            listener.exitUnorderedExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnorderedExpr) {
            return visitor.visitUnorderedExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionCallContext extends ParserRuleContext {
    argumentList() {
        return this.getRuleContext(0, ArgumentListContext);
    }
    qname() {
        return this.getRuleContext(0, QnameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_functionCall;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionCall) {
            listener.enterFunctionCall(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionCall) {
            listener.exitFunctionCall(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArgumentListContext extends ParserRuleContext {
    argument(i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentContext);
        }
        else {
            return this.getRuleContext(i, ArgumentContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._args = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_argumentList;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterArgumentList) {
            listener.enterArgumentList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArgumentList) {
            listener.exitArgumentList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArgumentList) {
            return visitor.visitArgumentList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArgumentContext extends ParserRuleContext {
    exprSingle() {
        return this.tryGetRuleContext(0, ExprSingleContext);
    }
    ArgumentPlaceholder() {
        return this.tryGetToken(jsoniqParser.ArgumentPlaceholder, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_argument;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterArgument) {
            listener.enterArgument(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArgument) {
            listener.exitArgument(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArgument) {
            return visitor.visitArgument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionItemExprContext extends ParserRuleContext {
    namedFunctionRef() {
        return this.tryGetRuleContext(0, NamedFunctionRefContext);
    }
    inlineFunctionExpr() {
        return this.tryGetRuleContext(0, InlineFunctionExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_functionItemExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionItemExpr) {
            listener.enterFunctionItemExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionItemExpr) {
            listener.exitFunctionItemExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionItemExpr) {
            return visitor.visitFunctionItemExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NamedFunctionRefContext extends ParserRuleContext {
    qname() {
        return this.getRuleContext(0, QnameContext);
    }
    Literal() {
        return this.getToken(jsoniqParser.Literal, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_namedFunctionRef;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterNamedFunctionRef) {
            listener.enterNamedFunctionRef(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNamedFunctionRef) {
            listener.exitNamedFunctionRef(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNamedFunctionRef) {
            return visitor.visitNamedFunctionRef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InlineFunctionExprContext extends ParserRuleContext {
    annotations() {
        return this.getRuleContext(0, AnnotationsContext);
    }
    paramList() {
        return this.tryGetRuleContext(0, ParamListContext);
    }
    Kas() {
        return this.tryGetToken(jsoniqParser.Kas, 0);
    }
    sequenceType() {
        return this.tryGetRuleContext(0, SequenceTypeContext);
    }
    statementsAndOptionalExpr() {
        return this.tryGetRuleContext(0, StatementsAndOptionalExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_inlineFunctionExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterInlineFunctionExpr) {
            listener.enterInlineFunctionExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInlineFunctionExpr) {
            listener.exitInlineFunctionExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInlineFunctionExpr) {
            return visitor.visitInlineFunctionExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InsertExprContext extends ParserRuleContext {
    Kinsert() {
        return this.getToken(jsoniqParser.Kinsert, 0);
    }
    Kjson() {
        return this.getToken(jsoniqParser.Kjson, 0);
    }
    Kinto() {
        return this.getToken(jsoniqParser.Kinto, 0);
    }
    exprSingle(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprSingleContext);
        }
        else {
            return this.getRuleContext(i, ExprSingleContext);
        }
    }
    Kat() {
        return this.tryGetToken(jsoniqParser.Kat, 0);
    }
    Kposition() {
        return this.tryGetToken(jsoniqParser.Kposition, 0);
    }
    pairConstructor(i) {
        if (i === undefined) {
            return this.getRuleContexts(PairConstructorContext);
        }
        else {
            return this.getRuleContext(i, PairConstructorContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_insertExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterInsertExpr) {
            listener.enterInsertExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInsertExpr) {
            listener.exitInsertExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInsertExpr) {
            return visitor.visitInsertExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DeleteExprContext extends ParserRuleContext {
    Kdelete() {
        return this.getToken(jsoniqParser.Kdelete, 0);
    }
    Kjson() {
        return this.getToken(jsoniqParser.Kjson, 0);
    }
    updateLocator() {
        return this.getRuleContext(0, UpdateLocatorContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_deleteExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterDeleteExpr) {
            listener.enterDeleteExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDeleteExpr) {
            listener.exitDeleteExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDeleteExpr) {
            return visitor.visitDeleteExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class RenameExprContext extends ParserRuleContext {
    Krename() {
        return this.getToken(jsoniqParser.Krename, 0);
    }
    Kjson() {
        return this.getToken(jsoniqParser.Kjson, 0);
    }
    updateLocator() {
        return this.getRuleContext(0, UpdateLocatorContext);
    }
    Kas() {
        return this.getToken(jsoniqParser.Kas, 0);
    }
    exprSingle() {
        return this.getRuleContext(0, ExprSingleContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_renameExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterRenameExpr) {
            listener.enterRenameExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRenameExpr) {
            listener.exitRenameExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRenameExpr) {
            return visitor.visitRenameExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ReplaceExprContext extends ParserRuleContext {
    Kreplace() {
        return this.getToken(jsoniqParser.Kreplace, 0);
    }
    Kjson() {
        return this.getToken(jsoniqParser.Kjson, 0);
    }
    Kvalue() {
        return this.getToken(jsoniqParser.Kvalue, 0);
    }
    Kof() {
        return this.getToken(jsoniqParser.Kof, 0);
    }
    updateLocator() {
        return this.getRuleContext(0, UpdateLocatorContext);
    }
    Kwith() {
        return this.getToken(jsoniqParser.Kwith, 0);
    }
    exprSingle() {
        return this.getRuleContext(0, ExprSingleContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_replaceExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterReplaceExpr) {
            listener.enterReplaceExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitReplaceExpr) {
            listener.exitReplaceExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitReplaceExpr) {
            return visitor.visitReplaceExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TransformExprContext extends ParserRuleContext {
    Kcopy() {
        return this.getToken(jsoniqParser.Kcopy, 0);
    }
    Kjson() {
        return this.getToken(jsoniqParser.Kjson, 0);
    }
    copyDecl(i) {
        if (i === undefined) {
            return this.getRuleContexts(CopyDeclContext);
        }
        else {
            return this.getRuleContext(i, CopyDeclContext);
        }
    }
    Kmodify() {
        return this.getToken(jsoniqParser.Kmodify, 0);
    }
    Kreturn() {
        return this.getToken(jsoniqParser.Kreturn, 0);
    }
    exprSingle(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprSingleContext);
        }
        else {
            return this.getRuleContext(i, ExprSingleContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_transformExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTransformExpr) {
            listener.enterTransformExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTransformExpr) {
            listener.exitTransformExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTransformExpr) {
            return visitor.visitTransformExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AppendExprContext extends ParserRuleContext {
    Kappend() {
        return this.getToken(jsoniqParser.Kappend, 0);
    }
    Kjson() {
        return this.getToken(jsoniqParser.Kjson, 0);
    }
    Kinto() {
        return this.getToken(jsoniqParser.Kinto, 0);
    }
    exprSingle(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprSingleContext);
        }
        else {
            return this.getRuleContext(i, ExprSingleContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_appendExpr;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAppendExpr) {
            listener.enterAppendExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAppendExpr) {
            listener.exitAppendExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAppendExpr) {
            return visitor.visitAppendExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UpdateLocatorContext extends ParserRuleContext {
    primaryExpr() {
        return this.getRuleContext(0, PrimaryExprContext);
    }
    arrayLookup(i) {
        if (i === undefined) {
            return this.getRuleContexts(ArrayLookupContext);
        }
        else {
            return this.getRuleContext(i, ArrayLookupContext);
        }
    }
    objectLookup(i) {
        if (i === undefined) {
            return this.getRuleContexts(ObjectLookupContext);
        }
        else {
            return this.getRuleContext(i, ObjectLookupContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_updateLocator;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterUpdateLocator) {
            listener.enterUpdateLocator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUpdateLocator) {
            listener.exitUpdateLocator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUpdateLocator) {
            return visitor.visitUpdateLocator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CopyDeclContext extends ParserRuleContext {
    varRef() {
        return this.getRuleContext(0, VarRefContext);
    }
    exprSingle() {
        return this.getRuleContext(0, ExprSingleContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_copyDecl;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCopyDecl) {
            listener.enterCopyDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCopyDecl) {
            listener.exitCopyDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCopyDecl) {
            return visitor.visitCopyDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SequenceTypeContext extends ParserRuleContext {
    itemType() {
        return this.tryGetRuleContext(0, ItemTypeContext);
    }
    ArgumentPlaceholder() {
        return this.tryGetToken(jsoniqParser.ArgumentPlaceholder, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._question = [];
        this._star = [];
        this._plus = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_sequenceType;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSequenceType) {
            listener.enterSequenceType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSequenceType) {
            listener.exitSequenceType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSequenceType) {
            return visitor.visitSequenceType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ObjectConstructorContext extends ParserRuleContext {
    pairConstructor(i) {
        if (i === undefined) {
            return this.getRuleContexts(PairConstructorContext);
        }
        else {
            return this.getRuleContext(i, PairConstructorContext);
        }
    }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._merge_operator = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_objectConstructor;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterObjectConstructor) {
            listener.enterObjectConstructor(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitObjectConstructor) {
            listener.exitObjectConstructor(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitObjectConstructor) {
            return visitor.visitObjectConstructor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ItemTypeContext extends ParserRuleContext {
    qname() {
        return this.tryGetRuleContext(0, QnameContext);
    }
    NullLiteral() {
        return this.tryGetToken(jsoniqParser.NullLiteral, 0);
    }
    functionTest() {
        return this.tryGetRuleContext(0, FunctionTestContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_itemType;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterItemType) {
            listener.enterItemType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitItemType) {
            listener.exitItemType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitItemType) {
            return visitor.visitItemType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionTestContext extends ParserRuleContext {
    anyFunctionTest() {
        return this.tryGetRuleContext(0, AnyFunctionTestContext);
    }
    typedFunctionTest() {
        return this.tryGetRuleContext(0, TypedFunctionTestContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_functionTest;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionTest) {
            listener.enterFunctionTest(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionTest) {
            listener.exitFunctionTest(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionTest) {
            return visitor.visitFunctionTest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AnyFunctionTestContext extends ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_anyFunctionTest;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAnyFunctionTest) {
            listener.enterAnyFunctionTest(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnyFunctionTest) {
            listener.exitAnyFunctionTest(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnyFunctionTest) {
            return visitor.visitAnyFunctionTest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TypedFunctionTestContext extends ParserRuleContext {
    Kas() {
        return this.getToken(jsoniqParser.Kas, 0);
    }
    sequenceType(i) {
        if (i === undefined) {
            return this.getRuleContexts(SequenceTypeContext);
        }
        else {
            return this.getRuleContext(i, SequenceTypeContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._st = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_typedFunctionTest;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTypedFunctionTest) {
            listener.enterTypedFunctionTest(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypedFunctionTest) {
            listener.exitTypedFunctionTest(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypedFunctionTest) {
            return visitor.visitTypedFunctionTest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SingleTypeContext extends ParserRuleContext {
    itemType() {
        return this.getRuleContext(0, ItemTypeContext);
    }
    ArgumentPlaceholder() {
        return this.tryGetToken(jsoniqParser.ArgumentPlaceholder, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._question = [];
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_singleType;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSingleType) {
            listener.enterSingleType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSingleType) {
            listener.exitSingleType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSingleType) {
            return visitor.visitSingleType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PairConstructorContext extends ParserRuleContext {
    ArgumentPlaceholder() {
        return this.getToken(jsoniqParser.ArgumentPlaceholder, 0);
    }
    exprSingle(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprSingleContext);
        }
        else {
            return this.getRuleContext(i, ExprSingleContext);
        }
    }
    NCName() {
        return this.tryGetToken(jsoniqParser.NCName, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_pairConstructor;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPairConstructor) {
            listener.enterPairConstructor(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPairConstructor) {
            listener.exitPairConstructor(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPairConstructor) {
            return visitor.visitPairConstructor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArrayConstructorContext extends ParserRuleContext {
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_arrayConstructor;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterArrayConstructor) {
            listener.enterArrayConstructor(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArrayConstructor) {
            listener.exitArrayConstructor(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArrayConstructor) {
            return visitor.visitArrayConstructor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UriLiteralContext extends ParserRuleContext {
    stringLiteral() {
        return this.getRuleContext(0, StringLiteralContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_uriLiteral;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterUriLiteral) {
            listener.enterUriLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUriLiteral) {
            listener.exitUriLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUriLiteral) {
            return visitor.visitUriLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class StringLiteralContext extends ParserRuleContext {
    STRING() {
        return this.getToken(jsoniqParser.STRING, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_stringLiteral;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStringLiteral) {
            listener.enterStringLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStringLiteral) {
            listener.exitStringLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStringLiteral) {
            return visitor.visitStringLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class KeyWordsContext extends ParserRuleContext {
    Kjsoniq() {
        return this.tryGetToken(jsoniqParser.Kjsoniq, 0);
    }
    Kand() {
        return this.tryGetToken(jsoniqParser.Kand, 0);
    }
    Kcast() {
        return this.tryGetToken(jsoniqParser.Kcast, 0);
    }
    Kcastable() {
        return this.tryGetToken(jsoniqParser.Kcastable, 0);
    }
    Kcollation() {
        return this.tryGetToken(jsoniqParser.Kcollation, 0);
    }
    Kcontext() {
        return this.tryGetToken(jsoniqParser.Kcontext, 0);
    }
    Kdeclare() {
        return this.tryGetToken(jsoniqParser.Kdeclare, 0);
    }
    Kdefault() {
        return this.tryGetToken(jsoniqParser.Kdefault, 0);
    }
    Kelse() {
        return this.tryGetToken(jsoniqParser.Kelse, 0);
    }
    Kgreatest() {
        return this.tryGetToken(jsoniqParser.Kgreatest, 0);
    }
    Kinstance() {
        return this.tryGetToken(jsoniqParser.Kinstance, 0);
    }
    Kstatically() {
        return this.tryGetToken(jsoniqParser.Kstatically, 0);
    }
    Kis() {
        return this.tryGetToken(jsoniqParser.Kis, 0);
    }
    Kitem() {
        return this.tryGetToken(jsoniqParser.Kitem, 0);
    }
    Kleast() {
        return this.tryGetToken(jsoniqParser.Kleast, 0);
    }
    Knot() {
        return this.tryGetToken(jsoniqParser.Knot, 0);
    }
    NullLiteral() {
        return this.tryGetToken(jsoniqParser.NullLiteral, 0);
    }
    Kof() {
        return this.tryGetToken(jsoniqParser.Kof, 0);
    }
    Kor() {
        return this.tryGetToken(jsoniqParser.Kor, 0);
    }
    Kthen() {
        return this.tryGetToken(jsoniqParser.Kthen, 0);
    }
    Kto() {
        return this.tryGetToken(jsoniqParser.Kto, 0);
    }
    Ktreat() {
        return this.tryGetToken(jsoniqParser.Ktreat, 0);
    }
    Ktypeswitch() {
        return this.tryGetToken(jsoniqParser.Ktypeswitch, 0);
    }
    Kversion() {
        return this.tryGetToken(jsoniqParser.Kversion, 0);
    }
    Kswitch() {
        return this.tryGetToken(jsoniqParser.Kswitch, 0);
    }
    Kcase() {
        return this.tryGetToken(jsoniqParser.Kcase, 0);
    }
    Ktry() {
        return this.tryGetToken(jsoniqParser.Ktry, 0);
    }
    Kcatch() {
        return this.tryGetToken(jsoniqParser.Kcatch, 0);
    }
    Ksome() {
        return this.tryGetToken(jsoniqParser.Ksome, 0);
    }
    Kevery() {
        return this.tryGetToken(jsoniqParser.Kevery, 0);
    }
    Ksatisfies() {
        return this.tryGetToken(jsoniqParser.Ksatisfies, 0);
    }
    Kstable() {
        return this.tryGetToken(jsoniqParser.Kstable, 0);
    }
    Kvariable() {
        return this.tryGetToken(jsoniqParser.Kvariable, 0);
    }
    Kascending() {
        return this.tryGetToken(jsoniqParser.Kascending, 0);
    }
    Kdescending() {
        return this.tryGetToken(jsoniqParser.Kdescending, 0);
    }
    Kempty() {
        return this.tryGetToken(jsoniqParser.Kempty, 0);
    }
    Kallowing() {
        return this.tryGetToken(jsoniqParser.Kallowing, 0);
    }
    Kas() {
        return this.tryGetToken(jsoniqParser.Kas, 0);
    }
    Kat() {
        return this.tryGetToken(jsoniqParser.Kat, 0);
    }
    Kin() {
        return this.tryGetToken(jsoniqParser.Kin, 0);
    }
    Kif() {
        return this.tryGetToken(jsoniqParser.Kif, 0);
    }
    Kfor() {
        return this.tryGetToken(jsoniqParser.Kfor, 0);
    }
    Klet() {
        return this.tryGetToken(jsoniqParser.Klet, 0);
    }
    Kwhere() {
        return this.tryGetToken(jsoniqParser.Kwhere, 0);
    }
    Kgroup() {
        return this.tryGetToken(jsoniqParser.Kgroup, 0);
    }
    Kby() {
        return this.tryGetToken(jsoniqParser.Kby, 0);
    }
    Korder() {
        return this.tryGetToken(jsoniqParser.Korder, 0);
    }
    Kcount() {
        return this.tryGetToken(jsoniqParser.Kcount, 0);
    }
    Kreturn() {
        return this.tryGetToken(jsoniqParser.Kreturn, 0);
    }
    Kunordered() {
        return this.tryGetToken(jsoniqParser.Kunordered, 0);
    }
    Ktrue() {
        return this.tryGetToken(jsoniqParser.Ktrue, 0);
    }
    Kfalse() {
        return this.tryGetToken(jsoniqParser.Kfalse, 0);
    }
    Ktype() {
        return this.tryGetToken(jsoniqParser.Ktype, 0);
    }
    Kinsert() {
        return this.tryGetToken(jsoniqParser.Kinsert, 0);
    }
    Kdelete() {
        return this.tryGetToken(jsoniqParser.Kdelete, 0);
    }
    Krename() {
        return this.tryGetToken(jsoniqParser.Krename, 0);
    }
    Kreplace() {
        return this.tryGetToken(jsoniqParser.Kreplace, 0);
    }
    Kappend() {
        return this.tryGetToken(jsoniqParser.Kappend, 0);
    }
    Kcopy() {
        return this.tryGetToken(jsoniqParser.Kcopy, 0);
    }
    Kmodify() {
        return this.tryGetToken(jsoniqParser.Kmodify, 0);
    }
    Kjson() {
        return this.tryGetToken(jsoniqParser.Kjson, 0);
    }
    Kinto() {
        return this.tryGetToken(jsoniqParser.Kinto, 0);
    }
    Kvalue() {
        return this.tryGetToken(jsoniqParser.Kvalue, 0);
    }
    Kwith() {
        return this.tryGetToken(jsoniqParser.Kwith, 0);
    }
    Kposition() {
        return this.tryGetToken(jsoniqParser.Kposition, 0);
    }
    Kvalidate() {
        return this.tryGetToken(jsoniqParser.Kvalidate, 0);
    }
    Kannotate() {
        return this.tryGetToken(jsoniqParser.Kannotate, 0);
    }
    Kbreak() {
        return this.tryGetToken(jsoniqParser.Kbreak, 0);
    }
    Kloop() {
        return this.tryGetToken(jsoniqParser.Kloop, 0);
    }
    Kcontinue() {
        return this.tryGetToken(jsoniqParser.Kcontinue, 0);
    }
    Kexit() {
        return this.tryGetToken(jsoniqParser.Kexit, 0);
    }
    Kreturning() {
        return this.tryGetToken(jsoniqParser.Kreturning, 0);
    }
    Kwhile() {
        return this.tryGetToken(jsoniqParser.Kwhile, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return jsoniqParser.RULE_keyWords;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterKeyWords) {
            listener.enterKeyWords(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitKeyWords) {
            listener.exitKeyWords(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitKeyWords) {
            return visitor.visitKeyWords(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
//# sourceMappingURL=jsoniqParser.js.map